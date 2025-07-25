import React from "react";
import { logo } from "../assets/icons/icons";

function Footer() {
  return (
    <footer className="bg-gray-950  text-white w-full px-4 py-12 md:pt-16 md:pb-28 cursor-pointer">
      <div className="md:max-w-7xl md:mx-auto w-full   flex flex-col gap-20 items-center justify-center  md:flex-row md:items-start md:justify-between md:gap-36">
        {/* Logo */}
        <div className="flex justify-center md:justify-start ">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Footer Links */}
        <div
          className=" 
        justify-items-center
        grid grid-cols-2 gap-8 md:grid-cols-4 w-full"
        >
          {/* Upgrades */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-2">UPGRADES</h2>
            <p className="text-zinc-300">CRED money</p>
            <p className="text-zinc-300">CRED mint</p>
            <p className="text-zinc-300">CRED garage</p>
            <p className="text-zinc-300">CRED escape</p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-2">COMPANY</h2>
            <p className="text-zinc-300">about CRED</p>
            <p className="text-zinc-300">career</p>
          </div>

          {/* Payments */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-2">PAYMENTS</h2>
            <p className="text-zinc-300">scan & pay</p>
            <p className="text-zinc-300">tap & pay</p>
            <p className="text-zinc-300">pay anyone</p>
            <p className="text-zinc-300">UPI</p>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-2">HELP</h2>
            <p className="text-zinc-300">support</p>
            <p className="text-zinc-300">contact us</p>
            <p className="text-zinc-300">terms of use</p>
            <p className="text-zinc-300">privacy policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
