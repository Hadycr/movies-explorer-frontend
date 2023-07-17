import '../Login/Login.css';
import { Link } from 'react-router-dom';
import navigationLogo from "../../images/logo.png";

function Login({name, email, password, handleSubmit, handleChangeName, handleChangeEmail, handleChangePassword}) {


  return (


    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo"
            src={navigationLogo}
            alt="Логотип"/>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit ={handleSubmit}>
          <label className="login__label">
            <div className="login__placeholder">E-mail</div>
            <input  className="login__input" id="email" type="text" name="email" value={email} 
              onChange={ handleChangeEmail } required/>

          </label>
          <label className="login__label">
            <div className="login__placeholder">Пароль</div>
            <input className="login__input" id="password" name="password" type="password" value={password} 
              onChange={ handleChangePassword } required/>
              <span className="login__error">Что-то пошло не так...</span>
          </label>
          <button type="submit" className="login__button login__button_login login__link">Войти</button>
          <div className="login__info">
            <p className="login__registration">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="login__intro login__link">Регистрация</Link>
          </div>
        </form>
      </div> 
    </div> 
  )
}

export default Login;