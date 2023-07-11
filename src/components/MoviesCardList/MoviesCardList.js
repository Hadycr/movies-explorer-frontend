import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, onCardClick, onCardAddClick}) {

  return (
    <div className="movies__items">
          {movies.map((movie) =>  (
            <MoviesCard 
              key={movies._id}
              movie={movie}
              onCardClick={onCardClick}
              onCardAddClick={onCardAddClick}
            />)
          )}
        </div>   


  )
}

export default MoviesCardList;