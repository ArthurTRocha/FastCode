import React from "react";
import "./carouselsn.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import caio from "../../../assets/images/caio.png"
import arthur from "../../../assets/images/arthur.png"
import html from "../../../assets/images/html.png"

const images = [caio, arthur, html, html]; // Use diretamente os caminhos das imagens

function CarouselSN () {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, 
        slidesToScroll: 1,
      };


    return(
        <div className="carouselSN">
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
export default CarouselSN;