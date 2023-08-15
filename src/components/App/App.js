import {useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './App.css';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from '../Footer/Footer';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';



function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);  //все фильмы с внешнего айпи
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorRegistration, seterrorRegistration] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [currentUser, setСurrentUser] = useState({
    name:"",
    email:"",
  });
  const navigate = useNavigate();
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;
  const [isUpdate, setIsUpdate] = useState(false);


  //получение фильмов
  useEffect(() => {
    if(isLogIn) {
    moviesApi.getMovies()
      .then ((movies) => {
        setMovies(movies);    
      })
      .catch((err) => console.log("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"));
    };
  },[isLogIn]);

  //получение инфо о юзере
  useEffect(() => {
    if(isLogIn) {
      mainApi.getUserInfo()
      .then((res) => {
        console.log(res);
        localStorage.removeItem('movieFiltered');
        setСurrentUser(res)
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
    };
  }, [isLogIn]);


  //проверка токена
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token)
        .then((data) => {
          if (data) {
            setIsLogIn(true);
          }
          navigate(pathName);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    }
  }, []);


//регистрация пользователя
  function handleRegistration({ name, email, password }) {
    mainApi.register({ name, email, password })
      .then((data) => {
        if(data !== undefined) {
          handleLogin({email, password})
        }
      })
      .catch(() => {
        seterrorRegistration("Что-то пошло не так! Попробуйте ещё раз.")
      })
  }
//вход пользователя
  function handleLogin({email, password}) {
    mainApi.authorize({email, password})
      .then((data) => {
        if(data !== undefined) {
          localStorage.setItem('token', data.token);
          setIsLogIn(true);
          navigate('/movies');
        }
      })
      .catch(() => {
        seterrorRegistration("Что-то пошло не так! Попробуйте ещё раз.");
      })
  }

  //редактирование пользователя
  function handleUpdateUser(currentUser) {
    mainApi.editUserInfo(currentUser)
      .then((data) => {
        setСurrentUser(data);
        setIsUpdate(true);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  //получение сохраненных карточек
      useEffect(() => {
        if(isLogIn) {
          mainApi.getSavedMovies()
          .then ((movies) => {
            // console.log(movies);
            setSavedMovies(movies);   
            localStorage.setItem("savedMovies", JSON.stringify(movies)); 
          })
          .catch((err) => console.log("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"));
        };
      },[isLogIn]);

      //при нажатие на кнопку добавляется в save
  function handleSaveMovie(movie) {

    mainApi.addMovies(movie)
      .then((res) => {
        console.log(res);
        setSavedMovies([...savedMovies, res]);
        console.log(savedMovies);
    
      })
      .catch((err) => console.log(`Ошибка: ${err}`));

    }


//при  нажатие на кретик удаляет карточку
  function handleDeleteMovie(movie) {
    mainApi.deleteCard(movie.movieId)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== movie.movieId));
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
    }

  function closeAllPopups() {
    setMenuOpen(false);
  }

  function handleMenuButtonClick() {
    setMenuOpen(true);
  }

  function handleSignOut () {
    localStorage.clear();
    navigate('/');
    setIsLogIn(false);
  }
  
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <Header
      isOpen={isMenuOpen}
      onClose={closeAllPopups} 
      handleChangeOpen={handleMenuButtonClick}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        
        <Route path="/movies" element={<ProtectedRoute 
          loggedIn = {isLogIn}
          element= {Movies} 
          movies={movies}
          savedMovies={savedMovies}
          onSaveMovie={handleSaveMovie}
          // onDeleteMovie={handleDeleteMovie}
        />}/>
        <Route path="/saved-movies" element={<ProtectedRoute 
          loggedIn = {isLogIn}
          element= {SavedMovies}
          savedMovies={savedMovies} 
          onDeleteMovie={handleDeleteMovie}
        />}/>
        <Route path="/profile" element={<ProtectedRoute 
          loggedIn = {isLogIn}
          element = {Profile}
          onUpdateUser = {handleUpdateUser} 
          onLogout = {handleSignOut}
        />}/>
        <Route path="/signup" element={<Register 
          handleRegistration = {handleRegistration}
          errorRegistration = {errorRegistration}
        />} />
        <Route path="/signin" element={<Login 
          handleLogin = {handleLogin}
          errorRegistration = {errorRegistration}
        />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
      <Footer /> 
    </CurrentUserContext.Provider>
    </> 
  );
}

export default App;
