import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';

function Movies ({movies, onSearchMovie}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);


function handleSearchMovie(searchValue) { 
    // if (!filteredMovies.length) {
    //   setIsLoading(true);
    // } else {
      setFilteredMovies(movies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      }))

    // }
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000);//чтоб прелоадер чуть покрутилсмя
  })

  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}/>
      {isLoading ?
        <Preolader /> :
        <MoviesCardList
          movies={filteredMovies}
          />
          
      }
      <button type="button" className="movies__button">Ещё</button>
    </main>
  )
}


export default Movies;