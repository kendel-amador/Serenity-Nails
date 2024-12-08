import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import whitelogo from "../assets/img/white-logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector(".navbar-container");
      if (window.scrollY > 0) {
        header.classList.add("down");
      } else {
        header.classList.remove("down");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar-container">
      <a className="navbar-logo" href="#inicio">
        <img src={whitelogo} alt="Serenity Nails Logo" />
      </a>
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#inicio" onClick={toggleMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#acerca" onClick={toggleMenu}>
              Acerca
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={toggleMenu}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#precios" onClick={toggleMenu}>
              Precios
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={toggleMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {isOpen ? <TfiClose /> : <CiMenuFries />}
      </div>
    </header>
  );
}

export default Navbar;
