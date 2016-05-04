/**
 * @author fbielejec
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/app.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
  //  new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
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
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }



    ]
  }

};
