import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import navigationLogo from "../../images/logo.png";

function Navigation() {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;
  return (
    <>
    <Link to="/" className="navigation__logo-link">
      <img className="navigation__logo"
        src={navigationLogo}
        alt="Логотип" />
    </Link>
    <div className={pathName === "/" ? "navigation__main" : "navigation__main_hidden"}>
      <Link to="/signup" className="navigation__registration-link">
        Регистрация
      </Link>
      <Link to="/signin" className="navigation__login-link">
        Войти
      </Link>
    </div>
    <div className={pathName === "/movies" ? "navigation__movies" : "navigation__movies_hidden"}>
      <Link to="/movies" className="navigation__movies-link">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="navigation__saved-movies-link">
        Сохранённые фильмы
      </Link>
      <Link to="/saved-movies" className="navigation__saved-movies-link">
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