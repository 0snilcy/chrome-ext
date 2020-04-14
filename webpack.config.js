const path = require('path');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./config');
const manifest = require('./manifest')(config);

const configEntry = config.entry;
const entry = Object.keys(configEntry).reduce((obj, key) => {
  const prop = configEntry[key];
  if (prop) {
    obj[key] = `./src/${key}`;
  }

  return obj;
}, {});

module.exports = {
  entry,
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new GenerateJsonPlugin('manifest.json', manifest),
    new CopyWebpackPlugin([
      {
        from: 'src/**/*.html',
        transformPath: (targetPath) => targetPath.replace('src/', ''),
      },
      {
        from: 'src/icons/*.{svg,png}',
        to: 'icons/[name].[ext]',
        toType: 'template',
      },
    ]),
  ],
};
