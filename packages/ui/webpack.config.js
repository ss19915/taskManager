const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const mode = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}

const envFilePath = '../../.env';

module.exports = (env, argv) => {

    const module = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        rootMode: 'upward', 
                    }
                },
                exclude: '/node_modules/',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    };

    const plugins = [
        new CopyPlugin([
            { from: './src/index.html', to: 'index.html' }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new DotEnv({path: envFilePath}),
    ];

    const devServer = {
        hot: true,
        port: 3000,
        historyApiFallback: {
            index: '/'
        }
    }

    let optimization = {};


    if(argv.mode === mode.PRODUCTION){

        const productionOptimization = {
            mangleWasmImports: true,
            removeAvailableModules: true,
            removeEmptyChunks: true,
            removeEmptyChunks: true,
        };

        optimization = { ...optimization, ...productionOptimization };

    }
    return ({
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module,
        plugins,
        optimization,
        devServer
    });
}