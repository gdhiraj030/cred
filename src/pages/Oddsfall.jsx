import React from "react";
import { ballvideo } from "../assets/icons/icons";
import AnimatedScrollText from "../components/AnimatedScrollText";

function Oddsfall() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] mt-20 md:mt-32 mb-20 md:mb-40 overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          src={ballvideo}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <AnimatedScrollText
          text="Feels the odds fall"
          className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-tighter"
        />
        <AnimatedScrollText
          text="in your favor"
          className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-tight"
        />
        <p className="mt-4 md:mt-6 text-base md:text-xl max-w-2xl text-zinc-100">
          Unlock cashback, exclusive rewards from select brands, and access to curated products and experiences.
        </p>
      </div>
    </section>
  );
}

export default Oddsfall;
