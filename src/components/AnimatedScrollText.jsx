import React from "react";
import { motion } from "framer-motion";

function AnimatedScrollText({
  text = "",
  duration = 0.4,
  stagger = 0.03,
  delay = 0,
  className = "",
  spanClassName = "",
  ...props
}) {
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex overflow-hidden ${className}`}
      {...props}
      aria-label={text}
      role="heading"
    >
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={index} className="inline-block w-2" />
        ) : (
          <motion.span
            key={index}
            className={`inline-block ${spanClassName}`}
            variants={{
              initial: { y: "100%" },
              inView: { y: 0 },
            }}
            transition={{
              duration,
              delay: index * stagger + delay,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        )
      )}
    </motion.div>
  );
}

export default AnimatedScrollText;
