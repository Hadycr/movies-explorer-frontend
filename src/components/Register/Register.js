import '../Login/Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {ValidatorForm} from '../ValidatorForm/ValidatorForm';

function Register({handleRegistration, errorRegistration, handleSubmit}) {
  const { values, handleChange, errors, isValid } = ValidatorForm();

  function handleSubmit(evt) {
    evt.preventDefault();
      // registrationInfo.name = values.name;
      // registrationInfo.email = values.email;
      // registrationInfo.password = values.password;
      handleRegistration(values);
  }

  return (
    <main className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="login__form" onSubmit ={handleSubmit} noValidate>
          <div className="login__labels">
            <label className="login__label">
              <div className="login__placeholder">Имя</div>
              <input  className="login__input" id="name" type="text" name="name"
                 value={values.name || ""} minLength="2" maxLength="40" pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
                 onChange={ handleChange } required placeholder="Ваше имя"/>  
              <span className={`login__error ${
                errors.name ? "login__error_active" : ""
              }`}>
                {`${errors.name ? errors.name : ""}`}
              </span>
            </label>
            <label className="login__label">
              <div className="login__placeholder">E-mail</div>
              <input  className="login__input" id="email" type="email" name="email" 
                value={values.email || ""} pattern="^\w+@\w+\.(com|net|ru)$" 
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
                value={values.password || ""} 
                onChange={ handleChange } required placeholder="Пароль"/>
              <span className={`login__error ${
                errors.password  ? "login__error_active" : ""
              }`}>
                {`${errors.password  ? errors.password  : ""}`}
              </span>
            </label>
          </div>
          <span className={`login__error ${
                {errorRegistration}  ? "login__error_active" : ""
              }`}>
                {errorRegistration}
          </span>
          <div className="login__links">
            <button type="submit" className="login__button login__button_registration login__link"
              disabled={!isValid ? true : false}>Зарегистрироваться</button>
            <div className="login__info">
              <p className="login__registration">Уже зарегистрированы?</p>
              <Link to="/signin" className="login__intro login__link">Войти</Link>
            </div>
          </div>
        </form>
      </div> 
    </main> 
  )
}

export default Register;