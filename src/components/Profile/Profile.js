import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import {ValidatorForm} from '../ValidatorForm/ValidatorForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Profile({ onUpdateUser, onLogout }) {
  const { values, handleChange, errors, isValid, resetForm } = ValidatorForm();
  const currentUser = useContext(CurrentUserContext);
  const [isValues, setValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setValues(true);
    } else {
      setValues(false);
    }
  }, [values]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  

  return (
    <main className="profile">  
      <div className="profile__container">
        <h1 className="profile__title">Привет,{currentUser.name}!</h1>
        <form className="profile__form"  onSubmit={handleSubmit}>
          <div className="profile__form-input profile__form-input_underline">
            <p className="profile__user-name">
              Имя
            </p>
            <input  className="profile__input" id="name" 
              type="text" name="name" value={values.name || ""} onChange={ handleChange }
               minLength="2" maxLength="40" pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
               />
          </div>
          <span className={`profile__error ${
                errors.name ? "profile__error_active" : ""
              }`}>
                {`${errors.name ? errors.name : ""}`}
          </span>
          <div className="profile__form-input">
            <p className="profile__user-name">
              E-mail
            </p>
          <input  className="profile__input" id="email" type="text" 
            name="email" value={values.email || ""}  pattern= "[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}" onChange={ handleChange }
          />
          </div>
          <span className={`profile__error ${
                errors.email ? "profile__error_active" : ""
              }`}>
                {`${errors.email ? errors.email : ""}`}
          </span>
          <div className="profile__info">
            <button type="submit" className="profile__edit profile__link"
              disabled={isValues ? true : false}
            >
              Редактировать
            </button>
            <Link to="/"  onClick={onLogout}
              className="profile__signin profile__link">Выйти из аккаунта</Link>
          </div>
        </form>
      </div>
    </main>  
  )
}

export default Profile;
