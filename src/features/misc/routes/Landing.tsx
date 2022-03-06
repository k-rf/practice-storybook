import { Box, Container, styled } from '@mui/material';
import { useNavigate } from 'react-router';

import { Button } from '~/components/Elements/Button';
import { Head } from '~/components/Head';
import { useAuth } from '~/features/auth';

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
        <Box
          height='100vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <EnterButton variant='outlined' onClick={handleClick}>
            Enter
          </EnterButton>
        </Box>
      </Container>
    </>
  );
};

const EnterButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(8),
}));
