import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './LoginForm.stories';

const {
  OnlyMailAddress,
  OnlyPassword,
  MailAddressAndPassword,
  WrongMailAddress,
} = composeStories(stories);

describe('LoginForm', () => {
  it(`${MailAddressAndPassword.storyName}`, async () => {
    const { container } = render(<MailAddressAndPassword />);
    await MailAddressAndPassword.play({ canvasElement: container });
  });

  it(`${OnlyMailAddress.storyName}`, async () => {
    const { container } = render(<OnlyMailAddress />);
    await OnlyMailAddress.play({ canvasElement: container });
  });

  it(`${OnlyPassword.storyName}`, async () => {
    const { container } = render(<OnlyPassword />);
    await OnlyPassword.play({ canvasElement: container });
  });

  it(`${WrongMailAddress.storyName}`, async () => {
    const { container } = render(<WrongMailAddress />);
    await WrongMailAddress.play({ canvasElement: container });
  });
});
