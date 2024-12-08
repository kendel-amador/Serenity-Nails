import { Container, Grid } from "@mui/material";
import React from "react";
import sn4 from "../assets/img/sn4.jpg"
import sn3 from "../assets/img/sn3.jpg"
import foto1 from "../assets/img/2.jpg"
import foto3 from "../assets/img/3.jpg"

function Contact() {
  return (
    <section className="contact-section">
      <h2>Síguenos en Instagram</h2>
      <h3>
        <a
          href="https://www.instagram.com/__serenity.nails"
          target="_blank"
          rel="noopener noreferrer"
        >
          @__serenity.nails
        </a>
      </h3>
      <Container>
        <Grid container spacing={0} className="grid-contact-container">
          <Grid
            className="grid-contact-item flex-container"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <img
              className="rectangular-image"
              src={foto1}
              alt="Manicura profesional en Serenity Nails"
            />
          </Grid>
          <Grid
            className="grid-contact-item flex-container"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <img
              className="square-image"
              src={sn4}
              alt="Manicura profesional en Serenity Nails"
            />
          </Grid>
          <Grid
            className="grid-contact-item flex-container"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <img
              className="rectangular-image"
              src={foto3}
              alt="Manicura profesional en Serenity Nails"
            />
          </Grid>
          <Grid
            className="grid-contact-item flex-container"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
          >
            <img
              className="square-image"
              src={sn3}
              alt="Manicura profesional en Serenity Nails"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Contact;
