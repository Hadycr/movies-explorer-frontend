import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({onSearchMovie, onChangeFilter, isChecked}) {
  // function SearchForm({onSearchMovie, onChangeFilter, isChecked}) {
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setsearchError] = useState('');

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

  
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input" name="movie" type="text" placeholder="Фильм" 
            value={searchValue} onChange={handleChange}></input>
          <button className="search__button search__link" type="submit">Найти</button>
        </form>
        <span className="search__error">{!searchValue && searchError}</span>
        <div className="search__films-short-filter">
          <FilterCheckbox 
            onChangeFilter = {onChangeFilter}
            isChecked = {isChecked}
          />
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
  