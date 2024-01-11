import React from "react";
import "./servicosoito.css"
import { IoMdInformationCircleOutline } from "react-icons/io";
import CarouselServicos from "../carouselServicos/CarouselServicos";

function ServicosOito () {
    return (
        <div className="Servicosoito">
            <div className="ServicosoitoBloco">
                <div className="ServicosTituloeBarra">
                <p className="ServicosoitoTitulo">Loja Virtual (e-commerce)</p>
                <div className='ServicosoitoBarraTitulo'></div>
                </div>
                <p className="ServicosoitoDescricao">Loja Virtual (e-commerce) envolve a criação de 
                plataformas online para venda de produtos. O processo inclui design atraente, 
                integração de sistemas de pagamento, gestão de estoque, segurança e experiência 
                de usuário otimizada. O objetivo é oferecer uma plataforma eficiente, segura e 
                atrativa para impulsionar as vendas online.</p>
            </div>

            <div className="carouselCardsServicosoito">
                <CarouselServicos/>
            </div>

            <div className="cadsPocionarServicosoito">
            <div className="cardsServicosoito">
            
                <div className="card1Servicooito">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card2Servicooito">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
                <div className="card3Servicooito">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutline"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
            </div>
            </div>
            <div className="buttonOrcamentoServicooitoPai">
            <div className="buttonOrcamentoServicooito">
                <button>Orçamento</button>
            </div>
            </div>
        </div>
    )
}
export default ServicosOito;