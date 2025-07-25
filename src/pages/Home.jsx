import React, { Suspense, useMemo } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Spline from "@splinetool/react-spline";

// Memoize Spline to avoid unnecessary rerenders
const MemoizedSpline = React.memo(() => (
  <Spline
    className="w-full h-full pointer-events-none"
    scene="https://prod.spline.design/PDpTbFasB0ljMAUM/scene.splinecode"
  />
));

function Home() {
  return (
    <div className="relative w-full px-4 md:px-10 pb-16 md:pb-20 overflow-hidden">
      {/* Background 3D Spline */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="bg-black opacity-20 w-full h-full" />}>
          <MemoizedSpline />
        </Suspense>
      </div>

      {/* Foreground content */}
      <div className="relative z-40">
        <Nav />
        <Hero />
      </div>
    </div>
  );
}

export default Home;
