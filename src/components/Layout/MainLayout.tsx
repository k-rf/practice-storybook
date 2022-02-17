import { Typography } from '@mui/material';
import { styled } from '@mui/system';

import { AppBar } from '../Elements/AppBar';

type Props = {
  children: React.ReactNode;
};

const StyledAppBar = styled(AppBar)(({ theme }) => {
  return { marginBottom: theme.spacing(2) };
});

const Body = styled('div')(({ theme }) => {
  return {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  };
});

export const MainLayout = (props: Props) => {
  return (
    <>
      <StyledAppBar>
        <Typography variant='h5'>Practice Storybook</Typography>
      </StyledAppBar>
      <Body>{props.children}</Body>
    </>
  );
};
