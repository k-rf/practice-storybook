import type { ComponentStoryObj } from '@storybook/react';

import { TextField } from '.';

type Story = ComponentStoryObj<typeof TextField>;

export default { title: 'Elements/Field', component: TextField };

const Default: Story = {};

export const Basic: Story = {
  ...Default,
};

export const Focused: Story = {
  ...Default,
  args: { ...Default.args, autoFocus: true },
};

export const Error: Story = {
  ...Default,
  args: { ...Default.args, error: true },
};

export const Password: Story = {
  ...Default,
  args: { ...Default.args, type: 'password' },
};
