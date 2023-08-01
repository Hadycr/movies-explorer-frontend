import {useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
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
  const [errorRegistration, seterrorRegistration] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    moviesApi.getMovies()
      .then ((movies) => {
        setMovies(movies);
      
      })
      .catch((err) => console.log(`Ошибка: ${err}`));

  })

  function handleRegistration({name, email, password}) {
    mainApi.register({name, email, password})
      .then((data) => {
        if(data !== undefined) {
          localStorage.setItem('token', data.token);
          navigate('/signin', {replace: true})
        }
      })
      .catch(() => {
        seterrorRegistration("Что-то пошло не так! Попробуйте ещё раз.")
      })
      // .finally(
      //   handleRegister()
      // );
  }

  function handleLogin({email, password}) {
    mainApi.register({email, password})
      .then((data) => {
        if(data !== undefined) {
          localStorage.setItem('token', data.token);
          setIsLogIn(true);
          navigate('/');
        }
      })
      .catch(() => {
        seterrorRegistration("Что-то пошло не так! Попробуйте ещё раз.")
      })
  }

  function closeAllPopups() {
    setMenuOpen(false);
  }

  function handleMenuButtonClick() {
    setMenuOpen(true);
  }
  
  return (
    <>
      <Header
      isOpen={isMenuOpen}
      onClose={closeAllPopups} 
      handleChangeOpen={handleMenuButtonClick}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies 
          movies={movies}
          // onSaveMovie={onSaveMovie}
          // onDeleteMovie={onSaveMovie}
        />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register 
        handleRegistration = {handleRegistration}
        errorRegistration = {errorRegistration}/>} />
        <Route path="/signin" element={<Login 
        handleLogin = {handleLogin}
        errorRegistration = {errorRegistration}/>} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
      <Footer /> 

    </> 
  );
}

export default App;
