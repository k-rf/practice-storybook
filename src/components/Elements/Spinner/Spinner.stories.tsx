import { Box } from '@mui/system';
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Spinner } from '.';

type Meta = ComponentMeta<typeof Spinner>;
type Story = ComponentStoryObj<typeof Spinner>;

export default { title: 'Elements/Spinner', component: Spinner } as Meta;

export const Default: Story = {};

export const Sizes: Story = {
  ...Default,
  render: () => {
    return (
      <>
        <Spinner size='sm' />
        <Spinner size='md' />
        <Spinner size='lg' />
      </>
    );
  },
};

export const Center: Story = {
  ...Default,
  render: () => {
    return (
      <Box display='flex' justifyContent='center'>
        <Spinner />
      </Box>
    );
  },
};
