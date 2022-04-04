import { Box } from '@mui/material';
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { CommentListItem } from '.';

type Meta = ComponentMeta<typeof CommentListItem>;
type Story = ComponentStoryObj<typeof CommentListItem>;

export default {
  title: 'Features/Comments/CommentListItem',
  component: CommentListItem,
  decorators: [
    (story) => <Box width={(theme) => theme.spacing(30)}>{story()}</Box>,
  ],
} as Meta;

export const Default: Story = {
  args: {
    children: 'Comment List Item',
  },
};

export const Pinned: Story = {
  ...Default,
  args: { ...Default.args, pinned: true },
};
