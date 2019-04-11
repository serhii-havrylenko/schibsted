module.exports = (env) => {
  env.cache(true);

  return {
    sourceType: 'unambiguous',
    presets: [
      '@babel/typescript',
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          corejs: '2.6.5',
          targets: {
            browsers: 'Last 2 Chrome versions, Firefox ESR',
            node: '10.15',
          },
        },
      ],
      '@babel/react',
    ],
    plugins: [
      'lodash',
      '@babel/plugin-proposal-class-properties',
      ['babel-plugin-styled-components', { ssr: true }],
      ['babel-plugin-webpack-alias', { config: './webpack.config.resolve.js' }],
      '@babel/transform-runtime',
    ],
    env: {
      server: {
        plugins: ['dynamic-import-node'],
      },
      client: {
        plugins: ['dynamic-import-webpack'],
      },
      test: {
        presets: ['@babel/typescript', '@babel/env', '@babel/react'],
        plugins: [
          ['babel-plugin-styled-components', { ssr: true }],
          [
            'babel-plugin-webpack-alias',
            { config: './webpack.config.resolve.js' },
          ],
        ],
      },
    },
  };
};
