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
  const [movies, setMovies] = useState([]);
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

  useEffect(() => {
    if(pathName === "/signin" || pathName === "/signup")
    seterrorRegistration("");
  }, [pathName]);

  useEffect(() => {
    if(isLogIn) {
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
      } else {
        moviesApi.getMovies()
          .then((movies) => {
            localStorage.setItem('movies', JSON.stringify(movies));
            setMovies(movies);
          })
          .catch((err) => console.log("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"));
        };
    }
  },[isLogIn]);

  useEffect(() => {
    if(isLogIn) {
      mainApi.getUserInfo()
      .then((res) => {
        localStorage.removeItem('movieFiltered');
        setСurrentUser(res)
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
    };
  }, [isLogIn]);

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
        .catch((err) => {
          if (err.status === 401) {
            localStorage.removeItem('token');
          }
          console.log(err);
        });
    } 
  }, []);

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

  function handleUpdateUser(currentUser) {
    mainApi.editUserInfo(currentUser)
      .then((data) => {
        setСurrentUser(data);
        setIsUpdate(true);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }


  useEffect(() => {
    if(isLogIn) {
      mainApi.getSavedMovies()
      .then ((movies) => {
        setSavedMovies(movies);   
        localStorage.setItem("savedMovies", JSON.stringify(movies)); 
      })
      .catch((err) => console.log("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"));
    };
  },[isLogIn]);

  function handleSaveMovie(movie, isLiked, id) {
    if (isLiked) {
      handleDeleteMovie(id)
    } else {
      mainApi.addMovies(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res]);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
      }
  }

  function handleDeleteMovie(id) {
    const searchedSavedMovies = JSON.parse(
      localStorage.getItem('movieFiltered')
    );
      mainApi.deleteCard(id)
      .then(() => {
        const newSaveMovies = setSavedMovies((state) => state.filter((item) => item._id !== id));
        localStorage.setItem("savedMovies", JSON.stringify(newSaveMovies)); 
        if (searchedSavedMovies) {
          const updatedSearchedSavedMovies = searchedSavedMovies.filter(
            (movie) => movie._id !== id
          );
          localStorage.setItem('searchedSavedMovies', JSON.stringify(updatedSearchedSavedMovies)
          );
        }
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
        <Route path="/404" element={<PageNotFound isLoggedIn={isLogIn} />} />
      </Routes>
      <Footer /> 
    </CurrentUserContext.Provider>
    </> 
  );
}

export default App;
