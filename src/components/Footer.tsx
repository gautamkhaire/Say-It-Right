"use client";
import LanguageIcon from "../assets/images/langauge-icon.png";
import MicIcon from "../assets/images/mic-icon.png";
import Image from "next/image";
import { useRef, useState } from "react";
import { Copyright } from "lucide-react";
import Link from "next/link";
import Waves from "../assets/images/svg.png";

import ProfilePicture from "../assets/images/profile-pic.png";
import ProfileInfo from "./ProfileInfo";
// Social Media Icon from react-icons
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <Image src={Waves} alt="Footer Waves" className="w-full h-[240px]" />
      <div className="bg-fuchsia-100 grid grid-cols-7 gap-2 -mt-[30px] h-20">
        <div className="col-span-2 -mt-20">
          <div className="flex flex-row items-start justify-center">
            <Image
              src={LanguageIcon}
              height={60}
              width={60}
              alt="Language Icon"
            />
            <Image
              src={MicIcon}
              height={60}
              width={60}
              alt="MicIcon"
              className="-ml-3"
            />
            <p className="text-3xl mt-3 font-bold bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Say It Right!
            </p>
          </div>

          <p className="text-xl mt-2 ml-24 font-bold text-purple-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-span-3 -mt-16">
          <p className="text-2xl text-center text-purple-600 mb-4 font-bold">
            Contributors
          </p>
          <div className="flex flex-row justify-center items-center gap-4 mb-10">
            <ProfileInfo
              imageSrc={ProfilePicture}
              name="Gautam Khaire"
              role="Frontend Engineer"
              path="https://www.linkedin.com/in/gautam-khaire-a31284200/"
            />
            <ProfileInfo
              imageSrc={ProfilePicture}
              name="Chanchal Wadhwa"
              role="Frontend Engineer"
              path="https://www.linkedin.com/in/gautam-khaire-a31284200/"
            />
            <ProfileInfo
              imageSrc={ProfilePicture}
              name="Sahil Kale"
              role="Backend Engineer"
              path="https://www.linkedin.com/in/gautam-khaire-a31284200/"
            />
            <ProfileInfo
              imageSrc={ProfilePicture}
              name="Jay Patankar"
              role="Backend Engineer"
              path="https://www.linkedin.com/in/gautam-khaire-a31284200/"
            />
          </div>
        </div>
        <div className="space-y-2 col-span-2 -mt-16 ml-16">
          <div className="flex flex-row items-center gap-2 text-purple-600 font-medium text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#7c3aed"
              stroke="none"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91-8010889607
          </div>
          <div className="flex flex-row items-center gap-2 text-purple-600 font-medium text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#7c3aed"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            sayitright@gmail.com
          </div>
          <div className="flex flex-row items-center gap-2 text-purple-600 font-medium text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#7c3aed"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Pune, Maharashtra
          </div>
        </div>
      </div>

      <div className="bg-purple-500/85 text-white h-16 grid grid-cols-4 px-20">
        <div className="flex flex-row items-center gap-2 grid-cols-1">
          <Copyright className="h-5 w-5" />
          <p className="text-md font-medium">
            {" "}
            2023 Say-It-Right! All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 col-span-3 justify-end">
          <IconButton text="Github" path="https://www.github.com">
            <FaGithub size={30} />
          </IconButton>
          <IconButton
            text="Meta"
            color="bg-blue-500"
            path="https://www.facebook.com"
          >
            <FaMeta size={30} />
          </IconButton>
          <IconButton
            text="/sayitright"
            color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
            path="https://www.instagram.com"
          >
            <GrInstagram size={30} />
          </IconButton>
          <IconButton
            text="Twitter"
            color="bg-black"
            path="https://www.twitter.com"
          >
            <FaXTwitter size={30} />
          </IconButton>
          <IconButton
            text="@sayitright"
            color="bg-blue-500"
            path="https://www.linkedin.com"
          >
            <FaLinkedinIn size={30} />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

interface IconButtonProps {
  children?: React.ReactNode;
  text?: string;
  color?: string;
  path: string;
}

function IconButton({
  children,
  text,
  color,
  path,
  ...props
}: IconButtonProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <Link href={path} target="_blank">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`flex p-2 items-center rounded-full text-white ${
          color || "bg-black"
        }`}
        {...props}
      >
        {children}
        <div
          style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
          className="overflow-x-hidden transition-all duration-300 ease-out"
        >
          <span ref={ref} className="px-1.5">
            {text}
          </span>
        </div>
      </button>
    </Link>
  );
}
