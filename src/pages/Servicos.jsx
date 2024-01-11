import React from "react";
import "../styles/servicos.css"
import Header from "../components/header/Header";
import HeaderM from "../components/headerMobile/HeaderMobile"
import Footer from "../components/footer/Footer"
import ServicosC from "../components/servicos/ServicosC";
import ServicosDois from "../components/servicosDois/ServicosDois";
import ServicosTres from "../components/servicotres/ServicosTres";
import ServicosQuatro from "../components/servicosQuatro/ServicosQuatro"
import ServicosCinco from "../components/servicosCinco/ServicosCinco";
import ServicosSeis from "../components/servicosSeis/ServicosSeis";
import ServicosSete from "../components/servicosSete/ServicosSete";
import ServicosOito from "../components/servicosOito/ServicosOito";

function Servicos () {
    return (
        <div className="servicos">
            <div className="headerServicos">
                <Header/>
            </div>
            <div className="headerServicosM">
                <HeaderM/>
            </div>
            <ServicosC/>
            <ServicosDois/>
            <ServicosTres/>
            <ServicosQuatro/>
            <ServicosCinco/>
            <ServicosSeis/>
            <ServicosSete/>
            <ServicosOito/>
            <Footer/>
        </div>
    )
}
export default Servicos;