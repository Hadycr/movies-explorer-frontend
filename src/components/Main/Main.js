/* import {useContext } from 'react';
import pen from '../img/pen.svg';
import plus from '../img/plus.svg';*/

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

/*import {CurrentUserContext} from '../contexts/CurrentUserContext';*/

function Main() {


  return (
    <>
       {/* <Header 
        userStatus = 'Выйти'
        pathname = "/sign-in"
        email = {email}
        isLogIn = {isLogIn}
        onClick ={onClick}
      /> */}
      {/* <Header /> */}
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />


    </>
  )
}

export default Main;