import { Box } from '@mui/material';

import { AppProvider } from './providers';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <AppProvider>
      <Box
        sx={{ background: (theme) => theme.palette.background.default }}
        height='100vh'
      >
        <AppRoutes />
      </Box>
    </AppProvider>
  );
};
