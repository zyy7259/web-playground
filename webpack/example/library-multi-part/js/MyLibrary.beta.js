(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["beta"] = factory();
	else
		root["beta"] = factory();
})(this, function() {
return webpackJsonp_name_([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var common1 = __webpack_require__(1);
	var common2 = __webpack_require__(2);

	__webpack_require__.e/* nsure */(3, function(require) {
	    console.log(__webpack_require__(4));
	});

	module.exports = {
	    name: 'b',
	    common1: common1,
	    common2: common2
	};

/***/ }
])
});
;