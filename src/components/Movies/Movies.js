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
    if (shortMovieFiltered === true) {
      setisCheckedShort(true)
    } else {
      setisCheckedShort(false);
    }
  }, [shortMovieFiltered]);

  // useEffect(() => {
  //   if (shortMovieFiltered === true) {
  //     setisCheckedShort(true);
  //   } else {
  //     setisCheckedShort(false);
  //   }
  // }, [location]);

  // useEffect(() => {
  //   if (localStorage.getItem('movies')) {      
  //     setFilteredMovies(JSON.parse(localStorage.getItem('movies')));
  //     if (shortMovieFiltered === "true") {
  //       setFilteredMovies(JSON.parse(filteredShortMoviesList));
  //     } else {
  //       setFilteredMovies(JSON.parse(movieFiltered));
  //     }
  //   }
  // }, [location]);




  // useEffect(() => {
  //   if (shortMovieFiltered === false) {
  //     if (movieFiltered) {
  //       setFilteredMovies(JSON.parse(movieFiltered));
  //     }
  //     setisCheckedShort(false);
  //   } else {
  //     setisCheckedShort(true);
  //     setFilteredShortMovies(filteredShortMoviesList);
  //   }

  // }, [shortMovieFiltered, movieFiltered, filteredShortMoviesList]);

  //   useEffect(() => {
  //   if (movieFiltered && shortMovieFiltered === false) {
  //     setFilteredMovies(JSON.parse(movieFiltered));
  //     // setisCheckedShort(false);
  //   }

  // }, [shortMovieFiltered, movieFiltered, filteredShortMoviesList]);

  // useEffect(() => {
  //   if (filteredShortMoviesList && shortMovieFiltered === true) {
  //     setFilteredMovies(JSON.parse(filteredShortMoviesList));
  //     // setisCheckedShort(false);
  //   }

  // }, [shortMovieFiltered, movieFiltered, filteredShortMoviesList]);
  

  function handleFilteredMovies (movies, searchValueTe, isCheckedShort) {
    const filtered = movies.filter(movie => { //все полученые фильмы фильруются
      return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
    }) 
    localStorage.setItem("movieFiltered", JSON.stringify(filtered)); //сохраняем фильтруемые фильмы
      if(isCheckedShort) {                                                 //если чебокс зеленный то мы фильтруем из фильтруемых фильмов
        const shortfiltered = filtered.filter(movie => {
          return movies.duration <= SHORTS && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
        })
        setFilteredMovies(shortfiltered);                                  //кладем в стейт для мовикардлист
        localStorage.setItem("shortMovieFiltered", isCheckedShort);       // сохранянем состояние чебокс выключен(было !isChekedShort)
        localStorage.setItem("filteredShortMovies", JSON.stringify(shortfiltered));  // сохраняем все данные в шорт фильтр муви
      } else if (!isCheckedShort) {                                       //если чебокс серый
        setFilteredMovies(filtered);                                      //сохраняем только фитруемые фильмы и так же локал отпряем
        localStorage.setItem("movieFiltered", JSON.stringify(filtered));
      }
  };

  function handleSearchMovie(searchValueTe) {                              
    localStorage.setItem('searchValue', searchValueTe);
    if (localStorage.getItem('movies'))  {
      const moviesAll = JSON.parse(localStorage.getItem('movies'));        //
      handleFilteredMovies(moviesAll, searchValueTe, isCheckedShort)

      console.log(isLoading);
    } else {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies);                                               //добавлем их в стейт
          localStorage.setItem('movies', JSON.stringify(movies));          //сохраняем все полученые фильм с айпи в movies  и с ним будем работыть
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
      localStorage.setItem("shortMovieFiltered", !isCheckedShort);
      localStorage.setItem("movieFiltered", JSON.stringify(filteredShort));
    } 
    else {
    setFilteredMovies(JSON.parse(movieFiltered));
    }
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

  //   setTimeout(
  //     () => {
      
  //     const filtered = movies.filter(movie => {
  //       return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
  //     }) 
  //     localStorage.setItem("movieFiltered", JSON.stringify(filtered));
  //       if(isCheckedShort) {
  //         const shortfiltered = filtered.filter(movie => {
  //           return movies.duration <= SHORTS && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
  //         })
  //         setFilteredMovies(shortfiltered);
  //         localStorage.setItem("shortMovieFiltered", !isCheckedShort);
  //         localStorage.setItem("filteredShortMovies", JSON.stringify(shortfiltered));
  //       } else if (!isCheckedShort) {
  //         setFilteredMovies(filtered);
  //         localStorage.setItem("movieFiltered", JSON.stringify(filtered));
  //       }

  //       setIsLoading(false);
  //   }, 500);
  // }

  // function handleSearchMovie(searchValueTe) { 
  //   if (!filteredMovies.length) {
  //     setIsLoading(true);
  //     console.log(isLoading);
  //   }

  //   setTimeout(
  //     () => {
  //     localStorage.setItem('searchValue', searchValueTe);
      
  //     const filtered = movies.filter(movie => {
  //       return movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
  //     }) 
  //     localStorage.setItem("movieFiltered", JSON.stringify(filtered));
  //       if(isCheckedShort) {
  //         const shortfiltered = filtered.filter(movie => {
  //           return movies.duration <= SHORTS && movie.nameRU.toLowerCase().trim().includes(searchValueTe.toLowerCase())
  //         })
  //         setFilteredMovies(shortfiltered);
  //         localStorage.setItem("shortMovieFiltered", !isCheckedShort);
  //         localStorage.setItem("filteredShortMovies", JSON.stringify(shortfiltered));
  //       } else if (!isCheckedShort) {
  //         setFilteredMovies(filtered);
  //         localStorage.setItem("movieFiltered", JSON.stringify(filtered));
  //       }

  //       setIsLoading(false);
  //   }, 500);
  // }