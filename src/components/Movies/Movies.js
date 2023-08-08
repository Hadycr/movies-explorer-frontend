import {useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preolader from '../Preolader/Preloader';
import useWindowSize from '../../config/WindowSize';

function Movies ({movies, onSearchMovie, onSaveMovie, onDeleteMovie}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [isChecked, setChecked] = useState(false); 
  const savedMovies = localStorage.getItem('savedMovies'); //получяаем данные с хранилища
  const [isNotFound, setIsNotFound] = useState(false);
  const size = useWindowSize();

  function handleSearchMovie(searchValue) { 
    const filtered = movies.filter(movie => {
      return movie.nameRU.toLowerCase().trim().includes(searchValue.toLowerCase())
    })
      if (!filtered.length) {  //если не нашли фильмы то 
        setIsLoading(true);      //ставим прелоадер
        setIsNotFound(!isNotFound);  // статус ничего не найдено
      } else {
        setFilteredMovies(filtered);  //записываем в сатйт фильмт филмы
        localStorage.setItem("movieFiltered", filtered); //записываем эти самы фильмы
        // setFilteredMovies(movies.filter(movie => {
        //   return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        // }
        // )
        // )

      }
    }

    function handleChangeFilter() {
      setChecked(!isChecked);
      const filteredShort = filteredMovies.filter(filteredMovie => {
        return filteredMovie.duration <= 40
      })
      setFilteredShortMovies(filteredShort);
      setFilteredMovies(filteredShort);
      localStorage.setItem("shortMovieFiltered", !isChecked);
      // setChecked(checked);
      // console.log(filteredMovie.duration);

    }


    // function handleAddCard(card) {
    //   setAddCard(card)

    // }
  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 8000);//чтоб прелоадер чуть покрутилсмя
  // })

  useEffect(() => {
    if (localStorage.getItem("movieFiltered")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <main className="movies">
      <SearchForm 
        onSearchMovie={handleSearchMovie}
        onChangeFilter={handleChangeFilter}
        isChecked={isChecked}
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
        onDeleteMovie={onDeleteMovie}
        // setAddCard={setAddCard}
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