// IMPORTS ========================================= //
import React from "react";
import scss from "./hashtag.module.scss";

// COMPONENT ======================================= //
const Hashtag = ({ tags }) => {
  return (
    tags.map((tags, index) => (
    <ul className={scss.tag}>
      <li key={index}>{tags}</li>
    </ul>
  )))
};

export default Hashtag;
// END OF FILE ==================================== //