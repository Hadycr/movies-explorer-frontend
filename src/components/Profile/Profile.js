import './Profile.css';

import { Link } from 'react-router-dom';

function Profile({name, email, handleSubmit, handleChangeName, handleChangeEmail}) {


  return (



    <div className="profile">  
      <div className="profile__container">
        <p className="profile__title">Привет, Виталий!</p>
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
        <div className="profile__info">
          <button type="submit" className="profile__link">Редактировать</button>
          <Link to="/signin" className="profile__signin">Выйти из аккаунта</Link>
        </div>
      </div>
    </div>  

  )
}

export default Profile;


<div className="profile__form-input profile__form-input_border">
<label className="profile__form-text">{"Имя"}</label>
<input required id="name" name="name" type="text" placeholder="Имя" className="profile__form-text profile__form-text_input"
  value={"Виталий"} />
</div>
// return (
//   <>
//   <Header 
//   />

//   <div className="profile">  
//     <div className="profile__container">
//       <p className="profile__title">Привет,{name}</p>
//       <form className="profile__form" onSubmit ={handleSubmit}>
//         <input  className="profile__input" placeholder="Имя" id="name" type="text" name="name" value={name} 
//           onChange={ handleChangeName } required/>
//         <input  className="profile__input" placeholder="E-mail" id="email" type="text" name="email" value={email} 
//           onChange={ handleChangeEmail } required/>
//       </form>
//       <button type="submit" className="profile__link button">Редактировать</button>
//       <Link to="/signup" className="profile__info">Выйти из аккаунта</Link>
//     </div>
//   </div>  
//   </>
// )
// }
