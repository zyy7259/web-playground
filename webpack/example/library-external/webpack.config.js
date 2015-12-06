module.exports = {
    entry: './example',
    output: {
        filename: 'lib.js',
        // if you don't specify the library option, the library will be exported to the root namespace
        library: 'LIB',
        libraryTarget: 'umd'
    },
    externals: [
        'add',
        {
            subtract: {
                root: 'subtract',
                commonjs2: './subtract',
                commonjs: ['./math', 'subtract'],
                amd: 'subtract'
            }
        }
    ]
};