import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { MainLayout } from '.';

type Meta = ComponentMeta<typeof MainLayout>;
type Story = ComponentStoryObj<typeof MainLayout>;

export default { title: 'Layout/MainLayout', component: MainLayout } as Meta;

export const Default: Story = {
  args: { children: <div>Hello World</div> },
};
