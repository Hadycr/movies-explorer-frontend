import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <div className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="pportfolio__sites">
          <li className="portfolio__site">
            <div className="portfolio__site-container">
              <p className="profile__site-name">Статичный сайт</p>
              <a className="profile__link link" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2"><img className="profile__link-icon" src="../../images/text__COLOR_font-main.svg"/></a>
            </div>
          </li>
          <li className="profile__site">
            <div className="profile__site-container">
              <p className="profile__site-name">Адаптивный сайт</p>
              <a className="profile__link link" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2"><img className="profile__link-icon" src="../../images/text__COLOR_font-main.svg"/></a>
            </div>
          </li>
          <li className="profile__site">
            <div className="profile__site-container">
              <p className="profile__site-name">Одностраничное приложение</p>
              <a className="profile__link link" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2"><img className="profile__link-icon" src="../../images/text__COLOR_font-main.svg"/></a>
            </div>
          </li>

        
        </ul>

    )
}

export default Portfolio;