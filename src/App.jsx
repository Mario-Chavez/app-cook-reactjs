import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu";
import { useState } from "react";
import Registro from "./components/views/Registro";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministardor from "./components/routes/RutasAdministardor";
import Login from "./components/views/Login";
import Detalle from "./components/views/Detalle";
import Error404 from "./components/views/Error404";

function App() {
    const usuarioSessionStorage = JSON.parse(sessionStorage.getItem("usuario")) || {};
    const [usuarioLogeado, setUsuarioLogeado] = useState(usuarioSessionStorage);
    return (
        <>
            <BrowserRouter>
                <Menu
                    usuarioLogeado={usuarioLogeado}
                    setUsuarioLogeado={setUsuarioLogeado}
                />
                <Routes>
                    <Route exact path="/" element={<Inicio />}></Route>
                    <Route
                        exact
                        path="/registro"
                        element={<Registro setUsuarioLogeado={setUsuarioLogeado} />}
                    ></Route>
                    <Route
                        path="/administrador/*"
                        element={
                            <RutasProtegidas>
                                <RutasAdministardor></RutasAdministardor>
                            </RutasProtegidas>
                        }
                    ></Route>
                    <Route exact path="/detalle/:id" element={<Detalle></Detalle>}></Route>
                    <Route
                        exact
                        path="/login"
                        element={<Login setUsuarioLogeado={setUsuarioLogeado} />}
                    ></Route>
                    <Route exact path="/error" element={<Error404 />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
