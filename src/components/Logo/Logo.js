import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import navigationLogo from "../../images/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <img className="logo__img"
          src={navigationLogo}
          alt="Логотип" />
      </Link>
    </div>
  )
}

export default Logo;