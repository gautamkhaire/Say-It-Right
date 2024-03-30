"use client";
import Dictionary from "../assets/images/Dictionary.png";
import Image from "next/image";
import { motion } from "framer-motion";
import DictionaryIcon from "../assets/icons/icons-dictionary.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function DictionaryBanner() {
  return (
    <div className="h-screen grid grid-cols-7 gap-4">
      <div className="col-span-4">
        <div className="z-10 p-8">
          <svg viewBox="0 0 900 600" width="900" height="600">
            <g transform="translate(468.3594546528067 261.221093509027)">
              <motion.path
                d="M112.7 -113.7C137.7 -87.7 143.8 -43.8 157.3 13.4C170.7 70.7 191.4 141.4 166.4 183.9C141.4 226.4 70.7 240.7 4.5 236.2C-61.8 231.8 -123.5 208.5 -162.3 166C-201.2 123.5 -217.1 61.8 -214.6 2.5C-212.1 -56.8 -191.3 -113.6 -152.4 -139.6C-113.6 -165.6 -56.8 -160.8 -6.5 -154.3C43.8 -147.8 87.7 -139.7 112.7 -113.7"
                fill="#c084fc"
                animate={{
                  d: [
                    "M112.7 -113.7C137.7 -87.7 143.8 -43.8 157.3 13.4C170.7 70.7 191.4 141.4 166.4 183.9C141.4 226.4 70.7 240.7 4.5 236.2C-61.8 231.8 -123.5 208.5 -162.3 166C-201.2 123.5 -217.1 61.8 -214.6 2.5C-212.1 -56.8 -191.3 -113.6 -152.4 -139.6C-113.6 -165.6 -56.8 -160.8 -6.5 -154.3C43.8 -147.8 87.7 -139.7 112.7 -113.7",
                    "M122.1 -119.1C172.1 -72.1 236.1 -36.1 242.8 6.7C249.5 49.5 199 99 149 136.8C99 174.7 49.5 200.8 -3.5 204.4C-56.6 207.9 -113.1 188.8 -138.1 151C-163.1 113.1 -156.6 56.6 -155.3 1.3C-154 -54 -158 -108 -133 -155C-108 -202 -54 -242 -9 -233C36.1 -224.1 72.1 -166.1 122.1 -119.1",
                    "M161.2 -148.5C201.7 -120.7 222.3 -60.3 227.5 5.2C232.7 70.7 222.4 141.4 181.9 188.8C141.4 236.1 70.7 260 17.7 242.4C-35.4 224.7 -70.7 165.4 -100.2 118C-129.7 70.7 -153.4 35.4 -162.9 -9.5C-172.4 -54.4 -167.9 -108.9 -138.4 -136.7C-108.9 -164.6 -54.4 -165.8 2.9 -168.7C60.3 -171.7 120.7 -176.3 161.2 -148.5",
                  ],
                  // fill: ["#3b82f6", "#a855f7"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  duration: 5,
                }}
              ></motion.path>
            </g>
          </svg>
        </div>
        <Image
          src={Dictionary}
          width={400}
          height={400}
          alt="Dictionary Banner"
          className="z-20 -translate-y-[490px] translate-x-48"
        />
      </div>

      <div className="col-span-3 mt-10 p-10">
        <div className="flex flex-row justify-center items-center gap-6 -ml-14">
          <Image
            src={DictionaryIcon}
            width={60}
            height={60}
            alt="Dictionary Icon"
          />
          <p className="text-5xl text-purple-500 font-bold text-center">
            Dictionary
          </p>
        </div>
        <p className="text-lg text-gray-500 font-medium mt-5 p-5">
        Dive into a world of language exploration with our user-friendly word and phrase dictionary, your ultimate companion in language mastery. Whether you're clarifying doubts, seeking example sentences, or honing your pronunciation, our comprehensive tool offers a seamless experience, empowering you to expand your vocabulary effortlessly.

          <br />
          <br />
          This feature has been meticulously crafted to cater to all your language learning needs. With correct pronunciations, insightful word relations, and vivid example sentences at your fingertips, we invite you to expand your horizons with this simple effort!

        </p>
        <div className="mt-5 flex items-center justify-center">
        <Link
          href="#dictionaryurl"
          className="h-12 w-36 font-semibold text-md group bg-purple-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-purple-600 transition"
        >
          Explore{" "}
          <FaArrowRightLong className="opacity-90 group-hover:translate-x-1 transition" />
        </Link>
        </div>
        
      </div>
    </div>
  );
}

export default DictionaryBanner;
