import { useQuery } from 'react-query';

import { axios } from '~/libs/axios';
import { storage } from '~/libs/storage';

import { AuthUser } from '../types';

export const getAuthUser = (): Promise<AuthUser> => {
  return axios.get('/auth/me');
};

export const useAuthUser = () => {
  const queryFn = storage.getToken() ? () => getAuthUser() : () => null;

  return useQuery({
    queryKey: ['auth'],
    queryFn,
  });
};
