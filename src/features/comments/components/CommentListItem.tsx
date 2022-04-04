import { Flag as FlagIcon } from '@mui/icons-material';
import { IconButton, ListItemText, styled } from '@mui/material';
import { MouseEventHandler } from 'react';

import { ListItem } from '~/components/Elements/List';

type Props = {
  children: string;
  pinned?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const CommentListItem = (props: Props) => {
  return (
    <ListItem secondaryAction={<Pin pinned={props.pinned} />}>
      <ListItemText primary={props.children}></ListItemText>
    </ListItem>
  );
};

const Pin = styled((props: { className?: string } & Pick<Props, 'pinned'>) => (
  <IconButton>
    <FlagIcon className={props.className} />
  </IconButton>
))((props) => ({
  color: props.pinned ? '#ff5757' : 'inherit',
}));
