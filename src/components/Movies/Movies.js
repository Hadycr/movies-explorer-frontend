import {useState, useEffect, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';
// import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Movies ({movies, onSaveMovie, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const movieFiltered = localStorage.getItem("movieFiltered");
  const [isNotFound, setIsNotFound] = useState(false);
  
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [isCheckedShort, setisCheckedShort] = useState(false); 
  // const savedMovies = localStorage.getItem('savedMovies'); //получяаем данные с хранилища

  const shortMovieFiltered = localStorage.getItem("shortMovieFiltered");
  const filteredShortMoviesList = localStorage.getItem("filteredShortMovies");
  // const currentUser = useContext(CurrentUserContext);
  // const isOwn = movies.some((i) => i.owner === currentUser._id); 



  //показывает все фильмы после поиска после перезагрузки 
    useEffect(() => {
  // if(isOwn) {
    if (movieFiltered) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
        setFilteredMovies(JSON.parse(movieFiltered))
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  // }
  }, [movieFiltered, filteredMovies]);

//показыет chebox псоле перезагрузки
  useEffect(() => {
    if (shortMovieFiltered === true) {
      setisCheckedShort(true);
    } else {
      setisCheckedShort(false);
    }
  }, [shortMovieFiltered]);

  //показывает короткие видео после перезагрузки
  useEffect(() => {
    if (isCheckedShort) {
             
      setFilteredMovies(JSON.parse(filteredShortMoviesList));
} 
  }, [filteredShortMoviesList]);

  function handleSearchMovie(searchValue) { 
    const filtered = movies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValue.toLowerCase())
    })
      if (!filtered.length) {  //если не нашли фильмы то 
        setIsLoading(true);      //ставим прелоадер
        setIsNotFound(!isNotFound);  // статус ничего не найдено
      } else {
        setFilteredMovies(filtered);  //записываем в сатйт фильмт филмы
        localStorage.setItem("movieFiltered", JSON.stringify(filtered)); //записываем эти самы фильмы
      }
    }

  // function handleChangeFilter() {
  //   setisCheckedShort(!isCheckedShort);
  //   const filteredShort = filteredMovies.filter(filteredMovie => {
  //     return filteredMovie.duration <= 40
  //   })
  //   setFilteredShortMovies(filteredShort);
  //   setFilteredMovies(filteredShort);
  //   localStorage.setItem("shortMovieFiltered", !isCheckedShort);
  //   localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
  // }

  function handleChangeFilter() {
    setisCheckedShort(!isCheckedShort);
    // if(isCheckedShort) {
    const filteredShort = filteredMovies.filter(filteredMovie => {
      return filteredMovie.duration <= 40
    })
    setFilteredShortMovies(filteredShort);
    setFilteredMovies(filteredShort);
    localStorage.setItem("shortMovieFiltered", !isCheckedShort);
    localStorage.setItem("filteredShortMovies", JSON.stringify(filteredShort));
  } 
  // else {
  //   setFilteredMovies(JSON.parse(movieFiltered));
  // }
  // }


  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isCheckedShort={isCheckedShort}
        />    
      {isLoading && <Preolader />}
      {isLoading && isNotFound && 
        (<span className="movies__error">
          Ничего не найдено
        </span>)}
      {!isLoading && !isNotFound &&
        <MoviesCardList
        movies= {filteredMovies}
        onSaveMovie={onSaveMovie}
        savedMovies={savedMovies} 
        />
      }
      {/* <button type="button" className="movies__button"
      onClick={handleAddCard}>
        Ещё
      </button> */}
    </main>
  )
}


export default Movies;