import {useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preolader from '../Preolader/Preloader';

function SavedMovies ({savedMovies, onSearchMovie, onDeleteMovie}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  // const savedMoviesList = localStorage.getItem('savedMovies'); //получяаем данные с хранилища? надо чтоб эти сохраненые фильмы шли с аппи
  const saveMovieFiltered = localStorage.getItem('saveMovieFiltered');
  const queries = localStorage.getItem('searchQuerySavedMovies');

  const [isNotFound, setIsNotFound] = useState(false);
  const [isCheckedShort, setisCheckedShort] = useState(false); 

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
    localStorage.setItem("saveMovieFiltered", filtered); //записываем эти самы фильмы
    // setFilteredMovies(movies.filter(movie => {
    //   return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    // }
    // )
    // )

  }


}


function handleChangeFilter() {
  setisCheckedShort(!isCheckedShort);
  const filteredShort = filteredMovies.filter(filteredMovie => {
    return filteredMovie.duration <= 40
  })
  setFilteredShortMovies(filteredShort);
  setFilteredMovies(filteredShort);
  localStorage.setItem("shortMovieFiltered", !isCheckedShort);
  localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
  // console.log(filteredShort);
  // setChecked(checked);
  // console.log(filteredMovie.duration);

}

// }
  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isCheckedShort={isCheckedShort}
        />    
      {isLoading && <Preolader />}
      {isLoading && isNotFound && 
        (<span className="movies__error">
          Ничего не найдено
        </span>)}
      {!isLoading && !isNotFound &&
        <MoviesCardList
        movies= {filteredMovies}
        // onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
      }
    </main>
  )
}

export default SavedMovies;