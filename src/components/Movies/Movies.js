import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';
import { SHORTS } from "../../config/config";
import * as moviesApi from '../../utils/MoviesApi';

function Movies ({ onSaveMovie, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const [movies, setMovies] = useState([]);
  const [isCheckedShort, setisCheckedShort] = useState(false); 

  const movieFiltered = localStorage.getItem("movieFiltered");
  const shortMovieFiltered = localStorage.getItem("shortMovieFiltered");
  const filteredShortMoviesList = localStorage.getItem("filteredShortMovies");
  const searchValue = localStorage.getItem("searchValueTe");

  useEffect(() => {
    if (shortMovieFiltered === 'true') {
      setisCheckedShort(true);
    } else {
      setisCheckedShort(false);
    }
  }, [shortMovieFiltered]);

  useEffect(() => {
    if (movieFiltered) {
      setFilteredMovies(JSON.parse(movieFiltered));
      if (shortMovieFiltered === 'true') {
        setFilteredMovies(JSON.parse(filteredShortMoviesList));
      } else {
        setFilteredMovies(JSON.parse(movieFiltered));
      }
    } 
  }, [movieFiltered, filteredShortMoviesList]);


  function handleFilteredMovies (movies, searchValueTe, isCheckedShort) {
    const filtered = movies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
    }) 
   
      if(isCheckedShort) {                                           
        const shortfiltered = filtered.filter(movie => {
          return movie.duration <= SHORTS && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
        }) 
        setFilteredMovies(shortfiltered);                                 
        localStorage.setItem("shortMovieFiltered", !isCheckedShort);       
        localStorage.setItem("filteredShortMovies", JSON.stringify(shortfiltered));  
      } else if (!isCheckedShort) {                                      
        setFilteredMovies(filtered);                                      
      }
      localStorage.setItem("movieFiltered", JSON.stringify(filtered));
  };

  function handleSearchMovie(searchValueTe) {                              
    localStorage.setItem('searchValue', searchValueTe);

    if (localStorage.getItem('movies'))  {
      const moviesAll = JSON.parse(localStorage.getItem('movies'));        
      handleFilteredMovies(moviesAll, searchValueTe, isCheckedShort)
    } else {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies);                                               
          localStorage.setItem('movies', JSON.stringify(movies));          
          handleFilteredMovies(movies, searchValueTe, isCheckedShort)
        })
        .catch((err) => console.log("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"))
        .finally(() => {
          setIsLoading(false);
        });
    };
  };

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
    if(!isCheckedShort) {
      const filteredShort = filteredMovies.filter(filteredMovie => {
        return filteredMovie.duration <= SHORTS
      })
      setFilteredMovies(filteredShort);
      
      localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
    } 
    else if (isCheckedShort) {   
      console.log(JSON.parse(movieFiltered));
    setFilteredMovies(JSON.parse(movieFiltered));
    }
    localStorage.setItem("shortMovieFiltered", !isCheckedShort);
  };

  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isCheckedShort={isCheckedShort}
      />    
      {isLoading ? (<Preolader />)
        :  filteredMovies.length ? 
        (<MoviesCardList
          movies= {filteredMovies}
          onSaveMovie={onSaveMovie}
          savedMovies={savedMovies} 
        />)   
      : ( movieFiltered &&
        (<span className="movies__error">
          Ничего не найдено
        </span>))
      }
    </main>
  )
}


export default Movies;