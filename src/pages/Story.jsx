import React from "react";
import AnimatedScrollText from "../components/AnimatedScrollText";
import ScrambleTextOnScroll from "../components/ScrambleTextOnScroll";

function Story() {
  return (
    <div className=" py-10 flex bg-slate-950  flex-col  gap-6 border-t border-b border-slate-600  ">
      <div className="py-6 text-center flex flex-col items-center   ">
        <AnimatedScrollText
          text="Not  Everyone"
          duration={0.4}
          stagger={0.05}
          delay={0}
          className="text-8xl font-bold  "
        />
        <AnimatedScrollText
          text=" Makes  It  In."
          duration={0.4}
          stagger={0.05}
          delay={0.5}
          className="text-8xl font-bold "
        />
      </div>
      <div className=" w-[80%] mx-auto">
        <ScrambleTextOnScroll
          text="The story of CREED begins with trust. We believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. This is the status quo. We're building it to the club, and experience the ascension yourself."
          duration={3}
          speed={0.1}
          revealDelay={0.2}
          triggerStart="top 80%"
          triggerEnd="top 40%"
          toggleActions="play reverse play reverse"
          className="text-center flex justify-center items-center w-full px-20  text-2xl"
        />
      </div>
    </div>
  );
}

export default Story;
