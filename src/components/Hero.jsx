import React from "react";
import AnimatedScrollText from "./AnimatedScrollText";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-6 px-4 md:px-0">
        <AnimatedScrollText        
          text="CRAFTED FOR THE"
          duration={0.4}
          stagger={0.05}
          delay={0}
          spanClassName="text-5xl md:text-5xl lg:text-8xl font-bold text-zinc-100"
        />
        <AnimatedScrollText
          text="CREDITWORTHY"
          duration={0.4}
          stagger={0.05}
          delay={0.5}
          spanClassName="text-5xl md:text-5xl lg:text-8xl font-bold text-zinc-100"
        />
      </div>
    </div>
  );
};

export default Hero;
