import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PencilFill, Trash } from "react-bootstrap-icons";
import { deleteReceta, obtenerRecetas } from "../../helpers/queries";
import Swal from "sweetalert2";
import "animate.css";

const ItemReceta = ({ receta, setRecetas }) => {
    const borrarReceta = () => {
        console.log("borrar");
        Swal.fire({
            title: "Estas seguro de eliminar la receta?",
            text: "No se puede revertir este paso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar!",
            cancelButtonText: "Cancelar!",
            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                deleteReceta(receta.id).then((resp) => {
                    if (resp && resp.status === 200) {
                        Swal.fire(
                            "Receta Eliminada!",
                            `El producto : ${receta.nombreReceta} a sido eliminado.`,
                            "success"
                        );
                        obtenerRecetas().then((resp) => {
                            setRecetas(resp);
                        });
                    } else {
                        Swal.fire(
                            "Se produjo un error !",
                            `Intentele realizar esta operacion  mas tarde.`,
                            "error"
                        );
                    }
                });
            }
        });
    };
    return (
        <tr>
            <td># {receta.id}</td>
            <td className="text-truncate">{receta.nombreReceta}</td>
            <td className="text-truncate">{receta.categoria}</td>
            <td className="text-truncate">{receta.ingredientes}</td>
            <td className="text-truncate">{receta.preparacion}</td>
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
