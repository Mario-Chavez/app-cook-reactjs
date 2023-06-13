import React from "react";
import { Container } from "react-bootstrap";
import TituloDeBusqueda from "../components/TituloDeBusqueda";

const Inicio = () => {
    return (
        <>
            <Container className="my-5 mainPage">
                <TituloDeBusqueda titulo="Soy  inicio " />
            </Container>
        </>
    );
};

export default Inicio;
