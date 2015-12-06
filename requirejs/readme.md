# 如何运行

直接运行puer, 此命令会打开浏览器.

# 使用指南

- RequireJS 鼓励 modular code, 鼓励使用 module IDs (而不是 URLs for script tag)
- RequireJS 中的所有 deps 默认都是 scripts, 所以 module IDs 不用带 .js 后缀.  RequireJS 在将 module ID 解析为 path 的时候会自动加上后缀.
- RequireJS 的 module ID 有以下几种规则
    - baseUrl: 所有的代码都基于此目录. 
        - module ID 为 'foo' 的解析过程为 'foo' -> 'baseUrl/foo' -> 'baseUrl/foo.js'
        - baseUrl 配置方式如下
            - 可以使用 data-main 属性, 那么会自动解析 baseUrl; 也可以通过 baseUrl 来配置
                ```
                <!-- data-main attribute tells require.js to load /js/index.js after require.js loads. -->
                <!-- when require.js loads it will inject another script tag (with async attribute) for /js/index.js -->
                <!-- This sets the baseUrl to the "/js" directory, and loads a script (/js/index.js) that will have a module ID of 'index' -->
                <script data-main="/js/index" src="/node_modules/requirejs/require.js"></script>
                ```
            - 如果不使用 data-main 和 baseUrl, 那么 baseUrl 就是运行 RequireJS 的 HTML 文件所在的目录.
    - paths: 配置一个路径, 此路径 is relative to baseUrl, 可以是一个具体的文件, 也可以是目录
        - 比如说配置 jquery:'3rd/jquery-version.min', 那么 module ID 'jquery' 其实就是 '3rd/jquery-version.min', 然后配合 baseUrl 来决定最终的路径.
        - 比如说配置 bootstrap:'3rd/bootstrap', 那么 module ID 'bootstrap/js/bootstrap' 其实就是 '3rd/bootstrap/js/bootstrap', 然后配合 baseUrl 来决定最终的路径.
    - 除了 baseUrl+paths 的方式之外, 如果一个 module ID 有以下特征, 那么就会被当做 a regular URL that is relative to the document.
        - 以 '.js' 结尾
        - 以 '/' 开始
        - 包含 'https:' 或者 'http:'
- 如果页面只有一个 js 入口, 那么可以使用 data-main 来加载它, 在此入口文件里面设置 configuration options, 同时加载第一个模块
- 使用 define() 来定义模块
    - 定义模块有以下几种方式, 其中模块的定义可以是任意值, 只要该值是`函数可以返回的值`即可
        - 定义没有依赖的键值对, 直接将 object 传入 define(), 此 object 就是该模块的定义
            ```
            define({
                key: value
            });
            ```
        - 定义没有依赖的函数, 此函数返回的 object 就是该模块的定义
            ```
            define(function() {
                // do setup work
                return {
                    key: value
                };
            });
            ```
        - 定义有依赖的函数, 此函数返回的 object 就是该模块的定义
            ```
            define(['moduleIdOfDep1', 'moduleIdOfDep2'], function(dep1, dep2) {
                return {
                    key: value
                };
            });
            ```
        - 使用 CommonJS Wrapper 来定义模块, 该 Wrapper 使用 Function.prototype.toString() 来将函数转为字符串, 然后找到 require() 调用, 将对应的 moduleId 和 'require' 加到 dep array 里面, 后期可以使用 optimization tool 来将其优化为依赖数组的格式
            ```
            define(function(require, exports, module) {
                var a = require('a'),
                    b = reuqire('b');
                return function() {};
            });
            ```
            相当于
            ```
            define(['a', 'b', 'require'], function(a, b, require, exports, module) {
                return function() {};
            });
            ```
    - 注意事项
        - 一个 JS 文件只应该定义一个模块, 使用 optimization tool 来合并多个模块
        - dep array 可以使用 relative module ids, 它们是相对于引入它们的模块的 module ids, 而不是模块的 module paths.
            - RequireJS 按照 module ids (而不是 module paths) 来存储 modules.
            - relative module ids are resolved relative to the module ids making the reference
        - 循环依赖 circular dependencies
            - 循环依赖意味着你的代码需要重构了
            - 如果确实需要, 那么在模块定义里面使用 require() 来获取相关的模块
                ```
                define(['require', 'a'], function(require, a) {
                    // a will be null if a also asked for b.
                    return function() {
                        // 在模块定义里面使用 a
                        var a = require('a');
                    };
                });
                ```
            - 如果循环依赖的双方都使用 exports 来定义模块, 而且 exports 的是 object 而不是 function, 那么循环依赖就能正常解析
                ```
                define(function(require, exports, module) {
                    // 如果 a 也使用 exports 来定义模块, 那么此时 a 确实存在, 但是此时还不能使用 a 的属性, 只有在 b 的模块定义里面才能使用 a 的属性
                    var a = require('a');
                    exports.foo = function() {
                        // 在模块定义里面使用 a
                        return a.bar();
                    };
                });
                ```
                也可以这样写
                ```
                define(['a', 'exports'], function(a, exports) {
                    exports.foo = function() {
                        return a.bar();
                    };
                });
                ```
