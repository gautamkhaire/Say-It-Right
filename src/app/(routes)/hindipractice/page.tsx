"use client"

import React from 'react'
import { Tabs } from "../../../components/ui/tabs";
import Image from 'next/image';
import AudioRecorderMarathi from "../../../components/AudioRecorderHindi";
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
        <p className='text-5xl text-green-500 font-extrabold text-center'>हिंदी </p>
        <p className='text-2xl text-gray-600 font-bold text-center'>(Hindi)</p>
        </div>
    <div className='w-3/4'><Tabs tabs={tabs} /></div>
      
    </div>
  );
}

const WordsContent = () => {
  const words = ["साथ", "पत्ता ", "बारिश ", "खाना ", "गाड़ी"];
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
  const sentences = ["बच्चे खेलते हैं पार्क में।","उसके पास बड़ा घर है।","वहाँ पर सब्ज़ी मार्केट है।","मेरे पास एक किताब है।","सुबह आलू पराठे का नाश्ता है। "];
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
    "राम ने रसोई में रोटी पकाई। रोटी रंगीन हो गई थी।",
"सोनिया ने सरकारी स्कूल में सुंदर छायाचित्र बनाया। सुंदरता में वह नंबर एक थी।",
"गायिका ने गीत सुनाया। गीत सुनकर सभी नचने लगे।",
"धरती पर धर्म बहुत महत्वपूर्ण है। धर्म के बिना जीवन अधूरा है।",
"काव्य कविता को सजाया। सजीवता के लिए उसका अहम योगदान था।",
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
