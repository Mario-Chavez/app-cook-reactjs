import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./Banners.css";

const Banners = () => {
  return (
    <div>
      <hr className="bg-dark my-5" />
      <Container>
        <Row className="m-1 p-1 justify-content-center color-banner align-items-center">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center imagen-redonda"
          >
            <Image
              src="https://img.freepik.com/foto-gratis/vista-lateral-familia-comiendo-juntos_23-2148625988.jpg?w=826&t=st=1687270971~exp=1687271571~hmac=375a8586e2d84c2a93227545f821161a95f41b22e5a412e761cd03f56c15cf5d"
              roundedCircle
              className="w-100"
            />
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h2 className="display-6">Un poco sobre nosotros</h2>
              <p className="fs-5">
                <em>
                  "En este rincón virtual, hemos creado un espacio donde las
                  recetas se convierten en historias, los ingredientes en
                  protagonistas y cada plato es un capítulo en la emocionante
                  aventura culinaria de nuestras vidas. Aquí, hemos tenido el
                  privilegio de presenciar cómo las recetas han cambiado la vida
                  de las personas, despertando su pasión por la cocina y
                  nutriendo sus cuerpos y almas".
                </em>
              </p>
              <p className="text-end">Mario Chavez - CEO</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5 bg-warning lead">
        <Carousel className="p-3">
          <Carousel.Item>
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                "Gracias al sitio web de recetas de comida, pude cambiar mis
                hábitos alimenticios y adoptar un estilo de vida más saludable.
                Las deliciosas recetas y los consejos nutricionales me han dado
                más energía y me siento genial."
              </p>
              <footer className="blockquote-footer mt-1">
                - Ana Rocha
              </footer>
            </blockquote>
          </Carousel.Item>
          <Carousel.Item>
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                "No puedo agradecer lo suficiente a este sitio web. Las recetas
                son increíbles y han transformado mi forma de cocinar. Ahora
                puedo sorprender a mi familia y amigos con platos deliciosos y
                saludables."
              </p>
              <footer className="blockquote-footer mt-1">
                - Taylor Swift
              </footer>
            </blockquote>
          </Carousel.Item>
          <Carousel.Item>
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                "Este sitio web ha sido mi salvación. Gracias a las recetas y
                los consejos prácticos, he logrado mantener una dieta
                equilibrada y mejorar mi bienestar general. ¡Mi energía ha
                aumentado y me siento más feliz!"
              </p>
              <footer className="blockquote-footer mt-1">
                - Tom Cruise
              </footer>
            </blockquote>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="">
        <Row className="m-1 p-1 justify-content-center color-banner align-items-center">
          <Col xs={12} md={6}>
            <div>
              <h2 className="display-6">Tu fuente de inspiración</h2>
              <p className="fs-5">
                <em>
                  "Estamos aquí para compartir nuestras recetas, nuestros
                  conocimientos y nuestra pasión contigo. Únete a nuestra
                  comunidad, descubre nuevas delicias y cambia tu vida a través
                  del poder de la cocina".
                </em>
              </p>
              <p className="text-end">COOK - Recetas</p>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center imagen-redonda h-100"
          >
            <Image
              src="https://img.freepik.com/foto-gratis/mano-cultivo-cortando-carne-ahumada-cerca-variedad-alimentos_23-2147930226.jpg?w=740&t=st=1687273742~exp=1687274342~hmac=ff3b7964a66bfb5e78b09014dcfe4354b2d47432a5202d0077fc077aefa94e90"
              className="w-100"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
      <hr className="bg-dark my-5" />
      <Container>
      <Row className="text-center">
        <Col lg={3} md={6} sm={12}>
          <img src="https://seeklogo.com/images/P/pedidosya-logo-A90F6F004F-seeklogo.com.png" alt="Pedidos Ya" className="img-fluid m-1" />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <img src="https://seeklogo.com/images/M/mcdonald-s-logo-255A7B5646-seeklogo.com.png" alt="Mc Donalds" className="img-fluid m-1" />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <img src="https://seeklogo.com/images/C/Coca-Cola-logo-108E6559A3-seeklogo.com.png" alt="Coca-Cola" className="img-fluid m-1" />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <img src="https://seeklogo.com/images/K/Kit_Kat-logo-B95436DB4E-seeklogo.com.png" alt="Nestle" className="img-fluid m-1" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Banners;
