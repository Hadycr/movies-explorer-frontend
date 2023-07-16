import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies () {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList/>
      <Footer />
    {/* // <Preloader/>

    // <MoviesCard/> */}
    </>
  )
}


export default SavedMovies;