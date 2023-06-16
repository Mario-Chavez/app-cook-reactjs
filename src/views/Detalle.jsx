import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Detalle = () => {
  return (
    <Container>
      <Row className="featured-color my-md-4">
        <Col md={6} className="px-4 order-1 order-md-0">
          <h3 className="text-warning mt-5 mb-3">Tarta de durazno</h3>
          <p className="text-warning">
            Si nunca hiciste nada dulce en tu vida pero querés hacer algo para
            el mate de esta tarde o si sos de las personas que nunca tiene nada
            en casa y hoy vienen amigos y querés sorprenderlos, acompañame! No
            hay mejor forma de empezar que con una tarta de durazno.
          </p>
        </Col>
        <Col md={6} className="p-0 order-0 order-md-1">
          <img
            className="img-detail"
            src="https://www.paulinacocina.net/wp-content/uploads/2022/05/receta-de-tarta-de-durazno.jpg"
            alt="Tarta de durazno"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5} lg={4} className="my-1">
            <div className="p-3 border border-3">
            <h4>Ingredientes</h4>
      <ul>
        <li>250 gr de harina leudante. </li>
        <li>100 gr de margarina.</li>
        <li>175 gr de azúcar.</li>
        <li>2 huevos.</li>
        <li>1 cucharadita de polvo de hornear.</li>
        <li>Ralladura de 1 limón.</li>
        <li>Maicena c/n.</li>
        <li>250 gr de dulce</li>
        <li>250 gr de crema de leche (doble o de alto tenor graso).</li>
        <li>250 gr de fruta.</li>
        <li>1 sobre de gelatina sin sabor. </li>
        <li>200 gr de almíbar.</li>
      </ul>
            </div>
      
      </Col>
      <Col md={7} lg={8} className="px-3">
      <h4 className="pt-3 pb-3">Preparación</h4>
      <h5>Para la masa de la tarta de durazno</h5>
      <ol>
        <li>
          En un recipiente mezclar el azúcar con los huevos y la ralladura de
          limón.
        </li>
        <li>
          En una superficie lisa colocar la harina con el polvo de hornear y la
          margarina a temperatura ambiente. Con las manos integrar los
          ingredientes sin amasar.
        </li>
        <li>
          Incorporar la mezcla de huevo con el azúcar y comenzar a unir
          incorporando la cantidad necesaria de maicena hasta lograr que la masa
          no se pegue en las manos. Colocar la masa dentro de una bolsa y
          refrigerar por un par de horas.
        </li>
        <li>
          Estirar la masa sobre una superficie lisa enharinada, luego colócala
          estirada dentro del molde para tarta enmantecado. Llevar a horno
          precalentado en mínimo por 20 minutos.
        </li>
      </ol>
      <h5>Cómo hacer tarta de durazno</h5>
      <ol>
        <li>Arriba de la base colocar una capa de dulce de leche y enfriar.</li>
        <li>
          Pasados unos 10 minutos, colocar una capa de crema de leche batida sin
          azúcar y refrigerar.
        </li>
        <li>
          Cortar el durazno en láminas finas. Luego preparar la gelatina sin
          sabor, por último incorporar el almíbar a la gelatina y mezclar.
        </li>
        <li>
          Cubrir la superficie de la tarta con duraznos y por arriba coloca la
          gelatina. Refrigerar por 1 hs. si es necesario ratificar gelatina.
        </li>
      </ol>
      </Col>
     

      </Row>

    </Container>
  );
};

export default Detalle;
