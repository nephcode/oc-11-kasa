// COMPONENTS IMPORT =============================== //
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMapMarker } from "react-icons/fa";

import Details from "../../components/Details";
import Rating from "../../components/Rating";
import Slider from "../../components/Gallery";
import Tag from "../../components/Hashtag";
// DATA IMPORT ===================================== //
import data from "../../../public/data/logements.json";

// STYLES IMPORT =================================== //
import scss from "./property.module.scss";

// REACT COMPONENT ================================= //
const Property = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = data.find((logement) => logement.id === id);
    if (foundLogement) {
      setLogement(foundLogement);
    }
  }, [id]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const {
    host,
    title,
    location,
    description,
    pictures,
    equipments,
    tags,
    rating,
  } = logement;

  // HACK LAST MINUTE 
  const [firstName, lastName] = host.name.split(' ');


  return (
    <main id={`mainProperty`} className={scss.pageProperty}>
      <Slider pictures={pictures} />
      <div id={`info`} className={scss.info}>
        <div id={`home`} className={scss.home}>
          <h1 className={scss.h1property}>{title}</h1>
          <p className={scss.pin}>
            <FaMapMarker />
            <span>{location}</span>
          </p>
          <div className={scss.taglist}>
            <Tag tags={tags} />
          </div>
        </div>

        <div id={`host`} className={scss.host}>
          <div className={scss.profil}>
            <p>{firstName}<br />{lastName}</p>

            <div><img src={host.picture} alt={title} /></div>
          </div>
          <div>
            <Rating element={rating} />
          </div>
        </div>

        <div id={`detail`} className={scss.detail}>
          <Details
            summaryContent={"Description"}
            detailsContent={description}
          />
          <Details
            summaryContent={"Equipement"}
            detailsContent={
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Property;
// END OF FILE ==================================== //
