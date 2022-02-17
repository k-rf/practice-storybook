import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { PostForm } from '.';

type Meta = ComponentMeta<typeof PostForm>;
type Story = ComponentStoryObj<typeof PostForm>;

export default { title: 'Form/PostForm', component: PostForm } as Meta;

export const InputFamilyName: Story = {
  storyName: '姓を入力する',
  argTypes: { onSubmit: { action: 'clicked' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      within(canvas.getByTestId('test-family-name-field')).getByRole('textbox'),
      'FamilyName',
      {
        delay: 30,
      }
    );
  },
};

export const InputFirstName: Story = {
  storyName: '名を入力する',
  argTypes: { onSubmit: { action: 'clicked' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      within(canvas.getByTestId('test-first-name-field')).getByRole('textbox'),
      'FirstName',
      {
        delay: 30,
      }
    );
  },
};

export const InputFullName: Story = {
  storyName: '姓名を入力する',
  argTypes: { onSubmit: { action: 'clicked' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      within(canvas.getByTestId('test-family-name-field')).getByRole('textbox'),
      'FamilyName',
      {
        delay: 30,
      }
    );

    await userEvent.type(
      within(canvas.getByTestId('test-first-name-field')).getByRole('textbox'),
      'FirstName',
      {
        delay: 30,
      }
    );
  },
};

export const Send: Story = {
  storyName: '姓名を入力し送信する',
  argTypes: { onSubmit: { action: 'clicked' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      within(canvas.getByTestId('test-family-name-field')).getByRole('textbox'),
      'FamilyName',
      {
        delay: 30,
      }
    );

    await userEvent.type(
      within(canvas.getByTestId('test-first-name-field')).getByRole('textbox'),
      'FirstName',
      {
        delay: 30,
      }
    );

    await waitFor(() => {
      return userEvent.click(canvas.getByRole('button'));
    });
  },
};
