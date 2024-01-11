import { useEffect, useRef, useState } from "react";
import React from "react";
import "./headermobile.css";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function HeaderMobile() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false); // corrigido aqui
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuRef]);


  function scrollTocontato() {
    const servicos = document.getElementById('textohomeOito');
    if (servicos) {
      servicos.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className="headerMobile" >
      <div className="menuIcon" onClick={toggleMenu} ref={menuRef}>
        <RiMenu2Line className="IconMenuHeaderMobile" />
      </div>

      {menuVisible && (
        <div className="mobileMenu">
        {/* <RiMenu2Line className="IconMenuHeaderMobile" /> */}
          <ul>
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <span onClick={scrollTocontato}>Contato</span>
            </li>
            <li>
              <Link to="/sobrenos">Sobre Nós</Link>
            </li>
          </ul>
        </div>
      )}

      <Link to="/faq">
        <span className="spanInterrogacaoMobile">?</span>
      </Link>
    </div>
  );
}

export default HeaderMobile;
