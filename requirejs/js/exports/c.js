define([
    './a',
    'exports'
], function(a, exports) {
    console.log('before c\'s definition, a is', a);
    exports.foo = 'c';
    exports.bar = function() {
        console.log('in c\'s definition, a is', a);
    };
});