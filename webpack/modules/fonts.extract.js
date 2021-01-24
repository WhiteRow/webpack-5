const fontsExtract = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|ttf|otf)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/fonts/[name][ext]',
                    },
                },
            ]
        }
    }
}

module.exports = fontsExtract;