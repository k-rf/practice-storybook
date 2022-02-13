import type { Parameters } from '@storybook/addons';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { handlers } from '../src/mocks';

initialize();
export const decorators = [mswDecorator];

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers,
  },
};
