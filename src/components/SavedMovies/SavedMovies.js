import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies () {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList/>
    {/* // <Preloader/>

    // <MoviesCard/> */}
    </>
  )
}


export default SavedMovies;