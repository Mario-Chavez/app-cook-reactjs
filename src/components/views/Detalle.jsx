import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import { obtenerUnaReceta } from "../helpers/queries";
// import Swal from "sweetalert2";

const Detalle = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);


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
        console.log(error);
      }
    };
    obtenerReceta();
  }, [id]);
  
  if (!receta) {
    return <div></div>;
  }

  const renderLista = (text) => {
    const items = text.split("\n");
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  const renderListaOrdenada = (text) => {
    if (!text) {
      return null;
    }
    const paragraphs = text.split("\n");
    console.log('Valor de paragraphs:', paragraphs);
    return (
      <ol>
        {paragraphs.map((paragraph, index) => (
          <li key={index}>{paragraph}</li>
          
        ))}
       
      </ol>
      
    );
    
  };

  return (
    <Container>
      <Row className="featured-color my-md-4">
        <Col md={7} lg={6} className="px-4 order-1 order-md-0">
          <h3 className="text-warning mt-3 mt-lg-5 mb-3">{receta.nombreReceta}</h3>
          <p className="text-warning">{receta.descripcion}</p>
        </Col>
        <Col md={5} lg={6} className="p-0 order-0 order-md-1">
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
            <div>
            {renderLista(receta.ingredientes)}
            </div>
          </div>
        </Col>
        <Col md={7} lg={8} className="px-3">
          <h4 className="pt-3 pb-3">Preparación</h4>
          <div className="pe-0">
          {renderListaOrdenada(receta.preparacion)}
          

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detalle;
