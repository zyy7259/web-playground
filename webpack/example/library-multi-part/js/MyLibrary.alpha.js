(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["alpha"] = factory();
	else
		root["alpha"] = factory();
})(this, function() {
return webpackJsonp_MyLibrary_([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var common1 = __webpack_require__(1);
	var common2 = __webpack_require__(2);

	module.exports = {
	    name: 'alpha',
	    common1: common1,
	    common2: common2
	};

/***/ }
])
});
;