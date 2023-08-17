import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';

function Movies ({movies, onSaveMovie, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const movieFiltered = localStorage.getItem("movieFiltered");
  const [isNotFound, setIsNotFound] = useState(false);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [isCheckedShort, setisCheckedShort] = useState(false); 
  const shortMovieFiltered = localStorage.getItem("shortMovieFiltered");
  const filteredShortMoviesList = localStorage.getItem("filteredShortMovies");

  useEffect(() => {
    if (movieFiltered) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
        setFilteredMovies(JSON.parse(movieFiltered))
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [movieFiltered, filteredMovies]);

  useEffect(() => {
    if (shortMovieFiltered === true) {
      setisCheckedShort(true);
    } else {
      setisCheckedShort(false);
    }
  }, [shortMovieFiltered]);

  useEffect(() => {
    if (isCheckedShort === true) {     
      setFilteredMovies(JSON.parse(filteredShortMoviesList));
} 
  }, [filteredShortMoviesList, isCheckedShort]);

  function handleSearchMovie(searchValue) { 
    const filtered = movies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValue.toLowerCase())
    })
      if (!filtered.length) {
        setIsLoading(true);
        setIsNotFound(!isNotFound);
      } else {
        setFilteredMovies(filtered);
        localStorage.setItem("movieFiltered", JSON.stringify(filtered));
      }
    }

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
    if(!isCheckedShort) {
      console.log(isCheckedShort);
      const filteredShort = filteredMovies.filter(filteredMovie => {
        return filteredMovie.duration <= 40
      })
      setFilteredShortMovies(filteredShort);
      setFilteredMovies(filteredShort);
      localStorage.setItem("shortMovieFiltered", !isCheckedShort);
      localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
    } 
     else {
    setFilteredMovies(JSON.parse(movieFiltered));
    }
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
        movies= {filteredMovies}
        onSaveMovie={onSaveMovie}
        savedMovies={savedMovies} 
        />
      }
    </main>
  )
}


export default Movies;