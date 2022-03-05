import { axios } from '~/libs/axios';

import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const login = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post('/auth/login', data);
};