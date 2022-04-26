import type { Config } from '@jest/types';

import baseConfig from './jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  testMatch: ['<rootDir>/test/components.(spec|test).tsx'],
};

export default config;
