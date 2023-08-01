import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';

function Movies ({movies, onSearchMovie, onSaveMovie, onDeleteMovie}) {
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

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000);//чтоб прелоадер чуть покрутилсмя
  })

  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}/>
      {isLoading ?
        (<Preolader />) :
        // (filteredMovies.length ? (
           <MoviesCardList
            movies={filteredMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            />
        //     )
        //   : (<span className="movies__error">
        //       По вашему запросу ничего не найдено
        //     </span>) 
        //       ///а) Если идет загрузка - Прелоадре б) Если нет : 1)Если есть фильтред мувиес то отображается Карточка  2) Если нет вместо прелоадера отображается текс ошибки
        // )
      }
      <button type="button" className="movies__button">Ещё</button>
    </main>
  )
}


export default Movies;