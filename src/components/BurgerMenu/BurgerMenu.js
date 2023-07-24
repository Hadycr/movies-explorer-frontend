import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({isOpen, onClose}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  return (
    <section className={`burger ${isOpen ? "burger_open" : ""}`}>
      <div className="burger__menu">
        <button className="burger__menu__closed" 
          type="button"
          onClick={onClose}>
        </button>    
        <nav>
          <ul className="burger__menu-navigation">
            <li>
              <Link to="/" className="burger__menu-link burger__link"
              onClick={onClose}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/movies" className={`burger__menu-link burger__link ${
              pathName === "/movies" ? "burger__menu-link_active" : ""}`} 
              onClick={onClose}>
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="/saved-movies" className={`burger__menu-link burger__link ${
              pathName === "/saved-movies" ? "burger__menu-link_active" : ""}`}  
              onClick={onClose}>
                Сохранённые фильмы
              </Link>
            </li>
            <li>
              <Link to="/profile" className="burger__menu-profile burger__link" onClick={onClose}>
                <p className="burger__menu-profile-account">Аккаунт</p>
                <div className="burger__menu-profile-logo"></div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default BurgerMenu;