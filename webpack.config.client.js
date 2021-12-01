const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
    name: 'client',
    entry: ['babel-polyfill','./client/client.js'],
    mode: 'production',
    output: {
      path: path.resolve(__dirname + '/public/dist'),
      filename: '[name].[contenthash].js',
      publicPath: '',
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
      ],
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
  }