import React from "react";
import AnimatedScrollText from "./AnimatedScrollText";
import { motion } from "framer-motion";
import ScrambleTextOnScroll from "./ScrambleTextOnScroll";

function Text() {
  return (
    <div className="py-10 ">
      <div className="flex flex-col items-center justify-center gap-4">
        <AnimatedScrollText
          text="All  That  You  Deserve "
          duration={0.4}
          stagger={0.05}
          delay={0}
          className="text-8xl font-bold text-center  "
        />
        <AnimatedScrollText
          text="And  Some  More."
          duration={0.4}
          stagger={0.05}
          delay={0.7}
          className="text-8xl font-bold text-center  "
        />
      </div>

      <div className="pt-10">
        <ScrambleTextOnScroll
          text="If you are a CREED member, you're already a step ahead. Every experience you unlock takes you higher up the pedestal"
          duration={3}
          speed={0.1}
          revealDelay={0.2}
          triggerStart="top 80%"
          triggerEnd="top 40%"
          toggleActions="play reverse play reverse"
          className="text-center flex justify-center items-center w-full  text-2xl"
        />
      </div>
    </div>
  );
}

export default Text;
