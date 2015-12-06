var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    entry: {
        alpha: './alpha',
        beta: './beta'
    },
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: 'js/',
        filename: 'MyLibrary.[name].js',
        chunkFilename: '[id].chunk.js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    plugins: [
        new CommonsChunkPlugin('commons.js')
    ]
};