import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';

function Movies ({movies, onSaveMovie, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const movieFiltered = localStorage.getItem("movieFiltered");
  const [isNotFound, setIsNotFound] = useState(false);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [isCheckedShort, setisCheckedShort] = useState(false); 
  const shortMovieFiltered = localStorage.getItem("shortMovieFiltered");
  const filteredShortMoviesList = localStorage.getItem("filteredShortMovies");
  
  const [searchValueText, setSearchValueText] = useState("");
  const searchValue = localStorage.getItem("searchValueTe");



  useEffect(() => {  // если есть в локл истори поиска, 
    if (movieFiltered) {
      setFilteredMovies(JSON.parse(movieFiltered));
    }
  }, [movieFiltered]);


  // useEffect(() => {
  //   if (movieFiltered) {
  //     if (filteredMovies.length === 0) {
  //       setIsNotFound(false);
  //       setIsLoading(true);
  //     } else {
  //       setIsNotFound(true);
  //     }
  //   } else {
  //     setIsNotFound(false);
  //   }
  // }, [movieFiltered]);

  // useEffect(() => {
  //   if (shortMovieFiltered === true) {
  //     setisCheckedShort(true);
  //     setFilteredMovies(JSON.parse(filteredShortMoviesList));

  //   } else {
  //     setisCheckedShort(false);
      
  //   }
  // }, [shortMovieFiltered, filteredShortMoviesList]);

  useEffect(() => {
    if (searchValue) {
      console.log(searchValue);
      setSearchValueText(searchValue);
    }
  }, [searchValue]);

//   useEffect(() => {
//     if (isCheckedShort === true) {     
//       setFilteredMovies(JSON.parse(filteredShortMoviesList));
// } 
//   }, [filteredShortMoviesList, isCheckedShort]);

  function handleSearchMovie(searchValueTe) { 
    if (!filteredMovies.length) {
      setIsLoading(true);
      console.log(isLoading);
    }

    setTimeout(
      () => {
    console.log(searchValueTe);
    localStorage.setItem('searchValue', JSON.stringify(searchValueTe));//сохраняем валью
    let filtered = [];
    // const filtered = movies.filter(movie => {
    //   return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
    // })

    if(isCheckedShort) {
      filtered = movies.filter(movie => {
        return movies.duration <= 40 && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
      })
      setFilteredMovies(filtered);
      localStorage.setItem("shortMovieFiltered", !isCheckedShort);
      localStorage.setItem("filteredShortMovies", JSON.stringify(filtered));
    } else if (!isCheckedShort) {
      filtered = movies.filter(movie => {
       return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
      })
        setFilteredMovies(filtered);  //если нашли то в стейт добавляем отфильтрованные фильмы
        localStorage.setItem("movieFiltered", JSON.stringify(filtered)); //сохраняем все отфильтрованные фильмы в локал
      // }
    }

      setIsLoading(false);

  }, 500);
}

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
    // if(!isCheckedShort) {
      console.log(isCheckedShort);
      const filteredShort = filteredMovies.filter(filteredMovie => {
        return filteredMovie.duration <= 40
      })
      setFilteredShortMovies(filteredShort);
      setFilteredMovies(filteredShort);
      localStorage.setItem("shortMovieFiltered", !isCheckedShort);
      localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
    // } 
    //  else {
    // setFilteredMovies(JSON.parse(movieFiltered));
    // }
  }

  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isCheckedShort={isCheckedShort}
        searchValueText={searchValueText}
        />    
      {isLoading ? (<Preolader />)
        :  filteredMovies.length ? (<MoviesCardList
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