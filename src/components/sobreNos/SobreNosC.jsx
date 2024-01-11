import React from "react";
import "./sobrenosc.css"
import CarouselSN from "./carouselSobreNos/CarouselSN"; 
import CarouselSNMobile from "./carouselSobreNos/CarouselSNMobile"; 

function SobreNosC (){
    return(
        <div className="sobreNosC">
            <div className="textosSobreNosc">
                <h1>Sobre Nós</h1>
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur.
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur.
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur.
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet </p>
            </div>
            <div className="carouselSobreNos">
                {/* Carousel */}
                <CarouselSN/>
            </div>
            <div className="carouselSobreNosM">
                <CarouselSNMobile/>
            </div>

            <div className="textosSobreNosc1">
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur.
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur.
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur.
                    Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet </p>
            </div>
            
        </div>
    )
}
export default SobreNosC;