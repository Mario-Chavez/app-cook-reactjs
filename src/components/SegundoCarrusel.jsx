import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PrimerCarrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 carousel-responsive p-1"
            src="https://www.paulinacocina.net/wp-content/uploads/2023/03/flan-de-coco-4.jpg"
            alt="Flan de coco"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Flan de coco</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 carousel-responsive p-1"
            src="https://www.paulinacocina.net/wp-content/uploads/2023/02/pay-de-limon.jpg"
            alt="Pay de limón"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Pay de limón</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 carousel-responsive p-1"
            src="https://www.paulinacocina.net/wp-content/uploads/2022/05/receta-de-tarta-de-durazno.jpg"
            alt="Tarta de durazno"
          />
          <Carousel.Caption>
            <h3 className="bg-dark opacity-75">Tarta de durazno</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PrimerCarrusel;
