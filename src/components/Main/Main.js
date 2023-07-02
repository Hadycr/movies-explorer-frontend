/* import {useContext } from 'react';
import pen from '../img/pen.svg';
import plus from '../img/plus.svg';*/
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
// import AboutMe from './AboutMe/AboutMe';
// import Portfolio from './Portfolio/Portfolio';
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
      <Promo />
      <AboutProject />
      <Techs />
      {/*<AboutMe />
      <Portfolio /> */}

    </>
  )
}

export default Main;