import { useSelector } from 'react-redux';
import { Button } from '@mantine/core';
import { TStore } from '../../../types';
import { styles } from './styles';

function SearchButton() {
  const { loadingData } = useSelector((state: TStore) => state.jobs);
  return (
    <Button
      loading={loadingData === 'loading'}
      loaderPosition="center"
      radius={8}
      type="submit"
      data-elem="search-button"
      styles={styles}
    >
      {loadingData === 'start' && 'Поиск'}
    </Button>
  );
}

export default SearchButton;
