import React from "react";
import logo from "./../assets/icons/logo.png";

function Logo() {
  return (
    <div className="w-12 h-12 z-50 relative">
      <img src={logo} alt="Logo" className="w-full h-full object-contain" />
    </div>
  );
}

export default Logo;
