import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SHORTS } from "../../config/config";
import './SavedMovies.css';

function SavedMovies ({savedMovies, onDeleteMovie}) {

  const [filteredSaveMovies, setFilteredMovies] = useState([]);
  const [isCheckedShort, setisCheckedShort] = useState(false); 

  const movieSaveFiltered = localStorage.getItem("MovieSaveFiltered");
  const shortMovieSaveFiltered = localStorage.getItem("shortMovieSaveFiltered");
  const searchValueSave = localStorage.getItem("searchValueSave");

  // useEffect(() => {
  //     setFilteredMovies(savedMovies);
  // }, [savedMovies]);

  useEffect(() => {
    if (movieSaveFiltered) {
      setFilteredMovies(JSON.parse(movieSaveFiltered));
      console.log(setFilteredMovies(JSON.parse(movieSaveFiltered)));
    } 
    else {
      setFilteredMovies(savedMovies);
      console.log(setFilteredMovies(savedMovies));
    }
  }, [movieSaveFiltered, savedMovies, searchValueSave]);

  function handleFilteredMovies (savedMovies, searchValueTe, isCheckedShort) {
    const filtered = savedMovies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
    }) 
      if(isCheckedShort) {                                            
        const shortfiltered = filtered.filter(movie => {
          return movie.duration <= SHORTS && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
        })
        setFilteredMovies(shortfiltered);                                  
        localStorage.setItem("shortMovieSaveFiltered", !isCheckedShort);  
        localStorage.setItem("MovieSaveShortFiltered", JSON.stringify(shortfiltered));    
      } else if (!isCheckedShort) {                                       
        setFilteredMovies(filtered);                                     
      }
      localStorage.setItem("MovieSaveFiltered", JSON.stringify(filtered));
  };

  function handleSearchMovie(searchValueTe) {                              
    localStorage.setItem('searchValueSave', searchValueTe);
    handleFilteredMovies(savedMovies, searchValueTe, isCheckedShort)
   
    };

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
    if(!isCheckedShort) {
      const filteredShort = savedMovies.filter(filteredMovie => {
        return filteredMovie.duration <= SHORTS
      })
      setFilteredMovies(filteredShort);
      localStorage.setItem("MovieSaveShortFiltered", JSON.stringify(filteredShort)); 
    } 
    else if (isCheckedShort) {   
      console.log(JSON.parse(movieSaveFiltered));
    setFilteredMovies(JSON.parse(movieSaveFiltered));
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
 
      {filteredSaveMovies.length ?
        (<MoviesCardList
        movies= {filteredSaveMovies}
        savedMovies = {savedMovies}
        onDeleteMovie={onDeleteMovie}
      />)
      : ( movieSaveFiltered &&
      (<span className="movies__error">
        Ничего не найдено
      </span>))
      }
    </main>
  )
}

export default SavedMovies;