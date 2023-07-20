import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {moviesList} from '../../utils/moviesList';

function MoviesCardList() {
  return (
    <div className="movies__items">
      {moviesList.map((movie) =>  (
        <MoviesCard 
          key={movie._id}
          movie={movie}
        />
      ))}       
    </div>   
  )
}

export default MoviesCardList;