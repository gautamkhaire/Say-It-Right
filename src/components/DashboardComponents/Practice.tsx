"use client"

import { Tabs } from "../ui/tabs";
import AudioRecorder from "../AudioRecorder.jsx";
import { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Practice() {
  const tabs = [
    {
      title: "Words",
      value: "Words",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Words</p>
          <WordsContent />
        </div>
      ),
    },
    {
      title: "Sentences",
      value: "Sentences",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Sentences</p>
          <SentencesContent />
        </div>
      ),
    },
    {
      title: "Paragraphs",
      value: "Paragraphs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Paragraphs</p>
          <ParagraphsContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Content</p>
          <UserInputContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen w-full p-4 relative flex flex-col mx-20 items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

const handleVoice = async (text: any) => {
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg: any) => {
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  speechHandler(msg);
};

const WordsContent = () => {
  const words = ["Communication", "Strengths", "Laugh", "Shipping", "Through","मेरा नाम"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };
  const previousWord = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
  };

  return (
    <div className="text-center p-10">
      <div className="font-normal text-white/90 text-2xl -mt-6">
        Pronounce the following word{" "}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-2/3 flex items-center justify-around">
          <button onClick={previousWord}>
            <FaCircleArrowLeft />
          </button>
          <div className="text-[60px] font-bold text-white my-12 ">
            <div className="flex flex-row items-center justify-between gap-2">
              {words[currentIndex]}{" "}
              <Button onClick={() => handleVoice(words[currentIndex])}>
                <HiSpeakerWave size={38} />
              </Button>
            </div>
          </div>
          <button onClick={nextWord}>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>

      <AudioRecorder text={words[currentIndex]} lesson_id={1} />
    </div>
  );
};

const SentencesContent = () => {
  const sentences = [
    "The cat sat on the mat",
    "I like to eat apples",
    "She runs fast in the park",
    "The big black dog barks loudly",
    "We went to the beach on a sunny day",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSentence = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };
  const previousSentence = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sentences.length) % sentences.length
    );
  };
  return (
    <div className="text-center p-10">
      <div className="font-normal text-white/90 text-2xl -mt-6">
        Pronounce the following sentence{" "}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-2/3 flex items-center justify-around">
          <button onClick={previousSentence}>
            <FaCircleArrowLeft />
          </button>
          <div className="text-[45px] font-bold text-white my-12 ">
            <div className="flex flex-row items-center justify-between gap-2">
              {sentences[currentIndex]}{" "}
              <Button onClick={() => handleVoice(sentences[currentIndex])}>
                <HiSpeakerWave size={38} />
              </Button>
            </div>
          </div>
          <button onClick={nextSentence}>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>

      <AudioRecorder text={sentences[currentIndex]} lesson_id={2} />
    </div>
  );
};

const ParagraphsContent = () => {
  const paragraphs = [
    "The quick brown fox jumps over the lazy dog. They play in the park every Saturday afternoon.",
    "I sell books on the beach. He reads books about ancient history.",
    "My sister sings beautifully in the choir. We have a picnic by the river every summer.",
    "The tall man with a deep voice spoke softly. The children laugh happily at the funny clown.",
    "I love to travel to exotic places. The train chugs along the tracks towards the mountains.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextParagraph = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
  };
  const previousParagraph = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + paragraphs.length) % paragraphs.length
    );
  };
  return (
    <div className="text-center p-10">
      <div className="font-normal text-white/90 text-2xl -mt-6">
        Pronounce the following paragraph{" "}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-around">
          <button onClick={previousParagraph}>
            <FaCircleArrowLeft />
          </button>
          <div className="text-[35px] font-bold text-white my-6 ">
            <div className="flex flex-row items-center justify-between gap-2">
              {paragraphs[currentIndex]}{" "}
              <Button onClick={() => handleVoice(paragraphs[currentIndex])}>
                <HiSpeakerWave size={38} />
              </Button>
            </div>
          </div>
          <button onClick={nextParagraph}>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>

      <AudioRecorder text={paragraphs[currentIndex]} lesson_id={3} />
    </div>
  );
};

const UserInputContent = () => {
  const [text, setText] = useState("");
  return (
    <div className="text-center p-10">
      <div className="flex flex-row justify-between items-center">
        <Textarea
          placeholder="Type your practice content here..."
          className="text-xl font-semibold rounded-2xl -mt-4"
          rows={3}
          onChange={(e: any) => setText(e.target.value)}
        />
        <Button onClick={() => handleVoice(text)} className="-mt-20">
          <HiSpeakerWave size={38} />
        </Button>
      </div>

      <div className="font-normal text-white/90 text-2xl my-6">
        Pronounce the above typed content{" "}
      </div>
      <AudioRecorder text={text} lesson_id={4} />
    </div>
  );
};
