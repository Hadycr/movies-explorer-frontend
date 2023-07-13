import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
 
  
  
    return (
    <section className="about-me">
      <h2 className="about-me__name">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__resume">
          <h3 className="about-me__student-name">Надежда</h3>
          <h4 className="about-me__status"> Студент, 35 лет.</h4>
          <p className="about-me__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена 
          и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 
          2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по 
          веб-разработке,&nbsp; начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          <a className="about-me__github" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2">Github</a>
        </div>
        <div className="about-me__photo"></div>
      </div>
      <div className="about-me__portfolio">
        <h2 className="about-me__title">Портфолио</h2>
        <ul className="about-me__sites">
          <li className="about-me__site_underline">
            <Portfolio
            siteType = "Статичный сайт"
            siteAdress = "https://hadycr.github.io/how-to-learn/" 
            />
          </li>
          <li className="about-me__site_underline">
            <Portfolio
            siteType = "Адаптивный сайт"
            siteAdress = "https://hadycr.github.io/russian-travel/" 
            />
          </li>
          <li className="about-me__site">
            <Portfolio
            siteType = "Одностраничное приложение"
            siteAdress = "https://hadycr.github.io/mesto" 
            />
          </li>
        </ul>
      </div>
    </section>
)
}

export default AboutMe;