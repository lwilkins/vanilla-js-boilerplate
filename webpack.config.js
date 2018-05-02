// Dev dependencies are ok in this script hence the below ESLint exception
/* eslint import/no-extraneous-dependencies: ['off'] */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: {
        app: [
            'polyfills.js',
            'client.js',
            'app.css',
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin('[name].css'),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                            },
                        },
                    ],
                }),
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', './src'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
    },
};
