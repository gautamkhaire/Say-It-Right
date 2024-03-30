"use client";
import { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
const mimeType = "audio/wav";

import MicrophoneIcon from "../assets/icons/microphone.png";
import Image from "next/image";

import { Mic, MicOff } from "lucide-react";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { ClipboardMinus } from 'lucide-react';
import { toast } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AudioRecorder = ({ text, lesson_id }) => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const { user } = useKindeBrowserClient();
  const [activityResult, setActivityResult] = useState({
    match_score: "",
    fluency_score: "",
    intonation_score: "",
    speed:"",
    mispronounced_words:[]
  });
  const [isEnabled,setIsEnabled] = useState(false);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      // setAudioChunks([]);
    };
  };

  const handleSubmission = () => {
    const formData = new FormData();
    const audioBlob = new Blob(audioChunks, { type: mimeType });

    formData.append("audio", audioBlob);
    formData.append("text", text);
    formData.append("lesson_code", lesson_id);
    formData.append("user_id", user.id);
    formData.append("user_name", `${user.given_name} ${user.family_name}`);
    formData.append("user_email", user.email);

    // API CALL
    fetch("https://73cd-103-97-166-170.ngrok-free.app/text_check", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setActivityResult(result.data);
        setIsEnabled(true);
        setAudioChunks([]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setAudioChunks([]);
      });
  };

  const handleGenerate = () => {
    const formData = new FormData();
    formData.append("user_id",user.id);

    fetch("https://73cd-103-97-166-170.ngrok-free.app/generate_report", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setIsEnabled(true);
        toast("Report generation successful. Go to dashboard")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="w-full">
      {!permission ? (
        <div className="w-full flex flex-col justify-center items-center mt-8">
          <Image
            src={MicrophoneIcon}
            alt="Access Microphone"
            width={90}
            height={90}
            className="rounded-full mt-10"
          />
          <button onClick={getMicrophonePermission} type="button">
            Get Microphone
          </button>
        </div>
      ) : null}

      {permission && recordingStatus === "inactive" ? (
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={startRecording}
            type="button"
            className="flex flex-col justify-center items-center"
          >
            <MicOff size={70} />
            Start Recording
          </button>
        </div>
      ) : null}

      {recordingStatus === "recording" ? (
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={stopRecording}
            type="button"
            className="flex flex-col justify-center items-center"
          >
            <Mic size={70} />
            Stop Recording
          </button>
        </div>
      ) : null}

      {audio && (
        <div className="w-full flex justify-center items-center my-4 gap-4">
          <Button
            className="group flex items-center justify-center text-xl gap-2 h-[3rem] w-[8rem] bg-blue-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
            onClick={handleSubmission}
          >
            Analyze
            <FaPaperPlane className="text-md opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </Button>
        
          <Button className="bg-blue-500 rounded-full hover:scale-105 hover:bg-blue-600 text-2xl gap-2 font-semibold" disabled={!isEnabled}>
            <Dialog>
              <DialogTrigger>Result</DialogTrigger>
              <DialogContent className="rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-gray-600 font-bold text-2xl text-center flex flex-row items-center justify-center gap-2"><ClipboardMinus size={30}/> Your practice result</DialogTitle>
                  <DialogDescription>
                  {
                    activityResult && <div><p className="text-gray-500 font-semibold text-xl">Pronounication Score: <span className="text-2xl text-blue-500 font-bold">{parseFloat(activityResult.match_score).toFixed(2)}</span></p>
                    <p className="text-gray-500 font-semibold text-xl">Fluency Score: <span className="text-2xl text-blue-500 font-bold">{parseFloat(activityResult.fluency_score).toFixed(2)}</span></p>
                    <p className="text-gray-500 font-semibold text-xl">Intonation Score: <span className="text-2xl text-blue-500 font-bold">{parseFloat(activityResult.intonation_score).toFixed(2)}</span></p>
                    <p className="text-gray-500 font-semibold text-xl">Speed: <span className="text-2xl text-blue-500 font-bold">{parseFloat(activityResult.speed).toFixed(2)}</span> words/minute</p></div>
                  }
                  {
                    activityResult && <p className="text-gray-500 font-semibold text-xl mt-2 mb-1">Mispronounced words: </p>
                  }
                    {
                      activityResult && activityResult.mispronounced_words.map((value,index)=>(
                        <span key={index} className="text-2xl text-red-500 font-semibold">{value}, </span>
                      ))
                    }
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <ClipboardMinus/>
          </Button>

          <Button className="bg-blue-500 rounded-full hover:scale-105 hover:bg-blue-600 text-2xl gap-2 font-semibold" disabled={!isEnabled} onClick={handleGenerate}>Generate report</Button>
        </div>
      )}

      {audio ? (
        <div className="flex flex-row gap-4 justify-center items-center mt-5">
          <audio src={audio} controls></audio>
          <Button className="bg-blue-500 rounded-full hover:scale-105 hover:bg-blue-600">
            <a download href={audio}>
              <div className="flex flex-row justify-center items-center gap-2 text-xl">
                Download <Download size={25} />
              </div>
            </a>
          </Button>
        </div>
      ) : null}
    </div>
  );
};
export default AudioRecorder;
