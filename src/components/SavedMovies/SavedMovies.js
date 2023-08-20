import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preolader from '../Preolader/Preloader';

function SavedMovies ({savedMovies, onDeleteMovie}) {
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [filteredSaveMovies, setFilteredMovies] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isCheckedShort, setisCheckedShort] = useState(false); 
  const movieSaveFiltered = localStorage.getItem("MovieSaveFiltered");

 const [searchValueText, setSearchValueText] = useState("");
 const searchValue = localStorage.getItem("searchValue");

  useEffect(() => {
    if (movieSaveFiltered === true) {
      setFilteredMovies(JSON.parse(movieSaveFiltered));
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [movieSaveFiltered, savedMovies, setSearchValueText]);


  useEffect(() => {
    if (searchValue) {
      setSearchValueText(JSON.parse(searchValue));
    } else {
      setSearchValueText({ ...searchValue, searchText: '' });
    }
  }, [searchValue, savedMovies]);

  // useEffect(() => {
  //   if (searchValue) {
  //     console.log(searchValue);
  //     setSearchValueText(searchValue);
  //   }
  // }, [searchValue]);

  

  function handleSearchMovie(searchValueTe) { 

    localStorage.setItem('searchValueSaveMovies', JSON.stringify(searchValue));//сохраняем валью
    let filtered = [];
    // const filtered = movies.filter(movie => {
    //   return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
    // })

    if(isCheckedShort) {
      filtered = savedMovies.filter(movie => {
        return savedMovies.duration <= 40 && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
      })
      setFilteredMovies(filtered);
      localStorage.setItem("MovieSaveFiltered", JSON.stringify(filtered));
    } else if (!isCheckedShort) {
      filtered = savedMovies.filter(movie => {
       return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
      })
        setFilteredMovies(filtered);  //если нашли то в стейт добавляем отфильтрованные фильмы
        localStorage.setItem("MovieSaveFiltered", JSON.stringify(filtered)); //сохраняем все отфильтрованные фильмы в локал
      // }
    }


}

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
      const filteredShort = filteredSaveMovies.filter(filteredMovie => {
        return filteredMovie.duration <= 40
      })
      setFilteredShortMovies(filteredShort);
      setFilteredMovies(filteredShort);
      localStorage.setItem("shortMovieFiltered", !isCheckedShort);
      localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
  }
      
  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isCheckedShort={isCheckedShort}
        searchValueText={searchValueText}
        />    
 
      {isNotFound && 
        (<span className="movies__error">
          Ничего не найдено
        </span>)}
      {!isNotFound &&
        <MoviesCardList
        movies= {filteredSaveMovies}
        savedMovies = {savedMovies}
        onDeleteMovie={onDeleteMovie}
      />
      }
    </main>
  )
}

export default SavedMovies;