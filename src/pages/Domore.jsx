import React from "react";
import AnimatedScrollText from "../components/AnimatedScrollText";
import { bgVideo } from "../assets/icons/icons.js";

function Domore() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between overflow-hidden border-t border-b border-gray-800 py-10 mb-6 h-auto md:h-[65vh]">
      
      {/* Left Text Section */}
      <div className="w-full md:w-2/3 flex flex-col gap-6  md:px-20 text-center md:text-left">
        <AnimatedScrollText
          text="Do More With"
          spanClassName="text-5xl md:text-5xl lg:text-7xl font-bold text-zinc-100"
        />
        <AnimatedScrollText
          text="Your Credit Cards"
          spanClassName="text-5xl md:text-5xl lg:text-7xl font-bold text-zinc-100"
        />
        <p className="mt-4  text-base md:text-xl">
          Manage your credit cards better and improve your credit score: 
          receive payment reminders, uncover hidden fees, get spending insights, 
          and discover ways to maximize card benefits.
        </p>
      </div>

      {/* Right Video Section */}
      <div className="w-full md:w-2/3 h-[250px] md:h-full  relative mt-8 md:mt-0">
        <video
          autoPlay
          muted
          loop
          src={bgVideo}
          className="object-cover w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default Domore;
