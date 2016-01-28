(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["foo"] = factory();
	else
		root["foo"] = factory();
})(this, function() {
return webpackJsonp_HisLibrary_([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var common3 = __webpack_require__(1);
	var common4 = __webpack_require__(2);

	module.exports = {
	    name: 'foo',
	    common3: common3,
	    common4: common4
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = 'common3';

/***/ }
])
});
;