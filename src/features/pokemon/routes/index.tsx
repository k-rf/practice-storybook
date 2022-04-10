import { Box } from '@mui/material';

import { Spinner } from '~/components/Elements/Spinner';
import { Head } from '~/components/Head';

import { useGetPokemonByNameQuery } from '../api';

export const PokemonRoutes = () => {
  const { data, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Head title='Pokemon' />
      <Box>{data?.name}</Box>
    </>
  );
};
