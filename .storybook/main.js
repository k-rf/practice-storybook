const { default: tsconfigPaths } = require('vite-tsconfig-paths');

/** @type { import('../types/storybook-config').CustomizedStorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: 'storybook-builder-vite',
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  viteFinal: (config) => {
    config.plugins = [...config?.plugins, tsconfigPaths()];
    return config;
  },
};

module.exports = config;
