import { Box } from '@mui/material';
import { initReactQueryAuth } from 'react-query-auth';

import { Spinner } from '~/components/Elements/Spinner';
import {
  AuthUser,
  UserResponse,
  getUser,
  login,
  LoginCredentialsDTO,
  register,
  RegisterCredentialsDTO,
} from '~/features/auth';

import { storage } from './storage';

const handleUserResponse = async (data: UserResponse) => {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
};

const loadUser = async () => {
  if (storage.getToken()) {
    const data = await getUser();

    return data;
  }
  return null;
};

const loginFn = async (data: LoginCredentialsDTO) => {
  const response = await login(data);
  const user = await handleUserResponse(response);

  return user;
};

const registerFn = async (data: RegisterCredentialsDTO) => {
  const response = await register(data);
  const user = await handleUserResponse(response);

  return user;
};

const logoutFn = async () => {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>({
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent: () => {
    return (
      <Box
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Spinner size='md' />
      </Box>
    );
  },
});
