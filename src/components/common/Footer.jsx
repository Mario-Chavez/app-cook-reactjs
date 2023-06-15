import React from "react";
import logo from "../../assets/logo-cook.png";
import { Col, Container, Image, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-warning fs-4 py-5 mt-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Image src={logo} alt="Logo" rounded className="w-10" />
                    </Col>
                    <Col lg={6}>
                        <ul className="footer-social-media">
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            {/* Agrega aquí más enlaces a tus redes sociales */}
                        </ul>
                        <p> &copy; Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
//
//
{
    /* */
}
