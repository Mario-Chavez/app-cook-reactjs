import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Detalle = () => {
  return (
    <Container>
      <Row className="featured-color my-4">
        <Col md={6} className="px-4 order-1 order-md-0">
          <h3 className="text-warning mt-5 mb-3">Tarta de durazno</h3>
          <p className="text-warning">
            Si nunca hiciste nada dulce en tu vida pero querés hacer algo para
            el mate de esta tarde o si sos de las personas que nunca tiene nada
            en casa y hoy vienen amigos y querés sorprenderlos, acompañame! No
            hay mejor forma de empezar que con una tarta de durazno.
          </p>
        </Col>
        <Col md={6} className="p-0 order-0 order-md-1">
            <img className="img-detail" src="https://www.paulinacocina.net/wp-content/uploads/2022/05/receta-de-tarta-de-durazno.jpg" alt="Tarta de durazno" />
        </Col>
      </Row>
    </Container>
  );
};

export default Detalle;

