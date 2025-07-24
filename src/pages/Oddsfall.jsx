import React from "react";
import { ballvideo } from "../assets/icons/icons";
import AnimatedScrollText from "../components/AnimatedScrollText";

function Oddsfall() {
  return (
    <div className="relative w-full h-[80vh] mt-40 mb-40 overflow-hidden">
      <div className="h-[80vh] w-full absolute top-0 left-0">
        <video
          className="h-full w-full object-cover"
          muted
          loop
          autoPlay
          src={ballvideo}
        ></video>
      </div>
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
        <AnimatedScrollText
          text="Feels  the  odds  fall"
          className="text-8xl font bold tracking-tighter"
        />
        <AnimatedScrollText
          text="in  your  favor"
          className="text-8xl font bold tracking-tight  "
        />
        <p className=" px-10 py-6 text-2xl">
          unlock cashback,exclusive awards from select brands, ans special to
          curated products and experiences.
        </p>
      </div>
    </div>
  );
}

export default Oddsfall;
