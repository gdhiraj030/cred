import React from "react";
import { motion } from "framer-motion";

const menus = ["Home", "About", "Services", "Contact"];
const DURATION = 0.24;
const STAGGERD = 0.025;

function Menus() {
  return (
    <div className="flex space-x-16  cursor-pointer text-lg">
      {menus.map((menu, index) => (
        <motion.a
          initial="initial"
          whileHover="hovered"
          className="block whitespace-nowrap relative overflow-hidden "
          key={index}
        >
          <div>
            {menu.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  delay: charIndex * STAGGERD,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {menu.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: DURATION,
                  delay: charIndex * STAGGERD,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default Menus;
