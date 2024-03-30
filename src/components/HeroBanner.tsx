import Header from "./Header";
import Typewriter from "./Typewriter";
import Image from "next/image";
import HeroSection from "../assets/images/Course app-pana.png";

const HeroBanner = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-100 via-cyan-200 to-fuchsia-400">
        <Header />
        <div className="flex justify-center items-center mt-5 p-10 mx-6">
          <div className="w-1/2 flex flex-col justify-center items-start">
            <Typewriter />
            <p className="mt-12 text-blue-500 text-xl font-semibold">
            Unlock your full language potential with our cutting-edge pronunciation improvement platform, offering real-time feedback and personalized suggestions for enhancement in fluency, vocabulary and much more! 
            </p>

            <p className="mt-14 text-blue-500 text-xl font-semibold">
Join thousands of users worldwide in mastering your speaking skills with our structured lesson plans and comprehensive progress-tracking tools. Stay on top of your language game with detailed summaries and reports!
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src={HeroSection}
              width={500}
              height={500}
              alt="Hero Section"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
