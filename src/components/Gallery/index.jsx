// IMPORTS ========================================= //
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import scss from "./gallery.module.scss";

// SLIDER COMPONENT ================================ //
const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className={scss.slider}>
      <FaArrowLeft className={scss.arrow} onClick={prevSlide} />
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={scss.image} />
      <FaArrowRight className={scss.arrow} onClick={nextSlide} />
      <div className={scss.counter}>
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default Slider;