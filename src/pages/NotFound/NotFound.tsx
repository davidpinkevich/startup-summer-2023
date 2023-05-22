import { Button, Stack, Text, Image } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import error from '../../assets/icons/error.svg';

function NotFound() {
  return (
    <Stack spacing={20} align="center" justify="center">
      <Text fz="34px" color="rgba(94, 150, 252, 1)" align="center" inherit>
        Такой страницы не существует
      </Text>
      <Image src={error} alt={'page not found'} width={300} h={300} />
      <NavLink to=".">
        <Button size="xl" radius="md">
          Перейти к поиску
        </Button>
      </NavLink>
    </Stack>
  );
}

export default NotFound;
