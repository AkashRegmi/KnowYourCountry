import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import About from "./About";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
