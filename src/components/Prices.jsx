import { Container, Grid } from "@mui/material";
import React from "react";

function Prices() {
  return (
    <section className="prices-section" id="precios">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="info-container-prices">
            <h2>Precios</h2>

            <div className="price-item">
              <div className="prices">
                <h3>Gel X</h3>
                <span className="line"></span>
                <span className="price">₡10.000</span>
              </div>
              <p>Gel X, Manicura Rusa.</p>
            </div>

            <div className="price-item">
              <div className="prices">
                <h3>Semipermanentes</h3>
                <span className="line"></span>
                <span className="price">₡5.000</span>
              </div>
              <p>Semipermanentes, Manicura Rusa.</p>
            </div>

            <div className="price-item">
              <div className="prices">
                <h3>Manicura rusa</h3>
                <span className="line"></span>
                <span className="price">₡5.000</span>
              </div>
              <p>Limpieza, Purificación de Uñas.</p>
            </div>

            <div className="price-item">
              <div className="prices">
                <h3>Pedicura</h3>
                <span className="line"></span>
                <span className="price">₡5.000</span>
              </div>
              <p>Pedicura, Pedicura Rusa.</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="image-container">
              <img
                src="https://img.freepik.com/foto-gratis/archivo-manicura-hermosa-saludable_23-2148766533.jpg?t=st=1728081621~exp=1728085221~hmac=8147b7c02ba5900bfb3c68723cd224914324b0f593c77af630986e11de769f1f&w=740"
                alt="Manicura profesional en Serenity Nails"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Prices;
