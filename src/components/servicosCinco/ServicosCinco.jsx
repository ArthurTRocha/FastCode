import React from "react";
import "./servicoscinco.css"
import { IoMdInformationCircleOutline } from "react-icons/io";
import CarouselServicos from "../carouselServicos/CarouselServicos";

function ServicosCinco () {
    return (
        <div className="Servicoscinco">
            <div className="ServicoscincoBloco">
                <div className="ServicosTituloeBarra">
                <p className="ServicoscincoTitulo"> Desenvolvimento Mobile </p>
                <div className='ServicoscincoBarraTitulo'></div>
                </div>
                <p className="ServicoscincoDescricao"> Desenvolvimento Mobile abrange a criação de aplicativos para 
                dispositivos móveis. Utilizando tecnologias como Swift, Kotlin ou React Native, o processo 
                inclui design, implementação de funcionalidades e otimização para garantir uma experiência de 
                usuário eficiente e intuitiva em plataformas como iOS e Android. </p>
            </div>

            <div className="carouselCardsServicoscinco">
                <CarouselServicos/>
            </div>

            <div className="cadsPocionarServicoscinco">
            <div className="cardsServicoscinco">
            
                <div className="card1Servicocinco">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card2Servicocinco">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card3Servicocinco">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
            </div>
            </div>
            <div className="buttonOrcamentoServicocincoPai">
            <div className="buttonOrcamentoServicocinco">
                <button>Orçamento</button>
            </div>
            </div>
        </div>
    )
}
export default ServicosCinco;