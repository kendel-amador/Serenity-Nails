import { Container, Grid } from "@mui/material";
import React from "react";
import blacklogo from "../assets/img/black-logo.webp";
import { BiLogoInstagram } from "react-icons/bi";
import { PiPhoneTransfer } from "react-icons/pi";
import { PiMapPinLineLight } from "react-icons/pi";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Grid container spacing={3}>
          <Grid
            className="footer-section"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <img
              src={blacklogo}
              alt="Serenity Nails Logo"
              className="footer-logo"
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
          </Grid>
          <Grid
            className="footer-section"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <h3>Nuestro Salón</h3>
            <ul className="footer-list">
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Acerca</a>
              </li>
              <li>
                <a href="">Servicios</a>
              </li>
              <li>
                <a href="">Precios</a>
              </li>
              <li>
                <a href="">Contacto</a>
              </li>
            </ul>
          </Grid>
          <Grid
            className="footer-section"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <h3>Horario</h3>
            <ul className="footer-list">
              <li>Lunes - Sábado</li>
              <li>11:00am - 8:00pm</li>
              <li>Domingo</li>
              <li>Cerrado</li>
            </ul>
          </Grid>
          <Grid
            className="footer-section"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <h3>Contacto</h3>

            <ul className="footer-list">
              <li>
                <BiLogoInstagram className="icon-footer" />
                <a href="">__serenity.nails</a>
              </li>

              <li>
                <PiPhoneTransfer className="icon-footer" />
                <a href="">(506) 6240-0535</a>
              </li>

              <li>
                <PiMapPinLineLight className="icon-footer" />
                <a href="">Colina, Limón</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div className="copyright-container">
        <p className="copyright-text">
          Copyright © 2024 Serenity Nails. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
