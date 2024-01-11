import React from "react";
import "./homeum.css"
import imgHomeUm from "../../assets/images/homeum.png"
import traco from "../../assets/images/traco1.png"
import traco2 from "../../assets/images/traco2.png"
import codigo from "../../assets/images/codigo.png"



function HomeUm () {
  function scrollTocontato() {
    const servicos = document.getElementById('textohomeOito');
    if (servicos) {
      servicos.scrollIntoView({ behavior: 'smooth' });
    }
}

    return (
        <div className="homeUm">
          <div className="centralizarHomeUm">
            <div className="homeUmTextos">
                <h1 data-text="| Titulo Apresentação">| Titulo Apresentação</h1>
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Odio dictumst ut habitasse ut molestie elementum morbi id. 
                    Tellus lectus ac sollicitudin est tincidunt commodo imperdiet mauris libero. 
                    Cursus at pretium gravida feugiat molestie imperdiet commodo morbi massa. </p>

                    <button onClick={scrollTocontato} className="homeUmButton">Contato</button>

                 <div className="paddingButtonHomeUm"></div>

            </div>
            
            <div className="imageHomeUm">
                    {/* <picture> */}
                    {/* <source media="(max-width: 768px)" srcSet={imgHomeUm}/> */}
                    <img src={imgHomeUm} alt="Tecnologia" />
                    {/* </picture> */}
            </div>
            <div className="imageHomeUm768">
              <img src={imgHomeUm} alt="Tecnologia" />
            </div>

            <div className="paddingMobileHomeUm"></div>

           

        
            </div>
      <div className="homeUMFinal">

      <div className="homeUmcodigoFooter">
        <img src={codigo} alt="Codigo" />
      </div>

      <div className="homeUMTracoE">
        <img src={traco} alt="Traço" />
        </div>

      <p>{'< 7aqs9Y0tg01yRGG8LHX9i-n3OFp2dHlHdwSpQiXM3h4I0CwzZzFl65yWUwDZo4OW >'}</p>

      <div className="homeUMTracoD">
        <img src={traco2} alt="Traço" />
        </div>
      </div> 
   

        </div>
    )
}
export default HomeUm;