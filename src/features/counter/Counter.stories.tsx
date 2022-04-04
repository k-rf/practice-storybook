import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Counter } from '.';

type Meta = ComponentMeta<typeof Counter>;
type Story = ComponentStoryObj<typeof Counter>;

export default {
  title: 'Features/Counter/Counter',
  component: Counter,
} as Meta;

export const Default: Story = {};
