const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
    name: 'client',
    entry: ['babel-polyfill','./client/client.js'],
    mode: 'production',
    output: {
      path: path.resolve(__dirname + '/public/dist'),
      filename: 'main.js',
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
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'client'),
          use: ['style-loader', 'css-loader?url=false', 'postcss-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new WebpackManifestPlugin(),
    ],
  }