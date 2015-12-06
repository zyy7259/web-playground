define([
    './b',
    'require'
], function(b, require) {
    console.log('before a\'s definition, b is', b);
    return {
        foo: 'a',
        bar: function() {
            var b = require('./b');
            console.log('in a\'s definition, b is', b);
        }
    };
});