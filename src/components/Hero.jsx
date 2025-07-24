import React from "react";
import AnimatedScrollText from "./AnimatedScrollText";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-6">
        <AnimatedScrollText
          text="CRAFTED FOR THE"
          duration={0.4}
          stagger={0.05}
          delay={0}
          className=" text-8xl font-bold text-white shadow-2xl"
        />
        <AnimatedScrollText
          text="CREDITWORTHY"
          duration={0.4}
          stagger={0.05}
          delay={0.5}
          className="text-8xl  font-bold text-white shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
