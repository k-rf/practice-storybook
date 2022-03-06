import { BookmarkBorder } from '@mui/icons-material';
import { Container, Box } from '@mui/material';
import { useNavigate } from 'react-router';

import { Paper } from '~/components/Elements/Paper/Paper';
import { MainLayout } from '~/components/Layout';

import { LoginForm } from '../components';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const navigate = useNavigate();
  const { login, isLoggingIn } = useAuth();

  return (
    <MainLayout title='Login'>
      <Container maxWidth='sm'>
        <Paper>
          <Box p={4} display='flex' justifyContent='center'>
            <Box display='block'>
              <Box display='flex' justifyContent='center' pb={4}>
                <BookmarkBorder
                  sx={{ fontSize: (theme) => theme.spacing(8) }}
                />
              </Box>
              <LoginForm
                isLoading={isLoggingIn}
                onSubmit={async (value) => {
                  await login(value);
                  navigate('/app/comments');
                }}
              />
            </Box>
          </Box>
        </Paper>
      </Container>
    </MainLayout>
  );
};
