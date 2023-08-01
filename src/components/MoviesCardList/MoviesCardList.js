import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import {moviesList} from '../../utils/moviesList';

function MoviesCardList({movies, onSaveMovie, onDeleteMovie}) {
  return (
    <section className="movie-items">
      {movies.map((movie) =>  (
        <MoviesCard 
          key={movie.id}
          movie={movie}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}       
    </section>   
  )
}

export default MoviesCardList;