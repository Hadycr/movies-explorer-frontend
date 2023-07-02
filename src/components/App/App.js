import {useState, useEffect } from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main'

function App() {
  const [currentUser, setСurrentUser] = useState({
    name:"",
    email:"",
  });  
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main />
        {/* <Routes>
          <Route path="/sign-up" element={<Register //регистрация
            handleRegistration = {handleRegistration}/>}/>
          <Route path="/sign-in" element={<Login //вход
            handleLogin={handleLogin} />}/>
          <Route path="/" element={<ProtectedRoute //о проекте
            loggedIn = {isLogIn}
            element={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
            email={email}
            isLogIn = {isLogIn}
            onClick = {handleSignOut}
            />}/>
            <Route path="/movies" element={<Login //фильмы
            handleLogin={handleLogin} />}/>
            <Route path="/saved-movies" element={<Login //сохраненые фильмы
            handleLogin={handleLogin} />}/>
            <Route path="/profile" element={<Login //профиль
            handleLogin={handleLogin} />}/>
        </Routes> */}
          {/* <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser ={ handleUpdateUser }/>
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace  ={ handleAddPlaceSubmit }/>
          <PopupWithForm name="delete" title="Вы уверены?" submit="Да"/>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar ={ handleUpdateAvatar }/>  
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
          <Footer />
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            img={infoTooltipImage}
            info={popupTitle}
          />  */}
        </CurrentUserContext.Provider>
    
  );
}

export default App;
