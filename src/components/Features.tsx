"use client";
import FeatureCard from "./FeatureCard";

import PronounicationIcon from "../assets/icons/icon-pronunciation.svg";
import IntonationIcon from "../assets/icons/icon-intonation.svg";
import FluencyIcon from "../assets/icons/icon-fluency.svg";
import GrammarIcon from "../assets/icons/icon-grammar.svg";
import VocalburyIcon from "../assets/icons/icon-vocabulary.svg";

import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  
  const { ref, inView} = useInView({
    threshold: 0.5,
  });
  return (
    <motion.div
      className="bg-gray-50 p-10 min-h-screen"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-5xl text-center text-gray-700 mb-14">
        Let{" "}
        <span className="bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent font-bold">
          Say-It-Right!
        </span>{" "}
        help you
      </div>
      <div className="flex flex-row items-center justify-center gap-8 m-4">
        <FeatureCard
          icon={PronounicationIcon}
          altText={"PronounicationIcon"}
          description={"Improve your Pronounication"}
        />
        <FeatureCard
          icon={IntonationIcon}
          altText={"IntonationIcon"}
          description={"Develop a natural Intonation"}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <FeatureCard
          icon={FluencyIcon}
          altText={"FluencyIcon"}
          description={"Build confidence and Fluency"}
        />
        <FeatureCard
          icon={GrammarIcon}
          altText={"GrammarIcon"}
          description={"Get feedback on your Grammar"}
        />
        <FeatureCard
          icon={VocalburyIcon}
          altText={"VocalburyIcon"}
          description={"Expand your Active Vocabulary"}
        />
      </div>
    </motion.div>
  );
};

export default Features;
