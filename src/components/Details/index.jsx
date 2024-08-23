import React from "react";
import scssDetails from "./details.module.scss";
import { FaAngleDown } from "react-icons/fa";
//const myIcon = <FontAwesomeIcon icon={faMyIcon} />

const Details = ({ summaryContent, detailsContent }) => {
  return (
    <details className={scssDetails.details}>
      <summary>
      <span className={scssDetails.summaryText}>{summaryContent}</span>
      <span className={scssDetails.details__customMarker}><FaAngleDown /></span>
      </summary>
      {detailsContent && <p className={scssDetails.p}>{detailsContent}</p>}
    </details>
  );
};
export default Details;
