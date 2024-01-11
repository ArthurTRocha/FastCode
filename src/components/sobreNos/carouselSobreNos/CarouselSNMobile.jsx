import React from "react";
import "./carouselsnmobile.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import caio from "../../../assets/images/caio - Copia.png"
import arthur from "../../../assets/images/arthur - Copia.png"
import html from "../../../assets/images/html.png"

const images = [caio, arthur, html, html]; // Use diretamente os caminhos das imagens

function CarouselSNMobile (){

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        dots: false, 
        arrows: false, 
      };


    return(

        <div className="carouselSNMobile">

             <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-itemSN">
            <img src={image} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <h3>Equipe TI</h3>

        </div>
    )
}
export default CarouselSNMobile;