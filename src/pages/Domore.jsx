import React from "react";
import AnimatedScrollText from "../components/AnimatedScrollText";
import Video from "../components/Video";
import { bgVideo } from "../assets/icons/icons.js";

function Domore() {
  return (
    <div className="w-full h-[65vh] flex items-center justify-between overflow-hidden border-t border-b border-slate-600 py-10 mb-6">
      <div className="  flex-col  h-full flex gap-10  px-4 ">
        <div className=" flex flex-col text-left px-20   whitespace-normal">
          <AnimatedScrollText
            text="Do More With"
            className="text-8xl font-bold leading-tight break-words whitespace-normal"
          />
          <AnimatedScrollText
            text="Your Credit Cards"
            className="text-8xl font-bold leading-tight break-words whitespace-normal"
          />
          <p className="mb-10 text-2xl">
            manage your credit cards better and improve your credit car score:
            receive payment reminders,uncover hidden fees, get spending insights
            and discover ways to maximize card bebifits.
          </p>
        </div>
      </div>

      <div className=" w-2/3 h-full relative">
        <video
          autoPlay
          muted
          loop
          src={bgVideo}
          className="object-cover h-full w-full absolute top-1/2 object-center left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default Domore;
