import { useSelector } from 'react-redux';
import { Button } from '@mantine/core';
import { TStore } from '../../../types';
import { styles } from './styles';

function SubmitButton() {
  const { loadingData } = useSelector((state: TStore) => state.jobs);
  return (
    <Button
      loading={loadingData === 'loading'}
      type="submit"
      radius="8px"
      h="40px"
      size="lg"
      loaderPosition="center"
      styles={styles}
    >
      {loadingData === 'start' && 'Применить'}
    </Button>
  );
}

export default SubmitButton;
