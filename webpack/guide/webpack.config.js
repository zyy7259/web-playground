const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: ['lodash/now']
  },
  output: {
    publicPath: '/dist/',
    filename: isDevelopment ? '[name].js' : '[name].[chunkhash].js',
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
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    ...(isProduction ? [new UglifyJSPlugin()] : []),
    ...(isDevelopment
      ? [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin()
        ]
      : [])
  ],
  devtool: isDevelopment ? 'inline-source-map' : undefined,
  ...(isDevelopment
    ? {
        devServer: {
          contentBase: '.',
          hot: true,
          host: '0.0.0.0',
          overlay: true
        }
      }
    : {})
};
