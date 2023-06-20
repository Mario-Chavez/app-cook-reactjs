// llamar vartiable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_RECETAS = import.meta.env.VITE_API_RECETAS;

export const login = async (usuario) => {
    try {
        const respuesta = await fetch(URL_USUARIO);

        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find(
            (itemUsuario) => itemUsuario.email === usuario.email
        );
        if (usuarioBuscado) {
            if (usuarioBuscado.password === usuario.password) {
                return usuarioBuscado;
            }
            throw new Error("Contraseña incorrecta");
        }
        throw new Error("Email no encontrado");
    } catch (error) {
        console.log(error);
    }
};
export const signUp = async (usuario) => {
    try {
        const respuesta = await fetch(URL_USUARIO, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });

        const nuevoUsuario = await respuesta.json();
        return nuevoUsuario;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerRecetas = async () => {
    try {
        const respuesta = await fetch(URL_RECETAS);
        const recetas = await respuesta.json();
        return recetas;
    } catch (error) {
        console.log(error);
    }
};
export const obtenerUnaReceta = async (id) => {
    try {
        const respuesta = await fetch(`${URL_RECETAS}/${id}`);
        const recetasFiltrada = await respuesta.json();
        return recetasFiltrada;
    } catch (error) {
        console.log(error);
    }
};
export const deleteReceta = async (id) => {
    try {
        const respuesta = await fetch(`${URL_RECETAS}/${id}`, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
export const createReceta = async (receta) => {
    try {
        const respuesta = await fetch(URL_RECETAS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
export const EditReceta = async (receta, id) => {
    try {
        const respuesta = await fetch(URL_RECETAS + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
// export const obtenerRecetaPorId = async (id) => {
//     try {
//       const respuesta = await fetch(URL_RECETAS+"/"+id);
//       const receta = await respuesta.json();
//       console.log(receta)
//       return receta;
//     } catch (error) {
//       console.log(error);
//     }
//   };

// export const obtenerRecetaId = async (id) => {
//     try {
//       const respuesta = await fetch(URL_RECETAS);
//       const datosRecetas = await respuesta.json();
//       const recetaEncontrada = datosRecetas.recetas.find(
//         (receta) => receta.id === parseInt(id)
//       );
//       return recetaEncontrada;
//     } catch (error) {
//       console.log(error);
//     }
//   };
  