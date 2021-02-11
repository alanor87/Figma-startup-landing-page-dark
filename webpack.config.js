const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, "./dist/js"),
        filename: "main.js",
    },
    plugins: [new MiniCssExtractPlugin({filename: '../css/main.css'})],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },  {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
        ]
    },
    optimization: {
        // minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

};