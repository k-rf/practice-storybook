import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { useAuth } from '~/libs/auth';

import { AppBar } from '../Elements/AppBar';
import { Button } from '../Elements/Button';
import { Head } from '../Head';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const StyledAppBar = styled(AppBar)(({ theme }) => {
  return {
    marginBottom: theme.spacing(2),
    backgroundColor: 'black',
    opacity: 0.7,
  };
});

const Body = styled('div')(({ theme }) => {
  return {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  };
});

export const MainLayout = (props: Props) => {
  const { user, logout } = useAuth();

  return (
    <>
      <Head title={props.title} />
      <StyledAppBar>
        <Typography variant='h5'>Practice Storybook</Typography>
        {user && (
          <>
            <Box flexGrow={1}></Box>
            <Button variant='outlined' onClick={() => logout()}>
              ログアウト
            </Button>
          </>
        )}
      </StyledAppBar>
      <Body>{props.children}</Body>
    </>
  );
};
