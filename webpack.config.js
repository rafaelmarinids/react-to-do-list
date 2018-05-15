const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', options: { presets: ['env'] } }, 
            /*{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },*/
            { test: /\.scss$/, use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
            ] },
            { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] },
        ]
    },
    plugins: [
        /*new HtmlWebpackPlugin({ // Gera o arquivo HTML de saída
            title: 'Desafio iClinic',
            favicon: './public/favicon.ico',
            template: './public/index.hbs'
        }),*/
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: { 
        extensions: ['*', '.js', '.jsx'] 
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    }
};