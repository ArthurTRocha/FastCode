import React from "react";
import "../styles/home.css"
import Header from "../components/header/Header"
import HeaderMobile from "../components/headerMobile/HeaderMobile";
import HomeUm from "../components/homeUm/HomeUm";
import HomeDois from "../components/homeDois/HomeDois";
import HomeTres from "../components/homeTres/HomeTres";
import HomeQuatro from "../components/homeQuartro/HomeQuatro";
import HomeCinco from "../components/homeCinco/HomeCinco"
import HomeSeis from "../components/homeSeis/HomeSeis";
import HomeSete from "../components/homeSete/HomeSete";
import HomeOito from "../components/homeOito/HomeOito";
import Footer from "../components/footer/Footer";

function Home () {
    return (
        <div className="home">
            <div className="header">
                <Header/>
                </div>
                <div className="headerMobile">
                    <HeaderMobile/>
                </div>
                <HomeUm/>
                <div className="homedoiss">                
                <HomeDois/>
                </div>
                <HomeTres/>
                <HomeQuatro/>
                <HomeCinco/>
                <HomeSeis/>
                <HomeSete/>
                <div className="homeoitoo">
                <HomeOito/>
                </div>
                <Footer/>
        </div>
    )
}
export default Home;