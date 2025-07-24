import React from "react";
import Logo from "./Logo";
import Menus from "./Menus";

function Nav() {
  return (
    <div className="w-full  flex justify-between items-center z-50 py-6 rounded">
      <Logo />
      <Menus />
    </div>
  );
}

export default Nav;
