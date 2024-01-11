import React from "react";
import "./obrigado.css"
import obrigado from "../../assets/images/obrigado.png"
import codigos from "../../assets/images/codigoss.png"


function Obrigado (){
    return(
        <div className="obrigado">

            <div className="imagecodigosObrigado">
            <img src={codigos} alt="Codigos" />
            </div>

            <div className="textosImgObrigado">
            <div className="obrigadoImg">
                <img src={obrigado} alt="Obrigado" />
            </div>
            <h1>Obrigado !</h1>
            <h4>O Email foi enviado com sucesso.</h4>
            
            </div>


        </div>
    )
}
export default Obrigado;