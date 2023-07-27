import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {moviesList} from '../../utils/moviesList';

function MoviesCardList() {
  return (
    <section className="movie-items">
      {moviesList.map((movie) =>  (
        <MoviesCard 
          key={movie._id}
          movie={movie}
        />
      ))}       
    </section>   
  )
}

export default MoviesCardList;