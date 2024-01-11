import React, { useState } from "react";
import "./homeoito.css"
import imageoito from "../../assets/images/contato.png"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FaUser } from "react-icons/fa";

function HomeOito (){

    const [concordo, setConcordo] = useState(false);

    const handleCheckboxChange = () => {
      setConcordo(!concordo); 
    };

    return(
        <div className="homeOito">
            <div className="textohomeOito" id="textohomeOito">
                <h1>Contato</h1>
            </div>
            <div className="ajustatelaHomeOito">
            <div className="imageHomeOito">
                <img src={imageoito} alt="Contato" />
            </div>

            <div className="campoHomeOito">

            <form action="https://formsubmit.co/ seu@email.com " método="POST" >
            <input type="hidden" name="_next" value="http://localhost:5173/Obrigado"/> 
            <input type="hidden" name="_captcha" value="false"/>

            

            <div className="nomeHomeOito">
                <div className="IconHomeOito"><FaUser className="InconeOito" /> <p>Nome <span>*</span></p></div>
                
            <input type="text" name="name" 
            required 
            placeholder='Nome'
            className="inputs"/>
            </div>

            <div className="emailHomeOito">
            <div className="IconHomeOito"> <FaUser  className="InconeOito" /> <p>E-mail <span>*</span></p> </div>
            <input type="email" name="email" 
            placeholder="Email"
            className="inputs"/>
            </div>


            <div className="telefoneHomeOito">
            <div className="IconHomeOito"><FaUser className="InconeOito" /> <p>Telefone</p></div>
                <label >
                <PhoneInput
                country={''} 
                placeholder="Telefone"               
                inputStyle={{
                    backgroundColor: 'transparent',
                    borderLeft: 'transparent',
                    borderRight: 'transparent',
                    borderTop: 'transparent',
                    maxWidth: '200px',
                    color: '#fff'
                }}
                inputProps={{
                    name: 'telefone',
                    required: true,
                }}
            />

                </label>
                </div>

                <div className="mensagemHomeOito">
                <div className="IconHomeOito"><p>Mensagem</p></div>
                  <input type="text" name="text"  
                  placeholder="Mensagem"
                  className="input1"/>
                   </div>

                 
                   <div className="textoInputHome">
                   <label>
                        <input
                            type="checkbox"
                            checked={concordo}
                            onChange={handleCheckboxChange}
                        />
                    <p>Eu concordo com a <a href="">Politica de Privacidade</a></p>
                    </label>
                   </div>

                   <div className="buttonHomeOite">
                   <button className="buttonEnvioHomeOito" type="submit" disabled={!concordo}>
                            Enviar
                        </button>
                        </div>
            </form>
            </div>
            <div className="imageHomeOitoM">
                <img src={imageoito} alt="Contato" />
            </div>
            </div>
            <div className="marginHomeOito"></div>
        </div> 
    )
}
export default HomeOito;