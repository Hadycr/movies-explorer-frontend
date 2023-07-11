import './MoviesCard.css';

function MoviesCard({movie, handleClick, handleAddClick}) {
  return (
   <div className="movie__item">
        <img className="movie__img" src={movie.link} alt={movie.name} onClick={handleClick}/>
        <div className="movie__description">
          <div className="movie__info">
            <h2 className="movie__title">{movie.name}</h2>
            <p className="movie__time">{movie.time}</p>
          </div>
          <button className="movie__button" onClick={handleAddClick} type="button"></button>
        </div>
      </div>
  
  )
  }

  export default MoviesCard;
  