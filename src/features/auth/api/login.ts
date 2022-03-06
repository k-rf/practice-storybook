import { useMutation } from 'react-query';

import { axios } from '~/libs/axios';
import { queryClient } from '~/libs/react-query';
import { storage } from '~/libs/storage';

import { LoginCredentialsDTO, UserResponse } from '../types';

export const login = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post('/auth/login', data);
};

export const useLogin = () => {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries('auth');
    },
    onSuccess: async (data) => {
      const { jwt, user } = data;

      queryClient.setQueryData('auth', user);

      storage.setToken(jwt);
    },
    mutationFn: login,
  });
};
