import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import {MOVIES_BASE_URL} from "../../config/config";

function MoviesCard({movie}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;
  const imageUrl = `${MOVIES_BASE_URL}${movie.image.url}`
  function handleCardSaveClick () {
  }
  
  function handleDeleteCliсk() {
  }
  
  return (
    <section className="movie">
      <img className="movie__img" src={imageUrl} alt={movie.nameRU}/>
        <div className="movie__description">
          <div className="movie__info">
            <h3 className="movie__name">{movie.nameRU}</h3>
            <p className="movie__duration">{movie.duration}</p>
          </div>
          <button 
             className={pathName === "/movies" ? "movie__save-button" : "movie__delete-button"}
             onClick={pathName === "/movies" ? handleCardSaveClick : handleDeleteCliсk}
             type="button">
          </button>
        </div>
    </section>
  )
}

export default MoviesCard;