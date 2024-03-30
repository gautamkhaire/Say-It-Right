"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";

type ImageCardProps={
    imageSrc: StaticImageData;
    name: string;
    role: string;
    path: string;
}

function ProfileInfo({imageSrc,name,role,path}:ImageCardProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      href={path}
      target="_blank"
      className={isHover ? "-mt-9 text-center":""} 
    >
      <Image
        src={imageSrc}
        alt="Profile-Picture"
        width={80}
        height={80}
        quality={90}
        priority={true}
        className={isHover ? "scale-110 transition ease-in-out duration-300 ml-[40px] mb-2" : ""}
      />
      {isHover && <p className="font-bold text-lg text-purple-600 transition ease-in-out duration-300 text-center leading-none mt-1">{name} <br/><span className="text-md text-purple-500 font-medium">{role}</span></p>}
    </Link>
  );
}

export default ProfileInfo;
