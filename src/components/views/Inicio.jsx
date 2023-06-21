import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Titulo from "../Titulo";
import PrimerCarrusel from "../PrimerCarrusel";
import SegundoCarrusel from "../SegundoCarrusel";
import TercerCarrusel from "../TercerCarrusel";
import CardReceta from "./recetas/CardReceta";
import { useEffect, useState } from "react";
import Banners from "../Banners";
import { obtenerRecetas } from "../helpers/queries";

const Inicio = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        obtenerRecetas().then((resp) => {
            setRecetas(resp);
        });
    }, []);

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
                            <Col xs={6} sm={12} md={12} className="px-0">
                                <SegundoCarrusel></SegundoCarrusel>
                            </Col>
                            <Col xs={6} sm={12} md={12} className="px-0">
                                <TercerCarrusel></TercerCarrusel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className="bg-dark my-5" />
                <h2 className="my-4 text-center display-5">RECETAS</h2>
                <Container>
                    <CardReceta recetas={recetas}></CardReceta>
                </Container>
                <Banners></Banners>
            </Container>
        </>
    );
};

export default Inicio;
