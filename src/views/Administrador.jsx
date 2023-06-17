import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerRecetas } from "../helpers/queries";
// import { ItemReceta } from "../views/recetas/ItemReceta";
const Administrador = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        obtenerRecetas().then((respuesta) => {
            console.log(respuesta);
            setRecetas(respuesta);
            // todo: resolvcer el error si lo huibiera en coneccion en API
        });
    }, []);

    return (
        <Container className="mainPage">
            <div className="row mt-5">
                <div className="display-4 col-8">
                    <h1>Nuestras Recetas</h1>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <Link
                        type="button"
                        className="btn btn-outline-warning"
                        to={"/administrador/crear"}
                    >
                        Agregar Receta
                    </Link>
                </div>
            </div>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre Receta</th>
                        <th scope="col">categoria</th>
                        <th scope="col">ingredientes</th>

                        <th scope="col">imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {recetas.map((receta) => (
                        <ItemReceta
                            key={receta.id}
                            receta={receta}
                            setRecetas={setRecetas}
                        ></ItemReceta>
                    ))} */}
                </tbody>
            </table>
        </Container>
    );
};

export default Administrador;
