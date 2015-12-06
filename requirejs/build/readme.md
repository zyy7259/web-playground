# 打包配置说明

项目入口对应的 JS 文件里面的配置在运行时会被浏览器加载, 这些配置不会被 optimizer 读取

the precedence for config: command line > build profile > mainConfigFile. In other words, the mainConfigFile configuration has the lowest priority.

## 路径相关

- file path is relative to the current file used to hold the build options, of if using command line arguments, the current working directory.
    - 用到 file path 的配置项包括: appDir, dir, mainConfigFile, out, wrap.startFile, wrap.endFile.
- baseUrl is relative to appDir. If no appDir, then baseUrl is relative to the current file, or if using command line arguments, the current working directory.
- paths 和 packages are relative to baseUrl, just as they are for require.js.

## module ID 相关

- 用到 module ID 的配置项包括: name, include, exclude, excludeShallow, deps.

## 复用 mainConfigFile

the first `requirejs({})`, `requirejs.config({})`, `require({})`, or `require.config({})`found in the file will be parsed out and used as part of the configuration options passed to the optimizer.

## 使用 include 和 paths 配置项来将 require.js 引入到打包后的文件, 这样页面只要加载一个 script 脚本就可以了, 不用额外加载一次 require.js

- 首先用 paths 将 require.js 映射为一个 module ID
- 然后用 include 的值设为这个 module ID

## excludeShallow

- 数组, 不打包数组里面的 module IDs 对应的模块, 这些 module 依赖的 deps 不受此规则影响

## 打包命令

- 打包 index.js
node node_modules/.bin/r.js -o build/index.js
