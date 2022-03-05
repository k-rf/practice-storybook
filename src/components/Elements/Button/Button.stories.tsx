import { Box, BoxProps } from '@mui/material';
import type { ComponentStoryObj } from '@storybook/react';

import { Button } from './Button';

type Story = ComponentStoryObj<typeof Button>;

export default { title: 'Elements/Button', component: Button };

const Default: Story = {
  args: { children: 'button' },
};

export const Text: Story = {
  ...Default,
  args: { ...Default.args, variant: 'text' },
};

export const Contained: Story = {
  ...Default,
  args: { ...Default.args, variant: 'contained' },
};

export const Outlined: Story = {
  ...Default,
  args: { ...Default.args, variant: 'outlined' },
};

const Buttons = (args: Story['args']) => {
  const boxProps: BoxProps = {
    display: 'inline',
    mr: (theme) => theme.spacing(2),
  };

  return (
    <>
      <Box {...boxProps}>
        <Button {...args} variant='text'>
          Text
        </Button>
      </Box>
      <Box {...boxProps}>
        <Button {...args} variant='outlined'>
          Outlined
        </Button>
      </Box>
      <Box {...boxProps}>
        <Button {...args} variant='contained'>
          Contained
        </Button>
      </Box>
    </>
  );
};

export const Disabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
  render: (args) => <Buttons {...args} />,
};

export const Loading: Story = {
  ...Default,
  args: { ...Default.args, isLoading: true },
  render: (args) => <Buttons {...args} />,
};
