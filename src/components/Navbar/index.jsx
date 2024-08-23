import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={scss.nav}>
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) => (isActive ? scss["active-link"] : "")}
      >
        Accueil
      </NavLink>&nbsp; 
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? scss["active-link"] : "")}
      >
         À propos
      </NavLink>
    </nav>
  );
};

export default Navbar;