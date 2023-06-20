import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createReceta } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Button, Form } from "react-bootstrap";

const CrearReceta = () => {
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (newReceta) => {
        console.log("soy el bunmit", newReceta);
        createReceta(newReceta).then((resp) => {
            if (resp.status === 201) {
                Swal.fire(
                    "Producto Agregado!",
                    `El producto ${newReceta.nombreProducto} a sido agregado.`,
                    "success"
                );
                reset();
            } else {
                Swal.fire("Error", "Intentelo en breve coneccion inestable", "error");
            }
        });
    };
    return (
        <section className="container">
            <h1 className="display-4 text-center mb-5">Nueva Receta</h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className=" mx-auto formulario p-2 border"
            >
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de la receta*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese un nombre de la receta"
                        {...register("nombreReceta", {
                            required: "Ejemplo Empanadas",
                            minLength: {
                                value: 2,
                                message:
                                    "El nombre de la receta debe tener como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 50,
                                message:
                                    "El nombre de la receta debe tener como maximo 50 caracteres",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreReceta?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select
                        {...register("categoria", { required: "Selecciona una opción" })}
                    >
                        <option value="">Seleccione una opcion</option>
                        <option value="sopasyCremas">Sopas y cremas </option>
                        <option value="platosRegionales">Platos regionales </option>
                        <option value="ensaladas">Ensaladas</option>
                        <option value="carnes">Carnes</option>
                        <option value="pastas">Pastas</option>
                        <option value="pescadosMariscos">Pescados y mariscos</option>
                        <option value="platosVegetariano">
                            Platos vegetarianos o veganos
                        </option>
                        <option value="pastelesyTartas">Pasteles y tartas</option>
                        <option value="heladosySorbetes">Helados y sorbetes</option>
                        <option value="bebidasCalientes">
                            Bebidas calientes (café, chocolate caliente)
                        </option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una URL"
                        {...register("imagen", {
                            required:
                                "Este campo es obligatorio. Ej https://urldelaimagen.... ",
                            minLength: {
                                value: 8,
                                message: "La URL debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 200,
                                message: "La URL debe tener  como maximo 200 caracteres",
                            },
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/,
                                message: "Por favor, ingresa una URL válida de imagen",
                            },
                        })}
                    ></Form.Control>
                    <Form.Text className="text-danger">
                        {errors.imagen?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ingredientes*</Form.Label>
                    <Form.Control
                        as="textarea"
                        roxs={3}
                        {...register("ingredientes", {
                            required: "este campo es obligatorio",
                            minLength: {
                                value: 8,
                                message:
                                    "Los ingredientes debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 600,
                                message:
                                    "Los ingredientes debe tener  como maximo 600 caracteres",
                            },
                        })}
                    ></Form.Control>
                    <Form.Text className="text-danger">
                        {errors.ingredientes?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Preparación*</Form.Label>
                    <Form.Control
                        as="textarea"
                        roxs={3}
                        placeholder="Pasos a seguir Ej. Cortar las verduras ..."
                        {...register("preparación", {
                            required: "este campo es obligatorio",
                            minLength: {
                                value: 8,
                                message:
                                    "La preparacion debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 2000,
                                message:
                                    "La preparacion debe tener  como maximo 1000 caracteres",
                            },
                        })}
                    ></Form.Control>
                    <Form.Text className="text-danger">
                        {errors.preparación?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción*</Form.Label>
                    <Form.Control
                        as="textarea"
                        roxs={3}
                        placeholder="Breve descripción de la receta"
                        {...register("descripcion", {
                            required: "este campo es obligatorio",
                            minLength: {
                                value: 8,
                                message: "Este campo debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 1000,
                                message:
                                    "Este campo debe tener  como maximo 1000 caracteres",
                            },
                        })}
                    ></Form.Control>
                    <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
                </Form.Group>

                <Form.Group>
                    <div className="my-5 d-flex justify-content-center ">
                        <Button type="submit" className="px-5 ">
                            Crear
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </section>
    );
};

export default CrearReceta;
