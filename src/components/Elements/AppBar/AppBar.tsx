import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export const AppBar = (props: Props) => {
  return (
    <MuiAppBar position='static'>
      <MuiToolbar>{props.children}</MuiToolbar>
    </MuiAppBar>
  );
};
