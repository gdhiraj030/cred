import React from "react";
import AnimatedScrollText from "./AnimatedScrollText";
import ScrambleTextOnScroll from "./ScrambleTextOnScroll";

function Text() {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <AnimatedScrollText
          text="All  That  You  Deserve "
          duration={0.4}
          stagger={0.05}
          delay={0}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-center"
        />
        <AnimatedScrollText
          text="And  Some  More."
          duration={0.4}
          stagger={0.05}
          delay={0.7}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-center"
        />
      </div>

      <div className="pt-8 md:pt-10">
        <ScrambleTextOnScroll
          text="If you are a CREED member, you're already a step ahead. Every experience you unlock takes you higher up the pedestal"
          duration={3}
          speed={0.1}
          revealDelay={0.2}
          triggerStart="top 80%"
          triggerEnd="top 40%"
          toggleActions="play reverse play reverse"
          className="text-lg md:text-xl text-center flex justify-center items-center w-full px-2 md:px-20"
        />
      </div>
    </div>
  );
}

export default Text;
