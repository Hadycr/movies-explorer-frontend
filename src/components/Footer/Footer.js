import React from 'react';
import { useLocation } from "react-router-dom";
import './Footer.css';

function Footer() {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  return (
    <footer className={`footer ${
      pathName === "/" ||
      pathName === "/movies" ||
      pathName === "/saved-movies"
        ? ""
        : "footer_hidden"
     } 
    `}
    >
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__date">© {new Date().getFullYear()}</p>
        <div className="footer__link-container">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
