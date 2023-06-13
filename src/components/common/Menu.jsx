import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
    const navegacion = useNavigate();

    const logOut = () => {
        sessionStorage.removeItem("usuario");
        /* seguir aqui */
        setUsuarioLogeado({});
        navegacion("/");
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>
                    Logo de la app
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    ></Nav>
                    <Nav
                        className="me-0 my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <NavLink end className={"nav-item nav-link"} to={"/"}>
                            Inicio
                        </NavLink>
                        <NavLink end className={"nav-item nav-link"} to={"/registro"}>
                            Registro
                        </NavLink>
                        {usuarioLogeado.email ? (
                            <>
                                <NavLink
                                    end
                                    className={"nav-item nav-link"}
                                    to={"/administrador"}
                                >
                                    Administrador
                                </NavLink>
                                <Button variant="dark" onClick={logOut}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <NavLink end className={"nav-item nav-link"} to={"/login"}>
                                Login
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
