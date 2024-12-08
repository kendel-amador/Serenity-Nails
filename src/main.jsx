import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Info from "./components/Info";
import About from "./components/About";
import Carrousel from "./components/Carrousel";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Navbar />
    <Hero />
    <Info />
    <About />
    <Services />
    <Carrousel />
    <Prices />
    <Contact />
    <Footer />
  </React.StrictMode>
);
