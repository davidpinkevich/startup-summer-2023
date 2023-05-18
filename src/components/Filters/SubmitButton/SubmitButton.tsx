import { useSelector } from 'react-redux';
import { Button } from '@mantine/core';
import { TStore } from '../../../types';

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
      styles={{ root: { fontSize: 14, fontWeight: 500, fontFamily: 'Inter' } }}
    >
      {loadingData === 'start' && 'Применить'}
    </Button>
  );
}

export default SubmitButton;
