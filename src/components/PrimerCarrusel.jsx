import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PrimerCarrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100 img-responsive p-1"
            src="https://www.paulinacocina.net/wp-content/uploads/2020/06/screen-shot-2020-06-09-at-18.25.49.jpg"
            alt="Salsa blanca"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Salsa blanca</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100 img-responsive p-1"
            src="https://www.paulinacocina.net/wp-content/uploads/2017/04/video-3.jpg"
            alt="Pizza"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Pizza</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100 img-responsive p-1"
            src="https://www.paulinacocina.net/wp-content/uploads/2022/03/pollo-relleno-al-horno-800x553.jpg"
            alt="Pollo Relleno al Horno"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Pollo Relleno al Horno</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PrimerCarrusel;
