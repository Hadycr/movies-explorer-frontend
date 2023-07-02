import React from 'react';
import './Promo.css';
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
        <h1 className="promo__name"> Учебный проект студента факультета Веб-разработки. </h1>
        <h2 className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
        <div className="promo__img"></div>
        {/* <img className="promo__img" src="../../../src/images/text__COLOR_landing-logo.png" alt="Web планета"/> */}
      </div>
      <button className="promo__button">Узнать больше</button>
    </section>
  )
}

export default Promo;



