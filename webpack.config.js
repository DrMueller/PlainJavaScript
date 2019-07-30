const path = require('path');
const config = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, config.main),
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Main',
            filename: 'index.html',
            template: __dirname + '/src/infrastructure/app-main/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Individuals',
            filename: 'individuals.html',
            template: __dirname + '/src/areas/individuals/components/individuals-overview/individuals-overview.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            filename: 'hello-world.html',
            template: __dirname + '/src/areas/hello-world/components/hello-world/hello-world.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}