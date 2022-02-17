import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router';

import { Button } from '~/components/Elements/Button';
import { Head } from '~/components/Head';

export const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/app/comments');
  };

  return (
    <>
      <Head />
      <Container>
        <Box textAlign={'center'}>
          <Button onClick={handleClick}>Comments</Button>
        </Box>
      </Container>
    </>
  );
};
