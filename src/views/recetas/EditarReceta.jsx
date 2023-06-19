import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { EditReceta, obtenerUnaReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarReceta = () => {
    const { id } = useParams();
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    useEffect(() => {
        obtenerUnaReceta(id).then((resp) => {
            if (resp) {
                setValue("nombreReceta", resp.nombreReceta);
                setValue("categoria", resp.categoria);
                setValue("imagen", resp.imagen);
                setValue("ingredientes", resp.ingredientes);
                setValue("pasos", resp.pasos);
                setValue("preparación", resp.preparación);
            }
        });
    }, []);

    const onSubmit = (newReceta) => {
        EditReceta(newReceta, id).then((resp) => {
            if (resp && resp.status === 200) {
                Swal.fire({
                    title: `La receta:  <br>${newReceta.nombreReceta}</br> a sido actualizado correctamente.`,
                    confirmButtonColor: "#163D30",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    },
                });
                navegacion("/administrador");
            } else {
                Swal.fire("Error", "Intentelo en breve coneccion inestable", "error");
            }
        });
    };

    return (
        <section className="container">
            <h1 className="display-4 text-center mb-5">Editar Receta</h1>
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
                                value: 20,
                                message:
                                    "El nombre de la receta debe tener como maximo 20 caracteres",
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
                                value: 400,
                                message:
                                    "Los ingredientes debe tener  como maximo 400 caracteres",
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
                                value: 400,
                                message:
                                    "La preparacion debe tener  como maximo 400 caracteres",
                            },
                        })}
                    ></Form.Control>
                    <Form.Text className="text-danger">
                        {errors.preparación?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Como se hace*</Form.Label>
                    <Form.Control
                        as="textarea"
                        roxs={3}
                        placeholder="Pasos a seguir Ej. horno a 100ºC ..."
                        {...register("pasos", {
                            required: "este campo es obligatorio",
                            minLength: {
                                value: 8,
                                message: "Este campo debe tener como minimo 8 caracteres",
                            },
                            maxLength: {
                                value: 400,
                                message:
                                    "Este campo debe tener  como maximo 400 caracteres",
                            },
                        })}
                    ></Form.Control>
                    <Form.Text className="text-danger">{errors.pasos?.message}</Form.Text>
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

export default EditarReceta;
