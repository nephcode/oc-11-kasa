// IMPORTS ========================================= //
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

// RATING COMPONENT ================================ //
const Rating = ({ element }) => {
    const totalStars = 5;
    return (
      <div>
        {[...Array(totalStars)].map((_, index) => (
          index < element ? <FaStar key={index} /> : <FaRegStar key={index} />
        ))}
      </div>
    );
  };
  export default Rating;
  // END OF FILE ==================================== //