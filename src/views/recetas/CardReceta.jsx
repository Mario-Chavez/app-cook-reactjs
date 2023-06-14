import React from "react";
import { Card, Col , Button} from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="rounded-0">
        <Card.Img className="rounded-0"
          variant="top"
          src="https://www.paulinacocina.net/wp-content/uploads/2022/05/receta-de-tarta-de-durazno.jpg"
        />
        <Card.Body className="text-white featured-color">
          <Card.Title className="pb-3">Tarta de durazno</Card.Title>
          <Button variant="warning">Ver receta</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
