import React from 'react';
import './Promo.css';
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link} from 'react-router-dom';

function Promo() {
//   const about =  document.getElementById("about");
// const button = document.querySelector('.tittle__button');
//   function handleButtonScroll() {
//     about.scrollIntoView({block: "center", behavior: "smooth"});
//  }
// onClick={handleButtonScroll}
//  button .addEventListener('click', handleButtonScroll);
 


  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__name"> Учебный проект студента факультета Веб-разработки.</h1>
          <h2 className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</h2>
        </div>
        <div className="promo__img"></div>
        {/* <img className="promo__img" src="../../../src/images/text__COLOR_landing-logo.png" alt="Web планета"/> */}
      </div>
      <Link
      className="promo__button"
    // activeClass="promo__button"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Узнать больше</Link>
      
      {/* <button className="promo__button">Узнать больше</button> */}
    </section>
  )
}

export default Promo;



