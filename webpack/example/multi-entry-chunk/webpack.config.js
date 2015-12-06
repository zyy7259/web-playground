var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    entry: {
        pageA: './pageA',
        pageB: './pageB'
    },
    output: {
        path: path.join(__dirname, 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
        , publicPath: 'js/'
    },
    plugins: [
        new CommonsChunkPlugin('commons.js')
    ]
};