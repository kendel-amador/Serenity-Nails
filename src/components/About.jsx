import { Container, Grid } from "@mui/material";
import React from "react";
import imageOne from "../assets/img/1.jpg"

function About() {
  return (
    <section className="about-section">
      <Container>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="image-service-container"
          >
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522336552288-a9cc74a8dfd7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Manicura profesional en Serenity Nails"
                className="image image-1"
              />
              <img
                src={ imageOne }
                alt="Tratamientos médicos de manicura en Serenity Nails"
                className="image image-2"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="info-service-container"
          >
            <h2>Serenity Nails</h2>
            <h3>Manicura Perfecta</h3>
            <p>
              En Serenity Nails, ofrecemos manicuras perfectas que combinan
              técnica y creatividad para lograr resultados impecables.
            </p>
            <h3>Tratamientos Médicos de Manicura y Pedicura</h3>
            <p>
              Nos especializamos en tratamientos médicos de manicura y pedicura,
              asegurando la salud y belleza de tus uñas.
            </p>
            <h3>Arte en Uñas y Efectos</h3>
            <p>
              Explora nuestra gama de arte en uñas y efectos, donde cada diseño
              es una obra de arte única y personalizada.
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default About;
