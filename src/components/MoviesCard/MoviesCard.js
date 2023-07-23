import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard({movie}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  function handleCardSaveClick () {
  }
  
  function handleDeleteCliсk() {
  }
  
  return (
    <div className="movie__item">
      <img className="movie__img" src={movie.image} alt={movie.name}/>
        <div className="movie__description">
          <div className="movie__info">
            <p className="movie__name">{movie.name}</p>
            <p className="movie__duration">{movie.duration}</p>
          </div>
          <button 
             className={pathName === "/movies" ? "movies__save-button" : "movies__delete-button"}
             onClick={pathName === "/movies" ? handleCardSaveClick : handleDeleteCliсk}
             type="button">
          </button>
        </div>
    </div>
  )
}

export default MoviesCard;