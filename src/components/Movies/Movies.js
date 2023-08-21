import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';

function Movies ({movies, onSaveMovie, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [isCheckedShort, setisCheckedShort] = useState(false); 
  const [searchValueText, setSearchValueText] = useState("");

  const movieFiltered = localStorage.getItem("movieFiltered");
  const shortMovieFiltered = localStorage.getItem("shortMovieFiltered");
  const filteredShortMoviesList = localStorage.getItem("filteredShortMovies");
  const searchValue = localStorage.getItem("searchValueTe");


  useEffect(() => { 
    if (movieFiltered) {
      setFilteredMovies(JSON.parse(movieFiltered));
    }
  }, [movieFiltered]);

  useEffect(() => {
    if (searchValue) {
      setSearchValueText(JSON.parse(searchValue));
    }
  }, [searchValue]);

  useEffect(() => {
    if (shortMovieFiltered) {
      setFilteredShortMovies(shortMovieFiltered);
      setFilteredShortMovies(JSON.parse(filteredShortMoviesList))
    } 
  }, [shortMovieFiltered, filteredShortMoviesList]);

  function handleSearchMovie(searchValueTe) { 
    if (!filteredMovies.length) {
      setIsLoading(true);
      console.log(isLoading);
    }

    setTimeout(
      () => {
      localStorage.setItem('searchValue', searchValueTe);
      
      const filtered = movies.filter(movie => {
        return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
      }) 
      localStorage.setItem("movieFiltered", JSON.stringify(filtered));
        if(isCheckedShort) {
          const shortfiltered = filtered.filter(movie => {
            return movies.duration <= 40 && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
          })
          setFilteredMovies(shortfiltered);
          localStorage.setItem("shortMovieFiltered", !isCheckedShort);
          localStorage.setItem("filteredShortMovies", JSON.stringify(shortfiltered));
        } else if (!isCheckedShort) {
          setFilteredMovies(filtered);
          localStorage.setItem("movieFiltered", JSON.stringify(filtered));
        }

        setIsLoading(false);
    }, 500);
  }

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
    if(!isCheckedShort) {
      const filteredShort = filteredMovies.filter(filteredMovie => {
        return filteredMovie.duration <= 40
      })
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
      {isLoading ? (<Preolader />)
        :  filteredMovies.length ? 
        (<MoviesCardList
          movies= {filteredMovies}
          onSaveMovie={onSaveMovie}
          savedMovies={savedMovies} 
        />)   
      : (filteredMovies.length === 0 &&
        (<span className="movies__error">
          Ничего не найдено
        </span>))
      }
    </main>
  )
}


export default Movies;