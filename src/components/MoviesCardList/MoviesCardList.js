import { useState, useMemo, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowSize from '../../config/WindowSize'
import { useLocation } from "react-router-dom";

function MoviesCardList({movies, onSaveMovie, onDeleteMovie, savedMovies}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;
  const size = useWindowSize();
  const [addMovies, setAddMovies] = useState(0);

  useEffect(() => {
    setAddMovies(0);
  }, [movies]);

  const moviesRender = useMemo(() => {
    const countRender = size.width < 670 ? 5 : size.width < 1279 ? 8 : 16;
    console.log(countRender);
    return movies.slice(0, countRender + addMovies);
  }, [movies, addMovies, size]);

  return (
    <section className="movie-items">
      <div className="movie-items__container">
        {moviesRender.map((movie) =>  (
          <MoviesCard 
          // key={isSavedFilms ? card._id : card.id}
            key={ movie.movieId }
            movie={movie}
            savedMovies={savedMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </div>
      {pathName === "/movies" && 
        movies.length > moviesRender.length &&  
        (<button type="button" className="movie-items__button"
        onClick={() => {
          setAddMovies((prev) => prev + (size.width >= 1280 ? 4 : 2));
        }}>
          Ещё
         </button>
        )
      }
    </section>   
  )
}

export default MoviesCardList;