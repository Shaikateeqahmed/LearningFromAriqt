import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/lib/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links', // Add more addons as needed
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: 'webpack5', // Or 'vite' if you're using Vite as your builder
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
