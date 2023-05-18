import { Text, Group } from '@mantine/core';
import ClearButton from '../ClearButton/ClearButton';

function HeaderFilters() {
  return (
    <Group h="20px" position="apart">
      <Text weight={700} size="20px">
        Фильтры
      </Text>
      <ClearButton />
    </Group>
  );
}

export default HeaderFilters;
