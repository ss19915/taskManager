const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const mode = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}

const envFilePath = '../../.env';
const entryPoint = './src/api.js'

module.exports = (env, args) => ({
    entry: entryPoint,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'api.js'
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