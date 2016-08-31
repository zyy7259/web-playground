const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    pageA: './pageA',
    pageB: './pageB'
  },
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: 'js/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    pathinfo: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('commons.js')
  ]
}
