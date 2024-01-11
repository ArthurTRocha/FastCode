import React from "react";
import "./footer.css"
import tracoum from "../../assets/images/traco1.png"
import tracodois from "../../assets/images/traco2.png"
import logo from "../../assets/images/logo.png"

function Footer () {
    return (
        <div className="footer">
             <div className="logoFooter">
                <img src={logo} alt="Logo" />                
            </div>
            <div className="tracoFooterUm">
                <img src={tracoum} alt="Traço" />
            </div>
            <div className="direitosFooter">
                <p>Todos os direitos reservados 2024</p>
            </div>

            <div className="tracoFooterDois">
                <img src={tracodois} alt="Traço" />
            </div>
        </div>
    )
}
export default Footer;