import { useAuthUser } from '../api/getAuthUser';
import { useLogin } from '../api/login';
import { useLogout } from '../api/logout';

export const useAuth = () => {
  const user = useAuthUser();
  const loginMutation = useLogin();
  const logoutMutation = useLogout();

  return {
    user: user.data,
    isLoading: user.isLoading,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isLoading,
    logout: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isLoading,
  };
};
