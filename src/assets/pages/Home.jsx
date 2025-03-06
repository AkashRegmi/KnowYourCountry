import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import About from "./About";
const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <About/>
    </div>
  );
};

export default Home;
