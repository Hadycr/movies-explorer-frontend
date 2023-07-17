import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__date">© {new Date().getFullYear()}</p>
        <div className="footer__link-container">
          <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
