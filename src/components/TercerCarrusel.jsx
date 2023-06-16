import React from "react";
import Carousel from "react-bootstrap/Carousel";

const TercerCarrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={7500}>
          <img
            className="d-block w-100 carousel-responsive p-1"
            src="https://assets.elgourmet.com/wp-content/uploads/2023/03/oquis_sxFVpXTYgG193l7QSRezPdWybENjrc-1024x683.png.webp"
            alt="Ñoquis"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Ñoquis</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7500}>
          <img
            className="d-block w-100 carousel-responsive p-1"
            src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_fpa6sn8vqc_empanadas-1024x683.jpg.webp"
            alt="Empanadas"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Empanadas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7500}>
          <img
            className="d-block w-100 carousel-responsive p-1"
            src="https://assets.elgourmet.com/wp-content/uploads/2023/06/shutterstock_636498131-1-1024x680.jpg.webp"
            alt="Tarta de queso"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Tarta de queso</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TercerCarrusel;
