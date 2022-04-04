import { ListProps as MuiListProps, List as MuiList } from '@mui/material';

type Props = MuiListProps;

export const List = (props: Props) => {
  return <MuiList {...props} />;
};
