const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: './node_modules/babel-polyfill/dist/polyfill.js', watched: false },
            { pattern: 'test/*.js', watched: false },
        ],
        preprocessors: {
            'test/*.js': ['webpack', 'sourcemap'],
        },
        reporters: ['progress', 'kjhtml'],
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        webpack: webpackConfig,
        webpackMiddleware: {
            watchOptions: webpackConfig.watchOptions,
        },
    });
};
