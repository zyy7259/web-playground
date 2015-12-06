var common1 = require('./common1');
var common2 = require('./common2');

require.ensure('./piece1', function(require) {
    console.log(require('./piece1'));
});

module.exports = {
    name: 'a',
    common1: common1,
    common2: common2
};