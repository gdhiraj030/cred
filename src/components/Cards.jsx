import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Card from "./Card";

import {
  scanpay,
  upi,
  tapnpay,
  garage,
  p2p,
  escape,
} from "../assets/icons/icons";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    title: "Scan & Pay",
    subtitle: "scan & pay any upi qr",
    backgroundImage: scanpay,
  },
  {
    id: 2,
    title: "UPI on Credit",
    subtitle: "upi payments on credits",
    backgroundImage: upi,
  },
  {
    id: 3,
    title: "Bill Tap & Pay",
    subtitle: "tap your phone pay on credit",
    backgroundImage: tapnpay,
  },
  {
    id: 4,
    title: "Pay Anyone",
    subtitle: "send money to any upi app",
    backgroundImage: p2p,
  },
  {
    id: 5,
    title: "CRED Garage",
    subtitle: "manage your car's vitals",
    backgroundImage: garage,
  },
  {
    id: 6,
    title: "CRED Escape",
    subtitle: "travel curated for members",
    backgroundImage: escape,
  },
];

function Cards() {
  const container = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const totalWidth = cardsRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(cardsRef.current, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 18%",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: true,
        },
      });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div ref={container} className="relative h-[70vh]  overflow-hidden">
      <div className="flex flex-nowrap gap-10 h-[600px] p-10" ref={cardsRef}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            backgroundImage={card.backgroundImage}
            className="hover:scale-105 transition-transform duration-300  min-w-[300px] max-w-[400px]"
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
