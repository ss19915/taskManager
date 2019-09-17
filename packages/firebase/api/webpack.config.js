const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const envFilePath = '../../../.env';
const entryPoint = './src/'

module.exports = (env, args) => ({
    entry: entryPoint,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        library: 'library',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        rootMode: 'upward',
                    }
                },
                exclude: '/node_modules/',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DotEnv({path: envFilePath}),
    ],
    target: 'node',
});