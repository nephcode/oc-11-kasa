// IMPORTS ========================================= //
import React from "react";
import scss from "./tag.module.scss";

// COMPONENT ======================================= //
const Hashtag = ({ tags }) => {
  return (
    tags.map((tags, index) => (
    <ul key={index} className={scss.tag}>
      <li>{tags}</li>
    </ul>
  )))
};
export default Hashtag;
// END OF FILE ==================================== //