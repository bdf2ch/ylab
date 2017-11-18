var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('vendor');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './app/app.module.js'),
        vendor: path.resolve(__dirname, './app/vendor.js')
    },
    output: {
        path: path.resolve(__dirname, './app/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!less-loader'
                })
            },
            {
                test: /\.js$/,
                //loader: 'babel-loader',
                //exclude: /node_modules/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './app/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor')
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './app',
        port: 9000
    }
};