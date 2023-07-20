import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import navigationLogo from "../../images/logo.png";

function Navigation({onClose, isOpen, handleChangeOpen}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  return (
    <>
      <Link to="/" className="navigation__logo-link navigation__link">
        <img className="navigation__logo"
          src={navigationLogo}
          alt="Логотип" />
      </Link>
      <div className={pathName === "/" ? "navigation__main" : "navigation__main_hidden"}>
        <Link to="/signup" className="navigation__registration-link navigation__link">
          Регистрация
        </Link>
        <Link to="/signin" className="navigation__login-link navigation__link">
          Войти
        </Link>
      </div>
      <div className={pathName === "/movies" || pathName === "/saved-movies" || pathName === "/profile" ? "navigation__movies" : "navigation__movies-hidden"}>
        <Link to="/movies" className="navigation__movies-link navigation__movies-link_dark navigation__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__movies-link navigation__link">
          Сохранённые фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__profile navigation__link">
          <Link to="/profile" className="navigation__profile-link">
            <p className="navigation__profile-account">Аккаунт</p>
            <div className="navigation__profile-logo"></div>
          </Link>
        </Link>
      </div>
      <button className={pathName === "/movies" || 
                        pathName === "/saved-movies" || 
                        pathName === "/profile" 
                        ? "navigation__burger-button" 
                        : "navigation__burger-disable"
                        } 
              onClick={handleChangeOpen}
              type="button">
        <span className="navigation__burger-span"></span>
        <span className="navigation__burger-span"></span>
        <span className="navigation__burger-span"></span>
      </button>
      <div className={`navigation__menu ${isOpen ? "navigation__menu_open" : ""}`} >
        <button className="navigation__burger-closed" 
          type="button"
          onClick={onClose}>
        </button>
        <nav>
          <ul className="navigation__burger">
            <li className="navigation__burger-list">
              <Link to="/" className="navigation__burger-link navigation__link" onClick={onClose}>
                Главная
              </Link>
            </li>
            <li className="navigation__burger-list navigation__burger-link_underline">
              <Link to="/movies" className="navigation__burger-link navigation__link" onClick={onClose}>
                Фильмы
              </Link>
            </li>
            <li className="navigation__burger-list">
              <Link to="/saved-movies" className="navigation__burger-link navigation__link" onClick={onClose}>
                Сохранённые фильмы
              </Link>
            </li>
            <li className="navigation__burger-list navigation__burger-list_bottom">
              <Link to="/profile" className="navigation__profile-link navigation__profile-burger-link navigation__link" onClick={onClose}>
                <p className="navigation__profile-account">Аккаунт</p>
                <div className="navigation__profile-logo"></div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>

  )
}

export default Navigation;