import type { Parameters } from '@storybook/addons';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { handlers } from '../src/mocks/handlers';
import { AppProvider } from '../src/providers';

initialize({
  onUnhandledRequest: 'bypass',
});
export const decorators = [
  mswDecorator,
  (story) => <AppProvider>{story()}</AppProvider>,
];

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
