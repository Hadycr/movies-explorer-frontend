import React from 'react';
import './Techs.css';

function Techs() {
 
  
  
    return (
    <section className="technology">
      <h2 className="technology__name"> Технологии</h2>
      <div className="technology__container">
        <h3 className="technology__title"> 7 технологий</h3>
        <h3 className="technology__info"> На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
        <ul className="technology__specification">
          <li className="technology__icon">HTML</li>
          <li className="technology__icon">CSS</li>
          <li className="technology__icon">JS</li>
          <li className="technology__icon">React</li>
          <li className="technology__icon">Git</li>
          <li className="technology__icon">Express.js</li>
          <li className="technology__icon">mongoDB</li>
        </ul>
      </div>
    </section>


    )
  }

export default Techs;