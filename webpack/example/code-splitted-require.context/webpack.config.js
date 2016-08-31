const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: 'js/',
    filename: 'index.js',
    chunkFilename: '[id].chunk.js',
    pathinfo: true
  }
}
