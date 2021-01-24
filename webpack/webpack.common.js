const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const directories = require('./modules/directories');
const scripts = require('./modules/scripts');
const imagesExtract = require('./modules/images.extract');
const fontsExtract = require('./modules/fonts.extract');

const commonConfig = merge(
    {
        entry: {
            app: directories.source + 'js/app.js',
        },

        output: {
            path: directories.distribution,
            filename: './js/[name].js',
        },

        target: 'web',

        resolve: {
            extensions: ['.js', '.json', '.scss'],
            alias: {
                JsComponents: `${directories.source}/js/components`,
                StyleComponents: `${directories.source}/styles/components`,
            },
        },

        plugins: [new CleanWebpackPlugin()],
    },

    scripts(),
    imagesExtract(),
    fontsExtract(),
);

module.exports = commonConfig;
