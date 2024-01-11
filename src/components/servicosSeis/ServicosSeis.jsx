import React from "react";
import "./servicosseis.css"
import { IoMdInformationCircleOutline } from "react-icons/io";
import CarouselServicos from "../carouselServicos/CarouselServicos";

function ServicosSeis () {
    return (
        <div className="Servicosseis">
            <div className="ServicosseisBloco">
                <div className="ServicosTituloeBarra">
                <p className="ServicosseisTitulo"> Design de UI/UX </p>
                <div className='ServicosseisBarraTitulo'></div>
                </div>
                <p className="ServicosseisDescricao">Design de UI/UX envolve a criação de interfaces atraentes (UI) ]
                e experiências de usuário intuitivas (UX). O processo inclui pesquisa, wireframes, protótipos 
                e implementação visual para garantir um design esteticamente agradável e funcional, 
                proporcionando uma navegação fluida e envolvente aos usuários.</p>
            </div>

            <div className="carouselCardsServicosseis">
                <CarouselServicos/>
            </div>

            <div className="cadsPocionarServicosseis">
            <div className="cardsServicosseis">
            
                <div className="card1Servicoseis">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card2Servicoseis">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card3Servicoseis">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
            </div>
            </div>
            <div className="buttonOrcamentoServicoseisPai">
            <div className="buttonOrcamentoServicoseis">
                <button>Orçamento</button>
            </div>
            </div>
        </div>
    )
}
export default ServicosSeis;