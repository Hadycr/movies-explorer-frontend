import {useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preolader from '../Preolader/Preloader';

function SavedMovies ({movies, onSearchMovie, onSaveMovie, onDeleteMovie}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const savedMovies = localStorage.getItem('savedMovies'); //получяаем данные с хранилища

  
function handleSearchMovie(searchValue) { 
  // if (!filteredMovies.length) {
  //   setIsLoading(true);
  // } else {

    setFilteredMovies(movies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    }
    )
    )

  }
// }
  return (
    <main className="saved-movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}/>
      {isLoading ?
        (<Preolader />) :
      <MoviesCardList
      movies={filteredMovies}
      onSaveMovie={onSaveMovie}
      onDeleteMovie={onDeleteMovie}
      />
      }
    </main>
  )
}

export default SavedMovies;