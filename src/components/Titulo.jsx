import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Titulo = ({ titulo }) => {
    return (
        <Container className="container mt-5">
            <Row className=" text-center text-white">
                <Col>
                    <h1>{titulo}</h1>
                    <hr/>
                </Col>
            </Row>
        </Container>
    );
};

export default Titulo;
