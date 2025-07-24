import React from "react";
import Video from "../components/Video";
import Text from "../components/Text";
import { phoneVideo } from "../assets/icons/icons.js";

function VideoText() {
  return (
    <div className="h-full w-full  flex flex-col items-center justify-center pb-20 text-white ">
      <Video videoURL={phoneVideo} />
      <Text />
    </div>
  );
}

export default VideoText;
