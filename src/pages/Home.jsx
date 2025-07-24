import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <div className="w-full  px-10 relative overflow-hidden pb-20">
      <div className="absolute inset-0 z-0">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/PDpTbFasB0ljMAUM/scene.splinecode"
        />
      </div>
      <Nav />
      <Hero />
    </div>
  );
}

export default Home;
