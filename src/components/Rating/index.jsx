// IMPORTS ========================================= //
import React from "react";
import { FaStar } from "react-icons/fa";
// STYLES ========================================== //
import scss from "./rating.module.scss";

// RATING COMPONENT ================================ //
const Rating = ({ element }) => {
    const totalStars = 5;
    return (
      <div>
        {[...Array(totalStars)].map((_, index) => (
          index < element ? (
          <FaStar key={index} className={`${scss.rating} ${scss.ratingStarGood}`} />
        ) : (
          <FaStar key={index} className={`${scss.rating} ${scss.ratingStarBad}`} />
        )
        ))}
      </div>
    );
  };
  export default Rating;
  // END OF FILE ==================================== //