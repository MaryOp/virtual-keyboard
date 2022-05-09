// const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

// const paths = require('./paths')

module.exports = {
entry: "./all.js",
  module: {
rules: [
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader' ],
          },
          { 
              test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
              type: 'assets/' 
          },
]
      },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        assetModuleFilename: 'assets/[hash][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Virtual Keyboard',
            // filename: 'index.html'
        }
        ),
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new CopyWebpackPlugin({
        //     patterns: [
        //       {
        //         from: paths.public,
        //         to: 'assets',
        //         globOptions: {
        //           ignore: ['*.DS_Store'],
        //         },
        //         noErrorOnMissing: true,
        //       },
        //     ],
        //   }),
    ],
    
  // resolve: {
  //   modules: [paths.src, 'node_modules'],
  //   extensions: ['.js', '.jsx', '.json'],
  //   alias: {
  //     '@': paths.src,
  //     assets: paths.public,
  //   },
  // },
  // mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
  mode: 'development',
  // mode: 'production'
}
