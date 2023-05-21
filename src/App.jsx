
import Home from "../views/Home/Home";
import { ThemeProvider } from "@emotion/react";
import Login from "../views/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { theme } from "../styles/styles";
import Registre from "../views/Registre/Registre";
import Categories from "../views/Categories/Categories";
import FantasticoyCienciaFiccion from "../views/Categories/FantasticoyCienciaFiccion/FantasticoyCienciaFiccion";
import AccionyAventuras from "../views/Categories/AccionyAventuras/AccionyAventuras";
import SeriesTv from "../views/Categories/Series/Series"
import Drama from "../views/Categories/Drama/Drama";
import Anime from "../views/Categories/Anime/Anime";
import Terror from "../views/Categories/Terror/Terror";
import Infantil from "../views/Categories/Infantil/Infantil";
import Comedia from "../views/Categories/Comedia/Comedia";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registre" element={<Registre />} />
            <Route path="/Categories" element={<Categories />} />
            <Route
              path="/FantasticoyCienciaFiccion"
              element={<FantasticoyCienciaFiccion />}
            />
            <Route path="AccionyAventuras" element={<AccionyAventuras />} />
            <Route path="SeriesTv" element={<SeriesTv />} />
            <Route path="Drama" element={<Drama />} />
            <Route path="Anime" element={<Anime />} />
            <Route path="Terror" element={<Terror />} />
            <Route path="Infantil" element={<Infantil />} />
            <Route path="Comedia" element={<Comedia />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
