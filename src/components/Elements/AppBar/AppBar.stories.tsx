import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { AppBar } from '.';

type Meta = ComponentMeta<typeof AppBar>;
type Story = ComponentStoryObj<typeof AppBar>;

export default { title: 'Elements/AppBar', component: AppBar } as Meta;

export const Default: Story = {
  args: { children: <span>Practice Storybook</span> },
};
