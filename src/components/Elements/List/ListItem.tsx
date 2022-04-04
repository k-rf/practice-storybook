import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@mui/material';

type Props = MuiListItemProps;

export const ListItem = (props: Props) => {
  return <MuiListItem {...props} />;
};
