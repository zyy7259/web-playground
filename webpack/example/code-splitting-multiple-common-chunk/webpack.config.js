const path = require('path')
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin

module.exports = {
  entry: {
    a: './a',
    b: './b',
    c: './c',
    adminA: './adminA',
    adminB: './adminB',
    adminC: './adminC',
  },
  output: {
    path: path.join(__dirname, 'js'),
    filename: '[name].js',
    publicPath: 'js/',
    pathinfo: true
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'admin-commons',
      chunks: ['adminA', 'adminB']
    }),
    new CommonsChunkPlugin({
      name: 'commons',
      chunks: ['a', 'b', 'admin-commons'],
      minChunks: 2
    }),
    new CommonsChunkPlugin({
      name: 'c-commons',
      chunks: ['c', 'adminC']
    })
  ]
}
