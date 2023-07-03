import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Login from '../Login/Login';

function Header({isLogIn, email, userStatus, pathname, onClick }) {
  return (
    <header className="header">
      < Login />
      {/* <div className='header__container'>
        {isLogIn ? <div className='header__login'>
                     <Link to={pathname} onClick = {onClick} className='header__button button'>{userStatus}</Link>
                     <Link to={pathname} onClick = {onClick} className='header__button button'>{userStatus}</Link>
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