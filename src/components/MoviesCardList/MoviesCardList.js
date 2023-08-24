import { useState, useMemo, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowSize from '../../config/WindowSize'
import { useLocation } from "react-router-dom";
import { SHOW_MORE_DECKTOP, 
         SHOW_MORE_MOBILE,
         SHOW_DECKTOP,
         SHOW_TABLET, 
         SHOW_MOBILE} from "../../config/config";


function MoviesCardList({movies, onSaveMovie, onDeleteMovie, savedMovies}) {
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;
  const size = useWindowSize();
  const [addMovies, setAddMovies] = useState(0);

  useEffect(() => {
    setAddMovies(0);
  }, [movies]);

  const moviesRender = useMemo(() => {
    const countRender = size.width < 670 ? SHOW_MOBILE : size.width < 1279 ? SHOW_TABLET : SHOW_DECKTOP;
    return movies.slice(0, countRender + addMovies);
  }, [movies, addMovies, size]);

  return (
    <section className="movie-items">
      <div className="movie-items__container">
        {moviesRender.map((movie) =>  (
          <MoviesCard 
            key={movie.id || movie.movieId}
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
            setAddMovies((prev) => prev + (size.width >= 1280 ? SHOW_MORE_DECKTOP : SHOW_MORE_MOBILE));
          }}>
        Ещё
        </button>
        )
      }
    </section>   
  )
}

export default MoviesCardList;