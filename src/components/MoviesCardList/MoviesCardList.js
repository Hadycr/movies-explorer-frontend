import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import {moviesList} from '../../utils/moviesList';

function MoviesCardList({movies}) {
  return (
    <section className="movie-items">
      {console.log(movies.map((movie) =>  (
        <MoviesCard 
          key={movie.id}
          movie={movie}
        />)))}
      {movies.map((movie) =>  (
        <MoviesCard 
          key={movie.id}
          movie={movie}
        />
      ))}       
    </section>   
  )
}

export default MoviesCardList;