const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    name: 'server',
    entry: {
        server: path.resolve(__dirname,'server/server.js'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'public'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ],
    },
}