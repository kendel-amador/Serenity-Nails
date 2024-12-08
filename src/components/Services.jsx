import { Container, Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

function Services() {
  return (
    <section className="services-section">
      <h2>Nuestros Servicios</h2>
      <Container>
        <Grid container spacing={3} className="grid-service-container">
          <Grid item xs={12} sm={6} md={3} className="grid-service-item">
            <Card className="card" elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1559006045-d34d415b2cff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                  className="card-media"
                />
              </CardActionArea>
              <p>Manicure • Arte</p>
              <h2>Gel X</h2>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="grid-service-item">
            <Card className="card" elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                  className="card-media"
                />
              </CardActionArea>
              <p>Manicure • Detalles</p>
              <h2>Semipermanente</h2>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="grid-service-item">
            <Card className="card" elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://img.freepik.com/foto-gratis/manicurista-cerca-esmalte-unas_23-2149171334.jpg?t=st=1722890511~exp=1722894111~hmac=69c6db85fe166c04114c9e160777cfc60ed74da74797416e47557ee71d8f629d&w=740"
                  alt="green iguana"
                  className="card-media"
                />
              </CardActionArea>
              <p>Manicure • Efectos</p>
              <h2>Manicura Rusa</h2>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="grid-service-item">
            <Card className="card" elevation={0}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://img.freepik.com/foto-gratis/hermosos-pies-femeninos-pedicura-azul-brillo_127675-2906.jpg?t=st=1728081535~exp=1728085135~hmac=22e3b52878398726c5dc14f0bbdad1291b97c1aefbe11f493f10c707f43fd58e&w=996"
                  alt="green iguana"
                  className="card-media"
                />
              </CardActionArea>
              <p>Pedicure • Arte</p>
              <h2>Pedicura</h2>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Services;
