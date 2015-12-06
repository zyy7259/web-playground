({
    baseUrl: '../js',
    paths: {
        requireLib: '../node_modules/requirejs/require'
    },
    name: 'index',
    // 将 require.js 打包到输出文件中
    // include: 'requireLib',
    // excludeShallow: ['two'],
    // 不优化, 默认用 uglifyjs 压缩
    optimize: 'none',
    out: '../dist/js/index.js',
    // out: '../dist/js/index.min.js',
})
