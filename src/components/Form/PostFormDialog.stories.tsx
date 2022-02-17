import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { PostFormDialog } from '.';

type Meta = ComponentMeta<typeof PostFormDialog>;
type Story = ComponentStoryObj<typeof PostFormDialog>;

export default {
  title: 'Form/PostFormDialog',
  component: PostFormDialog,
} as Meta;

const openDialog = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));
};

const inputTextField = async (
  canvasElement: HTMLElement,
  testId: string,
  content: string
) => {
  const canvas = within(canvasElement['parentElement'] || canvasElement);

  await userEvent.type(
    within(canvas.getByTestId(testId)).getByRole('textbox'),
    content,
    {
      delay: 30,
    }
  );
};

export const Default: Story = {
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export const Open: Story = {
  ...Default,
  storyName: 'ダイアログを開く',
  play: async ({ canvasElement }) => {
    await openDialog(canvasElement);
  },
};

export const Input: Story = {
  ...Default,
  storyName: 'フルネームを入力する',
  play: async ({ canvasElement }) => {
    await openDialog(canvasElement);
    await inputTextField(canvasElement, 'test-first-name-field', 'FirstName');
    await inputTextField(canvasElement, 'test-family-name-field', 'FamilyName');
  },
};

export const Send: Story = {
  ...Default,
  storyName: 'フルネームを入力し送信する',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement['parentElement'] || canvasElement);

    await openDialog(canvasElement);
    await inputTextField(canvasElement, 'test-first-name-field', 'FirstName');
    await inputTextField(canvasElement, 'test-family-name-field', 'FamilyName');
    await waitFor(() => {
      return userEvent.click(canvas.getByText('送信'));
    });
  },
};
