const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const developmentConfig =  {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new UglifyJsPlugin()
  ],
}
module.exports = merge([baseConfig, developmentConfig])
