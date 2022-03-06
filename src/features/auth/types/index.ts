export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  role: 'ADMIN' | 'USER';
};

export type UserResponse = {
  jwt: string;
  user: AuthUser;
};

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export type LogoutCredentialsDTO = {
  email: string;
};
