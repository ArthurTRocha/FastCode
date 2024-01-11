import React from "react";
import "../styles/sobrenos.css"
import Header from "../components/header/Header"
import HeaderMobile from "../components/headerMobile/HeaderMobile"
import SobreNosC from "../components/sobreNos/SobreNosC";
import Footer from "../components/footer/Footer"

function SobreNos () {
    return (
        <div className="sobreNos">
            <div className="headerSN">
                <Header/>
            </div>
            <div className="headerMSN">
                <HeaderMobile/>
            </div>
            <SobreNosC/>


            
            <Footer/>

        </div>
    )
}
export default SobreNos;