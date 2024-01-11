import React from "react";
import "./servicosdois.css"
import { IoMdInformationCircleOutline } from "react-icons/io";
import CarouselServicos from "../carouselServicos/CarouselServicos";

function ServicosDois () {
    return (
        <div className="ServicosDois">
            <div className="ServicosDoisBloco">
                <div className="ServicosTituloeBarra">
                <p className="ServicosDoisTitulo"> Desenvolvimento Front-End </p>
                <div className='ServicosDoisBarraTitulo'></div>
                </div>
                <p className="ServicosDoisDescricao"> O serviço de Desenvolvimento Front-End 
                envolve a criação da parte visual e interativa de um site ou aplicativo, os desenvolvedores 
                front-end utilizam linguagens como HTML, CSS e JavaScript para construir interfaces 
                de usuário atraentes e funcionais. O foco principal é na apresentação e na interação 
                direta do usuário com o produto, assegurando um design responsivo e compatibilidade 
                com diversos dispositivos </p>
            </div>

            <div className="carouselCardsServicosDois">
                <CarouselServicos/>
            </div>

            <div className="cadsPocionarServicosDois">
            <div className="cardsServicosDois">
            
                <div className="card1ServicoDois">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card2ServicoDois">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card3ServicoDois">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
            </div>
            </div>
            <div className="buttonOrcamentoServicoDoisPai">
            <div className="buttonOrcamentoServicoDois">
                <button>Orçamento</button>
            </div>
            </div>
        </div>
    )
}
export default ServicosDois;