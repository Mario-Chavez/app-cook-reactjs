import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Titulo = ({ titulo }) => {
    return (
        <Container className="container my-5">
            <Row className="p-4 text-center">
                <Col>
                    <h1>{titulo}</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Titulo;
