import { NumberInput } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeFrom } from '../../../redux/slices/SliceFilters';
import { TStore } from '../../../types';
import { styles } from './styles';

function FromSalary() {
  const { fromSalary } = useSelector((state: TStore) => state.filters);
  const { loadingData } = useSelector((state: TStore) => state.jobs);

  const dispatch = useDispatch();

  function changeInput(value: number | '') {
    dispatch(changeFrom(value));
  }

  return (
    <NumberInput
      disabled={loadingData === 'loading'}
      min={0}
      value={fromSalary}
      onChange={changeInput}
      radius="8px"
      rightSectionWidth={40}
      type="number"
      placeholder="От"
      description="Оклад"
      styles={styles}
    />
  );
}

export default FromSalary;
