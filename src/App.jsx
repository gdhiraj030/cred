import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Story from "./pages/Story";
import VideoText from "./pages/VideoText";
import Upgrade from "./pages/Upgrade";
import Domore from "./pages/Domore";
import Oddsfall from "./pages/Oddsfall";
import Footer from "./pages/Footer";
import Marquee from "./components/Marquee";
import Loader from "./components/Loader"; // Import loader

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 10); // 2s delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="w-full h-full bg-black text-white overflow-hidden">
      <Home />
      <Story />
      <VideoText />
      <Domore />
      <Upgrade />
      <Marquee />
      <Oddsfall />
      <Footer />
    </div>
  );
};

export default App;
