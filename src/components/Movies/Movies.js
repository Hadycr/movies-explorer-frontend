import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';

function Movies ({movies, onSearchMovie, onSaveMovie, onDeleteMovie}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [checked, setChecked] = useState(false); 
  const savedMovies = localStorage.getItem('savedMovies'); //получяаем данные с хранилища


  function handleSearchMovie(searchValue) { 
    const filtered = movies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    }
    )
      if (!filtered.length) {
        setIsLoading(true);
      } else {
        setFilteredMovies(filtered);
        // setFilteredMovies(movies.filter(movie => {
        //   return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        // }
        // )
        // )

      }
    }

    function handleChangeFilter () {
      const filteredShort = filteredMovies.filter(filteredMovie => {
        console.log(filteredMovie.duration)
        return filteredMovie.duration <= 40
      })
      setFilteredShortMovies(filteredShort);
      setChecked(checked);
      // console.log(filteredMovie.duration);

    }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000);//чтоб прелоадер чуть покрутилсмя
  })

  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isChecked={checked}
        />
      {isLoading ?
        (<Preolader />) :
        (filteredMovies.length ? (
           <MoviesCardList
            movies= {checked ? filteredShortMovies : filteredMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            />
            )
          : (<span className="movies__error">
              По вашему запросу ничего не найдено
            </span>) 
        )
      }
      <button type="button" className="movies__button">Ещё</button>
    </main>
  )
}


export default Movies;