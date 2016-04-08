/**
 * @author fbielejec
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client', './src/main.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
    // ,
    // publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
//     new webpack.ProvidePlugin({
//         'Promise': 'es6-promise'//, // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
// //            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
//     }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    new webpack.ProvidePlugin({
       _: "underscore"
   }),
   new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   })

  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [

      {
        test: /\.js|\.jsx$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }



    ]
  }

};
