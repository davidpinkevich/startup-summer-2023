import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subSearch, subCategory } from '../../redux/slices/sliceJobs';
import { changeSearch } from '../../redux/slices/SliceFilters';
import { TStore } from '../../types';
import glass from '../../assets/icons/glass.svg';
import './Search.scss';

function Search() {
  const { searchValue, category } = useSelector((state: TStore) => state.filters);
  const dispatch = useDispatch();

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeSearch(event.target.value));
  }
  function submitFilters(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(subSearch(searchValue));
    dispatch(subCategory(category));
  }
  return (
    <div>
      <form className="jobs__search" onSubmit={submitFilters}>
        <div className="jobs__search-img">
          <img src={glass} alt="glass" />
        </div>
        <input
          className="jobs__search-input"
          type="text"
          placeholder="Введите название вакансии"
          value={searchValue}
          onChange={changeInput}
        />
        <button className="jobs__search-button" type="submit">
          Поиск
        </button>
      </form>
    </div>
  );
}

export default Search;
