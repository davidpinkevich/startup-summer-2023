import { Flex, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import Select from './Select/Select';
import FromSalary from './FromSalary/FromSalary';
import ToSalary from './ToSalary/ToSalary';
import SubmitButton from './SubmitButton/SubmitButton';
import HeaderFilters from './HeaderFilters/HeaderFilters';
import {
  subSearch,
  subCategory,
  subSalaryFrom,
  subSalaryTo,
  clearCurrentMainPages,
} from '../../redux/slices/sliceJobs';
import { TStore } from '../../types';
import './Filters.scss';

function Filters() {
  const { searchValue, category, fromSalary, toSalary } = useSelector(
    (state: TStore) => state.filters
  );
  const dispatch = useDispatch();

  function submitFilters(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(subSearch(searchValue));
    dispatch(subCategory(category));
    dispatch(subSalaryFrom(fromSalary));
    dispatch(subSalaryTo(toSalary));
    dispatch(clearCurrentMainPages(1));
  }
  return (
    <section className="jobs__filters">
      <form onSubmit={submitFilters} className="jobs__filters-form">
        <Flex mih="100%" bg="white" gap="32px" justify="center" direction="column" wrap="wrap">
          <HeaderFilters />
          <Stack spacing="20px">
            <Select />
            <Stack spacing="8px">
              <FromSalary />
              <ToSalary />
            </Stack>
            <SubmitButton />
          </Stack>
        </Flex>
      </form>
    </section>
  );
}

export default Filters;
