import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import TituloDeBusqueda from "./components/TituloDeBusqueda";

function App() {
    return (
        <>
            <Container className="my-5 mainPage">
                <TituloDeBusqueda titulo="soy el titulo principal" />
            </Container>
            <footer className="bg-dark text-light text-center py-5">
                <p> &copy; Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default App;
