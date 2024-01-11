import React from "react";
import "./homesete.css"

    function HomeSete (){
    return(
    <div className="homeSete">
        <div className="textoHomeSete">
            <h1>Serviços</h1>
        </div>
        <div className="HomeSeteCardsFila">
            <div className="HomeSeteCard1"> 
            <h1 className="HomeSeteCardTitulo1"> Beginner </h1>
            <div className="HomeSeteCardPreço1">
            <h1 className="HomeSeteCardValor1"> R$ 29</h1>
            <p className="HomeSeteCardMensalidade1"> /mês </p>             
             </div>


             <div className="HomeSeteCardAno1">
                <p className="HomeSeteCard1Botão1"> Mensal </p>
                <p className="HomeSeteCard1Botão2"> Anual </p>
             </div>

             <div className="HomeSeteCard1ConteudoColuna">

                <div className="HomeSeteCard1Conteudo">
                <p className="HomeSeteCard1ConteudoMaior">Desenvolvimento FrontEnd </p>
                <p className="HomeSeteCard1ConteudoMenor">Lorem ipsum dolor sit amet consectetur. </p>
                </div>

                <div className="HomeSeteCard1Conteudo2">
                <p className="HomeSeteCard1ConteudoMaior">Desenvolvimento BackEnd </p>
                <p className="HomeSeteCard1ConteudoMenor">Lorem ipsum dolor sit amet consectetur. </p>
                </div>

                <div className="HomeSeteCard1Conteudo3">
                <p className="HomeSeteCard1ConteudoMaior">Desenvolvimento Websites </p>
                <p className="HomeSeteCard1ConteudoMenor">Lorem ipsum dolor sit amet consectetur. </p>
                </div>

                <div className="HomeSeteCard1Conteudo4">
                <p className="HomeSeteCard1ConteudoMaior">Desenvolvimento de Aplicativos Mobile </p>
                <p className="HomeSeteCard1ConteudoMenor">Lorem ipsum dolor sit amet consectetur. </p>

                </div>



                <div className="HomeSeteCard1Contrate">
                 <button className="HomeSeteCard1ContrateBotao">CONTRATE AGORA</button>
                </div>


            </div>
            </div>
            
        </div>
    </div>
)}
export default HomeSete;
