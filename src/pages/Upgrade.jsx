import React from "react";
import AnimatedScrollText from "../components/AnimatedScrollText";
import Cards from "../components/Cards";

function Upgrade() {
  return (
    <div className="py-20 ">
      <div className="flex flex-col justify-center text-center gap-6 w-[90%] mx-auto">
        <AnimatedScrollText
          text="Upgrade Your Life"
          className="text-8xl font-bold"
        />
        <AnimatedScrollText text="Bit By Bit." className="text-8xl font-bold" />
      </div>
      <div className="w-full  ">
        <Cards />
      </div>
    </div>
  );
}

export default Upgrade;
