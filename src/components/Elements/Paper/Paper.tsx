import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

type Props = Pick<MuiPaperProps, 'children' | 'sx' | 'color'>;

export const Paper = (props: Props) => {
  return <MuiPaper {...props} />;
};
