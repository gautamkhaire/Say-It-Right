"use client"

import React from 'react'
import { Tabs } from "../../../components/ui/tabs";
import Image from 'next/image';
import AudioRecorderMarathi from "../../../components/AudioRecorderMarathi";
import { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import DifferentLanguage from "@/assets/images/differentLanguages.png";

export default function MarathiPractice() {
  const tabs = [
    {
      title: "शब्द",
      value: "शब्द",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Words</p>
          <WordsContent />
        </div>
      ),
    },
    {
      title: "वाक्य",
      value: "वाक्य",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Sentences</p>
          <SentencesContent />
        </div>
      ),
    },
    {
      title: "अनुच्छेद",
      value: "अनुच्छेद",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Paragraphs</p>
          <ParagraphsContent />
        </div>
      ),
    },
    {
      title: "सामग्री",
      value: "सामग्री",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-cyan-300 to-indigo-400">
          <p className="text-center text-white font-semibold">Content</p>
          <UserInputContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen w-full p-4 relative flex flex-row items-start justify-around">
        <div>
        <Image src={DifferentLanguage} alt="Different Languages" width={350} height={350} className='mt-32'/>
        <p className='text-5xl text-orange-500 font-extrabold text-center'>मराठी </p>
        <p className='text-2xl text-gray-600 font-bold text-center'>(Marathi)</p>
        </div>
    
    <div className='w-3/4'><Tabs tabs={tabs} /></div>
      
    </div>
  );
}

const WordsContent = () => {
  const words = ["धन्यवाद", "आई", "पाणी ", "वाहन", "खेळ"];
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
              {words[currentIndex]}
            </div>
          </div>
          <button onClick={nextWord}>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>

      <AudioRecorderMarathi text={words[currentIndex]} lesson_id={1} />
    </div>
  );
};

const SentencesContent = () => {
  const sentences = ["आई आमच्या घरी उपवास करते.","पाणी पिऊन तुम्हाला फायदा होईल.","आज चांगलं काम केलं.","आपल्याला धन्यवाद देण्याची गरज आहे.","तुमचा प्रकल्प खूप छान आहे"];
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
              {sentences[currentIndex]}
            </div>
          </div>
          <button onClick={nextSentence}>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>

      <AudioRecorderMarathi text={sentences[currentIndex]} lesson_id={2} />
    </div>
  );
};

const ParagraphsContent = () => {
  const paragraphs = [
    "खेळ कोणताही असो त्यात मनोरंजना सोबत शरीराचा व्यायाम पण होऊन जातो. खेळामुळे शरीर मजबूत बनते.",
    "क्रिकेट हा भारतातील सर्वात लोकप्रिय खेळ आहे. हा खेळ सर्व प्रथम इंग्रजांद्वारे भारतात आला होता.",
    "मोती आमच्या कुटुंबाच्या सदस्या प्रमाणेच आहे. मी त्याच्या सोबत सकाळ संध्याकाळ खेळतो.",
    "दिवाळीचा सण प्रत्येकासाठी आनंद घेऊन येतो, मग तो व्यक्ती लहान असो किंवा मोठा. प्रत्येक जण या सणाला अतिशय भव्य पणे साजरा करतात",
    "गौतम बुद्ध यांना शांती व अहिंसेचे दैवत मानले जाते. भगवान बुद्धांचा जन्म इसवी सन पूर्व 569 मध्ये लुंबिनी नावाच्या एका स्थानावर झाला.",
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
              {paragraphs[currentIndex]}
            </div>
          </div>
          <button onClick={nextParagraph}>
            <FaCircleArrowRight />
          </button>
        </div>
      </div>

      <AudioRecorderMarathi text={paragraphs[currentIndex]} lesson_id={3} />
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
      </div>

      <div className="font-normal text-white/90 text-2xl my-6">
        Pronounce the above typed content{" "}
      </div>
      <AudioRecorderMarathi text={text} lesson_id={4} />
    </div>
  );
};
