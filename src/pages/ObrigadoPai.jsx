import React from "react";
import "../styles/obrigadopai.css"
import Header from "../components/header/Header";
import HeaderMobile from "../components/headerMobile/HeaderMobile";
import Obrigado from "../components/obrigado/Obrigado";
import Footer from "../components/footer/Footer";


function ObrigadoPai (){
    return (
        <div className="obrigadoPai">
            <div className="headerObrigado"><Header/></div>
            <div className="headerObrigadoM"><HeaderMobile/></div>
            <Obrigado/>

            <Footer/>
        </div>
    )
}
export default ObrigadoPai;