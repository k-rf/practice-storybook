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
