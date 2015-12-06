var path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: 'js/',
        filename: 'output.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            // bind file extensions to loaders
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.json$/, loader: 'json' }
        ]
    }
};
