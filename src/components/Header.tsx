import { Button } from "@/components/ui/button";
import LanguageIcon from "../assets/images/langauge-icon.png";
import MicIcon from "../assets/images/mic-icon.png";
import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Header = () => {
  return (
    <div className="mx-10 p-4 flex items-center justify-between">
      <div className="flex flex-row items-center justify-center">
        <Image src={LanguageIcon} height={60} width={60} alt="Language Icon" />
        <Image src={MicIcon} height={60} width={60} alt="MicIcon" className="-ml-3"/>
        <p className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Say It Right!</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Button
          variant="outline"
          className="h-12 text-purple-700 text-md font-medium rounded-full border-2 border-purple-500 hover:text-white hover:bg-purple-600 transition"
        >
          <LoginLink>Sign in</LoginLink>
        </Button>
        <Button className="h-12 bg-purple-600 text-white text-md font-medium rounded-full hover:bg-purple-600 hover:scale-105 transition">
          <RegisterLink>Get Started</RegisterLink>
        </Button>
      </div>
      
    </div>
  );
};

export default Header;
