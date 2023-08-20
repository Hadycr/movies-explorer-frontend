import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({onClose, isOpen, handleChangeOpen, loggedIn}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  return (
    <div className="navigation">
      <Logo />
      <nav className={(pathName === "/" && !loggedIn) ? "navigation__main" : "navigation__hidden"}>
        <Link to="/signup" className="navigation__registration-link navigation__link">
          Регистрация
        </Link>
        <Link to="/signin" className="navigation__login-link navigation__link">
          Войти
        </Link>
      </nav>
      <nav className={(pathName === "/" && loggedIn) || pathName === "/movies" || pathName === "/saved-movies" || pathName === "/profile" 
      ? "navigation__movies" : "navigation__hidden"}>
        <Link to="/movies" className={`navigation__movies-link navigation__link ${
          pathName === "/movies" ? "navigation__movies-link_active" : ""}`}>
          Фильмы
        </Link>
        <Link to="/saved-movies" className={`navigation__movies-link navigation__link  ${
          pathName === "/saved-movies" ? "navigation__movies-link_active" : ""}`}>
          Сохранённые фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__profile navigation__link ">
          <Link to="/profile" className="navigation__profile-link">
            <p className="navigation__profile-account">Аккаунт</p>
            <div className="navigation__profile-logo"></div>
          </Link>
        </Link>
      </nav>
      <button className={pathName === "/movies" || 
                        pathName === "/saved-movies" || 
                        pathName === "/profile" 
                        ? "navigation__burger" 
                        : "navigation__hidden"
                        } 
              onClick={handleChangeOpen}
              type="button">
        <span className="navigation__span"></span>
        <span className="navigation__span"></span>
        <span className="navigation__span"></span>
      </button>
      < BurgerMenu 
        isOpen = {isOpen}
        onClose = {onClose}
      />
    </div>

  )
}

export default Navigation;