"use client";
import { TypewriterEffect} from "./ui/typewriter-effect";

export default function Typewriter() {
  const words = [
    {
      text: "Improve",
      className:"text-blue-500",
    },
    {
      text: "your",
      className:"text-blue-500",
    },
    {
      text: "speaking",
      className:"text-blue-500",
    },
    {
      text: "and",
      className:"text-blue-500",
    },
    {
      text: "pronunciation",
      className:"text-blue-500",
    },
    {
      text: "skills",
      className:"text-blue-500",
    },
    {
        text:"using",
        className:"text-blue-500",
    },
    {
      text: "Say-It-Right!",
      className: "text-purple-500 text-5xl",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center text-wrap">
      <TypewriterEffect words={words} />
    </div>
  );
}
