import {useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import {ValidatorForm} from '../ValidatorForm/ValidatorForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Profile({ onUpdateUser, onLogout }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } = ValidatorForm();
  const currentUser = useContext(CurrentUserContext);
  const [isUpdate, setIsUpdate] = useState(false);
  // const [name, setInputName] = useState("");
  // const [email, setInputEmail] = useState("");

  // useEffect(() => {
  //   if (currentUser) {
  //     setValues(currentUser);
  //     // setIsValid(true);
  //   }
  // }, [currentUser, setValues]);
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  // function switchUpdate(evt) {
  //   evt.preventDefault();
  //   setIsUpdate(!isUpdate);
  // }


function handleSubmit(e) {
  e.preventDefault();
  onUpdateUser({
    name: values.name,
    email: values.email,
  });
}

// function handleChangeName(e) {
//   setInputName(e.target.value);
// }

// function handleChangeEmail(e) {
//   setInputEmail(e.target.value);
// }
// useEffect(() => {
//   setInputName(currentUser.name);
//   setInputEmail(currentUser.email);
//   setIsUpdate(true);
//   console.log(currentUser);
// }, [currentUser, isUpdate]);

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
            name="email" value={values.email || ""}  pattern="^\w+@\w+\.(com|net|ru)$" onChange={ handleChange }
          />
          </div>
          <span className={`profile__error ${
                errors.email ? "profile__error_active" : ""
              }`}>
                {`${errors.email ? errors.email : ""}`}
          </span>
        
          {/* {!isUpdate && ( */}
          <div className="profile__info">
            <button type="submit" className="profile__edit profile__link"
            //  onclick={switchUpdate}
              disabled={!isValid ? true : false}
            >
              Редактировать
            </button>
            <Link to="/"  onClick={onLogout}
              className="profile__signin profile__link">Выйти из аккаунта</Link>
          </div>
          {/* )}  */}
        </form>
        {/* {isUpdate && (
        <div className="profile__info">
          <button type="submit" className="profile__save profile__link" onclick={switchUpdate}
           disabled={!isValid ? true : false}>
            Сохранить
          </button>
        </div>
        )} */}
      </div>
    </main>  
  )
}

export default Profile;
