import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({onSearchMovie, onChangeFilter, isCheckedShort}) {
  // function SearchForm({onSearchMovie, onChangeFilter, isChecked}) {
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setsearchError] = useState('');
  const searchValueMovie = localStorage.getItem("searchValueMovie");
  const uselocation  = useLocation();
  const pathName = uselocation.pathname;

    useEffect(() => {
    if (searchValueMovie) {
      setSearchValue(searchValueMovie)
    } 
  }, [searchValueMovie]);

  // useEffect(() => {
  //   if (uselocation.pathname === '/movies' && searchValueMovie) {
  //     setSearchValue(searchValueMovie);
  //   }
  // }, [searchValueMovie]);

  function handleChange(evt) {
    setSearchValue(evt.target.value.replace(/^\s+/,''));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!searchValue) {
      setsearchError("Нужно ввести ключевое слово");
    } else {
      onSearchMovie(searchValue);
      localStorage.setItem("searchValueMovie", searchValue);
    
    
  }

  }
  useEffect(() => {
    if (pathName === "/movies") {
      setSearchValue(localStorage.getItem("searchValueMovie"));
    } else {
      setSearchValue("");
    }
  }, [pathName]);

  
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input" name="movie" type="text" placeholder="Фильм" 
            value={searchValue || ""} onChange={handleChange}></input>
          <button className="search__button search__link" type="submit">Найти</button>
        </form>
        <span className="search__error">{!searchValue && searchError}</span>
        <div className="search__films-short-filter">
          <FilterCheckbox 
            onChangeFilter = {onChangeFilter}
            isCheckedShort = {isCheckedShort}
          />
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
  