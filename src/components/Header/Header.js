import React from 'react';
import { useLocation } from "react-router-dom";
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({onClose, isOpen, handleChangeOpen}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  return (
    <header className={`header ${
      pathName === "/" ||
      pathName === "/movies" ||
      pathName === "/saved-movies" ||
      pathName === "/profile"
        ? ""
        : "header_hidden"
    } ${pathName === "/" 
       ? "header_background-pink"
       : ""
       }
    `}
  >
      <Navigation
        isOpen={isOpen}
        handleChangeOpen={handleChangeOpen}
        onClose={onClose}
      />
    </header>
  )
}

export default Header;