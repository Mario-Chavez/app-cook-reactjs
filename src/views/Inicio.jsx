import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Titulo from "../components/Titulo";
import PrimerCarrusel from "../components/PrimerCarrusel";
import SegundoCarrusel from "../components/SegundoCarrusel";
import TercerCarrusel from "../components/TercerCarrusel";

const Inicio = () => {
  return (
    <>
      <Container className="mainPage">
      <Titulo titulo="Recetas de cocina fáciles y caseras" />
        <Row className="p-4 banner mb-3">
          <Col sm={7} md={8} className="px-0">
            <PrimerCarrusel></PrimerCarrusel>
          </Col>
          <Col sm={5} md={4} className="mx-0">
            <Row>
              <Col md={12} className="px-0">
                <SegundoCarrusel></SegundoCarrusel>
              </Col>
              <Col md={12} className="px-0">
                <TercerCarrusel></TercerCarrusel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
