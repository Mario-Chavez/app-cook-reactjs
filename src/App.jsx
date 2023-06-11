import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import TituloDeBusqueda from "./components/TituloDeBusqueda";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./views/Inicio";
import Menu from "./components/common/Menu";

function App() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route exact path="/" element={<Inicio />}></Route>
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
