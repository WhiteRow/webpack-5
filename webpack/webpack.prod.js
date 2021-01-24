const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const styles = require('./modules/styles.extract');

const smp = new SpeedMeasurePlugin({
    disable: !process.env.MEASURE,
})


const prodConfig = merge(
    common,
    {
        mode: 'production',

        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin()
            ],
        },
    },
    
    styles()
);

module.exports = smp.wrap(prodConfig);
