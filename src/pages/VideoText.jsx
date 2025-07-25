import React from "react";
import Video from "../components/Video";
import Text from "../components/Text";
import { phoneVideo } from "../assets/icons/icons.js";

function VideoText() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center pb-10 md:pb-20 text-white px-4 md:px-8">
      <Video videoURL={phoneVideo} />
      <Text />
    </section>
  );
}

export default VideoText;
