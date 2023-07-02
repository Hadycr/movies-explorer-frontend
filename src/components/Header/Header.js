import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({isLogIn, email, userStatus, pathname, onClick }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      {/* <div className='header__container'>
        {isLogIn ? <div className='header__login'>
                     <a href=''>Фильмы</a>
                     <a href=''>Сохраненын Фильмы</a>
                     <Link to={pathname} onClick = {onClick} className='header__button button'>{userStatus}</Link>
                   </div> : <div classname="header__notlogin">
                              <Link to={pathname} onClick = {onClick} className='header__button button'>{userStatus}</Link>
                              <Link to={pathname} onClick = {onClick} className='header__button button'>{userStatus}</Link>
                            </div>}
      </div> */}
    </header>
  )
}

export default Header;