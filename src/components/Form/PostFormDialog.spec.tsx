import { waitForElementToBeRemoved, within } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './PostFormDialog.stories';

const { Open, Input, Send } = composeStories(stories);

describe('PostFormDialog', () => {
  it(`${Open.storyName}`, async () => {
    const { container } = render(<Open />);
    await Open.play({ canvasElement: container });

    // レンダーしたコンポーネントの兄弟要素にダイアログが表示されるため、親コンポーネントを利用する必要がある
    const canvas = within(container['parentElement'] || container);
    expect(canvas.getByRole('dialog')).toBeInTheDocument();
  });

  it(`${Input.storyName}`, async () => {
    const { container } = render(<Input />);
    await Input.play({ canvasElement: container });

    const canvas = within(container['parentElement'] || container);
    expect(
      within(canvas.getByTestId('test-first-name-field')).getByRole('textbox')
    ).toHaveValue('FirstName');
    expect(
      within(canvas.getByTestId('test-family-name-field')).getByRole('textbox')
    ).toHaveValue('FamilyName');
  });

  it(`${Send.storyName}`, async () => {
    const { container } = render(<Send />);
    await Send.play({ canvasElement: container });

    const canvas = within(container['parentElement'] || container);
    await waitForElementToBeRemoved(canvas.queryByText('送信'));

    expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
