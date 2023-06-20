import React from "react";
import { Card, Row,Col, Button } from "react-bootstrap";
import ".././Login.css";

const CardReceta = ({ recetas }) => {
  return (
    <Row className=" justify-content-center">
      {recetas.map((receta) => (
        <Col md={4} lg={3} key={receta.id} className="my-2">
          <Card className="rounded-0">
            <Card.Img
              className="rounded-0 card-imagen"
              variant="top"
              src={receta.imagen}
              alt={receta.nombreReceta}
            />
            <Card.Body className="text-white featured-color">
              <Card.Title className="pb-3">{receta.nombreReceta}</Card.Title>
              <Button variant="warning">Ver receta</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default CardReceta;

/*const CardReceta = () => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="rounded-0">
        <Card.Img className="rounded-0"
          variant="top"
          src={receta.imagen} alt={receta.nombreReceta}
        />
        <Card.Body className="text-white featured-color">
          <Card.Title className="pb-3">{receta.nombreReceta}</Card.Title>
          <Button variant="warning">Ver receta</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardReceta;*/
