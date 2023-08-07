import {useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import {ValidatorForm} from '../ValidatorForm/ValidatorForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Profile({ onUpdateUser }) {
  const { values, handleChange, errors, isValid } = ValidatorForm();
  const currentUser = useContext(CurrentUserContext);
  const [isUpdate, setIsUpdate] = useState(false);

  // useEffect(() => {
  //   if (currentUser) {
  //     setValues(currentUser);
  //     setIsValid(true);
  //   }
  // }, [currentUser, setIsValid, setValues]);

  function switchUpdate(evt) {
    evt.preventDefault();
    setIsUpdate(!isUpdate);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser( {name: values.name,
      email: values.email,
  });
}


  return (
    <main className="profile">  
      <div className="profile__container">
        <h1 className="profile__title">Привет,{currentUser.name}!</h1>
        <form className="profile__form" onSubmit ={handleSubmit}>
          <div className="profile__form-input profile__form-input_underline">
            <p className="profile__user-name">
              Имя
            </p>
            <input  className="profile__input" placeholder="Имя" id="name" 
              type="text" name="name" value={values.name || ''} onChange={ handleChange }
               minLength="2" maxLength="40" pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
              required/>
            
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
          <input  className="profile__input" placeholder="E-mail" id="email" type="text" 
          name="email" value={values.email || ""}  pattern="^\w+@\w+\.(com|net|ru)$" onChange={ handleChange } required/>
          </div>
          <span className={`profile__error ${
                errors.email ? "profile__error_active" : ""
              }`}>
                {`${errors.email ? errors.email : ""}`}
          </span>
        </form>
        {!isUpdate && (
        <div className="profile__info">
          <button type="submit" className="profile__edit profile__link" onclick={switchUpdate}
          disabled={!isValid ? true : false}>
            Редактировать
          </button>
          <Link to="/signin" className="profile__signin profile__link">Выйти из аккаунта</Link>
        </div>
        )}
        {isUpdate && (
        <div className="profile__info">
          <button type="submit" className="profile__save profile__link" onclick={switchUpdate}
           disabled={!isValid ? true : false}>
            Сохранить
          </button>
        </div>
        )}
      </div>
    </main>  
  )
}

export default Profile;
