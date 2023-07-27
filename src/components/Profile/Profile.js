import {useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';


function Profile({handleSubmit, handleChangeName, handleChangeEmail}) {

  const [isUpdate, setIsUpdate] = useState(false);

  function switchUpdate(evt) {
    evt.preventDefault();
    setIsUpdate(!isUpdate);
  }


  return (
    <main className="profile">  
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" onSubmit ={handleSubmit}>
          <div className="profile__form-input profile__form-input_underline">
            <p className="profile__user-name">
              {"Имя"}
            </p>
            <input  className="profile__input" placeholder="Имя" id="name" type="text" name="name" value="Виталий" 
              onChange={ handleChangeName } required/>
          </div>
          <div className="profile__form-input">
            <p className="profile__user-name">
              {"E-mail"}
            </p>
          <input  className="profile__input" placeholder="E-mail" id="email" type="text" name="email" value="pochta@yandex.ru" 
            onChange={ handleChangeEmail } required/>
          </div>
        </form>
        {!isUpdate && (
        <div className="profile__info">
          <button type="submit" className="profile__edit profile__link" onclick={switchUpdate}>
            Редактировать
          </button>
          <Link to="/signin" className="profile__signin profile__link">Выйти из аккаунта</Link>
        </div>
        )}
        {isUpdate && (
        <div className="profile__info">
          <button type="submit" className="profile__save profile__link" onclick={switchUpdate}>
            Сохранить
          </button>
        </div>
        )}
      </div>
    </main>  
  )
}

export default Profile;
