import React from "react";
import "./servicosquatro.css"
import { IoMdInformationCircleOutline } from "react-icons/io";
import CarouselServicos from "../carouselServicos/CarouselServicos";

function ServicosQuatro () {
    return (
        <div className="Servicosquatro">
            <div className="ServicosquatroBloco">
                <div className="ServicosTituloeBarra">
                <p className="ServicosquatroTitulo"> Desenvolvimento de Websites </p>
                <div className='ServicosquatroBarraTitulo'></div>
                </div>
                <p className="ServicosquatroDescricao"> O serviço de Desenvolvimento de Websites envolve a criação e 
                implementação de elementos visuais e funcionais de uma página web. O processo inclui a concepção de 
                layouts, a responsividade para diferentes dispositivos, a integração de elementos interativos </p>
            </div>

            <div className="carouselCardsServicosquatro">
                <CarouselServicos/>
            </div>

            <div className="cadsPocionarServicosquatro">
            <div className="cardsServicosquatro">
            
                <div className="card1Servicoquatro">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card2Servicoquatro">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card3Servicoquatro">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
            </div>
            </div>
            <div className="buttonOrcamentoServicoquatroPai">
            <div className="buttonOrcamentoServicoquatro">
                <button>Orçamento</button>
            </div>
            </div>
        </div>
    )
}
export default ServicosQuatro;