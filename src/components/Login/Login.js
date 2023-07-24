import '../Login/Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Login({email, password, handleSubmit, handleChangeEmail, handleChangePassword}) {

  return (

    <div className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit ={handleSubmit}>
          <label className="login__label">
            <div className="login__placeholder">E-mail</div>
            <input  className="login__input" id="email" type="email" name="email" value={email} minLength="2" maxLength="30" 
              onChange={ handleChangeEmail } required placeholder="Ваш email"/>
          </label>
          <label className="login__label">
            <div className="login__placeholder">Пароль</div>
            <input className="login__input" id="password" name="password" type="password" value={password} 
              onChange={ handleChangePassword } required minLength="2" maxLength="30" placeholder="Пароль"/>
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