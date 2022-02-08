import { Options, StorybookConfig } from '@storybook/core-common';
import { UserConfig } from 'vite';

export type CustomizedStorybookConfig = StorybookConfig & {
  viteFinal: (config: UserConfig, options: Options) => UserConfig;
};
