import { Container, Grid } from "@mui/material";
import React from "react";
import {
  PiPhoneOutgoingThin,
  PiCalendarThin,
  PiClockThin,
  PiMapPinThin,
} from "react-icons/pi";

function Info() {
  return (
    <section className="info-section">
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3} className="grid-info">
            <div className="icon-text">
              <PiPhoneOutgoingThin className="icon" aria-label="Teléfono" />
              <p>(506) 6240-0535</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3} className="grid-info">
            <div className="icon-text">
              <PiCalendarThin className="icon" aria-label="Calendario" />
              <p>Lunes - Sábado</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3} className="grid-info">
            <div className="icon-text">
              <PiClockThin className="icon" aria-label="Horario" />
              <p>11:00am - 8:00pm</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3} xl={3} className="grid-info">
            <div className="icon-text">
              <PiMapPinThin className="icon" aria-label="Ubicación" />
              <p>Limón - Colina</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Info;
