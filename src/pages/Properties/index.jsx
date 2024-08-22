// COMPONENTS IMPORT =============================== //
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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

  const { host, title, location, description, pictures, equipments, tags, rating } =
    logement;

  return (
    <main className={scss.pageProperty}>
      <h1 className={scss.view}>{title}</h1>
      <div className={scss.host}>
            <span>{host.name}</span>
            <img src={host.picture} alt={title} />
      </div>
      <div className={scss.view}>{location}</div>
      <div className={scss.view}>{description}</div>
      <div className={scss.host}>
        <ul>
          {tags.map((tags, index) => (
            <li key={index}>{tags}</li>
          ))}
        </ul>
      </div>
      <div className={scss.view}>{rating}</div>
      <div>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={title} />
        ))}
      </div>
      <div>
        {equipments.map((equipment, index) => (
          <div key={index}>{equipment}</div>
        ))}
      </div>
    </main>
  );
};

export default Property;
// END OF FILE ==================================== //
