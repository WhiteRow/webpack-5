const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const sourceMap = require('./modules/source.map');
const styles = require('./modules/styles');

const devConfig = merge(
    common,

    {
        mode: 'development',
    },

    sourceMap(),
    styles()
);

module.exports = devConfig;
