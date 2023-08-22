import { useEffect } from "react";
import '../Login/Login.css';
import { Link, useNavigate  } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {ValidatorForm} from '../ValidatorForm/ValidatorForm';

function Login({handleLogin, errorRegistration, loggedIn}) {
  const { values, handleChange, errors, isValid, resetForm } = ValidatorForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies');
    }
  }, [loggedIn]);


  function handleSubmit(evt) {
    evt.preventDefault();
      
    handleLogin({
      email: values.email,
      password: values.password
    });
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (

    <main className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit ={handleSubmit}>
          <div className="login__labels">
            <label className="login__label">
              <div className="login__placeholder">E-mail</div>
              <input  className="login__input" id="email" type="email" name="email" 
                value={values.email || ""} pattern= "[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}"
                onChange={ handleChange } required placeholder="Ваш email"/>
              <span className={`login__error ${
                errors.email ? "login__error_active" : ""
              }`}>
                {`${errors.email ? errors.email : ""}`}
              </span>
            </label>
            <label className="login__label">
              <div className="login__placeholder">Пароль</div>
              <input className="login__input" id="password" name="password" type="password" 
                value={values.password || ''} onChange={ handleChange } required placeholder="Пароль"/>
              <span className={`login__error ${
                errors.password ? "login__error_active" : ""
              }`}>
                {`${errors.password ? errors.password : ""}`}
              </span>
            </label>
          </div>
          <span className={`login__error ${
                {errorRegistration}  ? "login__error_active" : ""
              }`}>
                {errorRegistration}
          </span>
          <div className="login__links">
            <button type="submit" className="login__button login__button_login login__link"
              disabled={!isValid ? true : false}>Войти</button>
            <div className="login__info">
              <p className="login__registration">Ещё не зарегистрированы?</p>
              <Link to="/signup" className="login__intro login__link">Регистрация</Link>
            </div>
          </div>
          
        </form>
      </div> 
    </main> 
  )
}

export default Login;