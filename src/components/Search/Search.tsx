import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  subSearch,
  subCategory,
  subSalaryFrom,
  subSalaryTo,
  clearCurrentMainPages,
} from '../../redux/slices/sliceJobs';
import { changeSearch } from '../../redux/slices/SliceFilters';
import { TStore } from '../../types';
import glass from '../../assets/icons/glass.svg';
import './Search.scss';

function Search() {
  const { searchValue, category, fromSalary, toSalary } = useSelector(
    (state: TStore) => state.filters
  );
  const { loadingData } = useSelector((state: TStore) => state.jobs);
  const dispatch = useDispatch();

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeSearch(event.target.value));
  }
  function submitFilters(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(subSearch(searchValue));
    dispatch(subCategory(category));
    dispatch(subSalaryFrom(fromSalary));
    dispatch(subSalaryTo(toSalary));
    dispatch(clearCurrentMainPages(1));
  }
  return (
    <div>
      <form className="jobs__search" onSubmit={submitFilters}>
        <div className="jobs__search-img">
          <img src={glass} alt="glass" />
        </div>
        <input
          disabled={loadingData === 'loading'}
          className="jobs__search-input"
          type="text"
          placeholder="Введите название вакансии"
          value={searchValue}
          onChange={changeInput}
        />
        <button disabled={loadingData === 'loading'} className="jobs__search-button" type="submit">
          Поиск
        </button>
      </form>
    </div>
  );
}

export default Search;
