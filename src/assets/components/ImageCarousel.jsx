import React, { useState, useEffect } from "react";
import "../style/ImageCarousel.css"; 
import Denmark from "../image/Denmark.jpg"
import Japan from "../image/Japan.jpg";
import Nepal from "../image/Nepal.jpg";
import NewYork from "../image/new York.jpg";
import Paris from "../image/paris.jpg";

const images = [
    Denmark,Japan, Nepal,NewYork,Paris

];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container" >
      {/* Carousel Wrapper */}
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${
              index === currentIndex ? "visible" : "hidden"
            }`}
          />
        ))}
      </div>

      {/* Slider Controls */}
      <button className="carousel-button prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
