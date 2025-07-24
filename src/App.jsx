import React from "react";
import Home from "./pages/Home";
import Story from "./pages/Story";
import VideoText from "./pages/VideoText";
import Upgrade from "./pages/Upgrade";
import Domore from "./pages/Domore";
import Oddsfall from "./pages/Oddsfall";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="w-full h-full bg-black text-white overflow-hidden">
      <Home />
      <Story />
      <VideoText />
      <Domore />
      <Upgrade />
      <Oddsfall />
      <Footer />
    </div>
  );
};

export default App;
