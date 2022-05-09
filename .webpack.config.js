const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    entry: './all.js',
    module: {
        rules: [{
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
    ]
    },

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
    output: {
        // path:path.resolve(__dirname, 'dist'),
        // filename: 'index.bundle.js',
        path: path.resolve(__dirname, './src'), //src instead of dist
        publicPath: '/src/', //src instead of dist
        filename: 'main.js' //main.js instead of build.js

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Virtual Keyboard',
            // template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
          })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}