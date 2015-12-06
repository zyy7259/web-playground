# config

path & publicPath
filename & chunkFilename
library & libraryTarget

## base

```javascript
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
```

## multi entry with chunk

```javascript
var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    entry: {
        pageA: './pageA',
        pageB: './pageB'
    },
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: 'js/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new CommonsChunkPlugin('commons.js')
    ]
};
```

## library

If you don't specify the library option, the library will be exported to the root namespace.

```javascript
var path = require('path');
module.exports = {
    entry: './index',
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: 'js/',
        filename: 'lib.js',
        chunkFilename: '[id].chunk.js',
        library: 'LIB',
        libraryTarget: 'umd'
    }
};
```

## library multi part

```javascript
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
        new CommonsChunkPlugin('util.js')
    ]
};
```

## library with external

This example demonstrates how to build a library with webpack that has dependencies to other libraries which should not be included in the compiled version.

```javascript
module.exports = {
    entry: './example',
    output: {
        filename: 'lib.js',
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
```

# 命令

## 直接运行

```javascript
webpack
```

## 增量编译

When using watch mode, webpack can cache unchanged modules and output files between compilations.

```javascript
webpack --watch
```

## 带上进度条和颜色

```javascript
webpack --progress --colors
```

## 开发环境服务器

- development server
    - The dev server uses webpack’s watch mode. It also prevents webpack from emitting the resulting files to disk. Instead it keeps and serves the resulting files from memory.

```javascript
npm install webpack-dev-server -g
webpack-dev-server --progress --colors
```

# loaders

## json

## bundle

- 插件`bundle`会创建一个`wrapper module`来按需加载`res.js`（即额外的`chunk`）
- 这个`wrapper module`返回一个`function`, 可以被用于异步接收`res.js`的`exports`

**示例代码**

```javascript
require('bundle!./res.js')(function(resJsExports) {
    console.log(resJsExports);
});
```
