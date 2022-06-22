/// INIT NODE PACKAGE (npm init -y)
// npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
// npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
// npm i -D react react-dom
// npm i -D typescript @types/react @types/react-dom @babel/preset-typescript
// npm i -D mini-css-extract-plugin css-loader
// npm i -D sass-loader node-sass\
// npm i -D styled-jsx @styled-jsx/plugin-sass
// npm i -D copy-webpack-plugin file-loader

/// ADD TO PACKAGE SCRIPTS (package.json)
// "build": "webpack --mode=production",
// "dev": "webpack-dev-server --mode=development"

/// SET FILE STRUCTURE
// /public/index.html
//   Create html template (!) and add <div #id='root'></div>
// /src/index.js
//   Set react app (sra)
// /tsconfig.json
//   Set tsconfig (tsc)
// /.babelrc
//   {
//     "plugins": [["styled-jsx/babel", {"plugins": ["@styled-jsx/plugin-sass"]}]]
//   }

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin'); // separetes html from /_dist/index.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // separetes css from /_dist/index.js (replaces style-loader)
const CopyWebpackPlugin = require('copy-webpack-plugin'); // copies target content of /src folder directly to /_dist

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, '_dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'], // builds extention modules (babel react)
    alias: {
      // Set absolute path
      '~src': path.resolve(__dirname, 'src'), // import starts with tilde (src/...)
      '~public': path.resolve(__dirname, 'public'),
    },
  },
  devServer: {
    static: path.join(__dirname, '_dist'),
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: 'public', // allows link static assets in projects html and css (public/...)
          globOptions: {
            ignore: ['**/index.html'], // prevents copying /public/index.html to /_dist/public/index.html
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {targets: 'defaults'}],
                '@babel/preset-react',
                '@babel/preset-typescript', // remove if ts doent being used
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', {loose: true}], // allows work with class components in react
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        oneOf: [
          {
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  url: false, // prevents css-loader from processing url()
                },
              },
              'sass-loader',
            ],
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{loader: 'file-loader'}],
      },
    ],
  },
};
