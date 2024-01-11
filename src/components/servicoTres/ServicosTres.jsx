import React from "react";
import "./servicostres.css"
import { IoMdInformationCircleOutline } from "react-icons/io";
import CarouselServicos from "../carouselServicos/CarouselServicos";

function ServicosTres () {
    return (
        <div className="Servicostres">
            <div className="ServicostresBloco">
                <div className="ServicosTituloeBarra">
                <p className="ServicostresTitulo"> Desenvolvimento Back-End </p>
                <div className='ServicostresBarraTitulo'></div>
                </div>
                <p className="ServicostresDescricao"> O serviço de Desenvolvimento Back-End refere-se à 
                construção da lógica e funcionalidades que operam nos bastidores de um aplicativo ou site, 
                é crucial para garantir que as operações ocorram de maneira eficiente, segura e de acordo 
                com as necessidades do aplicativo, proporcionando uma experiência de usuário consistente e 
                confiável. </p>
            </div>

            <div className="carouselCardsServicostres">
                <CarouselServicos/>
            </div>

            <div className="cadsPocionarServicostres">
            <div className="cardsServicostres">
            
                <div className="card1Servicotres">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card2Servicotres">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card3Servicotres">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
            </div>
            </div>
            <div className="buttonOrcamentoServicotresPai">
            <div className="buttonOrcamentoServicotres">
                <button>Orçamento</button>
            </div>
            </div>
        </div>
    )
}
export default ServicosTres;