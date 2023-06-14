import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogeado }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navegacion = useNavigate();

    const onSubmit = (usuario) => {
        login(usuario).then((respuesta) => {
            if (respuesta) {
                sessionStorage.setItem("usuario", JSON.stringify(respuesta));
                setUsuarioLogeado(respuesta);
                Swal.fire("Bienvenido", "Ingresaste correctamente", "success");
                /* lo reedirigimos a otra page */
                navegacion("/administrador");
            } else {
                Swal.fire("Error", "Erro en password o en contraseña", "error");
            }
        });
    };

    return (
        <Container className="mainSection mainPage">
            <Card className="my-5">
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese un email"
                                {...register("email", {
                                    required: "este dato es obligatorio",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Ingresa un correo electrónico válido",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "este dato es obligatorio",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "La contraseña debe tener al menos 6 caracteres",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "La contraseña debe tener como maximo 20 caracteres",
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                                        message:
                                            "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.password?.message}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
