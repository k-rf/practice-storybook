import { useRoutes } from 'react-router';

export const AppRoutes = () => {
  const routes = [{ path: '/', element: <>Hello World</> }];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
