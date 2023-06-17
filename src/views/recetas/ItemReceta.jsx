import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PencilFill, Trash } from "react-bootstrap-icons";

const ItemReceta = ({ receta, setRecetas }) => {
    const borrarReceta = () => {
        console.log("soy borrar");
    };
    return (
        <tr>
            <td># {receta.id}</td>
            <td>{receta.nombreReceta}</td>
            <td>{receta.categoria}</td>
            <td>{receta.ingredientes}</td>
            <td>{receta.descripcion}</td>
            <td>
                <Link
                    to={`/administrador/editar/${receta.id}`}
                    className="btn btn-warning me-xl-2 mb-1"
                >
                    <PencilFill />
                </Link>
                <Button variant="danger" onClick={borrarReceta}>
                    <Trash />
                </Button>
            </td>
        </tr>
    );
};

export default ItemReceta;
