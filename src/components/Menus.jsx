import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const menus = ["Home", "About", "Services", "Contact"];
const DURATION = 0.24;
const STAGGERD = 0.025;

function Menus() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    closed: { height: 0, opacity: 0, transition: { when: "afterChildren" } },
    open: {
      height: "auto",
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Desktop menu */}
      <nav
        className="hidden md:flex space-x-16 cursor-pointer text-lg "
        aria-label="Main navigation"
      >
        {menus.map((menu, index) => (
          <motion.a
            key={index}
            href={`#${menu.toLowerCase()}`}
            initial="initial"
            whileHover="hovered"
            whileFocus="hovered"
            className="block whitespace-nowrap relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white rounded"
            tabIndex={0}
            aria-label={menu}
          >
            {/* Top text */}
            <div>
              {menu.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                  transition={{
                    duration: DURATION,
                    delay: charIndex * STAGGERD,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Bottom text */}
            <div className="absolute inset-0">
              {menu.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
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
      </nav>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        className="md:hidden fixed top-4 right-4 z-50 flex flex-col justify-center items-center space-y-1 w-8 h-8 bg-black bg-opacity-70 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span
          className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="w-full top-0   left-0 md:hidden flex flex-col items-center cursor-pointer text-4xl mt-3 space-y-6 bg-black bg-opacity-90 p-6 rounded-md fixed  right-4  z-40"
            aria-label="Mobile main navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Mobile logo */}
            <div className="flex flex-col items-center gap-10 w-full ">
              <Logo />

              {menus.map((menu, index) => (
                <motion.a
                  key={index}
                  href={`#${menu.toLowerCase()}`}
                  className="block whitespace-nowrap relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white rounded "
                  tabIndex={0}
                  aria-label={menu}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={itemVariants}
                  transition={{
                    duration: DURATION,
                    delay: index * STAGGERD,
                  }}
                  whileHover="hovered"
                  whileFocus="hovered"
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
                        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
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
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menus;
