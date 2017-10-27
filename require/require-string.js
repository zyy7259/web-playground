const requireFromString = require('require-from-string');

const result = requireFromString('module.exports = {key: "value"}');

console.log(result);
