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
    <main>
      <Hero />
      <section className={scssAbout.pageAbout}>
      {aboutData.map(({ title, description }) => {
        if (title && description) {
          return (
            <Details
              key={title}
              summaryContent={title}
              detailsContent={<p>{description}</p>}
            />
          );
        }
      })}
      </section>
    </main>
  );
};

export default About;
// END OF FILE ==================================== //
