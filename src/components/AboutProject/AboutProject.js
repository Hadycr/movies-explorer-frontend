import React from 'react';
import './AboutProject.css';

function AboutProject() {
 
  
  
    return (
    <section className="about" id="about">
      <h2 className="about__name">О проекте</h2>
      <div className="about__specification">
        <p className="about__header">Дипломный проект включал 5 этапов</p>
        <p className="about__header">На выполнение диплома ушло 5 недель</p>
        <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about__terms">
        <div className="about__date about__date_dark">1 неделя</div>
        <div className="about__date">4 недели</div>
        <p className="about__specialization">Back-end</p>
        <p className="about__specialization">Front-end</p>
      </div>
    </section>

    )
  }

export default AboutProject;