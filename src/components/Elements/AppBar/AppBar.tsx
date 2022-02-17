import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const AppBar = (props: Props) => {
  return (
    <MuiAppBar className={props.className} position='static'>
      <MuiToolbar>{props.children}</MuiToolbar>
    </MuiAppBar>
  );
};
