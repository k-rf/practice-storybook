import { Navigate, RouteObject, Outlet, useRoutes } from 'react-router-dom';

import { MainLayout } from '~/components/Layout';
import { CommentsRoutes } from '~/features/comments';
import { Landing } from '~/features/misc';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    { path: '/', element: <Landing /> },
    {
      path: '/app',
      element: <App />,
      children: [
        { path: 'comments', element: <CommentsRoutes /> },
        { path: '', element: <Navigate to='comments' /> },
        { path: '*', element: <Navigate to='.' /> },
      ],
    },
  ];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
