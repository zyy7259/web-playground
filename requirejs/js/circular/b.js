define([
    './a',
    'require'
], function(a, require) {
    console.log('before b\'s definition, a is', a);
    return {
        foo: 'b',
        bar: function() {
            var a = require('./a');
            console.log('in b\'s definition, a is', a);
        }
    };
});