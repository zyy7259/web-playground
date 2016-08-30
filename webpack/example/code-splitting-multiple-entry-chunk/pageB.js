var common1 = require("./common1");
var common2 = require("./common2");
require.ensure(["./shared"], function(require) {
    var shared = require("./shared");
    shared("This is page B");
});