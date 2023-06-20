import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import { obtenerUnaReceta } from "../helpers/queries";
// import Swal from "sweetalert2";

const Detalle = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  // useEffect(() => {
  //   if (id) {
  //     obtenerUnaReceta(id)
  //       .then((respuesta) => {
  //         console.log(respuesta);
  //         if (respuesta) {
  //           setReceta(respuesta);
  //         } else {
  //           Swal.fire(
  //             "Se produjo un error!",
  //             "Intente realizar esta operación más tarde.",
  //             "error"
  //           );
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //         Swal.fire(
  //           "Se produjo un error!",
  //           "Intente realizar esta operación más tarde.",
  //           "error"
  //         );
  //       });
  //   }
  // }, [id]);

  useEffect(() => {
    const obtenerReceta = async () => {
      try {
        const respuesta = await fetch("../db.json");
        const datosRecetas = await respuesta.json();
        const recetaEncontrada = datosRecetas.recetas.find(
          (receta) => receta.id === parseInt(id)
        );
        setReceta(recetaEncontrada);
      } catch (error) {
        console.log("Error:", error);
        Swal.fire(
          "Se produjo un error!",
          "Intente realizar esta operación más tarde.",
          "error"
        );
      }
    };
  
    obtenerReceta();
  }, [id]);
  
  if (!receta) {
    return <div></div>;
  }
  

  return (
    <Container>
      <Row className="featured-color my-md-4">
        <Col md={6} className="px-4 order-1 order-md-0">
          <h3 className="text-warning mt-5 mb-3">{receta.nombreReceta}</h3>
          <p className="text-warning"></p>
        </Col>
        <Col md={6} className="p-0 order-0 order-md-1">
          <img
            className="img-detail"
            src={receta.imagen}
            alt={receta.nombreReceta}
          />
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={4} className="my-1">
          <div className="p-3 border border-3">
            <h4>Ingredientes</h4>
            <ul>
            {receta.ingredientes}
              {/* {receta.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))} */}
            </ul>
          </div>
        </Col>
        <Col md={7} lg={8} className="px-3">
          <h4 className="pt-3 pb-3">Preparación</h4>
          <ol>
          {receta.preparacion}
            {/* {receta.preparacion.map((paso, index) => (
              <li key={index}>{paso}</li>
            ))} */}
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Detalle;
