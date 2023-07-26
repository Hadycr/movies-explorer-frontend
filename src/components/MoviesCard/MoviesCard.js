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
    <section className="movie">
      <img className="movie__img" src={movie.image} alt={movie.name}/>
        <div className="movie__description">
          <div className="movie__info">
            <h3 className="movie__name">{movie.name}</h3>
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