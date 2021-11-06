const nodeExternals = require('webpack-node-externals');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    name: 'server',
    entry: {
        server: path.resolve(__dirname,'server/server.ts'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts','.tsx'],
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.server.json',
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {context: 'server', from: 'views', to: 'views'},
                {context: 'server', from: 'controllers', to: 'controllers'}
            ]
        })
    ]
}