
console.log(require("./content"));

// require("./style.css");

require.ensure('./piece1', function(require) {
    console.log(require('./piece1'));
    console.log(require('./piece2'));
});

console.log(require("./test"));
console.log(require("./test.json"));
console.log(require("!json!./test"));

console.log(require('./loader!./test1'));
