import React from "react";
import MarqueeItem from "./MarqueeItem";
import {
  svg01,
  svg02,
  svg03,
  svg04,
  svg05,
  svg06,
  svg07,
  svg08,
  svg09,
  svg10,
  svg11,
  svg12,
  svg13,
  svg14,
  svg15,
  svg16,
  svg17,
  svg18,
  svg19,
  svg20,
  svg21,
  svg22,
} from "../assets/icons/icons";

const upperMarquee = [
  svg01,
  svg02,
  svg03,
  svg04,
  svg05,
  svg06,
  svg07,
  svg08,
  svg09,
  svg10,
  svg11,
  svg12,
];
const lowerMarquee = [
  svg13,
  svg14,
  svg15,
  svg16,
  svg17,
  svg18,
  svg19,
  svg20,
  svg21,
  svg22,
];
function Marquee() {
  return (
    <div className=" mx-auto py-2 md:py-20">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
}

export default Marquee;
