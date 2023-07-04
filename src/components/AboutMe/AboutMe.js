import React from 'react';
import './AboutMe.css';

function AboutMe() {
 
  
  
    return (
    <section className="profile">
      <h2 className="profile__name">Студент</h2>
      <div className="profile__info">
        <h3 className="profile__student-name">Виталий</h3>
        <h4 className="profile__status"> Фронтенд-разработчик, 30 лет.</h4>
        <p className="profile__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена 
        и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 
        2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по 
        веб-разработке,&nbsp; начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
        <a className="profile__github link" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2">Github</a>
        <div className="profile__photo"></div>
      </div>
      <div className="profile__portfolio">
        <h2 className="profile__title">Портфолио</h2>
        <ul className="profile__sites">
          <

        <a className="profile__link link" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2">Статичный сайт</a>
        <a className="profile__link link" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2">Адаптивный сайт</a>
        <a className="profile__link link" href="https://github.com/Hadycr/movies-explorer-frontend/tree/level-2">Одностраничное приложение</a>

        </ul>
      </div>
    </section>
)
}

export default AboutMe;