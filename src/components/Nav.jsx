import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menus from "./Menus";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full px-4 md:px-12 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center z-50 fixed top-0 left-0 transition-all duration-300 ${
        scrolled ? "bg-gray-950 border-b-[1px] border-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Show logo only on desktop */}
      <div className="hidden md:block">
        <Logo />
      </div>
      <Menus />
    </div>
  );
}

export default Nav;
