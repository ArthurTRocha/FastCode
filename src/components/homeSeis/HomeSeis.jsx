import React from "react";
import "./homeseis.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HTML from "../../assets/images/HTML.png";

function HomeSeis (){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: false, 

      };

    return(
        <div className="homeseis">
           <Slider {...settings}>
      <div>
        <img src={HTML} alt="Imagem 1" />
      </div>
      <div>
        <img src={HTML} alt="Imagem 2" />
      </div>
      <div>
        <img src={HTML} alt="Imagem 2" />
      </div>
      <div>
        <img src={HTML} alt="Imagem 2" />
      </div>
      <div>
        <img src={HTML} alt="Imagem 2" />
      </div>
      {/* Adicione mais divs conforme necessário */}
    </Slider>
        </div>
    )
}
export default HomeSeis;