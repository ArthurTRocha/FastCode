import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import Obrigado from "../pages/ObrigadoPai";
import FAQ from "../pages/FAQ";
import SobreNos from "../pages/SobreNos";
import Servicos from "../pages/Servicos";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/obrigado" element={<Obrigado/>} />

        <Route path="/servicos" element={<Servicos/>} />


        <Route path="/FAQ" element={<FAQ/>} />

        <Route path="/SobreNos" element={<SobreNos/>} />


      </Routes>
    </Router>
  );
}

export default App;
