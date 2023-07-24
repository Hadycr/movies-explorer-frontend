import '../Login/Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Register({name, email, password, handleSubmit, handleChangeName, handleChangeEmail, handleChangePassword}) {

  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="login__form" onSubmit ={handleSubmit}>
          <label className="login__label">
            <div className="login__placeholder">Имя</div>
            <input  className="login__input" id="name" type="text" name="name" value={name} 
              onChange={ handleChangeName } required placeholder="Ваше имя"/>  
          </label>
          <label className="login__label">
            <div className="login__placeholder">E-mail</div>
            <input  className="login__input" id="email" type="email" name="email" value={email} 
              onChange={ handleChangeEmail } required placeholder="Ваш email"/>
          </label>
          <label className="login__label">
            <div className="login__placeholder">Пароль</div>
            <input className="login__input" id="password" name="password" type="password" value={password} 
              onChange={ handleChangePassword } required placeholder="Пароль"/>
              <span className="login__error">Что-то пошло не так...</span>
          </label>
          <button type="submit" className="login__button login__button_registration login__link">Зарегистрироваться</button>
          <div className="login__info">
            <p className="login__registration">Уже зарегистрированы?</p>
            <Link to="/signin" className="login__intro login__link">Войти</Link>
          </div>
        </form>
      </div> 
    </div> 
  )
}

export default Register;