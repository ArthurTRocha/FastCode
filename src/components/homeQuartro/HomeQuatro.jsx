import React from "react";
import "./homequatro.css"
import react from "../../assets/images/REACT.png"
import java from "../../assets/images/JAVA.png"
import backEnd from "../../assets/images/backEnd.json"
import Lottie from 'lottie-react';



function HomeQuatro (){

    const optionsB = {
        loop: true,
        autoplay: true,
        animationData: backEnd, // Use 'animationData' em vez de 'frontEnd'
      };

    return (
        <div className="homeQuatro">
            <div className="homequatrotitulocontainer">
            <h1 className="homequatrotitulo">Back-End</h1>
          </div>
          <div className="animacaoBackEndHomeQuatroPai">
          <div className="animacaoBackEndHomeQuatro">
          <Lottie {...optionsB} />
          </div>
          </div>

          <div className="ImagemHomeQuatro">
                <img src={react} alt="React" />
            </div>

            <div className="homequatrodescricaoback">
                <p> Desenvolvedores back-end empregam linguagens como 
                Java, Python, PHP e Ruby para construir a lógica que
                que sustenta a funcionalidade e dinâmica do sistema. Suas
                responsabilidades incluem manipulação de dados,
                autenticação de usuários e execução de operações nos 
                servidores, desempenhando um papel fundamental na 
                na base e integridade de aplicativos e websites.</p>
                </div>

               <div className="homeQuatroPadding"></div>
                <div className="imagemHomeQuatro02">
                    <img src={java} alt="Java" />
                </div>
                </div>
    )
}
export default HomeQuatro;