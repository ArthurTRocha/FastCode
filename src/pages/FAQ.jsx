import React from "react";
import "../styles/faq.css"
import Header from "../components/header/Header"
import HeaderMobile from "../components/headerMobile/HeaderMobile";
import Footer from "../components/footer/Footer";
import { useState } from 'react';


const FaqCard = ({ question, answer }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);
  
    const toggleContent = () => {
      setIsContentVisible(!isContentVisible);
    };

    const cardClassName = `faqcard ${isContentVisible ? 'opened' : ''}`;

    return (
      <div className="faqcard" onClick={toggleContent}>
        <h3 className="faqcardconteudo">{question}</h3>
        {isContentVisible && <p className="faqcarddescricao">{answer}</p>}
      </div>
    );
  };
  


  function FAQ() {
    const faqData = [
      { question: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasa ? ', answer: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet ' },
      { question: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasa ? ', answer: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet .' },
      { question: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasa ? ', answer: ',Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet ' },
      { question: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasa ? ', answer: ',Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet ' },
      { question: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasa ? ', answer: ',Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet ' },
      { question: 'Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasa ? ', answer: ',Lorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet consectetur. Nisl faucibus eget quam ut sed sit consequatconsasaLorem ipsum dolor sit amet ' },
      // Adicione mais perguntas conforme necessário
    ];
    return (
        <div className="faq">
            <div className="header">
                <Header />
            </div>
            <div className="headerMobile">
                <HeaderMobile />
            </div>
            <div className="faqinicio">
                <h1 className="faqtitulo">FAQ</h1>
                <p className="faqdescricao">Perguntas frequentes sobre a Empresa de TI </p>
            </div>


            <div className="faqcards">
        {faqData.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
            <Footer />
        </div>
    )
}
export default FAQ;