import React from "react";
import logo from "../../assets/logo-cook.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-warning fs-4 pt-5 pb-2 mt-5">
            <Container>
                <Row>
                    <Col sm={6} className="d-flex justify-content-center justify-content-md-start">
                        <Image src={logo} alt="Logo" rounded className="w-10 img-footer ps-md-5 ms-md-5" />
                    </Col>
                    <Col sm={6} className="d-flex justify-content-center justify-content-md-end">
                        <ul className="mt-1 mt-md-4 pt-3 pb-0 mb-0 text-md-end pe-md-5 me-md-5">
                            <li style={{ listStyle: "none" }}>
                                _ Facebook <Facebook size={25} />
                            </li>
                            <li style={{ listStyle: "none" }}>
                                _ Twitter <Twitter size={25} />
                            </li>
                            <li style={{ listStyle: "none" }}>
                                _ Instagram {""}
                                <Instagram size={25} />
                            </li>
                            {/* Agrega aquí más enlaces a tus redes sociales */}
                        </ul>
                       
                    </Col>
                    <p className="text-center pt-2"> &copy; Todos los derechos reservados</p>
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
