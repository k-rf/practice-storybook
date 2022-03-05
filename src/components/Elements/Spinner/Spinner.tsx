import {
  CircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

type Props = { size?: 'sm' | 'md' | 'lg' | number } & Pick<
  MuiCircularProgressProps,
  'value' | 'color'
>;

export const Spinner = (props: Props) => {
  const size = getSize(props.size);

  return <CircularProgress {...props} size={size} />;
};

const getSize = (size?: 'sm' | 'md' | 'lg' | number) => {
  switch (size) {
    case 'sm':
      return 40;
    case 'md':
      return 120;
    case 'lg':
      return 240;
    default:
      return size;
  }
};
