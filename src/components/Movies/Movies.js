import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreFilms from '../MoreFilms/MoreFilms';
import Footer from '../Footer/Footer';



function Movies () {
  return (
    <section>
      <SearchForm />
      <MoviesCardList/>
      <MoreFilms/>
      <Footer />
    </section>
  )
}


export default Movies;