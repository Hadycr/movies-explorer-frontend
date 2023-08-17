import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preolader from '../Preolader/Preloader';

function SavedMovies ({savedMovies, onDeleteMovie}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [filteredSaveMovies, setFilteredMovies] = useState(savedMovies);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isCheckedShort, setisCheckedShort] = useState(false); 
  const shortMovieFiltered = localStorage.getItem("shortMovieFiltered");

  useEffect(() => {
    if (shortMovieFiltered === true) {
      setisCheckedShort(true);
    } else {
      setisCheckedShort(false);
    }
  }, [shortMovieFiltered]);

  function handleSearchMovie(searchValue) { 
    const filtered = savedMovies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValue.toLowerCase())
    })
      if (!filtered.length) {
        setIsLoading(true);
        setIsNotFound(!isNotFound);
      } else {
        console.log(filtered);
        setFilteredMovies(filtered);
        localStorage.setItem("movieSaveFiltered", JSON.stringify(filtered));
      }
    }

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
      const filteredShort = filteredSaveMovies.filter(filteredMovie => {
        return filteredMovie.duration <= 40
      })
      setFilteredShortMovies(filteredShort);
      setFilteredMovies(filteredShort);
      localStorage.setItem("shortMovieFiltered", !isCheckedShort);
      localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
  }
      
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
        movies= {filteredSaveMovies}
        savedMovies = {savedMovies}
        onDeleteMovie={onDeleteMovie}
      />
      }
    </main>
  )
}

export default SavedMovies;