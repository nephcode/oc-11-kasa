// COMPONENTS IMPORT =============================== //
import { useParams } from "react-router-dom";

// STYLES IMPORT =================================== //
import scss from "./property.module.scss";

// REACT COMPONENT ================================= //
const Property = () => {
  const { id } = useParams();

  return (
    <main
      className={scss.pageProperty}
      id="page-property"
      data-target="page-property"
    >
      <h1 className={scss.view}>Property {id}</h1>
      <div className={scss.view}>Property {id}</div>
    </main>
  );
};

export default Property;
// END OF FILE ==================================== //
