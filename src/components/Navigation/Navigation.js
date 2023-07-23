import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import Logo from '../Logo/Logo';

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
      <nav className={pathName === "/movies" || pathName === "/saved-movies" || pathName === "/profile" ? "navigation-movies" : "navigation-hidden"}>
        <Link to="/movies" className="navigation-movies__link navigatio-movies__link_dark navigation-link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation-movies__link navigation-link">
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
      <div className={`navigation-burger ${isOpen ? "navigation-burger_open" : ""}`} >
        <button className="navigation-burger__closed" 
          type="button"
          onClick={onClose}>
        </button>
        <nav>
          <ul className="navigation-burger__menu">
            <li className="navigation-burger__list">
              <Link to="/" className="navigation-burger__link navigation-link" onClick={onClose}>
                Главная
              </Link>
            </li>
            <li className="navigation-burger__list">
              <Link to="/movies" className="navigation-burger__link navigation-link" onClick={onClose}>
                Фильмы
              </Link>
            </li>
            <li className="navigation-burger__list">
              <Link to="/saved-movies" className="navigation-burger__link navigation-link" onClick={onClose}>
                Сохранённые фильмы
              </Link>
            </li>
            <li className="navigation-burger__list">
              <Link to="/profile" className="navigation-profile__link navigation-profile__burger-link navigation-link" onClick={onClose}>
                <p className="navigation-profile__account">Аккаунт</p>
                <div className="navigation-profile__logo"></div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>

  )
}

export default Navigation;