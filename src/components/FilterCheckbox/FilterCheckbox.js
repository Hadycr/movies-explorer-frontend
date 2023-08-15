import './FilterCheckbox.css';

function FilterCheckbox({onChangeFilter, isCheckedShort }) {

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input type="checkbox" className="filter-checkbox__input" 
          onChange={onChangeFilter} checked={isCheckedShort}/>
        <span className="filter-checkbox__slider filter-checkbox__slider_round"></span>
        <p className="filter-checkbox__text">Короткометражки</p>
      </label>
    </div>
  );
}

export default FilterCheckbox;