import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies () {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList/>
      <button type="button" className="movies__button">Ещё</button>
    </section>
  )
}


export default Movies;