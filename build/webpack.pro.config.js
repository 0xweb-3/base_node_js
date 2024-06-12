const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
    plugins: [
        new CleanWebpackPlugin(),
    ],
};

module.exports = webpackConfig;