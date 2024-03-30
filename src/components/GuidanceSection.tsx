import Image from "next/image";
import PracticeIcon from "../assets/icons/practice.png";
import FeedbackIcon from "../assets/icons/feedback.png";
import AnalyticsIcon from "../assets/icons/analytics.png";
import SkillsIcon from "../assets/icons/skills.png";

function GuidanceSection() {
  return (
    <section className="h-screen p-5 mt-6">
      <div className="text-5xl text-center text-gray-700 mb-6">
        How to use{" "}
        <span className="bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent font-bold">
          Say-It-Right
        </span>{" "}
        ?{" "}
      </div>
      <div className="text-2xl text-center text-gray-600 mb-12 w-2/3 mx-auto">Learn how to <span className="text-gray-600 font-bold">maximize</span> your language learning experience with <span className="text-gray-600 font-bold">detailed instructions</span> and tips on using our feature-rich platform effectively.</div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          {/* <div className="w-14 h-14 rounded-full bg-purple-400 text-white font-bold text-2xl py-3 px-5 mb-5">
            1
          </div> */}
          <div
            className="flex flex-col items-center justify-center text-center w-[300px] h-[360px] rounded-2xl text-gray-700 text-lg backdrop-blur-lg p-8 bg-gradient-to-b from-white/80 to-white/50 border-[1px] border-solid border-white border-opacity-30 shadow-black/70 shadow-2xl"
          >
            <div className="h-20 w-20 rounded-full border-4 border-blue-400 flex items-center justify-center mb-2">
              <Image
                src={PracticeIcon}
                alt="Start Practice"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            
            <p className="text-2xl font-bold mb-4 text-blue-500">Start Practice</p>
            <p>Begin your journey by choosing your language. Practice words, sentences and finally explore your own paragraphs
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* <div className="w-14 h-14 rounded-full bg-purple-400 text-white font-bold text-2xl py-3 px-5 mb-5">
            2
          </div> */}
          <div
            className="flex flex-col items-center justify-center text-center w-[300px] h-[360px] rounded-2xl text-gray-700 text-lg backdrop-blur-lg p-8 bg-gradient-to-b from-white/80 to-white/50 border-[1px] border-solid border-white border-opacity-30 shadow-black/70 shadow-2xl"
          >
            <div className="h-20 w-20 rounded-full border-4 border-yellow-400 flex items-center justify-center mb-2">
              <Image
                src={FeedbackIcon}
                alt="Feedback"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <p className="text-2xl font-bold mb-4 text-yellow-500">Instant Feedback</p>
            <p>Statistics on pronunciation, intonation and fluency skills displayed within seconds to keep on improving
             </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* <div className="w-14 h-14 rounded-full bg-red-400 text-white font-bold text-2xl py-3 px-5 mb-5">
            3
          </div> */}
          <div
            className="flex flex-col items-center justify-center text-center w-[300px] h-[360px] rounded-2xl text-gray-700 text-lg backdrop-blur-lg p-8 bg-gradient-to-b from-white/80 to-white/50 border-[1px] border-solid border-white border-opacity-30 shadow-black/70 shadow-2xl"
          >
            <div className="h-20 w-20 rounded-full border-4 border-red-400 flex items-center justify-center mb-2">
              <Image
                src={AnalyticsIcon}
                alt="Analytics"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <p className="text-2xl font-bold mb-4 text-red-500">Analytical Insights</p>
            <p>Get a detailed report of personalized suggestions and an in-depth analysis of your strengths and weaknesses
             </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* <div className="w-14 h-14 rounded-full bg-amber-400 text-white font-bold text-2xl py-3 px-5 mb-5">
            4
          </div> */}
          <div
            className="flex flex-col items-center justify-center text-center w-[300px] h-[360px] rounded-2xl text-gray-700 text-lg backdrop-blur-lg p-8 bg-gradient-to-b from-white/80 to-white/50 border-[1px] border-solid border-white border-opacity-30 shadow-black/70 shadow-2xl"
          >
            <div className="h-20 w-20 rounded-full border-4 border-amber-400 flex items-center justify-center mb-2">
              <Image
                src={SkillsIcon}
                alt="Skills"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <p className="text-2xl font-bold mb-4 text-amber-500">Steady Growth</p>
            <p>Keep track of your progress over the days and show off your improvements and growth on social media handles

            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default GuidanceSection;
