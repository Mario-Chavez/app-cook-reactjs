import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
    /* traemos de local storage si el usuario esta logueado yu hacemos un if 
   si no esta logueado lo mandamos a la page de login caso contrario 
   seguira con la navegacion con los childrenm */

    if (!usuarioLogueado) {
        return <Navigate to={"/login"} />;
    }
    return children;
};

export default RutasProtegidas;
