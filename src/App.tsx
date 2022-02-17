import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { AppRoutes } from './routes';

export const App = () => {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </RecoilRoot>
  );
};
