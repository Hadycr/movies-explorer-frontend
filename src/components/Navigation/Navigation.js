import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({onClose, isOpen, handleChangeOpen}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  return (
    <>
      <Logo />
      <nav className={pathName === "/" ? "navigation-main" : "navigation-hidden"}>
        <Link to="/signup" className="navigation-main__registration-link navigation-link">
          Регистрация
        </Link>
        <Link to="/signin" className="navigation-main__login-link navigation-link">
          Войти
        </Link>
      </nav>
      <nav className={pathName === "/movies" || pathName === "/saved-movies" || pathName === "/profile" 
      ? "navigation-movies" : "navigation-hidden"}>
        <Link to="/movies" className={`navigation-movies__link navigation-link ${
          pathName === "/movies" ? "navigation-movies__link_active" : ""}`}>
          Фильмы
        </Link>
        <Link to="/saved-movies" className={`navigation-movies__link navigation-link ${
          pathName === "/saved-movies" ? "navigation-movies__link_active" : ""}`}>
          Сохранённые фильмы
        </Link>
        <Link to="/saved-movies" className="navigation-profile navigation-link">
          <Link to="/profile" className="navigation-profile__link">
            <p className="navigation-profile__account">Аккаунт</p>
            <div className="navigation-profile__logo"></div>
          </Link>
        </Link>
      </nav>
      <button className={pathName === "/movies" || 
                        pathName === "/saved-movies" || 
                        pathName === "/profile" 
                        ? "navigation-burger__button" 
                        : "navigation-hidden"
                        } 
              onClick={handleChangeOpen}
              type="button">
        <span className="navigation-burger__span"></span>
        <span className="navigation-burger__span"></span>
        <span className="navigation-burger__span"></span>
      </button>
      < BurgerMenu 
        isOpen = {isOpen}
        onClose = {onClose}
      />
    </>

  )
}

export default Navigation;