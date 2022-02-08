import type { Config } from '@jest/types';

import baseConfig from './jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  testMatch: ['<rootDir>/storyshots.(spec|test).ts'],
};

export default config;
