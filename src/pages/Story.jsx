import React from "react";
import AnimatedScrollText from "../components/AnimatedScrollText";
import ScrambleTextOnScroll from "../components/ScrambleTextOnScroll";

function Story() {
  return (
    <section className="py-10 flex flex-col gap-6 bg-gray-950 border-t border-b border-gray-900">
      {/* Title Section */}
      <div className="py-6 text-center flex flex-col items-center px-4">
        <AnimatedScrollText
          text="Not Everyone"
          duration={0.4}
          stagger={0.05}
          delay={0}
          className="text-7xl md:text-5xl lg:text-8xl font-bold"
          spanClassName="text-7xl md:text-5xl lg:text-8xl font-bold text-zinc-100"
        />
        <AnimatedScrollText
          text="Makes It In."
          duration={0.4}
          stagger={0.05}
          delay={0.5}
          className="text-7xl md:text-5xl lg:text-8xl font-bold"
          spanClassName="text-7xl md:text-5xl lg:text-8xl font-bold text-zinc-100"
        />
      </div>

      {/* Body Text */}
      <div className="w-full max-w-5xl mx-auto px-20  md:px-10">
        <ScrambleTextOnScroll
          text="The story of CREED begins with trust. We believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. This is the status quo. We're building it. Join the club, and experience the ascension yourself."
          duration={3}
          speed={0.1}
          revealDelay={0.2}
          triggerStart="top 80%"
          triggerEnd="top 40%"
          toggleActions="play reverse play reverse"
          className="text-center text-base md:text-xl lg:text-2xl text-xl text-zinc-100"
        />
      </div>
    </section>
  );
}

export default Story;
