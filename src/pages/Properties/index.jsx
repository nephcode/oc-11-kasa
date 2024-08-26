// COMPONENTS IMPORT =============================== //
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMapMarker } from "react-icons/fa";
import NotFound from "../Error";
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
    return <NotFound />;
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
  const [firstName, lastName] = host.name.split(" ");

  return (
    <main>
      <Slider pictures={pictures} />
      <section className={scss.info}>
        <div id="home" className={scss.home}>
          <h1 className={scss.h1property}>{title}</h1>
          <p className={scss.pin}>
            <FaMapMarker />
            <span>{location}</span>
          </p>
          <div className={scss.taglist}>
            <Tag tags={tags} />
          </div>
        </div>

        <div id="host" className={scss.host}>
          <div className={scss.profil}>
            <div>
              <p>
                {firstName}
                <br />
                {lastName}
              </p>
            </div>
            <div>
              <img src={host.picture} alt={title} />
            </div>
          </div>
          <Rating element={rating} />
        </div>

        <div id="details" className={scss.details}>
          <Details
            summaryContent={"Description"}
            detailsContent={<p>{description}</p>}
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
      </section>
    </main>
  );
};

export default Property;
// END OF FILE ==================================== //
