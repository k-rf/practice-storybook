import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { useAuth } from '~/features/auth';
import { Landing } from '~/features/misc';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes: RouteObject[] = [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '*',
      element: <Navigate to={auth.user ? '/app' : '/'} />,
    },
  ];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
