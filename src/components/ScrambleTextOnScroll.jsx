import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

function ScrambleTextOnScroll({
  text = "",
  className = "",
  duration = 2,
  speed = 0.25,
  revealDelay = 0.5,
  triggerStart = "top 90%",
  triggerEnd = "top 50%",
  toggleActions = "play reverse play reverse",
}) {
  const containerRef = useRef();

  const sentences = text
    .split(/(?<=[.?!])\s+/)
    .filter((s) => s.trim().length > 0);

  useGSAP(
    () => {
      const textElements = containerRef.current.querySelectorAll(".text");

      textElements.forEach((el) => {
        const finalText = el.textContent;

        gsap.fromTo(
          el,
          {
            scrambleText: {
              text: "",
              chars: "X0",
              revealDelay,
            },
          },
          {
            scrambleText: {
              text: finalText,
              chars: "X0",
              speed,
            },
            duration,
            scrollTrigger: {
              trigger: el,
              start: triggerStart,
              end: triggerEnd,
              toggleActions,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col  text-white  ${className}`}
    >
      <div className="relative max-w-4xl mx-auto ">
        {sentences.map((sentence, index) => (
          <div
            key={index}
            className={` flex flex-wrap gap-2  ${className}`}
          >
            {sentence.split(" ").map((word, i) => (
              <span key={i} className="text inline-block">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrambleTextOnScroll;
