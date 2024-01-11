import React from "react";
import "./servicossete.css"
import { IoMdInformationCircleOutline } from "react-icons/io";
import CarouselServicos from "../carouselServicos/CarouselServicos";

function ServicosSete () {
    return (
        <div className="Servicossete">
            <div className="ServicosseteBloco">
                <div className="ServicosTituloeBarra">
                <p className="ServicosseteTitulo">Desenvolvimento de Sistemas</p>
                <div className='ServicosseteBarraTitulo'></div>
                </div>
                <p className="ServicosseteDescricao">Desenvolvimento de Sistemas abrange a criação de
                 soluções personalizadas de software. O processo envolve análise de requisitos, design 
                 arquitetural, implementação de funcionalidades, testes e manutenção. O objetivo é 
                 fornecer sistemas eficientes e adaptados às necessidades específicas do cliente, 
                 abrangendo desde aplicativos empresariais até sistemas complexos.</p>
            </div>

            <div className="carouselCardsServicossete">
                <CarouselServicos/>
            </div>

            <div className="cadsPocionarServicossete">
            <div className="cardsServicossete">
            
                <div className="card1Servicosete">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card2Servicosete">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card3Servicosete">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
            </div>
            </div>
            <div className="buttonOrcamentoServicosetePai">
            <div className="buttonOrcamentoServicosete">
                <button>Orçamento</button>
            </div>
            </div>
        </div>
    )
}
export default ServicosSete;