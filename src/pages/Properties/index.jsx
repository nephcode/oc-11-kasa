// COMPONENTS IMPORT =============================== //
import { useParams } from "react-router-dom";

// DATA IMPORT ===================================== //
import datas from "../../../public/data/logements.json";

// STYLES IMPORT =================================== //
import scss from "./property.module.scss";

// REACT COMPONENT ================================= //
const Property = () => {
  const { id } = useParams();
  const elementData = datas.find(data => data.id === id);
  console.table(elementData);

  const name = elementData.host.name.split(' ');


  return (
    <main 
      className={scss.pageProperty}      
    >
      <h1 className={scss.view}>{name}</h1>
      <div className={scss.view}>Property {id}</div>

      
    </main>
  );
};

export default Property;
// END OF FILE ==================================== //
