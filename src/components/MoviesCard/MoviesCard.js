import { useLocation } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard({movie}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

  function handleCardSaveClick () {
  }  // возможно надо оставить так как это возможность след спринта
  
  function handleDeleteCliсk() {
  }  // возможно надо оставить так как это возможность след спринта
  
  return (
   <div className="movie__item">
        <img className="movie__img" src={movie.image} alt={movie.name}/>
        <div className="movie__description">
          <div className="movie__info">
            <h3 className="movie__title">{movie.name}</h3>
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

  // function MoviesCard({movie, handleClick, handleAddClick}) {
  //   return (
  //    <div className="movie__item">
  //         <img className="movie__img" src={movie.link} alt={movie.name} onClick={handleClick}/>
  //         <div className="movie__description">
  //           <div className="movie__info">
  //             <h2 className="movie__title">{movie.name}</h2>
  //             <p className="movie__time">{movie.time}</p>
  //           </div>
  //           <button className="movie__button" onClick={handleAddClick} type="button"></button>
  //         </div>
  //       </div>
    
  //   )
  //   }
  