import {useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preolader from '../Preolader/Preloader';

function SavedMovies ({movies, onSearchMovie, onSaveMovie, onDeleteMovie}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const savedMovies = localStorage.getItem('savedMovies'); //получяаем данные с хранилища
  const [isNotFound, setIsNotFound] = useState(false);
  
function handleSearchMovie(searchValue) { 
  const filtered = savedMovies.filter(savemovie => {
    return savemovie.nameRU.toLowerCase().trim().includes(searchValue.toLowerCase())
  })
  if (!filtered.length) {  //если не нашли фильмы то 
    setIsLoading(true);      //ставим прелоадер
    setIsNotFound(!isNotFound);  // статус ничего не найдено
  } else {
    setFilteredMovies(filtered);  //записываем в сатйт фильмт филмы
    console.log(filtered);
    localStorage.setItem("movieSaveFiltered", filtered); //записываем эти самы фильмы
    // setFilteredMovies(movies.filter(movie => {
    //   return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    // }
    // )
    // )

  }
}
// }
  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        // onChangeFilter={handleChangeFilter}
        // isChecked={isChecked}
        />    
      {isLoading && <Preolader />}
      {isLoading && isNotFound && 
        (<span className="movies__error">
          Ничего не найдено
        </span>)}
      {!isLoading && !isNotFound &&
        <MoviesCardList
        movies= {filteredMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
      }
    </main>
  )
}

export default SavedMovies;