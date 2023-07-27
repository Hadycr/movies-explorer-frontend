import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies () {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList/>
      <button type="button" className="movies__button">Ещё</button>
    </main>
  )
}


export default Movies;