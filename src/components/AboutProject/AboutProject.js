import React from 'react';
import './AboutProject.css';

function AboutProject() {
 
  
  
    return (
    <section className="about-project" id="about">
      <h2 className="about-project__name">О проекте</h2>
      <div className="about-project__specification">
        <div className="about-project__stage">
          <h3 className="about-project__header">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__stage">
          <h3 className="about-project__header">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__terms">
        <div className="about-project__date about-project__date_dark">1 неделя</div>
        <div className="about-project__date">4 недели</div>
        <p className="about-project__specialization">Back-end</p>
        <p className="about-project__specialization">Front-end</p>
      </div>
    </section>

    )
  }

export default AboutProject;