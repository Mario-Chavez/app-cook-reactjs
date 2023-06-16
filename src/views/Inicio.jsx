import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Titulo from "../components/Titulo";
import PrimerCarrusel from "../components/PrimerCarrusel";
import SegundoCarrusel from "../components/SegundoCarrusel";
import TercerCarrusel from "../components/TercerCarrusel";
import CardReceta from "./recetas/CardReceta";

const Inicio = () => {
  return (
    <>
      <Container className="mainPage">
        <Row className="p-4 featured-color mb-3 mt-sm-2">
        <Titulo titulo="Recetas de cocina fáciles y caseras" />
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

        <h4 className="my-4">RECETAS</h4>
        <Row>
            <CardReceta></CardReceta>
            <CardReceta></CardReceta>
            <CardReceta></CardReceta>
            <CardReceta></CardReceta>
        </Row>

      </Container>
    </>
  );
};

export default Inicio;
