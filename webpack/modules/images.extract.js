const imagesExtract = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/images/[name][ext]',
                    },
                },
            ],
        },
    };
};

module.exports = imagesExtract;
