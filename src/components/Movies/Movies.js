import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreFilms from '../MoreFilms/MoreFilms';
import Footer from '../Footer/Footer';


function Movies () {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList/>
      <MoreFilms/>
      <Footer />
    </>
  )
}


export default Movies;