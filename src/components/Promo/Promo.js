import React from 'react';
import './Promo.css';
import { Link } from "react-scroll";

function Promo() {

  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__title"> Учебный проект студента факультета Веб-разработки.</h1>
          <h2 className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</h2>
        </div>
        <div className="promo__img"></div>
      </div>
      <Link
        className="promo__button"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>Узнать больше</Link>
    </section>
  )
}

export default Promo;



