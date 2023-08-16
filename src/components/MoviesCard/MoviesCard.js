// import { useContext } from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import {MOVIES_BASE_URL} from "../../config/config";
// import {CurrentUserContext} from '../contexts/CurrentUserContext';

function MoviesCard({movie, onSaveMovie, onDeleteMovie, savedMovies}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;
  // const currentUser = useContext(CurrentUserContext);
  // const isLiked = savedMovies.some((i) => i.owner === currentUser._id);
  const isLiked = savedMovies
  ? savedMovies.some((i) => i.movieId === movie.id)
  : false; 
  const savedMovie = savedMovies
  ? savedMovies.find((item) => item.movieId === movie.id)
  : '';
  const imageUrl = movie.image.url
    ? `${MOVIES_BASE_URL}${movie.image.url}`
    : movie.image;

  // function handleCardSaveClick () {
  //   onSaveMovie(movie);
  // }

  function handleCardSaveClick () {
    onSaveMovie(movie, isLiked, savedMovie?._id);
  }


  function handleDeleteCliсk() {
    onDeleteMovie()
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "м";
};


  return (
    <section className="movie">
      <a 
        className="movie__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movie__img" src={imageUrl} 
        alt={movie.nameRU}/>
      </a>
      <div className="movie__description">
        <div className="movie__info">
          <h3 className="movie__name">{movie.nameRU}</h3>
          <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
        </div>
        <button 
          className={pathName === "/movies" 
           ?  (isLiked
            ? "movie__save-button"
            :  "movie__save-button-clear")
         : "movie__delete-button"}
          

           
           
          //  "movie__save-button" : "movie__delete-button"}
          onClick={pathName === "/movies" ? handleCardSaveClick : handleDeleteCliсk}
          type="button">
        </button>
      </div>
    </section>
  )
}

export default MoviesCard;

  // const isSaved = movie.likes.some(id => id === currentUser._id);

  // function handleCardSaveClick() {
  //   if (savedMovies) {
  //     onDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
  //   } else {
  //     onSaveMovie(movie);
  //   }
  // }