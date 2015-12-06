define('one',[], function() {
    var testVar = 'bar';
    return {
        foo: 'one'
    };
});
define('two',[], function() {
    return {
        foo: 'two'
    };
});
define('three',[], function() {
    return {
        foo: 'three'
    };
});
define('index',[
    'one',
    'two',
    'three'
], function(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
});
