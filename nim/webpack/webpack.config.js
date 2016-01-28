var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: 'js/',
        filename: 'output.js'
    },
    resolve: {
        root: [path.join(__dirname, '../js')]
    }
};
