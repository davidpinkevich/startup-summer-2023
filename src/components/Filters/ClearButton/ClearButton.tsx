import { useDispatch } from 'react-redux';
import { Button } from '@mantine/core';
import cross from '../../../assets/icons/cross.svg';
import { clearFilters } from '../../../redux/slices/SliceFilters';
import { styles } from './styles';

function ClearButton() {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(clearFilters())}
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
