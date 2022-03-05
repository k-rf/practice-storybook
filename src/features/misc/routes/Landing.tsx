import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router';

import { Button } from '~/components/Elements/Button';
import { Head } from '~/components/Head';
import { useAuth } from '~/libs/auth';

export const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    if (user) {
      navigate('/app/comments');
    }
    navigate('/auth/login');
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
