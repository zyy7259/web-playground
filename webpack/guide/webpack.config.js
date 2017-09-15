const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    overlay: true,
    progress: true
  }
};
