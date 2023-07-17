import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import navigationLogo from "../../images/logo.png";

function Navigation() {
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
    <div className={pathName === "/movies" || pathName === "/profile" ? "navigation__movies" : "navigation__movies_hidden"}>
      <Link to="/movies" className="navigation__movies-link navigation__movies-link_dark navigation__link">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="navigation__movies-link navigation__link">
        Сохранённые фильмы
      </Link>
      <Link to="/saved-movies" className="navigation__profile navigation__link">
        <div className="navigation__profile-link">
          <p className="navigation__profile-account">Аккаунт</p>
          <div className="navigation__profile-logo"></div>
        </div>
      </Link>
    </div>
    </>


  )
}

export default Navigation;