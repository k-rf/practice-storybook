import { useNavigate } from 'react-router';

import { MainLayout } from '~/components/Layout';
import { useAuth } from '~/libs/auth';

import { LoginForm } from '../components';

export const Login = () => {
  const navigate = useNavigate();
  const { login, isLoggingIn } = useAuth();

  return (
    <MainLayout title='Login'>
      <LoginForm
        isLoading={isLoggingIn}
        onSubmit={async (value) => {
          await login(value);
          navigate('/app/comments');
        }}
      />
    </MainLayout>
  );
};
