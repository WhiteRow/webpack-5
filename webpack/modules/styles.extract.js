const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const stylesExtcract = () => {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles/[name].css',
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.(sc|sa)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [['postcss-preset-env']],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                },
            ],
        },
    };
};

module.exports = stylesExtcract;
