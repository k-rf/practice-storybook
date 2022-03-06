import { useMutation } from 'react-query';

import { axios } from '~/libs/axios';
import { queryClient } from '~/libs/react-query';
import { storage } from '~/libs/storage';

import { LogoutCredentialsDTO } from '../types';

export const logout = (data: LogoutCredentialsDTO): Promise<void> => {
  return axios.delete('/auth/logout', { data });
};

export const useLogout = () => {
  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries('auth');
    },
    onSuccess: async () => {
      queryClient.setQueryData('auth', null);

      storage.clearToken();
    },
    mutationFn: logout,
  });
};
