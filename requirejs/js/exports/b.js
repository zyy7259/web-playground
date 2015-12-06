define(function(require, exports, module) {
    var a = require( './a' );
    console.log('before b\'s definition, a is', a);
    exports.foo = 'b';
    exports.bar = function() {
        console.log('in b\'s definition, a is', a);
    };
});