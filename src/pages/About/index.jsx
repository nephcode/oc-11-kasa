// IMPORTS ========================================= //
import React from "react";

// COMPONENTS IMPORT =============================== //
import Hero from "../../components/Hero";
import Details from "../../components/Details";
// STYLES IMPORT =================================== //
import scssAbout from "./about.module.scss";
// DATA IMPORT ===================================== //
import aboutData from "../../../public/data/about.json";

// REACT PAGE ====================================== //
const About = () => {
  return (
    <main className={scssAbout.pageAbout}>
      <Hero />
      {aboutData.map(({ title, description }) => {
        if (title && description) {
          return (
            <Details
              key={title}
              summaryContent={title}
              detailsContent={description}
            />
          );
        }
      })}
    </main>
  );
};

export default About;
// END OF FILE ==================================== //
