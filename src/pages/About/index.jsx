// IMPORTS ========================================= //
import React from "react";
// COMPONENTS IMPORT =============================== //
import Hero from "../../components/Hero";
// STYLES IMPORT =================================== //
import scss from "./about.module.scss";

const About = () => {
  return (
    <main className={scss.pageAbout}>
      <Hero />
      <h1>ABOUT</h1>
      <p>Underconstruction</p>
    </main>
  );
};

export default About;
