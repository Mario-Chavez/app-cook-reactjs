import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./views/Inicio";
import Menu from "./components/common/Menu";

function App() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route exact path="/" element={<Inicio />}></Route>
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
