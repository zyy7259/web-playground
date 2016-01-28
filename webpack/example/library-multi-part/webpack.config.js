var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = [
    {
        entry: {
            alpha: './alpha',
            beta: './beta'
        },
        output: {
            path: path.join(__dirname, 'js'),
            publicPath: 'js/',
            filename: 'MyLibrary.[name].js',
            library: '[name]',
            libraryTarget: 'umd',
            jsonpFunction: 'webpackJsonp_MyLibrary_'
        },
        plugins: [
            new CommonsChunkPlugin('alphabeta.js')
        ]
    },
    {
        entry: {
            foo: './foo',
            goo: './goo'
        },
        output: {
            path: path.join(__dirname, 'js'),
            publicPath: 'js/',
            filename: 'HisLibrary.[name].js',
            library: '[name]',
            libraryTarget: 'umd',
            jsonpFunction: 'webpackJsonp_HisLibrary_'
        },
        plugins: [
            new CommonsChunkPlugin('foogoo.js')
        ]
    }
];