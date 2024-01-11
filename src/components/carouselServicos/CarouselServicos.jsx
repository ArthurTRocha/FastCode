import React from "react";
import "./carouselservicos.css"
import Slider from 'react-slick';
import { IoMdInformationCircleOutline } from "react-icons/io";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselServicos () {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px', // Adiciona espaço à esquerda
        };
    return (
        <div className="carouselServicos">
                <Slider {...settings}>

                <div className="card1ServicoDoisC">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutlineC"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>

                <div className="card2ServicoDoisC">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutlineC"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>

                <div className="card3ServicoDoisC">
                <IoMdInformationCircleOutline className="IoMdInformationCircleOutlineC"/>
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Ac massa odio id.Lorem ipsum dolor sit 
            amet consectetur. Ac massa odio id.</p>
                </div>
    </Slider>
        </div>
    )
}
export default CarouselServicos;