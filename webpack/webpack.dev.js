const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const developmentConfig =  {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve('src'),
  },
  mode: "development",
}
module.exports = merge([baseConfig, developmentConfig])
