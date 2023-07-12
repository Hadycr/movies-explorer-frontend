import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreFilms from '../MoreFilms/MoreFilms';

function Movies () {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList/>
      <MoreFilms/>
    </>
  )
}


export default Movies;