import { ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { theme } from '~/constants/theme';
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
          <BrowserRouter>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </RecoilRoot>
  );
};
