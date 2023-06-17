import React from "react";
import logo from "../../assets/logo-cook.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-warning fs-4 py-5 mt-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Image src={logo} alt="Logo" rounded className="w-10" />
                    </Col>
                    <Col lg={6}>
                        <ul className="mt-5 py-3">
                            <li style={{ listStyle: "none" }}>
                                _ Facebook <Facebook size={40} />
                            </li>
                            <li style={{ listStyle: "none" }}>
                                _ Twitter <Twitter size={40} />
                            </li>
                            <li style={{ listStyle: "none" }}>
                                _ Instagram {""}
                                <Instagram size={40} />
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
