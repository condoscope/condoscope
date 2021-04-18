module.exports = {
  stories: [],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
          }
        }
      }
    },
    '@storybook/addon-knobs/register'
  ],
};
