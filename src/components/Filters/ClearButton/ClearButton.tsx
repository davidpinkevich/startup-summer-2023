import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mantine/core';
import cross from '../../../assets/icons/cross.svg';
import { clearFilters } from '../../../redux/slices/SliceFilters';
import { TStore } from '../../../types';
import { styles } from './styles';

function ClearButton() {
  const { loadingData } = useSelector((state: TStore) => state.jobs);
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(clearFilters())}
      disabled={loadingData === 'loading'}
      h="20px"
      styles={styles}
      variant="subtle"
      rightIcon={<img src={cross} />}
    >
      Сбросить всё
    </Button>
  );
}

export default ClearButton;
