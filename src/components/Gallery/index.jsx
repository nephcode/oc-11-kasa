// IMPORTS ========================================= //
import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import scss from "./gallery.module.scss";

// SLIDER COMPONENT ================================ //
const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      nextSlide();
    } else if (endX.current - startX.current > 50) {
      prevSlide();
    }
  };

  return (
    <div
      className={scss.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <FaAngleLeft className={scss.arrow} onClick={prevSlide} />
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={scss.image} />
      <FaAngleRight className={scss.arrow} onClick={nextSlide} />
      <div className={scss.counter}>
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default Slider;