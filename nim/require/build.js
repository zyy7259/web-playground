// node ../../node_modules/.bin/r.js -o build.js optimize=none
({
    baseUrl: './js',
    paths: {
        nim: '../../js'
    },
    deps: ['nim/Base_dev'],
    name: 'index',
    out: 'js/output.js'
})