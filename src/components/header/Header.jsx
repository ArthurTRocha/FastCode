import React from "react";
import { Link } from "react-router-dom";
import traco from "../../assets/images/traco.png"
import "./header.css";
import logo from "../../assets/images/logo.png"


function Header() {

  function scrollTocontato() {
    const servicos = document.getElementById('textohomeOito');
    if (servicos) {
      servicos.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className="header">
        <div className="headerLogo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="headerOpcoes">
        <Link to="/Home">Inicio</Link>
        <Link to="/servicos">Serviços</Link>
        <span className="spanH" onClick={scrollTocontato}>Contato</span>
        <Link to="/SobreNos">Sobre Nós</Link>
        </div>
        <div className="headerTraco">
            <img src={traco} alt="Traço" />
        </div>
        <Link to="/faq"><span className="spanInterrogacao">?</span></Link>
    </div>
  );
}

export default Header;
