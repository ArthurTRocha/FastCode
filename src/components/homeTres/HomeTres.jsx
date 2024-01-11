import React from "react";
import "./hometres.css"
import css from "../../assets/images/CSS.png"
import html from "../../assets/images/HTML.png"
import Lottie from 'lottie-react';
import frontEnd from "../../assets/images/frontEnd.json"

function HomeTres () {

    const options = {
        loop: true,
        autoplay: true,
        animationData: frontEnd, // Use 'animationData' em vez de 'frontEnd'
      };



    return(
        <div className="homeTres">

            <div className="frontEndHomeTres">
            <h1 >Front-End</h1>

            <div className="imagemCSShomeTres">
                <img src={css} alt="CSS" />
            </div>

            <div className="homeTresImgPai">
          <div className="homeTresImg">
          <Lottie {...options} />
            </div>
            </div>

            <div className="hometresdescricaofront">
                <p> É a interface visual e funcionalidade percebida pelos 
                 usuários, incluindo elementos como layouts, botões, 
                 formulários e outros componentes visuais.
                 Desenvolvedores front-end utilizam linguagens como
                 HTML, CSS e JavaScript para criar páginas web 
                 interativas e responsivas </p>
                </div>
                <div className="homeTresPadding"></div>
                <div className="imageHtmlHomeTres">
                    <img src={html} alt="HTML" />
                </div>
                </div>









{/* 
                <div className="homeTrestitulocontainer3">
            <p className="homeTrestitulo3">Back-End</p>
          </div>

          <div className="homeTresdescricaoback">
                <p className="homeTresdescricaoback2"> Desenvolvedores back-end empregam linguagens como
                <br/>  PHP e Ruby para construir a lógica que sustenta
                <br/>a funcionalidade e dinâmica do sistema. Suas
                <br/> responsabilidades incluem manipulação de dados,
                <br/> autenticação de usuários e execução de operações nos 
                <br/>servidores, desempenhando um papel fundamental na
                <br/>base e integridade de aplicativos e websites. </p>
                </div>


                <div className="homeTrestitulocontainer3">
            <p className="homeTrestitulo3">UI / UX</p>
          </div>

          <div className="homeTresdescricaoUI">
            <p className="homeTresdescricaoUI2"> UI diz respeito aos elementos visuais e de interação
            <br/>que compõem a interface de um aplicativo ou site,
             <br/>como botões, menus e layouts. Por outro lado, a UX
              <br/> concentra-se na experiência geral do usuário ao
               <br/> interagir com o produto, abrangendo desde a facilidade
                <br/> de uso até as emoções que a interação evoca. </p>
            </div> */}
        </div>
    )
}
export default HomeTres;

