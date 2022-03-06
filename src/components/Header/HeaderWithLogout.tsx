import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { AppBar } from '../Elements/AppBar';
import { Button } from '../Elements/Button';

type Props = {
  onLogout: () => void;
  isLogin?: boolean;
  isLoading?: boolean;
};

const StyledAppBar = styled(AppBar)(({ theme }) => {
  return {
    marginBottom: theme.spacing(2),
    backgroundColor: 'darkblue',
    opacity: 0.7,
  };
});

export const HeaderWithLogout = (props: Props) => {
  return (
    <>
      <StyledAppBar>
        <Typography variant='h5'>Practice Storybook</Typography>
        {props.isLogin && (
          <>
            <Box flexGrow={1}></Box>
            <Button
              variant={props.isLoading ? 'contained' : 'outlined'}
              onClick={() => props.onLogout()}
              isLoading={props.isLoading}
              sx={{
                ':disabled': {
                  backgroundColor: 'lightgray',
                  color: 'darkgray',
                },
              }}
            >
              ログアウト
            </Button>
          </>
        )}
      </StyledAppBar>
    </>
  );
};
