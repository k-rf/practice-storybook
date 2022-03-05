import { RouteObject } from 'react-router-dom';

import { AuthRoutes } from '~/features/auth';

export const publicRoutes: RouteObject[] = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
