webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./a": 2,
		"./a.js": 2,
		"./b": 3,
		"./b.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function() {
	    return 'This text was generated by template a';
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function() {
	    return 'This text was generated by template b';
	};

/***/ }
]);