import React from "react";
import { Routes, Route } from "react-router-dom";
import Administrador from "../../views/Administrador";
import CrearReceta from "../../views/recetas/CrearReceta";
import EditarReceta from "../../views/recetas/EditarReceta";

const RutasAdministardor = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Administrador />}></Route>
                <Route exact path="/crear" element={<CrearReceta />}></Route>
                <Route exact path="/editar/:id" element={<EditarReceta />}></Route>
            </Routes>
        </>
    );
};

export default RutasAdministardor;
