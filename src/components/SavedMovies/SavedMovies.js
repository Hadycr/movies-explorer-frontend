import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies ({savedMovies, onDeleteMovie}) {
  const [filteredSaveMovies, setFilteredMovies] = useState([]);
  const [isCheckedShort, setisCheckedShort] = useState(false); 

  const movieSaveFiltered = localStorage.getItem("MovieSaveFiltered");

  useEffect(() => {
      setFilteredMovies(savedMovies);
  }, [savedMovies]);

  function handleSearchMovie(searchValueTe) { 
    let filtered = savedMovies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
    })

    if(isCheckedShort) {
      const saveFiltered = filtered.filter(movie => {
        return savedMovies.duration <= 40 && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
      })
      setFilteredMovies(saveFiltered);
      localStorage.setItem("MovieSaveFiltered", JSON.stringify(filtered));
    } else if (!isCheckedShort) {
      filtered = savedMovies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
      })
      setFilteredMovies(filtered);
      localStorage.setItem("MovieSaveFiltered", JSON.stringify(filtered));
    }
  }

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
    if(!isCheckedShort) {
      const filteredShort = filteredSaveMovies.filter(filteredMovie => {
        return filteredMovie.duration <= 40
      })
      setFilteredMovies(filteredShort);
      localStorage.setItem("shortMovieFiltered", !isCheckedShort);
      localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
    }
    else {
      setFilteredMovies(JSON.parse(movieSaveFiltered));
      console.log(setFilteredMovies(JSON.parse(movieSaveFiltered)));
    }
  }
   
  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isCheckedShort={isCheckedShort}
        />    
 
      {filteredSaveMovies.length ?
        (<MoviesCardList
        movies= {filteredSaveMovies}
        savedMovies = {savedMovies}
        onDeleteMovie={onDeleteMovie}
      />)
      : 
      
      (<span className="movies__error">
        Ничего не найдено
      </span>)}
    </main>
  )
}

export default SavedMovies;