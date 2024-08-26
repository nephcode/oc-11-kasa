import scssDetails from "./details.module.scss";
import { FaAngleUp } from "react-icons/fa";
//const myIcon = <FontAwesomeIcon icon={faMyIcon} />

const Details = ({ summaryContent, detailsContent }) => {
  return (
    <details className={scssDetails.details}>
      <summary>
        <span className={scssDetails.summaryText}>{summaryContent}</span>
        <span className={scssDetails.customMarker}><FaAngleUp /></span>
      </summary>
      {detailsContent}
    </details>
  );
};
export default Details;
