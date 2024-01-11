import React from "react";
import "./homedois.css"
import pc from "../../assets/images/pc.png"
import group from "../../assets/images/Group.png"
import tracoambos from "../../assets/images/tracoambos.png"

function HomeDois() {
    return (
      <>
        <div className="homedois">
           {/* TITULO */}
          <div className="homedoistitulocontainer">
            <p className="homedoistitulo">LINGUAGENS</p>
          </div>
          <div className="homedoisfila1">
            <div className="homedoiscardsfila1">
                {/* cards */}
              <div className="homedoiscard1">
                <p className="homedoiscard1titulo">React.JS</p>
                <p className="homedoiscard1descricao">Lorem ipsum dolor sit amet consectetur. Ac adipiscing <br></br> vel velit erat donec quisque a. Ultrices vivamus porta <br></br> aliquam nunc nunc ut praesent dignissim risus. Sit nisl.</p>
              </div>
              <div className="homedoiscard2">
                <p className="homedoiscard2titulo">React Native</p>
                <p className="homedoiscard2descricao">Lorem ipsum dolor sit amet consectetur. Ac adipiscing <br></br> vel velit erat donec quisque a. Ultrices vivamus porta <br></br> aliquam nunc nunc ut praesent dignissim risus. Sit nisl.</p>
              </div>
            </div>
            {/* imagens do card */}
            <div className="homedoisimagem1">
            <img
                src={pc}
                alt="Descrição da imagem"/>
                </div>
          </div>




          <div className="homedoisfila2">
            <div className="homedoisimagem2">
            <img
                src={group}
                alt="Descrição da imagem"
              />
            </div>
                           <div className="homedoiscardsfila2">
                            {/* cards */}
              <div className="homedoiscard3">
                <p className="homedoiscard3titulo">CSS</p>
                <p className="homedoiscard3descricao">Lorem ipsum dolor sit amet consectetur. Ac adipiscing 
                <br></br> vel velit erat donec quisque a. Ultrices vivamus porta 
                <br></br> aliquam nunc nunc ut praesent dignissim risus. Sit nisl.</p>
              </div>
              <div className="homedoiscard4">
                <p className="homedoiscard4titulo">Python</p>
                <p className="homedoiscard4descricao">Lorem ipsum dolor sit amet consectetur. Ac adipiscing 
                <br></br> vel velit erat donec quisque a. Ultrices vivamus porta 
                <br></br> aliquam nunc nunc ut praesent dignissim risus. Sit nisl.</p>
              </div>
            </div>
          </div>


          <div className="homedoisfila3">
            <div className="homedoiscardsfila3">
                {/* cards */}
              <div className="homedoiscard5">
                <p className="homedoiscard5titulo">HTML</p>
                <p className="homedoiscard5descricao">Lorem ipsum dolor sit amet consectetur. Ac adipiscing 
                <br></br> vel velit erat donec quisque a. Ultrices vivamus porta 
                <br></br> aliquam nunc nunc ut praesent dignissim risus. Sit nisl.</p>
              </div>
              <div className="homedoiscard6">
                <p className="homedoiscard6titulo">Javascript</p>
                <p className="homedoiscard6descricao">Lorem ipsum dolor sit amet consectetur. Ac adipiscing 
                <br></br> vel velit erat donec quisque a. Ultrices vivamus porta 
                <br></br> aliquam nunc nunc ut praesent dignissim risus. Sit nisl.</p>
              </div>
            </div>
            <div className="homedoisimagem3">
            <img
                src={tracoambos}
                alt="Descrição da imagem"
              />
                </div>
          </div>
          </div>

         

       
      </>
    );
  }
  
  export default HomeDois;