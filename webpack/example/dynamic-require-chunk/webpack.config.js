var path = require('path');
module.exports = {
    entry: './example',
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: 'js/',
        filename: 'output.js',
        chunkFilename: '[id].chunk.js'
    }
};