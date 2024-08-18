import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.module.scss";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
