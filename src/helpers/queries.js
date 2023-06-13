// llamar vartiable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_RECETAS = import.meta.env.VITE_API_RECETA;

export const login = async (usuario) => {
    try {
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();

        // buscar si la lista de usuario hay un elelmento igual al q recibimos en ususario
        const ususarioBuscado = listaUsuarios.find(
            (itemUsuario) => itemUsuario.email === usuario.email
        );
        if (ususarioBuscado) {
            if (ususarioBuscado.password === usuario.password) {
                console.log("encontardo el usuario");
                return usuario;
            }
            console.log("no es el mismo password");
        }
        console.log("email no encontrado");
    } catch (error) {}
};

export const obtenerProductos = async () => {
    try {
        const respuesta = await fetch(URL_RECETAS);
        const productos = await respuesta.json();
        return productos;
    } catch (error) {}
};
export const obtenerUnProductos = async (id) => {
    try {
        const respuesta = await fetch(`${URL_RECETAS}/${id}`);
        const productoFiltrado = await respuesta.json();
        return productoFiltrado;
    } catch (error) {}
};
export const deleteProductosApi = async (id) => {
    try {
        const respuesta = await fetch(`${URL_RECETAS}/${id}`, {
            method: "DELETE",
        });
        return respuesta;
        // const productos = await respuesta.json();
        // return productos;
    } catch (error) {
        console.log(error);
    }
};
export const createProductosApi = async (producto) => {
    try {
        const respuesta = await fetch(URL_RECETAS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
