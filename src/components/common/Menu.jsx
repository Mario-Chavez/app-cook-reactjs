import React from "react";
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-cook-min1.png";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
    const navegacion = useNavigate();

    const logOut = () => {
        sessionStorage.removeItem("usuario");
        setUsuarioLogeado({});
        navegacion("/");
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>
                    <Image src={logo} rounded className="w-75 " />
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
                        <NavLink
                            end
                            className={"nav-item nav-link text-warning fs-4"}
                            to={"/"}
                        >
                            Inicio
                        </NavLink>
                        {usuarioLogeado.email ? (
                            <>
                                <NavLink
                                    end
                                    className={"nav-item nav-link text-warning fs-4"}
                                    to={"/administrador"}
                                >
                                    Administrador
                                </NavLink>
                                <Button
                                    variant="warning"
                                    className=" fs-4"
                                    onClick={logOut}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                {" "}
                                <NavLink
                                    end
                                    className={"nav-item nav-link text-warning fs-4"}
                                    to={"/registro"}
                                >
                                    Registro
                                </NavLink>
                                <NavLink
                                    end
                                    className={"nav-item nav-link text-warning fs-4"}
                                    to={"/login"}
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
