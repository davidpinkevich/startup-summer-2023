import React from 'react';
import { TextInput } from '@mantine/core';
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
import SearchButton from './SearchButton/SearchButton';
import { styles } from './styles';

function Search() {
  const { searchValue, category, fromSalary, toSalary } = useSelector(
    (state: TStore) => state.filters
  );

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
    <>
      <form style={{ width: '100%' }} className="jobs__search" onSubmit={submitFilters}>
        <TextInput
          value={searchValue}
          onChange={changeInput}
          radius={8}
          icon={<img src={glass} alt="glass" />}
          rightSection={<SearchButton />}
          styles={styles}
          data-elem="search-input"
          placeholder={window.innerWidth > 500 ? 'Введите название вакансии' : 'Введите вакансию'}
        />
      </form>
    </>
  );
}

export default Search;
