module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-dark-mode'
  ],
  staticDirs: ['../public'],
  core: { builder: 'webpack5' },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
