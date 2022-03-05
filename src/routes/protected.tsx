import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { MainLayout } from '~/components/Layout';
import { CommentsRoutes } from '~/features/comments';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const protectedRoutes: RouteObject[] = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: 'comments/*', element: <CommentsRoutes /> },
      { path: '', element: <Navigate to='comments' /> },
      { path: '*', element: <Navigate to='.' /> },
    ],
  },
];
