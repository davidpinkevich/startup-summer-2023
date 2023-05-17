import { Select } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeСategory } from '../../../redux/slices/SliceFilters';
import { TStore } from '../../../types';
import arrow from '../../../assets/icons/arrow-down.svg';
import { styles } from './styles';

function SelectFilter() {
  const { catalogues, loadingData } = useSelector((state: TStore) => state.jobs);
  const { category } = useSelector((state: TStore) => state.filters);
  const dispatch = useDispatch();

  function selectChange(text: string | null) {
    dispatch(changeСategory(text));
  }

  const data = catalogues.map((item) => ({ value: String(item.key), label: item.title }));

  return (
    <Select
      value={category}
      onChange={selectChange}
      disabled={loadingData === 'loading'}
      label="Отрасль"
      radius="8px"
      placeholder="Выберитe отрасль"
      rightSection={<img src={arrow} />}
      data-elem="industry-select"
      data={data}
      styles={{ ...styles, rightSection: { pointerEvents: 'none' } }}
    />
  );
}

export default SelectFilter;
