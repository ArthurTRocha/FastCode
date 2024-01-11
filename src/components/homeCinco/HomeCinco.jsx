import React from "react";
import "./homecinco.css"
import Lottie from 'lottie-react';
import uiUx from "../../assets/images/uiUx.json"


function HomeCinco () {

    const optionsU = {
        loop: true,
        autoplay: true,
        animationData: uiUx, // Use 'animationData' em vez de 'frontEnd'
      };

    return(
        <div className="homeCinco">
            <div className="textoHomeCinco">
                <h1>UI / UX</h1>
            </div>
            <div className="animacaoHomeCincoPai">
            <div className="animacaoHomeCinco">
            <Lottie {...optionsU} />
            </div>
            </div>

            <div className="texto2HomeCinco">
                <p> UI diz respeito aos elementos visuais e de interação
                     que compõem a interface de um aplicativo ou site, como botões, 
                     menus e layouts. Por outro lado, a UX concentra-se na experiência 
                     geral do usuário ao interagir com o produto, abrangendo desde a 
                     facilidade de uso até as emoções que a interação evoca.</p>
            </div>

            <div className="homeCincoClientes"> 
                <h1>Clientes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Odio dictumst 
                    ut habitasse ut molestie elementum morbi id. </p>
            </div>

        </div>
    )
}
export default HomeCinco;