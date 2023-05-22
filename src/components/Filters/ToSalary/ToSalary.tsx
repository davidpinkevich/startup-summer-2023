import { NumberInput } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeTo } from '../../../redux/slices/SliceFilters';
import { TStore } from '../../../types';
import { styles } from './styles';

function ToSalary() {
  const { toSalary } = useSelector((state: TStore) => state.filters);
  const { loadingData } = useSelector((state: TStore) => state.jobs);

  const dispatch = useDispatch();

  function changeInput(value: number | '') {
    dispatch(changeTo(value));
  }

  return (
    <NumberInput
      disabled={loadingData === 'loading'}
      min={0}
      value={toSalary}
      onChange={changeInput}
      radius="8px"
      rightSectionWidth={40}
      type="number"
      placeholder="До"
      data-elem="salary-to-input"
      styles={styles}
    />
  );
}

export default ToSalary;
