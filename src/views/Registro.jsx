import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signUp } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = ({ setUsuarioLogeado }) => {
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (nuevoUsuario) => {
        signUp(nuevoUsuario).then((resp) => {
            if (resp) {
                sessionStorage.setItem("usuario", JSON.stringify(resp));
                setUsuarioLogeado(resp);
                Swal.fire("Bienvenido", "Te registraste corectamente", "success");
                navegacion("/administrador");
            } else {
                Swal.fire("Error", "Intentelo en breve coneccion inestable", "error");
            }
        });
    };
    return (
        <div className="mt-5 mainSection mainPage">
            <h3 className="text-center">Registro</h3>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un nombre de usuario"
                                {...register("nombreUsuario", {
                                    required: "Este campo es obligatorio",
                                    minLength: {
                                        value: 2,
                                        message:
                                            "El nombre debe tener al menos 6 caracteres",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "El nombre  debe tener como maximo 20 caracteres",
                                    },
                                    pattern: {
                                        value: /^(?!\s)(.*\S)$/,
                                        message:
                                            "El nombre no puede contener espacios en blanco al inicio ni al final",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.nombre?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Email:</Form.Label>
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
                        <Form.Group className="mb-4">
                            <Form.Label>Password:</Form.Label>
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
                        <div className="row">
                            <Button
                                className="btn btn-dark btn-lg btn-block mb-2"
                                type="submit"
                            >
                                Registrar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Registro;
