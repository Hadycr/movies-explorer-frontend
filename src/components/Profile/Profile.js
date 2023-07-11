import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile({name, email, handleSubmit, handleChangeName, handleChangeEmail}) {


  return (
    <>
    <Header 
    />

    <div className="profile">  
      <div className="profile__container">
        <p className="profile__title">Привет, Виталий</p>
        <form className="profile__form" onSubmit ={handleSubmit}>
          <input  className="profile__input" placeholder="Имя" id="name" type="text" name="name" value='Имя' 
            onChange={ handleChangeName } required/>
          <input  className="profile__input" placeholder="E-mail" id="email" type="text" name="email" value="Емаил" 
            onChange={ handleChangeEmail } required/>
        </form>
        <button type="submit" className="profile__link button">Редактировать</button>
        <Link to="/signup" className="profile__signup">Выйти из аккаунта</Link>
      </div>
    </div>  
    </>
  )
}

export default Profile;



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
