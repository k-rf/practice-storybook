import { axios } from '~/libs/axios';

import { RegisterCredentialsDTO, UserResponse } from '../types';

export const register = (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  return axios.post('/auth/register', data);
};
