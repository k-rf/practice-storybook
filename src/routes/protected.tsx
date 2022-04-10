import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import { MainLayout } from '~/components/Layout';
import { CommentsRoutes } from '~/features/comments';
import { PokemonRoutes } from '~/features/pokemon';

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
      { path: 'pokemon/*', element: <PokemonRoutes /> },
      { path: '', element: <Navigate to='pokemon' /> },
      { path: '*', element: <Navigate to='.' /> },
    ],
  },
];
