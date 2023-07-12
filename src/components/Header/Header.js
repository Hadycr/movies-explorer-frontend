import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({isLogIn, email, userStatus, pathname, onClick }) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  return (
    <header className={`header ${
      pathName === "/" ||
      pathName === "/movies" ||
      pathName === "/saved-movies" ||
      pathName === "/profile" ||
      pathName === "/signin" ||
      pathName === "/signup"
        ? ""
        : "header_hidden"
    }`}
  >
      <Navigation
        // loggedIn={setLoggedIn()}
        // pathName={pathName}
        // isOpen={isOpen}
        // onMenuButtonClick={onMenuButtonClick}
        // onClose={onClose}
        // onCloseByOverlay={onCloseByOverlay}
        // onCloseByEsc={onCloseByEsc}
      />
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