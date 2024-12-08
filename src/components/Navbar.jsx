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
      <a className="navbar-logo" href="#">
        <img src={whitelogo} alt="Serenity Nails Logo" />
      </a>
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Acerca</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Precios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
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
