import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { queryClient } from '~/libs/react-query';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <BrowserRouter>{props.children}</BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </RecoilRoot>
  );
};
