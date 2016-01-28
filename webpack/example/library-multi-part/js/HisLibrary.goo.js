(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["goo"] = factory();
	else
		root["goo"] = factory();
})(this, function() {
return webpackJsonp_HisLibrary_([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// var common3 = require('./common3');
	var common4 = __webpack_require__(2);

	module.exports = {
	    name: 'goo',
	    // common3: common3,
	    common4: common4
	};

/***/ }
])
});
;