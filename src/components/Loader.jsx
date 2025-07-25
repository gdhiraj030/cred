// src/components/Loader.jsx
import React from "react";
import Logo from "./Logo";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 z-[9999] flex flex-col items-center justify-center gap-4">
      <Logo />
      <div className="w-10 h-10 border-4 border-t-white border-gray-500 rounded-full animate-spin" />
      <p className="text-sm text-white tracking-widest">Loading...</p>
    </div>
  );
};

export default Loader;
