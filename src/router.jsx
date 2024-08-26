// ROUTER.JSX ================================= //

// MODULES ==================================== //
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// LAYOUT ===================================== //
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// PAGES ====================================== //
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Properties";
import NotFound from "./pages/Error";

// STYLES ===================================== //

import "./sass/global.module.scss";

// RENDER ===================================== //
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
// END RENDER ================================ //
