import { expect } from '@storybook/jest';
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import {
  fireEvent,
  userEvent,
  within,
  waitFor,
} from '@storybook/testing-library';

import { sleep } from '~/utils/sleep';

import { LoginForm } from '.';

type Meta = ComponentMeta<typeof LoginForm>;
type Story = ComponentStoryObj<typeof LoginForm>;

export default {
  title: 'Features/Auth/LoginForm',
  component: LoginForm,
} as Meta;

export const Default: Story = {
  argTypes: { onSuccess: { action: true } },
};

export const OnlyMailAddress: Story = {
  ...Default,
  storyName: 'メールアドレスだけ入力する',
  play: async ({ canvasElement }) => {
    const { mailAddressField, submitButton } = getElements(canvasElement);

    await userEvent.type(mailAddressField, 'john.doe@example.com', {
      delay: 30,
    });
    await expect(submitButton).toBeDisabled();
  },
};

export const OnlyPassword: Story = {
  ...Default,
  storyName: 'パスワードだけ入力する',
  play: async ({ canvasElement }) => {
    const { passwordField, submitButton } = getElements(canvasElement);

    await userEvent.type(passwordField, 'P@ssw0rd!1234567890', { delay: 30 });
    await expect(submitButton).toBeDisabled();
  },
};

export const MailAddressAndPassword: Story = {
  ...Default,
  storyName: 'メールアドレスとパスワードを入力してログインボタンを押す',
  play: async ({ canvasElement }) => {
    const { mailAddressField, passwordField, submitButton } =
      getElements(canvasElement);

    await userEvent.type(mailAddressField, 'john.doe@example.com', {
      delay: 30,
    });
    await userEvent.type(passwordField, 'P@ssw0rd!1234567890', {
      delay: 30,
    });

    await waitFor(() => {
      return fireEvent.focusOut(passwordField);
    });

    await waitFor(() => {
      return userEvent.click(submitButton);
    });

    await sleep(50); // 非活性状態に変わるのを待つため

    await expect(submitButton).toBeDisabled();
    await expect(mailAddressField).not.toHaveValue();
    await expect(passwordField).not.toHaveValue();
  },
};

export const WrongMailAddress: Story = {
  ...Default,
  storyName: 'メールアドレスではない文字を入力する',
  play: async ({ canvasElement }) => {
    const { mailAddressField, submitButton } = getElements(canvasElement);

    const canvas = within(canvasElement);

    await userEvent.type(mailAddressField, 'john.doe_example.com', {
      delay: 30,
    });

    await waitFor(() => {
      return fireEvent.focusOut(mailAddressField);
    });

    await sleep(50); // 非活性状態に変わるのを待つため

    await expect(submitButton).toBeDisabled();
    await expect(mailAddressField).toHaveAttribute('aria-invalid', 'true');
    await expect(
      canvas.getByText('メールアドレスを入力してください')
    ).toBeInTheDocument();
  },
};

const getElements = (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);

  const mailAddressField = canvas.getByLabelText('メールアドレス', {
    selector: 'input',
  });
  const passwordField = canvas.getByLabelText('パスワード', {
    selector: 'input',
  });
  const submitButton = canvas.getByRole('button');

  return { canvas, mailAddressField, passwordField, submitButton };
};
