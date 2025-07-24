import React from "react";

function Video({ videoURL, className }) {
  return (
    <div className={` ${className} `}>
      <video muted autoPlay loop src={videoURL}></video>
    </div>
  );
}

export default Video;
