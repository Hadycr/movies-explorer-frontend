/* import {useContext } from 'react';
import pen from '../img/pen.svg';
import plus from '../img/plus.svg';*/

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main() {

  return (
    <>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
        <Footer />    
    </>  
  )
}

export default Main;