var common1 = require('./common1');
var common2 = require('./common2');

require.ensure('./piece2', function(require) {
    console.log(require('./piece2'));
});

module.exports = {
    name: 'b',
    common1: common1,
    common2: common2
};