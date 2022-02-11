import { within } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './PostForm.stories';

const { InputFirstName, InputFamilyName, InputFullName, Send } =
  composeStories(stories);

describe('PostForm', () => {
  it(`${InputFirstName.storyName}`, async () => {
    const { container } = render(<InputFirstName />);
    await InputFirstName.play({ canvasElement: container });

    const canvas = within(container);
    expect(
      within(canvas.getByTestId('test-first-name-field')).getByRole('textbox')
    ).toHaveValue('FirstName');
  });

  it(`${InputFamilyName.storyName}`, async () => {
    const { container } = render(<InputFamilyName />);
    await InputFamilyName.play({ canvasElement: container });

    const canvas = within(container);
    expect(
      within(canvas.getByTestId('test-family-name-field')).getByRole('textbox')
    ).toHaveValue('FamilyName');
  });

  it(`${InputFullName.storyName}`, async () => {
    const { container } = render(<InputFullName />);
    await InputFullName.play({ canvasElement: container });

    const canvas = within(container);
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

    const canvas = within(container);
    expect(
      within(canvas.getByTestId('test-first-name-field')).getByRole('textbox')
    ).toHaveValue('');
    expect(
      within(canvas.getByTestId('test-family-name-field')).getByRole('textbox')
    ).toHaveValue('');
  });
});
