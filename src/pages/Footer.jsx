import React from "react";
import { logo } from "../assets/icons/icons";

function Footer() {
  return (
    <div className="flex  items-center py-30 cursor-pointer bg-gray-950 text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex justify-between  w-full px-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2">UPGRADES</h1>
          <p className="text-zinc-300">CRED money</p>
          <p className="text-zinc-300">CRED mint</p>
          <p className="text-zinc-300">CRED garage</p>
          <p className="text-zinc-300">CRED escape</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2">COMPANY</h1>
          <p className="text-zinc-300">about CRED</p>
          <p className="text-zinc-300">carrer</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2">PAYMENTS</h1>
          <p className="text-zinc-300">scan & pay</p>
          <p className="text-zinc-300">tap & pay</p>
          <p className="text-zinc-300">tap & pay</p>
          <p className="text-zinc-300">pay anyone</p>
          <p className="text-zinc-300">UPI</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2">HELP</h1>
          <p className="text-zinc-300">support</p>
          <p className="text-zinc-300">contact us</p>
          <p className="text-zinc-300">terms of use</p>
          <p className="text-zinc-300">privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
