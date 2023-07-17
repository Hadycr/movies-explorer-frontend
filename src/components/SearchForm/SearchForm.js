import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input className="search__input" name="movie" type="text" placeholder="Фильм"></input>
          <button className="search__button search__link" type="submit">Найти</button>
          
        </form>
        <div className="search__films-short-filter">
            <FilterCheckbox />
            <p className="search__text">Короткометражки</p>
        </div>
      </div>
    </section>
  )
}

  export default SearchForm;
  