- 原理
    - RequireJS 使用 script tag (head.appendChild()) 来加载依赖
    - RequireJS 加载一个模块时, 会等它所有的依赖都加载完, 然后调用模块定义函数 (即传入 define() 的函数) 来加载该模块
- 配置选项
    - https://github.com/jrburke/requirejs/wiki/Patterns-for-separating-config-from-the-main-module
    - 在 require.js 加载后调用 require.config(options); , 一般在 data-main 里面调用, 同时加载页面的入口模块
        ```
        <script data-main="/js/config" src="/js/require.js"></script>
        // content of config.js
        require.config({
            baseUrl: '/js',
            enforceDefine: true,
            paths: {
                
            },
            deps: ['main'],
            callback: function() {
                // blabla
            }
        });
        ```
        或者
        ```
        require.config({});
        require(['main'], function() {
            // blabla
        });
        ```
    - 在 require.js 加载前定义一个 var require 变量, 不要用 window.require = {}, IE 下不正常
        ```
        var require = {
            baseUrl: '/js',
            enforceDefine: true,
            paths: {

            }
        };
        <script data-main="path/to/entry" src="/js/require.js"></script>
        ```
        或者
        ```
        var require = {
            baseUrl: '/js',
            enforceDefine: true,
            paths: {

            },
            deps: ['path/to/entry'],
            callback: function() {
                // blabla
            }
        };
        <script src="/js/require.js"></script>
        ```

# 配置选项指南

- baseUrl: the root path to use for all module lookups.
    - baseUrl is not used when loading plain .js files (indicated by a dependency string starting with a slash, has a protocol, or ends in .js).
    - If no baseUrl is explicitly set in the configuration, the default value will be the location of the HTML page that loads require.js. If a data-main attribute is used, that path will become the baseUrl.
    - The baseUrl can be a URL on a different domain. RequireJS script loading works across domains. The only restriction is on text content loaded by text! plugins: those paths should be on the same domain as the page, at least during development. The optimization tool will inline text! plugin resources so after using the optimization tool, you can use resources that reference text! plugin resources from another domain.
- paths: path mappings for module names not found directly under baseUrl.
    - The path settings are assumed to be relative to baseUrl, unless the paths setting starts with a "/" or has a URL protocol in it ("like http:").
    - The path that is used for a module name should not include an extension, since the path mapping could be for a directory. The path mapping code will automatically add the .js extension when mapping the module name to a path.
- shim: configure the dependencies, exports, and custom initialization for older, traditional 'browser globals' scripts that do not use define() to declare the dependencies and set a module value. 配置非 AMD/CommonJS 脚本
- enforceDefine: if set to true, an error will be thrown if a script loads that does not call define() or have a shim exports string value that can be checked.
    - if true, the main JS module must call define() instead of require() to load the deps. The main JS module can still call require/requirejs to set config values.
- config: pass configuration info to a module. ask for dep 'module' and call module.config().

# Handling Errors

- if you are in a project that you know uses define() to declare all of its modules, or it uses the shim config to specify string exports for anything that does not use define(), then if you set the enforceDefine config value to true, the loader can confirm if a script load by checking for the define() call or the existence of the shim's exports global value. So if you want to support Internet Explorer, catch load errors, and have modular code either through direct define() calls or shim config, always set enforceDefine to be true.
- If you do set enforceDefine: true, and you use data-main="" to load your main JS module, then that main JS module must call define() instead of require() to load the code it needs. The main JS module can still call require/requirejs to set config values, but for loading modules it should use define().
