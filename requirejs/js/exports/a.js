define([
    './b',
    './c',
    'exports'
], function(b, c, exports) {
    console.log('before a\'s definition, b is', b);
    console.log('before a\'s definition, c is', c);
    exports.foo = 'a';
    exports.bar = function() {
        console.log('in a\'s definition, b is', b);
        console.log('in a\'s definition, c is', c);
    };
});