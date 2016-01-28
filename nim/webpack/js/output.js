/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var NIM = __webpack_require__(2);
	var Chatroom = __webpack_require__(3);
	console.log(NIM);
	console.log(Chatroom);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// install a JSONP callback for chunk loading
	/******/ 	var parentJsonpFunction = window["webpackJsonp_NIM_Web_SDK_v2_0_0_dev"];
	/******/ 	window["webpackJsonp_NIM_Web_SDK_v2_0_0_dev"] = function webpackJsonpCallback(chunkIds, moreModules) {
	/******/ 		// add "moreModules" to the modules object,
	/******/ 		// then flag all "chunkIds" as loaded and fire callback
	/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
	/******/ 		for(;i < chunkIds.length; i++) {
	/******/ 			chunkId = chunkIds[i];
	/******/ 			if(installedChunks[chunkId])
	/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
	/******/ 			installedChunks[chunkId] = 0;
	/******/ 		}
	/******/ 		for(moduleId in moreModules) {
	/******/ 			modules[moduleId] = moreModules[moduleId];
	/******/ 		}
	/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
	/******/ 		while(callbacks.length)
	/******/ 			callbacks.shift().call(null, __webpack_require__);
	/******/ 		if(moreModules[0]) {
	/******/ 			installedModules[0] = 0;
	/******/ 			return __webpack_require__(0);
	/******/ 		}
	/******/ 	};

	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// object to store loaded and loading chunks
	/******/ 	// "0" means "already loaded"
	/******/ 	// Array means "loading", array contains callbacks
	/******/ 	var installedChunks = {
	/******/ 		2:0
	/******/ 	};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}

	/******/ 	// This file contains only the entry chunk.
	/******/ 	// The chunk loading function for additional chunks
	/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
	/******/ 		// "0" is the signal for "already loaded"
	/******/ 		if(installedChunks[chunkId] === 0)
	/******/ 			return callback.call(null, __webpack_require__);

	/******/ 		// an array means "currently loading".
	/******/ 		if(installedChunks[chunkId] !== undefined) {
	/******/ 			installedChunks[chunkId].push(callback);
	/******/ 		} else {
	/******/ 			// start chunk loading
	/******/ 			installedChunks[chunkId] = [callback];
	/******/ 			var head = document.getElementsByTagName('head')[0];
	/******/ 			var script = document.createElement('script');
	/******/ 			script.type = 'text/javascript';
	/******/ 			script.charset = 'utf-8';
	/******/ 			script.async = true;

	/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"Chatroom","1":"NIM"}[chunkId]||chunkId) + "_dev.js";
	/******/ 			head.appendChild(script);
	/******/ 		}
	/******/ 	};

	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */,
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * https://github.com/es-shims/es5-shim
		 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
		 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
		 */

		// vim: ts=4 sts=4 sw=4 expandtab

		// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
		;

		// UMD (Universal Module Definition)
		// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
		(function (root, factory) {
		    'use strict';

		    /* global define, exports, module */
		    if (true) {
		        // AMD. Register as an anonymous module.
		        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    } else if (typeof exports === 'object') {
		        // Node. Does not work with strict CommonJS, but
		        // only CommonJS-like enviroments that support module.exports,
		        // like Node.
		        module.exports = factory();
		    } else {
		        // Browser globals (root is window)
		        root.returnExports = factory();
		    }
		}(this, function () {

		/**
		 * Brings an environment as close to ECMAScript 5 compliance
		 * as is possible with the facilities of erstwhile engines.
		 *
		 * Annotated ES5: http://es5.github.com/ (specific links below)
		 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
		 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
		 */

		// Shortcut to an often accessed properties, in order to avoid multiple
		// dereference that costs universally. This also holds a reference to known-good
		// functions.
		var $Array = Array;
		var ArrayPrototype = $Array.prototype;
		var $Object = Object;
		var ObjectPrototype = $Object.prototype;
		var FunctionPrototype = Function.prototype;
		var $String = String;
		var StringPrototype = $String.prototype;
		var $Number = Number;
		var NumberPrototype = $Number.prototype;
		var array_slice = ArrayPrototype.slice;
		var array_splice = ArrayPrototype.splice;
		var array_push = ArrayPrototype.push;
		var array_unshift = ArrayPrototype.unshift;
		var array_concat = ArrayPrototype.concat;
		var call = FunctionPrototype.call;
		var apply = FunctionPrototype.apply;
		var max = Math.max;
		var min = Math.min;

		// Having a toString local variable name breaks in Opera so use to_string.
		var to_string = ObjectPrototype.toString;

		var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
		var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
		var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
		var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };

		/* inlined from http://npmjs.com/define-properties */
		var supportsDescriptors = $Object.defineProperty && (function () {
		    try {
		        var obj = {};
		        $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
		        for (var _ in obj) { return false; }
		        return obj.x === obj;
		    } catch (e) { /* this is ES3 */
		        return false;
		    }
		}());
		var defineProperties = (function (has) {
		  // Define configurable, writable, and non-enumerable props
		  // if they don't exist.
		  var defineProperty;
		  if (supportsDescriptors) {
		      defineProperty = function (object, name, method, forceAssign) {
		          if (!forceAssign && (name in object)) { return; }
		          $Object.defineProperty(object, name, {
		              configurable: true,
		              enumerable: false,
		              writable: true,
		              value: method
		          });
		      };
		  } else {
		      defineProperty = function (object, name, method, forceAssign) {
		          if (!forceAssign && (name in object)) { return; }
		          object[name] = method;
		      };
		  }
		  return function defineProperties(object, map, forceAssign) {
		      for (var name in map) {
		          if (has.call(map, name)) {
		            defineProperty(object, name, map[name], forceAssign);
		          }
		      }
		  };
		}(ObjectPrototype.hasOwnProperty));

		//
		// Util
		// ======
		//

		/* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
		var isPrimitive = function isPrimitive(input) {
		    var type = typeof input;
		    return input === null || (type !== 'object' && type !== 'function');
		};

		var isActualNaN = $Number.isNaN || function (x) { return x !== x; };

		var ES = {
		    // ES5 9.4
		    // http://es5.github.com/#x9.4
		    // http://jsperf.com/to-integer
		    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
		    ToInteger: function ToInteger(num) {
		        var n = +num;
		        if (isActualNaN(n)) {
		            n = 0;
		        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
		            n = (n > 0 || -1) * Math.floor(Math.abs(n));
		        }
		        return n;
		    },

		    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
		    ToPrimitive: function ToPrimitive(input) {
		        var val, valueOf, toStr;
		        if (isPrimitive(input)) {
		            return input;
		        }
		        valueOf = input.valueOf;
		        if (isCallable(valueOf)) {
		            val = valueOf.call(input);
		            if (isPrimitive(val)) {
		                return val;
		            }
		        }
		        toStr = input.toString;
		        if (isCallable(toStr)) {
		            val = toStr.call(input);
		            if (isPrimitive(val)) {
		                return val;
		            }
		        }
		        throw new TypeError();
		    },

		    // ES5 9.9
		    // http://es5.github.com/#x9.9
		    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
		    ToObject: function (o) {
		        if (o == null) { // this matches both null and undefined
		            throw new TypeError("can't convert " + o + ' to object');
		        }
		        return $Object(o);
		    },

		    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
		    ToUint32: function ToUint32(x) {
		        return x >>> 0;
		    }
		};

		//
		// Function
		// ========
		//

		// ES-5 15.3.4.5
		// http://es5.github.com/#x15.3.4.5

		var Empty = function Empty() {};

		defineProperties(FunctionPrototype, {
		    bind: function bind(that) { // .length is 1
		        // 1. Let Target be the this value.
		        var target = this;
		        // 2. If IsCallable(Target) is false, throw a TypeError exception.
		        if (!isCallable(target)) {
		            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
		        }
		        // 3. Let A be a new (possibly empty) internal list of all of the
		        //   argument values provided after thisArg (arg1, arg2 etc), in order.
		        // XXX slicedArgs will stand in for "A" if used
		        var args = array_slice.call(arguments, 1); // for normal call
		        // 4. Let F be a new native ECMAScript object.
		        // 11. Set the [[Prototype]] internal property of F to the standard
		        //   built-in Function prototype object as specified in 15.3.3.1.
		        // 12. Set the [[Call]] internal property of F as described in
		        //   15.3.4.5.1.
		        // 13. Set the [[Construct]] internal property of F as described in
		        //   15.3.4.5.2.
		        // 14. Set the [[HasInstance]] internal property of F as described in
		        //   15.3.4.5.3.
		        var bound;
		        var binder = function () {

		            if (this instanceof bound) {
		                // 15.3.4.5.2 [[Construct]]
		                // When the [[Construct]] internal method of a function object,
		                // F that was created using the bind function is called with a
		                // list of arguments ExtraArgs, the following steps are taken:
		                // 1. Let target be the value of F's [[TargetFunction]]
		                //   internal property.
		                // 2. If target has no [[Construct]] internal method, a
		                //   TypeError exception is thrown.
		                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
		                //   property.
		                // 4. Let args be a new list containing the same values as the
		                //   list boundArgs in the same order followed by the same
		                //   values as the list ExtraArgs in the same order.
		                // 5. Return the result of calling the [[Construct]] internal
		                //   method of target providing args as the arguments.

		                var result = target.apply(
		                    this,
		                    array_concat.call(args, array_slice.call(arguments))
		                );
		                if ($Object(result) === result) {
		                    return result;
		                }
		                return this;

		            } else {
		                // 15.3.4.5.1 [[Call]]
		                // When the [[Call]] internal method of a function object, F,
		                // which was created using the bind function is called with a
		                // this value and a list of arguments ExtraArgs, the following
		                // steps are taken:
		                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
		                //   property.
		                // 2. Let boundThis be the value of F's [[BoundThis]] internal
		                //   property.
		                // 3. Let target be the value of F's [[TargetFunction]] internal
		                //   property.
		                // 4. Let args be a new list containing the same values as the
		                //   list boundArgs in the same order followed by the same
		                //   values as the list ExtraArgs in the same order.
		                // 5. Return the result of calling the [[Call]] internal method
		                //   of target providing boundThis as the this value and
		                //   providing args as the arguments.

		                // equiv: target.call(this, ...boundArgs, ...args)
		                return target.apply(
		                    that,
		                    array_concat.call(args, array_slice.call(arguments))
		                );

		            }

		        };

		        // 15. If the [[Class]] internal property of Target is "Function", then
		        //     a. Let L be the length property of Target minus the length of A.
		        //     b. Set the length own property of F to either 0 or L, whichever is
		        //       larger.
		        // 16. Else set the length own property of F to 0.

		        var boundLength = max(0, target.length - args.length);

		        // 17. Set the attributes of the length own property of F to the values
		        //   specified in 15.3.5.1.
		        var boundArgs = [];
		        for (var i = 0; i < boundLength; i++) {
		            array_push.call(boundArgs, '$' + i);
		        }

		        // XXX Build a dynamic function with desired amount of arguments is the only
		        // way to set the length property of a function.
		        // In environments where Content Security Policies enabled (Chrome extensions,
		        // for ex.) all use of eval or Function costructor throws an exception.
		        // However in all of these environments Function.prototype.bind exists
		        // and so this code will never be executed.
		        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

		        if (target.prototype) {
		            Empty.prototype = target.prototype;
		            bound.prototype = new Empty();
		            // Clean up dangling references.
		            Empty.prototype = null;
		        }

		        // TODO
		        // 18. Set the [[Extensible]] internal property of F to true.

		        // TODO
		        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
		        // 20. Call the [[DefineOwnProperty]] internal method of F with
		        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
		        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
		        //   false.
		        // 21. Call the [[DefineOwnProperty]] internal method of F with
		        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
		        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
		        //   and false.

		        // TODO
		        // NOTE Function objects created using Function.prototype.bind do not
		        // have a prototype property or the [[Code]], [[FormalParameters]], and
		        // [[Scope]] internal properties.
		        // XXX can't delete prototype in pure-js.

		        // 22. Return F.
		        return bound;
		    }
		});

		// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
		// use it in defining shortcuts.
		var owns = call.bind(ObjectPrototype.hasOwnProperty);
		var toStr = call.bind(ObjectPrototype.toString);
		var arraySlice = call.bind(array_slice);
		var arraySliceApply = apply.bind(array_slice);
		var strSlice = call.bind(StringPrototype.slice);
		var strSplit = call.bind(StringPrototype.split);
		var strIndexOf = call.bind(StringPrototype.indexOf);
		var push = call.bind(array_push);
		var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
		var arraySort = call.bind(ArrayPrototype.sort);

		//
		// Array
		// =====
		//

		var isArray = $Array.isArray || function isArray(obj) {
		    return toStr(obj) === '[object Array]';
		};

		// ES5 15.4.4.12
		// http://es5.github.com/#x15.4.4.13
		// Return len+argCount.
		// [bugfix, ielt8]
		// IE < 8 bug: [].unshift(0) === undefined but should be "1"
		var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
		defineProperties(ArrayPrototype, {
		    unshift: function () {
		        array_unshift.apply(this, arguments);
		        return this.length;
		    }
		}, hasUnshiftReturnValueBug);

		// ES5 15.4.3.2
		// http://es5.github.com/#x15.4.3.2
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
		defineProperties($Array, { isArray: isArray });

		// The IsCallable() check in the Array functions
		// has been replaced with a strict check on the
		// internal class of the object to trap cases where
		// the provided function was actually a regular
		// expression literal, which in V8 and
		// JavaScriptCore is a typeof "function".  Only in
		// V8 are regular expression literals permitted as
		// reduce parameters, so it is desirable in the
		// general case for the shim to match the more
		// strict and common behavior of rejecting regular
		// expressions.

		// ES5 15.4.4.18
		// http://es5.github.com/#x15.4.4.18
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

		// Check failure of by-index access of string characters (IE < 9)
		// and failure of `0 in boxedString` (Rhino)
		var boxedString = $Object('a');
		var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

		var properlyBoxesContext = function properlyBoxed(method) {
		    // Check node 0.6.21 bug where third parameter is not boxed
		    var properlyBoxesNonStrict = true;
		    var properlyBoxesStrict = true;
		    if (method) {
		        method.call('foo', function (_, __, context) {
		            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
		        });

		        method.call([1], function () {
		            'use strict';

		            properlyBoxesStrict = typeof this === 'string';
		        }, 'x');
		    }
		    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
		};

		defineProperties(ArrayPrototype, {
		    forEach: function forEach(callbackfn/*, thisArg*/) {
		        var object = ES.ToObject(this);
		        var self = splitString && isString(this) ? strSplit(this, '') : object;
		        var i = -1;
		        var length = ES.ToUint32(self.length);
		        var T;
		        if (arguments.length > 1) {
		          T = arguments[1];
		        }

		        // If no callback function or if callback is not a callable function
		        if (!isCallable(callbackfn)) {
		            throw new TypeError('Array.prototype.forEach callback must be a function');
		        }

		        while (++i < length) {
		            if (i in self) {
		                // Invoke the callback function with call, passing arguments:
		                // context, property value, property key, thisArg object
		                if (typeof T === 'undefined') {
		                    callbackfn(self[i], i, object);
		                } else {
		                    callbackfn.call(T, self[i], i, object);
		                }
		            }
		        }
		    }
		}, !properlyBoxesContext(ArrayPrototype.forEach));

		// ES5 15.4.4.19
		// http://es5.github.com/#x15.4.4.19
		// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
		defineProperties(ArrayPrototype, {
		    map: function map(callbackfn/*, thisArg*/) {
		        var object = ES.ToObject(this);
		        var self = splitString && isString(this) ? strSplit(this, '') : object;
		        var length = ES.ToUint32(self.length);
		        var result = $Array(length);
		        var T;
		        if (arguments.length > 1) {
		            T = arguments[1];
		        }

		        // If no callback function or if callback is not a callable function
		        if (!isCallable(callbackfn)) {
		            throw new TypeError('Array.prototype.map callback must be a function');
		        }

		        for (var i = 0; i < length; i++) {
		            if (i in self) {
		                if (typeof T === 'undefined') {
		                    result[i] = callbackfn(self[i], i, object);
		                } else {
		                    result[i] = callbackfn.call(T, self[i], i, object);
		                }
		            }
		        }
		        return result;
		    }
		}, !properlyBoxesContext(ArrayPrototype.map));

		// ES5 15.4.4.20
		// http://es5.github.com/#x15.4.4.20
		// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
		defineProperties(ArrayPrototype, {
		    filter: function filter(callbackfn/*, thisArg*/) {
		        var object = ES.ToObject(this);
		        var self = splitString && isString(this) ? strSplit(this, '') : object;
		        var length = ES.ToUint32(self.length);
		        var result = [];
		        var value;
		        var T;
		        if (arguments.length > 1) {
		            T = arguments[1];
		        }

		        // If no callback function or if callback is not a callable function
		        if (!isCallable(callbackfn)) {
		            throw new TypeError('Array.prototype.filter callback must be a function');
		        }

		        for (var i = 0; i < length; i++) {
		            if (i in self) {
		                value = self[i];
		                if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
		                    push(result, value);
		                }
		            }
		        }
		        return result;
		    }
		}, !properlyBoxesContext(ArrayPrototype.filter));

		// ES5 15.4.4.16
		// http://es5.github.com/#x15.4.4.16
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
		defineProperties(ArrayPrototype, {
		    every: function every(callbackfn/*, thisArg*/) {
		        var object = ES.ToObject(this);
		        var self = splitString && isString(this) ? strSplit(this, '') : object;
		        var length = ES.ToUint32(self.length);
		        var T;
		        if (arguments.length > 1) {
		            T = arguments[1];
		        }

		        // If no callback function or if callback is not a callable function
		        if (!isCallable(callbackfn)) {
		            throw new TypeError('Array.prototype.every callback must be a function');
		        }

		        for (var i = 0; i < length; i++) {
		            if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
		                return false;
		            }
		        }
		        return true;
		    }
		}, !properlyBoxesContext(ArrayPrototype.every));

		// ES5 15.4.4.17
		// http://es5.github.com/#x15.4.4.17
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
		defineProperties(ArrayPrototype, {
		    some: function some(callbackfn/*, thisArg */) {
		        var object = ES.ToObject(this);
		        var self = splitString && isString(this) ? strSplit(this, '') : object;
		        var length = ES.ToUint32(self.length);
		        var T;
		        if (arguments.length > 1) {
		            T = arguments[1];
		        }

		        // If no callback function or if callback is not a callable function
		        if (!isCallable(callbackfn)) {
		            throw new TypeError('Array.prototype.some callback must be a function');
		        }

		        for (var i = 0; i < length; i++) {
		            if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
		                return true;
		            }
		        }
		        return false;
		    }
		}, !properlyBoxesContext(ArrayPrototype.some));

		// ES5 15.4.4.21
		// http://es5.github.com/#x15.4.4.21
		// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
		var reduceCoercesToObject = false;
		if (ArrayPrototype.reduce) {
		    reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) { return list; }) === 'object';
		}
		defineProperties(ArrayPrototype, {
		    reduce: function reduce(callbackfn/*, initialValue*/) {
		        var object = ES.ToObject(this);
		        var self = splitString && isString(this) ? strSplit(this, '') : object;
		        var length = ES.ToUint32(self.length);

		        // If no callback function or if callback is not a callable function
		        if (!isCallable(callbackfn)) {
		            throw new TypeError('Array.prototype.reduce callback must be a function');
		        }

		        // no value to return if no initial value and an empty array
		        if (length === 0 && arguments.length === 1) {
		            throw new TypeError('reduce of empty array with no initial value');
		        }

		        var i = 0;
		        var result;
		        if (arguments.length >= 2) {
		            result = arguments[1];
		        } else {
		            do {
		                if (i in self) {
		                    result = self[i++];
		                    break;
		                }

		                // if array contains no values, no initial value to return
		                if (++i >= length) {
		                    throw new TypeError('reduce of empty array with no initial value');
		                }
		            } while (true);
		        }

		        for (; i < length; i++) {
		            if (i in self) {
		                result = callbackfn(result, self[i], i, object);
		            }
		        }

		        return result;
		    }
		}, !reduceCoercesToObject);

		// ES5 15.4.4.22
		// http://es5.github.com/#x15.4.4.22
		// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
		var reduceRightCoercesToObject = false;
		if (ArrayPrototype.reduceRight) {
		    reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) { return list; }) === 'object';
		}
		defineProperties(ArrayPrototype, {
		    reduceRight: function reduceRight(callbackfn/*, initial*/) {
		        var object = ES.ToObject(this);
		        var self = splitString && isString(this) ? strSplit(this, '') : object;
		        var length = ES.ToUint32(self.length);

		        // If no callback function or if callback is not a callable function
		        if (!isCallable(callbackfn)) {
		            throw new TypeError('Array.prototype.reduceRight callback must be a function');
		        }

		        // no value to return if no initial value, empty array
		        if (length === 0 && arguments.length === 1) {
		            throw new TypeError('reduceRight of empty array with no initial value');
		        }

		        var result;
		        var i = length - 1;
		        if (arguments.length >= 2) {
		            result = arguments[1];
		        } else {
		            do {
		                if (i in self) {
		                    result = self[i--];
		                    break;
		                }

		                // if array contains no values, no initial value to return
		                if (--i < 0) {
		                    throw new TypeError('reduceRight of empty array with no initial value');
		                }
		            } while (true);
		        }

		        if (i < 0) {
		            return result;
		        }

		        do {
		            if (i in self) {
		                result = callbackfn(result, self[i], i, object);
		            }
		        } while (i--);

		        return result;
		    }
		}, !reduceRightCoercesToObject);

		// ES5 15.4.4.14
		// http://es5.github.com/#x15.4.4.14
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
		var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
		defineProperties(ArrayPrototype, {
		    indexOf: function indexOf(searchElement/*, fromIndex */) {
		        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
		        var length = ES.ToUint32(self.length);

		        if (length === 0) {
		            return -1;
		        }

		        var i = 0;
		        if (arguments.length > 1) {
		            i = ES.ToInteger(arguments[1]);
		        }

		        // handle negative indices
		        i = i >= 0 ? i : max(0, length + i);
		        for (; i < length; i++) {
		            if (i in self && self[i] === searchElement) {
		                return i;
		            }
		        }
		        return -1;
		    }
		}, hasFirefox2IndexOfBug);

		// ES5 15.4.4.15
		// http://es5.github.com/#x15.4.4.15
		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
		var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
		defineProperties(ArrayPrototype, {
		    lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
		        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
		        var length = ES.ToUint32(self.length);

		        if (length === 0) {
		            return -1;
		        }
		        var i = length - 1;
		        if (arguments.length > 1) {
		            i = min(i, ES.ToInteger(arguments[1]));
		        }
		        // handle negative indices
		        i = i >= 0 ? i : length - Math.abs(i);
		        for (; i >= 0; i--) {
		            if (i in self && searchElement === self[i]) {
		                return i;
		            }
		        }
		        return -1;
		    }
		}, hasFirefox2LastIndexOfBug);

		// ES5 15.4.4.12
		// http://es5.github.com/#x15.4.4.12
		var spliceNoopReturnsEmptyArray = (function () {
		    var a = [1, 2];
		    var result = a.splice();
		    return a.length === 2 && isArray(result) && result.length === 0;
		}());
		defineProperties(ArrayPrototype, {
		    // Safari 5.0 bug where .splice() returns undefined
		    splice: function splice(start, deleteCount) {
		        if (arguments.length === 0) {
		            return [];
		        } else {
		            return array_splice.apply(this, arguments);
		        }
		    }
		}, !spliceNoopReturnsEmptyArray);

		var spliceWorksWithEmptyObject = (function () {
		    var obj = {};
		    ArrayPrototype.splice.call(obj, 0, 0, 1);
		    return obj.length === 1;
		}());
		defineProperties(ArrayPrototype, {
		    splice: function splice(start, deleteCount) {
		        if (arguments.length === 0) { return []; }
		        var args = arguments;
		        this.length = max(ES.ToInteger(this.length), 0);
		        if (arguments.length > 0 && typeof deleteCount !== 'number') {
		            args = arraySlice(arguments);
		            if (args.length < 2) {
		                push(args, this.length - start);
		            } else {
		                args[1] = ES.ToInteger(deleteCount);
		            }
		        }
		        return array_splice.apply(this, args);
		    }
		}, !spliceWorksWithEmptyObject);
		var spliceWorksWithLargeSparseArrays = (function () {
		    // Per https://github.com/es-shims/es5-shim/issues/295
		    // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
		    var arr = new $Array(1e5);
		    // note: the index MUST be 8 or larger or the test will false pass
		    arr[8] = 'x';
		    arr.splice(1, 1);
		    // note: this test must be defined *after* the indexOf shim
		    // per https://github.com/es-shims/es5-shim/issues/313
		    return arr.indexOf('x') === 7;
		}());
		var spliceWorksWithSmallSparseArrays = (function () {
		    // Per https://github.com/es-shims/es5-shim/issues/295
		    // Opera 12.15 breaks on this, no idea why.
		    var n = 256;
		    var arr = [];
		    arr[n] = 'a';
		    arr.splice(n + 1, 0, 'b');
		    return arr[n] === 'a';
		}());
		defineProperties(ArrayPrototype, {
		    splice: function splice(start, deleteCount) {
		        var O = ES.ToObject(this);
		        var A = [];
		        var len = ES.ToUint32(O.length);
		        var relativeStart = ES.ToInteger(start);
		        var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
		        var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

		        var k = 0;
		        var from;
		        while (k < actualDeleteCount) {
		            from = $String(actualStart + k);
		            if (owns(O, from)) {
		                A[k] = O[from];
		            }
		            k += 1;
		        }

		        var items = arraySlice(arguments, 2);
		        var itemCount = items.length;
		        var to;
		        if (itemCount < actualDeleteCount) {
		            k = actualStart;
		            while (k < (len - actualDeleteCount)) {
		                from = $String(k + actualDeleteCount);
		                to = $String(k + itemCount);
		                if (owns(O, from)) {
		                    O[to] = O[from];
		                } else {
		                    delete O[to];
		                }
		                k += 1;
		            }
		            k = len;
		            while (k > (len - actualDeleteCount + itemCount)) {
		                delete O[k - 1];
		                k -= 1;
		            }
		        } else if (itemCount > actualDeleteCount) {
		            k = len - actualDeleteCount;
		            while (k > actualStart) {
		                from = $String(k + actualDeleteCount - 1);
		                to = $String(k + itemCount - 1);
		                if (owns(O, from)) {
		                    O[to] = O[from];
		                } else {
		                    delete O[to];
		                }
		                k -= 1;
		            }
		        }
		        k = actualStart;
		        for (var i = 0; i < items.length; ++i) {
		            O[k] = items[i];
		            k += 1;
		        }
		        O.length = len - actualDeleteCount + itemCount;

		        return A;
		    }
		}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

		var originalJoin = ArrayPrototype.join;
		var hasStringJoinBug;
		try {
		    hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
		} catch (e) {
		    hasStringJoinBug = true;
		}
		if (hasStringJoinBug) {
		    defineProperties(ArrayPrototype, {
		        join: function join(separator) {
		            var sep = typeof separator === 'undefined' ? ',' : separator;
		            return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
		        }
		    }, hasStringJoinBug);
		}

		var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
		if (hasJoinUndefinedBug) {
		    defineProperties(ArrayPrototype, {
		        join: function join(separator) {
		            var sep = typeof separator === 'undefined' ? ',' : separator;
		            return originalJoin.call(this, sep);
		        }
		    }, hasJoinUndefinedBug);
		}

		var pushShim = function push(item) {
		    var O = ES.ToObject(this);
		    var n = ES.ToUint32(O.length);
		    var i = 0;
		    while (i < arguments.length) {
		        O[n + i] = arguments[i];
		        i += 1;
		    }
		    O.length = n + i;
		    return n + i;
		};

		var pushIsNotGeneric = (function () {
		    var obj = {};
		    var result = Array.prototype.push.call(obj, undefined);
		    return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
		}());
		defineProperties(ArrayPrototype, {
		    push: function push(item) {
		        if (isArray(this)) {
		            return array_push.apply(this, arguments);
		        }
		        return pushShim.apply(this, arguments);
		    }
		}, pushIsNotGeneric);

		// This fixes a very weird bug in Opera 10.6 when pushing `undefined
		var pushUndefinedIsWeird = (function () {
		    var arr = [];
		    var result = arr.push(undefined);
		    return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
		}());
		defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

		// ES5 15.2.3.14
		// http://es5.github.io/#x15.4.4.10
		// Fix boxed string bug
		defineProperties(ArrayPrototype, {
		    slice: function (start, end) {
		        var arr = isString(this) ? strSplit(this, '') : this;
		        return arraySliceApply(arr, arguments);
		    }
		}, splitString);

		var sortIgnoresNonFunctions = (function () {
		    try {
		        [1, 2].sort(null);
		        [1, 2].sort({});
		        return true;
		    } catch (e) { /**/ }
		    return false;
		}());
		var sortThrowsOnRegex = (function () {
		    // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
		    try {
		        [1, 2].sort(/a/);
		        return false;
		    } catch (e) { /**/ }
		    return true;
		}());
		var sortIgnoresUndefined = (function () {
		    // applies in IE 8, for one.
		    try {
		        [1, 2].sort(undefined);
		        return true;
		    } catch (e) { /**/ }
		    return false;
		}());
		defineProperties(ArrayPrototype, {
		    sort: function sort(compareFn) {
		        if (typeof compareFn === 'undefined') {
		            return arraySort(this);
		        }
		        if (!isCallable(compareFn)) {
		            throw new TypeError('Array.prototype.sort callback must be a function');
		        }
		        return arraySort(this, compareFn);
		    }
		}, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

		//
		// Object
		// ======
		//

		// ES5 15.2.3.14
		// http://es5.github.com/#x15.2.3.14

		// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
		var hasDontEnumBug = !({ 'toString': null }).propertyIsEnumerable('toString');
		var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
		var hasStringEnumBug = !owns('x', '0');
		var equalsConstructorPrototype = function (o) {
		    var ctor = o.constructor;
		    return ctor && ctor.prototype === o;
		};
		var blacklistedKeys = {
		    $window: true,
		    $console: true,
		    $parent: true,
		    $self: true,
		    $frame: true,
		    $frames: true,
		    $frameElement: true,
		    $webkitIndexedDB: true,
		    $webkitStorageInfo: true,
		    $external: true
		};
		var hasAutomationEqualityBug = (function () {
		    /* globals window */
		    if (typeof window === 'undefined') { return false; }
		    for (var k in window) {
		        try {
		            if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
		                equalsConstructorPrototype(window[k]);
		            }
		        } catch (e) {
		            return true;
		        }
		    }
		    return false;
		}());
		var equalsConstructorPrototypeIfNotBuggy = function (object) {
		    if (typeof window === 'undefined' || !hasAutomationEqualityBug) { return equalsConstructorPrototype(object); }
		    try {
		        return equalsConstructorPrototype(object);
		    } catch (e) {
		        return false;
		    }
		};
		var dontEnums = [
		    'toString',
		    'toLocaleString',
		    'valueOf',
		    'hasOwnProperty',
		    'isPrototypeOf',
		    'propertyIsEnumerable',
		    'constructor'
		];
		var dontEnumsLength = dontEnums.length;

		// taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
		// can be replaced with require('is-arguments') if we ever use a build process instead
		var isStandardArguments = function isArguments(value) {
		    return toStr(value) === '[object Arguments]';
		};
		var isLegacyArguments = function isArguments(value) {
		    return value !== null &&
		        typeof value === 'object' &&
		        typeof value.length === 'number' &&
		        value.length >= 0 &&
		        !isArray(value) &&
		        isCallable(value.callee);
		};
		var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

		defineProperties($Object, {
		    keys: function keys(object) {
		        var isFn = isCallable(object);
		        var isArgs = isArguments(object);
		        var isObject = object !== null && typeof object === 'object';
		        var isStr = isObject && isString(object);

		        if (!isObject && !isFn && !isArgs) {
		            throw new TypeError('Object.keys called on a non-object');
		        }

		        var theKeys = [];
		        var skipProto = hasProtoEnumBug && isFn;
		        if ((isStr && hasStringEnumBug) || isArgs) {
		            for (var i = 0; i < object.length; ++i) {
		                push(theKeys, $String(i));
		            }
		        }

		        if (!isArgs) {
		            for (var name in object) {
		                if (!(skipProto && name === 'prototype') && owns(object, name)) {
		                    push(theKeys, $String(name));
		                }
		            }
		        }

		        if (hasDontEnumBug) {
		            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
		            for (var j = 0; j < dontEnumsLength; j++) {
		                var dontEnum = dontEnums[j];
		                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
		                    push(theKeys, dontEnum);
		                }
		            }
		        }
		        return theKeys;
		    }
		});

		var keysWorksWithArguments = $Object.keys && (function () {
		    // Safari 5.0 bug
		    return $Object.keys(arguments).length === 2;
		}(1, 2));
		var keysHasArgumentsLengthBug = $Object.keys && (function () {
		    var argKeys = $Object.keys(arguments);
		    return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
		}(1));
		var originalKeys = $Object.keys;
		defineProperties($Object, {
		    keys: function keys(object) {
		        if (isArguments(object)) {
		            return originalKeys(arraySlice(object));
		        } else {
		            return originalKeys(object);
		        }
		    }
		}, !keysWorksWithArguments || keysHasArgumentsLengthBug);

		//
		// Date
		// ====
		//

		// ES5 15.9.5.43
		// http://es5.github.com/#x15.9.5.43
		// This function returns a String value represent the instance in time
		// represented by this Date object. The format of the String is the Date Time
		// string format defined in 15.9.1.15. All fields are present in the String.
		// The time zone is always UTC, denoted by the suffix Z. If the time value of
		// this object is not a finite Number a RangeError exception is thrown.
		var negativeDate = -62198755200000;
		var negativeYearString = '-000001';
		var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
		var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

		defineProperties(Date.prototype, {
		    toISOString: function toISOString() {
		        var result, length, value, year, month;
		        if (!isFinite(this)) {
		            throw new RangeError('Date.prototype.toISOString called on non-finite value.');
		        }

		        year = this.getUTCFullYear();

		        month = this.getUTCMonth();
		        // see https://github.com/es-shims/es5-shim/issues/111
		        year += Math.floor(month / 12);
		        month = (month % 12 + 12) % 12;

		        // the date time string format is specified in 15.9.1.15.
		        result = [month + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
		        year = (
		            (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
		            strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
		        );

		        length = result.length;
		        while (length--) {
		            value = result[length];
		            // pad months, days, hours, minutes, and seconds to have two
		            // digits.
		            if (value < 10) {
		                result[length] = '0' + value;
		            }
		        }
		        // pad milliseconds to have three digits.
		        return (
		            year + '-' + arraySlice(result, 0, 2).join('-') +
		            'T' + arraySlice(result, 2).join(':') + '.' +
		            strSlice('000' + this.getUTCMilliseconds(), -3) + 'Z'
		        );
		    }
		}, hasNegativeDateBug || hasSafari51DateBug);

		// ES5 15.9.5.44
		// http://es5.github.com/#x15.9.5.44
		// This function provides a String representation of a Date object for use by
		// JSON.stringify (15.12.3).
		var dateToJSONIsSupported = (function () {
		    try {
		        return Date.prototype.toJSON &&
		            new Date(NaN).toJSON() === null &&
		            new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
		            Date.prototype.toJSON.call({ // generic
		                toISOString: function () { return true; }
		            });
		    } catch (e) {
		        return false;
		    }
		}());
		if (!dateToJSONIsSupported) {
		    Date.prototype.toJSON = function toJSON(key) {
		        // When the toJSON method is called with argument key, the following
		        // steps are taken:

		        // 1.  Let O be the result of calling ToObject, giving it the this
		        // value as its argument.
		        // 2. Let tv be ES.ToPrimitive(O, hint Number).
		        var O = $Object(this);
		        var tv = ES.ToPrimitive(O);
		        // 3. If tv is a Number and is not finite, return null.
		        if (typeof tv === 'number' && !isFinite(tv)) {
		            return null;
		        }
		        // 4. Let toISO be the result of calling the [[Get]] internal method of
		        // O with argument "toISOString".
		        var toISO = O.toISOString;
		        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
		        if (!isCallable(toISO)) {
		            throw new TypeError('toISOString property is not callable');
		        }
		        // 6. Return the result of calling the [[Call]] internal method of
		        //  toISO with O as the this value and an empty argument list.
		        return toISO.call(O);

		        // NOTE 1 The argument is ignored.

		        // NOTE 2 The toJSON function is intentionally generic; it does not
		        // require that its this value be a Date object. Therefore, it can be
		        // transferred to other kinds of objects for use as a method. However,
		        // it does require that any such object have a toISOString method. An
		        // object is free to use the argument key to filter its
		        // stringification.
		    };
		}

		// ES5 15.9.4.2
		// http://es5.github.com/#x15.9.4.2
		// based on work shared by Daniel Friesen (dantman)
		// http://gist.github.com/303249
		var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
		var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
		var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
		if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
		    // XXX global assignment won't work in embeddings that use
		    // an alternate object for the context.
		    /* global Date: true */
		    /* eslint-disable no-undef */
		    var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
		    var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
		    Date = (function (NativeDate) {
		    /* eslint-enable no-undef */
		        // Date.length === 7
		        var DateShim = function Date(Y, M, D, h, m, s, ms) {
		            var length = arguments.length;
		            var date;
		            if (this instanceof NativeDate) {
		                var seconds = s;
		                var millis = ms;
		                if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
		                    // work around a Safari 8/9 bug where it treats the seconds as signed
		                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
		                    var sToShift = Math.floor(msToShift / 1e3);
		                    seconds += sToShift;
		                    millis -= sToShift * 1e3;
		                }
		                date = length === 1 && $String(Y) === Y ? // isString(Y)
		                    // We explicitly pass it through parse:
		                    new NativeDate(DateShim.parse(Y)) :
		                    // We have to manually make calls depending on argument
		                    // length here
		                    length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
		                    length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
		                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
		                    length >= 4 ? new NativeDate(Y, M, D, h) :
		                    length >= 3 ? new NativeDate(Y, M, D) :
		                    length >= 2 ? new NativeDate(Y, M) :
		                    length >= 1 ? new NativeDate(Y) :
		                                  new NativeDate();
		            } else {
		                date = NativeDate.apply(this, arguments);
		            }
		            if (!isPrimitive(date)) {
		              // Prevent mixups with unfixed Date object
		              defineProperties(date, { constructor: DateShim }, true);
		            }
		            return date;
		        };

		        // 15.9.1.15 Date Time String Format.
		        var isoDateExpression = new RegExp('^' +
		            '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
		                                      // 6-digit extended year
		            '(?:-(\\d{2})' + // optional month capture
		            '(?:-(\\d{2})' + // optional day capture
		            '(?:' + // capture hours:minutes:seconds.milliseconds
		                'T(\\d{2})' + // hours capture
		                ':(\\d{2})' + // minutes capture
		                '(?:' + // optional :seconds.milliseconds
		                    ':(\\d{2})' + // seconds capture
		                    '(?:(\\.\\d{1,}))?' + // milliseconds capture
		                ')?' +
		            '(' + // capture UTC offset component
		                'Z|' + // UTC capture
		                '(?:' + // offset specifier +/-hours:minutes
		                    '([-+])' + // sign capture
		                    '(\\d{2})' + // hours offset capture
		                    ':(\\d{2})' + // minutes offset capture
		                ')' +
		            ')?)?)?)?' +
		        '$');

		        var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

		        var dayFromMonth = function dayFromMonth(year, month) {
		            var t = month > 1 ? 1 : 0;
		            return (
		                months[month] +
		                Math.floor((year - 1969 + t) / 4) -
		                Math.floor((year - 1901 + t) / 100) +
		                Math.floor((year - 1601 + t) / 400) +
		                365 * (year - 1970)
		            );
		        };

		        var toUTC = function toUTC(t) {
		            var s = 0;
		            var ms = t;
		            if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
		                // work around a Safari 8/9 bug where it treats the seconds as signed
		                var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
		                var sToShift = Math.floor(msToShift / 1e3);
		                s += sToShift;
		                ms -= sToShift * 1e3;
		            }
		            return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
		        };

		        // Copy any custom methods a 3rd party library may have added
		        for (var key in NativeDate) {
		            if (owns(NativeDate, key)) {
		                DateShim[key] = NativeDate[key];
		            }
		        }

		        // Copy "native" methods explicitly; they may be non-enumerable
		        defineProperties(DateShim, {
		            now: NativeDate.now,
		            UTC: NativeDate.UTC
		        }, true);
		        DateShim.prototype = NativeDate.prototype;
		        defineProperties(DateShim.prototype, {
		            constructor: DateShim
		        }, true);

		        // Upgrade Date.parse to handle simplified ISO 8601 strings
		        var parseShim = function parse(string) {
		            var match = isoDateExpression.exec(string);
		            if (match) {
		                // parse months, days, hours, minutes, seconds, and milliseconds
		                // provide default values if necessary
		                // parse the UTC offset component
		                var year = $Number(match[1]),
		                    month = $Number(match[2] || 1) - 1,
		                    day = $Number(match[3] || 1) - 1,
		                    hour = $Number(match[4] || 0),
		                    minute = $Number(match[5] || 0),
		                    second = $Number(match[6] || 0),
		                    millisecond = Math.floor($Number(match[7] || 0) * 1000),
		                    // When time zone is missed, local offset should be used
		                    // (ES 5.1 bug)
		                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
		                    isLocalTime = Boolean(match[4] && !match[8]),
		                    signOffset = match[9] === '-' ? 1 : -1,
		                    hourOffset = $Number(match[10] || 0),
		                    minuteOffset = $Number(match[11] || 0),
		                    result;
		                var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
		                if (
		                    hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
		                    minute < 60 && second < 60 && millisecond < 1000 &&
		                    month > -1 && month < 12 && hourOffset < 24 &&
		                    minuteOffset < 60 && // detect invalid offsets
		                    day > -1 &&
		                    day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
		                ) {
		                    result = (
		                        (dayFromMonth(year, month) + day) * 24 +
		                        hour +
		                        hourOffset * signOffset
		                    ) * 60;
		                    result = (
		                        (result + minute + minuteOffset * signOffset) * 60 +
		                        second
		                    ) * 1000 + millisecond;
		                    if (isLocalTime) {
		                        result = toUTC(result);
		                    }
		                    if (-8.64e15 <= result && result <= 8.64e15) {
		                        return result;
		                    }
		                }
		                return NaN;
		            }
		            return NativeDate.parse.apply(this, arguments);
		        };
		        defineProperties(DateShim, { parse: parseShim });

		        return DateShim;
		    }(Date));
		    /* global Date: false */
		}

		// ES5 15.9.4.4
		// http://es5.github.com/#x15.9.4.4
		if (!Date.now) {
		    Date.now = function now() {
		        return new Date().getTime();
		    };
		}

		//
		// Number
		// ======
		//

		// ES5.1 15.7.4.5
		// http://es5.github.com/#x15.7.4.5
		var hasToFixedBugs = NumberPrototype.toFixed && (
		  (0.00008).toFixed(3) !== '0.000' ||
		  (0.9).toFixed(0) !== '1' ||
		  (1.255).toFixed(2) !== '1.25' ||
		  (1000000000000000128).toFixed(0) !== '1000000000000000128'
		);

		var toFixedHelpers = {
		  base: 1e7,
		  size: 6,
		  data: [0, 0, 0, 0, 0, 0],
		  multiply: function multiply(n, c) {
		      var i = -1;
		      var c2 = c;
		      while (++i < toFixedHelpers.size) {
		          c2 += n * toFixedHelpers.data[i];
		          toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
		          c2 = Math.floor(c2 / toFixedHelpers.base);
		      }
		  },
		  divide: function divide(n) {
		      var i = toFixedHelpers.size, c = 0;
		      while (--i >= 0) {
		          c += toFixedHelpers.data[i];
		          toFixedHelpers.data[i] = Math.floor(c / n);
		          c = (c % n) * toFixedHelpers.base;
		      }
		  },
		  numToString: function numToString() {
		      var i = toFixedHelpers.size;
		      var s = '';
		      while (--i >= 0) {
		          if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
		              var t = $String(toFixedHelpers.data[i]);
		              if (s === '') {
		                  s = t;
		              } else {
		                  s += strSlice('0000000', 0, 7 - t.length) + t;
		              }
		          }
		      }
		      return s;
		  },
		  pow: function pow(x, n, acc) {
		      return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
		  },
		  log: function log(x) {
		      var n = 0;
		      var x2 = x;
		      while (x2 >= 4096) {
		          n += 12;
		          x2 /= 4096;
		      }
		      while (x2 >= 2) {
		          n += 1;
		          x2 /= 2;
		      }
		      return n;
		  }
		};

		var toFixedShim = function toFixed(fractionDigits) {
		    var f, x, s, m, e, z, j, k;

		    // Test for NaN and round fractionDigits down
		    f = $Number(fractionDigits);
		    f = isActualNaN(f) ? 0 : Math.floor(f);

		    if (f < 0 || f > 20) {
		        throw new RangeError('Number.toFixed called with invalid number of decimals');
		    }

		    x = $Number(this);

		    if (isActualNaN(x)) {
		        return 'NaN';
		    }

		    // If it is too big or small, return the string value of the number
		    if (x <= -1e21 || x >= 1e21) {
		        return $String(x);
		    }

		    s = '';

		    if (x < 0) {
		        s = '-';
		        x = -x;
		    }

		    m = '0';

		    if (x > 1e-21) {
		        // 1e-21 < x < 1e21
		        // -70 < log2(x) < 70
		        e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
		        z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
		        z *= 0x10000000000000; // Math.pow(2, 52);
		        e = 52 - e;

		        // -18 < e < 122
		        // x = z / 2 ^ e
		        if (e > 0) {
		            toFixedHelpers.multiply(0, z);
		            j = f;

		            while (j >= 7) {
		                toFixedHelpers.multiply(1e7, 0);
		                j -= 7;
		            }

		            toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
		            j = e - 1;

		            while (j >= 23) {
		                toFixedHelpers.divide(1 << 23);
		                j -= 23;
		            }

		            toFixedHelpers.divide(1 << j);
		            toFixedHelpers.multiply(1, 1);
		            toFixedHelpers.divide(2);
		            m = toFixedHelpers.numToString();
		        } else {
		            toFixedHelpers.multiply(0, z);
		            toFixedHelpers.multiply(1 << (-e), 0);
		            m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
		        }
		    }

		    if (f > 0) {
		        k = m.length;

		        if (k <= f) {
		            m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
		        } else {
		            m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
		        }
		    } else {
		        m = s + m;
		    }

		    return m;
		};
		defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

		var hasToPrecisionUndefinedBug = (function () {
		    try {
		        return 1.0.toPrecision(undefined) === '1';
		    } catch (e) {
		        return true;
		    }
		}());
		var originalToPrecision = NumberPrototype.toPrecision;
		defineProperties(NumberPrototype, {
		    toPrecision: function toPrecision(precision) {
		        return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
		    }
		}, hasToPrecisionUndefinedBug);

		//
		// String
		// ======
		//

		// ES5 15.5.4.14
		// http://es5.github.com/#x15.5.4.14

		// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
		// Many browsers do not split properly with regular expressions or they
		// do not perform the split correctly under obscure conditions.
		// See http://blog.stevenlevithan.com/archives/cross-browser-split
		// I've tested in many browsers and this seems to cover the deviant ones:
		//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
		//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
		//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
		//       [undefined, "t", undefined, "e", ...]
		//    ''.split(/.?/) should be [], not [""]
		//    '.'.split(/()()/) should be ["."], not ["", "", "."]

		if (
		    'ab'.split(/(?:ab)*/).length !== 2 ||
		    '.'.split(/(.?)(.?)/).length !== 4 ||
		    'tesst'.split(/(s)*/)[1] === 't' ||
		    'test'.split(/(?:)/, -1).length !== 4 ||
		    ''.split(/.?/).length ||
		    '.'.split(/()()/).length > 1
		) {
		    (function () {
		        var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
		        var maxSafe32BitInt = Math.pow(2, 32) - 1;

		        StringPrototype.split = function (separator, limit) {
		            var string = String(this);
		            if (typeof separator === 'undefined' && limit === 0) {
		                return [];
		            }

		            // If `separator` is not a regex, use native split
		            if (!isRegex(separator)) {
		                return strSplit(this, separator, limit);
		            }

		            var output = [];
		            var flags = (separator.ignoreCase ? 'i' : '') +
		                        (separator.multiline ? 'm' : '') +
		                        (separator.unicode ? 'u' : '') + // in ES6
		                        (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
		                lastLastIndex = 0,
		                // Make `global` and avoid `lastIndex` issues by working with a copy
		                separator2, match, lastIndex, lastLength;
		            var separatorCopy = new RegExp(separator.source, flags + 'g');
		            if (!compliantExecNpcg) {
		                // Doesn't need flags gy, but they don't hurt
		                separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
		            }
		            /* Values for `limit`, per the spec:
		             * If undefined: 4294967295 // maxSafe32BitInt
		             * If 0, Infinity, or NaN: 0
		             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
		             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
		             * If other: Type-convert, then use the above rules
		             */
		            var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
		            match = separatorCopy.exec(string);
		            while (match) {
		                // `separatorCopy.lastIndex` is not reliable cross-browser
		                lastIndex = match.index + match[0].length;
		                if (lastIndex > lastLastIndex) {
		                    push(output, strSlice(string, lastLastIndex, match.index));
		                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
		                    // nonparticipating capturing groups
		                    if (!compliantExecNpcg && match.length > 1) {
		                        /* eslint-disable no-loop-func */
		                        match[0].replace(separator2, function () {
		                            for (var i = 1; i < arguments.length - 2; i++) {
		                                if (typeof arguments[i] === 'undefined') {
		                                    match[i] = void 0;
		                                }
		                            }
		                        });
		                        /* eslint-enable no-loop-func */
		                    }
		                    if (match.length > 1 && match.index < string.length) {
		                        array_push.apply(output, arraySlice(match, 1));
		                    }
		                    lastLength = match[0].length;
		                    lastLastIndex = lastIndex;
		                    if (output.length >= splitLimit) {
		                        break;
		                    }
		                }
		                if (separatorCopy.lastIndex === match.index) {
		                    separatorCopy.lastIndex++; // Avoid an infinite loop
		                }
		                match = separatorCopy.exec(string);
		            }
		            if (lastLastIndex === string.length) {
		                if (lastLength || !separatorCopy.test('')) {
		                    push(output, '');
		                }
		            } else {
		                push(output, strSlice(string, lastLastIndex));
		            }
		            return output.length > splitLimit ? strSlice(output, 0, splitLimit) : output;
		        };
		    }());

		// [bugfix, chrome]
		// If separator is undefined, then the result array contains just one String,
		// which is the this value (converted to a String). If limit is not undefined,
		// then the output array is truncated so that it contains no more than limit
		// elements.
		// "0".split(undefined, 0) -> []
		} else if ('0'.split(void 0, 0).length) {
		    StringPrototype.split = function split(separator, limit) {
		        if (typeof separator === 'undefined' && limit === 0) { return []; }
		        return strSplit(this, separator, limit);
		    };
		}

		var str_replace = StringPrototype.replace;
		var replaceReportsGroupsCorrectly = (function () {
		    var groups = [];
		    'x'.replace(/x(.)?/g, function (match, group) {
		        push(groups, group);
		    });
		    return groups.length === 1 && typeof groups[0] === 'undefined';
		}());

		if (!replaceReportsGroupsCorrectly) {
		    StringPrototype.replace = function replace(searchValue, replaceValue) {
		        var isFn = isCallable(replaceValue);
		        var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
		        if (!isFn || !hasCapturingGroups) {
		            return str_replace.call(this, searchValue, replaceValue);
		        } else {
		            var wrappedReplaceValue = function (match) {
		                var length = arguments.length;
		                var originalLastIndex = searchValue.lastIndex;
		                searchValue.lastIndex = 0;
		                var args = searchValue.exec(match) || [];
		                searchValue.lastIndex = originalLastIndex;
		                push(args, arguments[length - 2], arguments[length - 1]);
		                return replaceValue.apply(this, args);
		            };
		            return str_replace.call(this, searchValue, wrappedReplaceValue);
		        }
		    };
		}

		// ECMA-262, 3rd B.2.3
		// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
		// non-normative section suggesting uniform semantics and it should be
		// normalized across all browsers
		// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
		var string_substr = StringPrototype.substr;
		var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
		defineProperties(StringPrototype, {
		    substr: function substr(start, length) {
		        var normalizedStart = start;
		        if (start < 0) {
		            normalizedStart = max(this.length + start, 0);
		        }
		        return string_substr.call(this, normalizedStart, length);
		    }
		}, hasNegativeSubstrBug);

		// ES5 15.5.4.20
		// whitespace from: http://es5.github.io/#x15.5.4.20
		var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
		    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
		    '\u2029\uFEFF';
		var zeroWidth = '\u200b';
		var wsRegexChars = '[' + ws + ']';
		var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
		var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
		var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
		defineProperties(StringPrototype, {
		    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
		    // http://perfectionkills.com/whitespace-deviations/
		    trim: function trim() {
		        if (typeof this === 'undefined' || this === null) {
		            throw new TypeError("can't convert " + this + ' to object');
		        }
		        return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
		    }
		}, hasTrimWhitespaceBug);

		var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
		defineProperties(StringPrototype, {
		    lastIndexOf: function lastIndexOf(searchString) {
		        if (typeof this === 'undefined' || this === null) {
		            throw new TypeError("can't convert " + this + ' to object');
		        }
		        var S = $String(this);
		        var searchStr = $String(searchString);
		        var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
		        var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
		        var start = min(max(pos, 0), S.length);
		        var searchLen = searchStr.length;
		        var k = start + searchLen;
		        while (k > 0) {
		            k = max(0, k - searchLen);
		            var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
		            if (index !== -1) {
		                return k + index;
		            }
		        }
		        return -1;
		    }
		}, hasLastIndexBug);

		var originalLastIndexOf = StringPrototype.lastIndexOf;
		defineProperties(StringPrototype, {
		    lastIndexOf: function lastIndexOf(searchString) {
		        return originalLastIndexOf.apply(this, arguments);
		    }
		}, StringPrototype.lastIndexOf.length !== 1);

		// ES-5 15.1.2.2
		/* eslint-disable radix */
		if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
		/* eslint-enable radix */
		    /* global parseInt: true */
		    parseInt = (function (origParseInt) {
		        var hexRegex = /^[\-+]?0[xX]/;
		        return function parseInt(str, radix) {
		            var string = $String(str).trim();
		            var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
		            return origParseInt(string, defaultedRadix);
		        };
		    }(parseInt));
		}

		if (String(new RangeError('test')) !== 'RangeError: test') {
		    var errorToStringShim = function toString() {
		        if (typeof this === 'undefined' || this === null) {
		            throw new TypeError("can't convert " + this + ' to object');
		        }
		        var name = this.name;
		        if (typeof name === 'undefined') {
		            name = 'Error';
		        } else if (typeof name !== 'string') {
		            name = $String(name);
		        }
		        var msg = this.message;
		        if (typeof msg === 'undefined') {
		            msg = '';
		        } else if (typeof msg !== 'string') {
		            msg = $String(msg);
		        }
		        if (!name) {
		            return msg;
		        }
		        if (!msg) {
		            return name;
		        }
		        return name + ': ' + msg;
		    };
		    // can't use defineProperties here because of toString enumeration issue in IE <= 8
		    Error.prototype.toString = errorToStringShim;
		}

		if (supportsDescriptors) {
		    var ensureNonEnumerable = function (obj, prop) {
		        if (isEnum(obj, prop)) {
		            var desc = Object.getOwnPropertyDescriptor(obj, prop);
		            desc.enumerable = false;
		            Object.defineProperty(obj, prop, desc);
		        }
		    };
		    ensureNonEnumerable(Error.prototype, 'message');
		    if (Error.prototype.message !== '') {
		      Error.prototype.message = '';
		    }
		    ensureNonEnumerable(Error.prototype, 'name');
		}

		if (String(/a/mig) !== '/a/gim') {
		    var regexToString = function toString() {
		        var str = '/' + this.source + '/';
		        if (this.global) {
		            str += 'g';
		        }
		        if (this.ignoreCase) {
		            str += 'i';
		        }
		        if (this.multiline) {
		            str += 'm';
		        }
		        return str;
		    };
		    // can't use defineProperties here because of toString enumeration issue in IE <= 8
		    RegExp.prototype.toString = regexToString;
		}

		}));


	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * https://github.com/es-shims/es5-shim
		 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
		 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
		 */

		// vim: ts=4 sts=4 sw=4 expandtab

		// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
		;

		// UMD (Universal Module Definition)
		// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
		(function (root, factory) {
		    'use strict';

		    /* global define, exports, module */
		    if (true) {
		        // AMD. Register as an anonymous module.
		        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    } else if (typeof exports === 'object') {
		        // Node. Does not work with strict CommonJS, but
		        // only CommonJS-like enviroments that support module.exports,
		        // like Node.
		        module.exports = factory();
		    } else {
		        // Browser globals (root is window)
		        root.returnExports = factory();
		  }
		}(this, function () {

		var call = Function.call;
		var prototypeOfObject = Object.prototype;
		var owns = call.bind(prototypeOfObject.hasOwnProperty);
		var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
		var toStr = call.bind(prototypeOfObject.toString);

		// If JS engine supports accessors creating shortcuts.
		var defineGetter;
		var defineSetter;
		var lookupGetter;
		var lookupSetter;
		var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
		if (supportsAccessors) {
		    /* eslint-disable no-underscore-dangle */
		    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
		    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
		    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
		    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
		    /* eslint-enable no-underscore-dangle */
		}

		// ES5 15.2.3.2
		// http://es5.github.com/#x15.2.3.2
		if (!Object.getPrototypeOf) {
		    // https://github.com/es-shims/es5-shim/issues#issue/2
		    // http://ejohn.org/blog/objectgetprototypeof/
		    // recommended by fschaefer on github
		    //
		    // sure, and webreflection says ^_^
		    // ... this will nerever possibly return null
		    // ... Opera Mini breaks here with infinite loops
		    Object.getPrototypeOf = function getPrototypeOf(object) {
		        /* eslint-disable no-proto */
		        var proto = object.__proto__;
		        /* eslint-enable no-proto */
		        if (proto || proto === null) {
		            return proto;
		        } else if (toStr(object.constructor) === '[object Function]') {
		            return object.constructor.prototype;
		        } else if (object instanceof Object) {
		          return prototypeOfObject;
		        } else {
		          // Correctly return null for Objects created with `Object.create(null)`
		          // (shammed or native) or `{ __proto__: null}`.  Also returns null for
		          // cross-realm objects on browsers that lack `__proto__` support (like
		          // IE <11), but that's the best we can do.
		          return null;
		        }
		    };
		}

		// ES5 15.2.3.3
		// http://es5.github.com/#x15.2.3.3

		var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
		    try {
		        object.sentinel = 0;
		        return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
		    } catch (exception) {
		        return false;
		    }
		};

		// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
		if (Object.defineProperty) {
		    var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
		    var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
		    doesGetOwnPropertyDescriptorWork(document.createElement('div'));
		    if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
		        var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
		    }
		}

		if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
		    var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';

		    /* eslint-disable no-proto */
		    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
		        if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
		            throw new TypeError(ERR_NON_OBJECT + object);
		        }

		        // make a valiant attempt to use the real getOwnPropertyDescriptor
		        // for I8's DOM elements.
		        if (getOwnPropertyDescriptorFallback) {
		            try {
		                return getOwnPropertyDescriptorFallback.call(Object, object, property);
		            } catch (exception) {
		                // try the shim if the real one doesn't work
		            }
		        }

		        var descriptor;

		        // If object does not owns property return undefined immediately.
		        if (!owns(object, property)) {
		            return descriptor;
		        }

		        // If object has a property then it's for sure `configurable`, and
		        // probably `enumerable`. Detect enumerability though.
		        descriptor = {
		            enumerable: isEnumerable(object, property),
		            configurable: true
		        };

		        // If JS engine supports accessor properties then property may be a
		        // getter or setter.
		        if (supportsAccessors) {
		            // Unfortunately `__lookupGetter__` will return a getter even
		            // if object has own non getter property along with a same named
		            // inherited getter. To avoid misbehavior we temporary remove
		            // `__proto__` so that `__lookupGetter__` will return getter only
		            // if it's owned by an object.
		            var prototype = object.__proto__;
		            var notPrototypeOfObject = object !== prototypeOfObject;
		            // avoid recursion problem, breaking in Opera Mini when
		            // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
		            // or any other Object.prototype accessor
		            if (notPrototypeOfObject) {
		                object.__proto__ = prototypeOfObject;
		            }

		            var getter = lookupGetter(object, property);
		            var setter = lookupSetter(object, property);

		            if (notPrototypeOfObject) {
		                // Once we have getter and setter we can put values back.
		                object.__proto__ = prototype;
		            }

		            if (getter || setter) {
		                if (getter) {
		                    descriptor.get = getter;
		                }
		                if (setter) {
		                    descriptor.set = setter;
		                }
		                // If it was accessor property we're done and return here
		                // in order to avoid adding `value` to the descriptor.
		                return descriptor;
		            }
		        }

		        // If we got this far we know that object has an own property that is
		        // not an accessor so we set it as a value and return descriptor.
		        descriptor.value = object[property];
		        descriptor.writable = true;
		        return descriptor;
		    };
		    /* eslint-enable no-proto */
		}

		// ES5 15.2.3.4
		// http://es5.github.com/#x15.2.3.4
		if (!Object.getOwnPropertyNames) {
		    Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
		        return Object.keys(object);
		    };
		}

		// ES5 15.2.3.5
		// http://es5.github.com/#x15.2.3.5
		if (!Object.create) {

		    // Contributed by Brandon Benvie, October, 2012
		    var createEmpty;
		    var supportsProto = !({ __proto__: null } instanceof Object);
		                        // the following produces false positives
		                        // in Opera Mini => not a reliable check
		                        // Object.prototype.__proto__ === null

		    // Check for document.domain and active x support
		    // No need to use active x approach when document.domain is not set
		    // see https://github.com/es-shims/es5-shim/issues/150
		    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
		    /* global ActiveXObject */
		    var shouldUseActiveX = function shouldUseActiveX() {
		        // return early if document.domain not set
		        if (!document.domain) {
		            return false;
		        }

		        try {
		            return !!new ActiveXObject('htmlfile');
		        } catch (exception) {
		            return false;
		        }
		    };

		    // This supports IE8 when document.domain is used
		    // see https://github.com/es-shims/es5-shim/issues/150
		    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
		    var getEmptyViaActiveX = function getEmptyViaActiveX() {
		        var empty;
		        var xDoc;

		        xDoc = new ActiveXObject('htmlfile');

		        xDoc.write('<script><\/script>');
		        xDoc.close();

		        empty = xDoc.parentWindow.Object.prototype;
		        xDoc = null;

		        return empty;
		    };

		    // The original implementation using an iframe
		    // before the activex approach was added
		    // see https://github.com/es-shims/es5-shim/issues/150
		    var getEmptyViaIFrame = function getEmptyViaIFrame() {
		        var iframe = document.createElement('iframe');
		        var parent = document.body || document.documentElement;
		        var empty;

		        iframe.style.display = 'none';
		        parent.appendChild(iframe);
		        /* eslint-disable no-script-url */
		        iframe.src = 'javascript:';
		        /* eslint-enable no-script-url */

		        empty = iframe.contentWindow.Object.prototype;
		        parent.removeChild(iframe);
		        iframe = null;

		        return empty;
		    };

		    /* global document */
		    if (supportsProto || typeof document === 'undefined') {
		        createEmpty = function () {
		            return { __proto__: null };
		        };
		    } else {
		        // In old IE __proto__ can't be used to manually set `null`, nor does
		        // any other method exist to make an object that inherits from nothing,
		        // aside from Object.prototype itself. Instead, create a new global
		        // object and *steal* its Object.prototype and strip it bare. This is
		        // used as the prototype to create nullary objects.
		        createEmpty = function () {
		            // Determine which approach to use
		            // see https://github.com/es-shims/es5-shim/issues/150
		            var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();

		            delete empty.constructor;
		            delete empty.hasOwnProperty;
		            delete empty.propertyIsEnumerable;
		            delete empty.isPrototypeOf;
		            delete empty.toLocaleString;
		            delete empty.toString;
		            delete empty.valueOf;

		            var Empty = function Empty() {};
		            Empty.prototype = empty;
		            // short-circuit future calls
		            createEmpty = function () {
		                return new Empty();
		            };
		            return new Empty();
		        };
		    }

		    Object.create = function create(prototype, properties) {

		        var object;
		        var Type = function Type() {}; // An empty constructor.

		        if (prototype === null) {
		            object = createEmpty();
		        } else {
		            if (typeof prototype !== 'object' && typeof prototype !== 'function') {
		                // In the native implementation `parent` can be `null`
		                // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
		                // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
		                // like they are in modern browsers. Using `Object.create` on DOM elements
		                // is...err...probably inappropriate, but the native version allows for it.
		                throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
		            }
		            Type.prototype = prototype;
		            object = new Type();
		            // IE has no built-in implementation of `Object.getPrototypeOf`
		            // neither `__proto__`, but this manually setting `__proto__` will
		            // guarantee that `Object.getPrototypeOf` will work as expected with
		            // objects created using `Object.create`
		            /* eslint-disable no-proto */
		            object.__proto__ = prototype;
		            /* eslint-enable no-proto */
		        }

		        if (properties !== void 0) {
		            Object.defineProperties(object, properties);
		        }

		        return object;
		    };
		}

		// ES5 15.2.3.6
		// http://es5.github.com/#x15.2.3.6

		// Patch for WebKit and IE8 standard mode
		// Designed by hax <hax.github.com>
		// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
		// IE8 Reference:
		//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
		//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
		// WebKit Bugs:
		//     https://bugs.webkit.org/show_bug.cgi?id=36423

		var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
		    try {
		        Object.defineProperty(object, 'sentinel', {});
		        return 'sentinel' in object;
		    } catch (exception) {
		        return false;
		    }
		};

		// check whether defineProperty works if it's given. Otherwise,
		// shim partially.
		if (Object.defineProperty) {
		    var definePropertyWorksOnObject = doesDefinePropertyWork({});
		    var definePropertyWorksOnDom = typeof document === 'undefined' ||
		        doesDefinePropertyWork(document.createElement('div'));
		    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
		        var definePropertyFallback = Object.defineProperty,
		            definePropertiesFallback = Object.defineProperties;
		    }
		}

		if (!Object.defineProperty || definePropertyFallback) {
		    var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
		    var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
		    var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';

		    Object.defineProperty = function defineProperty(object, property, descriptor) {
		        if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
		            throw new TypeError(ERR_NON_OBJECT_TARGET + object);
		        }
		        if ((typeof descriptor !== 'object' && typeof descriptor !== 'function') || descriptor === null) {
		            throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
		        }
		        // make a valiant attempt to use the real defineProperty
		        // for I8's DOM elements.
		        if (definePropertyFallback) {
		            try {
		                return definePropertyFallback.call(Object, object, property, descriptor);
		            } catch (exception) {
		                // try the shim if the real one doesn't work
		            }
		        }

		        // If it's a data property.
		        if ('value' in descriptor) {
		            // fail silently if 'writable', 'enumerable', or 'configurable'
		            // are requested but not supported
		            /*
		            // alternate approach:
		            if ( // can't implement these features; allow false but not true
		                ('writable' in descriptor && !descriptor.writable) ||
		                ('enumerable' in descriptor && !descriptor.enumerable) ||
		                ('configurable' in descriptor && !descriptor.configurable)
		            ))
		                throw new RangeError(
		                    'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
		                );
		            */

		            if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
		                // As accessors are supported only on engines implementing
		                // `__proto__` we can safely override `__proto__` while defining
		                // a property to make sure that we don't hit an inherited
		                // accessor.
		                /* eslint-disable no-proto */
		                var prototype = object.__proto__;
		                object.__proto__ = prototypeOfObject;
		                // Deleting a property anyway since getter / setter may be
		                // defined on object itself.
		                delete object[property];
		                object[property] = descriptor.value;
		                // Setting original `__proto__` back now.
		                object.__proto__ = prototype;
		                /* eslint-enable no-proto */
		            } else {
		                object[property] = descriptor.value;
		            }
		        } else {
		            if (!supportsAccessors && (('get' in descriptor) || ('set' in descriptor))) {
		                throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
		            }
		            // If we got that far then getters and setters can be defined !!
		            if ('get' in descriptor) {
		                defineGetter(object, property, descriptor.get);
		            }
		            if ('set' in descriptor) {
		                defineSetter(object, property, descriptor.set);
		            }
		        }
		        return object;
		    };
		}

		// ES5 15.2.3.7
		// http://es5.github.com/#x15.2.3.7
		if (!Object.defineProperties || definePropertiesFallback) {
		    Object.defineProperties = function defineProperties(object, properties) {
		        // make a valiant attempt to use the real defineProperties
		        if (definePropertiesFallback) {
		            try {
		                return definePropertiesFallback.call(Object, object, properties);
		            } catch (exception) {
		                // try the shim if the real one doesn't work
		            }
		        }

		        Object.keys(properties).forEach(function (property) {
		            if (property !== '__proto__') {
		                Object.defineProperty(object, property, properties[property]);
		            }
		        });
		        return object;
		    };
		}

		// ES5 15.2.3.8
		// http://es5.github.com/#x15.2.3.8
		if (!Object.seal) {
		    Object.seal = function seal(object) {
		        if (Object(object) !== object) {
		            throw new TypeError('Object.seal can only be called on Objects.');
		        }
		        // this is misleading and breaks feature-detection, but
		        // allows "securable" code to "gracefully" degrade to working
		        // but insecure code.
		        return object;
		    };
		}

		// ES5 15.2.3.9
		// http://es5.github.com/#x15.2.3.9
		if (!Object.freeze) {
		    Object.freeze = function freeze(object) {
		        if (Object(object) !== object) {
		            throw new TypeError('Object.freeze can only be called on Objects.');
		        }
		        // this is misleading and breaks feature-detection, but
		        // allows "securable" code to "gracefully" degrade to working
		        // but insecure code.
		        return object;
		    };
		}

		// detect a Rhino bug and patch it
		try {
		    Object.freeze(function () {});
		} catch (exception) {
		    Object.freeze = (function (freezeObject) {
		        return function freeze(object) {
		            if (typeof object === 'function') {
		                return object;
		            } else {
		                return freezeObject(object);
		            }
		        };
		    }(Object.freeze));
		}

		// ES5 15.2.3.10
		// http://es5.github.com/#x15.2.3.10
		if (!Object.preventExtensions) {
		    Object.preventExtensions = function preventExtensions(object) {
		        if (Object(object) !== object) {
		            throw new TypeError('Object.preventExtensions can only be called on Objects.');
		        }
		        // this is misleading and breaks feature-detection, but
		        // allows "securable" code to "gracefully" degrade to working
		        // but insecure code.
		        return object;
		    };
		}

		// ES5 15.2.3.11
		// http://es5.github.com/#x15.2.3.11
		if (!Object.isSealed) {
		    Object.isSealed = function isSealed(object) {
		        if (Object(object) !== object) {
		            throw new TypeError('Object.isSealed can only be called on Objects.');
		        }
		        return false;
		    };
		}

		// ES5 15.2.3.12
		// http://es5.github.com/#x15.2.3.12
		if (!Object.isFrozen) {
		    Object.isFrozen = function isFrozen(object) {
		        if (Object(object) !== object) {
		            throw new TypeError('Object.isFrozen can only be called on Objects.');
		        }
		        return false;
		    };
		}

		// ES5 15.2.3.13
		// http://es5.github.com/#x15.2.3.13
		if (!Object.isExtensible) {
		    Object.isExtensible = function isExtensible(object) {
		        // 1. If Type(O) is not Object throw a TypeError exception.
		        if (Object(object) !== object) {
		            throw new TypeError('Object.isExtensible can only be called on Objects.');
		        }
		        // 2. Return the Boolean value of the [[Extensible]] internal property of O.
		        var name = '';
		        while (owns(object, name)) {
		            name += '?';
		        }
		        object[name] = true;
		        var returnValue = owns(object, name);
		        delete object[name];
		        return returnValue;
		    };
		}

		}));


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
		 * @version   3.0.2
		 */

		(function() {
		    "use strict";
		    function lib$es6$promise$utils$$objectOrFunction(x) {
		      return typeof x === 'function' || (typeof x === 'object' && x !== null);
		    }

		    function lib$es6$promise$utils$$isFunction(x) {
		      return typeof x === 'function';
		    }

		    function lib$es6$promise$utils$$isMaybeThenable(x) {
		      return typeof x === 'object' && x !== null;
		    }

		    var lib$es6$promise$utils$$_isArray;
		    if (!Array.isArray) {
		      lib$es6$promise$utils$$_isArray = function (x) {
		        return Object.prototype.toString.call(x) === '[object Array]';
		      };
		    } else {
		      lib$es6$promise$utils$$_isArray = Array.isArray;
		    }

		    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
		    var lib$es6$promise$asap$$len = 0;
		    var lib$es6$promise$asap$$toString = {}.toString;
		    var lib$es6$promise$asap$$vertxNext;
		    var lib$es6$promise$asap$$customSchedulerFn;

		    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
		      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
		      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
		      lib$es6$promise$asap$$len += 2;
		      if (lib$es6$promise$asap$$len === 2) {
		        // If len is 2, that means that we need to schedule an async flush.
		        // If additional callbacks are queued before the queue is flushed, they
		        // will be processed by this flush that we are scheduling.
		        if (lib$es6$promise$asap$$customSchedulerFn) {
		          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
		        } else {
		          lib$es6$promise$asap$$scheduleFlush();
		        }
		      }
		    }

		    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
		      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
		    }

		    function lib$es6$promise$asap$$setAsap(asapFn) {
		      lib$es6$promise$asap$$asap = asapFn;
		    }

		    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
		    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
		    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
		    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

		    // test for web worker but not in IE10
		    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
		      typeof importScripts !== 'undefined' &&
		      typeof MessageChannel !== 'undefined';

		    // node
		    function lib$es6$promise$asap$$useNextTick() {
		      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
		      // see https://github.com/cujojs/when/issues/410 for details
		      return function() {
		        process.nextTick(lib$es6$promise$asap$$flush);
		      };
		    }

		    // vertx
		    function lib$es6$promise$asap$$useVertxTimer() {
		      return function() {
		        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
		      };
		    }

		    function lib$es6$promise$asap$$useMutationObserver() {
		      var iterations = 0;
		      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
		      var node = document.createTextNode('');
		      observer.observe(node, { characterData: true });

		      return function() {
		        node.data = (iterations = ++iterations % 2);
		      };
		    }

		    // web worker
		    function lib$es6$promise$asap$$useMessageChannel() {
		      var channel = new MessageChannel();
		      channel.port1.onmessage = lib$es6$promise$asap$$flush;
		      return function () {
		        channel.port2.postMessage(0);
		      };
		    }

		    function lib$es6$promise$asap$$useSetTimeout() {
		      return function() {
		        setTimeout(lib$es6$promise$asap$$flush, 1);
		      };
		    }

		    var lib$es6$promise$asap$$queue = new Array(1000);
		    function lib$es6$promise$asap$$flush() {
		      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
		        var callback = lib$es6$promise$asap$$queue[i];
		        var arg = lib$es6$promise$asap$$queue[i+1];

		        callback(arg);

		        lib$es6$promise$asap$$queue[i] = undefined;
		        lib$es6$promise$asap$$queue[i+1] = undefined;
		      }

		      lib$es6$promise$asap$$len = 0;
		    }

		    function lib$es6$promise$asap$$attemptVertx() {
		      try {
		        var r = require;
		        var vertx = __webpack_require__(6);
		        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
		        return lib$es6$promise$asap$$useVertxTimer();
		      } catch(e) {
		        return lib$es6$promise$asap$$useSetTimeout();
		      }
		    }

		    var lib$es6$promise$asap$$scheduleFlush;
		    // Decide what async method to use to triggering processing of queued callbacks:
		    if (lib$es6$promise$asap$$isNode) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
		    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
		    } else if (lib$es6$promise$asap$$isWorker) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
		    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
		    } else {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
		    }

		    function lib$es6$promise$$internal$$noop() {}

		    var lib$es6$promise$$internal$$PENDING   = void 0;
		    var lib$es6$promise$$internal$$FULFILLED = 1;
		    var lib$es6$promise$$internal$$REJECTED  = 2;

		    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

		    function lib$es6$promise$$internal$$selfFulfillment() {
		      return new TypeError("You cannot resolve a promise with itself");
		    }

		    function lib$es6$promise$$internal$$cannotReturnOwn() {
		      return new TypeError('A promises callback cannot return that same promise.');
		    }

		    function lib$es6$promise$$internal$$getThen(promise) {
		      try {
		        return promise.then;
		      } catch(error) {
		        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
		        return lib$es6$promise$$internal$$GET_THEN_ERROR;
		      }
		    }

		    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
		      try {
		        then.call(value, fulfillmentHandler, rejectionHandler);
		      } catch(e) {
		        return e;
		      }
		    }

		    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
		       lib$es6$promise$asap$$asap(function(promise) {
		        var sealed = false;
		        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
		          if (sealed) { return; }
		          sealed = true;
		          if (thenable !== value) {
		            lib$es6$promise$$internal$$resolve(promise, value);
		          } else {
		            lib$es6$promise$$internal$$fulfill(promise, value);
		          }
		        }, function(reason) {
		          if (sealed) { return; }
		          sealed = true;

		          lib$es6$promise$$internal$$reject(promise, reason);
		        }, 'Settle: ' + (promise._label || ' unknown promise'));

		        if (!sealed && error) {
		          sealed = true;
		          lib$es6$promise$$internal$$reject(promise, error);
		        }
		      }, promise);
		    }

		    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
		      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
		        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
		      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
		        lib$es6$promise$$internal$$reject(promise, thenable._result);
		      } else {
		        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
		          lib$es6$promise$$internal$$resolve(promise, value);
		        }, function(reason) {
		          lib$es6$promise$$internal$$reject(promise, reason);
		        });
		      }
		    }

		    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
		      if (maybeThenable.constructor === promise.constructor) {
		        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
		      } else {
		        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

		        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
		          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
		        } else if (then === undefined) {
		          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
		        } else if (lib$es6$promise$utils$$isFunction(then)) {
		          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
		        } else {
		          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
		        }
		      }
		    }

		    function lib$es6$promise$$internal$$resolve(promise, value) {
		      if (promise === value) {
		        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
		      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
		        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
		      } else {
		        lib$es6$promise$$internal$$fulfill(promise, value);
		      }
		    }

		    function lib$es6$promise$$internal$$publishRejection(promise) {
		      if (promise._onerror) {
		        promise._onerror(promise._result);
		      }

		      lib$es6$promise$$internal$$publish(promise);
		    }

		    function lib$es6$promise$$internal$$fulfill(promise, value) {
		      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

		      promise._result = value;
		      promise._state = lib$es6$promise$$internal$$FULFILLED;

		      if (promise._subscribers.length !== 0) {
		        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
		      }
		    }

		    function lib$es6$promise$$internal$$reject(promise, reason) {
		      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
		      promise._state = lib$es6$promise$$internal$$REJECTED;
		      promise._result = reason;

		      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
		    }

		    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
		      var subscribers = parent._subscribers;
		      var length = subscribers.length;

		      parent._onerror = null;

		      subscribers[length] = child;
		      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
		      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

		      if (length === 0 && parent._state) {
		        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
		      }
		    }

		    function lib$es6$promise$$internal$$publish(promise) {
		      var subscribers = promise._subscribers;
		      var settled = promise._state;

		      if (subscribers.length === 0) { return; }

		      var child, callback, detail = promise._result;

		      for (var i = 0; i < subscribers.length; i += 3) {
		        child = subscribers[i];
		        callback = subscribers[i + settled];

		        if (child) {
		          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
		        } else {
		          callback(detail);
		        }
		      }

		      promise._subscribers.length = 0;
		    }

		    function lib$es6$promise$$internal$$ErrorObject() {
		      this.error = null;
		    }

		    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

		    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
		      try {
		        return callback(detail);
		      } catch(e) {
		        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
		        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
		      }
		    }

		    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
		      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
		          value, error, succeeded, failed;

		      if (hasCallback) {
		        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

		        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
		          failed = true;
		          error = value.error;
		          value = null;
		        } else {
		          succeeded = true;
		        }

		        if (promise === value) {
		          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
		          return;
		        }

		      } else {
		        value = detail;
		        succeeded = true;
		      }

		      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
		        // noop
		      } else if (hasCallback && succeeded) {
		        lib$es6$promise$$internal$$resolve(promise, value);
		      } else if (failed) {
		        lib$es6$promise$$internal$$reject(promise, error);
		      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
		        lib$es6$promise$$internal$$fulfill(promise, value);
		      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
		        lib$es6$promise$$internal$$reject(promise, value);
		      }
		    }

		    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
		      try {
		        resolver(function resolvePromise(value){
		          lib$es6$promise$$internal$$resolve(promise, value);
		        }, function rejectPromise(reason) {
		          lib$es6$promise$$internal$$reject(promise, reason);
		        });
		      } catch(e) {
		        lib$es6$promise$$internal$$reject(promise, e);
		      }
		    }

		    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
		      var enumerator = this;

		      enumerator._instanceConstructor = Constructor;
		      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

		      if (enumerator._validateInput(input)) {
		        enumerator._input     = input;
		        enumerator.length     = input.length;
		        enumerator._remaining = input.length;

		        enumerator._init();

		        if (enumerator.length === 0) {
		          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
		        } else {
		          enumerator.length = enumerator.length || 0;
		          enumerator._enumerate();
		          if (enumerator._remaining === 0) {
		            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
		          }
		        }
		      } else {
		        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
		      }
		    }

		    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
		      return lib$es6$promise$utils$$isArray(input);
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
		      return new Error('Array Methods must be provided an Array');
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
		      this._result = new Array(this.length);
		    };

		    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

		    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
		      var enumerator = this;

		      var length  = enumerator.length;
		      var promise = enumerator.promise;
		      var input   = enumerator._input;

		      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
		        enumerator._eachEntry(input[i], i);
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
		      var enumerator = this;
		      var c = enumerator._instanceConstructor;

		      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
		        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
		          entry._onerror = null;
		          enumerator._settledAt(entry._state, i, entry._result);
		        } else {
		          enumerator._willSettleAt(c.resolve(entry), i);
		        }
		      } else {
		        enumerator._remaining--;
		        enumerator._result[i] = entry;
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
		      var enumerator = this;
		      var promise = enumerator.promise;

		      if (promise._state === lib$es6$promise$$internal$$PENDING) {
		        enumerator._remaining--;

		        if (state === lib$es6$promise$$internal$$REJECTED) {
		          lib$es6$promise$$internal$$reject(promise, value);
		        } else {
		          enumerator._result[i] = value;
		        }
		      }

		      if (enumerator._remaining === 0) {
		        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
		      var enumerator = this;

		      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
		        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
		      }, function(reason) {
		        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
		      });
		    };
		    function lib$es6$promise$promise$all$$all(entries) {
		      return new lib$es6$promise$enumerator$$default(this, entries).promise;
		    }
		    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
		    function lib$es6$promise$promise$race$$race(entries) {
		      /*jshint validthis:true */
		      var Constructor = this;

		      var promise = new Constructor(lib$es6$promise$$internal$$noop);

		      if (!lib$es6$promise$utils$$isArray(entries)) {
		        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
		        return promise;
		      }

		      var length = entries.length;

		      function onFulfillment(value) {
		        lib$es6$promise$$internal$$resolve(promise, value);
		      }

		      function onRejection(reason) {
		        lib$es6$promise$$internal$$reject(promise, reason);
		      }

		      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
		        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
		      }

		      return promise;
		    }
		    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
		    function lib$es6$promise$promise$resolve$$resolve(object) {
		      /*jshint validthis:true */
		      var Constructor = this;

		      if (object && typeof object === 'object' && object.constructor === Constructor) {
		        return object;
		      }

		      var promise = new Constructor(lib$es6$promise$$internal$$noop);
		      lib$es6$promise$$internal$$resolve(promise, object);
		      return promise;
		    }
		    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
		    function lib$es6$promise$promise$reject$$reject(reason) {
		      /*jshint validthis:true */
		      var Constructor = this;
		      var promise = new Constructor(lib$es6$promise$$internal$$noop);
		      lib$es6$promise$$internal$$reject(promise, reason);
		      return promise;
		    }
		    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

		    var lib$es6$promise$promise$$counter = 0;

		    function lib$es6$promise$promise$$needsResolver() {
		      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
		    }

		    function lib$es6$promise$promise$$needsNew() {
		      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
		    }

		    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
		    /**
		      Promise objects represent the eventual result of an asynchronous operation. The
		      primary way of interacting with a promise is through its `then` method, which
		      registers callbacks to receive either a promise's eventual value or the reason
		      why the promise cannot be fulfilled.

		      Terminology
		      -----------

		      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
		      - `thenable` is an object or function that defines a `then` method.
		      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
		      - `exception` is a value that is thrown using the throw statement.
		      - `reason` is a value that indicates why a promise was rejected.
		      - `settled` the final resting state of a promise, fulfilled or rejected.

		      A promise can be in one of three states: pending, fulfilled, or rejected.

		      Promises that are fulfilled have a fulfillment value and are in the fulfilled
		      state.  Promises that are rejected have a rejection reason and are in the
		      rejected state.  A fulfillment value is never a thenable.

		      Promises can also be said to *resolve* a value.  If this value is also a
		      promise, then the original promise's settled state will match the value's
		      settled state.  So a promise that *resolves* a promise that rejects will
		      itself reject, and a promise that *resolves* a promise that fulfills will
		      itself fulfill.


		      Basic Usage:
		      ------------

		      ```js
		      var promise = new Promise(function(resolve, reject) {
		        // on success
		        resolve(value);

		        // on failure
		        reject(reason);
		      });

		      promise.then(function(value) {
		        // on fulfillment
		      }, function(reason) {
		        // on rejection
		      });
		      ```

		      Advanced Usage:
		      ---------------

		      Promises shine when abstracting away asynchronous interactions such as
		      `XMLHttpRequest`s.

		      ```js
		      function getJSON(url) {
		        return new Promise(function(resolve, reject){
		          var xhr = new XMLHttpRequest();

		          xhr.open('GET', url);
		          xhr.onreadystatechange = handler;
		          xhr.responseType = 'json';
		          xhr.setRequestHeader('Accept', 'application/json');
		          xhr.send();

		          function handler() {
		            if (this.readyState === this.DONE) {
		              if (this.status === 200) {
		                resolve(this.response);
		              } else {
		                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
		              }
		            }
		          };
		        });
		      }

		      getJSON('/posts.json').then(function(json) {
		        // on fulfillment
		      }, function(reason) {
		        // on rejection
		      });
		      ```

		      Unlike callbacks, promises are great composable primitives.

		      ```js
		      Promise.all([
		        getJSON('/posts'),
		        getJSON('/comments')
		      ]).then(function(values){
		        values[0] // => postsJSON
		        values[1] // => commentsJSON

		        return values;
		      });
		      ```

		      @class Promise
		      @param {function} resolver
		      Useful for tooling.
		      @constructor
		    */
		    function lib$es6$promise$promise$$Promise(resolver) {
		      this._id = lib$es6$promise$promise$$counter++;
		      this._state = undefined;
		      this._result = undefined;
		      this._subscribers = [];

		      if (lib$es6$promise$$internal$$noop !== resolver) {
		        if (!lib$es6$promise$utils$$isFunction(resolver)) {
		          lib$es6$promise$promise$$needsResolver();
		        }

		        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
		          lib$es6$promise$promise$$needsNew();
		        }

		        lib$es6$promise$$internal$$initializePromise(this, resolver);
		      }
		    }

		    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
		    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
		    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
		    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
		    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
		    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
		    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

		    lib$es6$promise$promise$$Promise.prototype = {
		      constructor: lib$es6$promise$promise$$Promise,

		    /**
		      The primary way of interacting with a promise is through its `then` method,
		      which registers callbacks to receive either a promise's eventual value or the
		      reason why the promise cannot be fulfilled.

		      ```js
		      findUser().then(function(user){
		        // user is available
		      }, function(reason){
		        // user is unavailable, and you are given the reason why
		      });
		      ```

		      Chaining
		      --------

		      The return value of `then` is itself a promise.  This second, 'downstream'
		      promise is resolved with the return value of the first promise's fulfillment
		      or rejection handler, or rejected if the handler throws an exception.

		      ```js
		      findUser().then(function (user) {
		        return user.name;
		      }, function (reason) {
		        return 'default name';
		      }).then(function (userName) {
		        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
		        // will be `'default name'`
		      });

		      findUser().then(function (user) {
		        throw new Error('Found user, but still unhappy');
		      }, function (reason) {
		        throw new Error('`findUser` rejected and we're unhappy');
		      }).then(function (value) {
		        // never reached
		      }, function (reason) {
		        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
		        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
		      });
		      ```
		      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

		      ```js
		      findUser().then(function (user) {
		        throw new PedagogicalException('Upstream error');
		      }).then(function (value) {
		        // never reached
		      }).then(function (value) {
		        // never reached
		      }, function (reason) {
		        // The `PedgagocialException` is propagated all the way down to here
		      });
		      ```

		      Assimilation
		      ------------

		      Sometimes the value you want to propagate to a downstream promise can only be
		      retrieved asynchronously. This can be achieved by returning a promise in the
		      fulfillment or rejection handler. The downstream promise will then be pending
		      until the returned promise is settled. This is called *assimilation*.

		      ```js
		      findUser().then(function (user) {
		        return findCommentsByAuthor(user);
		      }).then(function (comments) {
		        // The user's comments are now available
		      });
		      ```

		      If the assimliated promise rejects, then the downstream promise will also reject.

		      ```js
		      findUser().then(function (user) {
		        return findCommentsByAuthor(user);
		      }).then(function (comments) {
		        // If `findCommentsByAuthor` fulfills, we'll have the value here
		      }, function (reason) {
		        // If `findCommentsByAuthor` rejects, we'll have the reason here
		      });
		      ```

		      Simple Example
		      --------------

		      Synchronous Example

		      ```javascript
		      var result;

		      try {
		        result = findResult();
		        // success
		      } catch(reason) {
		        // failure
		      }
		      ```

		      Errback Example

		      ```js
		      findResult(function(result, err){
		        if (err) {
		          // failure
		        } else {
		          // success
		        }
		      });
		      ```

		      Promise Example;

		      ```javascript
		      findResult().then(function(result){
		        // success
		      }, function(reason){
		        // failure
		      });
		      ```

		      Advanced Example
		      --------------

		      Synchronous Example

		      ```javascript
		      var author, books;

		      try {
		        author = findAuthor();
		        books  = findBooksByAuthor(author);
		        // success
		      } catch(reason) {
		        // failure
		      }
		      ```

		      Errback Example

		      ```js

		      function foundBooks(books) {

		      }

		      function failure(reason) {

		      }

		      findAuthor(function(author, err){
		        if (err) {
		          failure(err);
		          // failure
		        } else {
		          try {
		            findBoooksByAuthor(author, function(books, err) {
		              if (err) {
		                failure(err);
		              } else {
		                try {
		                  foundBooks(books);
		                } catch(reason) {
		                  failure(reason);
		                }
		              }
		            });
		          } catch(error) {
		            failure(err);
		          }
		          // success
		        }
		      });
		      ```

		      Promise Example;

		      ```javascript
		      findAuthor().
		        then(findBooksByAuthor).
		        then(function(books){
		          // found books
		      }).catch(function(reason){
		        // something went wrong
		      });
		      ```

		      @method then
		      @param {Function} onFulfilled
		      @param {Function} onRejected
		      Useful for tooling.
		      @return {Promise}
		    */
		      then: function(onFulfillment, onRejection) {
		        var parent = this;
		        var state = parent._state;

		        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
		          return this;
		        }

		        var child = new this.constructor(lib$es6$promise$$internal$$noop);
		        var result = parent._result;

		        if (state) {
		          var callback = arguments[state - 1];
		          lib$es6$promise$asap$$asap(function(){
		            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
		          });
		        } else {
		          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
		        }

		        return child;
		      },

		    /**
		      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
		      as the catch block of a try/catch statement.

		      ```js
		      function findAuthor(){
		        throw new Error('couldn't find that author');
		      }

		      // synchronous
		      try {
		        findAuthor();
		      } catch(reason) {
		        // something went wrong
		      }

		      // async with promises
		      findAuthor().catch(function(reason){
		        // something went wrong
		      });
		      ```

		      @method catch
		      @param {Function} onRejection
		      Useful for tooling.
		      @return {Promise}
		    */
		      'catch': function(onRejection) {
		        return this.then(null, onRejection);
		      }
		    };
		    function lib$es6$promise$polyfill$$polyfill() {
		      var local;

		      if (typeof global !== 'undefined') {
		          local = global;
		      } else if (typeof self !== 'undefined') {
		          local = self;
		      } else {
		          try {
		              local = Function('return this')();
		          } catch (e) {
		              throw new Error('polyfill failed because global object is unavailable in this environment');
		          }
		      }

		      var P = local.Promise;

		      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
		        return;
		      }

		      local.Promise = lib$es6$promise$promise$$default;
		    }
		    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

		    var lib$es6$promise$umd$$ES6Promise = {
		      'Promise': lib$es6$promise$promise$$default,
		      'polyfill': lib$es6$promise$polyfill$$default
		    };

		    /* global define:true module:true window: true */
		    if ("function" === 'function' && __webpack_require__(7)['amd']) {
		      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    } else if (typeof module !== 'undefined' && module['exports']) {
		      module['exports'] = lib$es6$promise$umd$$ES6Promise;
		    } else if (typeof this !== 'undefined') {
		      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
		    }

		    lib$es6$promise$polyfill$$default();
		}).call(this);


		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), (function() { return this; }()), __webpack_require__(5)(module)))

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		// shim for using process in browser

		var process = module.exports = {};
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = setTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    clearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        setTimeout(drainQueue, 0);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		/* (ignored) */

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },
	/* 8 */,
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var notundef = util.notundef;

		function ApiBase() {

		}

		var ApiBaseFn = ApiBase.fn = ApiBase.prototype;

		ApiBaseFn.processCallback = (function() {
		    /**
		     * 异步请求回调函数, 成功时error为null, 发生错误时error包含具体错误信息
		     * 
		     * @callback done
		     * 
		     * @param {Object} error            错误
		     * @param {Number} error.code       错误码
		     * @param {String} error.message    错误信息
		     * @param {Object} obj              操作失败时包含调用时传入的参数, 操作成功时可能会返回不一样的信息或者会追加一些信息
		     *
		     * @see {@link NIMError.codeMap|错误码错误信息表}
		     * @see {@link NIM}
		     */
		    function commonCallback(options, useOptionsAsObj, error, obj) {
		        var rawOptions = options.callback.options;
		        obj = obj || rawOptions;
		        if (useOptionsAsObj) { obj = rawOptions; }
		        if (util.isFunction(options.cbaop)) {
		            var aopRtn = options.cbaop(error, obj);
		            if (notundef(aopRtn)) {
		                obj = aopRtn;
		            }
		        }
		        var done = options.done;
		        delete obj.done;
		        delete obj.cb;
		        delete obj.callback;
		        setTimeout(function() {
		            done(error, obj);
		        }, 0);
		    }

		    return function(options, useOptionsAsObj) {
		        util.verifyOptions(options, 'done');
		        util.verifyCallback(options, 'done');
		        options.callback = commonCallback.bind(this, options, useOptionsAsObj);
		        // 记录原始的options
		        options.callback.options = util.copy(options);
		    };

		}());

		ApiBaseFn.processPs = function(options) {
		    if (util.notexist(options.ps)) {
		        options.ps = '';
		    }
		};

		ApiBaseFn.processCustom = function(options) {
		    if (util.notexist(options.custom)) {
		        options.custom = '';
		    }
		};

		ApiBaseFn.sendCmd = function() {
		    this.protocol.sendCmd.apply(this.protocol, arguments);
		};

		module.exports = ApiBase;

		__webpack_require__(24);
		__webpack_require__(25);
		// require('./nos');
		// require('./audio');


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var naturalSort = __webpack_require__(11);
		var deep = __webpack_require__(12);
		__webpack_require__(13);
		var NIMError = __webpack_require__(14);

		/**
		 * NIM util 工具方法, 通过 `NIM.util` 来获取此工具的引用
		 * 
		 * @namespace util
		 */
		var util = __webpack_require__(15);
		var regWhiteSpace = /\s/;

		/**
		 * 生成一个 32 位的 [GUID](https://en.wikipedia.org/wiki/Globally_unique_identifier)/[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
		 * 
		 * @return {String}   guid/uuid
		 */
		util.guid = (function() {
		    var _s4 = function() {
		        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		    };
		    return function() {
		        return (_s4() + _s4() + _s4() + _s4() + _s4() + _s4() + _s4() + _s4());
		    };
		}());

		util.extend = function( o1, o2, override ){
		    for(var i in o2){
		        if( typeof o1[i] === "undefined" || override === true ){
		            o1[i] = o2[i];
		        }
		    }
		};

		util.filterObj = function(base, props) {
		    var obj = {};
		    props = props.split(regWhiteSpace);
		    props.forEach(function(prop) {
		        if (base.hasOwnProperty(prop)) {
		            obj[prop] = base[prop];
		        }
		    });
		    return obj;
		};

		/**
		 * 将 target 复制到 base
		 *
		 * @private
		 * @param  {Object} target 待复制的对象
		 * @param  {Object} base   复制后的对象
		 * @return {Object}        复制后的对象
		 */
		util.copy = function(target, base) {
		    base = base || {};
		    if (!target) {return base;}
		    Object.keys(target).forEach(function(key) {
		        if (util.exist(target[key])) {
		            base[key] = target[key];
		        }
		    });
		    return base;
		};

		/**
		 * 将 obj1, obj2, ... 的属性合并到 base
		 * - 此方法接收不定量参数
		 * - 同属性名右侧的值覆盖左侧
		 * 
		 * @param  {Object} base 基对象, 不存在则创建新对象
		 * @param  {Object} obj1 待拷贝对象
		 * @return {Object}      合并后的对象
		 *
		 * @example
		 * var base = {
		 *     p: 'p'
		 * };
		 * var obj1 = {
		 *     p: 'p1'
		 * };
		 * NIM.util.merge(base, obj1);
		 * // base 为 {p:'p1'}
		 */
		util.merge = function(base) {
		    base = base || {};
		    for (var i = 1, l = arguments.length; i < l; i++) {
		        util.copy(arguments[i], base);
		    }
		    return base;
		};

		util.findObjIndexInArray = function(array, options) {
		    array = array || [];
		    var keyPath = options.keyPath || 'id';
		    var pos = -1;
		    array.some(function(obj, index) {
		        if (deep(obj, keyPath) === options.value) {
		            pos = index;
		            return true;
		        }
		    });
		    return pos;
		};

		/**
		 * 在数组里面找 keyPath 对应的属性值为 value 的元素
		 * - 数组的每一项均为对象, 并且必须有由 keyPath 指定的属性
		 * @param  {Object[]}   array               待查找的数组
		 * @param  {Object}     options             查找的条件
		 * @param  {String}     [options.keyPath]   keyPath, 匹配的字段, 默认为 'id'
		 * @param  {Anything}   [options.value]     匹配的值
		 * @return {Object}                         找到的元素, 或者 null
		 *
		 * @example
		 * var array = [
		 *     {name: 'tom'},
		 *     {name: 'jack'},
		 *     {name: 'dan'}
		 * ];
		 * var obj = NIM.util.findObjInArray(array, {
		 *     keyPath: 'name',
		 *     value: 'jack'
		 * });
		 * // obj 为 {name: 'jack'}
		 */
		util.findObjInArray = function(array, options) {
		    var index = util.findObjIndexInArray(array, options);
		    return index === -1 ? null : array[index];
		};

		/**
		 * 合并数组
		 * - 此方法接收不定量参数
		 *     - 最后一个参数如果是对象, 那么就是配置参数
		 *     - 除了配置参数之外, 所有其它的参数都必须是数组, 它们都会被合并
		 * - 如果两个对象`keyPath`字段对应的属性值相同, 后面的对象会被合并到前面的对象
		 * 
		 * @param  {Object[]}   arr1                    待合并的数组
		 * @param  {Object[]}   arr2                    待合并的数组
		 * @param  {Object}     [options]               配置参数
		 * @param  {String}     [options.keyPath='id']  `keyPath`, 去重的字段, 默认为 `id`
		 * @param  {Boolean}    [options.notSort]       是否要排序, 默认`false`要排序, 传`true`则不排序
		 * @param  {Function}   [options.compare]       决定排序的方法, 如果不提供, 那么使用 {@link NIM.naturalSort|NIM.naturalSort} 进行排序
		 * @param  {String}     [options.sortPath]      `sortPath`, 排序用的字段, 默认为 `keyPath`
		 * @param  {Boolean}    [options.insensitive]   排序时是否不区分大小写, 默认区分
		 * @param  {Boolean}    [options.desc]          是否逆序, 默认正序
		 * @return {Object[]}                           合并并排序后的数组
		 *
		 * @example
		 * var arr1 = [
		 *     {
		 *         account: 'tom',
		 *         name: 'T'
		 *     }
		 * ];
		 * var arr2 = [
		 *     {
		 *         account: 'adam'
		 *     },
		 *     {
		 *         account: 'tom',
		 *         name: 'T-new'
		 *     }
		 * ];
		 * var options = {
		 *     keyPath: 'account'
		 * };
		 * var resultArray = NIM.util.mergeObjArray(arr1, arr2, options);
		 * // resultArray为
		 * // [
		 * //     {account: 'adam'},
		 * //     {account: 'tom', name: 'T-new'},
		 * // ]
		 */
		util.mergeObjArray = function() {
		    var base = [];
		    // 截取除了最后一个之外的参数, 这些就是待合并的数组
		    var arrays = [].slice.call(arguments, 0, -1);
		    // 最后一个参数是 options, 如果它是数组, 那么它也是待合并的数组
		    var options = arguments[arguments.length-1];
		    if (util.isArray(options)) {
		        arrays.push(options);
		        options = {};
		    }
		    // options
		    var keyPath = options.keyPath = options.keyPath || 'id';
		    options.sortPath = options.sortPath || keyPath;
		    // 如果 base 的长度为 0, 那么直接拷贝后一个数组里面的所有元素
		    while (!base.length && !!arrays.length) {
		        base = arrays.shift() || [];
		        base = base.slice(0);
		    }
		    // 合并所有的数组
		    var index;
		    arrays.forEach(function(array) {
		        if (!array) { return; }
		        array.forEach(function(item) {
		            index = util.findObjIndexInArray(base, {
		                keyPath: keyPath,
		                value: deep(item, keyPath)
		            });
		            if (index !== -1) {
		                util.merge(base[index], item);
		            } else {
		                base.push(item);
		            }
		        });
		    });
		    // 排序
		    if (!options.notSort) {
		        base = util.sortObjArray(base, options);
		    }
		    return base;
		};

		/**
		 * 从数组里面去除某些项
		 * 
		 * @param  {Array}      base                    基数组
		 * @param  {Object[]}   arr1                    待去除的数组
		 * @param  {Object[]}   arr2                    待去除的数组
		 * @param  {Object}     options                 配置参数
		 * @param  {String}     [options.keyPath='id']  `keyPath`, 去重的字段, 默认为 `id`
		 * @return {Array}                              去除后的数组
		 *
		 * @example
		 * var olds = [
		 *     { account: 'a' },
		 *     { account: 'b' },
		 *     { account: 'c' }
		 * ];
		 * var invalids = [
		 *     { account: 'b' }
		 * ];
		 * var options = {
		 *     keyPath: 'account'
		 * };
		 * var array = NIM.util.cutObjArray(olds, invalids, options);
		 * // array 为
		 * // [
		 * //     { account: 'a' },
		 * //     { account: 'c' }
		 * // ]
		 */
		util.cutObjArray = function(base) {
		    var rtn = base.slice(0);
		    var argsLength = arguments.length;
		    // 截取除了第一个和最后一个之外的参数, 这些就是待删除的数组
		    var arrays = [].slice.call(arguments, 1, argsLength-1);
		    // 最后一个参数是 options, 如果它不是对象, 那么它也是待删除的数组
		    var options = arguments[argsLength-1];
		    if (!util.isObject(options)) {
		        arrays.push(options);
		        options = {};
		    }
		    // keyPath
		    var keyPath = options.keyPath = options.keyPath || 'id';
		    // 删除
		    var index;
		    arrays.forEach(function(cuts) {
		        if (!util.isArray(cuts)) { cuts = [cuts]; }
		        cuts.forEach(function(cut) {
		            if (!cut) { return; }
		            options.value = deep(cut, keyPath);
		            index = util.findObjIndexInArray(rtn, options);
		            if (index !== -1) {
		                rtn.splice(index, 1);
		            }
		        });
		    });
		    return rtn;
		};

		/**
		 * 返回排序后的数组
		 * - 数组的每一项都为 `Object`, 并且必须有由 `sortPath` 指定的属性
		 * 
		 * @param  {Object[]}   array                   待排序的数组
		 * @param  {Object}     [options]               配置参数
		 * @param {Function}    [options.compare]       决定排序的方法, 如果不提供, 那么使用 {@link NIM.naturalSort|NIM.naturalSort} 进行排序
		 * @param  {String}     [options.sortPath]      `sortPath`, 排序用的字段, 默认为 `id`
		 * @param  {Boolean}    [options.insensitive]   排序时是否不区分大小写, 默认区分
		 * @param  {Boolean}    [options.desc]          是否逆序, 默认正序
		 * @return {Object[]}                           排序后的数组
		 *
		 * @example
		 * var array = [
		 *     { account: 'b' },
		 *     { account: 'a' }
		 * ];
		 * var options = {
		 *     sortPath: 'account'
		 * };
		 * NIM.util.sortObjArray(array, options);
		 * // array 为
		 * //[
		 * //    { account: 'a' },
		 * //    { account: 'b' }
		 * //]
		 */
		util.sortObjArray = function(array, options) {
		    options = options || {};
		    var sortPath = options.sortPath || 'id';
		    naturalSort.insensitive = !!options.insensitive;
		    var desc = !!options.desc;
		    var pa, pb;
		    var compare;
		    if (util.isFunction(options.compare)) {
		        compare = options.compare;
		    } else {
		        compare = function (a, b) {
		            pa = deep(a, sortPath);
		            pb = deep(b, sortPath);
		            if (desc) {
		                return naturalSort(pb, pa);
		            } else {
		                return naturalSort(pa, pb);
		            }
		        };
		    }
		    return array.sort(compare);
		};

		util.emptyFunc = function() {};

		util.isEmptyFunc = function(func) {
		    return func === util.emptyFunc;
		};

		util.notEmptyFunc = function(func) {
		    return func !== util.emptyFunc;
		};

		util.splice = function(obj, start, end){
		    return [].splice.call(obj, start, end);
		};

		util.onError = function(msg) {
		    throw new NIMError(msg);
		};

		/*
		 * 参数处理相关 API
		 */

		util.verifyParamPresent = function(name, value, prefix) {
		    prefix = prefix || '';
		    var absent = false;
		    switch (util.typeOf(value)) {
		    case 'undefined':
		    case 'null':
		        absent = true;
		        break;
		    case 'string':
		        if (value === '') {
		            absent = true;
		        }
		        break;
		    case 'array':
		        if (!value.length) {
		            absent = true;
		        }
		        break;
		    default:
		        break;
		    }
		    if (absent) {
		        util.onParamAbsent(prefix + name);
		    }
		};

		util.onParamAbsent = function(name) {
		    util.onParamError('缺少参数"' + name + '", 请确保参数不是空字符串、空数组、null或undefined');
		};

		util.verifyParamAbsent = function(name, value, prefix) {
		    prefix = prefix || '';
		    if (value !== undefined) {
		        util.onParamPresent(prefix + name);
		    }
		};

		util.onParamPresent = function(name) {
		    util.onParamError('多余的参数"' + name + '"');
		};

		util.verifyParamType = function(name, value, validTypes) {
		    var type = util.typeOf(value).toLowerCase();
		    if (!util.isArray(validTypes)) {
		        validTypes = [validTypes];
		    }
		    validTypes = validTypes.map(function(type) {
		        return type.toLowerCase();
		    });
		    var valid = true;
		    if (validTypes.indexOf(type) === -1) {
		        valid = false;
		    }
		    switch (type) {
		    case 'number':
		        if (isNaN(value)) {
		            valid = false;
		        }
		        break;
		    default:
		        break;
		    }
		    if (!valid) {
		        util.onParamInvalidType(name, validTypes);
		    }
		};

		util.onParamInvalidType = function(name, validTypes, prefix) {
		    prefix = prefix || '';
		    if (util.isArray(validTypes)) {
		        validTypes = validTypes.map(function(type){
		            return '"' + type + '"';
		        });
		        validTypes = validTypes.join(', ');
		    } else {
		        validTypes = '"' + validTypes + '"';
		    }
		    util.onParamError('参数"' + prefix + name + '"类型错误, 合法的类型包括: [' + validTypes + ']');
		};

		util.verifyParamValid = function(name, value, validValues) {
		    if (!util.isArray(validValues)) {
		        validValues = [validValues];
		    }
		    if (validValues.indexOf(value) === -1) {
		        util.onParamInvalidValue(name, validValues);
		    }
		};

		util.onParamInvalidValue = function(name, validValues) {
		    if (!util.isArray(validValues)) {
		        validValues = [validValues];
		    }
		    validValues = validValues.map(function(value) {
		        return '"' + value + '"';
		    });
		    if (util.isArray(validValues)) {
		        validValues = validValues.join(', ');
		    }
		    util.onParamError('参数"' + name + '"值错误, 合法的值包括: [' + validValues + ']');
		};

		util.verifyParamMin = function(name, value, min) {
		    if (value < min) {
		        util.onParamError('参数' + name + '的值不能小于' + min);
		    }
		};

		util.verifyParamMax = function(name, value, max) {
		    if (value > max) {
		        util.onParamError('参数' + name + '的值不能大于' + max);
		    }
		};

		util.verifyEmail = (function() {
		    var reg = /^\S+@\S+$/;
		    return function(name, value) {
		        if (!reg.test(value)) {
		            util.onParamError('参数' + name + '邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符');
		        }
		    };
		}());

		util.verifyTel = (function() {
		    var reg = /^[+\-\(\)\d]+$/;
		    return function(name, value) {
		        if (!reg.test(value)) {
		            util.onParamError('参数' + name + '电话号码格式错误, 合法字符包括+、-、英文括号和数字');
		        }
		    };
		}());

		util.verifyBirth = (function() {
		    var reg = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
		    return function(name, value) {
		        if (!reg.test(value)) {
		            util.onParamError('参数' + name + '生日格式错误, 合法为"yyyy-MM-dd"');
		        }
		    };
		}());

		util.onParamError = function(msg) {
		    util.onError(msg);
		};

		/**
		 * 验证options及其属性是否存在
		 *
		 * @private
		 * @param  {Object}       options       配置参数
		 * @param  {String|Array} params        属性列表
		 * @param  {Boolean}      shouldPresent 是否应该存在
		 * @return {Void}
		 */
		util.verifyOptions = function(options, params, shouldPresent, prefix) {
		    util.verifyParamPresent('options', options);
		    if (!!params) {
		        if (util.isString(params)) {
		            params = params.split(regWhiteSpace);
		        }
		        if (util.isArray(params)) {
		            shouldPresent = shouldPresent === undefined ? true : !!shouldPresent;
		            var func = shouldPresent ? util.verifyParamPresent : util.verifyParamAbsent;
		            params.forEach(function(param) {
		                func.call(util, param, options[param], prefix);
		            });
		        }
		    }
		};

		util.verifyParamAtLeastPresentOne = function(options, params) {
		    if (!!params) {
		        if (util.isString(params)) {
		            params = params.split(regWhiteSpace);
		        }
		        if (util.isArray(params)) {
		            var presentOne = params.some(function(param) {
		                return util.exist(options[param]);
		            });
		            if (!presentOne) {
		                util.onParamError('以下参数[' + params.join(', ') + ']至少需要传入一个');
		            }
		        }
		    }
		};

		util.verifyParamPresentJustOne = function(options, params) {
		    if (!!params) {
		        if (util.isString(params)) {
		            params = params.split(regWhiteSpace);
		        }
		        if (util.isArray(params)) {
		            var counter = params.reduce(function(p, param) {
		                if (util.exist(options[param])) {
		                    p++;
		                }
		                return p;
		            }, 0);
		            if (counter !== 1) {
		                util.onParamError('以下参数[' + params.join(', ') + ']必须且只能传入一个');
		            }
		        }
		    }
		};

		util.verifyBooleanWithDefault = function(options, name, defaultValue, prefix) {
		    if (util.undef(defaultValue)) {
		        defaultValue = true;
		    }
		    if (regWhiteSpace.test(name)) {
		        name = name.split(regWhiteSpace);
		    }
		    if (util.isArray(name)) {
		        name.forEach(function(n) {
		            util.verifyBooleanWithDefault(options, n, defaultValue, prefix);
		        });
		    } else {
		        if (typeof options[name] === 'undefined') {
		            options[name] = defaultValue;
		        } else if (!util.isBoolean(options[name])) {
		            util.onParamInvalidType(name, 'boolean', prefix);
		        }
		    }
		};

		util.verifyFileInput = function(fileInput) {
		    util.verifyParamPresent('fileInput', fileInput);
		    if (util.isString(fileInput)) {
		        fileInput = window.document.getElementById(fileInput);
		        if (!fileInput) {
		            util.onParamError('找不到要上传的文件对应的input, 请检查fileInput id');
		        }
		    }
		    if (fileInput.tagName.toLowerCase() !== 'input' || 
		            fileInput.type.toLowerCase() !== 'file') {
		        util.onParamError('请提供正确的fileInput');
		    }
		    return fileInput;
		};

		/**
		 * 验证是否是合法的文件类型
		 *
		 * @private
		 * @param  {type} type 待验证的文件类型
		 * @return {bool}      是否是合法的文件类型
		 */
		util.verifyFileType = function(type) {
		    util.verifyParamValid('type', type, util.validFileTypes);
		};

		util.verifyCallback = function(options, name) {
		    if (regWhiteSpace.test(name)) {
		        name = name.split(regWhiteSpace);
		    }
		    if (util.isArray(name)) {
		        name.forEach(function(n) {
		            util.verifyCallback(options, n);
		        });
		    } else {
		        if (!options[name]) {
		            options[name] = util.emptyFunc;
		        } else if (!util.isFunction(options[name])) {
		            util.onParamInvalidType(name, 'function');
		        }
		    }
		};

		util.verifyFileUploadCallback = function(options) {
		    util.verifyCallback(options, 'uploadprogress uploaddone uploaderror uploadcancel');
		};

		/*
		 * 文件相关 API
		 */

		util.validFileTypes = ['image', 'audio', 'video', 'file'];

		util.validFileExts = {
		    image: ['bmp', 'gif', 'jpg', 'jpeg', 'jng', 'png', 'webp'],
		    audio: ['mp3', 'wav', 'aac', 'wma', 'wmv', 'amr', 'mp2', 'flac', 'vorbis', 'ac3'],
		    video: ['mp4', 'rm', 'rmvb', 'wmv', 'avi', 'mpg', 'mpeg']
		};

		util.filterFiles = function(files, targetType) {
		    targetType = targetType.toLowerCase();
		    var anyfile = targetType === 'file';
		    var arr = [];
		    var ext, mime, type, subtype;
		    [].forEach.call(files, function(file) {
		        if (anyfile) {
		            arr.push(file);
		        } else {
		            ext = file.name.slice(file.name.lastIndexOf('.') + 1);
		            mime = file.type.split('/');
		            if (!!mime[0] && !!mime[1]) {
		                type = mime[0].toLowerCase();
		                subtype = mime[1].toLowerCase();
		                var match = false;
		                if (type === targetType) {
		                    match = true;
		                } else {
		                    match = util.validFileExts[targetType].indexOf(ext) !== -1;
		                }
		                if (match) {
		                    arr.push(file);
		                }
		            } else {
		                // unknow mime
		            }
		        }
		    });
		    return arr;
		};

		util.getFileName = (function() {
		    var supportFormData = util.notundef(window.FormData);
		    return function(fileInput) {
		        fileInput = util.verifyFileInput(fileInput);
		        if (supportFormData) {
		            return fileInput.files[0].name;
		        } else {
		            return fileInput.value.slice(fileInput.value.lastIndexOf('\\')+1);
		        }
		    };
		})();

		util.sizeText = (function() {
		    var sizeUnit = ['B','KB','MB','GB','TB','PB','EB','ZB','BB'];
		    return function(size) {
		        var text;
		        var index = 0;
		        do {
		            size = Math.floor(size*100)/100;
		            var unit = sizeUnit[index];
		            text = size + unit;
		            size /= 1024;
		            index++;
		        } while (size > 1);
		        return text;
		    };
		})();

		util.promises2cmds = function(promises) {
		    return promises.map(function(promise) {
		        return promise.cmd;
		    });
		};

		util.objs2accounts = function(objs) {
		    return objs.map(function(obj) {
		        return obj.account;
		    });
		};

		util.teams2ids = function(teams) {
		    return teams.map(function(team) {
		        return team.teamId;
		    });
		};

		util.objs2ids = function(objs) {
		    return objs.map(function(obj) {
		        return obj.id;
		    });
		};

		util.getMaxUpdateTime = function(array) {
		    var timetags = array.map(function(item) {
		        return +item.updateTime;
		    });
		    return Math.max.apply(Math, timetags);
		};

		util.genCheckUniqueFunc = function(keyPath, size) {
		    var array = [];
		    var set = {};
		    keyPath = keyPath || 'id';
		    size = size || 1000;
		    return function(obj) {
		        var id;
		        if (array.length >= size) {
		            id = array.shift();
		            delete set[id];
		        }
		        id = deep(obj, keyPath);
		        if (!set[id]) {
		            set[id] = true;
		            array.push(id);
		            return true;
		        } else {
		            return false;
		        }
		    };
		};

		module.exports = util;


	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		/*
		 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
		 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
		 */
		/*jshint unused:false */
		module.exports = function naturalSort (a, b) {
			"use strict";
			var re = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
				sre = /(^[ ]*|[ ]*$)/g,
				dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
				hre = /^0x[0-9a-f]+$/i,
				ore = /^0/,
				i = function(s) { return naturalSort.insensitive && ('' + s).toLowerCase() || '' + s; },
				// convert all to strings strip whitespace
				x = i(a).replace(sre, '') || '',
				y = i(b).replace(sre, '') || '',
				// chunk/tokenize
				xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
				yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
				// numeric, hex or date detection
				xD = parseInt(x.match(hre), 16) || (xN.length !== 1 && x.match(dre) && Date.parse(x)),
				yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null,
				oFxNcL, oFyNcL;
			// first try and sort Hex codes or Dates
			if (yD) {
				if ( xD < yD ) { return -1; }
				else if ( xD > yD ) { return 1; }
			}
			// natural sorting through split numeric strings and default strings
			for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
				// find floats not starting with '0', string or 0 if not defined (Clint Priest)
				oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
				oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
				// handle numeric vs string comparison - number < string - (Kyle Adams)
				if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
				// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
				else if (typeof oFxNcL !== typeof oFyNcL) {
					oFxNcL += '';
					oFyNcL += '';
				}
				if (oFxNcL < oFyNcL) { return -1; }
				if (oFxNcL > oFyNcL) { return 1; }
			}
			return 0;
		};


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		module.exports = deep;

		function deep (obj, prop) {
		  var segs = prop.split('.');
		  while (segs.length) {
		    var seg = segs.shift();
		    var existential = false;
		    if (seg[seg.length - 1] == '?') {
		      seg = seg.slice(0, -1);
		      existential = true;
		    }
		    obj = obj[seg];
		    if (!obj && existential) return obj;
		  }
		  return obj;
		}


	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		var console = window.console;
		if (!console) {
		    console = {
		        log: function() {},
		        info: function() {},
		        warn: function() {},
		        error: function() {}
		    };
		}


	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		/**
		 * 错误
		 *
		 * @constructor
		 * @param {String} message  错误消息
		 * @param {Number} code     错误码
		 */
		function NIMError(message, code) {
		    var self = this;
		    self.message = message;
		    self.code = code;
		    self.time = new Date();
		    self.timetag = +self.time;
		}
		NIMError.prototype = Object.create(Error.prototype);
		NIMError.prototype.name = 'NIMError';

		NIMError.prototype.appendMessage = function(message) {
		    var self = this;
		    if (!self.message) {
		        self.message = message;
		    } else if (!!message) {
		        self.message += ('(' + message + ')');
		    }
		};

		/**
		 * 错误码错误信息表
		 * 
		 * @memberOf NIMError
		 * @readOnly
		 * @enum {String}
		 */
		var codeMap = {
		    201: '客户端版本不对, 需升级sdk',
		    302: '用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配',
		    403: '非法操作或没有权限',
		    404: '对象(用户/群/聊天室)不存在',
		    405: '参数长度过长',
		    408: '客户端请求超时',
		    414: '参数错误',
		    415: '服务不可用/没有聊天室服务器可分配',
		    // 5分钟之内超过100次请求就出416, 并且禁止1个小时
		    416: '频率控制',
		    417: '重复操作',
		    422: '帐号被禁用',
		    500: '服务器内部错误',
		    501: '数据库操作失败',
		    503: '服务器繁忙',
		    509: '已失效',
		    801: '群人数达到上限',
		    802: '没有权限',
		    803: '群不存在或未发生变化',
		    804: '用户不在群里面',
		    805: '群类型不匹配',
		    806: '创建群数量达到限制',
		    807: '群成员状态不对',
		    809: '已经在群里',
		    997: '协议已失效',
		    998: '解包错误',
		    999: '打包错误',
		    13002: '聊天室状态异常',
		    13003: '在黑名单中',
		    13004: '在禁言名单中',
		    'Connect_Failed': '无法建立连接, 请确保flash版本号大于10, 或者请确保项目部署在HTTPS环境下（IE8/9）',
		    'Error_Internet_Disconnected': '网断了',
		    'Error_Connection_is_not_Established': '连接未建立',
		    'Error_Timeout': '超时',
		    'Param_Error': '参数错误',
		    'No_File_Selected': '请选择文件',
		    'Wrong_File_Type': '文件类型错误',
		    'File_Too_Large': '文件过大',
		    'Cross_Origin_Iframe': '不能获取跨域Iframe的内容',
		    'Not_Support': '不支持',
		    'NO_DB': '无数据库',
		    'DB': '数据库错误',
		    'Still_In_Team': '还在群里',
		    'Error_Unknown': '未知错误'
		};

		// 200 成功
		// 406 未发生变化
		// 808 申请成功
		// 810 邀请成功
		[200, 406, 808, 810].forEach(function(code) {
		    codeMap[code] = null;
		});

		NIMError.genError = function(code) {
		    var msg = codeMap[code];
		    if (msg === undefined) {
		        msg = '操作失败';
		    }
		    if (msg === null) {
		        return null;
		    } else {
		        return new NIMError(msg, code);
		    }
		};

		NIMError.newNetworkError = function() {
		    var code = 'Error_Internet_Disconnected';
		    return new NIMError(codeMap[code], code);
		};

		NIMError.newConnectError = function(message) {
		    var code = 'Connect_Failed';
		    return new NIMError(codeMap[code] || message, code);
		};

		NIMError.newConnectionError = function() {
		    var code = 'Error_Connection_is_not_Established';
		    return new NIMError(codeMap[code], code);
		};

		NIMError.newTimeoutError = function() {
		    var code = 'Error_Timeout';
		    return new NIMError(codeMap[code], code);
		};

		NIMError.newParamError = function(message) {
		    var code = 'Param_Error';
		    return new NIMError(message || codeMap[code], code);
		};

		NIMError.newNoFileError = function(message) {
		    var code = 'No_File_Selected';
		    return new NIMError(message || codeMap[code], code);
		};

		NIMError.newWrongFileTypeError = function(message) {
		    var code = 'Wrong_File_Type';
		    return new NIMError(message || codeMap[code], code);
		};

		NIMError.newFileTooLargeError = function(message) {
		    var code = 'File_Too_Large';
		    return new NIMError(message || codeMap[code], code);
		};

		NIMError.newCORSIframeError = function() {
		    var code = 'Cross_Origin_Iframe';
		    return new NIMError(codeMap[code], code);
		};

		NIMError.newSupportError = function(msg, code) {
		    return new NIMError('不支持' + msg, 'Not_Support_' + code);
		};

		NIMError.newSupportDBError = function() {
		    return NIMError.newSupportError('数据库', 'DB');
		};

		NIMError.noDBError = function() {
		    var code = 'NO_DB';
		    return new NIMError(codeMap[code], code);
		};

		NIMError.newDBError = function() {
		    var code = 'DB';
		    return new NIMError(codeMap[code], code);
		};

		NIMError.newUnknownError = function() {
		    var code = 'Error_Unknown';
		    return new NIMError(codeMap[code], code);
		};

		NIMError.stillInTeamError = function() {
		    var code = 'Still_In_Team';
		    return new NIMError(codeMap[code], code);
		};

		module.exports = NIMError;


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		var util = {};

		util.mixin = __webpack_require__(16);

		util.o = util.emptyObj = {};

		util.f = util.emptyFunc = function() {};

		util.regBlank = util.regWhiteSpace = /\s+/ig;

		module.exports = util;

		var arr = ['object', 'type', 'url', 'id', 'blob'];
		arr.forEach(function(name) {
		    __webpack_require__(17)("./" + name);
		});

	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		module.exports = function(to, from) {
		    Object.keys(from).forEach(function(key) {
		        to[key] = from[key];
		    });
		};

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var map = {
			"./blob": 18,
			"./blob.js": 18,
			"./entry": 19,
			"./entry.js": 19,
			"./id": 20,
			"./id.js": 20,
			"./index": 15,
			"./index.js": 15,
			"./mixin": 16,
			"./mixin.js": 16,
			"./object": 21,
			"./object.js": 21,
			"./type": 22,
			"./type.js": 22,
			"./url": 23,
			"./url.js": 23
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
		webpackContext.id = 17;


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);

		util.blobFromDataURL = function(dataURL) {
		    // convert base64/URLEncoded data component to raw binary data held in a string
		    var byteString;
		    if (dataURL.split(',')[0].indexOf('base64') >= 0) {
		        byteString = window.atob(dataURL.split(',')[1]);
		    } else {
		        byteString = window.decodeURIComponent(dataURL.split(',')[1]);
		    }

		    // separate out the mime component
		    var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];

		    // write the bytes of the string to a typed array
		    var ia = new window.Uint8Array(byteString.length);
		    for (var i = 0; i < byteString.length; i++) {
		        ia[i] = byteString.charCodeAt(i);
		    }

		    return new window.Blob([ia], {type:mimeString});
		};


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(15);

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);

		util.uniqueID = (function() {
		    var id = 0;
		    return function() {
		        return ''+(id++);
		    };
		}());


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);
		var mixin = __webpack_require__(16);

		util.merge = function(to) {
		    to = to || {};
		    var arr = [].slice.call(arguments, 1);
		    arr.forEach(function(obj) {
		        mixin(to, obj);
		    });
		    return to;
		};

		util.fetch = function(obj, config) {
		    Object.keys(obj).forEach(function(key) {
		        if (util.exist(config[key])) {
		            obj[key] = config[key];
		        }
		    });
		    return obj;
		};

		util.string2object = function(string, sep) {
		    var obj = {};
		    string = string || '';
		    string.split(sep).forEach(function(pair) {
		        var arr = pair.split('=');
		        var key = arr.shift();
		        if (!key) {
		            return;
		        }
		        obj[decodeURIComponent(key)] = decodeURIComponent(arr.join('='));
		    });
		    return obj;
		};

		util.object2string = function(obj, sep, encode) {
		    if (!obj) {
		        return '';
		    }
		    var arr = [];
		    Object.keys(obj).forEach(function(key) {
		        var value = obj[key];
		        if (util.isFunction(value)) {
		            return;
		        }
		        if (util.isDate(value)) {
		            value = value.getTime();
		        } else if (util.isArray(value)) {
		            value = value.join(',');
		        } else if (util.isObject(value)) {
		            value = JSON.stringify(value);
		        }
		        if (!!encode) {
		            value = encodeURIComponent(value);
		        }
		        arr.push(encodeURIComponent(key) + '=' + value);
		    });
		    return arr.join(sep || ',');
		};

		util.checkWithDefault = function(obj, key, dft) {
		    var value = obj[key] || obj[key.toLowerCase()];
		    if (!value) {
		        value = dft;
		        obj[key] = value;
		    }
		    return value;
		};


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);

		/*
		 * 类型相关 API
		 */

		util.typeOf = function(o) {
		    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
		};

		util.isString = function(o) {
		    return util.typeOf(o) === 'string';
		};

		util.isNumber = function(o) {
		    return util.typeOf(o) === 'number';
		};

		util.isBoolean = function(o) {
		    return util.typeOf(o) === 'boolean';
		};

		util.isArray = function(o) {
		    return util.typeOf(o) === 'array';
		};

		util.isFunction = function(o) {
		    return util.typeOf(o) === 'function';
		};

		util.isObject = function(o) {
		    return util.typeOf(o) === 'object';
		};

		util.isDate = function(o) {
		    return util.typeOf(o) === 'date';
		};

		util.isRegExp = function(o) {
		    return util.typeOf(o) === 'regexp';
		};

		util.isError = function(o) {
		    return util.typeOf(o) === 'error';
		};

		util.isnull = function(o) {
		    return o === null;
		};

		util.notnull = function(o) {
		    return o !== null;
		};

		util.undef = function(o) {
		    return typeof o === 'undefined';
		};

		util.notundef = function(o) {
		    return typeof o !== 'undefined';
		};

		util.exist = function(o) {
		    return util.notundef(o) && util.notnull(o);
		};

		util.notexist = function(o) {
		    return util.undef(o) || util.isnull(o);
		};


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);

		util.genUrlSep = function(url) {
		    return url.indexOf('?') < 0 ? '?' : '&';
		};

		util.object2query = function(obj) {
		    return util.object2string(obj, '&', true);
		};

		util.url2origin = (function() {
		    var reg = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		    return function(url) {
		        if (reg.test(url||'')) {
		            return RegExp.$1.toLowerCase();
		        }
		        return '';
		    };
		}());


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var ApiBaseFn = __webpack_require__(9).fn;

		ApiBaseFn.isConnected = function() {
		    return this.protocol.isConnected();
		};

		ApiBaseFn.connect = function() {
		    this.protocol.connect();
		};

		ApiBaseFn.disconnect = function() {
		    this.protocol.disconnect();
		};


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var ApiBaseFn = __webpack_require__(9).fn;
		var util = __webpack_require__(10);
		var NIMError = __webpack_require__(14);
		var config = __webpack_require__(26);
		var nos = __webpack_require__(27);
		var Upload = __webpack_require__(28);
		var blob = __webpack_require__(37);

		// 如果没有idClient, 那么生成一个
		ApiBaseFn.assignIdClient = function(options) {
		    options.idClient = options.idClient || util.guid();
		};

		ApiBaseFn.sendText = function(options){
		    var self = this;
		    options.type = 'text';
		    self.processCallback(options);
		    options.msg = new self.message.TextMessage(options);
		    return self.sendMsg(options);
		};

		ApiBaseFn.previewFile = function(options) {
		    util.verifyOptions(options, 'done');
		    if (!options.type) {
		        options.type = 'file';
		    }
		    util.verifyParamPresentJustOne(options, 'dataURL blob fileInput');

		    // 如果传入dataURL, 那么转成blob
		    if (!!options.dataURL) {
		        options.blob = blob.fromDataURL(options.dataURL);
		    }
		    // 如果是 blob
		    else if (!!options.blob) {
		    }
		    // 如果是 fileInput
		    else if (!!options.fileInput) {
		        options.fileInput = util.verifyFileInput(options.fileInput);
		        if (!!options.fileInput.files) {
		            if (!options.fileInput.files.length) {
		                options.done(NIMError.newNoFileError('请选择' + options.type + '文件后再预览'), options);
		                return;
		            }
		        }
		    }

		    this.processCallback(options);
		    var responseBody = nos.genResponseBody(options.type) || {};
		    this.getNosToken({
		        responseBody: JSON.stringify(responseBody).replace(/\"/gi, '\\\"'),
		        callback: function(error, nosToken) {
		            if (!!error) {
		                this.assignIdClient(options.callback.options);
		                options.done(error, options.callback.options);
		                return;
		            } else {
		                options.nosToken = nosToken;
		                this._doPreviewFile(options);
		            }
		        }.bind(this)
		    });
		};

		ApiBaseFn._doPreviewFile = function(options) {
		    var uploaddone = options.uploaddone;
		    options.uploaddone = function(error, json) {
		        if (!!error) {
		            error.appendMessage('上传文件失败');
		            this.assignIdClient(options.callback.options);
		            options.done(error, options.callback.options);
		            return;
		        } else {
		            json = nos.parseResponse(json);
		            json.url = config.genDownloadUrl(options.nosToken.bucket, options.params.Object);
		            if (!!options.fileInput) {
		                json.name = util.getFileName(options.fileInput);
		            } else if (!!options.blob) {
		                json.name = '';
		                var type = options.blob.type;
		                json.ext = type.slice(type.lastIndexOf('/')+1);
		            }
		            if (!json.ext) {
		                var lastDotIndex = json.name.lastIndexOf('.');
		                if (lastDotIndex === -1) {
		                    json.ext = '';
		                } else {
		                    json.ext = json.name.slice(lastDotIndex+1);
		                }
		            }
		            options.uploaddone = uploaddone;
		            options.done(null, util.copy(json));
		            return;
		        }
		    }.bind(this);
		    options.url = config.genUploadUrl(options.nosToken.bucket);
		    options.params = this.assembleUploadParams(options.nosToken);
		    options.fileName = 'file';
		    new Upload(options);
		};

		ApiBaseFn.sendFile = function(options) {
		    var self = this;
		    if (!options.type) {
		        options.type = 'file';
		    }
		    util.verifyParamPresentJustOne(options, 'dataURL blob fileInput file');
		    self.processCallback(options);

		    // 如果传入dataURL, 直接预览发送
		    if (!!options.dataURL) {
		        self._previewAndSendFile(options);
		    }
		    // 如果传入blob, 直接预览发送
		    else if (!!options.blob) {
		        self._previewAndSendFile(options);
		    }
		    // 如果传入file input, 那么先处理参数后再预览发送
		    else if (!!options.fileInput) {
		        options.fileInput = util.verifyFileInput(options.fileInput);
		        if (!!options.fileInput.files && !options.fileInput.files.length) {
		            options.done(NIMError.newNoFileError('请选择' + options.type + '文件后再发送'), options.callback.options);
		            return;
		        }
		        self._previewAndSendFile(options);
		    }
		    // 如果传入文件对象, 那么直接发送
		    else if (!!options.file) {
		        options.msg = new self.message.FileMessage(options);
		        return self.sendMsg(options);
		    }
		};

		ApiBaseFn._previewAndSendFile = function(options) {
		    var self = this;
		    util.verifyCallback(options, 'uploaddone beforesend');
		    // 缓存 done 回调
		    var done = options.done;
		    options.done = function(error, json) {
		        if (!!error) {
		            self.assignIdClient(options.callback.options);
		            done(error, options.callback.options);
		        } else {
		            // 恢复 done 回调
		            options.done = done;
		            options.uploaddone(null, util.copy(json));
		            options.file = json;
		            options.msg = new self.message.FileMessage(options);
		            options.beforesend(self.sendMsg(options));
		        }
		    }.bind(self);
		    self.previewFile(options);
		};

		ApiBaseFn.assembleUploadParams = function(nosToken) {
		    if (!!nosToken) {
		        return {
		            'Object': decodeURIComponent(nosToken.objectName),
		            'x-nos-token': nosToken.token,
		            'x-nos-entity-type': 'json'
		        };
		    }
		    return null;
		};

		ApiBaseFn.sendCustomMsg = function(options) {
		    var self = this;
		    options.type = 'custom';
		    self.processCallback(options);
		    options.msg = new self.message.CustomMessage(options);
		    return self.sendMsg(options);
		};

		ApiBaseFn.sendMsg = function(options) {
		    var self = this;
		    var protocol = self.protocol;
		    var msg = options.msg;
		    var content = {};
		    // 重发
		    if (!!options.resend) {
		        if (options.flow !== 'out' || options.status !== 'fail') {
		            return util.onError('只能重发发送失败的消息');
		        }
		    }
		    // 将 idClient 记录下来, 如果发送失败, 那么可以其返回给开发者
		    options.callback.options.idClient = msg.idClient;
		    // 子类处理
		    self.beforeSendMsg(options, content);

		    var rtnMsg = options.rtnMsg = self.formatReturnMsg(msg);
		    if (protocol.putMsg) {
		        // 记录 Promise
		        content.promise = protocol.putMsg(rtnMsg, 'sendMsg');
		    }
		    // 处理错误
		    options.cbaop = function(error) {
		        // 如果是断网, 需要将错误写入数据库
		        if (error && error.code === 'Error_Connection_is_not_Established') {
		            rtnMsg.status = 'fail';
		            if (protocol.updateMsg) {
		                protocol.updateMsg(rtnMsg);
		            }
		            return rtnMsg;
		        }
		    };

		    content.msg = msg;
		    self.sendCmd(options.cmd, content, options.callback);
		    return util.copy(rtnMsg);
		};

		ApiBaseFn.formatReturnMsg = function(msg) {
		    var self = this;
		    msg = util.copy(msg);
		    self.protocol.completeMsg(msg);
		    msg.status = 'sending';
		    msg = self.message.reverse(msg);
		    return msg;
		};


	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		/*** IMPORTS FROM imports-loader ***/
		var hash = "80c4f63580e336cb504623d07af3be65b1a6ae76";
		var shortHash = "80c4f63";
		var version = "2.0.0";
		var sdkVersion = 20;
		var protocolVersion = 1;
		var lbsUrl = "https://webtest.netease.im/lbs/webconf.jsp";

		/* globals hash:false, shortHash:false, version:false, sdkVersion:false, protocolVersion:false, lbsUrl:true */
		// those globals will be injected via webpack, @see ./build/webpack.config.js

		var theAnswerToEverything = 42 * 1000;

		var config = {
		    info: {
		        hash: hash,
		        shortHash: shortHash,
		        version: version,
		        sdkVersion: sdkVersion,
		        protocolVersion: protocolVersion
		    },

		    lbsUrl: lbsUrl,
		    // lbs 最大重试次数, 当所有 lbs 地址都不可用的时候, 会尝试重新获取 lbs 地址, 目前只重试一次
		    // lbsMaxRetryCount: 1,
		    
		    // 连接超时时间
		    connectTimeout: theAnswerToEverything,
		    // xhr 超时时间
		    xhrTimeout: 6000,
		    // socket 超时时间
		    socketTimeout: 6000,
		    // 重连间隔和最大间隔
		    reconnectionDelay: 656.25,
		    reconnectionDelayMax: theAnswerToEverything,
		    reconnectionJitter: 0.1,

		    // 心跳间隔
		    heartbeatInterval: 3 * 60 * 1000,

		    // 协议超时时间
		    cmdTimeout: theAnswerToEverything
		};





		// =============================
		// socket 服务器地址相关
		// =============================
		// 格式化
		config.formatSocketUrl = function(url) {
		    if (url.indexOf('https') === -1) { return 'https://' + url; }
		    return url;
		};





		// =====================================
		// nos 相关
		// =====================================
		var nosFileServerUrl = 'https://nos.netease.com/';
		config.fileServerUrl = nosFileServerUrl;

		// 上传地址本来应该是 http://bucket.nos.netease.com, 但是 nos nginx 处理有点问题, 所以放在后面
		config.genUploadUrl = function(bucket) {
		    return config.fileServerUrl + bucket;
		};

		// 下载地址把 bucket 提到前面, 可以 CDN 加速
		config.genDownloadUrl = function(bucket, object) {
		    // return config.fileServerUrl + bucket + '/' + object;
		    // HTTPS 子域名 bucket 放前面会提示证书不合法, 所以目前用 http 格式, 等 nos 修复
		    if (config.fileServerUrl === nosFileServerUrl) {
		        return 'http://' + bucket + '.nos.netease.com/' + object;
		    }
		};





		module.exports = config;



	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);

		var responseBodyMap = {
		    file: {
		        // url: '',                 // url 根据Bucket和ObjectName拼装
		        // ext: '',                 // 文件后缀, 根据name来截取
		        // name: '$(FileName)',     // 文件名由程序自己获取
		        md5: '$(Etag)',
		        size: '$(ObjectSize)'   // long 单位byte
		    },
		    image: {
		        // url: '',
		        // ext: '',
		        // name: '$(FileName)',
		        md5: '$(Etag)',
		        size: '$(ObjectSize)',
		        w: '$(ImageInfo.Width)',    // 图片宽度 int 单位: 像素
		        h: '$(ImageInfo.Height)'    // 图片高度 int 单位: 像素
		    },
		    audio: {
		        // url: '',
		        // ext: '',
		        // name: '$(FileName)',
		        md5: '$(Etag)',
		        size: '$(ObjectSize)',
		        dur: '$(AVinfo.Audio.Duration)'     // 持续时间, 单位ms
		    },
		    video: {
		        // url: '',
		        // ext: '',
		        // name: '$(FileName)',
		        md5: '$(Etag)',
		        size: '$(ObjectSize)',
		        dur: '$(AVinfo.Video.Duration)',    // 持续时间, 单位ms
		        w: '$(AVinfo.Video.Width)',         // 分辨率
		        h: '$(AVinfo.Video.Height)'         // 分辨率
		    }
		};

		var nos = {};

		nos.genResponseBody = function(type) {
		    type = type || 'file';
		    return responseBodyMap[type];
		};

		nos.parseResponse = function(obj) {
		    if (util.notundef(obj.size)) {
		        obj.size = +obj.size;
		    }
		    if (util.notundef(obj.w)) {
		        obj.w = +obj.w;
		    }
		    if (util.notundef(obj.h)) {
		        obj.h = +obj.h;
		    }
		    if (util.notundef(obj.dur)) {
		        obj.dur = +obj.dur;
		    }
		    return obj;
		};

		module.exports = nos;

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var dom = __webpack_require__(29);
		var util = __webpack_require__(10);
		var NIMError = __webpack_require__(14);
		var upload = __webpack_require__(30);

		// 是否支持FormData
		var supportFormData = util.notundef(window.FormData);
		// var supportFormData = false; // test code for mock IE 8/9
		// 文件最大100M
		var fileMaxSize = 100 * 1024 * 1024;

		/**
		 * 文件上传控件, 使用FormData或者Iframe上传文件
		 *
		 * @param {options} options 配置参数
		 * @param {String}          options.url             服务器url
		 * @param {String|Node}     options.fileInput       文件选择input的id或者节点对象
		 * @param {String}          options.type            文件类型过滤
		 * @param {Object}          options.params          其它参数
		 * @param {Function}        options.beginupload     开始上传图片的回调, 如果开发者传入 fileInput, 在此回调之前不能修改 fileInput, 否则上传的文件会错乱
		 * @param {Function}        options.uploadprogress  上传进度, ie9以下不支持上传进度
		 * @param {Function}        options.uploaddone      上传完成, 成功或者失败
		 * @param {[Object]}        headers                 请求头
		 */
		function Upload(options) {
		    var self = this;
		    self.options = util.copy(options);
		    util.verifyOptions(options, 'url fileName');
		    util.verifyParamPresentJustOne(options, 'blob fileInput');
		    util.verifyCallback(options, 'beginupload uploadprogress uploaddone');
		    if (!!options.fileInput) {
		        options.fileInput = util.verifyFileInput(options.fileInput);
		    }
		    if (!!options.type) {
		        util.verifyFileType(options.type);
		    }
		    if (!!options.timeout) {
		        util.verifyParamType('timeout', options.timeout, 'number');
		    } else {
		        // 0 means no timeout
		        options.timeout = 1000 * 60 * 10;
		    }
		    util.verifyFileUploadCallback(options);

		    options.data = {};
		    // 名字
		    var fileName = options.fileName;
		    if (supportFormData) {
		        // 如果是fileInput
		        if (!!options.fileInput) {
		            // 过滤
		            var fileList = !!options.type ? util.filterFiles(options.fileInput.files, options.type) : [].slice.call(options.fileInput.files, 0);
		            if (!fileList || !fileList.length) {
		                options.uploaddone(NIMError.newWrongFileTypeError('未读取到' + options.type + '类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了' + options.type + '类型的文件'));
		                return;
		            }
		            // 验证大小
		            var size = options.fileInput.files[0].size;
		            if (size > fileMaxSize) {
		                options.uploaddone(NIMError.newFileTooLargeError('文件大小超过100M'));
		                return;
		            }
		            options.data[fileName] = fileList[0];
		        } else if (!!options.blob) {
		            options.data[fileName] = options.blob;
		        }
		    } else {
		        var fileInput = options.fileInput;
		        dom.dataset(fileInput, 'name', fileName);
		        options.data.input = fileInput;
		    }

		    // 添加其它参数
		    if (options.params) {
		        util.merge(options.data, options.params);
		    }

		    self.sn = upload(options.url, {
		        // mode: 'iframe', // test code for mock IE 8/9
		        data: options.data,
		        onaftersend: function() {
		            options.beginupload(self);
		        },
		        onuploading: function(event) {
		            var percentage = Math.floor(event.loaded * 10000 / event.total) / 100.0;
		            options.uploadprogress({
		                total: event.total,
		                loaded: event.loaded,
		                percentage: percentage,
		                percentageText: percentage + '%'
		            });
		        },
		        onload: function(obj) {
		            // IE 8/9 报错走这里
		            if (!!obj.Error) {
		                self.onError(obj);
		            } else {
		                options.uploaddone(null, obj);
		            }
		        },
		        onerror: function(obj) {
		            // 高级浏览器报错走这里
		            try {
		                var result = JSON.parse(obj.result);
		                self.onError(result);
		            } catch (e) {
		                // ignore error
		                console.error(e);
		                options.uploaddone(new NIMError(obj.message, obj.code), self.options);
		            }
		        }
		    });
		}

		Upload.prototype.onError = function(obj) {
		    var self = this;
		    var options = self.options;
		    var error, reason, message;
		    obj = obj || {};
		    error = obj.Error || {};
		    reason = error.Code || 'unknown';
		    message = error.Message || '未知错误';
		    options.uploaddone(new NIMError(reason + '(' + message + ')', reason));
		};

		Upload.prototype.abort = function() {
		    upload.abort(this.sn);
		};

		module.exports = Upload;


	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);

		var dom = {};

		dom.remove = function(node) {
		    if (!!node.parentNode) {
		        node.parentNode.removeChild(node);
		    }
		};

		dom.dataset = function(node, key, value) {
		    if (util.exist(value)) {
		        node.setAttribute('data-'+key, value);
		    } else {
		        return node.getAttribute('data-'+key);
		    }
		};

		dom.on = dom.addEventListener = function(node, type, callback) {
		    if (node.addEventListener) {
		        node.addEventListener(type, callback, false);
		    } else if (node.attachEvent) {
		        node.attachEvent('on'+type, callback);
		    }
		};

		dom.off = dom.removeEventListener = function(node, type, callback) {
		    if (node.removeEventListener) {
		        node.removeEventListener(type, callback, false);
		    } else if (node.detachEvent) {
		        node.detachEvent('on'+type, callback);
		    }
		};

		dom.target = function(event) {
		    return event.target|| event.srcElement;
		};

		// TODO untest
		dom.html2node = function(html) {
		    var div = window.document.createElement('div');
		    div.innerHTML = html;
		    var children = [],
		        i,
		        l;
		    if (!!div.children) {
		        for (i=0, l=div.children.length; i<l; i++) {
		            children.push(div.children[i]);
		        }
		    } else {
		        for (i=0, l=div.childNodes.length; i<l; i++) {
		            var child = div.childNodes[i];
		            if (child.nodeType === 1) {
		                children.push(child);
		            }
		        }
		    }
		    return children.length > 1 ? div : children[0];
		};

		dom.createIframe = function(options) {
		    options = options || {};
		    var iframe = document.createElement('iframe');
		    iframe.frameBorder = 0;
		    if (options.name) {
		        iframe.name = options.name;
		    }
		    if (!options.visible) {
		        iframe.style.display = 'none';
		    }
		    if (util.isFunction(options.onload)) {
		        dom.on(iframe, 'load', function onIframeLoad(event) {
		            if (!iframe.src) {
		                return;
		            }
		            if (!options.multi) {
		                dom.off(iframe, 'load', onIframeLoad);
		            }
		            options.onload(event);
		        });
		    }
		    // will trigger onload
		    var parent = options.parent;
		    (parent || document.body).appendChild(iframe);
		    // ensure trigger onload async
		    var src = options.src || 'about:blank';
		    setTimeout(function() {
		        iframe.src = src;
		    }, 0);
		    return iframe;
		};

		module.exports = dom;

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);
		var ajax = __webpack_require__(31);

		var upload = function(url, options) {
		    options.method = 'POST';
		    options.headers = options.headers || {};
		    options.headers['Content-Type'] = 'multipart/form-data';
		    options.timeout = 0;
		    options.type = options.type || 'json';
		    return ajax(url, options);
		};

		util.mixin(upload, ajax);

		ajax.upload = upload;

		module.exports = upload;

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);
		var ProxyXhr = __webpack_require__(32);
		var ProxyUpload = __webpack_require__(35);
		var ProxyFrame = __webpack_require__(36);

		var cache = {};
		var doFilter = util.f;

		function getProxyByMode(options) {
		    var mode = options.mode;
		    var Constructor = ProxyXhr;
		    // 如果是 IE 8/9, 那么使用 iframe 模式
		    if (!window.FormData) {
		        mode = 'iframe';
		    }
		    if (mode === 'iframe') {
		        Constructor = options.upload ? ProxyUpload: ProxyFrame;
		    }
		    return new Constructor(options);
		}

		function getProxy(options) {
		    var upload = options.upload = (options.headers||util.o)['Content-Type'] === 'multipart/form-data';
		    var origin1 = (location.protocol + '//' + location.host).toLowerCase();
		    var origin2 = util.url2origin(options.url);
		    var cors = origin1 !== origin2;
		    if (!upload && !cors && !options.mode) {
		        return new ProxyXhr(options);
		    }
		    return getProxyByMode(options);
		}

		function clear(sn) {
		    var c = cache[sn];
		    if (!c) {
		        return;
		    }
		    c.req.destroy();
		    delete cache[sn];
		}

		function parseExtData(c, data) {
		    data = {
		        data: data
		    };
		    var keys = c.result.headers;
		    if (!!keys) {
		        data.headers = c.req.header(keys);
		    }
		    return data;
		}

		function callback(sn, type, data) {
		    var c = cache[sn];
		    if (!c) {
		        return;
		    }
		    if (type === 'onload' && !!c.result) {
		        data = parseExtData(c, data);
		    }
		    clear(sn);
		    var event = {
		        type: type,
		        result: data
		    };
		    doFilter(event);
		    if (!event.stopped) {
		        c[type](event.result);
		    }
		}

		function onLoad(sn, data) {
		    callback(sn, 'onload', data);
		}

		function onError(sn, error) {
		    callback(sn, 'onerror', error);
		}

		function mergeUrl(url, data) {
		    var sep = util.genUrlSep(url);
		    data = data || '';
		    if (util.isObject(data)) {
		        data = util.object2query(data);
		    }
		    if (!!data) {
		        url += (sep+data);
		    }
		    return url;
		}

		/**
		 * ajax
		 * @param  {String} url     请求地址
		 * @param  {Object} options 配置参数
		 * @property {String} [options.method='GET'] 请求方法, 可选值如下
		 * - 'GET'
		 * - 'POST'
		 * @property {Boolean} [options.sync=false] 是否是同步请求
		 * @property {Object|String} [options.query] 'GET' 请求的请求参数, 会拼接到 url
		 * @property {Object|String} [options.data] 'POST' 请求要发送的数据, 如果是 'GET' 请求, 那么此参数会被拼接到 url
		 * @property {Object} [options.headers] 头信息
		 * @property {Boolean} [options.cookie=false] 是否设置`withCredentials`
		 * @property {Number} [options.timeout=6000] ms, 超时时间, 0 表示不设置超时
		 * @property {String} [options.type='text'] 请求成功时, 返回的数据格式, 可选的值如下
		 * - 'text': 文本
		 * - 'json': 对象
		 * @property {Function} [options.onbeforesend] 发送之前的回调
		 * @property {Function} [options.onload] 请求完成回调函数
		 * @property {Function} [options.onerror] 请求失败回调函数
		 * @property {String} [options.mode='auto'] 跨域或者文件上传所使用的模式
		 * - 'auto': 自动, 高版本使用 HTML5, 低版本使用 iframe
		 * - 'iframe': 全部使用 iframe
		 * @property {Object} [options.result] onload回调时需包含的额外结果, 可选如下
		 * - headers, 字符串或字符串数组, 那么会返回相应的头信息
		 * @return {String}         序列号
		 */
		function ajax(url, options) {
		    options = options || {};
		    // cache callback
		    var sn = util.uniqueID();
		    var c = {
		        result: options.result,
		        onload: options.onload || util.f,
		        onerror: options.onerror || util.f
		    };
		    cache[sn] = c;
		    options.onload = onLoad.bind(null, sn);
		    options.onerror = onError.bind(null, sn);
		    // append query
		    if (!!options.query) {
		        url = mergeUrl(url, options.query);
		    }
		    // append data for get
		    var method = options.method || '';
		    if ((!method || /get/i.test(method)) && !!options.data) {
		        url = mergeUrl(url, options.data);
		        options.data = null;
		    }
		    options.url = url;
		    c.req = getProxy(options);
		    return sn;
		}

		ajax.filter = function(filter) {
		    if (util.isFunction(filter)) {
		        doFilter = filter;
		    }
		};

		ajax.abort = function(sn) {
		    var c = cache[sn];
		    if (!!c) {
		        c.req.abort();
		    }
		};

		module.exports = ajax;

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);
		var dom = __webpack_require__(29);
		var Proxy = __webpack_require__(33);

		function ProxyXhr(options) {
		    var self = this;
		    // addListeners
		    if (options.onuploading) {
		        self.on('uploading', options.onuploading);
		    }
		    Proxy.call(self, options);
		}

		var sp = Proxy.prototype;
		var pro = ProxyXhr.prototype = Object.create(sp);

		pro.doSend = function() {
		    var self = this;
		    var options = self.options;
		    var headers = options.headers;
		    var xhr = self.xhr = new XMLHttpRequest();
		    // add event listener
		    // upload progress
		    if (headers['Content-Type'] === 'multipart/form-data') {
		        delete headers['Content-Type'];
		        xhr.upload.onprogress = self.onProgress.bind(self);
		        xhr.upload.onload = self.onProgress.bind(self);
		        var data = options.data;
		        options.data = new FormData();
		        if (data) {
		            Object.keys(data).forEach(function(key) {
		                var value = data[key];
		                if (value.tagName && value.tagName.toUpperCase() === 'INPUT') {
		                    if (value.type === 'file') {
		                        [].forEach.call(value.files, function(file) {
		                            options.data.append(
		                                dom.dataset(value, 'name') ||
		                                value.name || 
		                                file.name ||
		                                ('file-'+util.uniqueID()), file);
		                        });
		                    }
		                } else {
		                    options.data.append(key, value);
		                }
		            });
		        }
		    }
		    // state change
		    xhr.onreadystatechange = self.onStateChange.bind(self);
		    // timeout
		    if (options.timeout !== 0) {
		        self.timer = setTimeout(self.onTimeout.bind(self), options.timeout);
		    }
		    // prepare and send
		    xhr.open(options.method, options.url, !options.sync);
		    Object.keys(headers).forEach(function(key) {
		        xhr.setRequestHeader(key, headers[key]);
		    });
		    if (!!options.cookie && ('withCredentials' in xhr)) {
		        xhr.withCredentials = true;
		    }
		    xhr.send(options.data);
		    self.afterSend();
		};

		pro.onProgress = function(event) {
		    // IE 10很神奇的, 在upload的load事件之后还会再触发一次progress, 并且loaded比total大。。。
		    if (event.lengthComputable && event.loaded <= event.total) {
		        this.emit('uploading', event);
		    }
		};

		pro.onStateChange = function() {
		    var self = this;
		    var xhr = self.xhr;
		    if (xhr.readyState===4) {
		        self.onLoad({
		            status: xhr.status,
		            result: xhr.responseText || ''
		        });
		    }
		};

		pro.getResponseHeader = function(key) {
		    var xhr = this.xhr;
		    return !xhr ? '' : xhr.getResponseHeader(key);
		};

		pro.destroy = function() {
		    var self = this;
		    // clear timeout
		    clearTimeout(self.timer);
		    // clear request
		    try {
		        self.xhr.onreadystatechange = util.f;
		        self.xhr.abort();
		    } catch (e) {
		        console.error('ignore', e);
		    }
		    sp.destroy.call(self);
		};

		module.exports = ProxyXhr;

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);
		var f = util.f;
		var EventEmitter = __webpack_require__(34);

		function Proxy(options) {
		    var self = this;
		    // addListeners
		    if (options.onload) {
		        self.once('load', options.onload);
		    }
		    if (options.onerror) {
		        self.once('error', options.onerror);
		    }
		    if (options.onbeforesend) {
		        self.once('beforesend', options.onbeforesend);
		    }
		    if (options.onaftersend) {
		        self.once('aftersend', options.onaftersend);
		    }
		    // handle options
		    options = self.options = util.fetch({
		        method: 'GET',
		        url: '',
		        sync: false,
		        data: null,
		        headers: {},
		        cookie: false,
		        timeout: 6000,
		        type: 'text',
		        // 文件上传用到的参数
		        form: null,
		        input: null,
		        // iframe 模式用到的代理地址
		        proxyUrl: ''
		    }, options);
		    // headers
		    var headers = options.headers;
		    var contentType = 'Content-Type';
		    if (util.notexist(headers[contentType])) {
		        headers[contentType] = 'application/x-www-form-urlencoded';
		    }
		    self.send();
		}

		var pro = Proxy.prototype = Object.create(EventEmitter.prototype);

		pro.send = function() {
		    var self = this;
		    var options = self.options;
		    try {
		        try {
		            self.emit('beforesend', options);
		        } catch (e) {
		            console.error('ignore', e);
		        }
		        self.doSend();
		    } catch (e) {
		        console.error('ignore', e);
		        self.onError('serverError', '请求失败:' + e.message);
		    }
		};

		pro.doSend = f;

		pro.afterSend = function() {
		    var self = this;
		    setTimeout(function() {
		        self.emit('aftersend', self.options);
		    }, 0);
		};

		pro.onLoad = function(event) {
		    var self = this;
		    var options = self.options;
		    var status = event.status;
		    var result = event.result;
		    // check status
		    if ((''+status).indexOf('2') !== 0) {
		        self.onError('serverError', '服务器返回异常状态', {
		            status: status,
		            result: result
		        });
		        return;
		    }
		    // parse json
		    if (options.type === 'json') {
		        try {
		            result = JSON.parse(result);
		        } catch(e) {
		            console.error('ignore', e);
		            self.onError('parseError', result);
		            return;
		        }
		    }
		    // onload
		    self.emit('load', result);
		};

		pro.onError = function(code, message, ext) {
		    var obj = util.isObject(ext) ? ext : {};
		    obj.code = code || 'error';
		    obj.message = message || '发生错误';
		    this.emit('error', obj);
		};

		pro.onTimeout = function() {
		    this.onError('timeout', '请求超时');
		};

		pro.abort = function() {
		    this.onError('abort', '客户端中止');
		};

		pro.header = function(key) {
		    var self = this;
		    if (!util.isArray(key)) {
		        return self.getResponseHeader(key || '');
		    }
		    var result = {};
		    key.forEach(function(k) {
		        result[k] = self.header(k);
		    });
		    return result;
		};

		pro.getResponseHeader = f;

		pro.destroy = f;

		module.exports = Proxy;

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * EventEmitter v4.2.11 - git.io/ee
		 * Unlicense - http://unlicense.org/
		 * Oliver Caldwell - http://oli.me.uk/
		 * @preserve
		 */

		;(function () {
		    'use strict';

		    /**
		     * Class for managing events.
		     * Can be extended to provide event functionality in other classes.
		     *
		     * @class EventEmitter Manages event registering and emitting.
		     */
		    function EventEmitter() {}

		    // Shortcuts to improve speed and size
		    var proto = EventEmitter.prototype;
		    var exports = this;
		    var originalGlobalValue = exports.EventEmitter;

		    /**
		     * Finds the index of the listener for the event in its storage array.
		     *
		     * @param {Function[]} listeners Array of listeners to search through.
		     * @param {Function} listener Method to look for.
		     * @return {Number} Index of the specified listener, -1 if not found
		     * @api private
		     */
		    function indexOfListener(listeners, listener) {
		        var i = listeners.length;
		        while (i--) {
		            if (listeners[i].listener === listener) {
		                return i;
		            }
		        }

		        return -1;
		    }

		    /**
		     * Alias a method while keeping the context correct, to allow for overwriting of target method.
		     *
		     * @param {String} name The name of the target method.
		     * @return {Function} The aliased method
		     * @api private
		     */
		    function alias(name) {
		        return function aliasClosure() {
		            return this[name].apply(this, arguments);
		        };
		    }

		    /**
		     * Returns the listener array for the specified event.
		     * Will initialise the event object and listener arrays if required.
		     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
		     * Each property in the object response is an array of listener functions.
		     *
		     * @param {String|RegExp} evt Name of the event to return the listeners from.
		     * @return {Function[]|Object} All listener functions for the event.
		     */
		    proto.getListeners = function getListeners(evt) {
		        var events = this._getEvents();
		        var response;
		        var key;

		        // Return a concatenated array of all matching events if
		        // the selector is a regular expression.
		        if (evt instanceof RegExp) {
		            response = {};
		            for (key in events) {
		                if (events.hasOwnProperty(key) && evt.test(key)) {
		                    response[key] = events[key];
		                }
		            }
		        }
		        else {
		            response = events[evt] || (events[evt] = []);
		        }

		        return response;
		    };

		    /**
		     * Takes a list of listener objects and flattens it into a list of listener functions.
		     *
		     * @param {Object[]} listeners Raw listener objects.
		     * @return {Function[]} Just the listener functions.
		     */
		    proto.flattenListeners = function flattenListeners(listeners) {
		        var flatListeners = [];
		        var i;

		        for (i = 0; i < listeners.length; i += 1) {
		            flatListeners.push(listeners[i].listener);
		        }

		        return flatListeners;
		    };

		    /**
		     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
		     *
		     * @param {String|RegExp} evt Name of the event to return the listeners from.
		     * @return {Object} All listener functions for an event in an object.
		     */
		    proto.getListenersAsObject = function getListenersAsObject(evt) {
		        var listeners = this.getListeners(evt);
		        var response;

		        if (listeners instanceof Array) {
		            response = {};
		            response[evt] = listeners;
		        }

		        return response || listeners;
		    };

		    /**
		     * Adds a listener function to the specified event.
		     * The listener will not be added if it is a duplicate.
		     * If the listener returns true then it will be removed after it is called.
		     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to attach the listener to.
		     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addListener = function addListener(evt, listener) {
		        var listeners = this.getListenersAsObject(evt);
		        var listenerIsWrapped = typeof listener === 'object';
		        var key;

		        for (key in listeners) {
		            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
		                listeners[key].push(listenerIsWrapped ? listener : {
		                    listener: listener,
		                    once: false
		                });
		            }
		        }

		        return this;
		    };

		    /**
		     * Alias of addListener
		     */
		    proto.on = alias('addListener');

		    /**
		     * Semi-alias of addListener. It will add a listener that will be
		     * automatically removed after its first execution.
		     *
		     * @param {String|RegExp} evt Name of the event to attach the listener to.
		     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addOnceListener = function addOnceListener(evt, listener) {
		        return this.addListener(evt, {
		            listener: listener,
		            once: true
		        });
		    };

		    /**
		     * Alias of addOnceListener.
		     */
		    proto.once = alias('addOnceListener');

		    /**
		     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
		     * You need to tell it what event names should be matched by a regex.
		     *
		     * @param {String} evt Name of the event to create.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.defineEvent = function defineEvent(evt) {
		        this.getListeners(evt);
		        return this;
		    };

		    /**
		     * Uses defineEvent to define multiple events.
		     *
		     * @param {String[]} evts An array of event names to define.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.defineEvents = function defineEvents(evts) {
		        for (var i = 0; i < evts.length; i += 1) {
		            this.defineEvent(evts[i]);
		        }
		        return this;
		    };

		    /**
		     * Removes a listener function from the specified event.
		     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to remove the listener from.
		     * @param {Function} listener Method to remove from the event.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeListener = function removeListener(evt, listener) {
		        var listeners = this.getListenersAsObject(evt);
		        var index;
		        var key;

		        for (key in listeners) {
		            if (listeners.hasOwnProperty(key)) {
		                index = indexOfListener(listeners[key], listener);

		                if (index !== -1) {
		                    listeners[key].splice(index, 1);
		                }
		            }
		        }

		        return this;
		    };

		    /**
		     * Alias of removeListener
		     */
		    proto.off = alias('removeListener');

		    /**
		     * Adds listeners in bulk using the manipulateListeners method.
		     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
		     * You can also pass it a regular expression to add the array of listeners to all events that match it.
		     * Yeah, this function does quite a bit. That's probably a bad thing.
		     *
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to add.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addListeners = function addListeners(evt, listeners) {
		        // Pass through to manipulateListeners
		        return this.manipulateListeners(false, evt, listeners);
		    };

		    /**
		     * Removes listeners in bulk using the manipulateListeners method.
		     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		     * You can also pass it an event name and an array of listeners to be removed.
		     * You can also pass it a regular expression to remove the listeners from all events that match it.
		     *
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to remove.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeListeners = function removeListeners(evt, listeners) {
		        // Pass through to manipulateListeners
		        return this.manipulateListeners(true, evt, listeners);
		    };

		    /**
		     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
		     * The first argument will determine if the listeners are removed (true) or added (false).
		     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		     * You can also pass it an event name and an array of listeners to be added/removed.
		     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
		     *
		     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		        var i;
		        var value;
		        var single = remove ? this.removeListener : this.addListener;
		        var multiple = remove ? this.removeListeners : this.addListeners;

		        // If evt is an object then pass each of its properties to this method
		        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
		            for (i in evt) {
		                if (evt.hasOwnProperty(i) && (value = evt[i])) {
		                    // Pass the single listener straight through to the singular method
		                    if (typeof value === 'function') {
		                        single.call(this, i, value);
		                    }
		                    else {
		                        // Otherwise pass back to the multiple function
		                        multiple.call(this, i, value);
		                    }
		                }
		            }
		        }
		        else {
		            // So evt must be a string
		            // And listeners must be an array of listeners
		            // Loop over it and pass each one to the multiple method
		            i = listeners.length;
		            while (i--) {
		                single.call(this, evt, listeners[i]);
		            }
		        }

		        return this;
		    };

		    /**
		     * Removes all listeners from a specified event.
		     * If you do not specify an event then all listeners will be removed.
		     * That means every event will be emptied.
		     * You can also pass a regex to remove all events that match it.
		     *
		     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeEvent = function removeEvent(evt) {
		        var type = typeof evt;
		        var events = this._getEvents();
		        var key;

		        // Remove different things depending on the state of evt
		        if (type === 'string') {
		            // Remove all listeners for the specified event
		            delete events[evt];
		        }
		        else if (evt instanceof RegExp) {
		            // Remove all events matching the regex.
		            for (key in events) {
		                if (events.hasOwnProperty(key) && evt.test(key)) {
		                    delete events[key];
		                }
		            }
		        }
		        else {
		            // Remove all listeners in all events
		            delete this._events;
		        }

		        return this;
		    };

		    /**
		     * Alias of removeEvent.
		     *
		     * Added to mirror the node API.
		     */
		    proto.removeAllListeners = alias('removeEvent');

		    /**
		     * Emits an event of your choice.
		     * When emitted, every listener attached to that event will be executed.
		     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
		     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
		     * So they will not arrive within the array on the other side, they will be separate.
		     * You can also pass a regular expression to emit to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		     * @param {Array} [args] Optional array of arguments to be passed to each listener.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.emitEvent = function emitEvent(evt, args) {
		        var listenersMap = this.getListenersAsObject(evt);
		        var listeners;
		        var listener;
		        var i;
		        var key;
		        var response;

		        for (key in listenersMap) {
		            if (listenersMap.hasOwnProperty(key)) {
		                listeners = listenersMap[key].slice(0);
		                i = listeners.length;

		                while (i--) {
		                    // If the listener returns true then it shall be removed from the event
		                    // The function is executed either with a basic call or an apply if there is an args array
		                    listener = listeners[i];

		                    if (listener.once === true) {
		                        this.removeListener(evt, listener.listener);
		                    }

		                    response = listener.listener.apply(this, args || []);

		                    if (response === this._getOnceReturnValue()) {
		                        this.removeListener(evt, listener.listener);
		                    }
		                }
		            }
		        }

		        return this;
		    };

		    /**
		     * Alias of emitEvent
		     */
		    proto.trigger = alias('emitEvent');

		    /**
		     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
		     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		     * @param {...*} Optional additional arguments to be passed to each listener.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.emit = function emit(evt) {
		        var args = Array.prototype.slice.call(arguments, 1);
		        return this.emitEvent(evt, args);
		    };

		    /**
		     * Sets the current value to check against when executing listeners. If a
		     * listeners return value matches the one set here then it will be removed
		     * after execution. This value defaults to true.
		     *
		     * @param {*} value The new value to check for when executing listeners.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.setOnceReturnValue = function setOnceReturnValue(value) {
		        this._onceReturnValue = value;
		        return this;
		    };

		    /**
		     * Fetches the current value to check against when executing listeners. If
		     * the listeners return value matches this one then it should be removed
		     * automatically. It will return true by default.
		     *
		     * @return {*|Boolean} The current value to check for or the default, true.
		     * @api private
		     */
		    proto._getOnceReturnValue = function _getOnceReturnValue() {
		        if (this.hasOwnProperty('_onceReturnValue')) {
		            return this._onceReturnValue;
		        }
		        else {
		            return true;
		        }
		    };

		    /**
		     * Fetches the events object and creates one if required.
		     *
		     * @return {Object} The events storage object.
		     * @api private
		     */
		    proto._getEvents = function _getEvents() {
		        return this._events || (this._events = {});
		    };

		    /**
		     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
		     *
		     * @return {Function} Non conflicting EventEmitter class.
		     */
		    EventEmitter.noConflict = function noConflict() {
		        exports.EventEmitter = originalGlobalValue;
		        return EventEmitter;
		    };

		    // Expose the class either via AMD, CommonJS or the global object
		    if (true) {
		        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		            return EventEmitter;
		        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    }
		    else if (typeof module === 'object' && module.exports){
		        module.exports = EventEmitter;
		    }
		    else {
		        exports.EventEmitter = EventEmitter;
		    }
		}.call(this));


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);
		var dom = __webpack_require__(29);
		var Proxy = __webpack_require__(33);

		var flag = 'NEJ-UPLOAD-RESULT:';
		var cache = {};

		function ProxyUpload(options) {
		    var self = this;
		    self.init();
		    Proxy.call(self, options);
		}

		var sp = Proxy.prototype;
		var pro = ProxyUpload.prototype = Object.create(sp);

		pro.init = (function() {
		    var init = false;
		    function onMessage(event) {
		        var data = event.data;
		        if (data.indexOf(flag) !== 0) {return;}
		        data = JSON.parse(data.replace(flag, ''));
		        var key = data.key;
		        var proxy = cache[key];
		        if (!proxy) {return;}
		        delete cache[key];
		        data.result = decodeURIComponent(data.result || '');
		        proxy.onLoad(data.result);
		    }
		    function initMessage() {
		        if (!init) {
		            init = true;
		            dom.on(window, 'message', onMessage);
		        }
		    }
		    return function() {
		        initMessage();
		    };
		}());

		pro.doSend = function() {
		    var self = this;
		    var options = self.options;
		    var key = self.key = util.uniqueID();
		    cache[key] = self;
		    // create form
		    var form = self.form = dom.html2node('<form style="display:none;"></form>');
		    document.body.appendChild(form);
		    form.target   = key;
		    form.method   = 'POST';
		    form.enctype  = 'multipart/form-data';
		    form.encoding = 'multipart/form-data';
		    var url = options.url;
		    var sep = util.genUrlSep(url);
		    form.action = url + sep + '_proxy_=form';
		    // 处理参数
		    var data = options.data;
		    var files = [];
		    var fileClones = [];
		    if (data) {
		        Object.keys(data).forEach(function(key) {
		            var value = data[key];
		            if (value.tagName && value.tagName.toUpperCase() === 'INPUT') {
		                if (value.type === 'file') {
		                    var file = value;
		                    var fileClone = file.cloneNode(true);
		                    file.parentNode.insertBefore(fileClone, file);
		                    var name = dom.dataset(file, 'name');
		                    if (name) {
		                        file.name = name;
		                    }
		                    form.appendChild(file);
		                    // Remove the HTML5 form attribute from the input
		                    file.setAttribute('form', '');
		                    file.removeAttribute('form');
		                    files.push(value);
		                    fileClones.push(fileClone);
		                }
		            } else {
		                var input = dom.html2node('<input type="hidden"/>');
		                input.name = key;
		                input.value = value;
		                form.appendChild(input);
		            }
		        });
		    }
		    function restoreFiles() {
		        // 将 input 放回原处
		        files.forEach(function(file, index) {
		            var fileClone = fileClones[index];
		            file.name = fileClone.name;
		            file.setAttribute('form', fileClone.getAttribute('form'));
		            fileClone.parentNode.replaceChild(file, fileClone);
		        });
		    }
		    // create iframe
		    var iframe = self.iframe = dom.createIframe({
		        name: key,
		        onload: function() {
		            // check aborted
		            if (self.aborted) {
		                restoreFiles();
		                return;
		            }
		            dom.on(iframe, 'load', self.checkResult.bind(self));
		            form.submit();
		            restoreFiles();
		            self.afterSend();
		        }
		    });
		};

		// same domain upload result check
		pro.checkResult = function() {
		    var self = this;
		    var body;
		    var text;
		    try {
		        body = self.iframe.contentWindow.document.body;
		        text = (body.innerText||body.textContent||'').trim();
		        // if same domain with upload proxy html, use post message path
		        if (text.indexOf(flag) >= 0 ||
		            body.innerHTML.indexOf(flag) >= 0) {
		            return;
		        }
		    } catch (e) {
		        // ignore if not same domain
		        console.error('ignore', e);
		        return;
		    }
		    self.onLoad(text);
		};

		pro.onLoad = function(result) {
		    var self = this;
		    sp.onLoad.call(self, {
		        status: 200,
		        result: result
		    });
		    // do the destroy work
		    dom.remove(self.form);
		    dom.remove(self.iframe);
		    sp.destroy.call(self);
		};

		// do nothing when destroy, this will let the iframe load, so we can restoreFiles.
		// pro.destroy = function() {
		//     var self = this;
		//     dom.remove(self.form);
		//     dom.remove(self.iframe);
		//     sp.destroy.call(self);
		// };

		pro.abort = function() {
		    var self = this;
		    self.aborted = true;
		    delete cache[self.key];
		    sp.abort.call(self);
		};

		module.exports = ProxyUpload;

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(15);
		var dom = __webpack_require__(29);
		var Proxy = __webpack_require__(33);

		var cache = {};

		function ProxyFrame(options) {
		    var self = this;
		    self.init();
		    Proxy.call(self, options);
		}

		var sp = Proxy.prototype;
		var pro = ProxyFrame.prototype = Object.create(sp);

		pro.init = (function() {
		    var flag = 'NEJ-AJAX-DATA:';
		    var init = false;
		    function onMessage(event) {
		        var data = event.data;
		        if (data.indexOf(flag) !== 0) {return;}
		        data = JSON.parse(data.replace(flag, ''));
		        var key = data.key;
		        var proxy = cache[key];
		        if (!proxy) {return;}
		        delete cache[key];
		        data.result = decodeURIComponent(data.result || '');
		        proxy.onLoad(data);
		    }
		    function initMessage() {
		        if (!init) {
		            init = true;
		            dom.on(window, 'message', onMessage);
		        }
		    }
		    return function() {
		        initMessage();
		    };
		}());

		pro.doSend = function() {
		    var self = this;
		    var options = self.options;
		    var origin = util.url2origin(options.url);
		    var proxyUrl = options.proxyUrl || (origin + '/res/nej_proxy_frame.html');
		    var frame = cache[proxyUrl];
		    // callback list
		    if (util.isArray(frame)) {
		        frame.push(self.doSend.bind(self, options));
		        return;
		    }
		    // build frame proxy
		    if (!frame) {
		        cache[proxyUrl] = [
		            self.doSend.bind(self, options)
		        ];
		        dom.createIframe({
		            src: proxyUrl,
		            onload: function(event) {
		                var cbs = cache[proxyUrl];
		                cache[proxyUrl] = dom.target(event).contentWindow;
		                cbs.forEach(function(cb) {
		                    try {
		                        cb();
		                    } catch (e) {
		                        // ignore
		                    }
		                });
		            }
		        });
		        return;
		    }
		    // check aborted
		    if (self.aborted) {return;}
		    // send message to frame
		    var key = self.key = util.uniqueID();
		    cache[key] = self;
		    var data = util.fetch({
		        method: 'GET',
		        url: '',
		        data: null,
		        headers: {},
		        timeout: 0
		    }, options);
		    data.key = key;
		    frame.postMessage(JSON.stringify(data), '*');
		    self.afterSend();
		};

		pro.abort = function() {
		    var self = this;
		    self.aborted = true;
		    delete cache[self.key];
		    sp.abort.call(self);
		};

		module.exports = ProxyFrame;

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		/**
		 * NIM Blob 工具方法, 通过 `NIM.blob` 来获取此工具的引用
		 * 
		 * @namespace blob
		 */
		var blob = {};

		/**
		 * 将包含 MIME type 和 base64 数据的 data URL 转换为 Blob 对象
		 *
		 * @memberOf blob
		 * @method fromDataURL
		 * 
		 * @param  {String} dataURL 包含 MIME type 和 base64 数据的 data URL
		 * @return {Blob}           Blob对象
		 *
		 * @example
		 * var dataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAIEBgUDAf/EACwQAAEEAQMCBQMFAQAAAAAAAAEAAgMRBAUSISIxBhNBUWEUMnEjkaGxstH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAIREAAgIBAwUBAAAAAAAAAAAAAAECERIEFCExM0FxodH/2gAMAwEAAhEDEQA/ANkiKtm5gxI203fK87Y2XVnv+w7lXNpK2ebLKhHMyUuDHbtpokdr9lksjPzM187pMowYEBIfKw7TIR3ArsL4vuquJNlYenYub9TPE2U1I272lx4cGngjtYPp8rPuoWLI3SLlaTqr8pz8XLa2PNiHW1vZw9CPhdVXxkpK0MIiKQBZzXcgxZGVJz+hh20D3cTf+QtE40LDS4+gaLJXE13FfFqNSxyRvkg8qTpI2HktPNe7gVRqe2x4tqzh5OP5PhAxMaDULXHn1sElWtQo+HJdvb6cEbvwP5VbLex3hzJxnSmSXHjDJKFciq49vlT1SYjw8xrTuknYyNu1v3E1dD8WuZza9kPwSymAaRnMNzF7GFx4LmubyCtoOyxpx/q9UwtMi3mPGAllcfgU3n3WyW/SJ4EkERFrA+EWORahkxszJnS5QEz3MEZMguwBX9eq9FFzA4EEWCk0n1HbqjN5GmQyajKxkhDiwxuO8dba+1xruOVX1DCZp2JFPNlDysZrY4uN5DjxurgE178LRnToDN5vXd9r4UpNPxZQBLE14BsB3ItZ9tF3Y4OKmnNWvPNfTx0zAxsKHdj9Zl63yu5dIT6n/ivqLWNY3a0ABSWhJJUiIRETAIiIAIiIAIiIAIiIA//Z';
		 * var blob = NIM.blob.fromDataURL(dataURL);
		 * // blob instanceof Blob === true;
		 */
		blob.fromDataURL = util.blobFromDataURL;

		module.exports = blob;


	/***/ },
	/* 38 */,
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var config = __webpack_require__(26);
		var logger = __webpack_require__(40);
		var NIMError = __webpack_require__(14);

		function Protocol(options) {
		    var self = this;
		    self.options = util.copy(options);

		    // 存储 cmd 对应的 timer, 收到 ack 之后会从此 map 中删除 TODO
		    self.timerMap = {};
		    // 存储 cmd 对应的 callback, 收到 ack 或 timeout 之后会从此 map 中删除 TODO
		    self.cmdCallbackMap = {};
		    // 存储 cmd 对应的 content, 收到 ack 或 timeout 之后会从此 map 中删除 TODO
		    self.cmdContentMap = {};

		    self.init();
		    self.initConnect();
		}

		var ProtocolFn = Protocol.fn = Protocol.prototype;

		/**
		 * 发送消息到服务器
		 * 
		 * @private
		 * @param  {Object} options 配置参数
		 * @property {String}   cmd       命令名称
		 * @property {Map}      content   命令内容
		 * @property {Function} callback  回调函数
		 * @return {Number}         cmd序列号
		 */
		ProtocolFn.sendCmd = function(cmd, content, callback) {
		    var self = this;
		    logger.log('Protocol Command\t' + cmd + '\t', !!content ? content : '');

		    cmd = self.parser.createCmd(cmd, content);
		    var ser = cmd.SER;

		    var keys;
		    // 如果没有content, 那么分配一个, 然后存储content
		    content = content || {};
		    self.cmdContentMap[ser] = content;
		    // 如果只有一个参数
		    if (!!content.single) {
		        delete content.single;
		        keys = Object.keys(content);
		        if (keys.length === 1) {
		            self.cmdContentMap[ser] = content[keys[0]];
		        }
		    }
		    // 删掉不存储的参数
		    if (!!content.NOTSTORE) {
		        keys = content.NOTSTORE.split(' ');
		        keys.forEach(function(key) {
		            delete content[key];
		        });
		        delete content.NOTSTORE;
		    }
		    // 存储callback
		    callback = callback || content.callback;
		    if (!!callback) {
		        self.cmdCallbackMap[ser] = callback;
		    }
		    // 发送命令
		    if (self.isConnected()){
		        self.doSendCmd(cmd);
		    } else {
		        self.markCallbackInvalid(ser, NIMError.newConnectionError());
		    }
		    return ser;
		};

		ProtocolFn.doSendCmd = function(cmd) {
		    var self = this;
		    var ser = cmd.SER;
		    // 存储超时
		    self.timerMap[ser] = setTimeout(function() {
		        self.markCallbackInvalid(ser, NIMError.newTimeoutError());
		    }, config.cmdTimeout);
		    // 发送命令
		    self.socket.send(JSON.stringify(cmd));
		};

		// 获取 ser 对应的 obj
		ProtocolFn.getObjWithSer = function(ser) {
		    var self = this;
		    var obj = self.cmdContentMap[ser];
		    delete self.cmdContentMap[ser];
		    return util.copy(obj);
		};

		// 获取 ser 对应的 callback
		ProtocolFn.getCallbackWithSer = function(ser) {
		    var self = this;
		    var callback = self.cmdCallbackMap[ser];
		    delete self.cmdCallbackMap[ser];
		    return callback;
		};

		// 获取 ser 对应的 timer
		ProtocolFn.getTimerWithSer = function(ser) {
		    var self = this;
		    var timer = self.timerMap[ser];
		    delete self.timerMap[ser];
		    return timer;
		};

		// 清除 ser 对应的 timer
		ProtocolFn.clearTimerWithSer = function(ser) {
		    var self = this;
		    var timer = self.getTimerWithSer(ser);
		    if (!!timer) {
		        clearTimeout(timer);
		    }
		};

		// 使 ser 对应的 callback 失效
		ProtocolFn.markCallbackInvalid = function(ser, error) {
		    var self = this;
		    // 删除 obj
		    self.getObjWithSer(ser);
		    // 清除 timer
		    self.clearTimerWithSer(ser);
		    var callback = self.getCallbackWithSer(ser);
		    if (!!callback) {
		        var content = callback.options;
		        // 异步回调
		        window.setTimeout(function() {
		            callback(error || NIMError.newUnknownError(), content);
		        }, 0);
		    }
		};

		/**
		 * 使所有回调失效
		 */
		ProtocolFn.markAllCallbackInvalid = function(error) {
		    var self = this;
		    Object.keys(this.cmdCallbackMap).forEach(function(ser) {
		        self.markCallbackInvalid(ser, error);
		    });
		};

		// 获取packet关联的content
		ProtocolFn.getPacketObj = function(packet) {
		    if (!!packet && !!packet.raw) {
		        var ser = packet.raw.ser;
		        if (!!ser) {
		            return this.getObjWithSer(ser);
		        }
		    }
		    return null;
		};

		// 调用回包确认回调函数
		ProtocolFn.callPacketAckCallback = function(packet) {
		    var self = this;
		    if (!!packet && !!packet.raw) {
		        var ser = packet.raw.ser;
		        if (!!ser) {
		            self.clearTimerWithSer(ser);
		            var callback = self.getCallbackWithSer(ser);
		            if(!!callback){
		                if (!!packet.promise) {
		                    packet.promise.then(function() {
		                        callback(packet.error, packet.obj);
		                    }, function(event) {
		                        var error = NIMError.newDBError();
		                        error.event = event;
		                        logger.error('promise error', error, event);
		                        callback(error, packet.obj);
		                    });
		                } else {
		                    callback(packet.error, packet.obj);
		                }
		            }
		        }
		    }
		};

		/**
		 * 接收到服务端的消息
		 *
		 * @private
		 * @param {String} data 包数据
		 * @return {Void}
		 */
		ProtocolFn.onMessage = function(data){
		    var self = this;
		    var packet = self.parser.parseResponse(data);
		    packet.obj = self.getPacketObj(packet);
		    logger.log('Protocol Response\t' + packet.cmd + '\t', packet.error || (!!packet.content ? packet.content : ''));
		    self.processResponse(packet);
		    self.callPacketAckCallback(packet);
		};

		/*
		 * 各种各样的错误
		 * - 同步
		 * - 同步群成员
		 * - 心跳
		 */
		ProtocolFn.onMiscError = function(error, obj, message) {
		    if (!!error) {
		        error.appendMessage(message);
		        this.notifyError(error, obj);
		    }
		};

		// 只有当建立连接之后才通知错误, 断开连接之后不通知错误
		ProtocolFn.notifyError = function(error, obj) {
		    var self = this;
		    if (self.isConnected()) {
		        var args = ['onError ' + self.name, error];
		        if (error.event) { args.push(error.event); }
		        if (obj) { args.push(obj); }
		        logger.error.apply(logger.error, args);
		        self.options.onerror(error, obj);
		    }
		};

		module.exports = Protocol;

		__webpack_require__(42);
		__webpack_require__(45);
		__webpack_require__(48);


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		var platform = __webpack_require__(41);
		var util = __webpack_require__(10);

		/**
		 * 日志, SDK内部使用
		 *
		 * @constructor
		 * @alias Logger
		 */
		var logger = {
		    debug: false,
		    api: 'log',
		    style: 'color:blue;',
		    log: util.emptyFunc,
		    info: util.emptyFunc,
		    warn: util.emptyFunc
		};

		var supportedBrowsers = ['Chrome', 'Safari', 'Firefox'];

		logger.setDebug = function(debug) {
		    debug = !!debug ? debug : false;
		    logger.debug = debug;
		    if (!!debug.style) {
		        logger.style = debug.style;
		    }
		    if (logger.debug && !!window.console) {
		        var cs = window.console;
		        logger.log = function() {
		            var args = logger.formatArgs(arguments);
		            if (cs.log) {
		                if (cs.log.apply) {
		                    if (supportedBrowsers.indexOf(platform.name) !== -1 && util.isString(args[0])) {
		                        args[0] = '%c' + args[0];
		                        args.splice(1, 0, logger.style);
		                    }
		                    logger.chrome('log', args);
		                } else {
		                    logger.ie('log', args);
		                }
		            }
		        };
		        logger.info = function() {
		            var args = logger.formatArgs(arguments);
		            if (cs.info) {
		                if (cs.info.apply) {
		                    logger.chrome('info', args);
		                } else {
		                    logger.ie('info', args);
		                }
		            }
		        };
		        logger.warn = function() {
		            var args = logger.formatArgs(arguments);
		            if (cs.warn) {
		                if (cs.warn.apply) {
		                    logger.chrome('warn', args);
		                } else {
		                    logger.ie('warn', args);
		                }
		            }
		        };
		        logger.error = function() {
		            var args = logger.formatArgs(arguments);
		            if (cs.error) {
		                if (cs.error.apply) {
		                    logger.chrome('error', args);
		                } else {
		                    logger.ie('error', args);
		                }
		            }
		        };
		        // use this form to skip drop_console of uglify
		        logger.chrome = function(func, args) {
		            if (supportedBrowsers.indexOf(platform.name) !== -1) {
		                cs[func].apply(cs, args);
		            } else {
		                logger.ie(func, args);
		            }
		        };
		        logger.ie = function(func, args) {
		            args.forEach(function(arg) {
		                cs[func](JSON.stringify(arg, null, 4));
		            });
		        };
		    }
		};

		logger.formatArgs = function(args) {
		    args = [].slice.call(args, 0);
		    var date = new Date();
		    var dateStr = date.getFullYear() + '-' + formatTimeUnit((date.getMonth()+1)) + '-' + formatTimeUnit(date.getDate()) + ' ' + formatTimeUnit(date.getHours()) + ':' + formatTimeUnit(date.getMinutes()) + ':' + formatTimeUnit(date.getSeconds()) + ':' + formatTimeUnit(date.getMilliseconds(), 3);
		    var prefix = '[NIM SDK LOG ' + dateStr + ' ' + (+date) + ']\t';
		    if (util.isString(args[0])) {
		        args[0] = prefix + args[0];
		    } else {
		        args.splice(0, 0, prefix);
		    }
		    return args;
		};
		var formatTimeUnit = function(num, count) {
		    count = count || 2;
		    var str = '' + num;
		    while (str.length < count) {
		        str = '0' + str;
		    }
		    return str;
		};

		module.exports = logger;

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*!
		 * Platform.js v1.3.1 <http://mths.be/platform>
		 * Copyright 2014-2016 Benjamin Tan <https://d10.github.io/>
		 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
		 * Available under MIT license <http://mths.be/mit>
		 */
		;(function() {
		  'use strict';

		  /** Used to determine if values are of the language type `Object` */
		  var objectTypes = {
		    'function': true,
		    'object': true
		  };

		  /** Used as a reference to the global object */
		  var root = (objectTypes[typeof window] && window) || this;

		  /** Backup possible global object */
		  var oldRoot = root;

		  /** Detect free variable `exports` */
		  var freeExports = objectTypes[typeof exports] && exports;

		  /** Detect free variable `module` */
		  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

		  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
		  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
		  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
		    root = freeGlobal;
		  }

		  /**
		   * Used as the maximum length of an array-like object.
		   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
		   * for more details.
		   */
		  var maxSafeInteger = Math.pow(2, 53) - 1;

		  /** Opera regexp */
		  var reOpera = /\bOpera/;

		  /** Possible global object */
		  var thisBinding = this;

		  /** Used for native method references */
		  var objectProto = Object.prototype;

		  /** Used to check for own properties of an object */
		  var hasOwnProperty = objectProto.hasOwnProperty;

		  /** Used to resolve the internal `[[Class]]` of values */
		  var toString = objectProto.toString;

		  /*--------------------------------------------------------------------------*/

		  /**
		   * Capitalizes a string value.
		   *
		   * @private
		   * @param {string} string The string to capitalize.
		   * @returns {string} The capitalized string.
		   */
		  function capitalize(string) {
		    string = String(string);
		    return string.charAt(0).toUpperCase() + string.slice(1);
		  }

		  /**
		   * A utility function to clean up the OS name.
		   *
		   * @private
		   * @param {string} os The OS name to clean up.
		   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
		   * @param {string} [label] A label for the OS.
		   */
		  function cleanupOS(os, pattern, label) {
		    // platform tokens defined at
		    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
		    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
		    var data = {
		      '6.4':  '10',
		      '6.3':  '8.1',
		      '6.2':  '8',
		      '6.1':  'Server 2008 R2 / 7',
		      '6.0':  'Server 2008 / Vista',
		      '5.2':  'Server 2003 / XP 64-bit',
		      '5.1':  'XP',
		      '5.01': '2000 SP1',
		      '5.0':  '2000',
		      '4.0':  'NT',
		      '4.90': 'ME'
		    };
		    // detect Windows version from platform tokens
		    if (pattern && label && /^Win/i.test(os) &&
		        (data = data[0/*Opera 9.25 fix*/, /[\d.]+$/.exec(os)])) {
		      os = 'Windows ' + data;
		    }
		    // correct character case and cleanup
		    os = String(os);

		    if (pattern && label) {
		      os = os.replace(RegExp(pattern, 'i'), label);
		    }

		    os = format(
		      os.replace(/ ce$/i, ' CE')
		        .replace(/\bhpw/i, 'web')
		        .replace(/\bMacintosh\b/, 'Mac OS')
		        .replace(/_PowerPC\b/i, ' OS')
		        .replace(/\b(OS X) [^ \d]+/i, '$1')
		        .replace(/\bMac (OS X)\b/, '$1')
		        .replace(/\/(\d)/, ' $1')
		        .replace(/_/g, '.')
		        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
		        .replace(/\bx86\.64\b/gi, 'x86_64')
		        .replace(/\b(Windows Phone) OS\b/, '$1')
		        .split(' on ')[0]
		    );

		    return os;
		  }

		  /**
		   * An iteration utility for arrays and objects.
		   *
		   * @private
		   * @param {Array|Object} object The object to iterate over.
		   * @param {Function} callback The function called per iteration.
		   */
		  function each(object, callback) {
		    var index = -1,
		        length = object ? object.length : 0;

		    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
		      while (++index < length) {
		        callback(object[index], index, object);
		      }
		    } else {
		      forOwn(object, callback);
		    }
		  }

		  /**
		   * Trim and conditionally capitalize string values.
		   *
		   * @private
		   * @param {string} string The string to format.
		   * @returns {string} The formatted string.
		   */
		  function format(string) {
		    string = trim(string);
		    return /^(?:webOS|i(?:OS|P))/.test(string)
		      ? string
		      : capitalize(string);
		  }

		  /**
		   * Iterates over an object's own properties, executing the `callback` for each.
		   *
		   * @private
		   * @param {Object} object The object to iterate over.
		   * @param {Function} callback The function executed per own property.
		   */
		  function forOwn(object, callback) {
		    for (var key in object) {
		      if (hasOwnProperty.call(object, key)) {
		        callback(object[key], key, object);
		      }
		    }
		  }

		  /**
		   * Gets the internal `[[Class]]` of a value.
		   *
		   * @private
		   * @param {*} value The value.
		   * @returns {string} The `[[Class]]`.
		   */
		  function getClassOf(value) {
		    return value == null
		      ? capitalize(value)
		      : toString.call(value).slice(8, -1);
		  }

		  /**
		   * Host objects can return type values that are different from their actual
		   * data type. The objects we are concerned with usually return non-primitive
		   * types of "object", "function", or "unknown".
		   *
		   * @private
		   * @param {*} object The owner of the property.
		   * @param {string} property The property to check.
		   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
		   */
		  function isHostType(object, property) {
		    var type = object != null ? typeof object[property] : 'number';
		    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
		      (type == 'object' ? !!object[property] : true);
		  }

		  /**
		   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
		   *
		   * @private
		   * @param {string} string The string to qualify.
		   * @returns {string} The qualified string.
		   */
		  function qualify(string) {
		    return String(string).replace(/([ -])(?!$)/g, '$1?');
		  }

		  /**
		   * A bare-bones `Array#reduce` like utility function.
		   *
		   * @private
		   * @param {Array} array The array to iterate over.
		   * @param {Function} callback The function called per iteration.
		   * @returns {*} The accumulated result.
		   */
		  function reduce(array, callback) {
		    var accumulator = null;
		    each(array, function(value, index) {
		      accumulator = callback(accumulator, value, index, array);
		    });
		    return accumulator;
		  }

		  /**
		   * Removes leading and trailing whitespace from a string.
		   *
		   * @private
		   * @param {string} string The string to trim.
		   * @returns {string} The trimmed string.
		   */
		  function trim(string) {
		    return String(string).replace(/^ +| +$/g, '');
		  }

		  /*--------------------------------------------------------------------------*/

		  /**
		   * Creates a new platform object.
		   *
		   * @memberOf platform
		   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
		   *  context object.
		   * @returns {Object} A platform object.
		   */
		  function parse(ua) {

		    /** The environment context object */
		    var context = root;

		    /** Used to flag when a custom context is provided */
		    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

		    // juggle arguments
		    if (isCustomContext) {
		      context = ua;
		      ua = null;
		    }

		    /** Browser navigator object */
		    var nav = context.navigator || {};

		    /** Browser user agent string */
		    var userAgent = nav.userAgent || '';

		    ua || (ua = userAgent);

		    /** Used to flag when `thisBinding` is the [ModuleScope] */
		    var isModuleScope = isCustomContext || thisBinding == oldRoot;

		    /** Used to detect if browser is like Chrome */
		    var likeChrome = isCustomContext
		      ? !!nav.likeChrome
		      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

		    /** Internal `[[Class]]` value shortcuts */
		    var objectClass = 'Object',
		        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
		        enviroClass = isCustomContext ? objectClass : 'Environment',
		        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
		        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

		    /** Detect Java environment */
		    var java = /\bJava/.test(javaClass) && context.java;

		    /** Detect Rhino */
		    var rhino = java && getClassOf(context.environment) == enviroClass;

		    /** A character to represent alpha */
		    var alpha = java ? 'a' : '\u03b1';

		    /** A character to represent beta */
		    var beta = java ? 'b' : '\u03b2';

		    /** Browser document object */
		    var doc = context.document || {};

		    /**
		     * Detect Opera browser (Presto-based)
		     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
		     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
		     */
		    var opera = context.operamini || context.opera;

		    /** Opera `[[Class]]` */
		    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
		      ? operaClass
		      : (opera = null);

		    /*------------------------------------------------------------------------*/

		    /** Temporary variable used over the script's lifetime */
		    var data;

		    /** The CPU architecture */
		    var arch = ua;

		    /** Platform description array */
		    var description = [];

		    /** Platform alpha/beta indicator */
		    var prerelease = null;

		    /** A flag to indicate that environment features should be used to resolve the platform */
		    var useFeatures = ua == userAgent;

		    /** The browser/environment version */
		    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

		    /** A flag to indicate if the OS ends with "/ Version" */
		    var isSpecialCasedOS;

		    /* Detectable layout engines (order is important) */
		    var layout = getLayout([
		      'Trident',
		      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
		      'iCab',
		      'Presto',
		      'NetFront',
		      'Tasman',
		      'KHTML',
		      'Gecko'
		    ]);

		    /* Detectable browser names (order is important) */
		    var name = getName([
		      'Adobe AIR',
		      'Arora',
		      'Avant Browser',
		      'Breach',
		      'Camino',
		      'Epiphany',
		      'Fennec',
		      'Flock',
		      'Galeon',
		      'GreenBrowser',
		      'iCab',
		      'Iceweasel',
		      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
		      'K-Meleon',
		      'Konqueror',
		      'Lunascape',
		      'Maxthon',
		      'Midori',
		      'Nook Browser',
		      'PhantomJS',
		      'Raven',
		      'Rekonq',
		      'RockMelt',
		      'SeaMonkey',
		      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
		      'Sleipnir',
		      'SlimBrowser',
		      'Sunrise',
		      'Swiftfox',
		      'WebPositive',
		      'Opera Mini',
		      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
		      'Opera',
		      { 'label': 'Opera', 'pattern': 'OPR' },
		      'Chrome',
		      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
		      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
		      { 'label': 'IE', 'pattern': 'IEMobile' },
		      { 'label': 'IE', 'pattern': 'MSIE' },
		      'Safari'
		    ]);

		    /* Detectable products (order is important) */
		    var product = getProduct([
		      { 'label': 'BlackBerry', 'pattern': 'BB10' },
		      'BlackBerry',
		      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
		      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
		      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
		      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
		      'Google TV',
		      'Lumia',
		      'iPad',
		      'iPod',
		      'iPhone',
		      'Kindle',
		      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
		      'Nook',
		      'PlayBook',
		      'PlayStation 4',
		      'PlayStation 3',
		      'PlayStation Vita',
		      'TouchPad',
		      'Transformer',
		      { 'label': 'Wii U', 'pattern': 'WiiU' },
		      'Wii',
		      'Xbox One',
		      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
		      'Xoom'
		    ]);

		    /* Detectable manufacturers */
		    var manufacturer = getManufacturer({
		      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
		      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
		      'Asus': { 'Transformer': 1 },
		      'Barnes & Noble': { 'Nook': 1 },
		      'BlackBerry': { 'PlayBook': 1 },
		      'Google': { 'Google TV': 1 },
		      'HP': { 'TouchPad': 1 },
		      'HTC': {},
		      'LG': {},
		      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
		      'Motorola': { 'Xoom': 1 },
		      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
		      'Nokia': { 'Lumia': 1 },
		      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
		      'Sony': { 'PlayStation 4': 1, 'PlayStation 3': 1, 'PlayStation Vita': 1 }
		    });

		    /* Detectable OSes (order is important) */
		    var os = getOS([
		      'Windows Phone ',
		      'Android',
		      'CentOS',
		      'Debian',
		      'Fedora',
		      'FreeBSD',
		      'Gentoo',
		      'Haiku',
		      'Kubuntu',
		      'Linux Mint',
		      'Red Hat',
		      'SuSE',
		      'Ubuntu',
		      'Xubuntu',
		      'Cygwin',
		      'Symbian OS',
		      'hpwOS',
		      'webOS ',
		      'webOS',
		      'Tablet OS',
		      'Linux',
		      'Mac OS X',
		      'Macintosh',
		      'Mac',
		      'Windows 98;',
		      'Windows '
		    ]);

		    /*------------------------------------------------------------------------*/

		    /**
		     * Picks the layout engine from an array of guesses.
		     *
		     * @private
		     * @param {Array} guesses An array of guesses.
		     * @returns {null|string} The detected layout engine.
		     */
		    function getLayout(guesses) {
		      return reduce(guesses, function(result, guess) {
		        return result || RegExp('\\b' + (
		          guess.pattern || qualify(guess)
		        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
		      });
		    }

		    /**
		     * Picks the manufacturer from an array of guesses.
		     *
		     * @private
		     * @param {Array} guesses An object of guesses.
		     * @returns {null|string} The detected manufacturer.
		     */
		    function getManufacturer(guesses) {
		      return reduce(guesses, function(result, value, key) {
		        // lookup the manufacturer by product or scan the UA for the manufacturer
		        return result || (
		          value[product] ||
		          value[0/*Opera 9.25 fix*/, /^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
		          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
		        ) && key;
		      });
		    }

		    /**
		     * Picks the browser name from an array of guesses.
		     *
		     * @private
		     * @param {Array} guesses An array of guesses.
		     * @returns {null|string} The detected browser name.
		     */
		    function getName(guesses) {
		      return reduce(guesses, function(result, guess) {
		        return result || RegExp('\\b' + (
		          guess.pattern || qualify(guess)
		        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
		      });
		    }

		    /**
		     * Picks the OS name from an array of guesses.
		     *
		     * @private
		     * @param {Array} guesses An array of guesses.
		     * @returns {null|string} The detected OS name.
		     */
		    function getOS(guesses) {
		      return reduce(guesses, function(result, guess) {
		        var pattern = guess.pattern || qualify(guess);
		        if (!result && (result =
		              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
		            )) {
		          result = cleanupOS(result, pattern, guess.label || guess);
		        }
		        return result;
		      });
		    }

		    /**
		     * Picks the product name from an array of guesses.
		     *
		     * @private
		     * @param {Array} guesses An array of guesses.
		     * @returns {null|string} The detected product name.
		     */
		    function getProduct(guesses) {
		      return reduce(guesses, function(result, guess) {
		        var pattern = guess.pattern || qualify(guess);
		        if (!result && (result =
		              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
		              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
		            )) {
		          // split by forward slash and append product version if needed
		          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
		            result[0] += ' ' + result[1];
		          }
		          // correct character case and cleanup
		          guess = guess.label || guess;
		          result = format(result[0]
		            .replace(RegExp(pattern, 'i'), guess)
		            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
		            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
		        }
		        return result;
		      });
		    }

		    /**
		     * Resolves the version using an array of UA patterns.
		     *
		     * @private
		     * @param {Array} patterns An array of UA patterns.
		     * @returns {null|string} The detected version.
		     */
		    function getVersion(patterns) {
		      return reduce(patterns, function(result, pattern) {
		        return result || (RegExp(pattern +
		          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
		      });
		    }

		    /**
		     * Returns `platform.description` when the platform object is coerced to a string.
		     *
		     * @name toString
		     * @memberOf platform
		     * @returns {string} Returns `platform.description` if available, else an empty string.
		     */
		    function toStringPlatform() {
		      return this.description || '';
		    }

		    /*------------------------------------------------------------------------*/

		    // convert layout to an array so we can add extra details
		    layout && (layout = [layout]);

		    // detect product names that contain their manufacturer's name
		    if (manufacturer && !product) {
		      product = getProduct([manufacturer]);
		    }
		    // clean up Google TV
		    if ((data = /\bGoogle TV\b/.exec(product))) {
		      product = data[0];
		    }
		    // detect simulators
		    if (/\bSimulator\b/i.test(ua)) {
		      product = (product ? product + ' ' : '') + 'Simulator';
		    }
		    // detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS
		    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
		      description.push('running in Turbo/Uncompressed mode');
		    }
		    // detect iOS
		    if (/^iP/.test(product)) {
		      name || (name = 'Safari');
		      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
		        ? ' ' + data[1].replace(/_/g, '.')
		        : '');
		    }
		    // detect Kubuntu
		    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
		      os = 'Kubuntu';
		    }
		    // detect Android browsers
		    else if (manufacturer && manufacturer != 'Google' &&
		        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) {
		      name = 'Android Browser';
		      os = /\bAndroid\b/.test(os) ? os : 'Android';
		    }
		    // detect false positives for Firefox/Safari
		    else if (!name || (data = !/\bMinefield\b|\(Android;/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
		      // escape the `/` for Firefox 1
		      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
		        // clear name of false positives
		        name = null;
		      }
		      // reassign a generic name
		      if ((data = product || manufacturer || os) &&
		          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
		        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
		      }
		    }
		    // detect Firefox OS
		    if ((data = /\((Mobile|Tablet).*?Firefox\b/i.exec(ua)) && data[1]) {
		      os = 'Firefox OS';
		      if (!product) {
		        product = data[1];
		      }
		    }
		    // detect non-Opera versions (order is important)
		    if (!version) {
		      version = getVersion([
		        '(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))',
		        'Version',
		        qualify(name),
		        '(?:Firefox|Minefield|NetFront)'
		      ]);
		    }
		    // detect stubborn layout engines
		    if (layout == 'iCab' && parseFloat(version) > 3) {
		      layout = ['WebKit'];
		    } else if (
		        layout != 'Trident' &&
		        (data =
		          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
		          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && 'WebKit' ||
		          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident')
		        )
		    ) {
		      layout = [data];
		    }
		    // detect NetFront on PlayStation
		    else if (/\bPlayStation\b(?! Vita\b)/i.test(name) && layout == 'WebKit') {
		      layout = ['NetFront'];
		    }
		    // detect Windows Phone 7 desktop mode
		    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
		      name += ' Mobile';
		      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
		      description.unshift('desktop mode');
		    }
		    // detect Windows Phone 8+ desktop mode
		    else if (/\bWPDesktop\b/i.test(ua)) {
		      name = 'IE Mobile';
		      os = 'Windows Phone 8+';
		      description.unshift('desktop mode');
		      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
		    }
		    // detect IE 11 and above
		    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
		      if (!/\bWPDesktop\b/i.test(ua)) {
		        if (name) {
		          description.push('identifying as ' + name + (version ? ' ' + version : ''));
		        }
		        name = 'IE';
		      }
		      version = data[1];
		    }
		    // detect Microsoft Edge
		    else if ((name == 'Chrome' || name != 'IE') && (data = /\bEdge\/([\d.]+)/.exec(ua))) {
		      name = 'Microsoft Edge';
		      version = data[1];
		      layout = ['Trident'];
		    }
		    // leverage environment features
		    if (useFeatures) {
		      // detect server-side environments
		      // Rhino has a global function while others have a global object
		      if (isHostType(context, 'global')) {
		        if (java) {
		          data = java.lang.System;
		          arch = data.getProperty('os.arch');
		          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
		        }
		        if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
		          os || (os = data[0].os || null);
		          try {
		            data[1] = context.require('ringo/engine').version;
		            version = data[1].join('.');
		            name = 'RingoJS';
		          } catch(e) {
		            if (data[0].global.system == context.system) {
		              name = 'Narwhal';
		            }
		          }
		        }
		        else if (typeof context.process == 'object' && (data = context.process)) {
		          name = 'Node.js';
		          arch = data.arch;
		          os = data.platform;
		          version = /[\d.]+/.exec(data.version)[0];
		        }
		        else if (rhino) {
		          name = 'Rhino';
		        }
		      }
		      // detect Adobe AIR
		      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
		        name = 'Adobe AIR';
		        os = data.flash.system.Capabilities.os;
		      }
		      // detect PhantomJS
		      else if (getClassOf((data = context.phantom)) == phantomClass) {
		        name = 'PhantomJS';
		        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
		      }
		      // detect IE compatibility modes
		      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
		        // we're in compatibility mode when the Trident version + 4 doesn't
		        // equal the document mode
		        version = [version, doc.documentMode];
		        if ((data = +data[1] + 4) != version[1]) {
		          description.push('IE ' + version[1] + ' mode');
		          layout && (layout[1] = '');
		          version[1] = data;
		        }
		        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
		      }
		      os = os && format(os);
		    }
		    // detect prerelease phases
		    if (version && (data =
		          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
		          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
		          /\bMinefield\b/i.test(ua) && 'a'
		        )) {
		      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
		      version = version.replace(RegExp(data + '\\+?$'), '') +
		        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
		    }
		    // detect Firefox Mobile
		    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
		      name = 'Firefox Mobile';
		    }
		    // obscure Maxthon's unreliable version
		    else if (name == 'Maxthon' && version) {
		      version = version.replace(/\.[\d.]+/, '.x');
		    }
		    // detect Silk desktop/accelerated modes
		    else if (name == 'Silk') {
		      if (!/\bMobi/i.test(ua)) {
		        os = 'Android';
		        description.unshift('desktop mode');
		      }
		      if (/Accelerated *= *true/i.test(ua)) {
		        description.unshift('accelerated');
		      }
		    }
		    // detect Xbox 360 and Xbox One
		    else if (/\bXbox\b/i.test(product)) {
		      os = null;
		      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
		        description.unshift('mobile mode');
		      }
		    }
		    // add mobile postfix
		    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
		        (os == 'Windows CE' || /Mobi/i.test(ua))) {
		      name += ' Mobile';
		    }
		    // detect IE platform preview
		    else if (name == 'IE' && useFeatures && context.external === null) {
		      description.unshift('platform preview');
		    }
		    // detect BlackBerry OS version
		    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
		    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
		          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
		          version
		        )) {
		      data = [data, /BB10/.test(ua)];
		      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
		      version = null;
		    }
		    // detect Opera identifying/masking itself as another browser
		    // http://www.opera.com/support/kb/view/843/
		    else if (this != forOwn && (
		          product != 'Wii' && (
		            (useFeatures && opera) ||
		            (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
		            (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
		            (name == 'IE' && (
		              (os && !/^Win/.test(os) && version > 5.5) ||
		              /\bWindows XP\b/.test(os) && version > 8 ||
		              version == 8 && !/\bTrident\b/.test(ua)
		            ))
		          )
		        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {

		      // when "indentifying", the UA contains both Opera and the other browser's name
		      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
		      if (reOpera.test(name)) {
		        if (/\bIE\b/.test(data) && os == 'Mac OS') {
		          os = null;
		        }
		        data = 'identify' + data;
		      }
		      // when "masking", the UA contains only the other browser's name
		      else {
		        data = 'mask' + data;
		        if (operaClass) {
		          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
		        } else {
		          name = 'Opera';
		        }
		        if (/\bIE\b/.test(data)) {
		          os = null;
		        }
		        if (!useFeatures) {
		          version = null;
		        }
		      }
		      layout = ['Presto'];
		      description.push(data);
		    }
		    // detect WebKit Nightly and approximate Chrome/Safari versions
		    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
		      // correct build for numeric comparison
		      // (e.g. "532.5" becomes "532.05")
		      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
		      // nightly builds are postfixed with a `+`
		      if (name == 'Safari' && data[1].slice(-1) == '+') {
		        name = 'WebKit Nightly';
		        prerelease = 'alpha';
		        version = data[1].slice(0, -1);
		      }
		      // clear incorrect browser versions
		      else if (version == data[1] ||
		          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
		        version = null;
		      }
		      // use the full Chrome version when available
		      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
		      // detect Blink layout engine
		      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && name != 'IE' && name != 'Microsoft Edge') {
		        layout = ['Blink'];
		      }
		      // detect JavaScriptCore
		      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
		      if (!useFeatures || (!likeChrome && !data[1])) {
		        layout && (layout[1] = 'like Safari');
		        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
		      } else {
		        layout && (layout[1] = 'like Chrome');
		        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
		      }
		      // add the postfix of ".x" or "+" for approximate versions
		      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
		      // obscure version for some Safari 1-2 releases
		      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
		        version = data;
		      }
		    }
		    // detect Opera desktop modes
		    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
		      name += ' ';
		      description.unshift('desktop mode');
		      if (data == 'zvav') {
		        name += 'Mini';
		        version = null;
		      } else {
		        name += 'Mobile';
		      }
		      os = os.replace(RegExp(' *' + data + '$'), '');
		    }
		    // detect Chrome desktop mode
		    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
		      description.unshift('desktop mode');
		      name = 'Chrome Mobile';
		      version = null;

		      if (/\bOS X\b/.test(os)) {
		        manufacturer = 'Apple';
		        os = 'iOS 4.3+';
		      } else {
		        os = null;
		      }
		    }
		    // strip incorrect OS versions
		    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
		        ua.indexOf('/' + data + '-') > -1) {
		      os = trim(os.replace(data, ''));
		    }
		    // add layout engine
		    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
		        /Browser|Lunascape|Maxthon/.test(name) ||
		        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
		      // don't add layout details to description if they are falsey
		      (data = layout[layout.length - 1]) && description.push(data);
		    }
		    // combine contextual information
		    if (description.length) {
		      description = ['(' + description.join('; ') + ')'];
		    }
		    // append manufacturer
		    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
		      description.push('on ' + manufacturer);
		    }
		    // append product
		    if (product) {
		      description.push((/^on /.test(description[description.length -1]) ? '' : 'on ') + product);
		    }
		    // parse OS into an object
		    if (os) {
		      data = / ([\d.+]+)$/.exec(os);
		      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
		      os = {
		        'architecture': 32,
		        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
		        'version': data ? data[1] : null,
		        'toString': function() {
		          var version = this.version;
		          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
		        }
		      };
		    }
		    // add browser/OS architecture
		    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
		      if (os) {
		        os.architecture = 64;
		        os.family = os.family.replace(RegExp(' *' + data), '');
		      }
		      if (
		          name && (/\bWOW64\b/i.test(ua) ||
		          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
		      ) {
		        description.unshift('32-bit');
		      }
		    }

		    ua || (ua = null);

		    /*------------------------------------------------------------------------*/

		    /**
		     * The platform object.
		     *
		     * @name platform
		     * @type Object
		     */
		    var platform = {};

		    /**
		     * The platform description.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.description = ua;

		    /**
		     * The name of the browser's layout engine.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.layout = layout && layout[0];

		    /**
		     * The name of the product's manufacturer.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.manufacturer = manufacturer;

		    /**
		     * The name of the browser/environment.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.name = name;

		    /**
		     * The alpha/beta release indicator.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.prerelease = prerelease;

		    /**
		     * The name of the product hosting the browser.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.product = product;

		    /**
		     * The browser's user agent string.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.ua = ua;

		    /**
		     * The browser/environment version.
		     *
		     * @memberOf platform
		     * @type string|null
		     */
		    platform.version = name && version;

		    /**
		     * The name of the operating system.
		     *
		     * @memberOf platform
		     * @type Object
		     */
		    platform.os = os || {

		      /**
		       * The CPU architecture the OS is built for.
		       *
		       * @memberOf platform.os
		       * @type number|null
		       */
		      'architecture': null,

		      /**
		       * The family of the OS.
		       *
		       * Common values include:
		       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
		       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
		       * "Android", "iOS" and "Windows Phone"
		       *
		       * @memberOf platform.os
		       * @type string|null
		       */
		      'family': null,

		      /**
		       * The version of the OS.
		       *
		       * @memberOf platform.os
		       * @type string|null
		       */
		      'version': null,

		      /**
		       * Returns the OS string.
		       *
		       * @memberOf platform.os
		       * @returns {string} The OS string.
		       */
		      'toString': function() { return 'null'; }
		    };

		    platform.parse = parse;
		    platform.toString = toStringPlatform;

		    if (platform.version) {
		      description.unshift(version);
		    }
		    if (platform.name) {
		      description.unshift(name);
		    }
		    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
		      description.push(product ? '(' + os + ')' : 'on ' + os);
		    }
		    if (description.length) {
		      platform.description = description.join(' ');
		    }
		    return platform;
		  }

		  /*--------------------------------------------------------------------------*/

		  // export platform
		  // some AMD build optimizers, like r.js, check for condition patterns like the following:
		  if (true) {
		    // define as an anonymous module so, through path mapping, it can be aliased
		    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		      return parse();
		    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  }
		  // check for `exports` after `define` in case a build optimizer adds an `exports` object
		  else if (freeExports && freeModule) {
		    // in Narwhal, Node.js, Rhino -require, or RingoJS
		    forOwn(parse(), function(value, key) {
		      freeExports[key] = value;
		    });
		  }
		  // in a browser or Rhino
		  else {
		    root.platform = parse();
		  }
		}.call(this));

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module), (function() { return this; }())))

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var ProtocolFn = __webpack_require__(39).fn;
		var NIMError = __webpack_require__(14);
		var Backoff = __webpack_require__(43);
		var io = __webpack_require__(44);
		var logger = __webpack_require__(40);
		var config = __webpack_require__(26);
		var util = __webpack_require__(10);

		ProtocolFn.initConnect = function() {
		    var self = this;
		    var options = self.options;
		    
		    // 重试连接的次数
		    self.retryCount = 0;
		    // 是否正在建立连接, 防止重复调用 connect 方法
		    self.connecting = false;
		    // 是否应该重新建立连接, onAuthError 时不应该重连
		    self.shouldReconnect = true;
		    // 是否已经通知过连接断开, 确保只通知一次连接断开
		    self.hasNotifyDisconnected = false;

		    // 是否需要重连, 默认 true
		    if (util.notundef(options.needReconnect)) {
		        util.verifyParamType('needReconnect', options.needReconnect, 'boolean');
		        self.needReconnect = options.needReconnect;
		    } else {
		        self.needReconnect = true;
		    }
		    // 重连的最大次数, 默认 Infinity
		    if (util.notundef(options.reconnectionAttempts)) {
		        util.verifyParamType('reconnectionAttempts', options.reconnectionAttempts, 'number');
		    }
		    self.reconnectionAttempts = options.reconnectionAttempts || Infinity;
		    // 时间退化
		    self.backoff = new Backoff({
		        // 重连间隔和最大间隔
		        min: config.reconnectionDelay,
		        max: config.reconnectionDelayMax,
		        jitter: config.reconnectionJitter
		    });

		    self.connect();
		};

		ProtocolFn.connect = function() {
		    // debugger;
		    var self = this;
		    
		    // 防止重复建立连接
		    if (self.isConnected() || self.connecting) { return; }
		    self.connecting = true;
		    self.hasNotifyDisconnected = false;

		    if (!self.socket) {
		        // 如果有 url, 那么连此 url, 否则刷新 url
		        var url = self.getNextSocketUrl();
		        if (!!url) {
		            self.connectToUrl(url);
		        } else {
		            self.refreshSocketUrl();
		        }
		    } else {
		        logger.info('connecting');
		        self.socket.socket.connect();
		    }
		};

		ProtocolFn.getNextSocketUrl = function() {
		    return this.socketUrls.shift();
		};

		ProtocolFn.isConnected = function() {
		    var self = this;
		    return !!self.socket && !!self.socket.socket && self.socket.socket.connected;
		};

		ProtocolFn.connectToUrl = function(url) {
		    // debugger;
		    logger.log('try connect to ', url);
		    var self = this;
		    // !!! 为了支持手动断开连接, 没有自动重连
		    // 不要自动重连, 否则主动退出会引起自动重连
		    // 在非人为退出时（网络自己断了）, 调用 connect 来模拟自动重连
		    self.socket = io.connect(url, {
		        // secure: true,                            // secure 会自动设置
		        transports: ["websocket", "xhr-polling"],
		        reconnect: false,                           // 不自动重连, 手动重连
		        'force new connection': true,               // 当url不变时, 强制重新建立连接
		        'connect timeout': config.connectTimeout    // 连接超时时间
		    });
		    self.socket.on('connect', self.onConnect.bind(self));
		    self.socket.on('handshake_failed', self.onHandshakeFailed.bind(self));
		    self.socket.on('connect_failed', self.onConnectFailed.bind(self));
		    self.socket.on('error', self.onError.bind(self));
		    self.socket.on('message', self.onMessage.bind(self));
		    self.socket.on('disconnect', self.onDisconnect.bind(self));
		};

		ProtocolFn.disconnect = function() {
		    // debugger;
		    var self = this;
		    if (self.isConnected()) {
		        logger.info('disconnecting');
		        self.logout();
		    }
		};

		// 连接上
		ProtocolFn.onConnect = function() {
		    var self = this;
		    if (!!self.backoff) { self.backoff.reset(); }
		    self.retryCount = 0;
		    self.connecting = false;
		    self.shouldReconnect = true;
		    self.hasNotifyDisconnected = false;
		    self.login();
		};

		// 握手失败, 改造了一下 socketio, 在握手失败的时候触发此回调, #1683 & #1688 self.publish('handshake_failed');
		ProtocolFn.onHandshakeFailed = function() {
		    this.onDisconnect();
		};

		ProtocolFn.onConnectFailed = function() {
		    this.notifyConnectError();
		};

		// 错误
		ProtocolFn.onError = function() {
		    // debugger;
		    var reason = arguments[0];
		    if (!!reason) {
		        this.notifyError(new NIMError(reason));
		    }
		};

		ProtocolFn.onDisconnect = function() {
		    // debugger;
		    var self = this;
		    self.connecting = false;
		    self.markAllCallbackInvalid(NIMError.newNetworkError());
		    self.stopHeartbeat();
		    self.reconnect();
		};

		ProtocolFn.willReconnect = function() {
		    // debugger;
		    var self = this;
		    return self.shouldReconnect && self.needReconnect && self.retryCount < self.reconnectionAttempts;
		};

		/*
		 * 重新建立连接
		 * - 如果不会再重新建立连接, 那么不再重新连接。
		 *     - 主动退出
		 *     - 登录错误
		 *     - 被踢
		 * - 否则
		 *     - 如果还有可用地址, 那么尝试下一个地址；
		 *     - 如果没有可用地址, 但是lbs重试次数还没达到上限, 那么重试lbs；
		 * - 如果既没有可用地址, 重试次数也达到上限, 那么不再重新连接。
		 * IE 9/8 只会重连一次, 请参考 https://github.com/Automattic/socket.io/issues/1020#issuecomment-9684494
		 */
		ProtocolFn.reconnect = function() {
		    // debugger;
		    var self = this;
		    if (self.willReconnect()) {
		        // 重置 socket, 这样才能换地址
		        self.socket = null;
		        self.retryCount++;
		        var duration = self.backoff.duration();
		        logger.log('will retry after', duration + 'ms', ', retryCount', self.retryCount);
		        self.options.onwillreconnect({
		            retryCount: self.retryCount,
		            duration: duration
		        });
		        setTimeout(function() {
		            self.connect();
		        }, duration);
		    } else {
		        self.notifyDisconnect();
		    }
		};

		ProtocolFn.notifyConnectError = function(message) {
		    var error = NIMError.newConnectError(message);
		    logger.error(error);
		    this.options.onerror(error);
		};

		// 通知开发者连接断开
		ProtocolFn.notifyDisconnect = function(error) {
		    // debugger;
		    var self = this;
		    if (!self.hasNotifyDisconnected) {
		        self.hasNotifyDisconnected = true;
		        // 保证断开连接
		        self.socket.disconnect();
		        // 外传对象
		        error = error || new NIMError();
		        error.retryCount = self.retryCount;
		        error.willReconnect = self.willReconnect();
		        // 重置
		        if (!!self.backoff) {self.backoff.reset();}
		        self.retryCount = 0;
		        self.connecting = false;
		        // 通知
		        logger.info('onDisconnect', error);
		        self.options.ondisconnect(error);
		    }
		};


	/***/ },
	/* 43 */
	/***/ function(module, exports) {

		
		/**
		 * Expose `Backoff`.
		 */

		module.exports = Backoff;

		/**
		 * Initialize backoff timer with `opts`.
		 *
		 * - `min` initial timeout in milliseconds [100]
		 * - `max` max timeout [10000]
		 * - `jitter` [0]
		 * - `factor` [2]
		 *
		 * @param {Object} opts
		 * @api public
		 */

		function Backoff(opts) {
		  opts = opts || {};
		  this.ms = opts.min || 100;
		  this.max = opts.max || 10000;
		  this.factor = opts.factor || 2;
		  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
		  this.attempts = 0;
		}

		/**
		 * Return the backoff duration.
		 *
		 * @return {Number}
		 * @api public
		 */

		Backoff.prototype.duration = function(){
		  var ms = this.ms * Math.pow(this.factor, this.attempts++);
		  if (this.jitter) {
		    var rand =  Math.random();
		    var deviation = Math.floor(rand * this.jitter * ms);
		    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
		  }
		  return Math.min(ms, this.max) | 0;
		};

		/**
		 * Reset the number of attempts.
		 *
		 * @api public
		 */

		Backoff.prototype.reset = function(){
		  this.attempts = 0;
		};

		/**
		 * Set the minimum duration
		 *
		 * @api public
		 */

		Backoff.prototype.setMin = function(min){
		  this.ms = min;
		};

		/**
		 * Set the maximum duration
		 *
		 * @api public
		 */

		Backoff.prototype.setMax = function(max){
		  this.max = max;
		};

		/**
		 * Set the jitter
		 *
		 * @api public
		 */

		Backoff.prototype.setJitter = function(jitter){
		  this.jitter = jitter;
		};



	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */

		var io = ( false ? {} : module.exports);
		(function() {

		/**
		 * socket.io io
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, global) {

		  /**
		   * IO namespace.
		   *
		   * @namespace
		   */

		  var io = exports;

		  /**
		   * Socket.IO version
		   *
		   * @api public
		   */

		  io.version = '0.9.11';

		  /**
		   * Protocol implemented.
		   *
		   * @api public
		   */

		  io.protocol = 1;

		  /**
		   * Available transports, these will be populated with the available transports
		   *
		   * @api public
		   */

		  io.transports = [];

		  /**
		   * Keep track of jsonp callbacks.
		   *
		   * @api private
		   */

		  io.j = [];

		  /**
		   * Keep track of our io.Sockets
		   *
		   * @api private
		   */
		  io.sockets = {};


		  /**
		   * Manages connections to hosts.
		   *
		   * @param {String} uri
		   * @Param {Boolean} force creation of new socket (defaults to false)
		   * @api public
		   */

		  io.connect = function (host, details) {
		    var uri = io.util.parseUri(host)
		      , uuri
		      , socket;

		    if (global && global.location) {
		      uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
		      uri.host = uri.host || (global.document
		        ? global.document.domain : global.location.hostname);
		      uri.port = uri.port || global.location.port;
		    }

		    uuri = io.util.uniqueUri(uri);

		    var options = {
		        host: uri.host
		      , secure: 'https' == uri.protocol
		      , port: uri.port || ('https' == uri.protocol ? 443 : 80)
		      , query: uri.query || ''
		    };

		    io.util.merge(options, details);

		    if (options['force new connection'] || !io.sockets[uuri]) {
		      socket = new io.Socket(options);
		    }

		    if (!options['force new connection'] && socket) {
		      io.sockets[uuri] = socket;
		    }

		    socket = socket || io.sockets[uuri];

		    // if path is different from '' or /
		    return socket.of(uri.path.length > 1 ? uri.path : '');
		  };

		})( true ? module.exports : io, this);
		/**
		 * socket.io util
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, global) {

		  /**
		   * Utilities namespace.
		   *
		   * @namespace
		   */

		  var util = exports.util = {};

		  /**
		   * Parses an URI
		   *
		   * @author Steven Levithan <stevenlevithan.com> (MIT license)
		   * @api public
		   */

		  var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

		  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password',
		               'host', 'port', 'relative', 'path', 'directory', 'file', 'query',
		               'anchor'];

		  util.parseUri = function (str) {
		    var m = re.exec(str || '')
		      , uri = {}
		      , i = 14;

		    while (i--) {
		      uri[parts[i]] = m[i] || '';
		    }

		    return uri;
		  };

		  /**
		   * Produces a unique url that identifies a Socket.IO connection.
		   *
		   * @param {Object} uri
		   * @api public
		   */

		  util.uniqueUri = function (uri) {
		    var protocol = uri.protocol
		      , host = uri.host
		      , port = uri.port;

		    if ('document' in global) {
		      host = host || document.domain;
		      port = port || (protocol == 'https'
		        && document.location.protocol !== 'https:' ? 443 : document.location.port);
		    } else {
		      host = host || 'localhost';

		      if (!port && protocol == 'https') {
		        port = 443;
		      }
		    }

		    return (protocol || 'http') + '://' + host + ':' + (port || 80);
		  };

		  /**
		   * Mergest 2 query strings in to once unique query string
		   *
		   * @param {String} base
		   * @param {String} addition
		   * @api public
		   */

		  util.query = function (base, addition) {
		    var query = util.chunkQuery(base || '')
		      , components = [];

		    util.merge(query, util.chunkQuery(addition || ''));
		    for (var part in query) {
		      if (query.hasOwnProperty(part)) {
		        components.push(part + '=' + query[part]);
		      }
		    }

		    return components.length ? '?' + components.join('&') : '';
		  };

		  /**
		   * Transforms a querystring in to an object
		   *
		   * @param {String} qs
		   * @api public
		   */

		  util.chunkQuery = function (qs) {
		    var query = {}
		      , params = qs.split('&')
		      , i = 0
		      , l = params.length
		      , kv;

		    for (; i < l; ++i) {
		      kv = params[i].split('=');
		      if (kv[0]) {
		        query[kv[0]] = kv[1];
		      }
		    }

		    return query;
		  };

		  /**
		   * Executes the given function when the page is loaded.
		   *
		   *     io.util.load(function () { console.log('page loaded'); });
		   *
		   * @param {Function} fn
		   * @api public
		   */

		  var pageLoaded = false;

		  util.load = function (fn) {
		    if ('document' in global && document.readyState === 'complete' || pageLoaded) {
		      return fn();
		    }

		    util.on(global, 'load', fn, false);
		  };

		  /**
		   * Adds an event.
		   *
		   * @api private
		   */

		  util.on = function (element, event, fn, capture) {
		    if (element.attachEvent) {
		      element.attachEvent('on' + event, fn);
		    } else if (element.addEventListener) {
		      element.addEventListener(event, fn, capture);
		    }
		  };

		  /**
		   * Generates the correct `XMLHttpRequest` for regular and cross domain requests.
		   *
		   * @param {Boolean} [xdomain] Create a request that can be used cross domain.
		   * @returns {XMLHttpRequest|false} If we can create a XMLHttpRequest.
		   * @api private
		   */

		  util.request = function (xdomain) {

		    if (xdomain && 'undefined' != typeof XDomainRequest && !util.ua.hasCORS) {
		      return new XDomainRequest();
		    }

		    if ('undefined' != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
		      return new XMLHttpRequest();
		    }

		    if (!xdomain) {
		      try {
		        return new window[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
		      } catch(e) { }
		    }

		    return null;
		  };

		  /**
		   * XHR based transport constructor.
		   *
		   * @constructor
		   * @api public
		   */

		  /**
		   * Change the internal pageLoaded value.
		   */

		  if ('undefined' != typeof window) {
		    util.load(function () {
		      pageLoaded = true;
		    });
		  }

		  /**
		   * Defers a function to ensure a spinner is not displayed by the browser
		   *
		   * @param {Function} fn
		   * @api public
		   */

		  util.defer = function (fn) {
		    if (!util.ua.webkit || 'undefined' != typeof importScripts) {
		      return fn();
		    }

		    util.load(function () {
		      setTimeout(fn, 100);
		    });
		  };

		  /**
		   * Merges two objects.
		   *
		   * @api public
		   */

		  util.merge = function merge (target, additional, deep, lastseen) {
		    var seen = lastseen || []
		      , depth = typeof deep == 'undefined' ? 2 : deep
		      , prop;

		    for (prop in additional) {
		      if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
		        if (typeof target[prop] !== 'object' || !depth) {
		          target[prop] = additional[prop];
		          seen.push(additional[prop]);
		        } else {
		          util.merge(target[prop], additional[prop], depth - 1, seen);
		        }
		      }
		    }

		    return target;
		  };

		  /**
		   * Merges prototypes from objects
		   *
		   * @api public
		   */

		  util.mixin = function (ctor, ctor2) {
		    util.merge(ctor.prototype, ctor2.prototype);
		  };

		  /**
		   * Shortcut for prototypical and static inheritance.
		   *
		   * @api private
		   */

		  util.inherit = function (ctor, ctor2) {
		    function f() {};
		    f.prototype = ctor2.prototype;
		    ctor.prototype = new f;
		  };

		  /**
		   * Checks if the given object is an Array.
		   *
		   *     io.util.isArray([]); // true
		   *     io.util.isArray({}); // false
		   *
		   * @param Object obj
		   * @api public
		   */

		  util.isArray = Array.isArray || function (obj) {
		    return Object.prototype.toString.call(obj) === '[object Array]';
		  };

		  /**
		   * Intersects values of two arrays into a third
		   *
		   * @api public
		   */

		  util.intersect = function (arr, arr2) {
		    var ret = []
		      , longest = arr.length > arr2.length ? arr : arr2
		      , shortest = arr.length > arr2.length ? arr2 : arr;

		    for (var i = 0, l = shortest.length; i < l; i++) {
		      if (~util.indexOf(longest, shortest[i]))
		        ret.push(shortest[i]);
		    }

		    return ret;
		  };

		  /**
		   * Array indexOf compatibility.
		   *
		   * @see bit.ly/a5Dxa2
		   * @api public
		   */

		  util.indexOf = function (arr, o, i) {

		    for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0;
		         i < j && arr[i] !== o; i++) {}

		    return j <= i ? -1 : i;
		  };

		  /**
		   * Converts enumerables to array.
		   *
		   * @api public
		   */

		  util.toArray = function (enu) {
		    var arr = [];

		    for (var i = 0, l = enu.length; i < l; i++)
		      arr.push(enu[i]);

		    return arr;
		  };

		  /**
		   * UA / engines detection namespace.
		   *
		   * @namespace
		   */

		  util.ua = {};

		  /**
		   * Whether the UA supports CORS for XHR.
		   *
		   * @api public
		   */

		  util.ua.hasCORS = 'undefined' != typeof XMLHttpRequest && (function () {
		    try {
		      var a = new XMLHttpRequest();
		    } catch (e) {
		      return false;
		    }

		    return a.withCredentials != undefined;
		  })();

		  /**
		   * Detect webkit.
		   *
		   * @api public
		   */

		  util.ua.webkit = 'undefined' != typeof navigator
		    && /webkit/i.test(navigator.userAgent);

		   /**
		   * Detect iPad/iPhone/iPod.
		   *
		   * @api public
		   */

		  util.ua.iDevice = 'undefined' != typeof navigator
		      && /iPad|iPhone|iPod/i.test(navigator.userAgent);

		})('undefined' != typeof io ? io : module.exports, this);
		/**
		 * socket.io EventEmitter
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io) {

		  /**
		   * Expose constructor.
		   */

		  exports.EventEmitter = EventEmitter;

		  /**
		   * Event emitter constructor.
		   *
		   * @api public.
		   */

		  function EventEmitter () {};

		  /**
		   * Adds a listener
		   *
		   * @api public
		   */

		  EventEmitter.prototype.on = function (name, fn) {
		    if (!this.$events) {
		      this.$events = {};
		    }

		    if (!this.$events[name]) {
		      this.$events[name] = fn;
		    } else if (io.util.isArray(this.$events[name])) {
		      this.$events[name].push(fn);
		    } else {
		      this.$events[name] = [this.$events[name], fn];
		    }

		    return this;
		  };

		  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

		  /**
		   * Adds a volatile listener.
		   *
		   * @api public
		   */

		  EventEmitter.prototype.once = function (name, fn) {
		    var self = this;

		    function on () {
		      self.removeListener(name, on);
		      fn.apply(this, arguments);
		    };

		    on.listener = fn;
		    this.on(name, on);

		    return this;
		  };

		  /**
		   * Removes a listener.
		   *
		   * @api public
		   */

		  EventEmitter.prototype.removeListener = function (name, fn) {
		    if (this.$events && this.$events[name]) {
		      var list = this.$events[name];

		      if (io.util.isArray(list)) {
		        var pos = -1;

		        for (var i = 0, l = list.length; i < l; i++) {
		          if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
		            pos = i;
		            break;
		          }
		        }

		        if (pos < 0) {
		          return this;
		        }

		        list.splice(pos, 1);

		        if (!list.length) {
		          delete this.$events[name];
		        }
		      } else if (list === fn || (list.listener && list.listener === fn)) {
		        delete this.$events[name];
		      }
		    }

		    return this;
		  };

		  /**
		   * Removes all listeners for an event.
		   *
		   * @api public
		   */

		  EventEmitter.prototype.removeAllListeners = function (name) {
		    if (name === undefined) {
		      this.$events = {};
		      return this;
		    }

		    if (this.$events && this.$events[name]) {
		      this.$events[name] = null;
		    }

		    return this;
		  };

		  /**
		   * Gets all listeners for a certain event.
		   *
		   * @api publci
		   */

		  EventEmitter.prototype.listeners = function (name) {
		    if (!this.$events) {
		      this.$events = {};
		    }

		    if (!this.$events[name]) {
		      this.$events[name] = [];
		    }

		    if (!io.util.isArray(this.$events[name])) {
		      this.$events[name] = [this.$events[name]];
		    }

		    return this.$events[name];
		  };

		  /**
		   * Emits an event.
		   *
		   * @api public
		   */

		  EventEmitter.prototype.emit = function (name) {
		    if (!this.$events) {
		      return false;
		    }

		    var handler = this.$events[name];

		    if (!handler) {
		      return false;
		    }

		    var args = Array.prototype.slice.call(arguments, 1);

		    if ('function' == typeof handler) {
		      handler.apply(this, args);
		    } else if (io.util.isArray(handler)) {
		      var listeners = handler.slice();

		      for (var i = 0, l = listeners.length; i < l; i++) {
		        listeners[i].apply(this, args);
		      }
		    } else {
		      return false;
		    }

		    return true;
		  };

		})(
		    'undefined' != typeof io ? io : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		);

		/**
		 * socket.io JSON
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		/**
		 * Based on JSON2 (http://www.JSON.org/js.html).
		 */

		(function (exports, nativeJSON) {
		  "use strict";

		  // use native JSON if it's available
		  if (nativeJSON && nativeJSON.parse){
		    return exports.JSON = {
		      parse: nativeJSON.parse
		    , stringify: nativeJSON.stringify
		    };
		  }

		  var JSON = exports.JSON = {};

		  function f(n) {
		      // Format integers to have at least two digits.
		      return n < 10 ? '0' + n : n;
		  }

		  function date(d, key) {
		    return isFinite(d.valueOf()) ?
		        d.getUTCFullYear()     + '-' +
		        f(d.getUTCMonth() + 1) + '-' +
		        f(d.getUTCDate())      + 'T' +
		        f(d.getUTCHours())     + ':' +
		        f(d.getUTCMinutes())   + ':' +
		        f(d.getUTCSeconds())   + 'Z' : null;
		  };

		  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		      gap,
		      indent,
		      meta = {    // table of character substitutions
		          '\b': '\\b',
		          '\t': '\\t',
		          '\n': '\\n',
		          '\f': '\\f',
		          '\r': '\\r',
		          '"' : '\\"',
		          '\\': '\\\\'
		      },
		      rep;


		  function quote(string) {

		      // If the string contains no control characters, no quote characters, and no
		      // backslash characters, then we can safely slap some quotes around it.
		      // Otherwise we must also replace the offending characters with safe escape
		      // sequences.

		      escapable.lastIndex = 0;
		      return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
		          var c = meta[a];
		          return typeof c === 'string' ? c :
		              '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		      }) + '"' : '"' + string + '"';
		  }


		  function str(key, holder) {

		      // Produce a string from holder[key].

		      var i,          // The loop counter.
		          k,          // The member key.
		          v,          // The member value.
		          length,
		          mind = gap,
		          partial,
		          value = holder[key];

		      // If the value has a toJSON method, call it to obtain a replacement value.

		      if (value instanceof Date) {
		          value = date(key);
		      }

		      // If we were called with a replacer function, then call the replacer to
		      // obtain a replacement value.

		      if (typeof rep === 'function') {
		          value = rep.call(holder, key, value);
		      }

		      // What happens next depends on the value's type.

		      switch (typeof value) {
		      case 'string':
		          return quote(value);

		      case 'number':

		          // JSON numbers must be finite. Encode non-finite numbers as null.

		          return isFinite(value) ? String(value) : 'null';

		      case 'boolean':
		      case 'null':

		          // If the value is a boolean or null, convert it to a string. Note:
		          // typeof null does not produce 'null'. The case is included here in
		          // the remote chance that this gets fixed someday.

		          return String(value);

		      // If the type is 'object', we might be dealing with an object or an array or
		      // null.

		      case 'object':

		          // Due to a specification blunder in ECMAScript, typeof null is 'object',
		          // so watch out for that case.

		          if (!value) {
		              return 'null';
		          }

		          // Make an array to hold the partial results of stringifying this object value.

		          gap += indent;
		          partial = [];

		          // Is the value an array?

		          if (Object.prototype.toString.apply(value) === '[object Array]') {

		              // The value is an array. Stringify every element. Use null as a placeholder
		              // for non-JSON values.

		              length = value.length;
		              for (i = 0; i < length; i += 1) {
		                  partial[i] = str(i, value) || 'null';
		              }

		              // Join all of the elements together, separated with commas, and wrap them in
		              // brackets.

		              v = partial.length === 0 ? '[]' : gap ?
		                  '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
		                  '[' + partial.join(',') + ']';
		              gap = mind;
		              return v;
		          }

		          // If the replacer is an array, use it to select the members to be stringified.

		          if (rep && typeof rep === 'object') {
		              length = rep.length;
		              for (i = 0; i < length; i += 1) {
		                  if (typeof rep[i] === 'string') {
		                      k = rep[i];
		                      v = str(k, value);
		                      if (v) {
		                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
		                      }
		                  }
		              }
		          } else {

		              // Otherwise, iterate through all of the keys in the object.

		              for (k in value) {
		                  if (Object.prototype.hasOwnProperty.call(value, k)) {
		                      v = str(k, value);
		                      if (v) {
		                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
		                      }
		                  }
		              }
		          }

		          // Join all of the member texts together, separated with commas,
		          // and wrap them in braces.

		          v = partial.length === 0 ? '{}' : gap ?
		              '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
		              '{' + partial.join(',') + '}';
		          gap = mind;
		          return v;
		      }
		  }

		  // If the JSON object does not yet have a stringify method, give it one.

		  JSON.stringify = function (value, replacer, space) {

		      // The stringify method takes a value and an optional replacer, and an optional
		      // space parameter, and returns a JSON text. The replacer can be a function
		      // that can replace values, or an array of strings that will select the keys.
		      // A default replacer method can be provided. Use of the space parameter can
		      // produce text that is more easily readable.

		      var i;
		      gap = '';
		      indent = '';

		      // If the space parameter is a number, make an indent string containing that
		      // many spaces.

		      if (typeof space === 'number') {
		          for (i = 0; i < space; i += 1) {
		              indent += ' ';
		          }

		      // If the space parameter is a string, it will be used as the indent string.

		      } else if (typeof space === 'string') {
		          indent = space;
		      }

		      // If there is a replacer, it must be a function or an array.
		      // Otherwise, throw an error.

		      rep = replacer;
		      if (replacer && typeof replacer !== 'function' &&
		              (typeof replacer !== 'object' ||
		              typeof replacer.length !== 'number')) {
		          throw new Error('JSON.stringify');
		      }

		      // Make a fake root object containing our value under the key of ''.
		      // Return the result of stringifying the value.

		      return str('', {'': value});
		  };

		  // If the JSON object does not yet have a parse method, give it one.

		  JSON.parse = function (text, reviver) {
		      // The parse method takes a text and an optional reviver function, and returns
		      // a JavaScript value if the text is a valid JSON text.

		      var j;

		      function walk(holder, key) {

		          // The walk method is used to recursively walk the resulting structure so
		          // that modifications can be made.

		          var k, v, value = holder[key];
		          if (value && typeof value === 'object') {
		              for (k in value) {
		                  if (Object.prototype.hasOwnProperty.call(value, k)) {
		                      v = walk(value, k);
		                      if (v !== undefined) {
		                          value[k] = v;
		                      } else {
		                          delete value[k];
		                      }
		                  }
		              }
		          }
		          return reviver.call(holder, key, value);
		      }


		      // Parsing happens in four stages. In the first stage, we replace certain
		      // Unicode characters with escape sequences. JavaScript handles many characters
		      // incorrectly, either silently deleting them, or treating them as line endings.

		      text = String(text);
		      cx.lastIndex = 0;
		      if (cx.test(text)) {
		          text = text.replace(cx, function (a) {
		              return '\\u' +
		                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		          });
		      }

		      // In the second stage, we run the text against regular expressions that look
		      // for non-JSON patterns. We are especially concerned with '()' and 'new'
		      // because they can cause invocation, and '=' because it can cause mutation.
		      // But just to be safe, we want to reject all unexpected forms.

		      // We split the second stage into 4 regexp operations in order to work around
		      // crippling inefficiencies in IE's and Safari's regexp engines. First we
		      // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
		      // replace all simple value tokens with ']' characters. Third, we delete all
		      // open brackets that follow a colon or comma or that begin the text. Finally,
		      // we look to see that the remaining characters are only whitespace or ']' or
		      // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

		      if (/^[\],:{}\s]*$/
		              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
		                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
		                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

		          // In the third stage we use the eval function to compile the text into a
		          // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
		          // in JavaScript: it can begin a block or an object literal. We wrap the text
		          // in parens to eliminate the ambiguity.

		          j = eval('(' + text + ')');

		          // In the optional fourth stage, we recursively walk the new structure, passing
		          // each name/value pair to a reviver function for possible transformation.

		          return typeof reviver === 'function' ?
		              walk({'': j}, '') : j;
		      }

		      // If the text is not JSON parseable, then a SyntaxError is thrown.

		      throw new SyntaxError('JSON.parse');
		  };

		})(
		    'undefined' != typeof io ? io : module.exports
		  , typeof JSON !== 'undefined' ? JSON : undefined
		);

		/**
		 * socket.io parser
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io) {

		  /**
		   * Parser namespace.
		   *
		   * @namespace
		   */

		  var parser = exports.parser = {};

		  /**
		   * Packet types.
		   */

		  var packets = parser.packets = [
		      'disconnect'
		    , 'connect'
		    , 'heartbeat'
		    , 'message'
		    , 'json'
		    , 'event'
		    , 'ack'
		    , 'error'
		    , 'noop'
		  ];

		  /**
		   * Errors reasons.
		   */

		  var reasons = parser.reasons = [
		      'transport not supported'
		    , 'client not handshaken'
		    , 'unauthorized'
		  ];

		  /**
		   * Errors advice.
		   */

		  var advice = parser.advice = [
		      'reconnect'
		  ];

		  /**
		   * Shortcuts.
		   */

		  var JSON = io.JSON
		    , indexOf = io.util.indexOf;

		  /**
		   * Encodes a packet.
		   *
		   * @api private
		   */

		  parser.encodePacket = function (packet) {
		    var type = indexOf(packets, packet.type)
		      , id = packet.id || ''
		      , endpoint = packet.endpoint || ''
		      , ack = packet.ack
		      , data = null;

		    switch (packet.type) {
		      case 'error':
		        var reason = packet.reason ? indexOf(reasons, packet.reason) : ''
		          , adv = packet.advice ? indexOf(advice, packet.advice) : '';

		        if (reason !== '' || adv !== '')
		          data = reason + (adv !== '' ? ('+' + adv) : '');

		        break;

		      case 'message':
		        if (packet.data !== '')
		          data = packet.data;
		        break;

		      case 'event':
		        var ev = { name: packet.name };

		        if (packet.args && packet.args.length) {
		          ev.args = packet.args;
		        }

		        data = JSON.stringify(ev);
		        break;

		      case 'json':
		        data = JSON.stringify(packet.data);
		        break;

		      case 'connect':
		        if (packet.qs)
		          data = packet.qs;
		        break;

		      case 'ack':
		        data = packet.ackId
		          + (packet.args && packet.args.length
		              ? '+' + JSON.stringify(packet.args) : '');
		        break;
		    }

		    // construct packet with required fragments
		    var encoded = [
		        type
		      , id + (ack == 'data' ? '+' : '')
		      , endpoint
		    ];

		    // data fragment is optional
		    if (data !== null && data !== undefined)
		      encoded.push(data);

		    return encoded.join(':');
		  };

		  /**
		   * Encodes multiple messages (payload).
		   *
		   * @param {Array} messages
		   * @api private
		   */

		  parser.encodePayload = function (packets) {
		    var decoded = '';

		    if (packets.length == 1)
		      return packets[0];

		    for (var i = 0, l = packets.length; i < l; i++) {
		      var packet = packets[i];
		      decoded += '\ufffd' + packet.length + '\ufffd' + packets[i];
		    }

		    return decoded;
		  };

		  /**
		   * Decodes a packet
		   *
		   * @api private
		   */

		  var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;

		  parser.decodePacket = function (data) {
		    var pieces = data.match(regexp);

		    if (!pieces) return {};

		    var id = pieces[2] || ''
		      , data = pieces[5] || ''
		      , packet = {
		            type: packets[pieces[1]]
		          , endpoint: pieces[4] || ''
		        };

		    // whether we need to acknowledge the packet
		    if (id) {
		      packet.id = id;
		      if (pieces[3])
		        packet.ack = 'data';
		      else
		        packet.ack = true;
		    }

		    // handle different packet types
		    switch (packet.type) {
		      case 'error':
		        var pieces = data.split('+');
		        packet.reason = reasons[pieces[0]] || '';
		        packet.advice = advice[pieces[1]] || '';
		        break;

		      case 'message':
		        packet.data = data || '';
		        break;

		      case 'event':
		        try {
		          var opts = JSON.parse(data);
		          packet.name = opts.name;
		          packet.args = opts.args;
		        } catch (e) { }

		        packet.args = packet.args || [];
		        break;

		      case 'json':
		        try {
		          packet.data = JSON.parse(data);
		        } catch (e) { }
		        break;

		      case 'connect':
		        packet.qs = data || '';
		        break;

		      case 'ack':
		        var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
		        if (pieces) {
		          packet.ackId = pieces[1];
		          packet.args = [];

		          if (pieces[3]) {
		            try {
		              packet.args = pieces[3] ? JSON.parse(pieces[3]) : [];
		            } catch (e) { }
		          }
		        }
		        break;

		      case 'disconnect':
		      case 'heartbeat':
		        break;
		    };

		    return packet;
		  };

		  /**
		   * Decodes data payload. Detects multiple messages
		   *
		   * @return {Array} messages
		   * @api public
		   */

		  parser.decodePayload = function (data) {
		    // IE doesn't like data[i] for unicode chars, charAt works fine
		    var _findEndChar = function(_start,_data){
		      var l=0;
		      for(var i=_start;i<_data.length;i++){
		        if(_data.charAt(i)=='\ufffd'){
		          return l;
		          break;
		        }
		        else
		          l++;
		      }
		      return l;
		    }
		    if (data.charAt(0) == '\ufffd') {
		      var ret = [];
		      for (var i = 1, length = ''; i < data.length; i++) {
		        if (data.charAt(i) == '\ufffd') {
		          var _data = data.substr(i + 1).substr(0, length);
		          if(data.charAt(i + 1+Number(length))!='\ufffd'&&(i + 1+Number(length))!=data.length){
		            var _len = Number(length)
		            l = _findEndChar(i+_len+1,data);
		            _data = data.substr(i + 1).substr(0, _len+l);
		            i+=l;
		          }
		          ret.push(parser.decodePacket(_data));
		          i += Number(length) + 1;
		          length = '';
		        } else {
		          length += data.charAt(i);
		        }
		      }

		      return ret;
		    } else {
		      return [parser.decodePacket(data)];
		    }
		  };

		})(
		    'undefined' != typeof io ? io : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		);
		/**
		 * socket.io Transport template
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io) {

		  /**
		   * Expose constructor.
		   */

		  exports.Transport = Transport;

		  /**
		   * This is the transport template for all supported transport methods.
		   *
		   * @constructor
		   * @api public
		   */

		  function Transport (socket, sessid) {
		    this.socket = socket;
		    this.sessid = sessid;
		  };

		  /**
		   * Apply EventEmitter mixin.
		   */

		  io.util.mixin(Transport, io.EventEmitter);


		  /**
		   * Indicates whether heartbeats is enabled for this transport
		   *
		   * @api private
		   */

		  Transport.prototype.heartbeats = function () {
		    return true;
		  };

		  /**
		   * Handles the response from the server. When a new response is received
		   * it will automatically update the timeout, decode the message and
		   * forwards the response to the onMessage function for further processing.
		   *
		   * @param {String} data Response from the server.
		   * @api private
		   */

		  Transport.prototype.onData = function (data) {
		    // 当一个 transport 超时之后, 会尝试连接下一个 transport, 但是有可能第一个 transport 还是连上了, 那么这里加一个判断, 如果 this 不是当前的 transport, 那么直接返回 @hazhangyingya
		    if (this !== this.socket.transport) {return this;}
		    this.clearCloseTimeout();

		    // If the connection in currently open (or in a reopening state) reset the close
		    // timeout since we have just received data. This check is necessary so
		    // that we don't reset the timeout on an explicitly disconnected connection.
		    if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
		      this.setCloseTimeout();
		    }

		    if (data !== '') {
		      // todo: we should only do decodePayload for xhr transports
		      var msgs = io.parser.decodePayload(data);

		      if (msgs && msgs.length) {
		        for (var i = 0, l = msgs.length; i < l; i++) {
		          this.onPacket(msgs[i]);
		        }
		      }
		    }

		    return this;
		  };

		  /**
		   * Handles packets.
		   *
		   * @api private
		   */

		  Transport.prototype.onPacket = function (packet) {
		    this.socket.setHeartbeatTimeout();

		    if (packet.type == 'heartbeat') {
		      return this.onHeartbeat();
		    }

		    if (packet.type == 'connect' && packet.endpoint == '') {
		      this.onConnect();
		    }

		    if (packet.type == 'error' && packet.advice == 'reconnect') {
		      this.isOpen = false;
		    }

		    this.socket.onPacket(packet);

		    return this;
		  };

		  /**
		   * Sets close timeout
		   *
		   * @api private
		   */

		  Transport.prototype.setCloseTimeout = function () {
		    if (!this.closeTimeout) {
		      var self = this;

		      this.closeTimeout = setTimeout(function () {
		        self.onDisconnect();
		      }, this.socket.closeTimeout);
		    }
		  };

		  /**
		   * Called when transport disconnects.
		   *
		   * @api private
		   */

		  Transport.prototype.onDisconnect = function () {
		    if (this.isOpen) this.close();
		    this.clearTimeouts();
		    this.socket.onDisconnect();
		    return this;
		  };

		  /**
		   * Called when transport connects
		   *
		   * @api private
		   */

		  Transport.prototype.onConnect = function () {
		    this.socket.onConnect();
		    return this;
		  };

		  /**
		   * Clears close timeout
		   *
		   * @api private
		   */

		  Transport.prototype.clearCloseTimeout = function () {
		    if (this.closeTimeout) {
		      clearTimeout(this.closeTimeout);
		      this.closeTimeout = null;
		    }
		  };

		  /**
		   * Clear timeouts
		   *
		   * @api private
		   */

		  Transport.prototype.clearTimeouts = function () {
		    this.clearCloseTimeout();

		    if (this.reopenTimeout) {
		      clearTimeout(this.reopenTimeout);
		    }
		  };

		  /**
		   * Sends a packet
		   *
		   * @param {Object} packet object.
		   * @api private
		   */

		  Transport.prototype.packet = function (packet) {
		    this.send(io.parser.encodePacket(packet));
		  };

		  /**
		   * Send the received heartbeat message back to server. So the server
		   * knows we are still connected.
		   *
		   * @param {String} heartbeat Heartbeat response from the server.
		   * @api private
		   */

		  Transport.prototype.onHeartbeat = function (heartbeat) {
		    this.packet({ type: 'heartbeat' });
		  };

		  /**
		   * Called when the transport opens.
		   *
		   * @api private
		   */

		  Transport.prototype.onOpen = function () {
		    this.isOpen = true;
		    this.clearCloseTimeout();
		    this.socket.onOpen();
		  };

		  /**
		   * Notifies the base when the connection with the Socket.IO server
		   * has been disconnected.
		   *
		   * @api private
		   */

		  Transport.prototype.onClose = function () {
		    var self = this;

		    /* FIXME: reopen delay causing a infinit loop
		    this.reopenTimeout = setTimeout(function () {
		      self.open();
		    }, this.socket.options['reopen delay']);*/

		    this.isOpen = false;
		    this.socket.onClose();
		    this.onDisconnect();
		  };

		  /**
		   * Generates a connection url based on the Socket.IO URL Protocol.
		   * See <https://github.com/learnboost/socket.io-node/> for more details.
		   *
		   * @returns {String} Connection url
		   * @api private
		   */

		  Transport.prototype.prepareUrl = function () {
		    var options = this.socket.options;

		    return this.scheme() + '://'
		      + options.host + ':' + options.port + '/'
		      + options.resource + '/' + io.protocol
		      + '/' + this.name + '/' + this.sessid;
		  };

		  /**
		   * Checks if the transport is ready to start a connection.
		   *
		   * @param {Socket} socket The socket instance that needs a transport
		   * @param {Function} fn The callback
		   * @api private
		   */

		  Transport.prototype.ready = function (socket, fn) {
		    fn.call(this);
		  };
		})(
		    'undefined' != typeof io ? io : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		);
		/**
		 * socket.io Socket
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io, global) {

		  /**
		   * Expose constructor.
		   */

		  exports.Socket = Socket;

		  /**
		   * Create a new `Socket.IO client` which can establish a persistent
		   * connection with a Socket.IO enabled server.
		   *
		   * @api public
		   */

		  function Socket (options) {
		    this.options = {
		        port: 80
		      , secure: false
		      , document: 'document' in global ? document : false
		      , resource: 'socket.io'
		      , transports: io.transports
		      , 'connect timeout': 10000
		      , 'try multiple transports': true
		      , 'reconnect': true
		      , 'reconnection delay': 500
		      , 'reconnection limit': Infinity
		      , 'reopen delay': 3000
		      , 'max reconnection attempts': 10
		      , 'sync disconnect on unload': false
		      , 'auto connect': true
		      , 'flash policy port': 10843
		      , 'manualFlush': false
		    };

		    io.util.merge(this.options, options);

		    this.connected = false;
		    this.open = false;
		    this.connecting = false;
		    this.reconnecting = false;
		    this.namespaces = {};
		    this.buffer = [];
		    this.doBuffer = false;

		    if (this.options['sync disconnect on unload'] &&
		        (!this.isXDomain() || io.util.ua.hasCORS)) {
		      var self = this;
		      io.util.on(global, 'beforeunload', function () {
		        self.disconnectSync();
		      }, false);
		    }

		    if (this.options['auto connect']) {
		      this.connect();
		    }
		  };

		  /**
		   * Apply EventEmitter mixin.
		   */

		  io.util.mixin(Socket, io.EventEmitter);

		  /**
		   * Returns a namespace listener/emitter for this socket
		   *
		   * @api public
		   */

		  Socket.prototype.of = function (name) {
		    if (!this.namespaces[name]) {
		      this.namespaces[name] = new io.SocketNamespace(this, name);

		      if (name !== '') {
		        this.namespaces[name].packet({ type: 'connect' });
		      }
		    }

		    return this.namespaces[name];
		  };

		  /**
		   * Emits the given event to the Socket and all namespaces
		   *
		   * @api private
		   */

		  Socket.prototype.publish = function () {
		    this.emit.apply(this, arguments);

		    var nsp;

		    for (var i in this.namespaces) {
		      if (this.namespaces.hasOwnProperty(i)) {
		        nsp = this.of(i);
		        nsp.$emit.apply(nsp, arguments);
		      }
		    }
		  };

		  /**
		   * Performs the handshake
		   *
		   * @api private
		   */

		  function empty () { };

		  Socket.prototype.handshake = function (fn) {
		    var self = this
		      , options = this.options;

		    function complete (data) {
		      if (data instanceof Error) {
		        self.connecting = false;
		        self.onError(data.message);
		      } else {
		        fn.apply(null, data.split(':'));
		      }
		    };

		    var url = [
		          'http' + (options.secure ? 's' : '') + ':/'
		        , options.host + ':' + options.port
		        , options.resource
		        , io.protocol
		        , io.util.query(this.options.query, 't=' + +new Date)
		      ].join('/');

		    if (this.isXDomain() && !io.util.ua.hasCORS) {
		      var insertAt = document.getElementsByTagName('script')[0]
		        , script = document.createElement('script');

		      script.src = url + '&jsonp=' + io.j.length;
		      // https://github.com/Automattic/socket.io/issues/1020#issuecomment-9684494
		      // when script failed to load, trigger onError which will trigger reconnecting
		      script.onreadystatechange = function() {
		        // 'loaded' means failed (yeah, I know)
		        // github上说loaded的时候是脚本失败了, 但是我发现在IE下, 脚本成功执行, 最后状态也是loaded
		        // 所以再加一个条件, 在此 script 没有被移除的情况下才算失败
		        if(this.readyState == 'loaded' && !!script.parentNode){
		          self.connecting = false;            
		          !self.reconnecting && self.onError('Server down or port not open');
		          script.parentNode.removeChild(script);
		        }
		      };
		      insertAt.parentNode.insertBefore(script, insertAt);

		      io.j.push(function (data) {
		        complete(data);
		        script.parentNode.removeChild(script);
		      });
		    } else {
		      var xhr = io.util.request();

		      xhr.open('GET', url, true);
		      if (this.isXDomain()) {
		        xhr.withCredentials = true;
		      }
		      xhr.onreadystatechange = function () {
		        if (xhr.readyState == 4) {
		          xhr.onreadystatechange = empty;

		          if (xhr.status == 200) {
		            complete(xhr.responseText);
		          } else if (xhr.status == 403) {
		            self.onError(xhr.responseText);
		            // 注意, 下面这行代码是云信业务专用的, 云信是不自动重连, 需要手动控制重连的逻辑, 在这里通知外部握手失败, 这样就处理重连逻辑
		            self.publish('handshake_failed');
		          } else {
		            self.connecting = false;            
		            !self.reconnecting && self.onError(xhr.responseText);
		            // 注意, 下面这行代码是云信业务专用的, 云信是不自动重连, 需要手动控制重连的逻辑, 在这里通知外部握手失败, 这样就处理重连逻辑
		            self.publish('handshake_failed');
		          }
		        }
		      };
		      xhr.send(null);
		    }
		  };

		  /**
		   * Find an available transport based on the options supplied in the constructor.
		   *
		   * @api private
		   */

		  Socket.prototype.getTransport = function (override) {
		    var transports = override || this.transports, match;

		    
		    for (var i = 0, transport; transport = transports[i]; i++) {
		      if (io.Transport[transport]
		        && io.Transport[transport].check(this)
		        && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
		      var result = new io.Transport[transport](this, this.sessionid);
		        return result;
		      }
		    }

		    return null;
		  };

		  /**
		   * Connects to the server.
		   *
		   * @param {Function} [fn] Callback.
		   * @returns {io.Socket}
		   * @api public
		   */

		  Socket.prototype.connect = function (fn) {
		    if (this.connecting) {
		      return this;
		    }

		    var self = this;
		    self.connecting = true;
		    
		    this.handshake(function (sid, heartbeat, close, transports) {
		      self.sessionid = sid;
		      self.closeTimeout = close * 1000;
		      self.heartbeatTimeout = heartbeat * 1000;
		      if(!self.transports)
		          self.transports = self.origTransports = (transports ? io.util.intersect(
		              transports.split(',')
		            , self.options.transports
		          ) : self.options.transports);

		      self.setHeartbeatTimeout();

		      function connect (transports){
		        if (self.transport) self.transport.clearTimeouts();

		        self.transport = self.getTransport(transports);
		        
		        if (!self.transport) return self.publish('connect_failed');

		        // once the transport is ready
		        self.transport.ready(self, function () {
		          self.connecting = true;
		          self.publish('connecting', self.transport.name);
		          self.transport.open();

		          if (self.options['connect timeout']) {
		            self.connectTimeoutTimer = setTimeout(function () {
		              if (!self.connected) {
		                self.connecting = false;

		                if (self.options['try multiple transports']) {
		                  var remaining = self.transports;

		                  while (remaining.length > 0 && remaining.splice(0,1)[0] !=
		                         self.transport.name) {}

		                    if (remaining.length){
		                      connect(remaining);
		                    } else {
		                      self.publish('connect_failed');
		                    }
		                }
		              }
		            }, self.options['connect timeout']);
		          }
		        });
		      }

		      connect(self.transports);

		      self.once('connect', function (){
		        clearTimeout(self.connectTimeoutTimer);

		        fn && typeof fn == 'function' && fn();
		      });
		    });

		    return this;
		  };

		  /**
		   * Clears and sets a new heartbeat timeout using the value given by the
		   * server during the handshake.
		   *
		   * @api private
		   */

		  Socket.prototype.setHeartbeatTimeout = function () {
		    clearTimeout(this.heartbeatTimeoutTimer);
		    if(this.transport && !this.transport.heartbeats()) return;

		    var self = this;
		    this.heartbeatTimeoutTimer = setTimeout(function () {
		      self.transport && self.transport.onClose();
		    }, this.heartbeatTimeout);
		  };

		  /**
		   * Sends a message.
		   *
		   * @param {Object} data packet.
		   * @returns {io.Socket}
		   * @api public
		   */

		  Socket.prototype.packet = function (data) {
		    if (this.connected && !this.doBuffer) {
		      this.transport.packet(data);
		    } else {
		      this.buffer.push(data);
		    }

		    return this;
		  };

		  /**
		   * Sets buffer state
		   *
		   * @api private
		   */

		  Socket.prototype.setBuffer = function (v) {
		    this.doBuffer = v;

		    if (!v && this.connected && this.buffer.length) {
		      if (!this.options['manualFlush']) {
		        this.flushBuffer();
		      }
		    }
		  };

		  /**
		   * Flushes the buffer data over the wire.
		   * To be invoked manually when 'manualFlush' is set to true.
		   *
		   * @api public
		   */

		  Socket.prototype.flushBuffer = function() {
		    this.transport.payload(this.buffer);
		    this.buffer = [];
		  };
		  

		  /**
		   * Disconnect the established connect.
		   *
		   * @returns {io.Socket}
		   * @api public
		   */

		  Socket.prototype.disconnect = function () {
		    if (this.connected || this.connecting) {
		      if (this.open) {
		        this.of('').packet({ type: 'disconnect' });
		      }

		      // handle disconnection immediately
		      this.onDisconnect('booted');
		    }

		    return this;
		  };

		  /**
		   * Disconnects the socket with a sync XHR.
		   *
		   * @api private
		   */

		  Socket.prototype.disconnectSync = function () {
		    // ensure disconnection
		    var xhr = io.util.request();
		    var uri = [
		        'http' + (this.options.secure ? 's' : '') + ':/'
		      , this.options.host + ':' + this.options.port
		      , this.options.resource
		      , io.protocol
		      , ''
		      , this.sessionid
		    ].join('/') + '/?disconnect=1';

		    xhr.open('GET', uri, false);
		    xhr.send(null);

		    // handle disconnection immediately
		    this.onDisconnect('booted');
		  };

		  /**
		   * Check if we need to use cross domain enabled transports. Cross domain would
		   * be a different port or different domain name.
		   *
		   * @returns {Boolean}
		   * @api private
		   */

		  Socket.prototype.isXDomain = function () {

		    var port = global.location.port ||
		      ('https:' == global.location.protocol ? 443 : 80);

		    return this.options.host !== global.location.hostname 
		      || this.options.port != port;
		  };

		  /**
		   * Called upon handshake.
		   *
		   * @api private
		   */

		  Socket.prototype.onConnect = function () {
		    if (!this.connected) {
		      this.connected = true;
		      this.connecting = false;
		      if (!this.doBuffer) {
		        // make sure to flush the buffer
		        this.setBuffer(false);
		      }
		      this.emit('connect');
		    }
		  };

		  /**
		   * Called when the transport opens
		   *
		   * @api private
		   */

		  Socket.prototype.onOpen = function () {
		    this.open = true;
		  };

		  /**
		   * Called when the transport closes.
		   *
		   * @api private
		   */

		  Socket.prototype.onClose = function () {
		    this.open = false;
		    clearTimeout(this.heartbeatTimeoutTimer);
		  };

		  /**
		   * Called when the transport first opens a connection
		   *
		   * @param text
		   */

		  Socket.prototype.onPacket = function (packet) {
		    this.of(packet.endpoint).onPacket(packet);
		  };

		  /**
		   * Handles an error.
		   *
		   * @api private
		   */

		  Socket.prototype.onError = function (err) {
		    if (err && err.advice) {
		      if (err.advice === 'reconnect' && (this.connected || this.connecting)) {
		        this.disconnect();
		        if (this.options.reconnect) {
		          this.reconnect();
		        }
		      }
		    }

		    this.publish('error', err && err.reason ? err.reason : err);
		  };

		  /**
		   * Called when the transport disconnects.
		   *
		   * @api private
		   */

		  Socket.prototype.onDisconnect = function (reason) {
		    var wasConnected = this.connected
		      , wasConnecting = this.connecting;

		    this.connected = false;
		    this.connecting = false;
		    this.open = false;

		    if (wasConnected || wasConnecting) {
		      this.transport.close();
		      this.transport.clearTimeouts();
		      if (wasConnected) {
		        this.publish('disconnect', reason);

		        if ('booted' != reason && this.options.reconnect && !this.reconnecting) {
		          this.reconnect();
		        }
		      }
		    }
		  };

		  /**
		   * Called upon reconnection.
		   *
		   * @api private
		   */

		  Socket.prototype.reconnect = function () {
		    this.reconnecting = true;
		    this.reconnectionAttempts = 0;
		    this.reconnectionDelay = this.options['reconnection delay'];

		    var self = this
		      , maxAttempts = this.options['max reconnection attempts']
		      , tryMultiple = this.options['try multiple transports']
		      , limit = this.options['reconnection limit'];

		    function reset () {
		      if (self.connected) {
		        for (var i in self.namespaces) {
		          if (self.namespaces.hasOwnProperty(i) && '' !== i) {
		              self.namespaces[i].packet({ type: 'connect' });
		          }
		        }
		        self.publish('reconnect', self.transport.name, self.reconnectionAttempts);
		      }

		      clearTimeout(self.reconnectionTimer);

		      self.removeListener('connect_failed', maybeReconnect);
		      self.removeListener('connect', maybeReconnect);

		      self.reconnecting = false;

		      delete self.reconnectionAttempts;
		      delete self.reconnectionDelay;
		      delete self.reconnectionTimer;
		      delete self.redoTransports;

		      self.options['try multiple transports'] = tryMultiple;
		    };

		    function maybeReconnect () {
		      if (!self.reconnecting) {
		        return;
		      }

		      if (self.connected) {
		        return reset();
		      };

		      if (self.connecting && self.reconnecting) {
		        return self.reconnectionTimer = setTimeout(maybeReconnect, 1000);
		      }

		      if (self.reconnectionAttempts++ >= maxAttempts) {
		        if (!self.redoTransports) {
		          self.on('connect_failed', maybeReconnect);
		          self.options['try multiple transports'] = true;
		          self.transports = self.origTransports;
		          self.transport = self.getTransport();
		          self.redoTransports = true;
		          self.connect();
		        } else {
		          self.publish('reconnect_failed');
		          reset();
		        }
		      } else {
		        if (self.reconnectionDelay < limit) {
		          self.reconnectionDelay *= 2; // exponential back off
		        }

		        self.connect();
		        self.publish('reconnecting', self.reconnectionDelay, self.reconnectionAttempts);
		        self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay);
		      }
		    };

		    this.options['try multiple transports'] = false;
		    this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);

		    this.on('connect', maybeReconnect);
		  };

		})(
		    'undefined' != typeof io ? io : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		  , this
		);
		/**
		 * socket.io SocketNamespace
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io) {

		  /**
		   * Expose constructor.
		   */

		  exports.SocketNamespace = SocketNamespace;

		  /**
		   * Socket namespace constructor.
		   *
		   * @constructor
		   * @api public
		   */

		  function SocketNamespace (socket, name) {
		    this.socket = socket;
		    this.name = name || '';
		    this.flags = {};
		    this.json = new Flag(this, 'json');
		    this.ackPackets = 0;
		    this.acks = {};
		  };

		  /**
		   * Apply EventEmitter mixin.
		   */

		  io.util.mixin(SocketNamespace, io.EventEmitter);

		  /**
		   * Copies emit since we override it
		   *
		   * @api private
		   */

		  SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;

		  /**
		   * Creates a new namespace, by proxying the request to the socket. This
		   * allows us to use the synax as we do on the server.
		   *
		   * @api public
		   */

		  SocketNamespace.prototype.of = function () {
		    return this.socket.of.apply(this.socket, arguments);
		  };

		  /**
		   * Sends a packet.
		   *
		   * @api private
		   */

		  SocketNamespace.prototype.packet = function (packet) {
		    packet.endpoint = this.name;
		    this.socket.packet(packet);
		    this.flags = {};
		    return this;
		  };

		  /**
		   * Sends a message
		   *
		   * @api public
		   */

		  SocketNamespace.prototype.send = function (data, fn) {
		    var packet = {
		        type: this.flags.json ? 'json' : 'message'
		      , data: data
		    };

		    if ('function' == typeof fn) {
		      packet.id = ++this.ackPackets;
		      packet.ack = true;
		      this.acks[packet.id] = fn;
		    }

		    return this.packet(packet);
		  };

		  /**
		   * Emits an event
		   *
		   * @api public
		   */
		  
		  SocketNamespace.prototype.emit = function (name) {
		    var args = Array.prototype.slice.call(arguments, 1)
		      , lastArg = args[args.length - 1]
		      , packet = {
		            type: 'event'
		          , name: name
		        };

		    if ('function' == typeof lastArg) {
		      packet.id = ++this.ackPackets;
		      packet.ack = 'data';
		      this.acks[packet.id] = lastArg;
		      args = args.slice(0, args.length - 1);
		    }

		    packet.args = args;

		    return this.packet(packet);
		  };

		  /**
		   * Disconnects the namespace
		   *
		   * @api private
		   */

		  SocketNamespace.prototype.disconnect = function () {
		    if (this.name === '') {
		      this.socket.disconnect();
		    } else {
		      this.packet({ type: 'disconnect' });
		      this.$emit('disconnect');
		    }

		    return this;
		  };

		  /**
		   * Handles a packet
		   *
		   * @api private
		   */

		  SocketNamespace.prototype.onPacket = function (packet) {
		    var self = this;

		    function ack () {
		      self.packet({
		          type: 'ack'
		        , args: io.util.toArray(arguments)
		        , ackId: packet.id
		      });
		    };

		    switch (packet.type) {
		      case 'connect':
		        this.$emit('connect');
		        break;

		      case 'disconnect':
		        if (this.name === '') {
		          this.socket.onDisconnect(packet.reason || 'booted');
		        } else {
		          this.$emit('disconnect', packet.reason);
		        }
		        break;

		      case 'message':
		      case 'json':
		        var params = ['message', packet.data];

		        if (packet.ack == 'data') {
		          params.push(ack);
		        } else if (packet.ack) {
		          this.packet({ type: 'ack', ackId: packet.id });
		        }

		        this.$emit.apply(this, params);
		        break;

		      case 'event':
		        var params = [packet.name].concat(packet.args);

		        if (packet.ack == 'data')
		          params.push(ack);

		        this.$emit.apply(this, params);
		        break;

		      case 'ack':
		        if (this.acks[packet.ackId]) {
		          this.acks[packet.ackId].apply(this, packet.args);
		          delete this.acks[packet.ackId];
		        }
		        break;

		      case 'error':
		        if (packet.advice){
		          this.socket.onError(packet);
		        } else {
		          if (packet.reason == 'unauthorized') {
		            this.$emit('connect_failed', packet.reason);
		          } else {
		            this.$emit('error', packet.reason);
		          }
		        }
		        break;
		    }
		  };

		  /**
		   * Flag interface.
		   *
		   * @api private
		   */

		  function Flag (nsp, name) {
		    this.namespace = nsp;
		    this.name = name;
		  };

		  /**
		   * Send a message
		   *
		   * @api public
		   */

		  Flag.prototype.send = function () {
		    this.namespace.flags[this.name] = true;
		    this.namespace.send.apply(this.namespace, arguments);
		  };

		  /**
		   * Emit an event
		   *
		   * @api public
		   */

		  Flag.prototype.emit = function () {
		    this.namespace.flags[this.name] = true;
		    this.namespace.emit.apply(this.namespace, arguments);
		  };

		})(
		    'undefined' != typeof io ? io : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		);

		/**
		 * socket.io WebSocket
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io, global) {

		  /**
		   * Expose constructor.
		   */

		  exports.websocket = WS;

		  /**
		   * The WebSocket transport uses the HTML5 WebSocket API to establish an
		   * persistent connection with the Socket.IO server. This transport will also
		   * be inherited by the FlashSocket fallback as it provides a API compatible
		   * polyfill for the WebSockets.
		   *
		   * @constructor
		   * @extends {io.Transport}
		   * @api public
		   */

		  function WS (socket) {
		    io.Transport.apply(this, arguments);
		  };

		  /**
		   * Inherits from Transport.
		   */

		  io.util.inherit(WS, io.Transport);

		  /**
		   * Transport name
		   *
		   * @api public
		   */

		  WS.prototype.name = 'websocket';

		  /**
		   * Initializes a new `WebSocket` connection with the Socket.IO server. We attach
		   * all the appropriate listeners to handle the responses from the server.
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  WS.prototype.open = function () {
		    var query = io.util.query(this.socket.options.query)
		      , self = this
		      , Socket


		    if (!Socket) {
		      Socket = global.MozWebSocket || global.WebSocket;
		    }

		    this.websocket = new Socket(this.prepareUrl() + query);

		    this.websocket.onopen = function () {
		      self.onOpen();
		      self.socket.setBuffer(false);
		    };
		    this.websocket.onmessage = function (ev) {
		      self.onData(ev.data);
		    };
		    this.websocket.onclose = function () {
		      self.onClose();
		      self.socket.setBuffer(true);
		    };
		    this.websocket.onerror = function (e) {
		      self.onError(e);
		    };

		    return this;
		  };

		  /**
		   * Send a message to the Socket.IO server. The message will automatically be
		   * encoded in the correct message format.
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  // Do to a bug in the current IDevices browser, we need to wrap the send in a 
		  // setTimeout, when they resume from sleeping the browser will crash if 
		  // we don't allow the browser time to detect the socket has been closed
		  if (io.util.ua.iDevice) {
		    WS.prototype.send = function (data) {
		      var self = this;
		      setTimeout(function() {
		         self.websocket.send(data);
		      },0);
		      return this;
		    };
		  } else {
		    WS.prototype.send = function (data) {
		      this.websocket.send(data);
		      return this;
		    };
		  }

		  /**
		   * Payload
		   *
		   * @api private
		   */

		  WS.prototype.payload = function (arr) {
		    for (var i = 0, l = arr.length; i < l; i++) {
		      this.packet(arr[i]);
		    }
		    return this;
		  };

		  /**
		   * Disconnect the established `WebSocket` connection.
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  WS.prototype.close = function () {
		    this.websocket.close();
		    return this;
		  };

		  /**
		   * Handle the errors that `WebSocket` might be giving when we
		   * are attempting to connect or send messages.
		   *
		   * @param {Error} e The error.
		   * @api private
		   */

		  WS.prototype.onError = function (e) {
		    this.socket.onError(e);
		  };

		  /**
		   * Returns the appropriate scheme for the URI generation.
		   *
		   * @api private
		   */
		  WS.prototype.scheme = function () {
		    return this.socket.options.secure ? 'wss' : 'ws';
		  };

		  /**
		   * Checks if the browser has support for native `WebSockets` and that
		   * it's not the polyfill created for the FlashSocket transport.
		   *
		   * @return {Boolean}
		   * @api public
		   */

		  WS.check = function () {
		    return ('WebSocket' in global && !('__addTask' in WebSocket))
		          || 'MozWebSocket' in global;
		  };

		  /**
		   * Check if the `WebSocket` transport support cross domain communications.
		   *
		   * @returns {Boolean}
		   * @api public
		   */

		  WS.xdomainCheck = function () {
		    return true;
		  };

		  /**
		   * Add the transport to your public io.transports array.
		   *
		   * @api private
		   */

		  io.transports.push('websocket');

		})(
		    'undefined' != typeof io ? io.Transport : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		  , this
		);

		/**
		 * socket.io Flashsocket
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io) {

		  /**
		   * Expose constructor.
		   */

		  exports.flashsocket = Flashsocket;

		  /**
		   * The FlashSocket transport. This is a API wrapper for the HTML5 WebSocket
		   * specification. It uses a .swf file to communicate with the server. If you want
		   * to serve the .swf file from a other server than where the Socket.IO script is
		   * coming from you need to use the insecure version of the .swf. More information
		   * about this can be found on the github page.
		   *
		   * @constructor
		   * @extends {io.Transport.websocket}
		   * @api public
		   */

		  function Flashsocket () {
		    io.Transport.websocket.apply(this, arguments);
		  };

		  /**
		   * Inherits from Transport.
		   */

		  io.util.inherit(Flashsocket, io.Transport.websocket);

		  /**
		   * Transport name
		   *
		   * @api public
		   */

		  Flashsocket.prototype.name = 'flashsocket';

		  /**
		   * Disconnect the established `FlashSocket` connection. This is done by adding a 
		   * new task to the FlashSocket. The rest will be handled off by the `WebSocket` 
		   * transport.
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  Flashsocket.prototype.open = function () {
		    var self = this
		      , args = arguments;

		    WebSocket.__addTask(function () {
		      io.Transport.websocket.prototype.open.apply(self, args);
		    });
		    return this;
		  };
		  
		  /**
		   * Sends a message to the Socket.IO server. This is done by adding a new
		   * task to the FlashSocket. The rest will be handled off by the `WebSocket` 
		   * transport.
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  Flashsocket.prototype.send = function () {
		    var self = this, args = arguments;
		    WebSocket.__addTask(function () {
		      io.Transport.websocket.prototype.send.apply(self, args);
		    });
		    return this;
		  };

		  /**
		   * Disconnects the established `FlashSocket` connection.
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  Flashsocket.prototype.close = function () {
		    WebSocket.__tasks.length = 0;
		    io.Transport.websocket.prototype.close.call(this);
		    return this;
		  };

		  /**
		   * The WebSocket fall back needs to append the flash container to the body
		   * element, so we need to make sure we have access to it. Or defer the call
		   * until we are sure there is a body element.
		   *
		   * @param {Socket} socket The socket instance that needs a transport
		   * @param {Function} fn The callback
		   * @api private
		   */

		  Flashsocket.prototype.ready = function (socket, fn) {
		    function init () {
		      var options = socket.options
		        , port = options['flash policy port']
		        , path = [
		              'http' + (options.secure ? 's' : '') + ':/'
		            , options.host + ':' + options.port
		            , options.resource
		            , 'static/flashsocket'
		            , 'WebSocketMain' + (socket.isXDomain() ? 'Insecure' : '') + '.swf'
		          ];

		      // Only start downloading the swf file when the checked that this browser
		      // actually supports it
		      if (!Flashsocket.loaded) {
		        if (typeof WEB_SOCKET_SWF_LOCATION === 'undefined') {
		          // Set the correct file based on the XDomain settings
		          WEB_SOCKET_SWF_LOCATION = path.join('/');
		        }

		        if (port !== 843) {
		          WebSocket.loadFlashPolicyFile('xmlsocket://' + options.host + ':' + port);
		        }

		        WebSocket.__initialize();
		        Flashsocket.loaded = true;
		      }

		      fn.call(self);
		    }

		    var self = this;
		    if (document.body) return init();

		    io.util.load(init);
		  };

		  /**
		   * Check if the FlashSocket transport is supported as it requires that the Adobe
		   * Flash Player plug-in version `10.0.0` or greater is installed. And also check if
		   * the polyfill is correctly loaded.
		   *
		   * @returns {Boolean}
		   * @api public
		   */

		  Flashsocket.check = function () {
		    if (
		        typeof WebSocket == 'undefined'
		      || !('__initialize' in WebSocket) || !swfobject
		    ) return false;

		    return swfobject.getFlashPlayerVersion().major >= 10;
		  };

		  /**
		   * Check if the FlashSocket transport can be used as cross domain / cross origin 
		   * transport. Because we can't see which type (secure or insecure) of .swf is used
		   * we will just return true.
		   *
		   * @returns {Boolean}
		   * @api public
		   */

		  Flashsocket.xdomainCheck = function () {
		    return true;
		  };

		  /**
		   * Disable AUTO_INITIALIZATION
		   */

		  if (typeof window != 'undefined') {
		    WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
		  }

		  /**
		   * Add the transport to your public io.transports array.
		   *
		   * @api private
		   */

		  io.transports.push('flashsocket');
		})(
		    'undefined' != typeof io ? io.Transport : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		);
		/*  SWFObject v2.2 <http://code.google.com/p/swfobject/> 
		  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
		*/
		if ('undefined' != typeof window) {
		var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O[(['Active'].concat('Object').join('X'))]!=D){try{var ad=new window[(['Active'].concat('Object').join('X'))](W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?(['Active'].concat('').join('X')):"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
		}
		// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
		// License: New BSD License
		// Reference: http://dev.w3.org/html5/websockets/
		// Reference: http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol

		(function() {
		  
		  if ('undefined' == typeof window || window.WebSocket) return;

		  var console = window.console;
		  if (!console || !console.log || !console.error) {
		    console = {log: function(){ }, error: function(){ }};
		  }
		  
		  if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
		    console.error("Flash Player >= 10.0.0 is required.");
		    return;
		  }
		  if (location.protocol == "file:") {
		    console.error(
		      "WARNING: web-socket-js doesn't work in file:///... URL " +
		      "unless you set Flash Security Settings properly. " +
		      "Open the page via Web server i.e. http://...");
		  }

		  /**
		   * This class represents a faux web socket.
		   * @param {string} url
		   * @param {array or string} protocols
		   * @param {string} proxyHost
		   * @param {int} proxyPort
		   * @param {string} headers
		   */
		  WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
		    var self = this;
		    self.__id = WebSocket.__nextId++;
		    WebSocket.__instances[self.__id] = self;
		    self.readyState = WebSocket.CONNECTING;
		    self.bufferedAmount = 0;
		    self.__events = {};
		    if (!protocols) {
		      protocols = [];
		    } else if (typeof protocols == "string") {
		      protocols = [protocols];
		    }
		    // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
		    // Otherwise, when onopen fires immediately, onopen is called before it is set.
		    setTimeout(function() {
		      WebSocket.__addTask(function() {
		        console.info('before create', new Date());
		        WebSocket.__flash.create(
		            self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
		      });
		    }, 0);
		  };

		  /**
		   * Send data to the web socket.
		   * @param {string} data  The data to send to the socket.
		   * @return {boolean}  True for success, false for failure.
		   */
		  WebSocket.prototype.send = function(data) {
		    if (this.readyState == WebSocket.CONNECTING) {
		      throw "INVALID_STATE_ERR: Web Socket connection has not been established";
		    }
		    // We use encodeURIComponent() here, because FABridge doesn't work if
		    // the argument includes some characters. We don't use escape() here
		    // because of this:
		    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
		    // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
		    // preserve all Unicode characters either e.g. "\uffff" in Firefox.
		    // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
		    // additional testing.
		    var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
		    if (result < 0) { // success
		      return true;
		    } else {
		      this.bufferedAmount += result;
		      return false;
		    }
		  };

		  /**
		   * Close this web socket gracefully.
		   */
		  WebSocket.prototype.close = function() {
		    if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
		      return;
		    }
		    this.readyState = WebSocket.CLOSING;
		    WebSocket.__flash.close(this.__id);
		  };

		  /**
		   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
		   *
		   * @param {string} type
		   * @param {function} listener
		   * @param {boolean} useCapture
		   * @return void
		   */
		  WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
		    if (!(type in this.__events)) {
		      this.__events[type] = [];
		    }
		    this.__events[type].push(listener);
		  };

		  /**
		   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
		   *
		   * @param {string} type
		   * @param {function} listener
		   * @param {boolean} useCapture
		   * @return void
		   */
		  WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
		    if (!(type in this.__events)) return;
		    var events = this.__events[type];
		    for (var i = events.length - 1; i >= 0; --i) {
		      if (events[i] === listener) {
		        events.splice(i, 1);
		        break;
		      }
		    }
		  };

		  /**
		   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
		   *
		   * @param {Event} event
		   * @return void
		   */
		  WebSocket.prototype.dispatchEvent = function(event) {
		    var events = this.__events[event.type] || [];
		    for (var i = 0; i < events.length; ++i) {
		      events[i](event);
		    }
		    var handler = this["on" + event.type];
		    if (handler) handler(event);
		  };

		  /**
		   * Handles an event from Flash.
		   * @param {Object} flashEvent
		   */
		  WebSocket.prototype.__handleEvent = function(flashEvent) {
		    console.info('__handleEvent', new Date(), flashEvent);
		    if ("readyState" in flashEvent) {
		      this.readyState = flashEvent.readyState;
		    }
		    if ("protocol" in flashEvent) {
		      this.protocol = flashEvent.protocol;
		    }
		    
		    var jsEvent;
		    if (flashEvent.type == "open" || flashEvent.type == "error") {
		      jsEvent = this.__createSimpleEvent(flashEvent.type);
		    } else if (flashEvent.type == "close") {
		      // TODO implement jsEvent.wasClean
		      jsEvent = this.__createSimpleEvent("close");
		    } else if (flashEvent.type == "message") {
		      var data = decodeURIComponent(flashEvent.message);
		      jsEvent = this.__createMessageEvent("message", data);
		    } else {
		      throw "unknown event type: " + flashEvent.type;
		    }
		    
		    this.dispatchEvent(jsEvent);
		  };
		  
		  WebSocket.prototype.__createSimpleEvent = function(type) {
		    if (document.createEvent && window.Event) {
		      var event = document.createEvent("Event");
		      event.initEvent(type, false, false);
		      return event;
		    } else {
		      return {type: type, bubbles: false, cancelable: false};
		    }
		  };
		  
		  WebSocket.prototype.__createMessageEvent = function(type, data) {
		    if (document.createEvent && window.MessageEvent && !window.opera) {
		      var event = document.createEvent("MessageEvent");
		      event.initMessageEvent("message", false, false, data, null, null, window, null);
		      return event;
		    } else {
		      // IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
		      return {type: type, data: data, bubbles: false, cancelable: false};
		    }
		  };
		  
		  /**
		   * Define the WebSocket readyState enumeration.
		   */
		  WebSocket.CONNECTING = 0;
		  WebSocket.OPEN = 1;
		  WebSocket.CLOSING = 2;
		  WebSocket.CLOSED = 3;

		  WebSocket.__flash = null;
		  WebSocket.__instances = {};
		  WebSocket.__tasks = [];
		  WebSocket.__nextId = 0;
		  
		  /**
		   * Load a new flash security policy file.
		   * @param {string} url
		   */
		  WebSocket.loadFlashPolicyFile = function(url){
		    WebSocket.__addTask(function() {
		      WebSocket.__flash.loadManualPolicyFile(url);
		    });
		  };

		  /**
		   * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
		   */
		  WebSocket.__initialize = function() {
		    if (WebSocket.__flash) return;
		    
		    if (WebSocket.__swfLocation) {
		      // For backword compatibility.
		      window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
		    }
		    if (!window.WEB_SOCKET_SWF_LOCATION) {
		      console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
		      return;
		    }
		    var container = document.createElement("div");
		    container.id = "webSocketContainer";
		    // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
		    // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
		    // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
		    // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
		    // the best we can do as far as we know now.
		    container.style.position = "absolute";
		    if (WebSocket.__isFlashLite()) {
		      container.style.left = "0px";
		      container.style.top = "0px";
		    } else {
		      container.style.left = "-100px";
		      container.style.top = "-100px";
		    }
		    var holder = document.createElement("div");
		    holder.id = "webSocketFlash";
		    container.appendChild(holder);
		    document.body.appendChild(container);
		    // See this article for hasPriority:
		    // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
		    swfobject.embedSWF(
		      WEB_SOCKET_SWF_LOCATION,
		      "webSocketFlash",
		      "1" /* width */,
		      "1" /* height */,
		      "10.0.0" /* SWF version */,
		      null,
		      null,
		      {hasPriority: true, swliveconnect : true, allowScriptAccess: "always"},
		      null,
		      function(e) {
		        if (!e.success) {
		          console.error("[WebSocket] swfobject.embedSWF failed");
		        }
		      });
		  };
		  
		  /**
		   * Called by Flash to notify JS that it's fully loaded and ready
		   * for communication.
		   */
		  WebSocket.__onFlashInitialized = function() {
		    // We need to set a timeout here to avoid round-trip calls
		    // to flash during the initialization process.
		    setTimeout(function() {
		      WebSocket.__flash = document.getElementById("webSocketFlash");
		      WebSocket.__flash.setCallerUrl(location.href);
		      WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
		      for (var i = 0; i < WebSocket.__tasks.length; ++i) {
		        WebSocket.__tasks[i]();
		      }
		      WebSocket.__tasks = [];
		    }, 0);
		  };
		  
		  /**
		   * Called by Flash to notify WebSockets events are fired.
		   */
		  WebSocket.__onFlashEvent = function() {
		    setTimeout(function() {
		      try {
		        // Gets events using receiveEvents() instead of getting it from event object
		        // of Flash event. This is to make sure to keep message order.
		        // It seems sometimes Flash events don't arrive in the same order as they are sent.
		        var events = WebSocket.__flash.receiveEvents();
		        for (var i = 0; i < events.length; ++i) {
		          WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
		        }
		      } catch (e) {
		        console.error(e);
		      }
		    }, 0);
		    return true;
		  };
		  
		  // Called by Flash.
		  WebSocket.__log = function(message) {
		    console.log(decodeURIComponent(message));
		  };
		  
		  // Called by Flash.
		  WebSocket.__error = function(message) {
		    var formatTimeUnit = function(num, count) {
		        count = count || 2;
		        var str = '' + num;
		        while (str.length < count) {
		            str = '0' + str;
		        }
		        return str;
		    };
		    var date = new Date();
		    var dateStr = date.getFullYear() + '-' + formatTimeUnit((date.getMonth()+1)) + '-' + formatTimeUnit(date.getDate()) + ' ' + formatTimeUnit(date.getHours()) + ':' + formatTimeUnit(date.getMinutes()) + ':' + formatTimeUnit(date.getSeconds()) + ':' + formatTimeUnit(date.getMilliseconds(), 3);
		    console.error(dateStr, decodeURIComponent(message));
		  };
		  
		  WebSocket.__addTask = function(task) {
		    if (WebSocket.__flash) {
		      task();
		    } else {
		      WebSocket.__tasks.push(task);
		    }
		  };
		  
		  /**
		   * Test if the browser is running flash lite.
		   * @return {boolean} True if flash lite is running, false otherwise.
		   */
		  WebSocket.__isFlashLite = function() {
		    if (!window.navigator || !window.navigator.mimeTypes) {
		      return false;
		    }
		    var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
		    if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
		      return false;
		    }
		    return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
		  };
		  
		  if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
		    if (window.addEventListener) {
		      window.addEventListener("load", function(){
		        WebSocket.__initialize();
		      }, false);
		    } else {
		      window.attachEvent("onload", function(){
		        WebSocket.__initialize();
		      });
		    }
		  }
		  
		})();

		/**
		 * socket.io XHR
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io, global) {

		  /**
		   * Expose constructor.
		   *
		   * @api public
		   */

		  exports.XHR = XHR;

		  /**
		   * XHR constructor
		   *
		   * @costructor
		   * @api public
		   */

		  function XHR (socket) {
		    if (!socket) return;

		    io.Transport.apply(this, arguments);
		    this.sendBuffer = [];
		  };

		  /**
		   * Inherits from Transport.
		   */

		  io.util.inherit(XHR, io.Transport);

		  /**
		   * Establish a connection
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  XHR.prototype.open = function () {
		    this.socket.setBuffer(false);
		    this.onOpen();
		    this.get();

		    // we need to make sure the request succeeds since we have no indication
		    // whether the request opened or not until it succeeded.
		    this.setCloseTimeout();

		    return this;
		  };

		  /**
		   * Check if we need to send data to the Socket.IO server, if we have data in our
		   * buffer we encode it and forward it to the `post` method.
		   *
		   * @api private
		   */

		  XHR.prototype.payload = function (payload) {
		    var msgs = [];

		    for (var i = 0, l = payload.length; i < l; i++) {
		      msgs.push(io.parser.encodePacket(payload[i]));
		    }

		    this.send(io.parser.encodePayload(msgs));
		  };

		  /**
		   * Send data to the Socket.IO server.
		   *
		   * @param data The message
		   * @returns {Transport}
		   * @api public
		   */

		  XHR.prototype.send = function (data) {
		    this.post(data);
		    return this;
		  };

		  /**
		   * Posts a encoded message to the Socket.IO server.
		   *
		   * @param {String} data A encoded message.
		   * @api private
		   */

		  function empty () { };

		  XHR.prototype.post = function (data) {
		    var self = this;
		    this.socket.setBuffer(true);

		    function stateChange () {
		      if (this.readyState == 4) {
		        this.onreadystatechange = empty;
		        self.posting = false;

		        if (this.status == 200){
		          self.socket.setBuffer(false);
		        } else {
		          self.onClose();
		        }
		      }
		    }

		    function onload () {
		      this.onload = empty;
		      self.socket.setBuffer(false);
		    };

		    this.sendXHR = this.request('POST');

		    if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
		      this.sendXHR.onload = this.sendXHR.onerror = onload;
		    } else {
		      this.sendXHR.onreadystatechange = stateChange;
		    }

		    this.sendXHR.send(data);
		  };

		  /**
		   * Disconnects the established `XHR` connection.
		   *
		   * @returns {Transport}
		   * @api public
		   */

		  XHR.prototype.close = function () {
		    this.onClose();
		    return this;
		  };

		  /**
		   * Generates a configured XHR request
		   *
		   * @param {String} url The url that needs to be requested.
		   * @param {String} method The method the request should use.
		   * @returns {XMLHttpRequest}
		   * @api private
		   */

		  XHR.prototype.request = function (method) {
		    var req = io.util.request(this.socket.isXDomain())
		      , query = io.util.query(this.socket.options.query, 't=' + +new Date);

		    req.open(method || 'GET', this.prepareUrl() + query, true);

		    if (method == 'POST') {
		      try {
		        if (req.setRequestHeader) {
		          req.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
		        } else {
		          // XDomainRequest
		          req.contentType = 'text/plain';
		        }
		      } catch (e) {}
		    }

		    return req;
		  };

		  /**
		   * Returns the scheme to use for the transport URLs.
		   *
		   * @api private
		   */

		  XHR.prototype.scheme = function () {
		    return this.socket.options.secure ? 'https' : 'http';
		  };

		  /**
		   * Check if the XHR transports are supported
		   *
		   * @param {Boolean} xdomain Check if we support cross domain requests.
		   * @returns {Boolean}
		   * @api public
		   */

		  XHR.check = function (socket, xdomain) {
		    try {
		      var request = io.util.request(xdomain),
		          usesXDomReq = (global.XDomainRequest && request instanceof XDomainRequest),
		          socketProtocol = (socket && socket.options && socket.options.secure ? 'https:' : 'http:'),
		          isXProtocol = (global.location && socketProtocol != global.location.protocol);
		      if (request && !(usesXDomReq && isXProtocol)) {
		        return true;
		      }
		    } catch(e) {}

		    return false;
		  };

		  /**
		   * Check if the XHR transport supports cross domain requests.
		   *
		   * @returns {Boolean}
		   * @api public
		   */

		  XHR.xdomainCheck = function (socket) {
		    return XHR.check(socket, true);
		  };

		})(
		    'undefined' != typeof io ? io.Transport : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		  , this
		);
		/**
		 * socket.io HTMLFile
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io) {

		  /**
		   * Expose constructor.
		   */

		  exports.htmlfile = HTMLFile;

		  /**
		   * The HTMLFile transport creates a `forever iframe` based transport
		   * for Internet Explorer. Regular forever iframe implementations will 
		   * continuously trigger the browsers buzy indicators. If the forever iframe
		   * is created inside a `htmlfile` these indicators will not be trigged.
		   *
		   * @constructor
		   * @extends {io.Transport.XHR}
		   * @api public
		   */

		  function HTMLFile (socket) {
		    io.Transport.XHR.apply(this, arguments);
		  };

		  /**
		   * Inherits from XHR transport.
		   */

		  io.util.inherit(HTMLFile, io.Transport.XHR);

		  /**
		   * Transport name
		   *
		   * @api public
		   */

		  HTMLFile.prototype.name = 'htmlfile';

		  /**
		   * Creates a new Ac...eX `htmlfile` with a forever loading iframe
		   * that can be used to listen to messages. Inside the generated
		   * `htmlfile` a reference will be made to the HTMLFile transport.
		   *
		   * @api private
		   */

		  HTMLFile.prototype.get = function () {
		    this.doc = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
		    this.doc.open();
		    this.doc.write('<html></html>');
		    this.doc.close();
		    this.doc.parentWindow.s = this;

		    var iframeC = this.doc.createElement('div');
		    iframeC.className = 'socketio';

		    this.doc.body.appendChild(iframeC);
		    this.iframe = this.doc.createElement('iframe');

		    iframeC.appendChild(this.iframe);

		    var self = this
		      , query = io.util.query(this.socket.options.query, 't='+ +new Date);

		    this.iframe.src = this.prepareUrl() + query;

		    io.util.on(window, 'unload', function () {
		      self.destroy();
		    });
		  };

		  /**
		   * The Socket.IO server will write script tags inside the forever
		   * iframe, this function will be used as callback for the incoming
		   * information.
		   *
		   * @param {String} data The message
		   * @param {document} doc Reference to the context
		   * @api private
		   */

		  HTMLFile.prototype._ = function (data, doc) {
		    this.onData(data);
		    try {
		      var script = doc.getElementsByTagName('script')[0];
		      script.parentNode.removeChild(script);
		    } catch (e) { }
		  };

		  /**
		   * Destroy the established connection, iframe and `htmlfile`.
		   * And calls the `CollectGarbage` function of Internet Explorer
		   * to release the memory.
		   *
		   * @api private
		   */

		  HTMLFile.prototype.destroy = function () {
		    if (this.iframe){
		      try {
		        this.iframe.src = 'about:blank';
		      } catch(e){}

		      this.doc = null;
		      this.iframe.parentNode.removeChild(this.iframe);
		      this.iframe = null;

		      CollectGarbage();
		    }
		  };

		  /**
		   * Disconnects the established connection.
		   *
		   * @returns {Transport} Chaining.
		   * @api public
		   */

		  HTMLFile.prototype.close = function () {
		    this.destroy();
		    return io.Transport.XHR.prototype.close.call(this);
		  };

		  /**
		   * Checks if the browser supports this transport. The browser
		   * must have an `Ac...eXObject` implementation.
		   *
		   * @return {Boolean}
		   * @api public
		   */

		  HTMLFile.check = function (socket) {
		    if (typeof window != "undefined" && (['Active'].concat('Object').join('X')) in window){
		      try {
		        var a = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
		        return a && io.Transport.XHR.check(socket);
		      } catch(e){}
		    }
		    return false;
		  };

		  /**
		   * Check if cross domain requests are supported.
		   *
		   * @returns {Boolean}
		   * @api public
		   */

		  HTMLFile.xdomainCheck = function () {
		    // we can probably do handling for sub-domains, we should
		    // test that it's cross domain but a subdomain here
		    return false;
		  };

		  /**
		   * Add the transport to your public io.transports array.
		   *
		   * @api private
		   */

		  io.transports.push('htmlfile');

		})(
		    'undefined' != typeof io ? io.Transport : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		);

		/**
		 * socket.io XHRPolling
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io, global) {

		  /**
		   * Expose constructor.
		   */

		  exports['xhr-polling'] = XHRPolling;

		  /**
		   * The XHR-polling transport uses long polling XHR requests to create a
		   * "persistent" connection with the server.
		   *
		   * @constructor
		   * @api public
		   */

		  function XHRPolling () {
		    io.Transport.XHR.apply(this, arguments);
		  };

		  /**
		   * Inherits from XHR transport.
		   */

		  io.util.inherit(XHRPolling, io.Transport.XHR);

		  /**
		   * Merge the properties from XHR transport
		   */

		  io.util.merge(XHRPolling, io.Transport.XHR);

		  /**
		   * Transport name
		   *
		   * @api public
		   */

		  XHRPolling.prototype.name = 'xhr-polling';

		  /**
		   * Indicates whether heartbeats is enabled for this transport
		   *
		   * @api private
		   */

		  XHRPolling.prototype.heartbeats = function () {
		    return false;
		  };

		  /** 
		   * Establish a connection, for iPhone and Android this will be done once the page
		   * is loaded.
		   *
		   * @returns {Transport} Chaining.
		   * @api public
		   */

		  XHRPolling.prototype.open = function () {
		    var self = this;

		    io.Transport.XHR.prototype.open.call(self);
		    return false;
		  };

		  /**
		   * Starts a XHR request to wait for incoming messages.
		   *
		   * @api private
		   */

		  function empty () {};

		  XHRPolling.prototype.get = function () {
		    if (!this.isOpen) return;

		    var self = this;

		    function stateChange () {
		      if (this.readyState == 4) {
		        this.onreadystatechange = empty;

		        if (this.status == 200) {
		          self.onData(this.responseText);
		          self.get();
		        } else {
		          self.onClose();
		        }
		      }
		    };

		    function onload () {
		      this.onload = empty;
		      this.onerror = empty;
		      self.retryCounter = 1;
		      self.onData(this.responseText);
		      self.get();
		    };

		    function onerror () {
		      self.retryCounter ++;
		      if(!self.retryCounter || self.retryCounter > 3) {
		        self.onClose();  
		      } else {
		        self.get();
		      }
		    };

		    this.xhr = this.request();

		    if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
		      this.xhr.onload = onload;
		      this.xhr.onerror = onerror;
		    } else {
		      this.xhr.onreadystatechange = stateChange;
		    }

		    this.xhr.send(null);
		  };

		  /**
		   * Handle the unclean close behavior.
		   *
		   * @api private
		   */

		  XHRPolling.prototype.onClose = function () {
		    io.Transport.XHR.prototype.onClose.call(this);

		    if (this.xhr) {
		      this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
		      try {
		        this.xhr.abort();
		      } catch(e){}
		      this.xhr = null;
		    }
		  };

		  /**
		   * Webkit based browsers show a infinit spinner when you start a XHR request
		   * before the browsers onload event is called so we need to defer opening of
		   * the transport until the onload event is called. Wrapping the cb in our
		   * defer method solve this.
		   *
		   * @param {Socket} socket The socket instance that needs a transport
		   * @param {Function} fn The callback
		   * @api private
		   */

		  XHRPolling.prototype.ready = function (socket, fn) {
		    var self = this;

		    io.util.defer(function () {
		      fn.call(self);
		    });
		  };

		  /**
		   * Add the transport to your public io.transports array.
		   *
		   * @api private
		   */

		  io.transports.push('xhr-polling');

		})(
		    'undefined' != typeof io ? io.Transport : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		  , this
		);

		/**
		 * socket.io JSONPPolling
		 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
		 * MIT Licensed
		 */

		(function (exports, io, global) {
		  /**
		   * There is a way to hide the loading indicator in Firefox. If you create and
		   * remove a iframe it will stop showing the current loading indicator.
		   * Unfortunately we can't feature detect that and UA sniffing is evil.
		   *
		   * @api private
		   */

		  var indicator = global.document && "MozAppearance" in
		    global.document.documentElement.style;

		  /**
		   * Expose constructor.
		   */

		  exports['jsonp-polling'] = JSONPPolling;

		  /**
		   * The JSONP transport creates an persistent connection by dynamically
		   * inserting a script tag in the page. This script tag will receive the
		   * information of the Socket.IO server. When new information is received
		   * it creates a new script tag for the new data stream.
		   *
		   * @constructor
		   * @extends {io.Transport.xhr-polling}
		   * @api public
		   */

		  function JSONPPolling (socket) {
		    io.Transport['xhr-polling'].apply(this, arguments);

		    this.index = io.j.length;

		    var self = this;

		    io.j.push(function (msg) {
		      self._(msg);
		    });
		  };

		  /**
		   * Inherits from XHR polling transport.
		   */

		  io.util.inherit(JSONPPolling, io.Transport['xhr-polling']);

		  /**
		   * Transport name
		   *
		   * @api public
		   */

		  JSONPPolling.prototype.name = 'jsonp-polling';

		  /**
		   * Posts a encoded message to the Socket.IO server using an iframe.
		   * The iframe is used because script tags can create POST based requests.
		   * The iframe is positioned outside of the view so the user does not
		   * notice it's existence.
		   *
		   * @param {String} data A encoded message.
		   * @api private
		   */

		  JSONPPolling.prototype.post = function (data) {
		    var self = this
		      , query = io.util.query(
		             this.socket.options.query
		          , 't='+ (+new Date) + '&i=' + this.index
		        );

		    if (!this.form) {
		      var form = document.createElement('form')
		        , area = document.createElement('textarea')
		        , id = this.iframeId = 'socketio_iframe_' + this.index
		        , iframe;

		      form.className = 'socketio';
		      form.style.position = 'absolute';
		      form.style.top = '0px';
		      form.style.left = '0px';
		      form.style.display = 'none';
		      form.target = id;
		      form.method = 'POST';
		      form.setAttribute('accept-charset', 'utf-8');
		      area.name = 'd';
		      form.appendChild(area);
		      document.body.appendChild(form);

		      this.form = form;
		      this.area = area;
		    }

		    this.form.action = this.prepareUrl() + query;

		    function complete () {
		      initIframe();
		      self.socket.setBuffer(false);
		    };

		    function initIframe () {
		      if (self.iframe) {
		        self.form.removeChild(self.iframe);
		      }

		      try {
		        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
		        iframe = document.createElement('<iframe name="'+ self.iframeId +'">');
		      } catch (e) {
		        iframe = document.createElement('iframe');
		        iframe.name = self.iframeId;
		      }

		      iframe.id = self.iframeId;

		      self.form.appendChild(iframe);
		      self.iframe = iframe;
		    };

		    initIframe();

		    // we temporarily stringify until we figure out how to prevent
		    // browsers from turning `\n` into `\r\n` in form inputs
		    this.area.value = io.JSON.stringify(data);

		    try {
		      this.form.submit();
		    } catch(e) {}

		    if (this.iframe.attachEvent) {
		      iframe.onreadystatechange = function () {
		        if (self.iframe.readyState == 'complete') {
		          complete();
		        }
		      };
		    } else {
		      this.iframe.onload = complete;
		    }

		    this.socket.setBuffer(true);
		  };

		  /**
		   * Creates a new JSONP poll that can be used to listen
		   * for messages from the Socket.IO server.
		   *
		   * @api private
		   */

		  JSONPPolling.prototype.get = function () {
		    var self = this
		      , script = document.createElement('script')
		      , query = io.util.query(
		             this.socket.options.query
		          , 't='+ (+new Date) + '&i=' + this.index
		        );

		    if (this.script) {
		      this.script.parentNode.removeChild(this.script);
		      this.script = null;
		    }

		    script.async = true;
		    script.src = this.prepareUrl() + query;
		    script.onerror = function () {
		      self.onClose();
		    };

		    var insertAt = document.getElementsByTagName('script')[0];
		    insertAt.parentNode.insertBefore(script, insertAt);
		    this.script = script;

		    if (indicator) {
		      setTimeout(function () {
		        var iframe = document.createElement('iframe');
		        document.body.appendChild(iframe);
		        document.body.removeChild(iframe);
		      }, 100);
		    }
		  };

		  /**
		   * Callback function for the incoming message stream from the Socket.IO server.
		   *
		   * @param {String} data The message
		   * @api private
		   */

		  JSONPPolling.prototype._ = function (msg) {
		    this.onData(msg);
		    if (this.isOpen) {
		      this.get();
		    }
		    return this;
		  };

		  /**
		   * The indicator hack only works after onload
		   *
		   * @param {Socket} socket The socket instance that needs a transport
		   * @param {Function} fn The callback
		   * @api private
		   */

		  JSONPPolling.prototype.ready = function (socket, fn) {
		    var self = this;
		    if (!indicator) return fn.call(this);

		    io.util.load(function () {
		      fn.call(self);
		    });
		  };

		  /**
		   * Checks if browser supports this transport.
		   *
		   * @return {Boolean}
		   * @api public
		   */

		  JSONPPolling.check = function () {
		    return 'document' in global;
		  };

		  /**
		   * Check if cross domain requests are supported
		   *
		   * @returns {Boolean}
		   * @api public
		   */

		  JSONPPolling.xdomainCheck = function () {
		    return true;
		  };

		  /**
		   * Add the transport to your public io.transports array.
		   *
		   * @api private
		   */

		  io.transports.push('jsonp-polling');

		})(
		    'undefined' != typeof io ? io.Transport : module.exports
		  , 'undefined' != typeof io ? io : module.parent.exports
		  , this
		);

		if (true) {
		  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
		    window.io = io;
		    return io;
		  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		})();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var ProtocolFn = __webpack_require__(39).fn;
		var NIMError = __webpack_require__(14);
		var platform = __webpack_require__(41);
		var LoginPort = __webpack_require__(46);
		var device = __webpack_require__(47);
		var config = __webpack_require__(26);
		var logger = __webpack_require__(40);
		var util = __webpack_require__(10);
		var notundef = util.notundef;

		ProtocolFn.login = function() {
		    var self = this;
		    self.sendCmd('login', self.assembleLogin(), self.onLogin.bind(self));
		};

		ProtocolFn.assembleIMLogin = function() {
		    var options = this.options;
		    return {
		        appKey: options.appKey,
		        account: options.account,
		        token: options.token,
		        sdkVersion: config.info.sdkVersion,
		        protocolVersion: config.info.protocolVersion,
		        os: platform.os.toString(),
		        browser: platform.name + ' ' + platform.version,
		        deviceId: device.deviceId
		    };
		};

		// 处理登陆返回
		ProtocolFn.onLogin = function(error, obj) {
		    var self = this;
		    if (!error) {
		        self.startHeartbeat();
		        self.afterLogin(obj);
		        self.notifyLogin(obj);
		    } else {
		        self.onAuthError(error);
		    }
		};

		ProtocolFn.afterLogin = util.emptyFunc;

		ProtocolFn.notifyLogin = function(obj) {
		    logger.info('onConnect', obj);
		    this.options.onconnect(obj);
		};

		ProtocolFn.logout = function() {
		    var self = this;
		    if (!self.isConnected()) { return; }
		    var error = new NIMError('主动退出', 'logout');
		    self.onAuthError(error);
		    // 主动调用 disconnect, 不用发送 logout 指令
		    // self.sendCmd('logout');
		};

		ProtocolFn.onKicked = function(packet) {
		    // debugger;
		    var self = this;

		    var content = packet.content;
		    var from = content.from;
		    var reason = content.reason;
		    var custom = content.custom;

		    var kicked = {
		        reason: self.kickedReasons[reason] || 'unknown',
		        message: self.kickedMessages[reason] || '未知原因'
		    };
		    // IM 被踢有 from 字段
		    if (notundef(from)) {
		        kicked.from = LoginPort.reverseType(from);
		    }
		    // 聊天室被踢有 custom 字段
		    if (notundef(custom)) {
		        kicked.custom = custom;
		    }

		    var error = new NIMError('被踢了', 'kicked');
		    util.merge(error, kicked);

		    self.onAuthError(error);
		};

		/*
		 * 认证错误, 不需要重连
		 * - 主动登出
		 * - 登录错误
		 * - 被踢
		 */
		ProtocolFn.onAuthError = function(error) {
		    // debugger;
		    var self = this;
		    self.shouldReconnect = false;
		    self.markAllCallbackInvalid(error || NIMError.newConnectionError());
		    self.notifyDisconnect(error);
		};


	/***/ },
	/* 46 */
	/***/ function(module, exports) {

		/**
		 * 设备类型
		 * 
		 * - `'Android'` (安卓)
		 * - `'iOS'` (苹果)
		 * - `'PC'` (桌面)
		 * - `'WindowsPhone'` (微软)
		 * - `'Web'` (浏览器)
		 *
		 * @memberOf LoginPort
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeReverseMap = {
		    1: 'Android',
		    2: 'iOS',
		    4: 'PC',
		    8: 'WindowsPhone',
		    16: 'Web',
		    32: 'Server'
		};

		/**
		 * 云信允许多端同时登录, LoginPort代表一个登录端
		 *
		 * @constructor
		 * @property {String}   type            登录的{@link LoginPort.type|设备类型}
		 * @property {String}   os              登录设备的操作系统
		 * @property {String}   mac             登录设备的 mac 地址
		 * @property {String}   deviceId        登录设备ID, uuid
		 * @property {String}   account         登录的帐号
		 * @property {Number}   connectionId    登录设备的连接号
		 * @property {String}   ip              登录的服务器 IP
		 * @property {Number}   time            登录时间
		 * @property {Boolean}  online          是否在线
		 */
		function LoginPort() {}

		LoginPort.reverse = function(loginPort) {
		    var obj = loginPort;
		    obj.type = typeReverseMap[obj.type];
		    return obj;
		};

		LoginPort.reverseType = function(type) {
		    return typeReverseMap[type] || type;
		};

		module.exports = LoginPort;


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);

		var device = {};

		device.init = function() {
		    var key = 'nim_web_sdk_deviceId';
		    var deviceId = localStorage[key];
		    if (!deviceId) {
		        deviceId = util.guid();
		        localStorage[key] = deviceId;
		    }
		    device.deviceId = deviceId;
		};

		device.init();

		module.exports = device;


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		var ProtocolFn = __webpack_require__(39).fn;
		var config = __webpack_require__(26);

		ProtocolFn.processLink = function(packet) {
		    switch (packet.cmd) {
		    case 'heartbeat':
		        break;
		    default:
		        break;
		    }
		};

		ProtocolFn.startHeartbeat = function() {
		    var self = this;
		    self.stopHeartbeat();
		    self.heartbeatTimer = window.setTimeout(function() {
		        self.sendCmd('heartbeat', null, self.onHeartbeat.bind(self));
		    }, config.heartbeatInterval);
		};

		ProtocolFn.stopHeartbeat = function() {
		    var self = this;
		    if (!!self.heartbeatTimer) {
		        window.clearTimeout(self.heartbeatTimer);
		        self.heartbeatTimer = null;
		    }
		};

		ProtocolFn.onHeartbeat = function(error, obj) {
		    var self = this;
		    if (!error) {
		        self.startHeartbeat();
		    }
		    self.onMiscError(error, obj, 'heartbeat');
		};


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var undef = util.undef;
		var NIMError = __webpack_require__(14);
		var logger = __webpack_require__(40);

		var instances = {};

		function Protocol(options) {
		    this.configMap = options.configMap;
		    this.serializeMap = options.serializeMap;
		    this.unserializeMap = options.unserializeMap;
		}

		Protocol.getInstance = function(options) {
		    var type = options.type || options;
		    if (!instances[type]) {
		        instances[type] = new Protocol(options);
		    }
		    return instances[type];
		};

		/**
		 * 构造命令
		 *
		 * @param  {String} cmd     命令名称
		 * @param  {Map}    content 命令内容
		 * @return {Object}         命令对象
		 */
		Protocol.prototype.createCmd = (function() {
		    // 发包序列号
		    var serialId = 1;
		    return function(cmd, content) {
		        var self = this;
		        var config = this.configMap.cmdConfig[cmd];
		        cmd = {
		            SID: config.sid,
		            CID: config.cid,
		            SER: serialId++
		        };
		        // 构造参数列表
		        if (!!config.params) {
		            cmd.Q = [];
		            config.params.forEach(function(param){
		                var type = param.type;
		                var name = param.name;
		                var entity = param.entity;
		                var value = content[name];
		                if (undef(value)) {return;}
		                switch (type) {
		                case 'PropertyArray':
		                    type = 'ArrayMable';
		                    value = value.map(function(item) {
		                        return {
		                            t: 'Property',
		                            v: self.serialize(item, entity)
		                        };
		                    });
		                    break;
		                case 'Property':
		                    value = self.serialize(value, name);
		                    break;
		                case 'bool':
		                    value = !!value ? 'true': 'false';
		                    break;
		                default:
		                    break;
		                }
		                cmd.Q.push({t:type, v:value});
		            });
		        }
		        return cmd;
		    };
		}());

		/**
		 * 解析包内容
		 *
		 * @param  {String} data 包数据
		 * @return {Object}      解析后的包数据
		 * @property {Object} raw       原始包数据
		 * @property {Object} error     错误信息
		 * @property {Object} content   包内容
		 * @property {String} service   包的协议类型
		 * @property {String} cmd       包的命令类型
		 */
		Protocol.prototype.parseResponse = function(data) {
		    var self = this;
		    var raw = JSON.parse(data);
		    var packet = {
		        raw: raw,
		        error: NIMError.genError(raw.code)
		    };
		    // 获取包配置和包内容
		    var config = self.configMap.packetConfig[raw.sid + '_' + raw.cid];
		    if (!config) {
		        logger.log('no config for sid: ' + raw.sid + ' cid: ' + raw.cid);
		        return packet;
		    }
		    var body = raw.r;
		    // 如果是通知(4_1,4_2), 那么具体内容在内层包里面
		    var isNotify = config.service === 'notify' && !config.cmd;
		    packet.isNotify = isNotify;
		    if (isNotify) {
		        var innerPacket = raw.r[1].headerPacket;
		        config = self.configMap.packetConfig[innerPacket.sid + '_' + innerPacket.cid];
		        body = raw.r[1].body;
		        if (!config) {
		            logger.log('no config for sid: ' + innerPacket.sid + ' cid: ' + innerPacket.cid);
		            return packet;
		        }
		    }
		    // 附加属性
		    packet.service = config.service;
		    packet.cmd = config.cmd;

		    // 解析body
		    if (!packet.error && !!config.response){
		        packet.content = {};
		        config.response.forEach(function(res, index) {

		            var value = body[index];
		            if (util.undef(value)) { return; }

		            var type = res.type;
		            var name = res.name;
		            var entity = res.entity || name;
		            switch (type) {
		            case 'Property':
		                packet.content[name] = self.unserialize(value, entity);
		                break;
		            case 'PropertyArray':
		                packet.content[name] = [];
		                value.forEach(function(data) {
		                    packet.content[name].push(self.unserialize(data, entity));
		                });
		                break;
		            case 'String':
		                packet.content[name] = value;
		                break;
		            case 'StrArray':
		                packet.content[name] = value;
		                break;
		            case 'Number':
		                packet.content[name] = +value;
		                break;
		            case 'Boolean':
		                packet.content[name] = value;
		                break;
		            default:
		                break;
		            }
		            // 如果是通知, id在整个包内容的第一个位置, 里面的消息和系统消息是没有这个id的
		            // hzzhangyingya
		            if (isNotify && name === 'msg' || name === 'sysMsg') {
		                var obj = packet.content[name];
		                if (util.isObject(obj)) {
		                    obj.idServer = raw.r[0];
		                }
		            }
		            
		        });
		    }
		    
		    return packet;
		};

		/**
		 * 序列化数据
		 *
		 * @param  {Object} obj     待序列化的对象
		 * @param  {String} entity  对应的实体
		 * @return {Object}         序列化后的对象
		 */
		Protocol.prototype.serialize = function(obj, entity){
		    var map = this.serializeMap[entity];
		    var data = {};
		    for(var p in map){
		        if (obj.hasOwnProperty(p)) {
		            data[map[p]] = obj[p];
		        }
		    }
		    return data;
		};

		/**
		 * 反序列化
		 *
		 * @param  {Object} data   序列化的对象
		 * @param  {String} entity 对应的实体
		 * @return {Object}        反序列化后的对象
		 */
		Protocol.prototype.unserialize = function(data, entity){
		    var map = this.unserializeMap[entity];
		    var obj = {};
		    for(var p in map){
		        // map有可能会有多余项, data不一定有对应内容
		        if (data.hasOwnProperty(p)) {
		            obj[map[p]] = data[p];
		        }
		    }
		    return obj;
		};

		module.exports = Protocol;


	/***/ },
	/* 50 */,
	/* 51 */
	/***/ function(module, exports) {

		var idMap = {
		    // 连接相关
		    link: {
		        id: 1,
		        // 心跳
		        heartbeat: 2
		    }
		};


		/**
		 * 命令配置
		 * params 说明: 如果类型是 Property, 如果没有 entity, entity 值就是 name
		 */
		var cmdConfig = {
		    // 心跳
		    heartbeat: { sid: idMap.link.id, cid: idMap.link.heartbeat }
		};

		/**
		 * 回包配置
		 * response 说明: 如果没有 entity, entity 值就是 name
		 */
		var packetConfig = {
		    // 心跳
		    '1_2': {service: 'link', cmd: 'heartbeat'}
		};

		module.exports = {
		    idMap: idMap,
		    cmdConfig: cmdConfig,
		    packetConfig: packetConfig
		};


	/***/ },
	/* 52 */,
	/* 53 */,
	/* 54 */,
	/* 55 */,
	/* 56 */,
	/* 57 */,
	/* 58 */,
	/* 59 */,
	/* 60 */,
	/* 61 */,
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		var device = __webpack_require__(47);

		function Message() {}

		Message.typeMap = {
		    text: 0,
		    image: 1,
		    audio: 2,
		    video: 3,
		    geo: 4,
		    notification: 5,
		    file: 6,
		    tip: 10,
		    custom: 100
		};
		var typeReverseMap = Message.typeReverseMap = {
		    0: 'text',
		    1: 'image',
		    2: 'audio',
		    3: 'video',
		    4: 'geo',
		    5: 'notification',
		    6: 'file',
		    10: 'tip',
		    100: 'custom'
		};
		Message.validTypes = Object.keys(Message.typeMap);

		Message.setFlow = function(msg, account) {
		    // 自己发的就算自己发的
		    var out = account === msg.from;
		    // 如果同时也是自己收的, 那么比较设备号, 设备号一样的话就算自己发的
		    if (out && account === msg.to) {
		        out = device.deviceId === msg.fromDeviceId;
		    }
		    msg.flow = out ? 'out' : 'in';
		};

		Message.getType = function(msg) {
		    var type = msg.type;
		    return typeReverseMap[type] || type;
		};

		module.exports = Message;


	/***/ },
	/* 63 */,
	/* 64 */,
	/* 65 */,
	/* 66 */,
	/* 67 */,
	/* 68 */,
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var window = __webpack_require__(70)
		var once = __webpack_require__(71)
		var isFunction = __webpack_require__(72)
		var parseHeaders = __webpack_require__(73)
		var xtend = __webpack_require__(76)

		module.exports = createXHR
		createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
		createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

		forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
		    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
		        options = initParams(uri, options, callback)
		        options.method = method.toUpperCase()
		        return _createXHR(options)
		    }
		})

		function forEachArray(array, iterator) {
		    for (var i = 0; i < array.length; i++) {
		        iterator(array[i])
		    }
		}

		function isEmpty(obj){
		    for(var i in obj){
		        if(obj.hasOwnProperty(i)) return false
		    }
		    return true
		}

		function initParams(uri, options, callback) {
		    var params = uri

		    if (isFunction(options)) {
		        callback = options
		        if (typeof uri === "string") {
		            params = {uri:uri}
		        }
		    } else {
		        params = xtend(options, {uri: uri})
		    }

		    params.callback = callback
		    return params
		}

		function createXHR(uri, options, callback) {
		    options = initParams(uri, options, callback)
		    return _createXHR(options)
		}

		function _createXHR(options) {
		    var callback = options.callback
		    if(typeof callback === "undefined"){
		        throw new Error("callback argument missing")
		    }
		    callback = once(callback)

		    function readystatechange() {
		        if (xhr.readyState === 4) {
		            loadFunc()
		        }
		    }

		    function getBody() {
		        // Chrome with requestType=blob throws errors arround when even testing access to responseText
		        var body = undefined

		        if (xhr.response) {
		            body = xhr.response
		        } else if (xhr.responseType === "text" || !xhr.responseType) {
		            body = xhr.responseText || xhr.responseXML
		        }

		        if (isJson) {
		            try {
		                body = JSON.parse(body)
		            } catch (e) {}
		        }

		        return body
		    }

		    var failureResponse = {
		                body: undefined,
		                headers: {},
		                statusCode: 0,
		                method: method,
		                url: uri,
		                rawRequest: xhr
		            }

		    function errorFunc(evt) {
		        clearTimeout(timeoutTimer)
		        if(!(evt instanceof Error)){
		            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
		        }
		        evt.statusCode = 0
		        callback(evt, failureResponse)
		    }

		    // will load the data & process the response in a special response object
		    function loadFunc() {
		        if (aborted) return
		        var status
		        clearTimeout(timeoutTimer)
		        if(options.useXDR && xhr.status===undefined) {
		            //IE8 CORS GET successful response doesn't have a status field, but body is fine
		            status = 200
		        } else {
		            status = (xhr.status === 1223 ? 204 : xhr.status)
		        }
		        var response = failureResponse
		        var err = null

		        if (status !== 0){
		            response = {
		                body: getBody(),
		                statusCode: status,
		                method: method,
		                headers: {},
		                url: uri,
		                rawRequest: xhr
		            }
		            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
		                response.headers = parseHeaders(xhr.getAllResponseHeaders())
		            }
		        } else {
		            err = new Error("Internal XMLHttpRequest Error")
		        }
		        callback(err, response, response.body)

		    }

		    var xhr = options.xhr || null

		    if (!xhr) {
		        if (options.cors || options.useXDR) {
		            xhr = new createXHR.XDomainRequest()
		        }else{
		            xhr = new createXHR.XMLHttpRequest()
		        }
		    }

		    var key
		    var aborted
		    var uri = xhr.url = options.uri || options.url
		    var method = xhr.method = options.method || "GET"
		    var body = options.body || options.data || null
		    var headers = xhr.headers = options.headers || {}
		    var sync = !!options.sync
		    var isJson = false
		    var timeoutTimer

		    if ("json" in options) {
		        isJson = true
		        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
		        if (method !== "GET" && method !== "HEAD") {
		            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
		            body = JSON.stringify(options.json)
		        }
		    }

		    xhr.onreadystatechange = readystatechange
		    xhr.onload = loadFunc
		    xhr.onerror = errorFunc
		    // IE9 must have onprogress be set to a unique function.
		    xhr.onprogress = function () {
		        // IE must die
		    }
		    xhr.ontimeout = errorFunc
		    xhr.open(method, uri, !sync, options.username, options.password)
		    //has to be after open
		    if(!sync) {
		        xhr.withCredentials = !!options.withCredentials
		    }
		    // Cannot set timeout with sync request
		    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
		    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
		    if (!sync && options.timeout > 0 ) {
		        timeoutTimer = setTimeout(function(){
		            aborted=true//IE9 may still call readystatechange
		            xhr.abort("timeout")
		            var e = new Error("XMLHttpRequest timeout")
		            e.code = "ETIMEDOUT"
		            errorFunc(e)
		        }, options.timeout )
		    }

		    if (xhr.setRequestHeader) {
		        for(key in headers){
		            if(headers.hasOwnProperty(key)){
		                xhr.setRequestHeader(key, headers[key])
		            }
		        }
		    } else if (options.headers && !isEmpty(options.headers)) {
		        throw new Error("Headers cannot be set on an XDomainRequest object")
		    }

		    if ("responseType" in options) {
		        xhr.responseType = options.responseType
		    }

		    if ("beforeSend" in options &&
		        typeof options.beforeSend === "function"
		    ) {
		        options.beforeSend(xhr)
		    }

		    xhr.send(body)

		    return xhr


		}

		function noop() {}


	/***/ },
	/* 70 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
		    module.exports = window;
		} else if (typeof global !== "undefined") {
		    module.exports = global;
		} else if (typeof self !== "undefined"){
		    module.exports = self;
		} else {
		    module.exports = {};
		}

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 71 */
	/***/ function(module, exports) {

		module.exports = once

		once.proto = once(function () {
		  Object.defineProperty(Function.prototype, 'once', {
		    value: function () {
		      return once(this)
		    },
		    configurable: true
		  })
		})

		function once (fn) {
		  var called = false
		  return function () {
		    if (called) return
		    called = true
		    return fn.apply(this, arguments)
		  }
		}


	/***/ },
	/* 72 */
	/***/ function(module, exports) {

		module.exports = isFunction

		var toString = Object.prototype.toString

		function isFunction (fn) {
		  var string = toString.call(fn)
		  return string === '[object Function]' ||
		    (typeof fn === 'function' && string !== '[object RegExp]') ||
		    (typeof window !== 'undefined' &&
		     // IE8 and below
		     (fn === window.setTimeout ||
		      fn === window.alert ||
		      fn === window.confirm ||
		      fn === window.prompt))
		};


	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		var trim = __webpack_require__(74)
		  , forEach = __webpack_require__(75)
		  , isArray = function(arg) {
		      return Object.prototype.toString.call(arg) === '[object Array]';
		    }

		module.exports = function (headers) {
		  if (!headers)
		    return {}

		  var result = {}

		  forEach(
		      trim(headers).split('\n')
		    , function (row) {
		        var index = row.indexOf(':')
		          , key = trim(row.slice(0, index)).toLowerCase()
		          , value = trim(row.slice(index + 1))

		        if (typeof(result[key]) === 'undefined') {
		          result[key] = value
		        } else if (isArray(result[key])) {
		          result[key].push(value)
		        } else {
		          result[key] = [ result[key], value ]
		        }
		      }
		  )

		  return result
		}

	/***/ },
	/* 74 */
	/***/ function(module, exports) {

		
		exports = module.exports = trim;

		function trim(str){
		  return str.replace(/^\s*|\s*$/g, '');
		}

		exports.left = function(str){
		  return str.replace(/^\s*/, '');
		};

		exports.right = function(str){
		  return str.replace(/\s*$/, '');
		};


	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {

		var isFunction = __webpack_require__(72)

		module.exports = forEach

		var toString = Object.prototype.toString
		var hasOwnProperty = Object.prototype.hasOwnProperty

		function forEach(list, iterator, context) {
		    if (!isFunction(iterator)) {
		        throw new TypeError('iterator must be a function')
		    }

		    if (arguments.length < 3) {
		        context = this
		    }
		    
		    if (toString.call(list) === '[object Array]')
		        forEachArray(list, iterator, context)
		    else if (typeof list === 'string')
		        forEachString(list, iterator, context)
		    else
		        forEachObject(list, iterator, context)
		}

		function forEachArray(array, iterator, context) {
		    for (var i = 0, len = array.length; i < len; i++) {
		        if (hasOwnProperty.call(array, i)) {
		            iterator.call(context, array[i], i, array)
		        }
		    }
		}

		function forEachString(string, iterator, context) {
		    for (var i = 0, len = string.length; i < len; i++) {
		        // no such thing as a sparse string.
		        iterator.call(context, string.charAt(i), i, string)
		    }
		}

		function forEachObject(object, iterator, context) {
		    for (var k in object) {
		        if (hasOwnProperty.call(object, k)) {
		            iterator.call(context, object[k], k, object)
		        }
		    }
		}


	/***/ },
	/* 76 */
	/***/ function(module, exports) {

		module.exports = extend

		function extend() {
		    var target = {}

		    for (var i = 0; i < arguments.length; i++) {
		        var source = arguments[i]

		        for (var key in source) {
		            if (source.hasOwnProperty(key)) {
		                target[key] = source[key]
		            }
		        }
		    }

		    return target
		}


	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;(function ( window , undefined ) {
		    'use strict';

		    var indexedDB,
		        IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange,
		        transactionModes = {
		            readonly: 'readonly',
		            readwrite: 'readwrite'
		        };

		    var hasOwn = Object.prototype.hasOwnProperty;

		    var getIndexedDB = function() {
		      if ( !indexedDB ) {
		        indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.oIndexedDB || window.msIndexedDB || ((window.indexedDB === null && window.shimIndexedDB) ? window.shimIndexedDB : undefined);

		        if ( !indexedDB ) {
		          throw 'IndexedDB required';
		        }
		      }
		      return indexedDB;
		    };

		    var defaultMapper = function (value) {
		        return value;
		    };

		    var typeOf = function(o) {
		        return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
		    };
		    var isFunc = function(o) {
		        return typeof o === 'function';
		    };
		    var isNum = function(o) {
		        return typeOf(o) === 'number';
		    };
		    var isArray = function(o) {
		        return typeOf(o) === 'array';
		    };
		    var undef = function(o) {
		        return o === undefined;
		    };

		    var CallbackList = function () {
		        var state,
		            list = [];

		        var exec = function ( context , args ) {
		            if ( list ) {
		                args = args || [];
		                state = state || [ context , args ];

		                for ( var i = 0 , il = list.length ; i < il ; i++ ) {
		                    list[ i ].apply( state[ 0 ] , state[ 1 ] );
		                }

		                list = [];
		            }
		        };

		        this.add = function () {
		            for ( var i = 0 , il = arguments.length ; i < il ; i ++ ) {
		                list.push( arguments[ i ] );
		            }

		            if ( state ) {
		                exec();
		            }

		            return this;
		        };

		        this.execute = function () {
		            exec( this , arguments );
		            return this;
		        };
		    };

		    var Server = function ( db , name ) {
		        var that = this,
		            closed = false;

		        this.name = name;

		    		this.getIndexedDB = function () {
		    			return db;
		    		};

		        this.add = function( table ) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }

		            var records = [];
		            var counter = 0;

		            for (var i = 0; i < arguments.length - 1; i++) {
		                if (Array.isArray(arguments[i + 1])) {
		                    for (var j = 0; j < (arguments[i + 1]).length; j++) {
		                        records[counter] = (arguments[i + 1])[j];
		                        counter++;
		                    }
		                } else {
		                    records[counter] = arguments[i + 1];
		                    counter++;
		                }
		            }

		            var transaction = db.transaction( table , transactionModes.readwrite ),
		                store = transaction.objectStore( table );

		            return new Promise(function(resolve, reject){
		              records.forEach( function ( record ) {
		                  var req;
		                  if ( record.item && record.key ) {
		                      var key = record.key;
		                      record = record.item;
		                      req = store.add( record , key );
		                  } else {
		                      req = store.add( record );
		                  }

		                  req.onsuccess = function ( e ) {
		                      var target = e.target;
		                      var keyPath = target.source.keyPath;
		                      if ( keyPath === null ) {
		                          keyPath = '__id__';
		                      }
		                      Object.defineProperty( record , keyPath , {
		                          value: target.result,
		                          enumerable: true
		                      });
		                  };
		              } );

		              transaction.oncomplete = function () {
		                  resolve( records , that );
		              };
		              transaction.onerror = function ( e ) {
		                  // prevent Firefox from throwing a ConstraintError and aborting (hard)
		                  // https://bugzilla.mozilla.org/show_bug.cgi?id=872873
		                  e.preventDefault();
		                  reject( e );
		              };
		              transaction.onabort = function ( e ) {
		                  reject( e );
		              };

		            });
		        };

		        this.updateAndDelete = function( table, updates, deletes ) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }
		            var transaction = db.transaction( table, transactionModes.readwrite ),
		                store = transaction.objectStore( table ),
		                keyPath = store.keyPath;
		            return new Promise(function(resolve, reject) {
		                updates.forEach(function(record) {
		                  if ( record.item && record.key ) {
		                      var key = record.key;
		                      record = record.item;
		                      store.put( record , key );
		                  } else {
		                      store.put( record );
		                  }
		                });
		                deletes.forEach(function(record) {
		                  store['delete']( record[keyPath] );
		                });
		                transaction.oncomplete = function() {
		                  resolve([updates, deletes]);
		                };
		                transaction.onerror = function(e) {
		                  reject(e);
		                };
		            });
		        };

		        this.update = function( table ) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }

		            var records = [],
		                arg;
		            for ( var i = 1 ; i < arguments.length ; i++ ) {
		                arg = arguments[i];
		                if (Array.isArray(arg)) {
		                  records = records.concat(arg);
		                } else {
		                  records.push(arg);
		                }
		            }

		            var transaction = db.transaction( table , transactionModes.readwrite ),
		                store = transaction.objectStore( table ),
		                keyPath = store.keyPath;

		            return new Promise(function(resolve, reject){
		              records.forEach( function ( record ) {
		                  var req;
		                  var count;
		                  if ( record.item && record.key ) {
		                      var key = record.key;
		                      record = record.item;
		                      req = store.put( record , key );
		                  } else {
		                      req = store.put( record );
		                  }

		                  req.onsuccess = function ( e ) {
		                      // deferred.notify(); es6 promise can't notify
		                  };
		                  req.onerror = function ( e ) {
		                      
		                  };
		              } );

		              transaction.oncomplete = function () {
		                  resolve( records , that );
		              };
		              transaction.onerror = function ( e ) {
		                  reject( e );
		              };
		              transaction.onabort = function ( e ) {
		                  reject( e );
		              };
		            });

		        };

		        this.remove = function ( table , keys ) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }
		            var transaction = db.transaction( table , transactionModes.readwrite ),
		                store = transaction.objectStore( table );

		            return new Promise(function(resolve, reject){
		              if (!Array.isArray(keys)) {
		                keys = [keys];
		              }
		              keys.forEach(function(key) {
		                store['delete']( key );
		              });
		              transaction.oncomplete = function ( ) {
		                  resolve( keys );
		              };
		              transaction.onerror = function ( e ) {
		                  reject( e );
		              };
		              transaction.onabort = function ( e ) {
		                  reject( e );
		              }
		            });
		        };

		        this.clear = function ( table ) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }
		            var transaction = db.transaction( table , transactionModes.readwrite ),
		                store = transaction.objectStore( table );

		            var req = store.clear();
		            return new Promise(function(resolve, reject){
		              transaction.oncomplete = function ( ) {
		                  resolve( );
		              };
		              transaction.onerror = function ( e ) {
		                  reject( e );
		              };
		            });
		        };

		        this.close = function ( ) {
		            // if closed, just do nothing
		            if ( !closed ) {
		              db.close();
		              closed = true;
		              delete dbCache[ name ];
		            }
		        };

		        this.get = function ( table , id ) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }
		            var transaction = db.transaction( table ),
		                store = transaction.objectStore( table );

		            var req = store.get( id );
		            return new Promise(function(resolve, reject){
		              req.onsuccess = function ( e ) {
		                  resolve( e.target.result );
		              };
		              transaction.onerror = function ( e ) {
		                  reject( e );
		              };
		            });
		        };

		        this.query = function ( table , index ) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }
		            return new IndexQuery( table , db , index );
		        };

		        this.count = function (table , key) {
		            if ( closed ) {
		                throw 'Database has been closed';
		            }
		            var transaction = db.transaction( table ),
		                store = transaction.objectStore( table );
		        };

		        for ( var i = 0 , il = db.objectStoreNames.length ; i < il ; i++ ) {
		            (function ( storeName ) {
		                that[ storeName ] = { };
		                for ( var i in that ) {
		                    if ( !hasOwn.call( that , i ) || i === 'close' ) {
		                        continue;
		                    }
		                    that[ storeName ][ i ] = (function ( i ) {
		                        return function () {
		                            var args = [ storeName ].concat( [].slice.call( arguments , 0 ) );
		                            return that[ i ].apply( that , args );
		                        };
		                    })( i );
		                }
		            })( db.objectStoreNames[ i ] );
		        }
		    };

		    var IndexQuery = function ( table , db , indexName ) {
		        var that = this;
		        var modifyObj = false;
		        var removeObj = false;

		        var runQuery = function ( type, args , cursorType , direction, limitRange, filters , mapper ) {
		            return new Promise(function(resolve, reject){
		              var mode = (modifyObj || removeObj) ? transactionModes.readwrite : transactionModes.readonly;
		              var transaction = db.transaction( table, mode ),
		                  store = transaction.objectStore( table ),
		                  index = indexName ? store.index( indexName ) : store,
		                  keyRange = type ? IDBKeyRange[ type ].apply( null, args ) : null,
		                  results = [],
		                  indexArgs = [ keyRange ],
		                  counter = 0;
		              limitRange = limitRange ? limitRange : null;
		              filters = filters ? filters : [];

		              if ( cursorType !== 'count' ) {
		                  indexArgs.push( direction || 'next' );
		              };

		              // create a function that will set in the modifyObj properties into
		              // the passed record.
		              var modifyKeys = modifyObj ? Object.keys(modifyObj) : false;
		              var modifyRecord = function(record) {
		                  for(var i = 0; i < modifyKeys.length; i++) {
		                      var key = modifyKeys[i];
		                      var val = modifyObj[key];
		                      if(val instanceof Function) val = val(record);
		                      record[key] = val;
		                  }
		                  return record;
		              };

		              index[cursorType].apply( index , indexArgs ).onsuccess = function ( e ) {
		                  var cursor = e.target.result;
		                  if ( typeof cursor === typeof 0 ) {
		                      results = cursor;
		                  } else if ( cursor ) {
		                  	if ( limitRange !== null && limitRange[0] > counter) {
		                      	counter = limitRange[0];
		                      	cursor.advance(limitRange[0]);
		                      } else if ( limitRange !== null && counter >= (limitRange[0] + limitRange[1]) ) {
		                          //out of limit range... skip
		                      } else {
		                          var matchFilter = true;
		                          var result = 'value' in cursor ? cursor.value : cursor.key;

		                          filters.forEach( function ( filter ) {
		                              if ( !filter || !filter.length ) {
		                                  //Invalid filter do nothing
		                              } else if ( filter.length === 2 ) {
		                                  matchFilter = matchFilter && (result[filter[0]] === filter[1])
		                              } else {
		                                  if (isFunc(filter[0])) {
		                                    matchFilter = matchFilter && filter[0].apply(undefined,[result]);
		                                  }
		                              }
		                          });

		                          if (matchFilter) {
		                              counter++;
		                              results.push( mapper(result) );
		                              // if we're doing a delete or modify, run it now
		                              if (removeObj) {
		                                cursor['delete']();
		                              } else if(modifyObj) {
		                                  result = modifyRecord(result);
		                                  cursor.update(result);
		                              }
		                          }
		                          cursor['continue']();
		                      }
		                  }
		              };
		              transaction.oncomplete = function () {
		                  resolve( results );
		              };
		              transaction.onerror = function ( e ) {
		                  reject( e );
		              };
		              transaction.onabort = function ( e ) {
		                  reject( e );
		              };
		            });
		        };

		        var Query = function ( type , args ) {
		            var direction = 'next',
		                cursorType = 'openCursor',
		                filters = [],
		                limitRange = null,
		                mapper = defaultMapper,
		                unique = false;

		            var execute = function () {
		                return runQuery( type , args , cursorType , unique ? direction + 'unique' : direction, limitRange, filters , mapper );
		            };

		            var count = function () {
		                direction = null;
		                cursorType = 'count';

		                return {
		                    execute: execute
		                };
		            };
		            var limit = function () {
		                if (isArray(arguments[0])) {
		                  limitRange = arguments[0];
		                } else {
		                  limitRange = Array.prototype.slice.call( arguments , 0 , 2 );
		                }
		                if (limitRange.length == 1) {
		                    limitRange.unshift(0);
		                }
		                if (!isNum(limitRange[1])) {
		                    limitRange = null;
		                }

		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var keys = function (flag) {
		                flag = (undef(flag) ? true : !!flag);
		                if (flag) { cursorType = 'openKeyCursor'; }

		                return {
		                    execute: execute,
		                    // count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var filter = function ( ) {
		                filters.push( Array.prototype.slice.call( arguments , 0 , 2 ) );

		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var asc = function(flag) {
		                flag = (undef(flag) ? true : !!flag);
		                direction = flag ? 'next' : 'prev';

		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var desc = function (flag) {
		                flag = (undef(flag) ? true : !!flag);
		                direction = flag ? 'prev' : 'next';

		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var distinct = function (flag) {
		                flag = (undef(flag) ? true : !!flag);
		                unique = flag;
		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var modify = function(update) {
		                modifyObj = update;
		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var map = function (fn) {
		                if (isFunc(fn)) {
		                  mapper = fn;
		                }

		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };
		            var remove = function(flag) {
		                flag = (undef(flag) ? true: !!flag);
		                removeObj = flag;
		                return {
		                    execute: execute,
		                    count: count,
		                    keys: keys,
		                    filter: filter,
		                    asc: asc,
		                    desc: desc,
		                    distinct: distinct,
		                    modify: modify,
		                    limit: limit,
		                    map: map,
		                    remove: remove
		                };
		            };

		            return {
		                execute: execute,
		                count: count,
		                keys: keys,
		                filter: filter,
		                asc: asc,
		                desc: desc,
		                distinct: distinct,
		                modify: modify,
		                limit: limit,
		                map: map,
		                remove: remove
		            };
		        };

		        'only bound upperBound lowerBound'.split(' ').forEach(function (name) {
		            that[name] = function () {
		                return new Query( name , arguments );
		            };
		        });

		        this.filter = function () {
		            var query = new Query( null , null );
		            return query.filter.apply( query , arguments );
		        };

		        this.all = function () {
		            return this.filter();
		        };
		    };

		    var createSchema = function ( e , schema , db ) {
		        if ( typeof schema === 'function' ) {
		            schema = schema();
		        }

		        for ( var tableName in schema ) {
		            var table = schema[ tableName ];
		            var store;
		            if (!hasOwn.call(schema, tableName) || db.objectStoreNames.contains(tableName)) {
		                store = e.currentTarget.transaction.objectStore(tableName);
		            } else {
		                store = db.createObjectStore(tableName, table.key);
		            }

		            for ( var indexKey in table.indexes ) {
		                var index = table.indexes[ indexKey ];
		                try {
		                    store.index(indexKey)
		                } catch (e) {
		                    store.createIndex( indexKey , index.key || indexKey , Object.keys(index).length ? index : { unique: false } );
		                }
		            }
		        }
		    };

		    var open = function ( e , server , version , schema ) {
		        var db = e.target.result;
		        var s = new Server( db , server );
		        var upgrade;

		        dbCache[ server ] = db;

		        return Promise.resolve(s)
		    };

		    var dbCache = {};

		    var db = {
		        version: '0.10.2',
		        open: function ( options ) {
		            var request;

		            return new Promise(function(resolve, reject){
		              if ( dbCache[ options.server ] ) {
		                  open( {
		                      target: {
		                          result: dbCache[ options.server ]
		                      }
		                  } , options.server , options.version , options.schema )
		                  .then(resolve, reject)
		              } else {
		                  // in private mode of Firefox, open will throw error.
		                  try {
		                    request = getIndexedDB().open( options.server , options.version );
		                  } catch (e) {
		                    reject(e);
		                  }
		                  request.onsuccess = function ( e ) {
		                      open( e , options.server , options.version , options.schema )
		                          .then(resolve, reject)
		                  };
		                  request.onupgradeneeded = function ( e ) {
		                      createSchema( e , options.schema , e.target.result );
		                  };
		                  request.onerror = function ( e ) {
		                      reject( e );
		                  };
		              }
		            });
		        },

		        remove: function(server) {
		            return new Promise(function(resolve, reject) {
		              if (!server) {
		                return resolve();
		              }
		              if (typeof server === Server) {
		                server = server.name;
		              }

		              var db;
		              if (typeof server === 'string') {
		                db = dbCache[server];
		              }
		              if (db && typeof db.close === 'function') {
		                db.close();
		              }

		              var request;
		              try {
		                request = getIndexedDB().deleteDatabase(server);
		              } catch ( e ) {
		                reject( e );
		              }
		              request.onsuccess = function( e ) {
		                delete dbCache[server];
		                resolve( server );
		              };
		              request.onerror = function( e ) {
		                reject( e );
		              };
		              request.onblocked = function( e ) {
		                reject( e );
		              };
		            });
		        }
		    };

		    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		        module.exports = db;
		    } else if ( true ) {
		        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return db; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    } else {
		        window.db = db;
		    }
		})( window );


	/***/ },
	/* 78 */
	/***/ function(module, exports) {

		/**
		 * NIM support 工具对象, 通过 `NIM.support` 来获取此工具的引用
		 * 
		 * @namespace support
		 */
		var support = {};

		support.set = function(name, flag, obj) {
		    support[name] = flag;
		    obj.support = flag;
		};

		/**
		 * 是否支持数据库
		 * @memberOf support
		 * @name db
		 * @type {Boolean}
		 */

		module.exports = support;


	/***/ }
	/******/ ]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["NIM"] = factory();
		else
			root["NIM"] = factory();
	})(this, function() {
	return webpackJsonp_NIM_Web_SDK_v2_0_0_dev([1],[
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * NIM Web SDK
		 *
		 * db.js & es6-promise 13KB
		 * backo2 1KB
		 * es5-shim/es5-sham 19KB
		 * engine.io-client 37KB
		 * event-emitter
		 * platform 13KB
		 * socket.io-client 46KB
		 * xhr 3KB
		 * search require\('(?!\.) in the src folder to see which libs nim depends.
		 */

		// ployfill
		// require('/util/shim');
		__webpack_require__(1);
		__webpack_require__(2);
		// polyfill the global environment
		__webpack_require__(3).polyfill();

		var NIM = __webpack_require__(79);

		/**
		 * SDK 使用 {@link https://github.com/bestiejs/platform.js/|platform.js} 来检测浏览器平台, 通过 `NIM.platform` 来获取此库的引用
		 * @memberOf NIM
		 * @type {Object}
		 */
		NIM.platform = __webpack_require__(41);
		/**
		 * SDK 使用 {@link https://github.com/Raynos/xhr|xhr} 来发送 Ajax 请求, 通过 `NIM.xhr` 来获取此库的引用
		 * @memberOf NIM
		 * @type {Function}
		 */
		NIM.xhr = __webpack_require__(69);
		/**
		 * SDK 使用 {@link https://github.com/socketio/socket.io-client/tree/0.9|socket.io-client 0.9} 来建立 Socket 连接, 通过 `NIM.io` 或 `window.io` 来获取此库的引用
		 * @memberOf NIM
		 * @type {Object}
		 */
		NIM.io = __webpack_require__(44);
		/**
		 * SDK 使用 {@link https://github.com/Bill4Time/javascript-natural-sort|natural sort} 来对数组进行排序, 通过 `NIM.naturalSort` 来获取此库的引用
		 * @memberOf NIM
		 * @type {Function}
		 * @name naturalSort
		 */
		NIM.naturalSort = __webpack_require__(11);
		/**
		 * SDK 使用 {@link https://github.com/juliangruber/deep-access|deep access} 来获取对象的属性值, 通过 `NIM.deepAccess` 来获取此库的引用
		 * @type {Function}
		 */
		NIM.deepAccess = __webpack_require__(12);

		NIM.db = __webpack_require__(77);

		// 加密
		// NIM.AES = require("crypto-js/aes");

		NIM.util = __webpack_require__(10);
		NIM.support = __webpack_require__(78);
		NIM.blob = __webpack_require__(37);

		module.exports = NIM;


	/***/ },
	/* 1 */,
	/* 2 */,
	/* 3 */,
	/* 4 */,
	/* 5 */,
	/* 6 */,
	/* 7 */,
	/* 8 */,
	/* 9 */,
	/* 10 */,
	/* 11 */,
	/* 12 */,
	/* 13 */,
	/* 14 */,
	/* 15 */,
	/* 16 */,
	/* 17 */,
	/* 18 */,
	/* 19 */,
	/* 20 */,
	/* 21 */,
	/* 22 */,
	/* 23 */,
	/* 24 */,
	/* 25 */,
	/* 26 */,
	/* 27 */,
	/* 28 */,
	/* 29 */,
	/* 30 */,
	/* 31 */,
	/* 32 */,
	/* 33 */,
	/* 34 */,
	/* 35 */,
	/* 36 */,
	/* 37 */,
	/* 38 */,
	/* 39 */,
	/* 40 */,
	/* 41 */,
	/* 42 */,
	/* 43 */,
	/* 44 */,
	/* 45 */,
	/* 46 */,
	/* 47 */,
	/* 48 */,
	/* 49 */,
	/* 50 */,
	/* 51 */,
	/* 52 */,
	/* 53 */,
	/* 54 */,
	/* 55 */,
	/* 56 */,
	/* 57 */,
	/* 58 */,
	/* 59 */,
	/* 60 */,
	/* 61 */,
	/* 62 */,
	/* 63 */,
	/* 64 */,
	/* 65 */,
	/* 66 */,
	/* 67 */,
	/* 68 */,
	/* 69 */,
	/* 70 */,
	/* 71 */,
	/* 72 */,
	/* 73 */,
	/* 74 */,
	/* 75 */,
	/* 76 */,
	/* 77 */,
	/* 78 */,
	/* 79 */
	/***/ function(module, exports, __webpack_require__) {

		var ApiBase = __webpack_require__(9);
		var Protocol = __webpack_require__(80);
		var config = __webpack_require__(26);
		var logger = __webpack_require__(40);
		var IMMessage = __webpack_require__(115);

		/**
		 *
		 * NIM constructor.
		 * @constructor
		 * 
		 * @param {Object}              options                                 配置参数
		 * @param {Boolean|Object}      [options.debug=false]                   是否开启调试, 如果开启调试, 将会在控制台输出一些log。默认`false`不输出日志, 可以传`true`来开启日志或者传入对象来定制输出日志时使用的样式。
		 * @param {String}              [options.debug.style]                   输出日志时使用的样式, 只支持`chrom/firefox/safari`等高级浏览器, 默认样式为`'color:blue;'`。

		 * @param {String}              options.appKey                          在云信管理后台查看应用的 appKey
		 * @param {String}              options.account                         帐号, 应用内唯一
		 * @param {String}              options.token                           帐号的 token, 用于建立连接
		 * @param {Function}            [options.onconnect]                     连接建立后的回调, 会传入一个对象, 包含登录的信息, 有以下字段
		 * - `lastLoginDeviceId`: 上次登录的设备的设备号
		 * - `connectionId`: 本次登录的连接号
		 * - `ip`: 客户端IP
		 * - `port`: 客户端端口
		 * - `country`: 本次登录的国家
		 * @param {Function}            [options.onwillreconnect]                 即将重连的回调
		 * - 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
		 * - 此回调会收到一个对象, 包含额外的信息, 有以下字段
		 *     - `duration`: 距离下次重连的时间
		 *     - `retryCount`: 重连尝试的次数
		 * @param {Function}            [options.ondisconnect]                  断开连接后的回调
		 * - 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
		 * - 此回调会收到一个对象, 包含错误的信息, 有以下字段
		 *     - `code`: 出错时的错误码, 可能为空
		 *         - `302`: 账号或者密码错误
		 *         - `'kicked'`: 被踢
		 * - 当`code`为`'kicked'`的时候, 此对象会有以下字段
		 *     - `reason`: 被踢的原因
		 *         - `samePlatformKick`: 不允许同一个帐号在多个地方同时登录
		 *         - `serverKick`: 被服务器踢了
		 *         - `otherPlatformKick`: 被其它端踢了
		 *     - `message`: 文字描述的被踢的原因
		 * @param {Function}            [options.onerror]                       发生错误的回调, 会传入{@link NIMError|错误}对象

		 * @param {Function}            [options.onloginportschange]            多端登录状态变化的回调, 会收到{@link LoginPort|登录端}列表, 以下情况会收到此回调
		 * - 登录时其它端在线
		 * - 登录后其它端上线或者下线
		 * 
		 * @param {Boolean}             [options.syncRelations=true]            是否同步黑名单和静音列表, 默认`true`, 如果传`false`就收不到黑名单和静音列表, 即不会收到`onblacklist`回调和`onmutelist`回调, 开发者后续可以调用{@link NIM#getRelations|获取黑名单和静音列表}来获取黑名单和静音列表。
		 * @param {Function}            [options.onblacklist]                   同步黑名单的回调, 会传入黑名单列表`blacklist`
		 * - `blacklist`的属性`invalid`包含被删除的黑名单列表
		 * - 此回调是增量回调, 可以调用{@link NIM#mergeRelations|nim.mergeRelations}和{@link NIM#cutRelations|nim.cutRelations}来合并数据
		 * @param {Function}            [options.onsyncmarkinblacklist]         当前登录用户在其它端{@link NIM#markInBlacklist|加入黑名单/从黑名单移除}后的回调, 会传入一个参数, 包含两个字段
		 * - `account`: 要加入黑名单/从黑名单移除的账号
		 * - `isAdd`: `true`表示加入黑名单, `false`表示从黑名单移除
		 * @param {Function}            [options.onmutelist]                    同步静音列表的回调, 会传入静音列表`mutelist`
		 * - `mutelist`的属性`invalid`包含被删除的静音列表
		 * - 此回调是增量回调, 可以调用{@link NIM#mergeRelations|nim.mergeRelations}和{@link NIM#cutRelations|nim.cutRelations}来合并数据
		 * @param {Function}            [options.onsyncmarkinmutelist]          当前登录用户在其它端{@link NIM#markInMutelist|加入静音列表/从静音列表移除}后的回调, 会传入一个参数, 包含两个字段
		 * - `account`: 要加入黑名单/从黑名单移除的账号
		 * - `isAdd`: `true`表示加入静音列表, `false`表示从静音列表移除
		 * 
		 * @param {Boolean}             [options.syncFriends]                   是否同步好友列表, 默认`true`, 如果传`false`就收不到`onfriends`回调, 开发者后续可以调用{@link NIM#getFriends|获取好友列表}来获取好友列表。
		 * @param {Function}            [options.onfriends]                     同步好友列表的回调, 会传入好友列表
		 * @param {Function}            [options.onsyncfriendaction]           当前登录用户在其它端进行好友相关的操作后的回调
		 * - 操作包括
		 *     - {@link NIM#addFriend|直接加为好友}
		 *     - {@link NIM#applyFriend|申请加为好友}
		 *     - {@link NIM#passFriendApply|通过好友申请}
		 *     - {@link NIM#rejectFriendApply|拒绝好友申请}
		 *     - {@link NIM#deleteFriend|删除好友}
		 *     - {@link NIM#updateFriend|更新好友}
		 * - 此回调会收到一个参数`obj`, 它有一个字段`type`的值为操作的类型, 具体类型如下：
		 *     - `'addFriend'` (直接加为好友), 此时`obj`的字段如下: 
		 *         - `account`的值为被直接加为好友的账号
		 *         - `friend`为被直接加为好友的{@link Friend|好友对象}
		 *         - `ps`为附言
		 *     - `'applyFriend'` (申请加为好友), 此时`obj`的字段如下: 
		 *         - `account`的值为被申请加为好友的账号
		 *         - `ps`为附言
		 *     - `'passFriendApply'` (通过好友申请), 此时`obj`的字段如下: 
		 *         - `account`的值为被通过好友申请的账号
		 *         - `friend`为被通过好友申请的{@link Friend|好友对象}
		 *         - `ps`为附言
		 *     - `'rejectFriendApply'` (拒绝好友申请), 此时`obj`的字段如下: 
		 *         - `account`的值为被拒绝好友申请的账号
		 *         - `ps`为附言
		 *     - `'deleteFriend'` (删除好友), 此时`obj`的字段如下: 
		 *         - `account`的值为被删除好友的账号
		 *     - `'updateFriend'` (更新好友), 此时`obj`的字段如下: 
		 *         - `friend`的值为被更新的{@link Friend|好友对象}
		 * 
		 * @param {Function}            [options.onmyinfo]                      同步登录用户名片的回调, 会传入{@link User|用户名片}
		 * @param {Function}            [options.onupdatemyinfo]                当前登录用户在其它端修改自己的个人名片之后的回调, 会传入{@link User|用户名片}
		 * @param {Function}            [options.onusers]                       同步好友用户名片的回调, 会传入{@link User|用户名片}数组
		 * @param {Function}            [options.onupdateuser]                  用户名片更新后的回调, 会传入{@link User|用户名片}
		 * 
		 * @param {Boolean}             [options.syncTeams=true]                是否同步群列表, 默认      `true`, 如果传`false`就收不到群列表, 即不会收到`onteams`回调, 开发者后续可以调用{@link NIM#getTeams|获取群列表}来获取群列表
		 * @param {Function}            [options.onteams]                       同步群列表的回调, 会传入{@link Team|群}数组
		 * @param {Function}            [options.onsynccreateteam]              当前登录用户在其它端{@link NIM#createTeam|创建群}后的回调, 会传入{@link Team|群对象}
		 * @param {Boolean}             [options.syncTeamMembers=true]          是否同步群成员, 默认`true`, 只有在`syncTeams`=`true`的时候才起作用, 如果传`false`就不会同步群成员, 即不会收到`onteammembers`和`onsyncteammembersdone`回调, 开发者后续可以调用{@link NIM#getTeamMembers|获取群成员}来获取群成员
		 * @param {Function}            [options.onteammembers]                 同步群成员的回调, 一个群对应一个回调, 会传入{@link TeamMember|群成员}数组
		 * @param {Function}            [options.onsyncteammembersdone]         当`syncTeams`和`syncTeamMembers`同时为true时, 会同步所有群的群成员, 当所有群的群成员同步结束时, 会调用此回调
		 * @param {Function}            [options.onupdateteammember]            群成员信息更新后的回调, 会传入{@link TeamMember|群成员}对象, 不过此时的信息是不完整的, 只会包括被更新的字段。当前登录帐号在其它端修改自己在群里面的昵称时也会收到此回调。
		 * 
		 * @param {Function}            [options.onsessions]                    同步最近会话列表回调, 会传入{@link Session|会话}列表, 按时间正序排列, 即最近聊过天的放在列表的最后面。
		 * @param {Function}            [options.onupdatesession]               更新会话的回调, 会传入{@link Session|会话}, 以下情况会收到此回调
		 * - 收到消息
		 * - 发送消息
		 * - 设置当前回话
		 * - 重置会话未读数
		 * 
		 * @param {Boolean}             [options.syncRoamingMsgs=true]          是否同步漫游消息, 默认`true`。如果传`false`就收不到漫游消息, 即不会收到`onroamingmsgs`回调
		 * @param {Function}            [options.onroamingmsgs]                 同步漫游消息的回调, 每个会话对应一个回调, 会传入{@link IMMessage|消息}数组
		 * @param {Function}            [options.onofflinemsgs]                 同步离线消息的回调, 每个会话对应一个回调, 会传入{@link IMMessage|消息}数组
		 * @param {Function}            [options.onmsg]                         收到消息的回调, 会传入{@link IMMessage|消息}对象
		 * - 当前登录帐号在其它端发送消息之后也会收到此回调, 注意此时消息对象的`from`字段就是当前登录的帐号
		 * 
		 * @param {Function}            [options.onofflinesysmsgs]              同步离线系统通知的回调, 会传入{@link SystemMessage|系统通知}数组
		 * @param {Function}            [options.onsysmsg]                      收到系统通知的回调, 会传入{@link SystemMessage|系统通知}
		 * @param {Function}            [options.onupdatesysmsg]                更新系统通知后的回调, 会传入{@link SystemMessage|系统通知}
		 * - 以下情况会收到此回调
		 *     - {@link NIM#passFriendApply|通过好友申请}
		 *     - {@link NIM#rejectFriendApply|拒绝好友申请}
		 *     - {@link NIM#acceptTeamInvite|接受入群邀请}
		 *     - {@link NIM#rejectTeamInvite|拒绝入群邀请}
		 *     - {@link NIM#passTeamApply|通过入群申请}
		 *     - {@link NIM#rejectTeamApply|拒绝入群申请}
		 * - 这些操作的发起方会收到此回调, 接收被更新的系统通知, 根据操作的类型系统通知会被更新为下面两种状态
		 *     - `'passed'`: 已通过
		 *     - `'rejected'`: 已拒绝
		 * @param {Function}            [options.onsysmsgunread]                收到系统通知未读数的回调
		 * - SDK 会管理内建系统通知的未读数, 此回调接收的对象包括以下字段
		 *     - `total`: 总共的未读数
		 *     - `friend`: 所有跟好友相关的系统通知的未读数
		 *     - `addFriend`: 直接加为好友的未读数
		 *     - `applyFriend`: 申请加为好友的未读数
		 *     - `passFriendApply`: 通过好友申请的未读数
		 *     - `rejectFriendApply`: 拒绝好友申请的未读数
		 *     - `deleteFriend`: 删除好友的未读数
		 *     - `team`: 所有跟群相关的系统通知的未读数
		 *     - `teamInvite`: 入群邀请的未读数
		 *     - `rejectTeamInvite`: 接受入群邀请的未读数
		 *     - `applyTeam`: 入群申请的未读数
		 *     - `rejectTeamApply`: 拒绝入群申请的未读数
		 * @param {Function}            [options.onupdatesysmsgunread]          更新系统通知未读数的回调
		 * @param {Function}            [options.onofflinecustomsysmsgs]        同步离线自定义系统通知的回调, 会传入{@link SystemMessage|系统通知}数组
		 * @param {Function}            [options.oncustomsysmsg]                收到自定义系统通知的回调, 会传入{@link SystemMessage|系统通知}
		 * 
		 * @param {Function}            [options.onsyncdone]                    当上面各个同步（不包括下面的同步群成员）完成后, 会调用此回调；注意, SDK保证在`onsyncdone`调用的时候上面的同步肯定完成了, 但是不保证各个同步回调的顺序。
		 *
		 * @param {Object}              [options.dataSource]                    SDK 需要开发者提供数据来完成下面的工作
		 * - 检查用户名片是否更新
		 * - 会话相关的逻辑
		 * - 消息去重
		 * - 系统通知去重
		 * @param {Function} [options.dataSource.getUser] SDK 需要拿到名片才能判断用户名片是否被更新, 开发者可以调用{@link NIM#findUser|nim.findUser}来完成此工作
		 * @param {Function} [options.dataSource.getSession] SDK 需要会话来处理会话相关的逻辑, 开发者可以调用{@link NIM#findUser|nim.findSession}来完成此工作
		 * @param {Function} [options.dataSource.getMsg] SDK 需要查询消息来去重消息, 开发者可以调用{@link NIM#findUser|nim.findMsg}来完成此工作
		 * @param {Function} [options.dataSource.getSysMsg] SDK 需要查询系统通知来去重系统通知, 开发者可以调用{@link NIM#findUser|nim.findSysMsg}来完成此工作
		 * 
		 * @param {Boolean} [options.autoMarkRead=true] 是否自动标记消息为已收到
		 * - 默认情况下SDK在收到服务器推送过来的消息后, 会在将消息推给开发者时将消息标记为已读状态, 下次登录后就不会收到标记为已读的消息。
		 *     - SDK通过`onofflinemsgs`、`onofflinesysmsgs`、`onofflinecustomsysmsgs`等回调将离线消息推送给开发者
		 *     - SDK通过`onmsg`、`onsysmsg`、`oncustomsysmsg`等回调将在线消息推送给开发者
		 * - 如果开发者想控制标记消息为已收到的时机, 那么可以传`false`, 这样SDK就不会自动标记消息已读, 此时需要开发者在适当的时机调用相关的方法来标记消息为已读, 否则下次登录后还会收到未标记为已读的消息。
		 *     - 调用{@link NIM#markSysMsgRead|标记系统通知已读}来标记{@link SystemMessage|系统通知}和{@link SystemMessage.type|自定义系统通知}为已读状态
		 *
		 * @param {Boolean} [options.db=true] 是否使用数据库
		 * - 在支持数据库的浏览器上 SDK 会将数据缓存到数据库中, 后续同步都是增量更新, 加快初始化速度
		 * - 如果开发者不想使用数据库, 那么可以设置`db`为`false`来禁用数据库
		 * 
		 * @example
		 * var data = {};
		 * var nim = new NIM({
		 *     // 初始化SDK
		 *     // debug: true
		 *     appKey: 'appKey',
		 *     account: 'account',
		 *     token: 'token',
		 *     onconnect: onConnect,
		 *     onerror: onError,
		 *     onwillreconnect: onWillReconnect,
		 *     ondisconnect: onDisconnect,
		 *     // 多端
		 *     onloginportschange: onLoginPortsChange,
		 *     // 用户关系
		 *     onblacklist: onBlacklist,
		 *     onsyncmarkinblacklist: onMarkInBlacklist,
		 *     onmutelist: onMutelist,
		 *     onsyncmarkinmutelist: onMarkInMutelist,
		 *     // 好友关系
		 *     onfriends: onFriends,
		 *     onsyncfriendaction: onSyncFriendAction,
		 *     // 用户名片
		 *     onmyinfo: onMyInfo,
		 *     onupdatemyinfo: onUpdateMyInfo,
		 *     onusers: onUsers,
		 *     onupdateuser: onUpdateUser,
		 *     // 群组
		 *     onteams: onTeams,
		 *     onsynccreateteam: onCreateTeam,
		 *     onteammembers: onTeamMembers,
		 *     onsyncteammembersdone: onSyncTeamMembersDone,
		 *     onupdateteammember: onUpdateTeamMember,
		 *     // 会话
		 *     onsessions: onSessions,
		 *     onupdatesession: onUpdateSession,
		 *     // 消息
		 *     onroamingmsgs: onRoamingMsgs,
		 *     onofflinemsgs: onOfflineMsgs,
		 *     onmsg: onMsg,
		 *     // 系统通知
		 *     onofflinesysmsgs: onOfflineSysMsgs,
		 *     onsysmsg: onSysMsg,
		 *     onupdatesysmsg: onUpdateSysMsg,
		 *     onsysmsgunread: onSysMsgUnread,
		 *     onupdatesysmsgunread: onUpdateSysMsgUnread,
		 *     onofflinecustomsysmsgs: onOfflineCustomSysMsgs,
		 *     oncustomsysmsg: onCustomSysMsg,
		 *     // 同步完成
		 *     onsyncdone: onSyncDone,
		 *     // 数据源
		 *     dataSource: {
		 *         getUser: function(account) {
		 *             return nim.findUser(data.users, account);
		 *         },
		 *         getSession: function(sessionId) {
		 *             return nim.findSession(data.sessions, sessionId);
		 *         },
		 *         getMsg: function(msg) {
		 *             return nim.findMsg(data.msgs && data.msgs[msg.sessionId], msg.idClient);
		 *         },
		 *         getSysMsg: function(sysMsg) {
		 *             return nim.findSysMsg(data.sysMsgs, sysMsg.idServer);
		 *         }
		 *     }
		 * });
		 * 
		 * function onConnect() {
		 *     console.log('连接成功');
		 * }
		 * function onWillReconnect(obj) {
		 *     // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
		 *     console.log('即将重连', obj);
		 * }
		 * function onDisconnect(error) {
		 *     // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
		 *     console.log('连接断开', error);
		 *     if (error) {
		 *         switch (error.code) {
		 *         // 账号或者密码错误, 请跳转到登录页面并提示错误
		 *         case 302:
		 *             break;
		 *         // 被踢, 请提示错误后跳转到登录页面
		 *         case 'kicked':
		 *             break;
		 *         default:
		 *             break;
		 *         }
		 *     }
		 * }
		 * function onError(error, obj) {
		 *     console.log('发生错误', error, obj);
		 * }
		 * 
		 * function onLoginPortsChange(loginPorts) {
		 *     console.log('当前登录帐号在其它端的状态发生改变了', loginPorts);
		 * }
		 * 
		 * function onBlacklist(blacklist) {
		 *     console.log('收到黑名单', blacklist);
		 *     data.blacklist = nim.mergeRelations(data.blacklist, blacklist);
		 *     data.blacklist = nim.cutRelations(data.blacklist, blacklist.invalid);
		 *     refreshBlacklistUI();
		 * }
		 * function onMarkInBlacklist(obj) {
		 *     console.log(obj.account + '被你' + (obj.isAdd ? '加入' : '移除') + '黑名单', obj);
		 *     if (obj.isAdd) {
		 *         addToBlacklist(obj);
		 *     } else {
		 *         removeFromBlacklist(obj);
		 *     }
		 * }
		 * function addToBlacklist(obj) {
		 *     data.blacklist = nim.mergeRelations(data.blacklist, obj.record);
		 *     refreshBlacklistUI();
		 * }
		 * function removeFromBlacklist(obj) {
		 *     data.blacklist = nim.cutRelations(data.blacklist, obj.record);
		 *     refreshBlacklistUI();
		 * }
		 * function refreshBlacklistUI() {
		 *     // 刷新界面
		 * }
		 * function onMutelist(mutelist) {
		 *     console.log('收到静音列表', mutelist);
		 *     data.mutelist = nim.mergeRelations(data.mutelist, mutelist);
		 *     data.mutelist = nim.cutRelations(data.mutelist, mutelist.invalid);
		 *     refreshMutelistUI();
		 * }
		 * function onMarkInMutelist(obj) {
		 *     console.log(obj.account + '被你' + (obj.isAdd ? '加入' : '移除') + '静音列表', obj);
		 *     if (obj.isAdd) {
		 *         addToMutelist(obj);
		 *     } else {
		 *         removeFromMutelist(obj);
		 *     }
		 * }
		 * function addToMutelist(obj) {
		 *     data.mutelist = nim.mergeRelations(data.mutelist, obj.record);
		 *     refreshMutelistUI();
		 * }
		 * function removeFromMutelist(obj) {
		 *     data.mutelist = nim.cutRelations(data.mutelist, obj.record);
		 *     refreshMutelistUI();
		 * }
		 * function refreshMutelistUI() {
		 *     // 刷新界面
		 * }
		 * 
		 * function onFriends(friends) {
		 *     console.log('收到好友列表', friends);
		 *     data.friends = nim.mergeFriends(data.friends, friends);
		 *     data.friends = nim.cutFriends(data.friends, friends.invalid);
		 *     refreshFriendsUI();
		 * }
		 * function onSyncFriendAction(obj) {
		 *     console.log('收到好友操作', obj);
		 *     switch (obj.type) {
		 *     case 'addFriend':
		 *         console.log('你在其它端直接加了一个好友' + obj);
		 *         onAddFriend(obj.friend);
		 *         break;
		 *     case 'applyFriend':
		 *         console.log('你在其它端申请加了一个好友' + obj);
		 *         break;
		 *     case 'passFriendApply':
		 *         console.log('你在其它端通过了一个好友申请' + obj);
		 *         onAddFriend(obj.friend);
		 *         break;
		 *     case 'rejectFriendApply':
		 *         console.log('你在其它端拒绝了一个好友申请' + obj);
		 *         break;
		 *     case 'deleteFriend':
		 *         console.log('你在其它端删了一个好友' + obj);
		 *         onDeleteFriend(obj.account);
		 *         break;
		 *     case 'updateFriend':
		 *         console.log('你在其它端更新了一个好友', obj);
		 *         onUpdateFriend(obj.friend);
		 *         break;
		 *     }
		 * }
		 * function onAddFriend(friend) {
		 *     data.friends = nim.mergeFriends(data.friends, friend);
		 *     refreshFriendsUI();
		 * }
		 * function onDeleteFriend(account) {
		 *     data.friends = nim.cutFriendsByAccounts(data.friends, account);
		 *     refreshFriendsUI();
		 * }
		 * function onUpdateFriend(friend) {
		 *     data.friends = nim.mergeFriends(data.friends, friend);
		 *     refreshFriendsUI();
		 * }
		 * function refreshFriendsUI() {
		 *     // 刷新界面
		 * }
		 * 
		 * function onMyInfo(user) {
		 *     console.log('收到我的名片', user);
		 *     data.myInfo = user;
		 *     updateMyInfoUI();
		 * }
		 * function onUpdateMyInfo(user) {
		 *     console.log('我的名片更新了', user);
		 *     data.myInfo = NIM.util.merge(data.myInfo, user);
		 *     updateMyInfoUI();
		 * }
		 * function updateMyInfoUI() {
		 *     // 刷新界面
		 * }
		 * function onUsers(users) {
		 *     console.log('收到用户名片列表', users);
		 *     data.users = nim.mergeUsers(data.users, users);
		 * }
		 * function onUpdateUser(user) {
		 *     console.log('用户名片更新了', user);
		 *     data.users = nim.mergeUsers(data.users, user);
		 * }
		 * 
		 * function onTeams(teams) {
		 *     console.log('群列表', teams);
		 *     data.teams = nim.mergeTeams(data.teams, teams);
		 *     onInvalidTeams(teams.invalid);
		 * }
		 * function onInvalidTeams(teams) {
		 *     data.teams = nim.cutTeams(data.teams, teams);
		 *     data.invalidTeams = nim.mergeTeams(data.invalidTeams, teams);
		 *     refreshTeamsUI();
		 * }
		 * function onCreateTeam(team) {
		 *     console.log('你创建了一个群', team);
		 *     data.teams = nim.mergeTeams(data.teams, team);
		 *     refreshTeamsUI();
		 *     onTeamMembers({
		 *         teamId: team.teamId,
		 *         members: owner
		 *     });
		 * }
		 * function refreshTeamsUI() {
		 *     // 刷新界面
		 * }
		 * function onTeamMembers(obj) {
		 *     console.log('收到群成员', obj);
		 *     var teamId = obj.teamId;
		 *     var members = obj.members;
		 *     data.teamMembers = data.teamMembers || {};
		 *     data.teamMembers[teamId] = nim.mergeTeamMembers(data.teamMembers[teamId], members);
		 *     data.teamMembers[teamId] = nim.cutTeamMembers(data.teamMembers[teamId], members.invalid);
		 *     refreshTeamMembersUI();
		 * }
		 * function onSyncTeamMembersDone() {
		 *     console.log('同步群列表完成');
		 * }
		 * function onUpdateTeamMember(teamMember) {
		 *     console.log('群成员信息更新了', teamMember);
		 *     onTeamMembers({
		 *         teamId: teamMember.teamId,
		 *         members: teamMember
		 *     });
		 * }
		 * function refreshTeamMembersUI() {
		 *     // 刷新界面
		 * }
		 * 
		 * function onSessions(sessions) {
		 *     console.log('收到会话列表', sessions);
		 *     data.sessions = nim.mergeSessions(data.sessions, sessions);
		 *     updateSessionsUI();
		 * }
		 * function onUpdateSession(session) {
		 *     console.log('会话更新了', session);
		 *     data.sessions = nim.mergeSessions(data.sessions, session);
		 *     updateSessionsUI();
		 * }
		 * function updateSessionsUI() {
		 *     // 刷新界面
		 * }
		 * 
		 * function onRoamingMsgs(obj) {
		 *     console.log('漫游消息', obj);
		 *     pushMsg(obj.msgs);
		 * }
		 * function onOfflineMsgs(obj) {
		 *     console.log('离线消息', obj);
		 *     pushMsg(obj.msgs);
		 * }
		 * function onMsg(msg) {
		 *     console.log('收到消息', msg.scene, msg.type, msg);
		 *     pushMsg(msg);
		 * }
		 * function pushMsg(msgs) {
		 *     if (!Array.isArray(msgs)) { msgs = [msgs]; }
		 *     var sessionId = msgs[0].sessionId;
		 *     data.msgs = data.msgs || {};
		 *     data.msgs[sessionId] = nim.mergeMsgs(data.msgs[sessionId], msgs);
		 * }
		 * 
		 * function onOfflineSysMsgs(sysMsgs) {
		 *     console.log('收到离线系统通知', sysMsgs);
		 *     pushSysMsgs(sysMsgs);
		 * }
		 * function onSysMsg(sysMsg) {
		 *     console.log('收到系统通知', sysMsg)
		 *     pushSysMsgs(sysMsg);
		 * }
		 * function onUpdateSysMsg(sysMsg) {
		 *     pushSysMsgs(sysMsg);
		 * }
		 * function pushSysMsgs(sysMsgs) {
		 *     data.sysMsgs = nim.mergeSysMsgs(data.sysMsgs, sysMsgs);
		 *     refreshSysMsgsUI();
		 * }
		 * function onSysMsgUnread(obj) {
		 *     console.log('收到系统通知未读数', obj);
		 *     data.sysMsgUnread = obj;
		 *     refreshSysMsgsUI();
		 * }
		 * function onUpdateSysMsgUnread(obj) {
		 *     console.log('系统通知未读数更新了', obj);
		 *     data.sysMsgUnread = obj;
		 *     refreshSysMsgsUI();
		 * }
		 * function refreshSysMsgsUI() {
		 *     // 刷新界面
		 * }
		 * function onOfflineCustomSysMsgs(sysMsgs) {
		 *     console.log('收到离线自定义系统通知', sysMsgs);
		 * }
		 * function onCustomSysMsg(sysMsg) {
		 *     console.log('收到自定义系统通知', sysMsg);
		 * }
		 * 
		 * function onSyncDone() {
		 *     console.log('同步完成');
		 * }
		 */
		function NIM(options) {
		    var self = this;
		    logger.setDebug(options.debug);
		    self.account = options.account;
		    self.message = new IMMessage({
		        account: self.account
		    });
		    self.protocol = new Protocol(options);
		    self.protocol.nim = self;
		    self.protocol.message = self.message;
		    self.db = self.protocol.db;
		}

		var NIMFn = NIM.fn = NIM.prototype = Object.create(ApiBase.prototype);

		NIM.info = NIMFn.info = config.info;

		module.exports = NIM;

		__webpack_require__(126);
		__webpack_require__(127);
		__webpack_require__(128);
		__webpack_require__(129);
		__webpack_require__(130);
		__webpack_require__(131);
		__webpack_require__(132);
		__webpack_require__(133);
		__webpack_require__(134);
		__webpack_require__(135);
		__webpack_require__(136);
		__webpack_require__(137);
		__webpack_require__(138);


	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {

		var DB = __webpack_require__(81);
		var Protocol = __webpack_require__(39);
		var NIMError = __webpack_require__(14);
		var config = __webpack_require__(26);
		var util = __webpack_require__(10);
		var notundef = util.notundef;
		// parser
		var Parser = __webpack_require__(49);
		var configMap = __webpack_require__(92);
		var serializeMap = __webpack_require__(93);
		var unserializeMap = __webpack_require__(94);
		var parser = Parser.getInstance({
		    type: 'IM',
		    configMap: configMap,
		    serializeMap: serializeMap,
		    unserializeMap: unserializeMap
		});

		function IMProtocol(options) {
		    var self = this;
		    util.verifyOptions(options, 'appKey account token');
		    // 所有通知回调在用 Promise 的地方使用 setTimeout 来模拟异步线程, 否则, 如果抛出错误会被 Promise catch 到, 控制台就不会报错
		    util.verifyCallback(options, 'onconnect onerror onwillreconnect ondisconnect onloginportschange onmyinfo onblacklist onmutelist onfriends onusers onteams onsessions onroamingmsgs onofflinemsgs onofflinefiltermsgs onofflinesysmsgs onsysmsgunread onofflinecustomsysmsgs onsyncdone onteammembers onsyncteammembersdone onmsg onsysmsg oncustomsysmsg onupdatemyinfo onupdateuser onupdateteammember onupdatesession onupdatesysmsgunread onupdatesysmsg onsynccreateteam onsyncmarkinblacklist onsyncmarkinmutelist  onsyncfriendaction');
		    util.merge(self, util.filterObj(options, 'appKey account token'));
		    // 重置数据库
		    self.db = new DB();
		    self.db.reset(options.db);
		    // lbsUrl
		    if (notundef(options.lbsUrl)) {
		        config.lbsUrl = options.lbsUrl;
		    }
		    // 调用父类初始化
		    Protocol.call(self, options);
		    self.name = 'IM';
		}

		var IMProtocolFn = IMProtocol.fn = IMProtocol.prototype = Object.create(Protocol.prototype);

		IMProtocolFn.init = function() {
		    var self = this;

		    // socket 地址
		    self.socketUrls = [];

		    // 协议解释器
		    self.parser = parser;
		    
		    // 是否已经进行过同步, 如果已经进行过, 那么后续的同步均为增量同步
		    self.hasSynced = false;
		    // 是否已经进行过同步群成员, 如果已经进行过, 那么后续的同步均为增量同步
		    self.hasSyncedTeamMembers = false;
		    // 存储同步 Promise 数组, 监视什么时候完成同步
		    self.syncPromiseArray = [];
		    // 在同步过程中, 会存入同步到的数据
		    self.syncResult = {};
		    // 存储同步群成员 Promise 数组, 监视什么时候完成同步群成员
		    self.syncTeamMembersPromiseArray = [];
		    // 在同步群成员过程中, 会存入同步到的数据
		    self.syncTeamMembersResult = {};
		    // 同步时间戳, 当没有数据库时从此对象读取同步时间戳, 从而进行增量同步
		    self.timetags = {};
		    // 会话集合
		    self.sessionsSet = {};

		    self.initAutoMarkRead();
		};

		IMProtocolFn.initAutoMarkRead = function() {
		    var options = this.options;
		    util.verifyBooleanWithDefault(options, 'autoMarkRead', true);
		    // 目前使用一个通用的开关, 下面的代码是各个子开关, 先注释掉
		    // 将options.autoMarkRead处理成false或者{}
		    // if (util.notundef(options.autoMarkRead)) {
		    //     if (!util.isObject(options.autoMarkRead)) {
		    //         // 如果该不是一个对象, 那么它必须是Boolean
		    //         util.verifyParamType('autoMarkRead', options.autoMarkRead, 'boolean');
		    //         // 如果是true, 那么变为{}
		    //         if (options.autoMarkRead === true) {
		    //             options.autoMarkRead = {};
		    //         }
		    //     }
		    // } else {
		    //     options.autoMarkRead = {};
		    // }
		    // var auto = true;
		    // if (options.autoMarkRead === false) {
		    //     options.autoMarkRead = {};
		    //     auto = false;
		    // }
		    // // filter开头的开关用于控制云商服专用消息的标记已读
		    // util.verifyBooleanWithDefault(options.autoMarkRead, 'p2p team sys customSys filterP2p filterTeam filterSys filterCustomSys', auto, 'autoMarkRead.');
		};

		IMProtocolFn.processResponse = function(packet) {
		    var self = this;
		    // 按照协议类型进行处理
		    switch (packet.service){
		    case 'link':
		        self.processLink(packet);
		        break;
		    case 'auth':
		        self.processAuth(packet);
		        break;
		    case 'user':
		        self.processUser(packet);
		        break;
		    case 'notify':
		        self.processNotify(packet);
		        break;
		    case 'sync':
		        self.processSync(packet);
		        break;
		    case 'misc':
		        self.processMisc(packet);
		        break;
		    case 'talk':
		        self.processMessage(packet);
		        break;
		    case 'team':
		        self.processTeam(packet);
		        break;
		    case 'friend':
		        self.processFriend(packet);
		        break;
		    case 'chatroom':
		        self.processChatroom(packet);
		        break;
		    case 'filter':
		        self.processFilter(packet);
		        break;
		    default:
		        // 如果没有找到对应的服务, 那么不作处理直接返回
		        return;
		    }
		};

		/**
		 * 判断packet是否是同步的回包
		 * 因为同步可能有多个回包, 所以第一个回包会获取到packet.obj.sync, 后面的回包都获取不到packet.obj
		 * @private
		 */
		IMProtocolFn.packetFromSync = function(packet) {
		    return !packet.obj || !!packet.obj.sync;
		};

		// 数据库错误
		IMProtocolFn.onDBError = function(event) {
		    var error = NIMError.newDBError();
		    error.event = event;
		    this.notifyError(error);
		};

		module.exports = IMProtocol;

		__webpack_require__(95);
		__webpack_require__(96);
		__webpack_require__(97);
		__webpack_require__(98);
		__webpack_require__(101);
		__webpack_require__(103);
		__webpack_require__(105);
		__webpack_require__(106);
		__webpack_require__(108);
		__webpack_require__(110);
		__webpack_require__(112);
		__webpack_require__(113);
		__webpack_require__(114);


	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		 * Partial support in Safari and iOS 8/9.
		 * - When start a transaction on more than one object stores, Safari throw an error:
		 *     - NotFoundError: DOM IDBDatabase Exception 8: An operation failed because the requested database object could not be found.
		 * - If two objects has same key, when put them into two different object stores, the first one will disappear. (iOS8, not iOS9)
		 * - IndexedDB is not available in iOS 8/9 “UIWebView” (not Safari) or Home screen apps (is standalone)
		 */

		var platform = __webpack_require__(41);
		var deep = __webpack_require__(12);
		var lib = __webpack_require__(77);
		var util = __webpack_require__(10);
		var logger = __webpack_require__(40);
		var support = __webpack_require__(78);
		var NIMError = __webpack_require__(14);
		var newSupportDBError = NIMError.newSupportDBError;
		var noDBError = NIMError.noDBError;
		var config = __webpack_require__(82);

		var DBPrefix = 'nim-';
		var _support = false;

		function setSupport(flag) {
		    _support = flag;
		    support.set('db', flag, lib);
		}
		setSupport(!!window.indexedDB);
		if (platform.name === 'Safari') {
		    var version = parseInt(platform.version.split('.')[0], 10);
		    // 如果是 iOS8 及以下, 那么不支持数据库, 因为不同的 ObjectStore 使用同一个 key 的话, 后面的记录会覆盖前面的记录
		    if (version < 9) {
		        setSupport(false);
		    }
		}

		function DB() {

		}

		var pro = DB.fn = DB.prototype;

		pro.reset = util.emptyFunc;
		if (_support) {
		    pro.reset = function(o) {
		        // 只有当 o === false 才禁用 db
		        this.enable = o !== false;
		    };
		}

		pro.init = function(account) {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    // 如果已经初始化过了, 那么直接返回
		    if (self.server) { return Promise.resolve(); }
		    self.name = DBPrefix + account;
		    return lib.open({
		        server: self.name,
		        version: config.version,
		        schema: config.schema
		    }).then(function(s) {
		        logger.warn('init db', self.name);
		        self.server = s;
		    }, function(event) {
		        setSupport(false);
		        self.server = null;
		        self.name = null;
		        throw event;
		    });
		};

		pro.destroy = function() {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    // 如果已经销毁了, 那么直接返回
		    if (!self.server) { return Promise.resolve(); }
		    return lib.remove(self.name).then(function() {
		        logger.warn('delete db', self.name);
		        self.server = null;
		        self.name = null;
		    });
		};

		pro.clear = function() {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    // 如果已经销毁了, 那么直接返回
		    if (!self.server) { return Promise.resolve(); }
		    // 先清空 timetag, 然后再清空其它所有数据, 这样就算 timetag 清空失败也是没问题的
		    // 否则的话, 如果 timetag 没被清空, 其它数据被清空了, 同步就会有问题
		    return self.server.clear('timetag').then(function() {
		        var tables = [].slice.call(self.server.getIndexedDB().objectStoreNames);
		        var promiseArray = [];
		        tables.forEach(function(table) {
		            promiseArray.push(self.server.clear(table));
		        });
		        if (promiseArray.length) {
		            return Promise.all(promiseArray).then(function() {
		                logger.warn('clear db', self.name);
		            });
		        }
		    });
		};

		pro.close = function() {
		    var self = this;
		    if (self.server) {
		        self.server.close();
		        self.server = null;
		        self.name = null;
		    }
		};

		pro.remove = function(name, keys) {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    if (!self.server) { return Promise.reject(noDBError()); }
		    if (!util.isArray(keys)) {
		        keys = [keys];
		    }
		    // keys = keys.map(function(key) {
		    //     return db.prefixKey(name, key);
		    // });
		    return self.server.remove(name, keys).then(function() {
		        logger.warn('delete', name, keys.length===1 ? keys[0]:keys);
		    });
		};

		pro.put = function(name, records) {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    if (!self.server) { return Promise.reject(noDBError()); }
		    if (!util.isArray(records)) {
		        records = [records];
		    }
		    // records = db.prefixRecords(name, records);
		    return self.server.update(name, records).then(function(records) {
		        var args = ['put', name];
		        var keyPath = config.schema[name].key.keyPath;
		        var keys = [];
		        if (keyPath) {
		            records.forEach(function(record) {
		                keys.push(deep(record, keyPath));
		            });
		            args.push(keys.length===1 ? keys[0]:keys);
		        }
		        args.push(records.length===1 ? records[0]:records);
		        logger.warn.apply(logger.warn, args);
		        return records;
		    });
		};

		pro.updateAndDelete = function(name, updates, deletes) {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    if (!self.server) { return Promise.reject(noDBError()); }
		    // updates = db.prefixRecords(name, updates);
		    // deletes = db.prefixRecords(name, deletes);
		    return self.server.updateAndDelete(name, updates, deletes);
		};

		pro.get = function(name, key) {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    if (!self.server) { return Promise.reject(noDBError()); }
		    return self.server.get(name, key);
		};

		// TODO count
		pro.getAll = function(name, options) {
		    var self = this;
		    if (!self.enable) { return Promise.reject(newSupportDBError()); }
		    if (!self.server) { return Promise.reject(noDBError()); }
		    options = options || {};
		    // 只有明确要 keys desc distinct, 才传 true
		    options.keys = options.keys === true;
		    options.desc = options.desc === true;
		    options.distinct = options.distinct === true;
		    return self.server.query(name, options.index)
		                    .filter(options.filter)
		                    .keys(options.keys)
		                    .desc(options.desc)
		                    .limit(options.limit)
		                    .distinct(options.distinct)
		                    .map(options.mapper)
		                    .modify(options.modifyObj)
		                    .execute();
		    // .then(function(records) {
		    //     records = db.unprefixRecords(name, options.keyIsNumber, records);
		    //     return records;
		    // });
		};

		pro.getOnly = function(name, index, matchValue, options) {
		    var self = this;
		    if (!self.enable) { throw newSupportDBError(); }
		    if (!self.server) { throw noDBError(); }
		    options = options || {};
		    // 只有明确要 keys desc distinct remove, 才传 true
		    options.keys = options.keys === true;
		    options.desc = options.desc === true;
		    options.distinct = options.distinct === true;
		    options.remove = options.remove === true;
		    return self.server.query(name, index)
		                    .only(matchValue)
		                    .filter(options.filter)
		                    .keys(options.keys)
		                    .desc(options.desc)
		                    .limit(options.limit)
		                    .distinct(options.distinct)
		                    .map(options.mapper)
		                    .modify(options.modifyObj)
		                    .remove(options.remove)
		                    .execute();
		};

		pro.getOne = function() {
		    var self = this;
		    return self.getOnly.apply(self, arguments).then(function(records) {
		        return records[0];
		    });
		};

		pro.clearTable = function(name) {
		    var self = this;
		    if (!self.enable) { throw newSupportDBError(); }
		    if (!self.server) { throw noDBError(); }
		    return self.server.clear(name);
		};

		// TODO openRequest.onblocked, which is triggered when the `onupgradeneeded` event should be triggered but the database is still in use somewhere else.
		// TODO db.onversionchange, which is triggered when the database structure changes in somewhere else.

		module.exports = DB;

		// require('./record');
		__webpack_require__(83);
		__webpack_require__(84);
		__webpack_require__(85);
		__webpack_require__(86);
		__webpack_require__(88);
		__webpack_require__(89);
		__webpack_require__(90);
		__webpack_require__(91);


	/***/ },
	/* 82 */
	/***/ function(module, exports) {

		var config = {
		    version: 1
		};

		var schema = {
		    timetag: {
		        key: {
		            keyPath: 'name'
		        }
		    },
		    blacklist: {
		        key: {
		            keyPath: 'account'
		        }
		    },
		    mutelist: {
		        key: {
		            keyPath: 'account'
		        }
		    },
		    friend: {
		        key: {
		            keyPath: 'account'
		        }
		    },
		    user: {
		        key: {
		            keyPath: 'account'
		        }
		    },
		    team: {
		        key: {
		            keyPath: 'teamId'
		        }
		    },
		    teamMember: {
		        key: {
		            keyPath: 'id'
		        },
		        indexes: {
		            teamId: { unique: false }
		        }
		    },
		    msg: {
		        key: {
		            // 用自增的 key, 这样存储顺序就是聊天的顺序
		            // 不指定 keyPath 这样取出来的数据不带 id 字段
		            // keyPath: 'id',
		            autoIncrement: true
		        },
		        indexes: {
		            idClient: { unique: true },
		            sessionId: { unique: false },
		            // sessionTime: { unique: false },
		            sessionType: { unique: false }
		        }
		    },
		    sysMsg: {
		        key: {
		            // 用自增的 key, 这样存储顺序就是聊天的顺序
		            // 不指定 keyPath 这样取出来的数据不带 id 字段
		            // keyPath: 'id',
		            autoIncrement: true
		        },
		        indexes: {
		            idServer: { unique: true },
		            category: { unique: false },
		            type: { unique: false }
		        }
		    },
		    sysMsgUnread: {
		        key: {
		            keyPath: 'type'
		        }
		    },
		    session: {
		        key: {
		            keyPath: 'id'
		        },
		        indexes: {
		            updateTime: { unique: false }
		        }
		    }
		};

		config.schema = schema;

		config.keyPath = function(objectStore) {
		    return config.schema[objectStore].key.keyPath;
		};

		module.exports = config;


	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;

		DBFn.getTimetags = function(filter) {
		    var timetags = {};
		    var mapper = function(record) {
		        timetags[record.name] = record.value;
		        return record;
		    };
		    return this.getAll('timetag', {
		        filter: filter,
		        mapper: mapper
		    }).then(function() {
		        return timetags;
		    });
		};

		DBFn.getTeamMemberTimetags = function() {
		    return this.getTimetags(function(record) {
		        return record.name.indexOf('team-') !== -1;
		    });
		};

		DBFn.getTimetag = function(name) {
		    return this.getOne('timetag', null, name).then(function(obj) {
		        obj = obj || {value:0};
		        return obj.value;
		    });
		};

		DBFn.getTeamMemberTimetag = function(teamId) {
		    return this.getTimetag('team-' + teamId);
		};

		DBFn.updateTimetag = function(name, timetag) {
		    var record = { name: name, value: timetag };
		    return this.put('timetag', record);
		};

		DBFn.updateMyInfoTimetag = function(timetag) {
		    return this.updateTimetag('myInfo', timetag);
		};

		DBFn.updateRelationTimetag = function(timetag) {
		    return this.updateTimetag('relations', timetag);
		};

		DBFn.getRelationsTimetag = function() {
		    return this.getTimetag('relations');
		};

		DBFn.updateFriendTimetag = function(timetag) {
		    return this.updateTimetag('friends', timetag);
		};

		DBFn.getFriendsTimetag = function() {
		    return this.getTimetag('friends');
		};

		DBFn.updateFriendUserTimetag = function(timetag) {
		    return this.updateTimetag('friendUsers', timetag);
		};

		DBFn.updateTeamTimetag = function(timetag) {
		    return this.updateTimetag('teams', timetag);
		};

		DBFn.getTeamsTimetag = function() {
		    return this.getTimetag('teams');
		};

		DBFn.updateTeamMemberTimetag = function(teamId, timetag) {
		    return this.updateTimetag('team-' + teamId, timetag);
		};

		DBFn.getTeamMembersTimetag = function(teamId) {
		    return this.getTimetag('team-' + teamId);
		};

		/*
		 * 什么时候更新漫游消息时间戳
		 * - 收到漫游消息和离线消息后, 拿到最后一条消息的时间戳, 再更新漫游消息时间戳
		 * - 发消息成功后更新漫游消息时间戳
		 * - 收到消息后更新漫游消息时间戳
		 */
		DBFn.updateRoamingMsgTimetag = function(timetag) {
		    return this.updateTimetag('roamingMsgs', timetag);
		};

		DBFn.deleteTimetag = function(name) {
		    return this.remove('timetag', name);
		};

		DBFn.deleteTeamMemberTimetag = function(teamId) {
		    return this.deleteTimetag('team-' + teamId);
		};


	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;
		var util = __webpack_require__(10);
		var logger = __webpack_require__(40);
		var TableBlacklist = 'blacklist';
		var TableMutelist = 'mutelist';

		/*
		 * 更新、删除
		 * - 成功后更新时间戳
		 */
		DBFn.mergeRelations = function(blacklist, blacklist2delete, mutelist, mutelist2delete, timetag) {
		    var self = this;
		    var p1 = self.updateAndDelete(TableBlacklist, blacklist, blacklist2delete);
		    var p2 = self.updateAndDelete(TableMutelist, mutelist, mutelist2delete);
		    return Promise.all([p1, p2]).then(function() {
		        logger.warn('merge relations');
		        self.updateRelationTimetag(timetag);
		        return [blacklist, blacklist2delete, mutelist, mutelist2delete, timetag];
		    });
		};

		DBFn.getRelations = function() {
		    var self = this;
		    var p1 = self.getAll(TableBlacklist);
		    var p2 = self.getAll(TableMutelist);
		    return Promise.all([p1, p2]);
		};

		DBFn.markInBlacklist = function(obj) {
		    var self = this;
		    // 先复制, 不受外界干扰
		    obj = util.copy(obj);
		    if (obj.isAdd) {
		        var record = obj.record;
		        return self.put(TableBlacklist, record);
		    } else {
		        var account = obj.account;
		        return self.remove(TableBlacklist, account);
		    }
		};

		DBFn.markInMutelist = function(obj) {
		    var self = this;
		    // 先复制, 不受外界干扰
		    obj = util.copy(obj);
		    if (obj.isAdd) {
		        var record = obj.record;
		        return self.put(TableMutelist, record);
		    } else {
		        var account = obj.account;
		        return self.remove(TableMutelist, account);
		    }
		};


	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;
		var util = __webpack_require__(10);
		var logger = __webpack_require__(40);
		var TableFriend = 'friend';

		/*
		 * 更新好友、删除好友
		 * - 成功后更新对应的好友时间戳
		 */
		DBFn.mergeFriends = function(friends, friends2delete, timetag) {
		    var self = this;
		    return self.updateAndDelete(TableFriend, friends, friends2delete).then(function() {
		        logger.warn('merge friends');
		        // 此时间戳不一定有
		        if (timetag) {
		            self.updateFriendTimetag(timetag);
		        }
		        return [friends, friends2delete, timetag];
		    });
		};

		DBFn.putFriend = function(friend) {
		    return this.put(TableFriend, friend);
		};

		/*
		 * 更新好友, 加好友都走这里
		 */
		DBFn.updateFriend = function(friend) {
		    // 先复制, 不受外界干扰
		    friend = util.copy(friend);
		    var account = friend.account;
		    return this.getOne(TableFriend, null, account, {
		        modifyObj: friend
		    }).then(function(record) {
		        if (record) {
		            logger.warn('update friend', account, friend);
		        } else {
		            logger.warn('update friend no', account);
		        }
		        return record;
		    });
		};

		DBFn.deleteFriend = function(account) {
		    var self = this;
		    var p1 = self.remove(TableFriend, account);
		    var p2 = self.deleteUser(account);
		    return Promise.all([p1, p2]);
		};

		DBFn.getFriends = function() {
		    var filter = function(friend) {
		        return friend.valid;
		    };
		    return this.getAll(TableFriend, {
		        filter: filter
		    });
		};

		DBFn.getFriend = function(account) {
		    return this.getOne(TableFriend, null, account);
		};


	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;
		var util = __webpack_require__(10);
		var logger = __webpack_require__(40);
		var NIMError = __webpack_require__(14);
		var TeamMember = __webpack_require__(87);
		var TableTeam = 'team';
		var IndexTeamId = 'teamId';
		var TableTeamMember = 'teamMember';

		/*
		 * 更新群和解散群
		 * - 成功后更新对应的群时间戳
		 */
		DBFn.mergeTeams = function(teams, teams2delete, timetag) {
		    var self = this;
		    var p1 = self.put(TableTeam, teams);
		    var p2 = self.leaveTeams(teams2delete, timetag);
		    return Promise.all([p1, p2]).then(function() {
		        logger.warn('merge teams');
		        self.updateTeamTimetag(timetag);
		        return [teams, teams2delete, timetag];
		    });
		};

		/*
		 * 添加群
		 */
		DBFn.putTeam = function(team) {
		    // 创建群时服务器并没有返回这个字段
		    team.validToCurrentUser = true;
		    return this.put(TableTeam, team);
		};

		DBFn.updateTeam = function(team) {
		    var self = this;
		    // 先复制, 不受外界干扰
		    team = util.copy(team);
		    var teamId = team.teamId;
		    return self.getOne(TableTeam, null, teamId, {
		        modifyObj: team
		    }).then(function(record) {
		        if (record) {
		            logger.warn('update team', teamId, team);
		        } else {
		            logger.warn('update team no', teamId);
		            return self.putTeam(team);
		        }
		        return record;
		    });
		};

		/*
		 * 转让群
		 * - 更新两个的群成员
		 * - 成功后更新群
		 */
		DBFn.transferTeam = function(team, from, to) {
		    var self = this;
		    var teamId = team.teamId;
		    var memberUpdateTime = team.memberUpdateTime;
		    var m1 = {
		        teamId: teamId,
		        account: from,
		        type: 'normal',
		        updateTime: memberUpdateTime
		    };
		    var m2 = {
		        teamId: teamId,
		        account: to,
		        type: 'owner',
		        updateTime: memberUpdateTime
		    };
		    return self.updateTeamMembers([m1, m2]).then(function() {
		        return self.putTeam(team).then(function() {
		            logger.warn('transfer team', team.teamId, from, to);
		            return [team, from, to];
		        });
		    });
		};

		/*
		 * 离开群
		 * - 标记该群（成功后更新对应的群时间戳）
		 * - 成功后移除该群的所有群成员（成功后移除对应的群成员时间戳）
		 */
		DBFn.leaveTeam = function(teamId) {
		    var self = this;
		    return self.updateTeam({
		        teamId: teamId,
		        validToCurrentUser: false
		    }).then(function() {
		        return self.removeAllTeamMembers(teamId);
		    });
		};

		/*
		 * 解散群
		 * - 标记该群
		 * - 成功后移除该群的所有群成员（成功后移除对应的群成员时间戳）
		 */
		DBFn.dismissTeam = function(teamId, timetag) {
		    var self = this;
		    var modifyObj = {
		        teamId: teamId,
		        valid: false,
		        validToCurrentUser: false,
		        updateTime: timetag
		    };
		    return self.updateTeam(modifyObj).then(function() {
		        return self.removeAllTeamMembers(teamId);
		    });
		};

		DBFn.leaveTeams = function(teams, timetag) {
		    var self = this;
		    var array = [];
		    var promise;
		    teams.forEach(function(team) {
		        promise = self.leaveTeam(team.teamId, timetag);
		        array.push(promise);
		    });
		    return Promise.all(array);
		};

		DBFn.getTeams = function() {
		    return this.getAll(TableTeam, {
		        filter: isValidTeamToCurrentUser
		    });
		};

		function isValidTeamToCurrentUser(team) {
		    return team.valid && team.validToCurrentUser;
		}

		DBFn.getTeam = function(teamId) {
		    teamId = '' + teamId;
		    return this.getOne(TableTeam, null, teamId);
		};

		DBFn.getTeamsByTeamIds = function(teamIds) {
		    var self = this;
		    var array = [];
		    var promise;
		    teamIds.forEach(function(teamId) {
		        promise = self.getTeam(teamId);
		        array.push(promise);
		    });
		    return Promise.all(array);
		};

		DBFn.mergeTeamMembers = function(teamId, members, members2delete, timetag) {
		    var self = this;
		    var p1 = self.putTeamMembers(members);
		    var p2 = self.updateTeamMembers(members2delete);
		    return Promise.all([p1, p2]).then(function() {
		        logger.warn('merge members', teamId);
		        return self.updateTeamMemberTimetag(teamId, timetag);
		    });
		};

		/*
		 * 添加群成员
		 */
		DBFn.putTeamMembers = function(members) {
		    return this.put(TableTeamMember, members);
		};

		DBFn.getTeamMembers = function(teamId) {
		    teamId = '' + teamId;
		    var filter = function(teamMember) {
		        return teamMember.valid;
		    };
		    return this.getOnly(TableTeamMember, IndexTeamId, teamId, {
		        filter: filter
		    });
		};

		DBFn.getInvalidTeamMembers = function(teamId, accounts) {
		    var self = this;
		    teamId = '' + teamId;
		    var array = [];
		    var promise;
		    accounts.forEach(function(account) {
		        promise = self.getOne(TableTeamMember, null, TeamMember.genId(teamId, account));
		        array.push(promise);
		    });
		    return Promise.all(array);
		};

		/*
		 * 更新群成员
		 */
		DBFn.updateTeamMember = function(member) {
		    var teamId = member.teamId;
		    var account = member.account;
		    var id = TeamMember.genId(teamId, account);
		    // member 包含 account id 等不需要更新的属性, 所以先过滤一下
		    var modifyObj = util.filterObj(member, 'nickInTeam muteTeam updateTime type valid');
		    return this.getOne(TableTeamMember, null, id , {
		        modifyObj: modifyObj
		    }).then(function(m) {
		        if (m) {
		            logger.warn('update member', teamId, account, modifyObj);
		        } else {
		            logger.warn('update member no', teamId, account);
		        }
		        return m;
		    });
		};

		/*
		 * 更新群成员
		 */
		DBFn.updateTeamMembers = function(members) {
		    var self = this;
		    if (!members.length) {return Promise.resolve();}
		    var array = [];
		    var promise;
		    members.forEach(function(member) {
		        promise = self.updateTeamMember(member).then(function() {
		        });
		        array.push(promise);
		    });
		    return Promise.all(array);
		};

		/*
		 * 更新群的管理员
		 * - 后续性能如果有问题的话, 增加一个索引, idType = id + type
		 */
		DBFn.updateTeamManagers = function(teamId, accounts, isManager, timetag) {
		    var members = accounts.map(function(account) {
		        return {
		            teamId: teamId,
		            account: account,
		            type: isManager ? 'manager' : 'normal',
		            updateTime: timetag
		        };
		    });
		    return this.updateTeamMembers(members);
		};

		DBFn.removeTeamMembersByAccounts = function(teamId, accounts) {
		    var members = accounts.map(function(account) {
		        return {
		            teamId: teamId,
		            account: account,
		            valid: false
		        };
		    });
		    return this.updateTeamMembers(members);
		};

		/*
		 * 移除群的所有群成员, 成功后移除对应的群成员时间戳
		 */
		DBFn.removeAllTeamMembers = function(teamId) {
		    var self = this;
		    var modifyObj = {
		        valid: false
		    };
		    return self.getOnly(TableTeamMember, IndexTeamId, teamId, {
		        modifyObj: modifyObj
		    }).then(function() {
		        logger.warn('invalid all teamMembers', teamId);
		        return self.deleteTeamMemberTimetag(teamId);
		    });
		};

		DBFn.deleteTeamMembers = function(teamId) {
		    var self = this;
		    return self.getOnly(TableTeamMember, IndexTeamId, teamId, {
		        remove: true
		    }).then(function() {
		        logger.warn('delete all teamMembers', teamId);
		        self.deleteTeamMemberTimetag(teamId);
		    });
		};

		/*
		 * 删除群 单个或者数组
		 * - 如果还在群里面, 那么不删除
		 */
		DBFn.deleteTeam = function(teamIds) {
		    var self = this;
		    var array = [];
		    var promise;
		    if (!util.isArray(teamIds)) { teamIds = [teamIds]; }
		    teamIds.forEach(function(teamId) {
		        teamId = '' + teamId;
		        promise = self.get(TableTeam, teamId).then(function(team) {
		            if (!!team && isValidTeamToCurrentUser(team)) {
		                throw NIMError.stillInTeamError();
		            } else {
		                var p1 = self.remove(TableTeam, teamId);
		                var p2 = self.deleteTeamMembers(teamId);
		                return Promise.all([p1, p2]);
		            }
		        });
		        array.push(promise);
		    });
		    return array.length === 1 ? array[0] : Promise.all(array);
		};


	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var notundef = util.notundef;

		/**
		 * 群成员类型
		 * 
		 * - `'normal'` (普通成员)
		 * - `'owner'` (群主)
		 * - `'manager'` (管理员)
		 * 
		 * @memberOf TeamMember
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeReverseMap = {
		    0: 'normal',
		    1: 'owner',
		    2: 'manager'
		};

		/**
		 * 群成员
		 * 
		 * @constructor
		 * @property {Number}   teamId          群ID
		 * @property {String}   account         帐号
		 * @property {String}   type            {@link TeamMember.type|群成员类型}
		 * @property {String}   nickInTeam      在群里面的昵称
		 * @property {Boolean}  muteTeam        是否关闭此群的消息提醒, `true`表示关闭提醒, 但是SDK仍然会收到这个群的消息, SDK只是记录这个设置, 具体根据这个设置要执行的操作由第三方APP决定
		 * @property {Number}   joinTime        入群时间
		 * @property {Number}   updateTime      更新时间
		 * @property {Boolean}  active          普通群拉人进来的时候, 被拉的人处于未激活状态, 未激活状态下看不到这个群, 当有人说话后自动转为激活状态, 能看到该群
		 */
		function TeamMember(options) {
		    util.verifyOptions(options, 'teamId');
		    util.verifyParamAtLeastPresentOne(options, 'nickInTeam muteTeam');
		    this.teamId = options.teamId;
		    // 当更新自己的昵称时, 不会传`account`
		    if (notundef(options.account)) { this.account = options.account; }
		    if (notundef(options.nickInTeam)) { this.nickInTeam = options.nickInTeam; }
		    if (notundef(options.muteTeam)) {
		        this.bits = 0;
		        if (!!options.muteTeam) {
		            this.bits += (1<<0);
		        }
		    }
		}

		TeamMember.reverse = function(teamMember) {
		    var obj = util.copy(teamMember);
		    if (notundef(obj.teamId)) { obj.teamId = '' + obj.teamId; }
		    if (notundef(obj.type)) { obj.type = typeReverseMap[obj.type]; }
		    if (notundef(obj.active)) { obj.active = +obj.active === 1; }
		    if (notundef(obj.valid)) { obj.valid = +obj.valid === 1; }
		    if (notundef(obj.joinTime)) { obj.joinTime = +obj.joinTime; }
		    if (notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
		    if (notundef(obj.bits)) {
		        // 需要同时知道其他标志位的值才能正确设置, 目前只有一个标志位所以是没问题 TODO
		        var bits = obj.bits;
		        delete obj.bits;
		        obj.muteTeam = !!(bits & 1);
		    }
		    // 添加 ID
		    if (notundef(obj.teamId) && notundef(obj.account)) {
		        obj.id = TeamMember.genId(obj.teamId, obj.account);
		    }
		    return obj;
		};

		TeamMember.genId = function(teamId, account) {
		    return teamId + '-' + account;
		};

		TeamMember.accounts2ids = function(teamId, accounts) {
		    return accounts.map(function(a) {
		        return TeamMember.genId(teamId, a);
		    });
		};

		TeamMember.assembleMembers = function(team, accounts) {
		    if (!util.isArray(accounts)) { accounts = [accounts]; }
		    return accounts.map(function(account) {
		        return TeamMember.assembleMember(team, account);
		    });
		};

		TeamMember.assembleMember = function(team, account) {
		    return {
		        account: account,
		        active: true,
		        id: TeamMember.genId(team.teamId, account),
		        joinTime: team.memberUpdateTime,
		        muteTeam: false,
		        nickInTeam: "",
		        teamId: team.teamId,
		        type: 'normal',
		        updateTime: team.memberUpdateTime,
		        valid: true
		    };
		};

		TeamMember.assembleOwner = function(team) {
		    var owner = TeamMember.assembleMember(team, team.owner);
		    owner.type = 'owner';
		    return owner;
		};

		module.exports = TeamMember;


	/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;
		var logger = __webpack_require__(40);
		var util = __webpack_require__(10);
		var TableUser = 'user';

		/**
		 * 处理我的信息
		 * @private
		 * @param  {Boolean} shouldUpdateTimetag 是否更新时间戳
		 */
		DBFn.mergeMyInfo = function(user, shouldUpdateTimetag) {
		    var self = this;
		    return self.put(TableUser, user).then(function() {
		        if (shouldUpdateTimetag) {
		            return self.updateMyInfoTimetag(user.updateTime);
		        }
		        return user;
		    });
		};

		DBFn.mergeFriendUsers = function(users, timetag) {
		    var self = this;
		    return self.putUsers(users).then(function() {
		        self.updateFriendUserTimetag(timetag);
		    });
		};

		DBFn.putUsers = function(users) {
		    return this.put(TableUser, users);
		};

		DBFn.putUser = function(user) {
		    return this.put(TableUser, user);
		};

		DBFn.updateUser = function(user) {
		    // 先复制, 不受外界干扰
		    user = util.copy(user);
		    var account = user.account;
		    return this.getOne(TableUser, null, account, {
		        modifyObj: user
		    }).then(function(record) {
		        if (record) {
		            logger.warn('update user', account, user);
		        } else {
		            logger.warn('update user no', account);
		        }
		        return record;
		    });
		};

		// 如果是好友, 更新其用户信息
		DBFn.updateUsersIfIsFriend = function(users) {
		    var self = this;
		    var waitArray = [];
		    var updateArray = [];
		    var promise;
		    users.forEach(function(user) {
		        promise = self.getFriend(user.account).then(function(record) {
		            if (!!record) {
		                promise = self.putUser(user);
		                updateArray.push(promise);
		            }
		            return record;
		        });
		        waitArray.push(promise);
		    });
		    return Promise.all(waitArray).then(function() {
		        return Promise.all(updateArray).then(function(updateResult) {
		            return updateResult;
		        });
		    });
		};

		DBFn.deleteUser = function(account) {
		    return this.remove(TableUser, account);
		};

		DBFn.getUser = function(account) {
		    return this.getOne(TableUser, null, account);
		};

		DBFn.getUsers = function(accounts) {
		    function filter(user) {
		        return accounts.indexOf(user.account) !== -1;
		    }
		    return this.getAll(TableUser, {
		        filter: filter
		    });
		};

		DBFn.getAllUsers = function() {
		    return this.getAll(TableUser);
		};


	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;
		var util = __webpack_require__(10);
		var notundef = util.notundef;
		var logger = __webpack_require__(40);
		var TableSession = 'session';
		var TableMsg = 'msg';
		var IndexIdClient = 'idClient';
		var IndexSession = 'sessionId';
		var IndexSessionType = 'sessionType';

		/*
		 * 存储消息, 策略为只管存, 并且保存存储成功的消息, 
		 * 如果失败, 说明对应的消息已经存在, 那么刚好过滤掉, 
		 * 最终返回所有存储成功的消息
		 */
		DBFn.putMsg = function(msgs) {
		    var self = this;
		    return new Promise(function(resolve) {
		        if (!util.isArray(msgs)) { msgs = [msgs]; }
		        // 如果是过滤（云商服专用）, 直接返回
		        if (msgs[0].filter) { return; }
		        var array = [];
		        var counter = msgs.length;
		        msgs.forEach(function(msg) {
		            // 这里要加字段, 所以先拷贝
		            msg = util.copy(msg);
		            // msg.sessionTime = msg.sessionId + '-' + msg.time;
		            msg.sessionType = msg.sessionId + '-' + msg.type;
		            self.put(TableMsg, msg).then(function(record) {
		                array.push(record[0]);
		                bingo();
		            }, bingo);
		        });
		        // 就算有失败, 也算完成, 最终返回所有存储成功的记录
		        function bingo() {
		            counter--;
		            if (counter===0) {
		                resolve(array);
		            }
		        }
		    });
		};

		/*
		 * 更新消息
		 * 只允许更新 localCustom
		 */
		DBFn.updateMsg = function(msg) {
		    var self = this;
		    // 如果是过滤（云商服专用）, 直接返回
		    if (msg.filter) { return; }
		    var idClient = msg.idClient;
		    var modifyObj = util.filterObj(msg, 'resend status idServer time localCustom');
		    return self.getOne(TableMsg, IndexIdClient, idClient, {
		        modifyObj: modifyObj
		    }).then(function(record) {
		        if (record) {
		            logger.warn('update msg', idClient, modifyObj);
		        } else {
		            logger.warn('udpate msg no', idClient);
		        }
		        return record;
		    });
		};

		DBFn.getMsgsBySessionId = function(options) {
		    var self = this;
		    options = options || {};
		    // 顺序、限量、索引
		    var desc = !options.reverse;
		    var limit = options.limit || 100;
		    var index = IndexSession;
		    var matchValue = options.sessionId;
		    // 如果有关键词, 那么类型必须为文本
		    var type = options.type;
		    var keyword = options.keyword;
		    if (notundef(keyword)) {
		        type = 'text';
		    }
		    // 如果有类型, 那么更换索引
		    if (notundef(type)) {
		        index = IndexSessionType;
		        matchValue = matchValue + '-' + type;
		    }
		    // 如果没有提供 lastMsgIdClient 和 keyword, 那么匹配所有的记录
		    // 如果提供了 lastMsgIdClient, 那么匹配从 lastMsgIdClient 的下一条开始的所有记录
		    // 如果提供了 keyword, 那么匹配所有包含 keyword 的消息
		    var lastMsgIdClient = options.lastMsgIdClient;
		    var findLastRecord = false;
		    var filter;
		    if (notundef(lastMsgIdClient) || notundef(keyword)) {
		        filter = function(msg) {
		            if (notundef(lastMsgIdClient)) {
		                if (findLastRecord) {
		                    return bingo();
		                } else {
		                    if (msg.idClient === lastMsgIdClient) {
		                        findLastRecord = true;
		                    }
		                    return false;
		                }
		            }
		            return bingo();
		            function bingo() {
		                if (notundef(keyword)) {
		                    return msg.text.indexOf(keyword) !== -1;
		                }
		                return true;
		            }
		        };
		    }
		    return self.getOnly(TableMsg, index, matchValue, {
		        filter: filter,
		        desc: desc,
		        limit: limit,
		        mapper: self.pruneMsg
		    });
		};

		// 不返回给开发者某些属性
		DBFn.pruneMsg = function(msg) {
		    if (msg) {
		        delete msg.sessionTime;
		        delete msg.sessionType;
		        return msg;
		    } else {
		        return null;
		    }
		};

		DBFn.getMsgByIdClient = function(idClient) {
		    var self = this;
		    return self.getOne(TableMsg, IndexIdClient, idClient).then(function(record) {
		        return self.pruneMsg(record);
		    });
		};

		DBFn.getMsgsByIdClients = function(idClients) {
		    var self = this;
		    var array = [],
		        promise;
		    idClients.forEach(function(idClient) {
		        promise = self.getMsgByIdClient(idClient);
		        array.push(promise);
		    });
		    return Promise.all(array);
		};

		// idClients 单个或数组
		DBFn.deleteMsg = function(idClients) {
		    var self = this;
		    var array = [];
		    var promise;
		    if (!util.isArray(idClients)) { idClients = [idClients]; }
		    idClients.forEach(function(idClient) {
		        promise = self.getOne(TableMsg, IndexIdClient, idClient, {
		            remove: true
		        });
		        array.push(promise);
		    });
		    return array.length === 1 ? array[0] : Promise.all(array);
		};

		DBFn.deleteMsgsBySessionId = function(sessionId) {
		    var self = this;
		    return self.getOnly(TableMsg, IndexSession, sessionId, {
		        remove: true
		    });
		};

		// 删除所有消息和会话
		DBFn.deleteAllMsgs = function() {
		    var self = this;
		    var p1 = self.clearTable(TableMsg);
		    var p2 = self.clearTable(TableSession);
		    return Promise.all([p1, p2]);
		};


	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;
		var util = __webpack_require__(10);
		var notundef = util.notundef;
		var logger = __webpack_require__(40);
		var TableSysMsg = 'sysMsg';
		var IndexIdServer = 'idServer';
		var IndexType = 'type';
		var IndexCategory = 'category';
		var TableSysMsgUnread = 'sysMsgUnread';

		/*
		 * 存储系统通知（不存自定义系统通知）
		 * - 收到离线系统通知
		 * - 收到系统通知
		 * 策略为只管存, 并且保存存储成功的系统通知, 
		 * 如果失败, 说明对应的系统通知已经存在, 那么刚好过滤掉, 
		 * 最终返回所有存储成功的系统通知
		 */
		DBFn.putSysMsg = function(sysMsgs) {
		    var self = this;
		    return new Promise(function(resolve) {
		        if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
		        // 如果是过滤（云商服专用）, 直接返回
		        if (sysMsgs[0].filter) { return; }
		        var array = [];
		        var counter = sysMsgs.length;
		        sysMsgs.forEach(function(sysMsg) {
		            sysMsg = util.copy(sysMsg);
		            self.put(TableSysMsg, sysMsg).then(function(record) {
		                array.push(record[0]);
		                bingo();
		            }, bingo);
		        });
		        // 就算有失败, 也算完成, 最终返回所有存储成功的记录
		        function bingo() {
		            counter--;
		            if (counter===0) {
		                resolve(array);
		            }
		        }
		    });
		};

		/*
		 * 获取系统通知
		 */
		DBFn.getSysMsgs = function(options) {
		    var self = this;
		    options = options || {};
		    var desc = !options.reverse;
		    var limit = options.limit || 100;
		    var index = null;
		    var matchValue = null;
		    // 如果有种类, 更换索引
		    if (!!options.category) {
		        index = IndexCategory;
		        matchValue = options.category;
		    }
		    // 如果有类型, 更换索引
		    if (!!options.type) {
		        index = IndexType;
		        matchValue = options.type;
		    }
		    // 如果没有提供 lastIdServer, 那么匹配所有的记录
		    // 如果提供了 lastIdServer, 那么匹配从 lastIdServer 的下一条开始的所有记录
		    var lastIdServer = options.lastIdServer;
		    var findLastRecord = false;
		    var filter;
		    if (notundef(lastIdServer)) {
		        lastIdServer = '' + lastIdServer;
		        filter = function(sysMsg) {
		            if (findLastRecord) {
		                return true;
		            } else {
		                if (sysMsg.idServer === lastIdServer) {
		                    findLastRecord = true;
		                }
		                return false;
		            }
		        };
		    }
		    options = {
		        filter: filter,
		        desc: desc,
		        limit: limit
		    };
		    if (!index) {
		        return self.getAll(TableSysMsg, options);
		    } else {
		        return self.getOnly(TableSysMsg, index, matchValue, options);
		    }
		};

		/*
		 * 更新系统通知
		 * 只允许更新 read, state, localCustom
		 */
		DBFn.updateSysMsg = function(sysMsg) {
		    if (sysMsg.filter) { return; }
		    var idServer = '' + sysMsg.idServer;
		    var modifyObj = util.filterObj(sysMsg, 'read state error localCustom');
		    return this.getOne(TableSysMsg, IndexIdServer, idServer, {
		        modifyObj: modifyObj
		    }).then(function(record) {
		        if (record) {
		            logger.warn('update sysMsg', idServer, modifyObj);
		        } else {
		            logger.warn('update sysMsg no', idServer);
		        }
		        return record;
		    });
		};

		/*
		 * 标记系统通知为已读
		 * sysMsgs 可以为数组或者单个
		 */
		DBFn.markSysMsgRead = function(sysMsgs) {
		    var self = this;
		    var array = [];
		    var promise;
		    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
		    sysMsgs.forEach(function(sysMsg) {
		        promise = self.updateSysMsg({
		            idServer: sysMsg.idServer,
		            read: true
		        });
		        array.push(promise);
		    });
		    return array.length === 1 ? array[0] : Promise.all(array);
		};

		/*
		 * 删除系统通知
		 * idServers 可以为数组或者单个
		 */
		DBFn.deleteSysMsg = function(idServers) {
		    var self = this;
		    var array = [];
		    var promise;
		    if (!util.isArray(idServers)) { idServers = [idServers]; }
		    idServers.forEach(function(idServer) {
		        idServer = '' + idServer;
		        promise = self.getOne(TableSysMsg, IndexIdServer, idServer, {
		            remove: true
		        });
		        array.push(promise);
		    });
		    return array.length === 1 ? array[0] : Promise.all(array);
		};

		DBFn.deleteAllSysMsgs = function() {
		    var self = this;
		    var p1 = self.clearTable(TableSysMsg);
		    var p2 = self.clearTable(TableSysMsgUnread);
		    return Promise.all([p1, p2]);
		};

		/*
		 * 获取系统通知未读数
		 */
		DBFn.getSysMsgUnread = function() {
		    return this.getAll(TableSysMsgUnread).then(function(records) {
		        var obj = {};
		        records.forEach(function(record) {
		            obj[record.type] = record.num;
		        });
		        return obj;
		    });
		};

		/*
		 * 更新系统通知未读数
		 */
		DBFn.updateSysMsgUnread = function(sysMsgUnread) {
		    // 先复制, 不受外界干扰
		    sysMsgUnread = util.copy(sysMsgUnread);
		    var records = [];
		    Object.keys(sysMsgUnread).forEach(function(type) {
		        records.push({
		            type: type,
		            num: sysMsgUnread[type]
		        });
		    });
		    return this.put(TableSysMsgUnread, records).then(function() {
		        logger.warn('update sysMsg unread', sysMsgUnread);
		        return sysMsgUnread;
		    });
		};


	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {

		var DBFn = __webpack_require__(81).fn;
		var util = __webpack_require__(10);
		var notundef = util.notundef;
		var logger = __webpack_require__(40);
		var TableSession = 'session';
		var IndexUpdateTime = 'updateTime';

		/*
		 * 存储会话, 如果没有记录, 那么创建新的纪录
		 */
		DBFn.putSession = function(session) {
		    var self = this;
		    var modifyObj = util.copy(session);
		    delete modifyObj.id;
		    return self.getOne(TableSession, null, session.id, {
		        modifyObj: modifyObj
		    }).then(function(record) {
		        if (!record) {
		            session.unread = 0;
		            return self.put(TableSession, session).then(function(records) {
		                return records[0];
		            });
		        } else {
		            logger.warn('put session', session);
		            return record;
		        }
		    });
		};

		DBFn.getSessions = function(options) {
		    options = options || {};
		    var desc = !options.reverse;
		    var limit = options.limit || 100;
		    // 如果没有提供 lastSessionId, 那么匹配所有的记录
		    // 如果提供了 lastSessionId, 那么匹配从 lastSessionId 的下一条开始的所有记录
		    var lastSessionId = options.lastSessionId;
		    var findLastRecord = false;
		    var filter;
		    if (notundef(lastSessionId)) {
		        filter = function(session) {
		            if (findLastRecord) {
		                return true;
		            } else {
		                if (session.id === lastSessionId) {
		                    findLastRecord = true;
		                }
		                return false;
		            }
		        };
		    }
		    return this.getAll(TableSession, {
		        index: IndexUpdateTime,
		        desc: desc,
		        limit: limit,
		        filter: filter
		    });
		};

		DBFn.getSession = function(sessionId) {
		    return this.get(TableSession, sessionId);
		};

		/*
		 * 修改已有的会话
		 * 只允许更新 unread lastMsg localCustom
		 */
		DBFn.updateSession = function(session) {
		    var sessionId = session.id;
		    var modifyObj = util.filterObj(session, 'unread lastMsg localCustom');
		    return this.getOne(TableSession, null, sessionId, {
		        modifyObj: modifyObj
		    }).then(function(record) {
		        if (record) {
		            logger.warn('update session', sessionId, modifyObj);
		        } else {
		            logger.warn('update session no', sessionId);
		        }
		        return record;
		    });
		};

		DBFn.resetSessionUnread = function(sessionId) {
		    return this.updateSession({
		        id: sessionId,
		        unread: 0
		    });
		};

		/**
		 * 删除会话
		 * @private
		 * @param  {String|String[]} id     id 或者 id 数组
		 */
		DBFn.deleteSession = function(id) {
		    return this.remove(TableSession, id);
		};


	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var configBase = __webpack_require__(51);

		// 外层是 service, 内层是 cmd
		var idMap = util.merge({}, configBase.idMap, {
		    // 登录协议
		    auth: {
		        id: 2,
		        // web一键登录
		        login: 3,
		        // 被踢通知
		        kicked: 5,
		        // 退出登录
		        logout: 6,
		        // 多端登陆通知
		        multiPortLogin: 7,
		        // 踢其它端
		        kick: 8
		    },
		    // 用户协议
		    user: {
		        id: 3,
		        // 加入黑名单/从黑名单移除
		        markInBlacklist: 3,
		        // 获取黑名单
		        getBlacklist: 4,
		        // 加入静音列表/从静音列表移除
		        markInMutelist: 5,
		        // 获取静音列表
		        getMutelist: 6,
		        // 获取黑名单和静音列表
		        getRelations: 8,
		        getUsers: 7,
		        updateMyInfo: 10,
		        syncMyInfo: 109,
		        syncUpdateMyInfo: 110
		    },
		    // 通知
		    notify: {
		        id: 4,
		        // 标记通知已读
		        markRead: 3,
		        // 离线session+team消息通知
		        syncOfflineMsgs: 4,
		        // 批量标记协议已读
		        batchMarkRead: 5,
		        // 离线system消息同步通知
		        syncOfflineSysMsgs: 6,
		        // 漫游消息同步通知
		        // 每个会话返回一个包
		        syncRoamingMsgs: 9
		    },
		    // 同步
		    sync: {
		        id: 5,
		        // 同步
		        sync: 1,
		        // 同步群成员
		        syncTeamMembers: 2
		    },
		    // 其它
		    misc: {
		        id: 6,
		        // 获取nos上传凭证
		        getNosToken: 2,
		        // 语音转文字
		        audioToText: 5,
		        // 处理图片
		        processImage: 6
		    },
		    // 消息
		    talk: {
		        id: 7,
		        // 发送消息
		        sendMsg: 1,
		        // 消息通知
		        msg: 2,
		        // 系统通知通知
		        sysMsg: 3,
		        // 获取单人历史消息
		        getHistoryMsgs: 6,
		        // 发送自定义系统通知
		        sendCustomSysMsg: 7,
		        // 获取包含关键词的单人历史消息
		        searchHistoryMsgs: 8,
		        // 删除会话
		        deleteSessions: 9,
		        // 获取会话列表
		        getSessions: 10,
		        // 发送消息后发送方的多端同步通知
		        syncSendMsg: 101
		    },
		    // 群
		    team: {
		        id: 8,
		        // 创建群
		        createTeam: 1,
		        // 发送群消息
		        sendTeamMsg: 2,
		        // 群消息通知
		        teamMsg: 3,
		        // 群消息列表通知
		        teamMsgs: 4,
		        // 拉人入群
		        addTeamMembers: 5,
		        // 踢人出群
		        removeTeamMembers: 6,
		        // 修改群资料
		        updateTeam: 7,
		        // 退出群
		        leaveTeam: 8,
		        // 获取群
		        getTeam: 9,
		        // 获取群列表
		        getTeams: 10,
		        // 获取群成员
		        getTeamMembers: 11,
		        // 解散群
		        dismissTeam: 12,
		        // 申请入群
		        applyTeam: 13,
		        // 同意入群申请
		        passTeamApply: 14,
		        // 拒绝入群申请
		        rejectTeamApply: 15,
		        // 添加群管理员
		        addTeamManagers: 16,
		        // 移除群管理员
		        removeTeamManagers: 17,
		        // 转让群
		        transferTeam: 18,
		        // 修改自己的群资料
		        updateInfoInTeam: 19,
		        // 修改别人的群昵称
		        updateNickInTeam: 20,
		        // 接受入群邀请
		        acceptTeamInvite: 21,
		        // 拒绝入群邀请
		        rejectTeamInvite: 22,
		        // 获取群组历史消息
		        getTeamHistoryMsgs: 23,
		        // 获取包含关键词的群组历史消息
		        searchTeamHistoryMsgs: 24,
		        // 同步群列表通知
		        syncTeams: 109,
		        // 同步群成员通知
		        syncTeamMembers: 111,
		        // 多端同步创建群通知
		        syncCreateTeam: 101,
		        // 多端同步发送群消息通知
		        syncSendTeamMsg: 102,
		        // 多端同步更新群成员通知
		        syncUpdateTeamMember: 119
		    },
		    // 好友协议
		    friend: {
		        id: 12,
		        // 添加好友
		        friendRequest: 1,
		        // 添加好友多端同步
		        syncFriendRequest: 101,
		        // 删除好友
		        deleteFriend: 2,
		        // 删除好友多端同步
		        syncDeleteFriend: 102,
		        // 更新好友
		        updateFriend: 3,
		        // 更新好友多端同步
		        syncUpdateFriend: 103,
		        // 获取好友列表
		        getFriends: 4
		    },
		    chatroom: {
		        id: 13,
		        getChatroomAddress: 1
		    },
		    // 过滤协议, 此协议下的消息都会转发给第三方服务器, 由第三方服务器处理后得到最终发送的消息内容
		    filter: {
		        id: 101,
		        // 发送过滤消息
		        sendFilterMsg: 1,
		        // 过滤消息通知
		        filterMsg: 2,
		        // 过滤系统通知通知
		        filterSysMsg: 3,
		        // 发送过滤自定义系统通知
		        sendFilterCustomSysMsg: 7
		    }
		});

		/**
		 * 命令配置
		 * params 说明: 如果类型是 Property, 如果没有 entity, entity 值就是 name
		 */
		var cmdConfig = util.merge({}, configBase.cmdConfig, {
		    // 登录
		    login: { sid: idMap.auth.id, cid: idMap.auth.login, params: [
		        {type: 'Property', name: 'login'}
		    ]},
		    // 退出登录
		    logout: { sid: idMap.auth.id, cid: idMap.auth.logout },
		    // 踢其它端
		    kick: { sid: idMap.auth.id, cid: idMap.auth.kick, params: [
		        {type: 'StrArray', name: 'deviceIds'}
		    ]},

		    // 加入黑名单/从黑名单移除
		    markInBlacklist: { sid: idMap.user.id, cid: idMap.user.markInBlacklist, params: [
		        {type: 'String', name: 'account'},
		        {type: 'bool', name: 'isAdd'}
		    ]},
		    // 获取黑名单
		    getBlacklist: { sid: idMap.user.id, cid: idMap.user.getBlacklist, params: [
		        {type: 'long', name: 'time'}
		    ]},
		    // 加入静音列表/从静音列表移除
		    markInMutelist: { sid: idMap.user.id, cid: idMap.user.markInMutelist, params: [
		        {type: 'String', name: 'account'},
		        {type: 'bool', name: 'isAdd'}
		    ]},
		    // 获取静音列表
		    getMutelist: { sid: idMap.user.id, cid: idMap.user.getMutelist, params: [
		        {type: 'long', name: 'time'}
		    ]},
		    getRelations: {sid: idMap.user.id, cid: idMap.user.getRelations, params: [
		        {type: 'long', name: 'timetag'}
		    ]},
		    getUsers: {sid: idMap.user.id, cid: idMap.user.getUsers, params: [
		        {type: 'StrArray', name: 'accounts'}
		    ]},
		    updateMyInfo: {sid: idMap.user.id, cid: idMap.user.updateMyInfo, params: [
		        {type: 'Property', name: 'user'}
		    ]},

		    // 标记通知已读, 实际未使用, 统一使用批量标记协议已读
		    markRead: { sid: idMap.notify.id, cid: idMap.notify.markRead, params: [
		        {type: 'long', name: 'id'},
		        {type: 'ph', name: 'ph'}
		    ]},
		    // 批量标记协议已读
		    batchMarkRead: { sid: idMap.notify.id, cid: idMap.notify.batchMarkRead, params: [
		        {type: 'byte', name: 'sid'},
		        {type: 'byte', name: 'cid'},
		        {type: 'LongArray', name: 'ids'}
		    ]},

		    // 同步 4_4(离线session+team消息), 4_6(离线system消息), 8_109(群资料)
		    sync: { sid: idMap.sync.id, cid: idMap.sync.sync, params: [
		        {type: 'Property', name: 'sync'}
		    ]},
		    // 同步群成员
		    syncTeamMembers: { sid: idMap.sync.id, cid: idMap.sync.syncTeamMembers, params: [
		        {type: 'LongLongMap', name: 'sync'}
		    ]},

		    // 获取nos上传凭证
		    getNosToken: { sid: idMap.misc.id, cid: idMap.misc.getNosToken, params: [
		        {type: 'String', name: 'responseBody'}
		    ]},
		    audioToText: {sid: idMap.misc.id, cid: idMap.misc.audioToText, params: [
		        {type: 'Property', name: 'audioToText'}
		    ]},
		    processImage: {sid: idMap.misc.id, cid: idMap.misc.processImage, params: [
		        {type: 'String', name: 'url'},
		        {type: 'PropertyArray', name: 'imageOps', entity: 'imageOp'}
		    ]},

		    // 发送消息
		    sendMsg: { sid: idMap.talk.id, cid: idMap.talk.sendMsg,  params: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 获取单人历史消息
		    getHistoryMsgs: { sid: idMap.talk.id, cid: idMap.talk.getHistoryMsgs, params: [
		        {type: 'String', name: 'to'},
		        {type: 'long', name: 'beginTime'},
		        {type: 'long', name: 'endTime'},
		        {type: 'long', name: 'lastMsgId'},
		        {type: 'int', name: 'limit'},
		        {type: 'bool', name: 'reverse'}
		    ]},
		    // 发送自定义系统通知
		    sendCustomSysMsg: { sid: idMap.talk.id, cid: idMap.talk.sendCustomSysMsg, params: [
		        {type: 'Property', name: 'sysMsg'}
		    ]},
		    // 获取包含关键词的单人历史消息
		    searchHistoryMsgs: { sid: idMap.talk.id, cid: idMap.talk.searchHistoryMsgs, params: [
		        {type: 'String', name: 'to'},
		        {type: 'long', name: 'beginTime'},
		        {type: 'long', name: 'endTime'},
		        {type: 'String', name: 'keyword'},
		        {type: 'int', name: 'limit'},
		        {type: 'bool', name: 'reverse'}
		    ]},
		    // 获取会话列表
		    getSessions: {sid: idMap.talk.id, cid: idMap.talk.getSessions, params: [
		        {type: 'long', name: 'time'}
		    ]},
		    // 删除会话
		    deleteSessions: {sid: idMap.talk.id, cid: idMap.talk.deleteSessions, params: [
		        {type: 'StrArray', name: 'sessions'}
		    ]},

		    // 创建群
		    createTeam: { sid: idMap.team.id, cid: idMap.team.createTeam, params: [
		        {type: 'Property', name: 'team'},
		        {type: 'StrArray', name: 'accounts'},
		        {type: 'String', name: 'ps'}
		    ]},
		    // 发送群消息
		    sendTeamMsg: { sid: idMap.team.id, cid: idMap.team.sendTeamMsg, params: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 拉人入群
		    addTeamMembers: { sid: idMap.team.id, cid: idMap.team.addTeamMembers, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'StrArray', name: 'accounts'},
		        {type: 'String', name: 'ps'}
		    ]},
		    // 踢人出群
		    removeTeamMembers: { sid: idMap.team.id, cid: idMap.team.removeTeamMembers, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'StrArray', name: 'accounts'}
		    ]},
		    // 更新群
		    updateTeam: { sid: idMap.team.id, cid: idMap.team.updateTeam, params: [
		        {type: 'Property', name: 'team'}
		    ]},
		    // 退出群
		    leaveTeam: { sid: idMap.team.id, cid: idMap.team.leaveTeam, params: [
		        {type: 'long', name: 'teamId'}
		    ]},
		    // 获取群
		    getTeam: { sid: idMap.team.id, cid: idMap.team.getTeam, params: [
		        {type: 'long', name: 'teamId'}
		    ]},
		    // 获取群列表
		    getTeams: { sid: idMap.team.id, cid: idMap.team.getTeams, params: [
		        {type: 'long', name: 'timetag'}
		    ]},
		    // 获取群成员
		    getTeamMembers: { sid: idMap.team.id, cid: idMap.team.getTeamMembers, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'long', name: 'timetag'}
		    ]},
		    // 解散群
		    dismissTeam: { sid: idMap.team.id, cid: idMap.team.dismissTeam, params: [
		        {type: 'long', name: 'teamId'}
		    ]},
		    // 申请入群
		    applyTeam: { sid: idMap.team.id, cid: idMap.team.applyTeam, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'String', name: 'ps'}
		    ]},
		    // 同意入群申请
		    passTeamApply: { sid: idMap.team.id, cid: idMap.team.passTeamApply, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'String', name: 'from'}
		    ]},
		    // 拒绝入群申请
		    rejectTeamApply: { sid: idMap.team.id, cid: idMap.team.rejectTeamApply, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'String', name: 'from'},
		        {type: 'String', name: 'ps'}
		    ]},
		    // 添加群管理员
		    addTeamManagers: { sid: idMap.team.id, cid: idMap.team.addTeamManagers, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'StrArray', name: 'accounts'}
		    ]},
		    // 移除群管理员
		    removeTeamManagers: { sid: idMap.team.id, cid: idMap.team.removeTeamManagers, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'StrArray', name: 'accounts'}
		    ]},
		    // 转让群
		    transferTeam: { sid: idMap.team.id, cid: idMap.team.transferTeam, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'String', name: 'account'},
		        {type: 'bool', name: 'leave'}
		    ]},
		    // 修改自己的群资料
		    updateInfoInTeam: { sid: idMap.team.id, cid: idMap.team.updateInfoInTeam, params: [
		        {type: 'Property', name: 'teamMember'}
		    ]},
		    // 修改别人的群昵称
		    updateNickInTeam: { sid: idMap.team.id, cid: idMap.team.updateNickInTeam, params: [
		        {type: 'Property', name: 'teamMember'}
		    ]},
		    // 接受入群邀请
		    acceptTeamInvite: { sid: idMap.team.id, cid: idMap.team.acceptTeamInvite, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'String', name: 'from'}
		    ]},
		    // 拒绝入群邀请
		    rejectTeamInvite: { sid: idMap.team.id, cid: idMap.team.rejectTeamInvite, params: [
		        {type: 'long', name: 'teamId'},
		        {type: 'String', name: 'from'},
		        {type: 'String', name: 'ps'}
		    ]},
		    // 获取群组历史消息
		    getTeamHistoryMsgs: { sid: idMap.team.id, cid: idMap.team.getTeamHistoryMsgs, params: [
		        {type: 'long', name: 'to'},
		        {type: 'long', name: 'beginTime'},
		        {type: 'long', name: 'endTime'},
		        {type: 'long', name: 'lastMsgId'},
		        {type: 'int', name: 'limit'},
		        {type: 'bool', name: 'reverse'}
		    ]},
		    // 获取包含关键词的群组历史消息
		    searchTeamHistoryMsgs: { sid: idMap.team.id, cid: idMap.team.searchTeamHistoryMsgs, params: [
		        {type: 'long', name: 'to'},
		        {type: 'long', name: 'beginTime'},
		        {type: 'long', name: 'endTime'},
		        {type: 'String', name: 'keyword'},
		        {type: 'int', name: 'limit'},
		        {type: 'bool', name: 'reverse'}
		    ]},

		    // 添加好友
		    friendRequest: { sid: idMap.friend.id, cid: idMap.friend.friendRequest, params: [
		        {type: 'String', name: 'account'},
		        {type: 'byte', name: 'type'},
		        {type: 'String', name: 'ps'}
		    ]},
		    // 删除好友
		    deleteFriend: { sid: idMap.friend.id, cid: idMap.friend.deleteFriend, params: [
		        {type: 'String', name: 'account'}
		    ]},
		    // 更新好友
		    updateFriend: { sid: idMap.friend.id, cid: idMap.friend.updateFriend, params: [
		        {type: 'Property', name: 'friend'}
		    ]},
		    // 获取好友列表
		    getFriends: { sid: idMap.friend.id, cid: idMap.friend.getFriends, params: [
		        {type: 'long', name: 'timetag'}
		    ]},
		    getChatroomAddress: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroomAddress, params: [
		        {type: 'long', name: 'chatroomId'}
		    ]},
		    // 发送过滤消息
		    sendFilterMsg: { sid: idMap.filter.id, cid: idMap.filter.sendFilterMsg,  params: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 发送过滤自定义系统通知
		    sendFilterCustomSysMsg: { sid: idMap.filter.id, cid: idMap.filter.sendFilterCustomSysMsg, params: [
		        {type: 'Property', name: 'sysMsg'}
		    ]}
		});

		/**
		 * 回包配置
		 * response 说明: 如果没有 entity, entity 值就是 name
		 */
		var packetConfig = util.merge({}, configBase.packetConfig, {
		    // 登录
		    '2_3': {service: 'auth', cmd: 'login', response: [
		        {type: 'Property', name: 'loginRes'},
		        {type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort'}
		    ]},
		    // 被踢通知
		    '2_5': {service: 'auth', cmd: 'kicked', response: [
		        {type: 'Number', name: 'from'},
		        {type: 'Number', name: 'reason'}
		    ]},
		    // 退出登录
		    '2_6': {service: 'auth', cmd: 'logout'},
		    // 多端登陆通知
		    '2_7': {service: 'auth', cmd: 'multiPortLogin', response: [
		        {type: 'Number', name: 'state'},
		        {type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort'}
		    ]},
		    // 踢其它端
		    '2_8': {service: 'auth', cmd: 'kick', response: [
		        {type: 'StrArray', name: 'deviceIds'}
		    ]},

		    // 加入黑名单/从黑名单移除
		    '3_3': {service: 'user', cmd: 'markInBlacklist'},
		    // 加入黑名单/从黑名单移除多端同步
		    '3_103': {service: 'user', cmd: 'syncMarkInBlacklist', response: [
		        {type: 'String', name: 'account'},
		        {type: 'Boolean', name: 'isAdd'}
		    ]},
		    // 获取黑名单
		    '3_4': {service: 'user', cmd: 'getBlacklist', response: [
		        {type: 'StrArray', name: 'blacklist'}
		    ]},
		    // 加入静音列表/从静音列表移除
		    '3_5': {service: 'user', cmd: 'markInMutelist'},
		    // 加入静音列表/从静音列表移除多端同步
		    '3_105': {service: 'user', cmd: 'syncMarkInMutelist', response: [
		        {type: 'String', name: 'account'},
		        {type: 'Boolean', name: 'isAdd'}
		    ]},
		    // 获取静音列表
		    '3_6': {service: 'user', cmd: 'getMutelist', response: [
		        {type: 'StrArray', name: 'mutelist'}
		    ]},
		    // 获取黑名单和静音列表
		    '3_8': {service: 'user', cmd: 'getRelations', response: [
		        {type: 'PropertyArray', name: 'specialRelations', entity: 'specialRelation'},
		        {type: 'Number', name: 'timetag'}
		    ]},
		    '3_7': {service: 'user', cmd: 'getUsers', response: [
		        {type: 'PropertyArray', name: 'users', entity: 'user'}
		    ]},
		    '3_10': {service: 'user', cmd: 'updateMyInfo', response: [
		        {type: 'Number', name: 'timetag'}
		    ]},
		    '3_109': {service: 'user', cmd: 'syncMyInfo', response: [
		        {type: 'Property', name: 'user'},
		        {type: 'Number', name: 'timetag'}
		    ]},
		    '3_110': {service: 'user', cmd: 'syncUpdateMyInfo', response: [
		        {type: 'Property', name: 'user'}
		    ]},

		    // 通知包
		    '4_1': {service: 'notify'},
		    '4_2': {service: 'notify'},
		    '4_3': {service: 'notify', cmd: 'markRead'},
		    // 离线session+team消息同步通知
		    '4_4': {service: 'notify', cmd: 'syncOfflineMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    // 批量标记协议已读
		    '4_5': {service: 'notify', cmd: 'batchMarkRead'},
		    // 离线sysMsg通知
		    '4_6': {service: 'notify', cmd: 'syncOfflineSysMsgs', response: [
		        {type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg'}
		    ]},
		    // 漫游消息同步通知
		    '4_9': {service: 'notify', cmd: 'syncRoamingMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    // 离线过滤的消息通知
		    '4_100': {service: 'notify', cmd: 'syncOfflineFilterMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    // 离线过滤的sysMsg通知
		    '4_101': {service: 'notify', cmd: 'syncOfflineFilterSysMsgs', response: [
		        {type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg'}
		    ]},
		    // 同步
		    '5_1': {service: 'sync', cmd: 'syncDone', response: [
		        {type: 'Number', name: 'timetag'}
		    ]},
		    // 同步群成员
		    '5_2': {service: 'sync', cmd: 'syncTeamMembersDone', response: [
		        {type: 'Number', name: 'timetag'}
		    ]},
		    // 获取nos上传凭证
		    '6_2': {service: 'misc', cmd: 'getNosToken', response: [
		        {type: 'Property', name: 'nosToken'}
		    ]},
		    '6_5': {service: 'misc', cmd: 'audioToText', response: [
		        {type: 'String', name: 'text'}
		    ]},
		    // 处理图片
		    '6_6': {service: 'misc', cmd: 'processImage', response: [
		        {type: 'String', name: 'url'}
		    ]},
		    // 发送消息
		    '7_1': {service: 'talk', cmd: 'sendMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 消息通知
		    '7_2': {service: 'talk', cmd: 'msg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 系统通知通知
		    '7_3': {service: 'talk', cmd: 'sysMsg', response: [
		        {type: 'Property', name: 'sysMsg'}
		    ]},
		    // 获取单人历史消息
		    '7_6': {service: 'talk', cmd: 'getHistoryMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    // 发送自定义系统通知
		    '7_7': {service: 'talk', cmd: 'sendCustomSysMsg'},
		    // 获取包含关键词的单人历史消息
		    '7_8': {service: 'talk', cmd: 'searchHistoryMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    '7_9': {service: 'talk', cmd: 'deleteSessions'},
		    '7_10': {service: 'talk', cmd: 'getSessions', response: [
		        {type: 'StrArray', name: 'sessions'}
		    ]},
		    // 发送消息后发送方的多端同步通知
		    '7_101': {service: 'talk', cmd: 'syncSendMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 创建群
		    '8_1': {service: 'team', cmd: 'createTeam', response: [
		        {type: 'Property', name: 'team'}
		    ]},
		    // 发送群消息
		    '8_2': {service: 'team', cmd: 'sendTeamMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 群消息通知
		    '8_3': {service: 'team', cmd: 'teamMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 群消息列表通知
		    '8_4': {service: 'team', cmd: 'teamMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    // 拉人入群
		    '8_5': {service: 'team', cmd: 'addTeamMembers'},
		    // 踢人出群
		    '8_6': {service: 'team', cmd: 'removeTeamMembers'},
		    // 更新群
		    '8_7': {service: 'team', cmd: 'updateTeam', response: [
		        {type: 'Number', name: 'id'},
		        {type: 'Number', name: 'time'}
		    ]},
		    // 退出群
		    '8_8': {service: 'team', cmd: 'leaveTeam'},
		    // 获取群
		    '8_9': {service: 'team', cmd: 'getTeam', response: [
		        {type: 'Property', name: 'team'}
		    ]},
		    // 获取群列表
		    '8_10': {service: 'team', cmd: 'getTeams', response: [
		        {type: 'PropertyArray', name: 'teams', entity: 'team'},
		        {type: 'Number', name: 'timetag'}
		    ]},
		    // 获取群成员
		    '8_11': {service: 'team', cmd: 'getTeamMembers', response: [
		        {type: 'Number', name: 'teamId'},
		        {type: 'PropertyArray', name: 'members', entity: 'teamMember'},
		        {type: 'Number', name: 'timetag'}
		    ]},
		    // 解散群
		    '8_12': {service: 'team', cmd: 'dismissTeam'},
		    // 申请入群
		    '8_13': {service: 'team', cmd: 'applyTeam', response: [
		        {type: 'Property', name: 'team'}
		    ]},
		    // 同意入群申请
		    '8_14': {service: 'team', cmd: 'passTeamApply'},
		    // 拒绝入群申请
		    '8_15': {service: 'team', cmd: 'rejectTeamApply'},
		    // 添加群管理员
		    '8_16': {service: 'team', cmd: 'addTeamManagers'},
		    // 移除群管理员
		    '8_17': {service: 'team', cmd: 'removeTeamManagers'},
		    // 转让群
		    '8_18': {service: 'team', cmd: 'transferTeam'},
		    // 修改自己的群资料
		    '8_19': {service: 'team', cmd: 'updateInfoInTeam'},
		    // 修改别人的群昵称
		    '8_20': {service: 'team', cmd: 'updateNickInTeam'},
		    // 接受入群邀请
		    '8_21': {service: 'team', cmd: 'acceptTeamInvite', response: [
		        {type: 'Property', name: 'team'}
		    ]},
		    // 拒绝入群邀请
		    '8_22': {service: 'team', cmd: 'rejectTeamInvite'},
		    // 获取群组历史消息
		    '8_23': {service: 'team', cmd: 'getTeamHistoryMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    // 获取包含关键词的群组历史消息
		    '8_24': {service: 'team', cmd: 'searchTeamHistoryMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    // 同步群列表通知
		    '8_109': {service: 'team', cmd: 'syncTeams', response: [
		        {type: 'Number', name: 'timetag'},
		        {type: 'PropertyArray', name: 'teams', entity: 'team'}
		    ]},
		    // 同步群成员通知
		    '8_111': {service: 'team', cmd: 'syncTeamMembers', response: [
		        {type: 'Number', name: 'teamId'},
		        {type: 'PropertyArray', name: 'members', entity: 'teamMember'},
		        {type: 'Number', name: 'timetag'}
		    ]},
		    // 多端同步创建群通知
		    '8_101': {service: 'team', cmd: 'syncCreateTeam', response: [
		        {type: 'Property', name: 'team'}
		    ]},
		    // 多端同步发送群消息通知
		    '8_102': {service: 'team', cmd: 'syncSendTeamMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 多端同步更新群成员通知
		    '8_119': {service: 'team', cmd: 'syncUpdateTeamMember', response: [
		        {type: 'Property', name: 'teamMember'}
		    ]},

		    // 添加好友
		    '12_1': {service: 'friend', cmd: 'friendRequest'},
		    // 添加好友多端同步
		    '12_101': {service: 'friend', cmd: 'syncFriendRequest', response: [
		        {type: 'String', name: 'account'},
		        {type: 'Number', name: 'type'},
		        {type: 'String', name: 'ps'}
		    ]},
		    // 删除好友
		    '12_2': {service: 'friend', cmd: 'deleteFriend'},
		    // 删除好友多端同步
		    '12_102': {service: 'friend', cmd: 'syncDeleteFriend', response: [
		        {type: 'String', name: 'account'}
		    ]},
		    // 更新好友
		    '12_3': {service: 'friend', cmd: 'updateFriend'},
		    // 更新好友多端同步
		    '12_103': {service: 'friend', cmd: 'syncUpdateFriend', response: [
		        {type: 'Property', name: 'friend'}
		    ]},
		    // 获取好友列表
		    '12_4': {service: 'friend', cmd: 'getFriends', response: [
		        {type: 'PropertyArray', name: 'friends', entity: 'friend'},
		        {type: 'Number', name: 'timetag'}
		    ]},
		    // 同步好友列表
		    '12_5': {service: 'friend', cmd: 'syncFriends', response: [
		        {type: 'PropertyArray', name: 'friends', entity: 'friend'},
		        {type: 'Number', name: 'timetag'}
		    ]},
		    '12_6': {service: 'friend', cmd: 'syncFriendUsers', response: [
		        {type: 'PropertyArray', name: 'users', entity: 'user'},
		        {type: 'Number', name: 'timetag'}
		    ]},

		    '13_1': {service: 'chatroom', cmd: 'getChatroomAddress', response: [
		        {type: 'StrArray', name: 'address'}
		    ]},

		    // 发送过滤消息
		    '101_1': {service: 'filter', cmd: 'sendFilterMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 过滤消息通知
		    '101_2': {service: 'filter', cmd: 'filterMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    // 过滤系统通知通知
		    '101_3': {service: 'filter', cmd: 'filterSysMsg', response: [
		        {type: 'Property', name: 'sysMsg'}
		    ]},
		    // 发送过滤自定义系统通知
		    '101_7': {service: 'filter', cmd: 'sendFilterCustomSysMsg'}
		});

		module.exports = {
		    idMap: idMap,
		    cmdConfig: cmdConfig,
		    packetConfig: packetConfig
		};


	/***/ },
	/* 93 */
	/***/ function(module, exports) {

		module.exports = {
		    "login": {
		        "os": 4,
		        "sdkVersion": 6,
		        "protocolVersion": 9,
		        "deviceId": 13,
		        "appKey": 18,
		        "account": 19,
		        "browser": 24,
		        "token": 1000
		    },
		    "loginRes": {
		        "lastLoginDeviceId": 17,
		        "connectionId": 102,
		        "ip": 103,
		        "port": 104,
		        "country": 106
		    },
		    "loginPort": {
		        "type": 3,
		        "os": 4,
		        "mac": 5,
		        "deviceId": 13,
		        "account": 19,
		        "connectionId": 102,
		        "ip": 103,
		        "time": 109
		    },
		    "sync": {
		        "myInfo": 1,
		        "offlineMsgs": 2,
		        "teams": 3,
		        "roamingMsgs": 7,
		        "relations": 9,
		        "friends": 11,
		        "sessions": 12,
		        "friendUsers": 13,
		        "filterMsgs": 100
		    },
		    "team": {
		        "teamId": 1,
		        "name": 3,
		        "type": 4,
		        "owner": 5,
		        "level": 6,
		        "selfCustom": 7,
		        "valid": 8,
		        "memberNum": 9,
		        "memberUpdateTime": 10,
		        "createTime": 11,
		        "updateTime": 12,
		        "validToCurrentUser": 13,
		        "intro": 14,
		        "announcement": 15,
		        "joinMode": 16,
		        "bits": 17,
		        "custom": 18,
		        "serverCustom": 19
		    },
		    "teamMember": {
		        "teamId": 1,
		        "account": 3,
		        "type": 4,
		        "nickInTeam": 5,
		        "bits": 7,
		        "active": 8,
		        "valid": 9,
		        "joinTime": 10,
		        "updateTime": 11
		    },
		    "msg": {
		        "scene": 0,
		        "to": 1,
		        "from": 2,
		        "fromClientType": 4,
		        "fromDeviceId": 5,
		        "fromNick": 6,
		        "time": 7,
		        "type": 8,
		        "body": 9,
		        "attach": 10,
		        "idClient": 11,
		        "idServer": 12,
		        "resend": 13,
		        "userUpdateTime": 14,
		        "custom": 15,
		        "pushPayload": 16,
		        "pushContent": 17,
		        "isHistoryable": 100,
		        "isRoamingable": 101,
		        "isSyncable": 102,
		        "isMuted": 104,
		        "cc": 105,
		        "isPushable": 107,
		        "isOfflinable": 108,
		        "isUnreadable": 109,
		        "needPushNick": 110
		    },
		    "sysMsg": {
		        "time": 0,
		        "type": 1,
		        "to": 2,
		        "from": 3,
		        "ps": 4,
		        "attach": 5,
		        "idServer": 6,
		        "sendToOnlineUsersOnly": 7,
		        "apnsText": 8,
		        "pushPayload": 9,
		        "cc": 105,
		        "isPushable": 107,
		        "isUnreadable": 109,
		        "needPushNick": 110
		    },
		    "nosToken": {
		        "objectName": 1,
		        "token": 2,
		        "bucket": 3,
		        "expireTime": 4
		    },
		    "friend": {
		        "account": 4,
		        "flag": 5,
		        "beflag": 6,
		        "source": 7,
		        "alias": 8,
		        "bits": 9,
		        "custom": 10,
		        "createTime": 11,
		        "updateTime": 12
		    },
		    "user": {
		        "account": 1,
		        "nick": 3,
		        "avatar": 4,
		        "sign": 5,
		        "gender": 6,
		        "email": 7,
		        "birth": 8,
		        "tel": 9,
		        "custom": 10,
		        "createTime": 12,
		        "updateTime": 13
		    },
		    "specialRelation": {
		        "account": 0,
		        "isMuted": 1,
		        "isBlacked": 2,
		        "createTime": 3,
		        "updateTime": 4
		    },
		    "audioToText": {
		        "url": 2
		    },
		    "imageOp": {
		        "type": 0,
		        "stripMeta": 1,
		        "typeType": 2,
		        "blurRadius": 3,
		        "blurSigma": 4,
		        "qualityQuality": 5,
		        "cropX": 6,
		        "cropY": 7,
		        "cropWidth": 8,
		        "cropHeight": 9,
		        "rotateAngle": 10,
		        "pixelPixel": 11,
		        "thumbnailMode": 12,
		        "thumbnailWidth": 13,
		        "thumbnailHeight": 14,
		        "thumbnailAxisX": 15,
		        "thumbnailAxisY": 16,
		        "thumbnailCenterX": 17,
		        "thumbnailCenterY": 18,
		        "thumbnailEnlarge": 19,
		        "thumbnailToStatic": 20,
		        "watermarkType": 21,
		        "watermarkGravity": 22,
		        "watermarkDissolve": 23,
		        "watermarkDx": 24,
		        "watermarkDy": 25,
		        "watermarkImage": 26,
		        "watermarkText": 27,
		        "watermarkFont": 28,
		        "watermarkFontSize": 29,
		        "watermarkFontColor": 30,
		        "interlace": 31
		    }
		};

	/***/ },
	/* 94 */
	/***/ function(module, exports) {

		module.exports = {
		    "login": {
		        "4": "os",
		        "6": "sdkVersion",
		        "9": "protocolVersion",
		        "13": "deviceId",
		        "18": "appKey",
		        "19": "account",
		        "24": "browser",
		        "1000": "token"
		    },
		    "loginRes": {
		        "17": "lastLoginDeviceId",
		        "102": "connectionId",
		        "103": "ip",
		        "104": "port",
		        "106": "country"
		    },
		    "loginPort": {
		        "3": "type",
		        "4": "os",
		        "5": "mac",
		        "13": "deviceId",
		        "19": "account",
		        "102": "connectionId",
		        "103": "ip",
		        "109": "time"
		    },
		    "sync": {
		        "1": "myInfo",
		        "2": "offlineMsgs",
		        "3": "teams",
		        "7": "roamingMsgs",
		        "9": "relations",
		        "11": "friends",
		        "12": "sessions",
		        "13": "friendUsers",
		        "100": "filterMsgs"
		    },
		    "team": {
		        "1": "teamId",
		        "3": "name",
		        "4": "type",
		        "5": "owner",
		        "6": "level",
		        "7": "selfCustom",
		        "8": "valid",
		        "9": "memberNum",
		        "10": "memberUpdateTime",
		        "11": "createTime",
		        "12": "updateTime",
		        "13": "validToCurrentUser",
		        "14": "intro",
		        "15": "announcement",
		        "16": "joinMode",
		        "17": "bits",
		        "18": "custom",
		        "19": "serverCustom"
		    },
		    "teamMember": {
		        "1": "teamId",
		        "3": "account",
		        "4": "type",
		        "5": "nickInTeam",
		        "7": "bits",
		        "8": "active",
		        "9": "valid",
		        "10": "joinTime",
		        "11": "updateTime"
		    },
		    "msg": {
		        "0": "scene",
		        "1": "to",
		        "2": "from",
		        "4": "fromClientType",
		        "5": "fromDeviceId",
		        "6": "fromNick",
		        "7": "time",
		        "8": "type",
		        "9": "body",
		        "10": "attach",
		        "11": "idClient",
		        "12": "idServer",
		        "13": "resend",
		        "14": "userUpdateTime",
		        "15": "custom",
		        "16": "pushPayload",
		        "17": "pushContent",
		        "100": "isHistoryable",
		        "101": "isRoamingable",
		        "102": "isSyncable",
		        "104": "isMuted",
		        "105": "cc",
		        "107": "isPushable",
		        "108": "isOfflinable",
		        "109": "isUnreadable",
		        "110": "needPushNick"
		    },
		    "sysMsg": {
		        "0": "time",
		        "1": "type",
		        "2": "to",
		        "3": "from",
		        "4": "ps",
		        "5": "attach",
		        "6": "idServer",
		        "7": "sendToOnlineUsersOnly",
		        "8": "apnsText",
		        "9": "pushPayload",
		        "105": "cc",
		        "107": "isPushable",
		        "109": "isUnreadable",
		        "110": "needPushNick"
		    },
		    "nosToken": {
		        "1": "objectName",
		        "2": "token",
		        "3": "bucket",
		        "4": "expireTime"
		    },
		    "friend": {
		        "4": "account",
		        "5": "flag",
		        "6": "beflag",
		        "7": "source",
		        "8": "alias",
		        "9": "bits",
		        "10": "custom",
		        "11": "createTime",
		        "12": "updateTime"
		    },
		    "user": {
		        "1": "account",
		        "3": "nick",
		        "4": "avatar",
		        "5": "sign",
		        "6": "gender",
		        "7": "email",
		        "8": "birth",
		        "9": "tel",
		        "10": "custom",
		        "12": "createTime",
		        "13": "updateTime"
		    },
		    "specialRelation": {
		        "0": "account",
		        "1": "isMuted",
		        "2": "isBlacked",
		        "3": "createTime",
		        "4": "updateTime"
		    },
		    "audioToText": {
		        "2": "url"
		    },
		    "imageOp": {
		        "0": "type",
		        "1": "stripMeta",
		        "2": "typeType",
		        "3": "blurRadius",
		        "4": "blurSigma",
		        "5": "qualityQuality",
		        "6": "cropX",
		        "7": "cropY",
		        "8": "cropWidth",
		        "9": "cropHeight",
		        "10": "rotateAngle",
		        "11": "pixelPixel",
		        "12": "thumbnailMode",
		        "13": "thumbnailWidth",
		        "14": "thumbnailHeight",
		        "15": "thumbnailAxisX",
		        "16": "thumbnailAxisY",
		        "17": "thumbnailCenterX",
		        "18": "thumbnailCenterY",
		        "19": "thumbnailEnlarge",
		        "20": "thumbnailToStatic",
		        "21": "watermarkType",
		        "22": "watermarkGravity",
		        "23": "watermarkDissolve",
		        "24": "watermarkDx",
		        "25": "watermarkDy",
		        "26": "watermarkImage",
		        "27": "watermarkText",
		        "28": "watermarkFont",
		        "29": "watermarkFontSize",
		        "30": "watermarkFontColor",
		        "31": "interlace"
		    }
		};

	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var xhr = __webpack_require__(69);
		var config = __webpack_require__(26);
		var logger = __webpack_require__(40);

		IMProtocolFn.refreshSocketUrl = function() {
		    var self = this;
		    var options = self.options;
		    var info = config.info;
		    var lbsUrl = config.lbsUrl + 
		            '?k=' + options.appKey + 
		            '&id=' + options.account + 
		            '&sv=' + info.sdkVersion + 
		            '&pv=' + info.protocolVersion;
		    logger.log('will refresh lbs', lbsUrl);
		    xhr({
		        method: 'GET',
		        cors: true,
		        url: lbsUrl,
		        timeout: config.xhrTimeout
		    }, function(error, response, body) {
		        if (!error) {
		            self.socketUrls = [];
		            body = JSON.parse(body);
		            body.common.link.forEach(function(url) {
		                self.socketUrls.push(config.formatSocketUrl(url));
		            });
		            body.common['link.default'].forEach(function(url) {
		                url = config.formatSocketUrl(url);
		                if (self.socketUrls.indexOf(url) === -1) {
		                    self.socketUrls.push(url);
		                }
		            });
		            self.connectToUrl(self.getNextSocketUrl());
		        } else {
		            self.onDisconnect();
		        }
		    });
		};

		// TODO just for test;
		// IMProtocolFn.getNextSocketUrl = function() {
		//     url = 'https://testlink.netease.im:9092';
		// };
		// TODO test end


	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var logger = __webpack_require__(40);
		var LoginPort = __webpack_require__(46);

		IMProtocolFn.assembleLogin = function() {
		    return {
		        login: this.assembleIMLogin()
		    };
		};

		// 登录之后打开数据库
		IMProtocolFn.afterLogin = function() {
		    var self = this;
		    var db = self.db;
		    if (db.enable) {
		        self.db.init(self.account).then(function() {
		            self.syncData();
		        }, function(error) {
		            logger.warn('no db', error);
		            self.syncData();
		        });
		    } else {
		        logger.warn('no db');
		        self.syncData();
		    }
		};

		// 处理认证协议
		IMProtocolFn.processAuth = function(packet) {
		    var self = this;
		    switch (packet.cmd) {
		    // 登录回报
		    case 'login':
		        if (!packet.error) {
		            packet.obj = packet.content.loginRes;
		            self.onLoginPortsChange(packet.content.loginPorts, 2);
		        }
		        break;
		    // 被踢通知
		    case 'kicked':
		        self.onKicked(packet);
		        return;
		    // 多端登陆通知
		    case 'multiPortLogin':
		        self.onLoginPortsChange(packet.content.loginPorts, packet.content.state);
		        break;
		    // 踢其它端
		    case 'kick':
		        if (!packet.error) {
		            packet.obj.deviceIds = packet.content.deviceIds;
		        }
		        break;
		    default:
		        break;
		    }
		};

		IMProtocolFn.onLoginPortsChange = function(loginPorts, state) {
		    if (!!loginPorts && !!loginPorts.length) {
		        var online = true;
		        switch (state) {
		        case 2:
		            online = true;
		            break;
		        case 3:
		            online = false;
		            break;
		        default:
		            break;
		        }
		        loginPorts.forEach(function(p) {
		            p.type = LoginPort.reverseType(p.type);
		            p.time = +p.time;
		            p.online = online;
		        });
		        logger.info('on login ports', loginPorts);
		        this.options.onloginportschange(loginPorts);
		    }
		};

		IMProtocolFn.kickedReasons = [
		    '',
		    'samePlatformKick',
		    'serverKick',
		    'otherPlatformKick'
		];

		IMProtocolFn.kickedMessages = [
		    '',
		    '不允许同一个帐号在多个地方同时登录',
		    '被服务器踢了',
		    '被其它端踢了'
		];


	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var util = __webpack_require__(10);
		var undef = util.undef;
		var objs2ids = util.objs2ids;
		var objs2accounts = util.objs2accounts;
		var teams2ids = util.teams2ids;
		var logger = __webpack_require__(40);

		/*
		 * 同步数据, 强制同步离线消息, 其它同步做成可选的
		 */
		IMProtocolFn.syncData = function() {
		    var self = this;
		    var db = self.db;
		    var options = self.options;
		    var supportDb = db.enable;
		    if (supportDb) {
		        self.db.getTimetags().then(function(timetags) {
		            bingo(timetags);
		        }, function() {
		            bingo();
		        });
		    } else {
		        bingo(self.timetags);
		    }
		    function bingo (timetags) {
		        self.syncPromiseArray = [];
		        self.syncResult = {};
		        self.syncTeamMembersPromiseArray = [];
		        self.syncTeamMembersResult = {};

		        // 默认同步这些东西
		        util.verifyBooleanWithDefault(options, 'syncRelations syncFriends syncFriendUsers syncTeams syncRoamingMsgs syncTeamMembers', true);
		        // 默认不同步过滤的消息（目前只有云商服用到过滤消息）
		        util.verifyBooleanWithDefault(options, 'syncFilter', false);

		        var sync = {};
		        timetags = timetags || {};
		        // 强制同步 我的信息、离线消息
		        sync.myInfo = timetags.myInfo || 0;
		        sync.offlineMsgs = 0;
		        // 可选同步
		        if (options.syncRelations) { sync.relations = timetags.relations || 0; }
		        if (options.syncFriends) { sync.friends = timetags.friends || 0; }
		        if (options.syncFriendUsers) { sync.friendUsers = timetags.friendUsers || 0; }
		        if (options.syncTeams) { sync.teams = timetags.teams || 0; }
		        if (options.syncRoamingMsgs) { sync.roamingMsgs = timetags.roamingMsgs || 0; }
		        // 不同步最近会话列表, 从漫游消息和离线消息构造最近会话列表
		        // 所以如果没有漫游消息和离线消息, 那么就没有最近会话列表
		        // if (false) { sync.sessions = 0; }
		        // 目前只有云商服用到这个配置, 未在文档上列出
		        if (options.syncFilter) { sync.filterMsgs = 0; }
		        self.sendCmd('sync', {
		            sync: sync
		        }, self.onSyncData.bind(self));
		    }
		};

		IMProtocolFn.onSyncData = function(error, obj) {
		    this.onMiscError(error, obj, 'sync error');
		};

		IMProtocolFn.processSync = function(packet) {
		    var self = this;
		    switch (packet.cmd) {
		    // 同步
		    case 'syncDone':
		        self.timetags.sync = packet.content.timetag;
		        self.onSyncDone();
		        break;
		    // 同步群成员
		    case 'syncTeamMembersDone':
		        self.onSyncTeamMembersDone();
		        break;
		    default:
		        break;
		    }
		};

		IMProtocolFn.onSyncDone = function() {
		    var self = this;
		    var db = self.db;
		    var supportDb = db.enable,
		        options = self.options,
		        promiseArray = self.syncPromiseArray,
		        result = self.syncResult,
		        promise,
		        blacklist,
		        invalidBlacklist,
		        mutelist,
		        invalidMutelist,
		        friends,
		        invalidFriends,
		        myInfo,
		        users,
		        teams,
		        invalidTeams,
		        sessions,
		        roamingMsgs,
		        offlineMsgs,
		        offlineFilterMsgs,
		        offlineSysMsgs,
		        offlineCustomSysMsgs,
		        offlineFilterSysMsgs,
		        offlineFilterCustomSysMsgs,
		        sysMsgUnread;

		    if (!!promiseArray.length) {
		        Promise.all(promiseArray).then(afterSync, function(e) {
		            self.onDBError(e);
		        });
		    } else {
		        afterSync();
		    }

		    function afterSync() {
		        logger.warn('after sync', util.promises2cmds(promiseArray));
		        promiseArray = [];
		        blacklist = result.blacklist;
		        invalidBlacklist = result.invalidBlacklist || [];
		        mutelist = result.mutelist;
		        invalidMutelist = result.invalidMutelist || [];
		        friends = result.friends;
		        invalidFriends = result.invalidFriends || [];
		        myInfo = result.myInfo;
		        users = result.users;
		        teams = result.teams;
		        invalidTeams = result.invalidTeams || [];
		        sessions = result.sessions;
		        roamingMsgs = result.roamingMsgs;
		        offlineMsgs = result.offlineMsgs;
		        offlineFilterMsgs = result.offlineFilterMsgs;
		        offlineSysMsgs = result.offlineSysMsgs;
		        offlineCustomSysMsgs = result.offlineCustomSysMsgs;
		        offlineFilterSysMsgs = result.offlineFilterSysMsgs;
		        offlineFilterCustomSysMsgs = result.offlineFilterCustomSysMsgs;
		        sysMsgUnread = result.sysMsgUnread;

		        if (sessions) {
		            var arr = [];
		            Object.keys(sessions).forEach(function(key) {
		                arr.push(sessions[key]);
		            });
		            sessions = arr.sort(function(s1, s2) {
		                return s2.updateTime - s1.updateTime;
		            });
		        }
		        // 如果启用了数据库, 并且还没有同步过, 那么从数据库获取全量数据
		        if (supportDb && !self.hasSynced) {
		            pullFullData();
		        }
		        if (!!promiseArray.length) {
		            Promise.all(promiseArray).then(notifyData, function(event) {
		                self.onDBError(event);
		            });
		        } else {
		            notifyData();
		        }
		    }

		    function pullFullData() {
		        // 关系
		        if (options.syncRelations) {
		            promise = db.getRelations().then(function(result) {
		                blacklist = result[0];
		                mutelist = result[1];
		                blacklist.invalid = invalidBlacklist;
		                mutelist.invalid = invalidMutelist;
		            }, function(event) {
		                event._msg = 'on relations error';
		                return event;
		            });
		            promiseArray.push(promise);
		        }
		        // 好友
		        if (options.syncFriends) {
		            promise = db.getFriends().then(function(records) {
		                friends = records;
		                friends.invalid = invalidFriends;
		            }, function(event) {
		                event._msg = 'on friends error';
		                return event;
		            });
		            promiseArray.push(promise);
		        }
		        // 我的名片
		        if (undef(myInfo)) {
		            promise = db.getUser(self.account).then(function(record) {
		                myInfo = record;
		            }, function(event) {
		                event._msg = 'on myInfo error';
		                return event;
		            });
		            promiseArray.push(promise);
		        }
		        // 好友名片
		        if (options.syncFriendUsers) {
		            promise = db.getAllUsers().then(function(records) {
		                users = records;
		            }, function(event) {
		                event._msg = 'on users error';
		                return event;
		            });
		            promiseArray.push(promise);
		        }
		        // 群
		        if (options.syncTeams) {
		            promise = db.getTeams().then(function(records) {
		                teams = records;
		                teams.invalid = invalidTeams;
		            }, function(event) {
		                event._msg = 'on teams error';
		                return event;
		            });
		            promiseArray.push(promise);
		        }
		        // 会话
		        promise = db.getSessions().then(function(records) {
		            sessions = records;
		        }, function(event) {
		            event._msg = 'on sessions error';
		            return event;
		        });
		        promiseArray.push(promise);
		        // 系统通知未读数
		        promise = db.getSysMsgUnread().then(function(records) {
		            sysMsgUnread = records;
		        }, function(event) {
		            event._msg = 'on sysMsgUnread error';
		            return event;
		        });
		        promiseArray.push(promise);
		    }

		    function notifyData() {
		        // 用 setTimeout 模拟异步线程
		        setTimeout(notifyDataAsync, 0);
		    }

		    function notifyDataAsync() {
		        // 是否要等待同步漫游消息时间戳
		        var timetags = [],
		            timetag,
		            msgs;

		        if (!!blacklist) {
		            logger.info('on blacklist', objs2accounts(blacklist), blacklist);
		            logger.info('on mutelist', objs2accounts(mutelist), mutelist);
		            options.onblacklist(blacklist);
		            options.onmutelist(mutelist);
		        }

		        if (!!friends) {
		            logger.info('on friends', objs2accounts(friends), friends);
		            options.onfriends(friends);
		        }

		        if (!!myInfo) {
		            logger.info('on myInfo', myInfo);
		            // 记录我的信息
		            self.myInfo = myInfo;
		            options.onmyinfo(util.copy(myInfo));
		        }

		        if (!!users) {
		            logger.info('on users', objs2accounts(users), users);
		            options.onusers(users);
		        }
		        
		        if (!!teams) {
		            logger.info('on teams', teams2ids(teams), teams);
		            options.onteams(teams);
		        }

		        if (!!sessions) {
		            logger.info('on sessions', objs2ids(sessions), sessions);
		            options.onsessions(sessions);
		        }

		        if (!!roamingMsgs) {
		            roamingMsgs.forEach(function(i) {
		                timetags.push(i.timetag);
		                msgs = i.msgs;
		                if (!!msgs.length) {
		                    logger.info('on roaming msgs', i.sessionId, msgs.length, msgs);
		                    options.onroamingmsgs(i);
		                }
		            });
		        }

		        if (!!offlineMsgs) {
		            offlineMsgs.forEach(function(i) {
		                timetags.push(i.timetag);
		                msgs = i.msgs;
		                if (!!msgs.length) {
		                    logger.info('on offline msgs', i.sessionId, msgs.length, msgs);
		                    options.onofflinemsgs(i);
		                }
		            });
		        }

		        if (!!offlineFilterMsgs) {
		            offlineFilterMsgs.forEach(function(i) {
		                timetags.push(i.timetag);
		                msgs = i.msgs;
		                if (!!msgs.length) {
		                    logger.info('on offline filter msgs', i.sessionId, msgs.length, msgs);
		                    options.onofflinefiltermsgs(msgs);
		                }
		            });
		        }

		        if (!!offlineSysMsgs) {
		            logger.info('on offline sys msgs', offlineSysMsgs.length, offlineSysMsgs);
		            options.onofflinesysmsgs(offlineSysMsgs);
		        }

		        // 目前并没有这种类型的消息
		        if (!!offlineFilterSysMsgs) {
		            logger.info('on offline filter sys msgs', offlineFilterSysMsgs.length, offlineFilterSysMsgs);
		            options.onofflinefiltersysmsgs(offlineFilterSysMsgs);
		        }

		        if (!!offlineCustomSysMsgs) {
		            logger.info('on offline custom sys msgs', offlineCustomSysMsgs.length, offlineCustomSysMsgs);
		            options.onofflinecustomsysmsgs(offlineCustomSysMsgs);
		        }

		        if (!!offlineFilterCustomSysMsgs) {
		            logger.info('on offline filter custom sys msgs', offlineFilterCustomSysMsgs.length, offlineFilterCustomSysMsgs);
		            options.onofflinefiltercustomsysmsgs(offlineFilterCustomSysMsgs);
		        }

		        if (!!sysMsgUnread) {
		            logger.info('on sysMsgUnread', sysMsgUnread);
		            options.onsysmsgunread(sysMsgUnread);
		        }

		        // timetags 时间戳数组长度为0 表示没有漫游消息和离线消息
		        // 如果没有漫游消息和离线消息, 不需要更新漫游消息时间戳
		        // 如果有, 需要更新漫游消息时间戳, 取所有漫游消息和离线消息里面最大的时间戳
		        if (!!timetags.length) {
		            timetag = Math.max.apply(Math, timetags);
		            self.updateRoamingMsgTimetag(timetag).then(bingo, bingo);
		        } else {
		            bingo();
		        }

		        // 清空同步缓存数据
		        self.syncPromiseArray = null;
		        self.syncResult = null;
		    }

		    function bingo() {
		        logger.info('sync done');
		        self.hasSynced = true;
		        options.onsyncdone();

		        // 如果要同步群成员, 并且有群（全量或者增量）, 则同步群成员
		        // 如果不要同步群成员, 或者没有群（本来就没有群或者没有增量更新）, 当做群成员已经同步完成
		        if (options.syncTeamMembers && !!teams && !!teams.length) {
		            self.syncTeamMembers(teams);
		        } else {
		            setTimeout(function() {
		                self.onSyncTeamMembersDone();
		            }, 0);
		        }
		    }

		};

		IMProtocolFn.syncTeamMembers = function(teams) {
		    var self = this;
		    var db = self.db;
		    if (db.enable) {
		        db.getTeamMemberTimetags().then(function(timetags) {
		            bingo(timetags);
		        }, function() {
		            bingo();
		        });
		    } else {
		        bingo(self.timetags);
		    }
		    function bingo(timetags) {
		        var sync = {};
		        timetags = timetags || {};
		        teams.forEach(function(team) {
		            sync[team.teamId] = timetags['team-' + team.teamId] || 0;
		        }, self);
		        self.sendCmd('syncTeamMembers', {
		            sync: sync
		        }, self.onSyncTeamMembers.bind(self));
		    }
		};

		IMProtocolFn.onSyncTeamMembers = function(error, obj) {
		    this.onMiscError(error, obj, 'sync teamMembers error');
		};

		/*
		 * - 同步时如果启用了数据库, 统一在同步完成后通知开发者
		 * - 同步时如果没启用数据库, 会在同步过程中通知开发者
		 * - 请参考 IMProtocol#onTeamMembers~getAll
		 */
		IMProtocolFn.onSyncTeamMembersDone = function() {
		    var self = this,
		        db = self.db,
		        options = self.options,
		        result = self.syncTeamMembersResult,
		        promiseArray = self.syncTeamMembersPromiseArray,
		        promise;

		    if (!!promiseArray.length) {
		        Promise.all(promiseArray).then(afterSync, function(e) {
		            self.onDBError(e);
		        });
		    } else {
		        afterSync();
		    }

		    // 所有同步的 Promise 均已完成
		    function afterSync() {
		        logger.warn('after sync members', util.promises2cmds(promiseArray));
		        promiseArray = [];
		        // 如果启用了数据库, 并且还没有同步过, 那么从数据库获取全量数据
		        if (db.enable && !self.hasSyncedTeamMembers) {
		            pullFullData();
		        } else {
		            notifyData();
		        }
		    }

		    function pullFullData() {
		        if (!options.syncTeams || !options.syncTeamMembers) {return bingo();}
		        db.getTeams().then(function(teams) {
		            teams.forEach(function(team) {
		                var teamId = team.teamId;
		                promise = db.getTeamMembers(teamId).then(function(members) {
		                    result[teamId] = members;
		                }, function(event) {
		                    event._msg = 'on members error';
		                    return event;
		                });
		                promiseArray.push(promise);
		            });
		            if (!!promiseArray.length) {
		                Promise.all(promiseArray).then(notifyData, function(e) {
		                    self.onDBError(e);
		                });
		            } else {
		                notifyData();
		            }
		        }, function(event) {
		            event._msg = 'on members error';
		            self.onDBError(event);
		        });
		    }

		    function notifyData() {
		        // 用 setTimeout 模拟异步线程
		        setTimeout(notifyDataAsync, 0);
		    }

		    function notifyDataAsync() {
		        var members,
		            invalid;
		        Object.keys(result).forEach(function(teamId) {
		            if (teamId.indexOf('invalid') === -1) {
		                members = result[teamId];
		                invalid = result[teamId+'-invalid'] || [];
		                members.invalid = invalid;
		                onTeamMembers(teamId, members);
		            }
		        });
		        bingo();
		    }

		    function onTeamMembers(teamId, members) {
		        logger.info('on members', teamId, objs2accounts(members), members);
		        options.onteammembers({
		            teamId: teamId,
		            members: members
		        });
		    }

		    function bingo() {
		        logger.info('sync members done');
		        self.hasSyncedTeamMembers = true;
		        options.onsyncteammembersdone();
		        // 清空同步缓存数据
		        self.syncTeamMembersResult = null;
		        self.syncTeamMembersPromiseArray = null;
		    }

		};


	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var util = __webpack_require__(10);
		var objs2accounts = util.objs2accounts;
		var logger = __webpack_require__(40);
		var SpecialRelation = __webpack_require__(99);
		var User = __webpack_require__(100);

		IMProtocolFn.processUser = function(packet) {
		    var self = this,
		        db = self.db,
		        obj = packet.obj,
		        error = packet.error,
		        content = packet.content,
		        users;

		    switch (packet.cmd) {
		    // 加入黑名单/从黑名单移除
		    case 'markInBlacklist':
		        if (!error) { self.markInBlacklist(obj); }
		        break;
		    case 'syncMarkInBlacklist':
		        self.markInBlacklist(content, true);
		        break;
		    // 加入静音列表/从静音列表移除
		    case 'markInMutelist':
		        if (!error) { self.markInMutelist(obj); }
		        break;
		    case 'syncMarkInMutelist':
		        self.markInMutelist(content, true);
		        break;
		    // 获取黑名单和静音列表
		    case 'getRelations':
		        if (!error) { self.onRelations(packet); }
		        break;
		    case 'syncMyInfo':
		        self.onMyInfo(packet, true);
		        break;
		    case 'updateMyInfo':
		        if (!error) {
		            obj.updateTime = content.timetag;
		            self.onUpdateMyInfo(packet, obj);
		        }
		        break;
		    case 'syncUpdateMyInfo':
		        self.onUpdateMyInfo(packet, content.user, true);
		        break;
		    case 'getUsers':
		        if (!error) {
		            users = content.users.map(function(user) {
		                return User.reverse(user);
		            });
		            packet.obj = users;
		            if (db.enable) {
		                db.updateUsersIfIsFriend(users);
		            }
		        }
		        break;
		    default:
		        break;
		    }
		};

		/*
		 * 处理我的信息
		 */
		IMProtocolFn.onMyInfo = function(packet) {
		    var self = this,
		        db = self.db,
		        error = packet.error,
		        content = packet.content,
		        isSync = true,
		        user;

		    // 用于同步的Promise
		    var promise = new Promise(function(resolve, reject) {
		        if (!error) {
		            // 处理数据
		            parseData();
		            // 如果支持数据库, 那么合并数据, 否则直接 bingo
		            if (db.enable) {
		                mergeData(resolve, reject);
		            } else {
		                bingo();
		                resolve();
		            }
		        } else {
		            // 同步时应该没有error, 所以这里应该走不到
		            reject(error);
		        }
		    });
		    if (isSync) {
		        promise.cmd = 'myInfo';
		        self.syncPromiseArray.push(promise);
		    }

		    function parseData() {
		        user = User.reverse(content.user);
		        logger.warn('parse myInfo', user);
		    }

		    function mergeData(resolveSync, rejectSync) {
		        // 不用设置用于主动获取的 Promise
		        db.mergeMyInfo(user, isSync).then(function() {
		            bingo();
		            resolveSync();
		        }).then(undefined, function(event) {
		            event._msg = 'merge myInfo error';
		            rejectSync(event);
		        });
		    }

		    function bingo() {
		        self.timetags.myInfo = user.updateTime;
		        if (isSync) {
		            // 如果是同步, 那么统一在 onSyncDone 里面通知开发者
		            self.syncResult.myInfo = user;
		        }
		    }

		};

		/**
		 * 更新我的信息
		 * @private
		 * @param  {Object}  user     增量的用户信息
		 * @param  {Boolean} isSynced 是否是多端同步
		 */
		IMProtocolFn.onUpdateMyInfo = function(packet, obj, isSynced) {
		    var self = this;
		    var db = self.db;
		    var userUpdate = User.reverse(obj);
		    var user = util.merge(self.myInfo, userUpdate);
		    self.myInfo = user;
		    // 如果是多端同步, 那么通知开发者
		    if (isSynced) {
		        logger.info('on update myInfo', user);
		        self.options.onupdatemyinfo(user);
		    } else {
		        packet.obj = user;
		    }
		    if (db.enable) {
		        userUpdate.account = self.account;
		        db.updateUser(userUpdate);
		    }
		};

		/*
		 * 处理黑名单和静音列表, 同步和主动获取都会走这个逻辑
		 */
		IMProtocolFn.onRelations = function(packet) {
		    var self = this,
		        db = self.db,
		        error = packet.error,
		        // 有同步和主动获取两种情况
		        isSync = self.packetFromSync(packet),
		        rawRelations = packet.content.specialRelations,
		        hasChange = true,
		        timetag,
		        blacklist = [],
		        invalidBlacklist = [],
		        mutelist = [],
		        invalidMutelist = [];

		    // 用于同步的Promise
		    var promise = new Promise(function(resolve, reject) {
		        if (!error) {
		            // 处理数据
		            parseData();
		            // 如果支持数据库, 那么合并数据, 否则直接 bingo
		            if (db.enable) {
		                mergeData(resolve, reject);
		            } else {
		                bingo();
		                resolve();
		            }
		        } else {
		            // 同步时应该没有error, 所以这里应该走不到
		            reject(error);
		        }
		    });
		    if (isSync) {
		        promise.cmd = 'relations';
		        self.syncPromiseArray.push(promise);
		    }

		    function parseData() {
		        rawRelations.forEach(function(sr) {
		            sr = SpecialRelation.parse(sr);
		            var item = {
		                account: sr.account,
		                createTime: sr.createTime,
		                updateTime: sr.updateTime
		            };
		            if (sr.isBlacked) {
		                blacklist.push(item);
		            } else {
		                invalidBlacklist.push(item);
		            }
		            if (sr.isMuted) {
		                mutelist.push(item);
		            } else {
		                invalidMutelist.push(item);
		            }
		        });
		        logger.warn('parse blacklist', objs2accounts(blacklist), blacklist, 'delete', objs2accounts(invalidBlacklist), invalidBlacklist);
		        logger.warn('parse mutelist', objs2accounts(mutelist), mutelist, 'delete', objs2accounts(invalidMutelist), invalidMutelist);
		        if (!rawRelations.length) {
		            hasChange = false;
		        } else {
		            hasChange = true;
		            timetag = packet.content.timetag;
		        }
		    }

		    function mergeData(resolveSync, rejectSync) {
		        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
		        packet.promise = new Promise(function(resolve, reject) {
		            if (hasChange) {
		                // 增量更新数据库
		                db.mergeRelations(blacklist, invalidBlacklist, mutelist, invalidMutelist, timetag).then(function() {
		                    afterMergeData();
		                }).then(undefined, function(event) {
		                    event._msg = 'merge relations error';
		                    reject(event);
		                    rejectSync(event);
		                });
		            } else {
		                logger.warn('no merge relations');
		                afterMergeData();
		            }
		            function afterMergeData() {
		                // 如果不是同步, 那么需要获取完整的列表
		                if (!isSync) {
		                    db.getRelations().then(function(result) {
		                        blacklist = result[0];
		                        mutelist = result[1];
		                        bingo();
		                        resolve();
		                        resolveSync();
		                    }).then(undefined, function(event) {
		                        event._msg = 'get relations error';
		                        reject(event);
		                        rejectSync(event);
		                    });
		                } else {
		                    bingo();
		                    resolve();
		                    resolveSync();
		                }
		            }
		        }).then(undefined, function(event) {
		            event._msg = 'merge relations data error';
		            rejectSync(event);
		            throw event;
		        });
		    }

		    function bingo() {
		        self.timetags.relations = timetag;
		        blacklist.invalid = invalidBlacklist;
		        mutelist.invalid = invalidMutelist;
		        // 返回数据
		        if (isSync) {
		            // 如果是同步, 那么统一在onSyncDone里面通知开发者
		            self.syncResult.blacklist = blacklist;
		            self.syncResult.mutelist = mutelist;
		            self.syncResult.invalidBlacklist = invalidBlacklist;
		            self.syncResult.invalidMutelist = invalidMutelist;
		        } else {
		            logger.warn('get relations', blacklist, mutelist);
		            packet.obj.blacklist = blacklist;
		            packet.obj.mutelist = mutelist;
		        }
		    }

		};

		/**
		 * 标记黑名单
		 * @private
		 * @param  {Object}  obj      请求对象
		 * @param  {Boolean} isSynced 是否是多端同步
		 * @return {Void}
		 */
		IMProtocolFn.markInBlacklist = function(obj, isSynced) {
		    var self = this;
		    var db = self.db;
		    obj.record = {
		        account: obj.account,
		        updateTime: +new Date()
		    };
		    if (db.enable) {
		        db.markInBlacklist(obj);
		    }
		    if (isSynced) {
		        logger.info('on sync markInBlacklist', obj);
		        self.options.onsyncmarkinblacklist(obj);
		    }
		};

		/**
		 * 标记静音列表
		 * @private
		 * @param  {Object}  obj      请求对象
		 * @param  {Boolean} isSynced 是否是多端同步
		 * @return {Void}
		 */
		IMProtocolFn.markInMutelist = function(obj, isSynced) {
		    var self = this;
		    var db = self.db;
		    obj.record = {
		        account: obj.account,
		        updateTime: +new Date()
		    };
		    if (db.enable) {
		        db.markInMutelist(obj);
		    }
		    if (isSynced) {
		        logger.info('on sync markInMutelist', obj);
		        self.options.onsyncmarkinmutelist(obj);
		    }
		};


	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);

		/**
		 * 黑名单/静音名单
		 * @constructor
		 * @name Relation
		 * @property {String}   account     账号
		 * @property {Long}     updateTime  更新时间
		 */
		function SpecialRelation() {

		}

		SpecialRelation.parse = function(sr) {
		    var obj = util.copy(sr);
		    obj.isBlacked = obj.isBlacked === '1';
		    obj.isMuted = obj.isMuted === '1';
		    obj.createTime = +obj.createTime;
		    obj.updateTime = +obj.updateTime;
		    return obj;
		};

		module.exports = SpecialRelation;


	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);

		/**
		 * 性别
		 *
		 * - `'unknown'` (未知)
		 * - `'male'` (男)
		 * - `'female'` (女)
		 *
		 * @memberOf User
		 * @name gender
		 * @readOnly
		 * @enum {String}
		 */
		var genderMap = {
		    unknown: 0,
		    male: 1,
		    female: 2
		};
		var genderReverseMap = {
		    0: 'unknown',
		    1: 'male',
		    2: 'female'
		};

		/**
		 * @constructor
		 *
		 * @property {String}   account     账号
		 * @property {String}   nick        昵称
		 * @property {String}   avatar      头像
		 * @property {String}   sign        签名
		 * @property {String}   gender      {@link User.gender|性别}
		 * @property {String}   email       邮箱
		 * @property {String}   birth       生日
		 * @property {String}   tel         电话号码
		 * @property {String}   custom      扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
		 * @property {Long}     createTime  创建时间
		 * @property {Long}     updateTime  更新时间
		 */
		function User(options) {
		    util.merge(this, options);
		    if (util.notundef(this.gender)) {
		        util.verifyParamValid('gender', this.gender, User.validGenders);
		        this.gender = genderMap[this.gender];
		    }
		    if (util.notundef(this.email) && this.email !== '') { util.verifyEmail('email', this.email); }
		    if (util.notundef(this.birth) && this.birth !== '') { util.verifyBirth('birth', this.birth); }
		    if (util.notundef(this.tel) && this.tel !== '') { util.verifyTel('tel', this.tel); }
		}

		User.reverse = function(user) {
		    var obj = util.filterObj(user, 'account nick avatar sign gender email birth tel custom createTime updateTime');
		    if (util.notundef(obj.gender)) { obj.gender = genderReverseMap[obj.gender]; }
		    if (util.notundef(obj.createTime)) { obj.createTime = +obj.createTime; }
		    if (util.notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
		    return obj;
		};

		User.reverseUsers = function(users) {
		    return users.map(function(user) {
		        return User.reverse(user);
		    });
		};

		User.validGenders = Object.keys(genderMap);

		module.exports = User;


	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var util = __webpack_require__(10);
		var objs2accounts = util.objs2accounts;
		var logger = __webpack_require__(40);
		var Friend = __webpack_require__(102);
		var User = __webpack_require__(100);

		/**
		 * 处理好友协议回包
		 */
		IMProtocolFn.processFriend = function(packet) {
		    var self = this,
		        obj = packet.obj,
		        content = packet.content,
		        error = packet.error;
		    switch (packet.cmd) {
		    // 添加好友
		    case 'friendRequest':
		        self.updateFriendSysMsg(packet);
		        if (!error) {
		            self.onFriendRequest(obj);
		        }
		        break;
		    // 添加好友多端同步
		    case 'syncFriendRequest':
		        self.onFriendRequest(content, true);
		        break;
		    // 删除好友
		    case 'deleteFriend':
		        if (!error) { self.onDeleteFriend(obj); }
		        break;
		    // 删除好友多端同步
		    case 'syncDeleteFriend':
		        self.onDeleteFriend(content, true);
		        break;
		    // 更新好友
		    case 'updateFriend':
		        if (!error) { self.onUpdateFriend(obj); }
		        break;
		    // 更新好友多端同步
		    case 'syncUpdateFriend':
		        self.onUpdateFriend(content.friend, true);
		        break;
		    // 获取好友列表
		    case 'getFriends':
		        self.onFriends(packet);
		        break;
		    // 同步好友列表
		    case 'syncFriends':
		        self.onFriends(packet);
		        break;
		    case 'syncFriendUsers':
		        self.onFriendUsers(packet);
		        break;
		    default:
		        break;
		    }
		};

		/*
		 * 处理好友, 同步和主动获取都会走这个逻辑
		 */
		IMProtocolFn.onFriends = function(packet) {
		    var self = this,
		        db = self.db,
		        error = packet.error,
		        // 有同步和主动获取两种情况
		        isSync = self.packetFromSync(packet),
		        rawFriends = packet.content.friends,
		        hasChange = true,
		        timetag,
		        friends = [],
		        invalidFriends = [];

		    // 用于同步的Promise
		    var promise = new Promise(function(resolve, reject) {
		        if (!error) {
		            // 处理数据
		            parseData();
		            // 如果支持数据库, 那么合并数据, 否则直接 bingo
		            if (db.enable) {
		                mergeData(resolve, reject);
		            } else {
		                bingo();
		                resolve();
		            }
		        } else {
		            // 同步时应该没有error, 所以这里应该走不到
		            reject(error);
		        }
		    });
		    if (isSync) {
		        promise.cmd = 'friends';
		        self.syncPromiseArray.push(promise);
		    }

		    function parseData() {
		        if (hasChange) {
		            rawFriends.forEach(function(friend) {
		                friend = Friend.reverse(friend);
		                if (friend.valid) {
		                    friends.push(friend);
		                } else {
		                    invalidFriends.push(friend);
		                }
		            });
		        }
		        logger.warn('parse friends', objs2accounts(friends), friends, 'delete', objs2accounts(invalidFriends), invalidFriends);
		        if (!rawFriends.length) {
		            hasChange = false;
		        } else {
		            hasChange = true;
		            timetag = packet.content.timetag;
		        }
		    }

		    function mergeData(resolveSync, rejectSync) {
		        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
		        packet.promise = new Promise(function(resolve, reject) {
		            if (hasChange) {
		                // 增量更新数据库
		                db.mergeFriends(friends, invalidFriends, timetag).then(function() {
		                    afterMergeData();
		                }).then(undefined, function(event) {
		                    event._msg = 'merge friends error';
		                    reject(event);
		                    rejectSync(event);
		                });
		            } else {
		                logger.warn('no merge friends');
		                afterMergeData();
		            }
		            function afterMergeData() {
		                // 如果不是同步, 那么需要获取完整的列表
		                if (!isSync) {
		                    db.getFriends().then(function(records) {
		                        friends = records;
		                        bingo();
		                        resolve();
		                        resolveSync();
		                    }).then(undefined, function(event) {
		                        event._msg = 'get friends error';
		                        reject(event);
		                        rejectSync(event);
		                    });
		                } else {
		                    bingo();
		                    resolve();
		                    resolveSync();
		                }
		            }
		        }).then(undefined, function(event) {
		            event._msg = 'merge friends data error';
		            rejectSync(event);
		            throw event;
		        });
		    }

		    function bingo() {
		        self.timetags.friends = timetag;
		        friends.invalid = invalidFriends;
		        // 返回数据
		        if (isSync) {
		            // 如果是同步, 那么统一在 onSyncDone 里面通知开发者
		            self.syncResult.friends = friends;
		            self.syncResult.invalidFriends = invalidFriends;
		        } else {
		            logger.warn('get friends', objs2accounts(friends), friends);
		            packet.obj = friends;
		        }
		    }

		};

		/**
		 * 处理好友请求
		 * - 主动发起的好友请求
		 * - 多端同步添加好友
		 * - 收到相关的系统通知
		 * @private
		 * @param  {Object}  obj      请求对象
		 * @param  {Boolean} isSynced 是否是多端同步
		 * @return {Void}
		 */
		IMProtocolFn.onFriendRequest = function(obj, isSynced) {
		    var promise = Promise.resolve();
		    var self = this;
		    var db = self.db;
		    var type = obj.type;
		    type = obj.type = Friend.getTypeFromByte(type) || type;
		    var isAdd = type === 'addFriend' || type === 'passFriendApply';
		    if (isAdd) {
		        // 如果是加好友, 将拼好的对象传给开发者
		        var friend = obj.friend = Friend.assembleFriend(obj.account);
		        // 那么存数据库
		        if (db.enable) {
		            promise = db.putFriend(friend);
		        }
		    }
		    // 如果是多端同步, 那么通知开发者
		    if (isSynced) {
		        self.onSyncFriendAction(obj);
		    }
		    return promise;
		};

		IMProtocolFn.onSyncFriendAction = function(obj) {
		    logger.info('on sync friendAction', obj);
		    this.options.onsyncfriendaction(obj);
		};

		/**
		 * 删除好友
		 * - 主动删除
		 * - 多端同步删除
		 * - 被删除, 收到系统通知
		 * @private
		 * @param  {Object}  obj      请求对象
		 * @param  {Boolean} isSynced 是否是多端同步
		 * @return {Void}
		 */
		IMProtocolFn.onDeleteFriend = function(obj, isSynced) {
		    var promise = Promise.resolve();
		    var self = this;
		    var db = self.db;
		    if (db.enable) {
		        promise = db.deleteFriend(obj.account);
		    }
		    // 如果是多端同步, 那么通知开发者
		    if (isSynced) {
		        obj.type = 'deleteFriend';
		        self.onSyncFriendAction(obj);
		    }
		    return promise;
		};

		/**
		 * 更新好友
		 * @private
		 * @param  {Object}  obj      请求对象
		 * @param  {Boolean} isSynced 是否是多端同步
		 * @return {Void}
		 */
		IMProtocolFn.onUpdateFriend = function(obj, isSynced) {
		    var self = this;
		    var db = self.db;
		    var friend = Friend.reverse(obj);
		    if (db.enable) {
		        db.updateFriend(friend);
		    }
		    // 如果是多端同步, 那么通知开发者
		    if (isSynced) {
		        self.onSyncFriendAction({
		            type: 'updateFriend',
		            friend: friend
		        });
		    }
		};

		// 只有在启用数据库的时候才同步好友对应的用户名片
		IMProtocolFn.onFriendUsers = function(packet) {
		    var self = this;
		    var db = self.db;
		    var content = packet.content;
		    var users = content.users.map(function(user) {
		        return User.reverse(user);
		    });
		    logger.warn('parse users', objs2accounts(users), users);
		    var timetag = content.timetag;
		    var promise = Promise.resolve();
		    if (db.enable) {
		        promise = db.mergeFriendUsers(users, timetag);
		    }
		    self.timetags.friendUsers = timetag;
		    promise.cmd = 'friendUsers';
		    self.syncPromiseArray.push(promise);
		    self.syncResult.users = users;
		};

		/*
		 * 更新系统通知状态
		 */
		IMProtocolFn.updateFriendSysMsg = function(packet) {
		    var obj = packet.obj;
		    var state;
		    var error = packet.error;
		    var sysMsg;

		    if (!packet.obj.idServer) { return; }

		    if (!error) {
		        var type = obj.type;
		        type = Friend.getTypeFromByte(type) || type;
		        switch (type) {
		        case 'passFriendApply':
		            state = 'passed';
		            break;
		        case 'rejectFriendApply':
		            state = 'rejected';
		            break;
		        }
		    } else {
		        state = 'error';
		        error = util.filterObj(error, 'code message');
		    }
		    
		    sysMsg = {
		        idServer: obj.idServer,
		        state: state
		    };
		    if (error) {
		        sysMsg.error = error;
		    }
		    this.updateSysMsg(sysMsg);
		};


	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var notundef = util.notundef;

		/**
		 * 好友请求类型
		 * 
		 * - `'addFriend'` (直接加为好友)
		 * - `'applyFriend'` (申请加为好友)
		 * - `'passFriendApply'` (通过好友申请)
		 * - `'rejectFriendApply'` (拒绝好友申请)
		 * 
		 * @memberOf Friend
		 * @name requestType
		 * @readOnly
		 * @enum {String}
		 */
		var requestTypeMap = {
		    addFriend: 1,
		    applyFriend: 2,
		    passFriendApply: 3,
		    rejectFriendApply: 4
		};
		var requestTypeReverseMap = {
		    1: 'addFriend',
		    2: 'applyFriend',
		    3: 'passFriendApply',
		    4: 'rejectFriendApply'
		};

		/**
		 * @constructor
		 *
		 * @property {String}   account     账号
		 * @property {String}   alias       昵称
		 * @property {String}   custom      扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
		 * @property {Number}   createTime  成为好友的时间
		 * @property {Number}   updateTime  更新时间
		 */
		function Friend(options) {
		    util.verifyOptions(options, 'account');
		    util.verifyParamAtLeastPresentOne(options, 'alias custom');
		    this.account = options.account;
		    if (notundef(options.alias)) { this.alias = options.alias; }
		    if (notundef(options.custom)) { this.custom = options.custom; }
		}

		Friend.reverse = function(friend) {
		    var obj = util.filterObj(friend, 'account alias custom createTime updateTime');
		    if (notundef(friend.flag)) { obj.valid = friend.flag === '1'; }
		    if (notundef(obj.createTime)) { obj.createTime = +obj.createTime; }
		    if (notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
		    return obj;
		};

		Friend.validTypes = function() {
		    return Object.keys(requestTypeMap);
		};

		Friend.getByteFromType = function(type) {
		    return requestTypeMap[type];
		};

		Friend.getTypeFromByte = function(typeInByte) {
		    return requestTypeReverseMap[typeInByte];
		};

		Friend.assembleFriend = function(account) {
		    var timetag = +new Date();
		    return {
		        account: account,
		        alias: "",
		        createTime: timetag,
		        custom: "",
		        updateTime: timetag,
		        valid: true
		    };
		};

		module.exports = Friend;


	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var util = __webpack_require__(10);
		var objs2accounts = util.objs2accounts;
		var teams2ids = util.teams2ids;
		var logger = __webpack_require__(40);
		var Team = __webpack_require__(104);
		var TeamMember = __webpack_require__(87);

		/**
		 * 处理群协议
		 */
		IMProtocolFn.processTeam = function(packet) {
		    var self = this,
		        error = packet.error,
		        team,
		        member,
		        owner;
		    switch (packet.cmd) {
		    case 'createTeam':
		        team = packet.obj.team;
		        if (!error) { team = packet.content.team; }
		        team = Team.reverse(team);
		        packet.obj.team = team;
		        owner = TeamMember.assembleOwner(team);
		        packet.obj.owner = owner;
		        if (!error) { self.onCreateTeam(team, owner); }
		        break;
		    case 'syncCreateTeam':
		        team = Team.reverse(packet.content.team);
		        logger.info('on sync createTeam', team);
		        owner = TeamMember.assembleOwner(team);
		        self.options.onsynccreateteam(team, owner);
		        self.onCreateTeam(team, owner);
		        break;
		    case 'sendTeamMsg':
		        self.onSendMsg(packet);
		        break;
		    case 'teamMsg':
		        self.onMsg(packet);
		        break;
		    case 'teamMsgs':
		        self.onMsgs(packet);
		        break;
		    case 'addTeamMembers':
		    case 'removeTeamMembers':
		    case 'leaveTeam':
		    case 'dismissTeam':
		    case 'addTeamManagers':
		    case 'removeTeamManagers':
		    case 'transferTeam':
		        break;
		    case 'updateInfoInTeam':
		        member = packet.obj;
		        member.account = self.account;
		        member.id = TeamMember.genId(member.teamId, member.account);
		        member = TeamMember.reverse(member);
		        packet.obj = member;
		        self.onTeamMember(member);
		        break;
		    case 'updateNickInTeam':
		        packet.obj = TeamMember.reverse(packet.obj);
		        break;
		    case 'updateTeam':
		        packet.obj = Team.reverse(packet.obj);
		        break;
		    case 'applyTeam':
		        if (!packet.error) {
		            packet.obj = Team.reverse(packet.content.team);
		        }
		        break;
		    case 'passTeamApply':
		        self.updateTeamSysMsgState(packet, 'passed');
		        break;
		    case 'rejectTeamApply':
		        self.updateTeamSysMsgState(packet, 'rejected');
		        break;
		    case 'acceptTeamInvite':
		        self.updateTeamSysMsgState(packet, 'passed');
		        if (!packet.error) {
		            packet.obj = Team.reverse(packet.content.team);
		        }
		        break;
		    case 'rejectTeamInvite':
		        self.updateTeamSysMsgState(packet, 'rejected');
		        break;
		    case 'getTeam':
		        if (!packet.error) {
		            packet.obj = Team.reverse(packet.content.team);
		        }
		        break;
		    case 'getTeams':
		        self.onTeams(packet);
		        break;
		    case 'getTeamMembers':
		        self.onTeamMembers(packet);
		        break;
		    case 'syncTeams':
		        self.onTeams(packet);
		        break;
		    case 'syncTeamMembers':
		        self.onTeamMembers(packet);
		        break;
		    case 'getTeamHistoryMsgs':
		    case 'searchTeamHistoryMsgs':
		        self.onHistoryMsgs(packet);
		        break;
		    case 'syncSendTeamMsg':
		        self.onMsg(packet);
		        break;
		    // 更新别人的群昵称也走这里, 跟多端同步走一条协议了
		    case 'syncUpdateTeamMember':
		        member = TeamMember.reverse(packet.content.teamMember);
		        logger.info('on update teamMember', member);
		        self.options.onupdateteammember(member);
		        self.onTeamMember(member);
		        break;
		    default:
		        break;
		    }
		};

		IMProtocolFn.onCreateTeam = function(team, owner) {
		    var db = this.db;
		    if (db.enable) {
		        db.putTeam(team);
		        db.putTeamMembers(owner);
		    }
		};

		/*
		 * 处理群, 同步和主动获取都会走这个逻辑
		 */
		IMProtocolFn.onTeams = function(packet) {
		    packet.content = packet.content || {};
		    var self = this,
		        db = self.db,
		        // 有同步和主动获取两种情况
		        isSync = self.packetFromSync(packet),
		        rawTeams = packet.content.teams || [],
		        hasChange = true,
		        timetag,
		        teams = [],
		        invalidTeams = [];

		    if (packet.error) {
		        switch (packet.error.code) {
		        // 没有获取到增量更新
		        case 803:
		            packet.error = null;
		            hasChange = false;
		            break;
		        }
		    }

		    // 用于同步的Promise
		    var promise = new Promise(function(resolve, reject) {
		        if (!packet.error) {
		            // 处理数据
		            parseData();
		            // 如果支持数据库, 那么合并数据, 否则直接 bingo
		            if (db.enable) {
		                mergeData(resolve, reject);
		            } else {
		                bingo();
		                resolve();
		            }
		        } else {
		            // 同步时应该没有error, 所以这里应该走不到
		            reject(packet.error);
		        }
		    });
		    if (isSync) {
		        promise.cmd = 'teams';
		        self.syncPromiseArray.push(promise);
		    }

		    function parseData() {
		        if (hasChange) {
		            rawTeams.forEach(function(team) {
		                team = Team.reverse(team);
		                if (team.validToCurrentUser) {
		                    teams.push(team);
		                } else {
		                    invalidTeams.push(team);
		                }
		            });
		        }
		        logger.warn('parse teams', teams2ids(teams), teams, 'invalid', teams2ids(invalidTeams), invalidTeams);
		        if (!rawTeams.length) {
		            hasChange = false;
		        } else {
		            hasChange = true;
		            timetag = packet.content.timetag;
		        }
		    }

		    function mergeData(resolveSync, rejectSync) {
		        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
		        packet.promise = new Promise(function(resolve, reject) {
		            if (hasChange) {
		                // 增量更新数据库
		                db.mergeTeams(teams, invalidTeams, timetag).then(function() {
		                    afterMergeData();
		                }).then(undefined, function(event) {
		                    event._msg = 'merge teams error';
		                    reject(event);
		                    rejectSync(event);
		                });
		            } else {
		                logger.warn('no merge teams');
		                afterMergeData();
		            }
		            function afterMergeData() {
		                if (!isSync) {
		                    db.getTeams().then(function(records) {
		                        teams = records;
		                        bingo();
		                        resolve();
		                        resolveSync();
		                    }).then(undefined, function(event) {
		                        event._msg = 'get teams error';
		                        reject(event);
		                        rejectSync(event);
		                    });
		                } else {
		                    bingo();
		                    resolve();
		                    resolveSync();
		                }
		            }
		        }).then(undefined, function(event) {
		            event._msg = 'merge teams data error';
		            rejectSync(event);
		            throw event;
		        });
		    }

		    function bingo() {
		        self.timetags.teams = timetag;
		        teams.invalid = invalidTeams;
		        // 返回数据
		        if (isSync) {
		            // 如果是同步, 那么统一在 onSyncDone 里面通知开发者
		            self.syncResult.teams = teams;
		            self.syncResult.invalidTeams = invalidTeams;
		        } else {
		            logger.warn('get teams', teams2ids(teams), teams);
		            packet.obj = teams;
		        }
		    }

		};

		IMProtocolFn.onTeamMembers = function(packet) {
		    packet.content = packet.content || {};
		    var self = this,
		        db = self.db,
		        // 有同步和主动获取两种情况
		        isSync = self.packetFromSync(packet),
		        rawMembers = packet.content.members || [],
		        hasChange = true,
		        timetag,
		        teamId,
		        members = [],
		        invalidMembers = [];
		    
		    // 获取 teamId
		    if (!!packet.obj) {
		        teamId = packet.obj.teamId;
		    }
		    if (!teamId) {
		        teamId = packet.content.teamId;
		    }
		    teamId = '' + teamId;

		    if (packet.error) {
		        switch (packet.error.code) {
		        // 没有获取到增量更新
		        case 406:
		            packet.error = null;
		            hasChange = false;
		            break;
		        }
		    }

		    // 用于同步的Promise
		    var promise = new Promise(function(resolve, reject) {
		        if (!packet.error) {
		            // 处理数据
		            parseData();
		            // 如果支持数据库, 那么合并数据, 否则直接 bingo
		            if (db.enable) {
		                mergeData(resolve, reject);
		            } else {
		                bingo();
		                resolve();
		            }
		        } else {
		            // 同步时应该没有error, 所以这里应该走不到
		            reject(packet.error);
		        }
		    });
		    if (isSync) {
		        promise.cmd = teamId;
		        self.syncTeamMembersPromiseArray.push(promise);
		    }

		    function parseData() {
		        if (hasChange) {
		            rawMembers.forEach(function(member) {
		                member = TeamMember.reverse(member);
		                if (member.valid) {
		                    members.push(member);
		                } else {
		                    invalidMembers.push(member);
		                }
		            });
		        }
		        logger.warn('parse members', teamId, objs2accounts(members), members, 'invalid', objs2accounts(invalidMembers), invalidMembers);
		        if (!rawMembers.length) {
		            hasChange = false;
		        } else {
		            hasChange = true;
		            timetag = packet.content.timetag;
		        }
		    }

		    function mergeData(resolveSync, rejectSync) {
		        // 设置用于主动获取的 Promise, 在 callPacketAckCallback 里面使用
		        packet.promise = new Promise(function(resolve, reject) {
		            if (hasChange) {
		                // 增量更新数据库
		                db.mergeTeamMembers(teamId, members, invalidMembers, timetag).then(function() {
		                    afterMergeData();
		                }).then(undefined, function(event) {
		                    event._msg = 'merge members error ' + teamId;
		                    reject(event);
		                    rejectSync(event);
		                });
		            } else {
		                logger.warn('no merge members', teamId);
		                afterMergeData();
		            }
		            function afterMergeData() {
		                if (!isSync) {
		                    db.getTeamMembers(teamId).then(function(records) {
		                        members = records;
		                        bingo();
		                        resolve();
		                        resolveSync();
		                    }).then(undefined, function(event) {
		                        event._msg = 'get members error';
		                        reject(event);
		                        rejectSync(event);
		                    });
		                } else {
		                    bingo();
		                    resolve();
		                    resolveSync();
		                }
		            }
		        }).then(undefined, function(event) {
		            event._msg = 'merge members data error';
		            rejectSync(event);
		            throw event;
		        });
		    }

		    function bingo() {
		        members.invalid = invalidMembers;
		        // 返回数据
		        if (isSync) {
		            // 如果是同步, 那么统一在 onSyncTeamMembersDone 里面通知开发者
		            self.syncTeamMembersResult[teamId] = members;
		            self.syncTeamMembersResult[teamId+'-invalid'] = invalidMembers;
		            self.timetags['team-'+teamId] = timetag;
		        } else {
		            logger.warn('get members', teamId, objs2accounts(members), members);
		            packet.obj = {
		                teamId: teamId,
		                members: members
		            };
		        }
		    }

		};

		IMProtocolFn.onTeamMember = function(member) {
		    logger.warn('parse update member', member);
		    var db = this.db;
		    if (db.enable) {
		        db.updateTeamMember(member);
		    }
		};

		/*
		 * 更新群系统通知的状态
		 * - 通过入群申请
		 * - 拒绝入群申请
		 * - 通过入群邀请
		 * - 拒绝入群邀请
		 */
		IMProtocolFn.updateTeamSysMsgState = function(packet, state) {
		    var error = packet.error;
		    var sysMsg;

		    // 处理错误
		    if (error) {
		        state = 'error';
		        error = util.filterObj(error, 'code message');
		    }
		    
		    sysMsg = {
		        idServer: packet.obj.idServer,
		        state: state
		    };
		    if (error) {
		        sysMsg.error = error;
		    }
		    this.updateSysMsg(sysMsg);
		};


	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var notundef = util.notundef;

		/**
		 * 群类型
		 * 
		 * - `'normal'` (普通群)
		 * - `'advanced'` (高级群)
		 *
		 * 普通群没有群简介、群公告、加入方式、扩展字段
		 * 
		 * @memberOf Team
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeMap = {
		    normal: 0,
		    advanced: 1
		};
		var typeReverseMap = {
		    0: 'normal',
		    1: 'advanced'
		};

		/**
		 * 加入方式
		 * 
		 * - `'noVerify'` (不需要验证)
		 * - `'needVerify'` (需要验证)
		 * - `'rejectAll'` (禁止任何人加入)
		 * 
		 * @memberOf Team
		 * @name joinMode
		 * @readOnly
		 * @enum {String}
		 */
		var joinModeMap = {
		    noVerify: 0,
		    needVerify: 1,
		    rejectAll: 2
		};
		var joinModeReverseMap = {
		    0: 'noVerify',
		    1: 'needVerify',
		    2: 'rejectAll'
		};

		/**
		 * 群
		 * 
		 * @constructor
		 * @property {String}   teamId                  群Id
		 * @property {String}   type                    {@link Team.type|群类型}
		 * @property {String}   name                    群名字
		 * @property {String}   intro                   群简介
		 * @property {String}   announcement            群公告
		 * @property {String}   joinMode                {@link Team.joinMode|加入方式}
		 * @property {String}   owner                   群主
		 * @property {Number}   level                   群人数上限
		 * @property {Number}   memberNum               群成员数量
		 * @property {Number}   memberUpdateTime        群成员最后更新时间
		 * @property {Number}   createTime              群创建时间
		 * @property {Number}   updateTime              群最后更新时间
		 * @property {String}   custom                  第三方扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
		 * @property {String}   serverCustom            第三方服务器扩展字段, 开发者可以自行扩展, 建议封装成JSON格式字符串
		 * @property {Boolean}  valid                   是否有效, 解散后该群无效
		 * @property {Boolean}  validToCurrentUser      该群是否对当前用户有效, 如果无效, 那么说明被踢了
		 */
		function Team(options) {
		    util.verifyOptions(options, 'action');
		    // 根据不同的action来验证不同的参数
		    switch (options.action) {
		    case 'create':
		        util.verifyOptions(options, 'teamId', false);
		        util.verifyOptions(options, 'type name');
		        util.verifyParamValid('type', options.type, validTypes);
		        // 如果是创建普通群, 那么不能包含群简介、群公告、加入方式、扩展字段
		        if (options.type === 'normal') {
		            util.verifyOptions(options, 'intro announcement joinMode custom', false);
		        }
		        break;
		    case 'update':
		        util.verifyOptions(options, 'teamId');
		        if (notundef(options.name)) {
		            util.verifyOptions(options, 'name');
		        }
		        util.verifyOptions(options, 'type', false);
		        break;
		    default:
		        break;
		    }
		    if (notundef(options.teamId)) { this.teamId = options.teamId; }
		    if (notundef(options.type)) { this.type = typeMap[options.type]; }
		    if (notundef(options.name)) { this.name = '' + options.name; }
		    if (notundef(options.intro)) { this.intro = '' + options.intro; }
		    if (notundef(options.announcement)) { this.announcement = '' + options.announcement; }
		    // 如果有加入方式, 那么需要验证其正确性
		    if (notundef(options.joinMode)) {
		        util.verifyParamValid('joinMode', options.joinMode, validJoinModes);
		        this.joinMode = joinModeMap[options.joinMode];
		    }
		    if (notundef(options.custom)) { this.custom = '' + options.custom; }
		}
		/**
		 * 逆转team, 因为可能是更新team信息, 可能只有部分信息, 所以用filter过滤不存在的信息
		 *
		 * @private
		 * @param  {Team} team 群
		 * @return {Object}
		 */
		Team.reverse = function(team) {
		    var obj = util.filterObj(team, 'teamId name type owner level selfCustom valid memberNum memberUpdateTime createTime updateTime validToCurrentUser');
		    if (notundef(obj.teamId)) { obj.teamId = '' + obj.teamId; }
		    if (notundef(obj.type)) { obj.type = typeReverseMap[obj.type]; }
		    if (notundef(obj.level)) { obj.level = +obj.level; }
		    if (notundef(obj.valid)) { obj.valid = obj.valid === '1'; }
		    if (notundef(obj.memberNum)) { obj.memberNum = +obj.memberNum; }
		    if (notundef(obj.memberUpdateTime)) { obj.memberUpdateTime = +obj.memberUpdateTime; }
		    if (notundef(obj.createTime)) { obj.createTime = +obj.createTime; }
		    if (notundef(obj.updateTime)) { obj.updateTime = +obj.updateTime; }
		    if (notundef(obj.validToCurrentUser)) { obj.validToCurrentUser = obj.validToCurrentUser === '1'; }
		    // 当群类型为高级, 或者不存在群类型（协议返回）时, 才有如下字段
		    if (obj.type === 'advanced' || !team.type) {
		        obj = util.merge(obj, util.filterObj(team, 'intro announcement joinMode bits custom serverCustom'));
		        if (notundef(obj.joinMode)) {
		            obj.joinMode = joinModeReverseMap[obj.joinMode];
		        }
		    }
		    return obj;
		};

		var validTypes = Object.keys(typeMap);

		var validJoinModes = Object.keys(joinModeMap);

		module.exports = Team;


	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;

		IMProtocolFn.processNotify = function(packet) {
		    var self = this;
		    switch (packet.cmd) {
		    // 离线session+team消息同步通知
		    case 'syncOfflineMsgs':
		        self.onOfflineMsgs(packet);
		        break;
		    // 批量标记协议已读
		    case 'batchMarkRead':
		        break;
		    // 离线sysMsg通知
		    case 'syncOfflineSysMsgs':
		        self.onOfflineSysMsgs(packet);
		        break;
		    // 漫游消息同步通知
		    // 每个会话返回一个包
		    // 不需要标记已读
		    case 'syncRoamingMsgs':
		        self.onRoamingMsgs(packet);
		        break;
		    // 离线过滤的消息通知
		    case 'syncOfflineFilterMsgs':
		        self.onOfflineMsgs(packet, true);
		        break;
		    // 离线过滤的sysMsg通知
		    case 'syncOfflineFilterSysMsgs':
		        self.onOfflineSysMsgs(packet, true);
		        break;
		    default:
		        break;
		    }
		};


	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var ImageOp = __webpack_require__(107);

		IMProtocolFn.processMisc = function(packet) {
		    switch (packet.cmd) {
		    // 获取nos上传凭证
		    case 'getNosToken':
		        if (!packet.error) {
		            packet.obj = packet.content.nosToken;
		        }
		        break;
		    case 'audioToText':
		        if (!packet.error) {
		            packet.obj.text = packet.content.text;
		        }
		        break;
		    case 'processImage':
		        packet.obj.imageOps = ImageOp.reverseImageOps(packet.obj.imageOps);
		        if (!packet.error) {
		            packet.obj = {
		                url: packet.content.url
		            };
		        }
		        break;
		    default:
		        break;
		    }
		};


	/***/ },
	/* 107 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);

		/**
		 * 操作类型
		 * @memberOf ImageOp
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeMap = {
		    // 去除图片元数据
		    // stripMeta: 0,
		    // 修改图片类型
		    // type: 1,
		    // 高斯模糊
		    blur: 2,
		    // 修改图片质量
		    quality: 3,
		    // 对图片进行剪裁
		    crop: 4,
		    // 对图片进行旋转
		    rotate: 5,
		    // 基于像素对图片进行缩略
		    // pixel: 6,
		    // 基于长宽的图片缩略
		    thumbnail: 7,
		    // 图片水印
		    // watermark: 8,
		    // 图片interlace
		    interlace: 9
		    // tmp: 10
		};
		var typeReverseMap = {
		    0: 'stripMeta',
		    1: 'type',
		    2: 'blur',
		    3: 'quality',
		    4: 'crop',
		    5: 'rotate',
		    6: 'pixel',
		    7: 'thumbnail',
		    8: 'watermark',
		    9: 'interlace',
		    10: 'tmp'
		};

		function ImageOp(options) {
		    util.verifyOptions(options, 'type');
		    util.verifyParamValid('type', options.type, ImageOp.validTypes);
		    util.merge(this, options);
		    this.type = typeMap[options.type];
		}

		ImageOp.validTypes = Object.keys(typeMap);

		ImageOp.reverse = function(imageOp) {
		    var obj = util.copy(imageOp);
		    obj.type = typeReverseMap[obj.type];
		    return obj;
		};

		ImageOp.reverseImageOps = function(imageOps) {
		    return imageOps.map(function(imageOp) {
		        return ImageOp.reverse(imageOp);
		    });
		};

		module.exports = ImageOp;


	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var util = __webpack_require__(10);
		var undef = util.undef;
		var device = __webpack_require__(47);
		var logger = __webpack_require__(40);
		var TeamMember = __webpack_require__(87);
		var Session = __webpack_require__(109);
		var configMap = __webpack_require__(92);
		// 使收消息和发消息按照顺序来处理
		var msgPromise = Promise.resolve();

		/**
		 * 处理消息协议
		 */
		IMProtocolFn.processMessage = function(packet) {
		    var self = this;
		    switch (packet.cmd) {
		    // 发送消息
		    case 'sendMsg':
		        self.onSendMsg(packet);
		        break;
		    // 消息通知
		    case 'msg':
		        self.onMsg(packet);
		        break;
		    // 系统通知通知（包括自定义系统通知）
		    case 'sysMsg':
		        self.onSysMsg(packet);
		        break;
		    // 发送自定义系统通知
		    case 'sendCustomSysMsg':
		        self.onSendSysMsg(packet);
		        break;
		    // 获取单人历史消息
		    case 'getHistoryMsgs':
		    case 'searchHistoryMsgs':
		        self.onHistoryMsgs(packet);
		        break;
		    // 发送消息后发送方的多端同步通知
		    case 'syncSendMsg':
		        self.onMsg(packet);
		        break;
		    case 'deleteSessions':
		        self.onDeleteSessions(packet);
		        break;
		    default:
		        break;
		    }
		};

		// 收到漫游消息, 需去重
		IMProtocolFn.onRoamingMsgs = function(packet) {
		    var self = this;
		    var message = self.message;
		    var Message = message.Message;
		    var getMaxTimetag = Message.getMaxTimetag;
		    var msgs = message.reverseMsgs(packet.content.msgs);
		    var timetag = getMaxTimetag(msgs);
		    // 服务器返回的数据是按照时间从晚到早排序的, 但是一般UI上都是按照时间从早到晚排序的
		    msgs = msgs.reverse();
		    msgs = Message.deduplication(msgs);
		    var msg = msgs[0];
		    var sessionId = msg.sessionId;
		    // 存储漫游消息
		    var promise = self.putMsg(msgs, 'roamingMsgs').then(function(records) {
		        // debugger;
		        // 这里返回的是过滤后的消息, 有可能为空数组
		        msgs = records;
		        // 记录同步结果
		        logger.warn('sync roamingMsgs', sessionId, msgs.length, msgs);
		        self.syncResult.roamingMsgs = self.syncResult.roamingMsgs || [];
		        self.syncResult.roamingMsgs.push({
		            sessionId: sessionId,
		            scene: msg.scene,
		            to: msg.target,
		            msgs: msgs,
		            timetag: timetag
		        });
		    });
		    promise.cmd = 'roamingMsgs-' + sessionId;
		    self.syncPromiseArray.push(promise);
		};

		// 收到离线消息, 需去重
		// 不用调用 handleMsg, 因为同步的时候已经同步到这些变更了
		IMProtocolFn.onOfflineMsgs = function(packet, isFilter) {
		    var self = this;
		    var message = self.message;
		    var Message = message.Message;
		    // 处理过滤消息
		    var modifyObj = null;
		    if (isFilter) {
		        modifyObj = {
		            filter: true
		        };
		    }
		    var msgs = message.reverseMsgs(packet.content.msgs, {
		        modifyObj: modifyObj
		    });
		    // 将离线消息按会话分开, 一个会话一个回包
		    var currMsgs = [];
		    var currSessionId = '';
		    var sessionId;
		    var promise;
		    var property = isFilter ? 'offlineFilterMsgs' : 'offlineMsgs';

		    msgs.forEach(function(msg) {
		        sessionId = msg.sessionId;
		        // 如果是新的会话
		        if (sessionId !== currSessionId) {
		            // 存储上一个会话
		            storeLastSession();
		            // 开始新的会话
		            currMsgs = [];
		            currMsgs.push(msg);
		            currSessionId = sessionId;
		        } else {
		            currMsgs.push(msg);
		        }
		    });
		    storeLastSession();

		    function storeLastSession() {
		        // 第一次 currMsgs 为空
		        if (!!currMsgs.length) {
		            var timetag = Message.getMaxTimetag(currMsgs);
		            var scene = currMsgs[0].scene;
		            var to = currMsgs[0].target;
		            // 标记消息已读, 要标记所有的消息
		            self.markMsgRead(currMsgs);
		            // 服务器返回的数据是按照时间从晚到早排序的, 但是一般UI上都是按照时间从早到晚排序的
		            currMsgs = currMsgs.reverse();
		            // 去重
		            currMsgs = Message.deduplication(currMsgs);
		            // 存储离线消息
		            promise = self.putMsg(currMsgs, 'offlineMsgs').then(function(records) {
		                // debugger;
		                // 这里返回的是过滤后的消息, 有可能为空数组
		                currMsgs = records;
		                // 记录同步结果
		                logger.warn('sync', property, currSessionId, currMsgs.length, currMsgs);
		                self.syncResult[property] = self.syncResult[property] || [];
		                self.syncResult[property].push({
		                    sessionId: currSessionId,
		                    scene: scene,
		                    to: to,
		                    msgs: currMsgs,
		                    timetag: timetag
		                });
		            });
		            promise.cmd = 'offlineMsgs-' + currSessionId;
		            self.syncPromiseArray.push(promise);
		        }
		    }

		};

		/*
		 * 补全消息, 加上某些字段
		 */
		IMProtocolFn.completeMsg = function(msg) {
		    var self = this;
		    msg.from = self.account;
		    msg.fromNick = self.myInfo && self.myInfo.nick;
		    msg.fromClientType = 'Web';
		    msg.fromDeviceId = device.deviceId;
		    if (!msg.time) {msg.time = +new Date();}
		    return msg;
		};

		// 发了一条消息
		IMProtocolFn.onSendMsg = function(packet, isFilter) {
		    var self = this,
		        msg = packet.obj.msg;
		    self.completeMsg(msg);
		    // 如果成功, 服务器端会返回额外的字段
		    if (!packet.error) {
		        msg.idServer = packet.content.msg.idServer;
		        msg.time = packet.content.msg.time;
		        msg.status = 'success';
		    } else {
		        msg.status = 'fail';
		    }
		    // 返回给开发者的信息
		    msg = self.message.reverse(msg);
		    if (isFilter) { msg.filter = true; }
		    packet.obj = msg;
		    // 发送消息时会存储消息, 那么需要等这个操作结束后再更新消息状态
		    msgPromise = Promise.all([msgPromise, packet.obj.promise]).then(function(records) {
		        // 这里返回的是过滤后的消息, 有可能为空数组
		        // 为空时表明是重发的消息, 所以依然需要更新到数据库
		        if (!records.length) {msg.resend = true;}
		        return self.updateMsg(msg);
		    });
		};

		/*
		 * 收到多条群消息
		 * - 普通群被拉进群并且有人在群里说话了
		 */
		IMProtocolFn.onMsgs = function(packet) {
		    var self = this;
		    self.message.reverseMsgs(packet.content.msgs, {
		        mapper: function(msg) {
		            self.handleMsg(msg);
		        }
		    });
		};

		/*
		 * 收到消息
		 * - 收到一条点对点消息
		 * - 收到一条在其它端发送的点对点消息
		 * - 收到一条群消息
		 * - 收到一条在其它端发送的群消息
		 * - 收到一条过滤消息
		 */
		IMProtocolFn.onMsg = function(packet, isFilter) {
		    var self = this;
		    var msg = self.message.reverse(packet.content.msg);
		    if (isFilter) { msg.filter = true; }
		    self.handleMsg(msg);
		};

		/*
		 * - 存储并过滤消息
		 * - 更新漫游消息时间戳
		 * - 分类型处理消息
		 * - 通知消息
		 */
		IMProtocolFn.handleMsg = function(msg) {
		    var self = this;
		    var timetag = msg.time;
		    // 标记已读
		    self.markMsgRead(msg);
		    // 处理消息
		    msgPromise = msgPromise.then(function() {
		        // 存储消息
		        return self.putMsg(msg, 'onMsg');
		    }).then(function(records) {
		        // 这里返回的是过滤后的消息, 有可能为空数组
		        msg = records[0];
		        // 就算过滤后的消息数组为空, 时间戳还是要更新, 防止下次再同步下来
		        return self.updateRoamingMsgTimetag(timetag);
		    }).then(function() {
		        // 检查用户信息是否更新了
		        if (!msg) {return;}
		        return self.checkUserUpdate(msg);
		    }).then(function() {
		        // debugger;
		        // 分类型处理消息
		        if (!msg) {return;}
		        var type = msg.type;
		        logger.log('handle' + msg.scene + ' ' + type + ' msg' + (type==='notification' ? ' ' + msg.attach.type : ''), msg);
		        switch (type) {
		        case 'notification':
		            return self.onTeamNotificationMsg(msg);
		        }
		    }).then(function() {
		        // debugger;
		        // 通知消息
		        if (!msg) {return;}
		        logger.info('on msg', msg);
		        setTimeout(function() {
		            self.options.onmsg(util.copy(msg));
		        }, 0);
		    }).then(undefined, function(event) {
		        event._msg = 'handle msg error';
		        self.onDBError(event);
		    });
		};

		/*
		 * 更新消息, 以下情况会更新消息
		 * - 收到漫游消息
		 * - 收到离线消息
		 * - 发消息
		 * - 收到在线消息
		 * 策略
		 * - 更新消息之后要更新对应的会话对象
		 * - 如果是收到离线消息、或者收到不是当前会话的在线消息, 那么需要更新未读数
		 * - 如果是收到在线消息, 通知会话
		 * 多 tab 页
		 * - 当支持多个 tab 同时登录时, 收到消息时, 只会在一个 tab 页里面存储这些消息, 其它 tab 页会存储失败
		 * - 存储成功的 tab 负责存储会话和更新未读数, 其它 tab 页也要计算自己的未读数(但是不能更新到数据库), 同时也要将消息推给开发者
		 * type
		 * - `'roamingMsgs'`
		 * - `'offlineMsgs'`
		 * - `'sendMsg'`
		 * - `'onMsg'`
		 */
		IMProtocolFn.putMsg = function(msgs, type) {
		    // debugger;
		    if (!util.isArray(msgs)) { msgs = [msgs]; }
		    // 如果是过滤（云商服专用）, 直接返回
		    if (msgs[0].filter) { return Promise.resolve(msgs); }
		    var self = this;
		    var db = self.db;
		    var supportDb = db.enable;
		    var promise = Promise.resolve();
		    var Message = self.message.Message;
		    var lastMsg = Message.getLastMsg(msgs);
		    var flow = lastMsg.flow;
		    var session = Session.genSessionByMsg(lastMsg);
		    var notCurrSession = (session.id !== self.currSessionId);
		    // 落后了, 其它 tab 已经存过了
		    var backward = false;
		    // 未计入未读数的消息
		    var uncountMsgs = [];
		    cacheSession(session);
		    // 存储并过滤
		    promise = promise.then(function() {
		        // debugger;
		        if (supportDb) {
		            return db.putMsg(msgs);
		        } else {
		            return msgs;
		        }
		    }).then(function(records) {
		        // debugger;
		        // 过滤出最终回传给用户的消息
		        var arr = [];
		        msgs.forEach(function(msg) {
		            if (self.checkMsgUnique(msg)) {
		                arr.push(msg);
		            }
		        });
		        msgs = arr;
		        if (supportDb) {
		            // records 为存储到数据库的消息数组, 需要根据此数组来更新未读数
		            uncountMsgs = records;
		        } else {
		            uncountMsgs = msgs;
		        }
		    });
		    // 存储会话
		    promise = promise.then(function() {
		        // debugger;
		        // 如果过滤后的消息为空数组, 则不作处理
		        if (!!msgs.length) {
		            // 重新计算 session
		            lastMsg = Message.getLastMsg(msgs);
		            session = Session.genSessionByMsg(lastMsg);
		            cacheSession(session);
		            // 如果未计入未读数的消息不为空数组, 说明此 tab 页负责存储消息, 那么需要存储会话
		            // 如果未计入未读数的消息为空数组, 则说明其它 tab 页已经存储过消息了, 那么不需要存储会话, 但是依然需要重新计算未读数, 只是不能存储这个未读数
		            if (supportDb) {
		                if (!!uncountMsgs.length) {
		                    return db.putSession(session);
		                } else {
		                    backward = true;
		                    uncountMsgs = msgs;
		                }
		            }
		        }
		    });
		    // 更新未读数
		    if ( flow === 'in' &&
		        (type === 'offlineMsgs' || (type === 'onMsg' && notCurrSession)) ) {
		        promise = promise.then(function(record) {
		            // debugger;
		            // 如果未读数没有变化, 直接返回
		            if (!uncountMsgs.length) {return;}
		            // 如果没有从数据库拿到会话记录, 那么从数据源获取会话记录的未读数
		            if (supportDb && !!record) {
		                session = record;
		            } else {
		                record = self.getSessionFromDataSource(session.id);
		                if (record) { session.unread = record.unread || 0; }
		            }
		            cacheSession(session);
		            // 计算未读数
		            session.unread = session.unread || 0;
		            var unread = 0;
		            uncountMsgs.forEach(function(msg) {
		                // 此字段不存在, 或者为 true, 计入未读数
		                if (undef(msg.isUnreadable) || msg.isUnreadable) {
		                    unread++;
		                }
		            });
		            session.unread += unread;
		            cacheSession(session);
		            // 更新未读数, 如果落后, 那么不能存储未读数
		            if (supportDb && !backward) {
		                return db.updateSession({ id: session.id, unread: session.unread });
		            }
		        });
		    }
		    // 通知会话
		    if (type === 'onMsg') {
		        promise = promise.then(function() {
		            // debugger;
		            // 如果过滤后的消息为空数组, 则不作处理
		            if (!!msgs.length) {
		                self.onUpdateSession(session);
		            }
		        });
		    }
		    function cacheSession(session) {
		        if (type === 'roamingMsgs' || type === 'offlineMsgs') {
		            self.syncResult.sessions = self.syncResult.sessions || {};
		            self.syncResult.sessions[session.id] = session;
		        }
		    }
		    return promise.then(function() {
		        // 把过滤后的消息返回出去
		        return msgs;
		    });
		};

		IMProtocolFn.checkMsgUnique = util.genCheckUniqueFunc('idClient');

		// 废弃, 使用 checkMsgUnique 来检查消息是否唯一
		// IMProtocolFn.getMsgFromDataSource = function(msg) {
		//     var dataSource = this.options.dataSource;
		//     if (!!dataSource) {
		//         if (util.isFunction(dataSource.getMsg)) {
		//             return dataSource.getMsg(msg);
		//         }
		//     }
		// };

		/**
		 * 发消息收到回包
		 * - 通知开发者, 会话更新了
		 * - 如果支持数据库, 更新消息状态
		 *     - 更新对应会话, 并通知开发者
		 *     - 如果是成功, 那么更新漫游消息时间戳
		 * - 如果不支持数据库, 那么更新记录漫游消息时间戳
		 * @private
		 * @param  {Object} msg 消息对象
		 * @return {Void}
		 */
		IMProtocolFn.updateMsg = function(msg) {
		    // 如果是过滤（云商服专用）, 直接返回
		    if (msg.filter) { return Promise.resolve(msg); }
		    logger.warn('update msg');
		    var self = this;
		    var db = self.db;
		    var success = msg.status === 'success';
		    var session = {
		        id: msg.sessionId,
		        lastMsg: msg,
		        updateTime: msg.time
		    };
		    // 通知开发者, 会话更新了
		    self.onUpdateSession(session);
		    if (db.enable) {
		        // 更新消息、会话和时间戳
		        return db.updateMsg(msg).then(function(record) {
		            var p1 = db.updateSession(session);
		            var p2 = Promise.resolve();
		            if (success) {
		                p2 = db.updateRoamingMsgTimetag(record.time);
		            }
		            return Promise.all([p1, p2]);
		        });
		    } else {
		        if (success) {
		            self.timetags.roamingMsgs = msg.time;
		        }
		        return Promise.resolve(msg);
		    }
		};

		IMProtocolFn.updateRoamingMsgTimetag = function(timetag) {
		    var self = this;
		    var db = self.db;
		    if (db.enable) {
		        return db.updateRoamingMsgTimetag(timetag);
		    } else {
		        self.timetags.roamingMsgs = timetag;
		        return Promise.resolve(timetag);
		    }
		};

		/**
		 * 检查用户信息是否更新了
		 * - 如果不是自己发的消息, 那么检查发消息的人的信息是否被更新了
		 * @private
		 * @param  {String} account 被检查的用户账号
		 * @return {Void}
		 */
		IMProtocolFn.checkUserUpdate = function(msg) {
		    var self = this;
		    var db = self.db;
		    var account = msg.from;
		    if (account === self.account) { return Promise.resolve(); }
		    return new Promise(function(resolve) {
		        if (db.enable) {
		            db.getUser(account).then(function(user) {
		                if (!!user) {
		                    compareUser(user);
		                } else {
		                    getUserFromDataSource();
		                }
		            }, function() {
		                getUserFromDataSource();
		            });
		        } else {
		            getUserFromDataSource();
		        }

		        function getUserFromDataSource() {
		            // debugger;
		            var dataSource = self.options.dataSource;
		            if (!!dataSource && util.isFunction(dataSource.getUser)) {
		                compareUser(dataSource.getUser(account));
		            } else {
		                // 没有数据源, 算完成
		                resolve();
		            }
		        }

		        // 如果没有此用户信息或者用户信息过时了, 那么更新之
		        function compareUser(user) {
		            // debugger;
		            if (!user) {
		                refreshUser();
		            } else {
		                var updateTime = +user.updateTime;
		                if (util.isNumber(updateTime) && updateTime < msg.userUpdateTime) {
		                    refreshUser();
		                } else {
		                    // 没有更新, 算完成
		                    resolve();
		                }
		            }
		        }

		        function refreshUser() {
		            self.nim.getUser({
		                account: account,
		                sync: true,
		                done: function(error, user) {
		                    // debugger;
		                    if (!error) {
		                        setTimeout(function() {
		                            logger.info('on update user', user.account, user);
		                            self.options.onupdateuser(user);
		                        }, 0);
		                    }
		                    // 不管有没有错, 都算完成
		                    resolve();
		                }
		            });
		        }
		    });
		};

		IMProtocolFn.onTeamNotificationMsg = function(msg) {
		    var self = this,
		        db = self.db,
		        type = msg.attach.type,
		        from = msg.from,
		        teamId = msg.to,
		        timetag = msg.time,
		        team = msg.attach.team,
		        account = msg.attach.account,
		        accounts = msg.attach.accounts;
		    switch (type) {
		    case 'updateTeam':
		        if (!db.enable) { return; }
		        team.updateTime = timetag;
		        return db.updateTeam(team);
		    case 'addTeamMembers':
		        return self.onAddTeamMembers(msg, team, accounts);
		    case 'removeTeamMembers':
		        return self.onRemoveTeamMembers(team, teamId, accounts);
		    case 'acceptTeamInvite':
		        return self.onAddTeamMembers(msg, team, [from]);
		    case 'passTeamApply':
		        return self.onAddTeamMembers(msg, team, [account]);
		    case 'addTeamManagers':
		        return self.updateTeamManagers(msg, teamId, accounts, true, timetag);
		    case 'removeTeamManagers':
		        return self.updateTeamManagers(msg, teamId, accounts, false, timetag);
		    case 'leaveTeam':
		        return self.onRemoveTeamMembers(team, teamId, [from]);
		    case 'dismissTeam':
		        if (!db.enable) { return; }
		        return db.dismissTeam(teamId, timetag);
		    case 'transferTeam':
		        return self.transferTeam(msg, team, from, account);
		    }
		};

		/*
		 * 普通群拉人
		 * 高级群接受入群邀请
		 */
		IMProtocolFn.onAddTeamMembers = function(msg, team, accounts) {
		    var self = this;
		    var db = self.db;
		    var teamId = team.teamId;
		    var members = TeamMember.assembleMembers(team, accounts);
		    var oldTeam = accounts.indexOf(self.account) === -1;
		    if (oldTeam) { msg.attach.members = members; }
		    if (!db.enable) { return; }
		    var p1;
		    var p2 = db.putTeam(team);
		    /*
		     * 如果是别人被拉进来了, 那么拼接群成员列表
		     * 如果是自己被拉进来了, 那么同步一次群成员列表
		     */
		    if (oldTeam) {
		        p1 = db.putTeamMembers(members);
		    } else {
		        logger.warn('join team', teamId);
		        p2 = new Promise(function(resolve) {
		            self.nim.getTeamMembers({
		                teamId: teamId,
		                sync: true,
		                done: function() {
		                    resolve();
		                }
		            });
		        });
		    }
		    return Promise.all([p1, p2]);
		};

		/*
		 * 移出群成员
		 * 主动退群
		 */
		IMProtocolFn.onRemoveTeamMembers = function(team, teamId, accounts) {
		    var self = this;
		    var db = self.db;
		    if (!db.enable) { return; }
		    /*
		     * 如果是别人被踢了, 那么移除群成员
		     * 如果是自己被踢了, 那么离开该群
		     */
		    if (accounts.indexOf(self.account) === -1) {
		        var p1 = db.removeTeamMembersByAccounts(teamId, accounts);
		        var p2 = Promise.resolve();
		        if (team) {
		            p2 = db.putTeam(team);
		        }
		        return Promise.all([p1, p2]);
		    } else {
		        return db.leaveTeam(teamId);
		    }
		};

		IMProtocolFn.updateTeamManagers = function(msg, teamId, accounts, isManager, timetag) {
		    var db = this.db;
		    msg.attach.members = accounts.map(function(account) {
		        return {
		            id: TeamMember.genId(teamId, account),
		            type: isManager ? 'manager' : 'normal',
		            updateTime: timetag
		        };
		    });
		    if (!db.enable) { return; }
		    return db.updateTeamManagers(teamId, accounts, isManager, timetag);
		};

		IMProtocolFn.transferTeam = function(msg, team, from, account) {
		    var db = this.db;
		    var teamId = team.teamId;
		    var memberUpdateTime = team.memberUpdateTime;
		    var oldOwner = {
		        id: TeamMember.genId(teamId, from),
		        type: 'normal',
		        updateTime: memberUpdateTime
		    };
		    var newOwner = {
		        id: TeamMember.genId(teamId, account),
		        type: 'owner',
		        updateTime: memberUpdateTime
		    };
		    msg.attach.members = [oldOwner, newOwner];
		    if (!db.enable) { return; }
		    return db.transferTeam(team, from, account);
		};

		IMProtocolFn.onHistoryMsgs = function(packet) {
		    if (!packet.error) {
		        packet.obj.msgs = this.message.reverseMsgs(packet.content.msgs);
		    }
		};

		IMProtocolFn.isFilterMsgs = function(msgs) {
		    return !!msgs[0].filter;
		};

		// 分割消息, 将消息分为点对点消息、群消息和过滤消息
		IMProtocolFn.splitMsgs = function(msgs, p2pMsgs, teamMsgs, filterMsgs) {
		    msgs.forEach(function(msg) {
		        if (!msg.filter) {
		            switch (msg.scene) {
		            case 'p2p':
		                p2pMsgs.push(msg);
		                break;
		            case 'team':
		                teamMsgs.push(msg);
		                break;
		            }
		        } else {
		            filterMsgs.push(msg);
		        }
		    });
		};

		/*
		 * 标记消息已读
		 * - 当收到离线消息和在线消息时
		 *     - 如果支持数据库, 那么会存储消息和未读数, 所以标记消息已读
		 *     - 如果不支持数据库, 但是自动标记已读(默认配置), 那么会标记消息
		 *     - 如果不支持数据库, 也不自动标记消息已读, 用户可以主动标记消息已读
		 */
		IMProtocolFn.markMsgRead = function(msgs, force) {
		    if (!util.isArray(msgs)) { msgs = [msgs]; }
		    var self = this;
		    var db = self.db;
		    if (db.enable || self.options.autoMarkRead || force) {
		        // 消息分为点对点消息、群消息、过滤消息
		        var p2pMsgs = [];
		        var teamMsgs = [];
		        var filterMsgs = [];
		        self.splitMsgs(msgs, p2pMsgs, teamMsgs, filterMsgs);
		        self.markP2pMsgsRead(p2pMsgs);
		        self.markTeamMsgsRead(teamMsgs);
		        self.markFilterMsgsRead(filterMsgs);
		    }
		};
		IMProtocolFn.markP2pMsgsRead = function(msgs) {
		    if (!!msgs.length) {
		        var sid = configMap.idMap.talk.id;
		        var cid = configMap.idMap.talk.msg;
		        this.doMarkMsgsRead(sid, cid, msgs);
		    }
		};
		IMProtocolFn.markTeamMsgsRead = function(msgs) {
		    if (!!msgs.length) {
		        var sid = configMap.idMap.team.id;
		        var cid = configMap.idMap.team.teamMsg;
		        this.doMarkMsgsRead(sid, cid, msgs);
		    }
		};
		IMProtocolFn.markFilterMsgsRead = function(msgs) {
		    if (!!msgs.length) {
		        var sid = configMap.idMap.filter.id;
		        var cid = configMap.idMap.filter.filterMsg;
		        this.doMarkMsgsRead(sid, cid, msgs);
		    }
		};

		/*
		 * 标记系统通知已收到
		 * - 当收到离线系统通知和在线系统通知时
		 *     - 如果支持数据库, 那么会存储系统通知和未读数, 所以标记系统通知已读
		 *     - 如果不支持数据库, 那么不存储系统通知和未读数, 所以不标记系统通知已读
		 * - 当用户主动标记某条系统通知已读
		 */
		IMProtocolFn.markSysMsgRead = function(sysMsgs, force) {
		    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
		    var self = this;
		    var db = self.db;
		    if (db.enable || self.options.autoMarkRead || force) {
		        var sid, cid;
		        if (self.isFilterMsgs(sysMsgs)) {
		            sid = configMap.idMap.filter.id;
		            cid = configMap.idMap.filter.filterSysMsg;
		        } else {
		            sid = configMap.idMap.talk.id;
		            cid = configMap.idMap.talk.sysMsg;
		        }
		        self.doMarkMsgsRead(sid, cid, sysMsgs);
		    }
		};

		IMProtocolFn.doMarkMsgsRead = function(sid, cid, msgs) {
		    if (!!msgs.length) {
		        this.sendCmd('batchMarkRead', {
		            sid: sid,
		            cid: cid,
		            ids: msgs.map(function(msg) {return msg.idServer;})
		        });
		    }
		};


	/***/ },
	/* 109 */
	/***/ function(module, exports) {

		/**
		 * @constructor
		 * @property {String}   id                  会话ID
		 * @property {String}   scene               {@link IMMessage.type|场景}
		 * @property {String}   to                  聊天对象, 账号或群ID
		 * @property {Long}     updateTime          会话更新的时间
		 * @property {Message}  lastMsg             此会话的最后一条消息
		 * @property {Boolean}  hasMoreLocalMsgs    是否还有更多地本地消息
		 * @property {Number}   unread              未读数
		 * @property {String}   localCustom         本地自定义扩展字段
		 * - 在{@link support.db|支持数据库}时可以调用{@Link NIM#updateLocalSession|更新本地会话}来更新此字段, 此字段只会被更新到本地数据库, 不会被更新到服务器上
		 */
		function Session() {}

		// TODO to be removed
		Session.parse = function(session) {
		    var arr = session.split('|');
		    return {
		        scene: arr[0],
		        to: arr[1]
		    };
		};

		Session.genSessionByMsg = function(msg) {
		    var session = {
		        id: msg.sessionId,
		        scene: msg.scene,
		        to: msg.target,
		        updateTime: msg.time,
		        lastMsg: msg,
		        hasMoreLocalMsgs: true
		    };
		    return session;
		};

		module.exports = Session;


	/***/ },
	/* 110 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var util = __webpack_require__(10);
		var logger = __webpack_require__(40);
		var SystemMessage = __webpack_require__(111);
		var sysMsgPromise = Promise.resolve();

		IMProtocolFn.splitSysMsgs = function(sysMsgs, customSysMsgs) {
		    var sysMsg;
		    for (var i=sysMsgs.length-1; i>=0; i--) {
		        sysMsg = sysMsgs[i];
		        if (SystemMessage.isCustom(sysMsg)) {
		            sysMsgs.splice(i, 1);
		            customSysMsgs.push(sysMsg);
		        }
		    }
		};

		// 收到离线系统通知
		// 不用调用 handleSysMsg, 因为同步的时候已经同步到这些变更了
		IMProtocolFn.onOfflineSysMsgs = function(packet, isFilter) {
		    var self = this;
		    var sysMsgs = packet.content.sysMsgs.map(function(sysMsg) {
		        sysMsg = SystemMessage.reverse(sysMsg);
		        if (isFilter) { sysMsg.filter = true; }
		        return sysMsg;
		    });
		    // 服务器返回的数据是按照时间从晚到早排序的, 但是一般UI上都是按照时间从早到晚排序的
		    sysMsgs = sysMsgs.reverse();
		    // 标记系统通知已读
		    self.markSysMsgRead(sysMsgs);
		    // 剥离出自定义系统通知
		    var customSysMsgs = [];
		    self.splitSysMsgs(sysMsgs, customSysMsgs);
		    var p1 = isFilter ? 'offlineFilterSysMsgs' : 'offlineSysMsgs';
		    var p2 = isFilter ? 'offlineFilterCustomSysMsgs' : 'offlineCustomSysMsgs';
		    // 存储离线系统通知
		    if (sysMsgs.length) {
		        var promise = self.putSysMsg(sysMsgs, 'offlineSysMsgs').then(function(records) {
		            // debugger;
		            // 这里返回的是过滤后的系统通知, 有可能为空数组
		            sysMsgs = records;
		            // 记录同步结果
		            if (!!sysMsgs.length) {
		                logger.warn('sync', p1, sysMsgs.length, sysMsgs);
		                self.syncResult[p1] = sysMsgs;
		            }
		        });
		        promise.cmd = 'sysMsgs';
		        self.syncPromiseArray.push(promise);
		    }
		    // 记录同步结果
		    if (!!customSysMsgs.length) {
		        logger.warn('sync ' + p2, customSysMsgs);
		        self.syncResult[p2] = customSysMsgs;
		    }
		};

		IMProtocolFn.onSendSysMsg = function(packet, isFilter) {
		    var self = this;
		    var sysMsg = packet.obj;
		    self.completeSysMsg(sysMsg);
		    if (!packet.error) {
		        sysMsg.status = 'success';
		    } else {
		        sysMsg.status = 'fail';
		    }
		    sysMsg = SystemMessage.reverse(sysMsg);
		    if (isFilter) { packet.obj.filter = true; }
		    packet.obj = sysMsg;
		};

		IMProtocolFn.completeSysMsg = function(sysMsg) {
		    sysMsg.from = this.account;
		    return sysMsg;
		};

		// 收到系统通知
		IMProtocolFn.onSysMsg = function(packet, isFilter) {
		    var self = this;
		    var sysMsg = SystemMessage.reverse(packet.content.sysMsg);
		    // 标记已读
		    self.markSysMsgRead(sysMsg);
		    // 是否是过滤
		    if (isFilter) { sysMsg.filter = true; }
		    // 处理系统通知
		    if (SystemMessage.isCustom(sysMsg)) {
		        logger.info('on customSysMsg', sysMsg);
		        self.options.oncustomsysmsg(sysMsg);
		    } else {
		        self.handleSysMsg(sysMsg);
		    }
		};

		IMProtocolFn.handleSysMsg = function(sysMsg) {
		    var self = this;
		    var type = sysMsg.type;
		    var from = sysMsg.from;
		    sysMsgPromise = sysMsgPromise.then(function() {
		        // 存储系统通知
		        return self.putSysMsg(sysMsg, 'onSysMsg');
		    }).then(function(records) {
		        // 这里返回的是过滤后的系统通知, 有可能为空数组
		        sysMsg = records[0];
		    }).then(function() {
		        // debugger;
		        if (!sysMsg) {return;}
		        // 分类型处理
		        var obj;
		        var promise = Promise.resolve();
		        switch (type) {
		        case 'addFriend':
		            obj = {
		                type: 'addFriend',
		                account: from
		            };
		            promise = self.onFriendRequest(obj);
		            break;
		        case 'passFriendApply':
		            obj = {
		                type: 'passFriendApply',
		                account: from
		            };
		            promise = self.onFriendRequest(obj);
		            break;
		        case 'deleteFriend':
		            promise = self.onDeleteFriend({
		                account: from
		            });
		            break;
		        }
		        if (obj && obj.friend) {
		            sysMsg.friend = obj.friend;
		        }
		        return promise;
		    }).then(function() {
		        // debugger;
		        if (!sysMsg) {return;}
		        // 通知系统通知
		        logger.info('on sysMsg', type, sysMsg);
		        setTimeout(function() {
		            self.options.onsysmsg(sysMsg);
		        }, 0);
		    });
		};

		/*
		 * 存储系统通知（不存自定义系统通知）
		 * - 收到离线系统通知
		 * - 收到系统通知
		 * 多 tab 页
		 * - 当支持多个 tab 同时登录时, 收到消息时, 只会在一个 tab 页里面存储这些消息, 其它 tab 页会存储失败
		 * - 存储成功的 tab 负责存储会话和更新未读数, 其它 tab 页也要计算自己的未读数(但是不能更新到数据库), 同时也要将消息推给开发者
		 * type
		 * - offlineSysMsgs
		 * - onSysMsg
		 */
		IMProtocolFn.putSysMsg = function(sysMsgs, type) {
		    // debugger;
		    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
		    // 如果是过滤（云商服专用）, 直接返回
		    if (sysMsgs[0].filter) { return Promise.resolve(sysMsgs); }
		    var self = this;
		    var db = self.db;
		    var supportDb = db.enable;
		    var promise = Promise.resolve();
		    // 未计入未读数的消息
		    var uncoundSysMsgs = [];
		    // 存储并过滤
		    promise = promise.then(function() {
		        // debugger;
		        if (supportDb) {
		            return db.putSysMsg(sysMsgs);
		        } else {
		            return sysMsgs;
		        }
		    }).then(function(records) {
		        // debugger;
		        // 过滤出最终回传给用户的消息
		        var arr = [];
		        sysMsgs.forEach(function(sysMsg) {
		            if (self.checkSysMsgUnique(sysMsg)) {
		                arr.push(sysMsg);
		            }
		        });
		        sysMsgs = arr;
		        if (supportDb) {
		            // records 为存储到数据库的消息数组, 需要根据此数组来更新未读数
		            uncoundSysMsgs = records;
		        } else {
		            uncoundSysMsgs = sysMsgs;
		        }
		    });
		    promise = promise.then(function() {
		        // debugger;
		        // 获取未读数
		        return self.getSysMsgUnread().then(function(sysMsgUnread) {
		            // debugger;
		            // 如果未计入未读数的消息不为空数组, 说明此 tab 页负责存储消息
		            // 如果未计入未读数的消息为空数组, 则说明其它 tab 页已经存储过消息了, 但是依然需要重新计算未读数, 只是不能存储这个未读数
		            if (!uncoundSysMsgs.length) {
		                uncoundSysMsgs = sysMsgs;
		                uncoundSysMsgs.backward = true;
		            }
		            // 更新未读数
		            return self.updateSysMsgUnread(uncoundSysMsgs, sysMsgUnread, 1).then(function(sysMsgUnread) {
		                // debugger;
		                // 缓存未读数
		                if (type === 'offlineSysMsgs') {
		                    self.syncResult.sysMsgUnread = sysMsgUnread;
		                }
		                // 通知开发者, 未读数更新了
		                if (type === 'onSysMsg') {
		                    self.onUpdateSysMsgUnread(sysMsgUnread);
		                }
		            });
		        });
		    });
		    return promise.then(function() {
		        // 把过滤后的系统通知返回出去
		        return sysMsgs;
		    });
		};

		IMProtocolFn.checkSysMsgUnique = util.genCheckUniqueFunc('idServer');

		// 废弃, 使用 checkMsgUnique 来检查消息是否唯一
		// IMProtocolFn.getSysMsgFromDataSource = function(sysMsg) {
		//     var dataSource = this.options.dataSource;
		//     if (!!dataSource) {
		//         if (util.isFunction(dataSource.getSysMsg)) {
		//             return dataSource.getSysMsg(sysMsg);
		//         }
		//     }
		// };

		// 如果支持数据库, 那么从数据库拿未读记录
		// 如果不支持数据库, 那么从数据源获取未读记录
		IMProtocolFn.getSysMsgUnread = function() {
		    var self = this;
		    var db = self.db;
		    return new Promise(function(resolve) {
		        if (db.enable) {
		            db.getSysMsgUnread().then(function(records) {
		                resolve(records);
		            }, function() {
		                resolve(self.getSysMsgUnreadFromDataSource());
		            });
		        } else {
		            resolve(self.getSysMsgUnreadFromDataSource());
		        }
		    });
		};

		IMProtocolFn.getSysMsgUnreadFromDataSource = function () {
		    return this.sysMsgUnread || {};
		    // 这个数据就不用数据源了, SDK放内存里好了
		    // var dataSource = this.options.dataSource;
		    // if (!!dataSource) {
		    //     if (util.isFunction(dataSource.getSysMsgUnread)) {
		    //         return dataSource.getSysMsgUnread();
		    //     }
		    // }
		};

		/*
		 * 更新系统通知未读数, 如果支持数据库, 更新数据库
		 * - 收到系统通知 delta 为 1
		 * - 主动标记系统通知 delta 为 0
		 */
		IMProtocolFn.updateSysMsgUnread = function(sysMsgs, sysMsgUnread, delta) {
		    // debugger;
		    if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
		    if (!sysMsgs.length) {return Promise.resolve(sysMsgUnread);}
		    sysMsgUnread = sysMsgUnread || {};
		    var self = this;
		    var db = self.db;
		    var type;
		    sysMsgs.forEach(function(sysMsg) {
		        type = sysMsg.type;
		        sysMsgUnread[type] = (sysMsgUnread[type] || 0) + delta;
		    });
		    sysMsgUnread = SystemMessage.completeUnread(sysMsgUnread);
		    // 更新后存起来
		    self.sysMsgUnread = sysMsgUnread;
		    // 如果落后, 那么不能存储未读数
		    if (db.enable && !sysMsgs.backward) {
		        return db.updateSysMsgUnread(sysMsgUnread);
		    } else {
		        return Promise.resolve(sysMsgUnread);
		    }
		};

		IMProtocolFn.onUpdateSysMsgUnread = function(sysMsgUnread) {
		    var self = this;
		    setTimeout(function() {
		        logger.info('on update sysMsg unread', sysMsgUnread);
		        self.options.onupdatesysmsgunread(sysMsgUnread);
		    }, 0);
		};

		/*
		 * 更新系统消息, 如果支持数据库, 那么将变更写入数据库
		 * - 更新好友相关的系统消息的状态
		 * - 更新群相关的系统消息的状态
		 * 更新完后, 通知开发者
		 */
		IMProtocolFn.updateSysMsg = function(sysMsg) {
		    var self = this;
		    var db = self.db;
		    var promise;
		    if (db.enable) {
		        promise = db.updateSysMsg(sysMsg);
		    } else {
		        promise = Promise.resolve(sysMsg);
		    }
		    promise.then(function(sysMsg) {
		        self.onUpdateSysMsg(sysMsg);
		    });
		};

		IMProtocolFn.onUpdateSysMsg = function(sysMsgs) {
		    var self = this;
		    setTimeout(function() {
		        if (!util.isArray(sysMsgs)) { sysMsgs = [sysMsgs]; }
		        sysMsgs.forEach(function(sysMsg) {
		            logger.info('on update sysMsg', sysMsg);
		            self.options.onupdatesysmsg(sysMsg);
		        });
		    }, 0);
		};


	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var undef = util.undef;
		var notundef = util.notundef;
		var parser = __webpack_require__(49).getInstance('IM');
		var team = __webpack_require__(104);
		var TeamMember = __webpack_require__(87);

		/**
		 * 系统通知类型
		 * 
		 * - `'addFriend'`
		 *     - {@link NIM#addFriend|直接加某个用户为好友}后, 对方不需要确认, 直接成为当前登录用户的好友。
		 *     - 对方会收到一条类型为`'addFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号。
		 * - `'applyFriend'`
		 *     - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
		 *         - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
		 *         - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
		 * - `'passFriendApply'`
		 *     - 见 `'applyFriend'`
		 * - `'rejectFriendApply'`
		 *     - 见 `'applyFriend'`
		 * - `'deleteFriend'`
		 *     - {@link NIM#deleteFriend|删除好友}后, 被删除的人会收到一条类型为`'deleteFriend'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为删除方的帐号, `to`字段的值为被删除方的账号。
		 * - `'teamInvite'`
		 *     - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
		 *         - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
		 *         - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
		 * - `'rejectTeamInvite'`
		 *     - 见`'teamInvite'`
		 * - `'applyTeam'`
		 *     - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
		 *         - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
		 *         - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
		 * - `'rejectTeamApply'`
		 *     - 见`'applyTeam'`
		 * - `'custom'`
		 *     - 自定义系统通知
		 * 
		 * @memberOf SystemMessage
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeMap = {
		    customP2p: 100,
		    customTeam: 101
		};
		var typeReverseMap = {
		    0: 'applyTeam',
		    1: 'rejectTeamApply',
		    2: 'teamInvite',
		    3: 'rejectTeamInvite',
		    5: 'friendRequest',
		    6: 'deleteFriend',
		    // 自定义系统通知
		    100: 'customP2p',
		    101: 'customTeam',
		    // 云商服自定义系统通知, 直接复用100
		    102: 'customP2p'
		};
		var friendRequestReverseMap = {
		    1: 'addFriend',
		    2: 'applyFriend',
		    3: 'passFriendApply',
		    4: 'rejectFriendApply'
		};

		var categoryTeam = 'team';
		var categoryFriend = 'friend';
		var type2category = {
		    applyTeam: categoryTeam,
		    rejectTeamApply: categoryTeam,
		    teamInvite: categoryTeam,
		    rejectTeamInvite: categoryTeam,
		    addFriend: categoryFriend,
		    applyFriend: categoryFriend,
		    passFriendApply: categoryFriend,
		    rejectFriendApply: categoryFriend,
		    deleteFriend: categoryFriend
		};

		/**
		 * 内建系统通知的种类
		 * - `'team'`
		 * - `'friend'`
		 * 
		 * @memberOf SystemMessage
		 * @name category
		 * @readOnly
		 * @enum {String}
		 */

		/**
		 * 内建系统通知的状态
		 * - `'init'`: 未处理状态
		 * - `'passed'`: 已通过
		 * - `'rejected'`: 已拒绝
		 * - `'error'`: 错误
		 * 
		 * @memberOf SystemMessage
		 * @name state
		 * @readOnly
		 * @enum {String}
		 */

		/**
		 * 系统通知
		 *
		 * 系统通知分为两种
		 * - 内建系统通知
		 *     - 目前所有的内建系统通知都是与高级群相关的通知, 某些群操作后相关的群成员会收到相应的系统通知。
		 *     - 内建系统通知与{@link IMMessage.type|群通知消息}的区别是系统通知是发给单人的通知, 群通知消息是发给所有群成员的消息。
		 * - 自定义系统通知
		 *     - 开发者可以向其他用户或群{@link NIM#sendCustomSysMsg|发送自定义系统通知}
		 *     - 自定义系统通知和自定义消息的区别如下
		 *         - 自定义消息属于{@link IMMessage|消息}, 会存储在云信的消息数据库中, 需要跟其他{@link IMMessage|消息}一同展现给用户。
		 *         - 自定义系统通知属于{@link SystemMessage|系统通知}, 用于第三方通知自己, 不会存储在云信的数据库中, SDK不会解析这些通知, SDK仅仅负责传递这些通知。
		 * - 请参考{@link NIM|初始化SDK}时传入的`onofflinesysmsgs`、`onofflinecustomsysmsgs`、`onsysmsg`、`oncustomsysmsg`等回调。
		 * 
		 * @constructor
		 * @property {Number}           time                    时间戳
		 * @property {String}           [type]                  {@link SystemMessage.type|系统通知类型}
		 * @property {String}           from                    系统通知的来源, 账号或者群ID
		 * @property {String}           to                      系统通知的目标, 账号或者群ID
		 * @property {String}           [idServer]              内建系统通知的 idServer
		 * @property {Boolean}          [read]                  内建系统通知是否已读
		 * @property {String}           [category]              {@link SystemMessage.category|内建系统通知的种类}
		 * @property {String}           [state]                 内建系统通知的{@link SystemMessage|state}
		 * @property {NIMError}         [error]                 内建系统通知的{@link SystemMessage.state|state} 为 `'error'` 时, 此字段包含错误的信息
		 * @property {String}           [localCustom]           内建系统通知的本地自定义扩展字段
		 * - 在{@link support.db|支持数据库}时可以调用{@Link NIM#updateLocalSysMsg|更新本地系统通知}来更新此字段, 此字段只会被更新到本地数据库, 不会被更新到服务器上
		 * @property {String}           [ps]                    内建系统通知的附言
		 * @property {Object}           [attach]                内建系统通知的附加信息, 参考{@link SystemMessage.type|系统通知类型}来查看不同类型的系统通知对应的附加信息
		 * @property {String}           [scene]                 自定义系系统通知的场景, 参考{@link IMMessage.scene|消息场景}
		 * @property {String}           [content]               自定义系统通知的内容
		 * @property {String}           [apnsText]              自定义系统通知的推送文案, 仅对接收方为iOS设备有效
		 * @property {String}           [pushPayload]           自定义系统通知的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @property {Boolean}          [sendToOnlineUsersOnly] 自定义系统通知是否只发送给在线用户。
		 * - `true`时只发送给在线用户, 适合发送即时通知, 比如正在输入。
		 * - `false`时假如目标用户或群不在线, 会在其上线后推送过去。
		 * - 该参数只对点对点自定义系统通知有效, 对群自定义系统通知无效, 群自定义系统通知只会发给在线的群成员, 不会存离线。
		 * @property {Boolean}          cc                      自定义系统通知是否抄送
		 * @property {Boolean}          isPushable              是否需要推送
		 * @property {Boolean}          needPushNick            是否需要推送昵称
		 */
		function SystemMessage(options) {
		    var self = this;
		    util.verifyOptions(options, 'type to');
		    util.verifyParamValid('type', options.type, SystemMessage.validTypes);
		    if (options.type.indexOf('custom') !== -1) {
		        util.verifyOptions(options, 'content');
		        self.attach = options.content;
		        if (notundef(options.apnsText)) { self.apnsText = '' + options.apnsText; }
		        if (notundef(options.pushPayload)) { self.pushPayload = '' + options.pushPayload; }
		        // 开关
		        if (notundef(options.sendToOnlineUsersOnly)) { self.sendToOnlineUsersOnly = !!options.sendToOnlineUsersOnly ? 0 : 1; }
		        if (notundef(options.cc)) { self.cc = !!options.cc ? 1 : 0; }
		        if (notundef(options.isPushable)) { self.isPushable = options.isPushable ? 1 : 0; }
		        if (notundef(options.isUnreadable)) { self.isUnreadable = options.isUnreadable ? 1 : 0; }
		        if (notundef(options.needPushNick)) { self.needPushNick = options.needPushNick ? 1 : 0; }
		    }
		    self.time = +new Date();
		    self.to = options.to;
		    self.type = typeMap[options.type];
		    self.idClient = util.guid();
		}

		SystemMessage.validTypes = Object.keys(typeMap).concat(Object.keys(type2category));
		SystemMessage.validCategories = ['team', 'friend'];

		SystemMessage.isCustom = function(sysMsg) {
		    return sysMsg.type === 'custom';
		};

		SystemMessage.reverse = function(sysMsg) {
		    var obj = {
		        time: +sysMsg.time,
		        to: sysMsg.to,
		        type: typeReverseMap[sysMsg.type]
		    };
		    
		    if (notundef(sysMsg.from)) { obj.from = sysMsg.from; }
		    if (notundef(sysMsg.idServer)) { obj.idServer = '' + sysMsg.idServer; }
		    if (notundef(sysMsg.idClient)) { obj.idClient = sysMsg.idClient; }
		    if (notundef(sysMsg.ps)) { obj.ps = sysMsg.ps; }

		    // 内建系统通知, attach里面是额外数据
		    sysMsg.attach = !!sysMsg.attach ? ''+sysMsg.attach : '';
		    if (obj.type.indexOf('custom') === -1) {
		        if (!!sysMsg.attach) {
		            obj.attach = {};
		            var attach = JSON.parse(sysMsg.attach);
		            if (notundef(attach.vt)) {
		                // 好友系统请求
		                obj.type = friendRequestReverseMap[attach.vt];
		                delete obj.attach;
		            } else {
		                // 群系统通知
		                if (notundef(attach.tinfo)) {
		                    obj.attach.team = team.reverse(parser.unserialize(attach.tinfo, 'team'));
		                }
		                if (notundef(attach.tlist)) {
		                    obj.attach.member = TeamMember.reverse(parser.unserialize(attach.tlist, 'teamMember'));
		                }
		            }
		        }
		        obj.category = type2category[obj.type];
		        obj.read = false;
		        obj.state = 'init';
		    // 自定义的系统通知
		    } else {
		        if (obj.type === 'customTeam') {
		            obj.to = +obj.to;
		        }
		        obj.content = sysMsg.attach;
		        if (notundef(sysMsg.apnsText)) { obj.apnsText = sysMsg.apnsText; }
		        if (notundef(sysMsg.pushPayload)) { obj.pushPayload = sysMsg.pushPayload; }
		        // 开关
		        util.merge(obj, {
		            sendToOnlineUsersOnly: undef(sysMsg.sendToOnlineUsersOnly) || +sysMsg.sendToOnlineUsersOnly === 0,
		            cc: undef(sysMsg.cc) || +sysMsg.cc === 1,
		            isPushable: undef(sysMsg.isPushable) || +sysMsg.isPushable === 1,
		            isUnreadable: undef(sysMsg.isUnreadable) || +sysMsg.isUnreadable === 1,
		            needPushNick: notundef(sysMsg.needPushNick) && +sysMsg.needPushNick === 1
		        });
		        // 设置 scene
		        obj.scene = obj.type.slice(6).toLowerCase();
		        // 最终展示给用户的类型就是`'custome'`
		        obj.type = 'custom';
		    }

		    // 开关
		    if (notundef(sysMsg.cc)) { obj.cc = (+sysMsg.cc === 1); }
		    
		    // SDK 自己加的属性
		    obj.status = sysMsg.status || 'success';
		    if (notundef(sysMsg.filter)) { obj.filter = sysMsg.filter; }

		    return obj;
		};

		SystemMessage.completeUnread = function(sysMsgUnread) {
		    delete sysMsgUnread[categoryTeam];
		    delete sysMsgUnread[categoryFriend];
		    var category;
		    Object.keys(type2category).forEach(function(type) {
		        sysMsgUnread[type] = sysMsgUnread[type] || 0;
		        if (sysMsgUnread[type] < 0) {
		            sysMsgUnread[type] = 0;
		        }
		        category = type2category[type];
		        sysMsgUnread[category] = sysMsgUnread[category] || 0;
		        sysMsgUnread[category] = sysMsgUnread[category] + sysMsgUnread[type];
		    });
		    sysMsgUnread.total = sysMsgUnread[categoryTeam] + sysMsgUnread[categoryFriend];
		    return sysMsgUnread;
		};

		module.exports = SystemMessage;


	/***/ },
	/* 112 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;
		var util = __webpack_require__(10);
		var logger = __webpack_require__(40);
		var Session = __webpack_require__(109);

		IMProtocolFn.onDeleteSessions = function(packet) {
		    packet.obj = packet.obj.sessions.map(function(session) {
		        return Session.parse(session);
		    });
		};

		IMProtocolFn.onUpdateSession = function(session) {
		    logger.info('on update session', session.id, session);
		    // 此字段有可能被用户更新了, 所以去掉
		    delete session.hasMoreLocalMsgs;
		    var self = this;
		    setTimeout(function() {
		        self.options.onupdatesession(session);
		    }, 0);
		};

		/*
		 * 设置当前会话, 并清空它的未读数
		 */
		IMProtocolFn.setCurrSession = function(sessionId) {
		    var self = this;
		    sessionId = '' + sessionId;
		    self.currSessionId = sessionId;
		    self.resetSessionUnread(sessionId);
		    logger.warn('set curr session', sessionId);
		};

		/*
		 * 清空某个回话未读数,
		 * - 如果没有从数据源找到该会话对象, 那么直接返回
		 * - 如果找到对应的会话对象, 那么清空其未读数
		 */
		IMProtocolFn.resetSessionUnread = function(sessionId) {
		    sessionId = '' + sessionId;
		    var self = this;
		    var db = self.db;
		    var session = self.getSessionFromDataSource(sessionId);
		    if (!session) {
		        logger.warn('reset session unread, no', sessionId);
		        return;
		    }
		    if (db.enable) {
		        db.resetSessionUnread(sessionId).then(function() {
		            updateSession();
		        });
		    } else {
		        updateSession();
		    }
		    function updateSession() {
		        session = {
		            id: sessionId,
		            unread: 0
		        };
		        self.onUpdateSession(session);
		    }
		};

		IMProtocolFn.getSessionFromDataSource = function(sessionId) {
		    var dataSource = this.options.dataSource;
		    if (!!dataSource) {
		        if (util.isFunction(dataSource.getSession)) {
		            return dataSource.getSession(sessionId);
		        }
		    }
		};


	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;

		IMProtocolFn.processChatroom = function(packet) {
		    var self = this;
		    switch (packet.cmd) {
		    case 'getChatroomAddress':
		        self.onChatroomAddress(packet);
		        break;
		    }
		};

		IMProtocolFn.onChatroomAddress = function(packet) {
		    if (!packet.error) {
		        packet.obj.address = packet.content.address;
		    }
		};


	/***/ },
	/* 114 */
	/***/ function(module, exports, __webpack_require__) {

		var IMProtocolFn = __webpack_require__(80).fn;

		/**
		 * 目前用于云商服的特殊协议, 服务器端会拦截相关的消息, 然后将这些消息转发到第三方服务器上
		 * 第三方服务器进行处理后, 可以选择回传给服务器处理后的消息（也有可能是重新生成的新的消息）, 服务器会下发这些消息
		 */
		IMProtocolFn.processFilter = function(packet) {
		    // filter表示此消息是过滤消息, 目前这个字段只用于云商服, 不用在文档中列出
		    var self = this;
		    switch (packet.cmd) {
		    // 发送过滤消息
		    case 'sendFilterMsg':
		        self.onSendMsg(packet, true);
		        break;
		    // 过滤消息通知
		    case 'filterMsg':
		        self.onMsg(packet, true);
		        break;
		    // 过滤系统通知通知
		    case 'filterSysMsg':
		        self.onSysMsg(packet, true);
		        break;
		    // 发送过滤自定义系统通知
		    case 'sendFilterCustomSysMsg':
		        self.onSendSysMsg(packet, true);
		        break;
		    }
		};


	/***/ },
	/* 115 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);

		var Index = function(options) {
		    this.account = options.account;
		};

		var pro = Index.prototype;

		var Message = pro.Message = __webpack_require__(116);
		var TextMessage = pro.TextMessage = __webpack_require__(117);
		var FileMessage = pro.FileMessage = __webpack_require__(118);
		var GeoMessage = pro.GeoMessage = __webpack_require__(122);
		var NotificationMessage = pro.NotificationMessage = __webpack_require__(123);
		var TipMessage = pro.TipMessage = __webpack_require__(124);
		var CustomMessage = pro.CustomMessage = __webpack_require__(125);

		pro.validScenes = Message.validScenes;
		pro.validTypes = Message.validTypes;

		pro.reverse = function(msg) {
		    var obj;
		    var type = Message.getType(msg);
		    switch (type) {
		    case 'text':
		        obj = TextMessage.reverse(msg);
		        break;
		    case 'image':
		    case 'audio':
		    case 'video':
		    case 'file':
		        obj = FileMessage.reverse(msg);
		        break;
		    case 'geo':
		        obj = GeoMessage.reverse(msg);
		        break;
		    case 'notification':
		        obj = NotificationMessage.reverse(msg);
		        break;
		    case 'tip':
		        obj = TipMessage.reverse(msg);
		        break;
		    case 'custom':
		        obj = CustomMessage.reverse(msg);
		        break;
		    default:
		        obj = Message.reverse(msg);
		        break;
		    }
		    Message.setExtra(obj, this.account);
		    return obj;
		};

		pro.reverseMsgs = function(msgs, options) {
		    var self = this;
		    var modifyObj,
		        mapper;
		    return msgs.map(function(msg) {
		        msg = self.reverse(msg);
		        if (options) {
		            modifyObj = options.modifyObj;
		            if (modifyObj) {
		                msg = util.merge(msg, modifyObj);
		            }
		            mapper = options.mapper;
		            if (util.isFunction(mapper)) {
		                msg = mapper(msg);
		            }
		        }
		        return msg;
		    });
		};

		module.exports = Index;


	/***/ },
	/* 116 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var undef = util.undef;
		var notundef = util.notundef;
		var loginPort = __webpack_require__(46);
		var BaseMessage = __webpack_require__(62);

		/**
		 * 场景
		 *
		 * - `'p2p'` (单人聊天)
		 * - `'team'` (群聊)
		 * 
		 * @memberOf IMMessage
		 * @name scene
		 * @readOnly
		 * @enum {String}
		 */
		var sceneMap = {
		    // 单人聊天
		    p2p: 0,
		    // 群聊
		    team: 1
		};
		var sceneReverseMap = {
		    0: 'p2p',
		    1: 'team'
		};
		var validScenes = Object.keys(sceneMap);

		/**
		 * 消息类型
		 * 
		 * - `'text'` (文本)
		 * - `'image'` (图片)
		 * - `'audio'` (音频)
		 * - `'video'` (视频)
		 * - `'file'` (文件)
		 * - `'geo'` (地理位置)
		 * - `'custom'` (自定义消息)
		 * - `'notification'` (群通知消息)
		 *     - 某些群操作后所有群成员会收到一条相应的群通知消息, 详细介绍请参考{@link IMMessage.attach.type|群通知消息的类型}
		 * 
		 * @memberOf IMMessage
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeMap = BaseMessage.typeMap;
		var validTypes = BaseMessage.validTypes;

		/**
		 * IM 消息
		 * 
		 * @constructor
		 * @name IMMessage
		 * @property {String}   scene           {@link IMMessage.scene|场景}
		 * @property {String}   from            消息发送方, 帐号
		 * @property {String}   fromNick        消息发送方的昵称
		 * @property {String}   fromClientType  发送方的{@link LoginPort.type|设备类型}
		 * @property {String}   fromDeviceId    发送端设备id
		 * @property {String}   to              消息接收方, 帐号或群id
		 * @property {Number}   time            时间戳
		 * @property {Number}   userUpdateTime  发送方信息更新时间
		 * @property {String}   type            {@link IMMessage.type|消息类型}
		 * @property {String}   sessionId       消息所属的{@link Session|会话}的ID
		 * @property {String}   target          聊天对象, 账号或者群id
		 * @property {String}   flow            消息的流向
		 * - 'in'表示此消息是收到的消息
		 * - 'out'表示此消息是发出的消息
		 * @property {String}   status          消息发送状态
		 * - `'sending'` 发送中
		 * - `'success'` 发送成功
		 * - `'fail'` 发送失败
		 * @property {String}   [text]          文本消息的文本内容, 请参考{@link NIM#sendText|发送文本消息}
		 * @property {Object}   [file]          文件消息的文件对象, 具体字段请参考{@link Image|图片对象}、{@link Audio|音频对象}、{@link Video|视频对象}和{@link File|文件对象}, 请参考{@link NIM#sendFile|发送文件消息}
		 * @property {Object}   [geo]           地理位置消息的{@link Geo|地理位置对象}, 请参考{@link NIM#sendGeo|发送地理位置消息}
		 * @property {String}   [content]       自定义消息的消息内容, 开发者可以自行扩展, 建议封装成JSON格式字符串, 请参考{@link NIM#sendCustomMsg|发送自定义消息}
		 * @property {Object}   [attach]        {@link IMMessage.type|群通知消息}的附加信息, 
		 *                                      参考{@link IMMessage.attach.type|群通知消息的类型}来查看不同类型的群通知消息对应的附加信息
		 * @property {String}   idClient        SDK生成的消息id, 在发送消息之后会返回给开发者, 开发者可以在发送消息的结果回调里面根据这个ID来判断相应消息的发送状态, 到底是发送成功了还是发送失败了, 然后根据此状态来更新页面的UI。如果发送失败, 那么可以重新发送此消息
		 * @property {String}   [idServer]      服务器用于区分消息用的ID, 用于{@link NIM#getHistoryMsgs|获取历史消息}和{@link NIM#searchHistoryMsgs|获取包含关键词的历史消息}, 此字段可能没有, 所以开发者应该使用`idClient`来唯一标识消息
		 * @property {Boolean}  isMuted         该消息在接收方是否应该被静音
		 * @property {Boolean}  resend          是否是重发的消息
		 * @property {String}   [custom]        扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @property {String}   [pushContent]   自定义推送文案
		 * @property {String}   [pushPayload]   自定义的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @property {String}   [localCustom]   本地自定义扩展字段
		 * - 在{@link support.db|支持数据库}时可以调用{@Link NIM#updateLocalMsg|更新本地消息}来更新此字段, 此字段只会被更新到本地数据库, 不会被更新到服务器上
		 * @property {Boolean}  isHistoryable   是否存储云端历史
		 * @property {Boolean}  isRoamingable   是否支持漫游
		 * @property {Boolean}  isSyncable      是否支持发送者多端同步
		 * @property {Boolean}  cc              是否支持抄送
		 * @property {Boolean}  isPushable      是否需要推送
		 * @property {Boolean}  isOfflinable    是否要存离线
		 * @property {Boolean}  isUnreadable    是否计入消息未读数
		 * @property {Boolean}  needPushNick    是否需要推送昵称
		 */
		function Message(options){
		    util.verifyOptions(options, 'scene to type');
		    util.verifyParamValid('scene', options.scene, validScenes);
		    var self = this;
		    self.scene = sceneMap[options.scene];
		    self.to = '' + options.to;
		    self.type = typeMap[options.type];
		    self.resend = !!options.resend ? 1 : 0;
		    // 如果不是重发, 那么生成idClient；如果是重发, 那么由开发者传入idClient
		    if (!options.resend) {
		        self.idClient = util.guid();
		    } else {
		        util.verifyOptions(options, 'idClient');
		        self.idClient = options.idClient;
		    }
		    if (notundef(options.custom)) { self.custom = '' + options.custom; }
		    if (notundef(options.pushContent)) { self.pushContent = '' + options.pushContent; }
		    if (notundef(options.pushPayload)) { self.pushPayload = '' + options.pushPayload; }
		    // 开关
		    if (notundef(options.isHistoryable)) { self.isHistoryable = options.isHistoryable ? 1 : 0; }
		    if (notundef(options.isRoamingable)) { self.isRoamingable = options.isRoamingable ? 1 : 0; }
		    if (notundef(options.isSyncable)) { self.isSyncable = options.isSyncable ? 1 : 0; }
		    if (notundef(options.cc)) { self.cc = !!options.cc ? 1 : 0; }
		    if (notundef(options.isPushable)) { self.isPushable = options.isPushable ? 1 : 0; }
		    if (notundef(options.isOfflinable)) { self.isOfflinable = options.isOfflinable ? 1 : 0; }
		    if (notundef(options.isUnreadable)) { self.isUnreadable = options.isUnreadable ? 1 : 0; }
		    if (notundef(options.needPushNick)) { self.needPushNick = options.needPushNick ? 1 : 0; }
		}

		Message.prototype.getScene = function() {
		    return sceneReverseMap[this.scene];
		};

		Message.getScene = function(msg) {
		    var scene = msg.scene;
		    return sceneReverseMap[scene] || scene;
		};

		Message.getType = BaseMessage.getType;

		Message.reverse = function(msg) {
		    var scene = sceneReverseMap[msg.scene];
		    var obj = {
		        scene: scene || msg.scene,
		        from: msg.from,
		        fromNick: msg.fromNick,
		        fromClientType: loginPort.reverseType(msg.fromClientType),
		        fromDeviceId: msg.fromDeviceId,
		        // to 为第三方账号或者群ID, 强制转为字符串
		        to: '' + msg.to,
		        time: +msg.time,
		        type: Message.getType(msg),
		        isHistoryable: undef(msg.isHistoryable) || +msg.isHistoryable === 1,
		        isRoamingable: undef(msg.isRoamingable) || +msg.isRoamingable === 1,
		        isSyncable: undef(msg.isSyncable) || +msg.isSyncable === 1,
		        cc: undef(msg.cc) || +msg.cc === 1,
		        isPushable: undef(msg.isPushable) || +msg.isPushable === 1,
		        isOfflinable: undef(msg.isOfflinable) || +msg.isOfflinable === 1,
		        isUnreadable: undef(msg.isUnreadable) || +msg.isUnreadable === 1,
		        needPushNick: undef(msg.needPushNick) || +msg.needPushNick === 1
		    };

		    // 只有消息接收者才用处理字段 isMuted
		    if (notundef(msg.isMuted)) { obj.isMuted = +msg.isMuted === 1; }
		    if (notundef(msg.resend)) { obj.resend = +msg.resend === 1; }
		    if (notundef(msg.idClient)) { obj.idClient = msg.idClient; }
		    // 漫游消息和离线消息没有 idServer
		    if (notundef(msg.idServer)) { obj.idServer = '' + msg.idServer; }
		    if (notundef(msg.userUpdateTime)) { obj.userUpdateTime = +msg.userUpdateTime; }
		    if (notundef(msg.custom)) { obj.custom = msg.custom; }
		    if (notundef(msg.pushContent)) { obj.pushContent = msg.pushContent; }
		    if (notundef(msg.pushPayload)) { obj.pushPayload = msg.pushPayload; }

		    // SDK 自己加的属性
		    obj.status = msg.status || 'success';
		    if (notundef(msg.filter)) { obj.filter = msg.filter; }
		    return obj;
		};

		Message.setExtra = function(obj, account) {
		    obj.target = Message.getMsgTarget(obj, account);
		    obj.sessionId = obj.scene + '-' + obj.target;
		    BaseMessage.setFlow(obj, account);
		};

		// 获取聊天对象
		Message.getMsgTarget = function(msg, account) {
		    if (msg.scene === 'p2p') {
		        return msg.to === account ? msg.from: msg.to;
		    } else if (msg.scene === 'team') {
		        return msg.to;
		    }
		};

		// 根据 idClient 去重
		Message.deduplication = function(msgs) {
		    var set = {},
		        array = [],
		        idClient;
		    msgs.forEach(function(msg) {
		        idClient = msg.idClient;
		        if (!set[idClient]) {
		            set[idClient] = true;
		            array.push(msg);
		        }
		    });
		    return array;
		};

		/**
		 * 获取数组中的最后一条消息（时间戳最大的）
		 * @private
		 * @param  {Object[]} msgs  消息数组
		 * @return {Object}         最后一条消息
		 */
		Message.getLastMsg = function(msgs) {
		    var msg1 = msgs[0] || {},
		        msg2 = msgs[1] || {},
		        timetag1 = msg1.time || 0,
		        timetag2 = msg2.time || 0,
		        msg = msg1;
		    if (timetag1 < timetag2) {
		        msg = msgs[msgs.length-1];
		    }
		    return msg;
		};

		Message.getMaxTimetag = function(msgs) {
		    return Message.getLastMsg(msgs).time;
		};

		Message.validScenes = validScenes;
		Message.validTypes = validTypes;

		module.exports = Message;


	/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {

		var Message = __webpack_require__(116);
		var util = __webpack_require__(10);

		function TextMessage(options) {
		    util.verifyOptions(options, 'text');
		    options.type = 'text';
		    Message.call(this, options);
		    this.body = options.text;
		}
		TextMessage.prototype = Object.create(Message.prototype);

		TextMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    obj.text = msg.body;
		    return obj;
		};

		module.exports = TextMessage;


	/***/ },
	/* 118 */
	/***/ function(module, exports, __webpack_require__) {

		var Message = __webpack_require__(116);
		var util = __webpack_require__(10);

		function FileMessage(options) {
		    if (util.notundef(options.type)) {
		        util.verifyFileType(options.type);
		    } else {
		        options.type = 'file';
		    }
		    util.verifyOptions(options, 'file');
		    util.verifyOptions(options.file, 'url ext size md5', true, 'file.');
		    switch (options.type) {
		    case 'image':
		        ImageMessage.verifyFile(options.file);
		        break;
		    case 'audio':
		        AudioMessage.verifyFile(options.file);
		        break;
		    case 'video':
		        VideoMessage.verifyFile(options.file);
		        break;
		    default:
		        break;
		    }
		    Message.call(this, options);
		    this.attach = JSON.stringify(options.file);
		}
		FileMessage.prototype = Object.create(Message.prototype);

		FileMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    msg.attach = !!msg.attach ? ''+msg.attach : '';
		    obj.file = !!msg.attach ? JSON.parse(msg.attach) : {};
		    // 如果是音频, 转成mp3
		    if (obj.type === 'audio') {
		        obj.file.mp3Url = obj.file.url + '?audioTrans&type=mp3';
		    }
		    return obj;
		};

		/**
		 * 文件对象
		 * 
		 * 当{@link NIM#sendFile|发送文件消息}或收到文件消息时, {@link Message|消息对象}的`file`字段代表文件对象, 包含以下属性: 
		 * 
		 * @constructor
		 * @name File
		 * @property {String} name 名字
		 * @property {Number} size 大小, 单位byte
		 * @property {String} md5  md5
		 * @property {String} url  url
		 * @property {String} ext  扩展名
		 * @see {@link Image|图片对象}
		 * @see {@link Audio|音频对象}
		 * @see {@link Video|视频对象}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link Geo|地理位置对象}
		 */

		module.exports = FileMessage;
		var ImageMessage = __webpack_require__(119);
		var AudioMessage = __webpack_require__(120);
		var VideoMessage = __webpack_require__(121);


	/***/ },
	/* 119 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var FileMessage = __webpack_require__(118);

		function ImageMessage() {}
		ImageMessage.prototype = Object.create(FileMessage.prototype);

		ImageMessage.verifyFile = function(file) {
		    util.verifyOptions(file, 'w h', true, 'file.');
		};

		/**
		 * 图片对象
		 * 
		 * 当{@link NIM#sendFile|发送图片消息}或收到图片消息时, {@link Message|消息对象}的`file`字段代表图片对象, 包含以下属性: 
		 *
		 * @constructor
		 * @name Image
		 * @property {String} name 名字
		 * @property {Number} size 大小, 单位byte
		 * @property {String} md5  md5
		 * @property {String} url  url
		 * @property {String} ext  扩展名
		 * @property {String} w    宽, 单位px
		 * @property {String} h    高, 单位px
		 * @see {@link Audio|音频对象}
		 * @see {@link Video|视频对象}
		 * @see {@link File|文件对象}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link Geo|地理位置对象}
		 */

		module.exports = ImageMessage;


	/***/ },
	/* 120 */
	/***/ function(module, exports, __webpack_require__) {

		var FileMessage = __webpack_require__(118);
		var util = __webpack_require__(10);

		function AudioMessage() {}
		AudioMessage.prototype = Object.create(FileMessage.prototype);

		AudioMessage.verifyFile = function(file) {
		    util.verifyOptions(file, 'dur', true, 'file.');
		};

		/**
		 * 音频对象
		 * 
		 * 当{@link NIM#sendFile|发送音频消息}或收到音频消息时, {@link Message|消息对象}的`file`字段代表音频对象, 包含以下属性: 
		 * 
		 * @constructor
		 * @name Audio
		 * @property {String} name      名字
		 * @property {Number} size      大小, 单位byte
		 * @property {String} md5       md5
		 * @property {String} url       url
		 * @property {String} mp3Url    实时转成 mp3 流的 url, 此 url 支持的格式有: mp3, wav, aac, wma, wmv, amr, mp2, flac, vorbis, ac3
		 * @property {String} ext       扩展名
		 * @property {Number} dur       长度, 单位ms
		 * @see {@link Image|图片对象}
		 * @see {@link Video|视频对象}
		 * @see {@link File|文件对象}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link Geo|地理位置对象}
		 */

		module.exports = AudioMessage;


	/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {

		var FileMessage = __webpack_require__(118);
		var util = __webpack_require__(10);

		function VideoMessage() {}
		VideoMessage.prototype = Object.create(FileMessage.prototype);

		VideoMessage.verifyFile = function(file) {
		    util.verifyOptions(file, 'dur w h', true, 'file.');
		};

		/**
		 * 视频对象
		 * 
		 * 当{@link NIM#sendFile|发送视频消息}或收到视频消息时, {@link Message|消息对象}的`file`字段代表视频对象, 包含以下属性: 
		 *
		 * @constructor
		 * @name Video
		 * @property {String} name 名字
		 * @property {Number} size 大小, 单位byte
		 * @property {String} md5  md5
		 * @property {String} url  url
		 * @property {String} ext  扩展名
		 * @property {Number} dur  长度, 单位ms
		 * @property {Number} w    宽, 分辨率, 单位px
		 * @property {Number} h    高, 分辨率, 单位px
		 * @see {@link Image|图片对象}
		 * @see {@link Audio|音频对象}
		 * @see {@link File|文件对象}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link Geo|地理位置对象}
		 */

		module.exports = VideoMessage;


	/***/ },
	/* 122 */
	/***/ function(module, exports, __webpack_require__) {

		var Message = __webpack_require__(116);
		var util = __webpack_require__(10);

		function GeoMessage(options) {
		    util.verifyOptions(options, 'geo');
		    util.verifyOptions(options.geo, 'lng lat title', true, 'geo.');
		    util.verifyParamType('geo.lng', options.geo.lng, 'number');
		    util.verifyParamType('geo.lat', options.geo.lat, 'number');
		    util.verifyParamType('geo.title', options.geo.title, 'string');
		    Message.call(this, options);
		    this.attach = JSON.stringify(options.geo);
		}

		GeoMessage.prototype = Object.create(Message.prototype);

		GeoMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    msg.attach = !!msg.attach ? ''+msg.attach : '';
		    obj.geo = !!msg.attach ? JSON.parse(msg.attach) : {};
		    return obj;
		};

		/**
		 * 地理位置对象
		 * 
		 * 当{@link NIM#sendFile|发送地理位置消息}或收到地理位置消息时, {@link Message|消息对象}的`file`字段代表地理位置对象, 包含以下属性: 
		 * 
		 * @constructor
		 * @name Geo
		 * @property {Number} lng 经度
		 * @property {Number} lat 纬度
		 * @property {String} title 地址描述
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link Image|图片对象}
		 * @see {@link Audio|音频对象}
		 * @see {@link Video|视频对象}
		 * @see {@link File|文件对象}
		 */

		module.exports = GeoMessage;


	/***/ },
	/* 123 */
	/***/ function(module, exports, __webpack_require__) {

		/* exported notificationTypes */

		var util = __webpack_require__(10);
		var notundef = util.notundef;
		var Message = __webpack_require__(116);
		var parser = __webpack_require__(49).getInstance('IM');
		var team = __webpack_require__(104);
		var User = __webpack_require__(100);

		/**
		 * 群通知消息的类型
		 * 
		 * - 群通知消息是{@link IMMessage|消息}的一种, 请参考{@link IMMessage.type|消息类型}, 某些群操作后所有群成员会收到一条相应的群通知消息
		 * - 群通知消息有一个字段`attach`包含了额外的信息, `attach`有一个字段`type`来标识群通知消息的类型
		 *     - `'updateTeam'` (更新群)
		 *         - {@link NIM#updateTeam|更新群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'updateTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为更新群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为被更新的{@link Team|群信息}。
		 *     - `'addTeamMembers'` (拉人入群)
		 *         - 普通群, {@link NIM#addTeamMembers|拉人入群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|``'addTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为拉人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的[群对象](#群对象), `attach`有一个字段`accounts`的值为被拉的人的帐号列表, `attach`有一个字段`members`的值为被拉的群成员列表。
		 *         - 被邀请的群成员在有人说话后才能看到该{@link Team|群}, 而且会先收到一条类型为{@link IMMessage.attach.type|`'addTeamMembers'`}的{@link IMMessage.type|群通知消息}, 然后会收到其它{@link Message|群消息}。
		 *     - `'removeTeamMembers'` (踢人出群)
		 *         - {@link NIM#removeTeamMembers|踢人出群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为踢人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`accounts`的值为被踢的人的帐号列表。
		 *     - `'acceptTeamInvite'` (接受入群邀请)
		 *         - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
		 *             - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
		 *             - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
		 *     - `'passTeamApply'` (通过入群申请)
		 *         - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
		 *             - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
		 *             - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
		 *     - `'addTeamManagers'` (添加群管理员)
		 *         - {@link NIM#addTeamManagers|添加群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'addTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为添加群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被加为管理员的帐号列表, `attach`有一个字段`members`的值为被加为管理员的群成员列表。
		 *     - `'removeTeamManagers'` (移除群管理员)。
		 *         - {@link NIM#removeTeamManagers|移除群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为移除群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被移除的管理员的帐号列表, `attach`有一个字段`members`的值为被移除管理员的群成员列表。
		 *     - `'leaveTeam'` (主动退群)
		 *         - {@link NIM#leaveTeam|主动退群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'leaveTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为退群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}。
		 *     - `'dismissTeam'` (解散群)
		 *         - {@link NIM#dismissTeam|解散群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'dismissTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段为解散群的人的帐号, `to`字段的值为被对应的群ID。
		 *     - `'transferTeam'` (转让群)
		 *         - {@link NIM#transferTeam|转让群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'transferTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为转让群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`的值为为新群主的帐号, `attach`有一个字段`members`的值为包含新旧群主的群成员列表。
		 * - 如果`attach`有`account`或者`accounts`字段, 那么`attach`的字段`users`包含这些账号对应的用户名片
		 * - 更新群昵称不会收到群通知消息, 所有其它在线的{@link TeamMember|群成员}会收到{@link NIM|初始化SDK}时传入的`onupdateteammember`回调, 请参考{@link NIM#updateInfoInTeam|修改自己的群属性}和{@link NIM#updateNickInTeam|修改别人的群昵称}
		 * 
		 * @memberOf IMMessage
		 * @readOnly
		 * @enum {String}
		 * @alias attach.type
		 */
		var notificationTypes = {};

		var notificationTypeReverseMap = {
		    0: 'addTeamMembers',
		    1: 'removeTeamMembers',
		    2: 'leaveTeam',
		    3: 'updateTeam',
		    4: 'dismissTeam',
		    5: 'passTeamApply',
		    6: 'transferTeam',
		    7: 'addTeamManagers',
		    8: 'removeTeamManagers',
		    9: 'acceptTeamInvite'
		};

		// 群通知消息
		function NotificationMessage() {}

		NotificationMessage.prototype = Object.create(Message.prototype);

		NotificationMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    // 如果是通知, 那么可能会有附加信息, 如果有, 解析之
		    msg.attach = !!msg.attach ? ''+msg.attach : '';
		    if (!!msg.attach) {
		        var attach = JSON.parse(msg.attach);
		        obj.attach = {
		            type: notificationTypeReverseMap[attach.id]
		        };
		        if (notundef(attach.data)) {
		            var data = attach.data;
		            if (notundef(data.tinfo)) {
		                obj.attach.team = team.reverse(parser.unserialize(data.tinfo, 'team'));
		            }
		            if (notundef(data.ids)) {
		                obj.attach.accounts = data.ids;
		            }
		            if (notundef(data.id)) {
		                obj.attach.account = data.id;
		            }
		            if (notundef(data.uinfos)) {
		                obj.attach.users = data.uinfos.map(function(uinfo) {
		                    return User.reverse(parser.unserialize(uinfo, 'user'));
		                });
		            }
		        }
		    } else {
		        obj.attach = {};
		    }
		    return obj;
		};

		module.exports = NotificationMessage;


	/***/ },
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {

		var CustomMessage = __webpack_require__(125);

		function TipMessage(options) {
		    CustomMessage.call(this, options);
		}

		TipMessage.prototype = Object.create(CustomMessage.prototype);

		TipMessage.reverse = function(msg) {
		    var obj = CustomMessage.reverse(msg);
		    return obj;
		};

		module.exports = TipMessage;


	/***/ },
	/* 125 */
	/***/ function(module, exports, __webpack_require__) {

		var Message = __webpack_require__(116);
		var util = __webpack_require__(10);

		/**
		 * 自定义消息
		 */
		function CustomMessage(options) {
		    util.verifyOptions(options, 'content');
		    util.verifyParamType('content', options.content, 'string');
		    Message.call(this, options);
		    this.attach = options.content;
		}

		CustomMessage.prototype = Object.create(Message.prototype);

		CustomMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    if (util.notundef(msg.attach)) {
		        obj.content = msg.attach;
		    }
		    return obj;
		};

		module.exports = CustomMessage;


	/***/ },
	/* 126 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var isArray = util.isArray;
		var TeamMember = __webpack_require__(87);

		// util util.isArray util.mergeObjArray util.cutObjArray 和 [] 只应该出现一次
		NIMFn.mergeObjArray = function(olds, news, options) {
		    if (!olds) {olds = [];}
		    if (!news) {return olds;}
		    if (!isArray(news)) { news = [news]; }
		    if (!news.length) {return olds;}
		    options = options || {};
		    return util.mergeObjArray(olds, news, options);
		};

		NIMFn.cutObjArray = function(olds, invalids, options) {
		    if (!olds) {return olds;}
		    if (!invalids) {return olds;}
		    if (!isArray(invalids)) { invalids = [invalids]; }
		    if (!invalids.length) {return olds;}
		    options = options || {};
		    return util.cutObjArray(olds, invalids, options);
		};

		// TODO
		NIMFn.mergeLoginPorts = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        keyPath: 'deviceId'
		    });
		};

		// TODO
		NIMFn.cutLoginPorts = function(olds, invalids) {
		    return this.cutObjArray(olds, invalids, {
		        keyPath: 'deviceId',
		        sortPath: 'type'
		    });
		};

		/**
		 * 合并关系
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的关系列表
		 * - 合并时按照 `account` 的值去重，按照 `account` 的值正序排序
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 *     keyPath: 'account'
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并关系
		 *
		 * @method mergeRelations
		 * @memberOf NIM#
		 * 
		 * @param  {Relation[]}             olds    原始关系数组
		 * @param  {Relation|Relation[]}    news    待合并的关系或关系数组
		 * @return {Relation[]}                     合并后的关系数组
		 */
		NIMFn.mergeRelations = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        keyPath: 'account'
		    });
		};

		/**
		 * 去除关系
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的关系列表
		 * - 去除时按照 `account` 的值去除
		 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {return olds;}
		 * if (!invalids) {return olds;}
		 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
		 * if (!invalids.length) {return olds;}
		 * var options = {
		 *     keyPath: 'account'
		 * };
		 * NIM.util.cutObjArray(olds, invalids, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除关系
		 *
		 * @method cutRelations
		 * @memberOf NIM#
		 * 
		 * @param  {Relation[]}             olds        原始关系数组
		 * @param  {Relation|Relation[]}    invalids    待去除的关系或关系数组
		 * @return {Relation[]}                         去除后的关系数组
		 */
		NIMFn.cutRelations = function(olds, invalids) {
		    return this.cutObjArray(olds, invalids, {
		        keyPath: 'account'
		    });
		};

		/**
		 * 在关系数组里面根据 `account` 找到对应的关系
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(relations, {
		 *     keyPath: 'account',
		 *     value: account
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个关系
		 *
		 * @method findRelation
		 * @memberOf NIM#
		 * @param  {Relation[]}     relations    关系数组
		 * @param  {String}         account     待查找的关系的 `account`
		 * @return {Relation|null}              对应的关系或者 null
		 */
		NIMFn.findRelation = function(relations, account) {
		    return util.findObjInArray(relations, {
		        keyPath: 'account',
		        value: account
		    });
		};

		/**
		 * 合并好友
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的好友列表
		 * - 合并时按照 `account` 的值去重，按照 `account` 的值正序排序
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 *     keyPath: 'account'
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并好友
		 *
		 * @method mergeFriends
		 * @memberOf NIM#
		 * 
		 * @param  {Friend[]}           olds    原始好友数组
		 * @param  {Friend|Friend[]}    news    待合并的好友或好友数组
		 * @return {Friend[]}                   合并后的好友数组
		 */
		NIMFn.mergeFriends = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        keyPath: 'account'
		    });
		};

		/**
		 * 去除好友
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的好友列表
		 * - 去除时按照 `account` 的值去除
		 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {return olds;}
		 * if (!invalids) {return olds;}
		 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
		 * if (!invalids.length) {return olds;}
		 * var options = {
		 *     keyPath: 'account'
		 * };
		 * NIM.util.cutObjArray(olds, invalids, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除好友
		 *
		 * @method cutFriends
		 * @memberOf NIM#
		 * 
		 * @param  {Friend[]}             olds        原始好友数组
		 * @param  {Friend|Friend[]}    invalids    待去除的好友或好友数组
		 * @return {Friend[]}                         去除后的好友数组
		 */
		NIMFn.cutFriends = function(olds, invalids) {
		    return this.cutObjArray(olds, invalids, {
		        keyPath: 'account'
		    });
		};

		/**
		 * 去除`accounts`对应的好友
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的好友列表
		 * - 去除时按照 `account` 的值去除
		 * - 此方法内部调用 {@link NIM#cutFriends|nim.cutFriends} 来完成实际工作
		 * ```
		 * if (!NIM.util.isArray(accounts)) { accounts = [accounts]; }
		 * var invalids = accounts.map(function(account) {
		 *     return {
		 *         account: account
		 *     };
		 * });
		 * return nim.cutFriends(olds, invalids);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除好友
		 *
		 * @method cutFriendsByAccounts
		 * @memberOf NIM#
		 * 
		 * @param  {Friend[]}           olds        原始好友数组
		 * @param  {Friend|Friend[]}    invalids    待去除的好友或好友数组
		 * @return {Friend[]}                       去除后的好友数组
		 */
		NIMFn.cutFriendsByAccounts = function(olds, accounts) {
		    if (!isArray(accounts)) { accounts = [accounts]; }
		    var invalids = accounts.map(function(account) {
		        return {
		            account: account
		        };
		    });
		    return this.cutFriends(olds, invalids);
		};

		/**
		 * 在好友数组里面根据 `account` 找到对应的好友
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(friends, {
		 *     keyPath: 'account',
		 *     value: account
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个好友
		 *
		 * @method findFriend
		 * @memberOf NIM#
		 * @param  {Friend[]}       friends     好友数组
		 * @param  {String}         account     待查找的好友的 `account`
		 * @return {Friend|null}                对应的好友或者 null
		 */
		NIMFn.findFriend = function(friends, account) {
		    return util.findObjInArray(friends, {
		        keyPath: 'account',
		        value: account
		    });
		};

		/**
		 * 合并名片
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的名片列表
		 * - 合并时按照 `account` 的值去重，按照 `account` 的值正序排序
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 *     keyPath: 'account'
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并名片
		 *
		 * @method mergeUsers
		 * @memberOf NIM#
		 * 
		 * @param  {User[]}         olds    原始名片数组
		 * @param  {User|User[]}    news    待合并的名片或名片数组
		 * @return {User[]}                 合并后的名片数组
		 */
		NIMFn.mergeUsers = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        keyPath: 'account'
		    });
		};

		/**
		 * 在名片数组里面根据 `account` 找到对应的名片
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(users, {
		 *     keyPath: 'account',
		 *     value: account
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个名片
		 *
		 * @method findUser
		 * @memberOf NIM#
		 * @param  {User[]}     users    名片数组
		 * @param  {String}     account  待查找的名片的 `account`
		 * @return {User|null}           对应的名片或者 null
		 */
		NIMFn.findUser = function(users, account) {
		    return util.findObjInArray(users, {
		        keyPath: 'account',
		        value: account
		    });
		};

		/**
		 * 合并群
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的群列表
		 * - 合并时按照 `teamId` 的值去重，按照 `teamId` 的值正序排序
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 *     keyPath: 'teamId'
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并群
		 *
		 * @method mergeTeams
		 * @memberOf NIM#
		 * 
		 * @param  {Team[]}         olds    原始群数组
		 * @param  {Team|Team[]}    news    待合并的群或群数组
		 * @return {Team[]}                 合并后的群数组
		 */
		NIMFn.mergeTeams = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        keyPath: 'teamId'
		    });
		};

		/**
		 * 去除群
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的群列表
		 * - 去除时按照 `teamId` 的值去除
		 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {return olds;}
		 * if (!invalids) {return olds;}
		 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
		 * if (!invalids.length) {return olds;}
		 * var options = {
		 *     keyPath: 'teamId'
		 * };
		 * NIM.util.cutObjArray(olds, invalids, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除群
		 *
		 * @method cutTeams
		 * @memberOf NIM#
		 * 
		 * @param  {Team[]}         olds        原始群数组
		 * @param  {Team|Team[]}    invalids    待去除的群或群数组
		 * @return {Team[]}                     去除后的群数组
		 */
		NIMFn.cutTeams = function(olds, invalids) {
		    return this.cutObjArray(olds, invalids, {
		        keyPath: 'teamId'
		    });
		};

		/**
		 * 在群数组里面根据 `teamId` 找到对应的群
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(teams, {
		 *     keyPath: 'teamId',
		 *     value: teamId
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个群
		 *
		 * @method findTeam
		 * @memberOf NIM#
		 * @param  {Team[]}      teams    群数组
		 * @param  {String}      teamId   待查找的群的 `teamId`
		 * @return {Team|null}            对应的群或者 null
		 */
		NIMFn.findTeam = function(teams, teamId) {
		    return util.findObjInArray(teams, {
		        keyPath: 'teamId',
		        value: teamId
		    });
		};

		NIMFn.assembleTeamOwner = TeamMember.assembleOwner;
		NIMFn.assembleTeamMembers = TeamMember.assembleMembers;
		NIMFn.genTeamMemberId = TeamMember.genId;

		/**
		 * 合并群成员
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的群成员列表
		 * - 合并时按照 `id` 的值去重，按照 `id` 的值正序排序
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并群成员
		 *
		 * @method mergeTeamMembers
		 * @memberOf NIM#
		 * 
		 * @param  {TeamMember[]}               olds    原始群成员数组
		 * @param  {TeamMember|TeamMember[]}    news    待合并的群成员或群成员数组
		 * @return {TeamMember[]}                       合并后的群成员数组
		 */
		NIMFn.mergeTeamMembers = function(olds, news) {
		    // keyPath 默认为 id
		    return this.mergeObjArray(olds, news);
		};

		/**
		 * 去除群成员
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的群成员列表
		 * - 去除时按照 `id` 的值去除
		 * - 此方法内部调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {return olds;}
		 * if (!invalids) {return olds;}
		 * if (!NIM.util.isArray(invalids)) { invalids = [invalids]; }
		 * if (!invalids.length) {return olds;}
		 * var options = {
		 * };
		 * NIM.util.cutObjArray(olds, invalids, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除群成员
		 *
		 * @method cutTeamMembers
		 * @memberOf NIM#
		 * 
		 * @param  {TeamMember[]}               olds        原始群成员数组
		 * @param  {TeamMember|TeamMember[]}    invalids    待去除的群成员或群成员数组
		 * @return {TeamMember[]}                           去除后的群成员数组
		 */
		NIMFn.cutTeamMembers = function(olds, invalids) {
		    // keyPath 默认为 id
		    return this.cutObjArray(olds, invalids);
		};

		/**
		 * 去除`accounts`对应的群成员
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含去除后的群成员列表
		 * - 去除时按照 `account` 的值去除
		 * - 此方法内部调用 {@link NIM#cutTeamMembers|nim.cutTeamMembers} 来完成实际工作
		 * ```
		 * if (!NIM.util.isArray(accounts)) { accounts = [accounts]; }
		 * var invalids = TeamMember.assembleMembers({
		 *     teamId: teamId
		 * }, accounts);
		 * return nim.cutTeamMembers(olds, invalids);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.cutObjArray|NIM.util.cutObjArray} 来去除群成员
		 *
		 * @method cutTeamMembersByAccounts
		 * @memberOf NIM#
		 * 
		 * @param  {TeamMember[]}               olds        原始群成员数组
		 * @param  {TeamMember|TeamMember[]}    invalids    待去除的群成员或群成员数组
		 * @return {TeamMember[]}                           去除后的群成员数组
		 */
		NIMFn.cutTeamMembersByAccounts = function(olds, teamId, accounts) {
		    if (!isArray(accounts)) {accounts = [accounts];}
		    var invalids = TeamMember.assembleMembers({
		        teamId: teamId
		    }, accounts);
		    return this.cutTeamMembers(olds, invalids);
		};

		/**
		 * 在群成员数组里面根据 `id` 找到对应的群成员
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(members, {
		 *     keyPath: 'id',
		 *     value: id
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个群成员
		 *
		 * @method findTeamMember
		 * @memberOf NIM#
		 * @param  {TeamMember[]}       members     群成员数组
		 * @param  {String}             id          待查找的群成员的 `id`
		 * @return {TeamMember|null}                对应的群成员或者 null
		 */
		NIMFn.findTeamMember = function(members, id) {
		    return util.findObjInArray(members, {
		        keyPath: 'id',
		        value: id
		    });
		};

		/**
		 * 合并会话
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的会话列表
		 * - 合并时按照 `id` 的值去重，按照 `updateTime` 的值倒序排序
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 *     sortPath: 'updateTime',
		 *     desc: true
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并会话
		 *
		 * @method mergeSessions
		 * @memberOf NIM#
		 * 
		 * @param  {Session[]}          olds    原始会话数组
		 * @param  {Session|Session[]}  news    待合并的会话或会话数组
		 * @return {Session[]}                  合并后的会话数组
		 */
		NIMFn.mergeSessions = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        sortPath: 'updateTime',
		        desc: true
		    });
		};

		NIMFn.cutSessions = function(olds, invalids) {
		    return this.cutObjArray(olds, invalids);
		};

		NIMFn.cutSessionsByIds = function(olds, ids) {
		    if (!isArray(ids)) {ids = [ids];}
		    var invalids = ids.map(function(id) {
		        return { id: id };
		    });
		    return this.cutSessions(olds, invalids);
		};

		/**
		 * 在会话数组里面根据 `id` 找到对应的会话
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(sessions, {
		 *     keyPath: 'id',
		 *     value: sessionId
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个会话
		 *
		 * @method findSession
		 * @memberOf NIM#
		 * @param  {Session[]}      sessions    会话数组
		 * @param  {String}         sessionId   待查找的会话的 `id`
		 * @return {Session|null}               对应的会话或者 null
		 */
		NIMFn.findSession = function(sessions, sessionId) {
		    return util.findObjInArray(sessions, {
		        keyPath: 'id',
		        value: sessionId
		    });
		};

		/**
		 * 合并消息
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的消息列表
		 * - 合并时按照 `idClient` 的值去重, 不会重新排序, 即新消息会放在数组的最后面
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 *     keyPath: 'idClient',
		 *     notSort: true
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并消息
		 *
		 * @method mergeMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {Message[]}          olds    原始消息数组
		 * @param  {Message|Message[]}  news    待合并的消息或消息数组
		 * @return {Message[]}                  合并后的消息数组
		 */
		NIMFn.mergeMsgs = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        keyPath: 'idClient',
		        notSort: true
		    });
		};

		NIMFn.cutMsgs = function(olds, invalids) {
		    return this.cutObjArray(olds, invalids, {
		        keyPath: 'idClient'
		    });
		};

		NIMFn.cutMsgsByIdClients = function(olds, idClients) {
		    if (!isArray(idClients)) {idClients=[idClients];}
		    var invalids = idClients.map(function(idClient) {
		        return {idClient: idClient};
		    });
		    return this.cutMsgs(olds, invalids);
		};

		/**
		 * 在消息数组里面根据 `idClient` 找到对应的消息
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(msgs, {
		 *     keyPath: 'idClient',
		 *     value: idClient
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个消息
		 *
		 * @method findMsg
		 * @memberOf NIM#
		 * @param  {Message[]}      msgs        消息数组
		 * @param  {String}         idClient    待查找的消息的 `idClient`
		 * @return {Message|null}               对应的消息或者 null
		 */
		NIMFn.findMsg = function(msgs, idClient) {
		    return util.findObjInArray(msgs, {
		        keyPath: 'idClient',
		        value: idClient
		    });
		};

		/**
		 * 合并系统通知
		 * - 此方法不会改变参数的值，而是会返回新的数组，包含合并后的系统通知列表
		 * - 合并时按照 `idServer` 的值去重，按照 `idServer` 的值倒序排序
		 * - 此方法内部调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来完成实际工作
		 * ```
		 * if (!olds) {olds = [];}
		 * if (!news) {return olds;}
		 * if (!NIM.util.isArray(news)) { news = [news]; }
		 * if (!news.length) {return olds;}
		 * var options = {
		 *     keyPath: 'idServer',
		 *     desc: true
		 * };
		 * NIM.util.mergeObjArray([], olds, news, options);
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.mergeObjArray|NIM.util.mergeObjArray} 来合并系统通知
		 *
		 * @method mergeSysMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {SystemMessage[]}                olds    原始系统通知数组
		 * @param  {SystemMessage|SystemMessage[]}  news    待合并的系统通知或系统通知数组
		 * @return {SystemMessage[]}                        合并后的系统通知数组
		 */
		NIMFn.mergeSysMsgs = function(olds, news) {
		    return this.mergeObjArray(olds, news, {
		        keyPath: 'idServer',
		        desc: true
		    });
		};

		NIMFn.cutSysMsgs = function(olds, invalids) {
		    return this.cutObjArray(olds, invalids, {
		        keyPath: 'idServer'
		    });
		};

		NIMFn.cutSysMsgsByIdServers = function(olds, idServers) {
		    if (!isArray(idServers)) {idServers=[idServers];}
		    var invalids = idServers.map(function(idServer) {
		        return {idServer:idServer};
		    });
		    return this.cutSysMsgs(olds, invalids);
		};

		/**
		 * 在系统通知数组里面根据 `idServer` 找到对应的系统通知
		 * - 此方法内部调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来完成实际工作
		 * ```
		 * NIM.util.findObjInArray(sysMsgs, {
		 *     keyPath: 'idServer',
		 *     value: idServer
		 * });
		 * ```
		 * - 如果此方法不满足开发者的业务需求，那么开发者可以根据自己的业务需求调用 {@link util.findObjInArray|NIM.util.findObjInArray} 来查找某个系统通知
		 *
		 * @method findSysMsg
		 * @memberOf NIM#
		 * @param  {SystemMessage[]}    sysMsgs     系统通知数组
		 * @param  {String}             idServer    待查找的系统通知的 `idServer`
		 * @return {SystemMessage|null}             对应的系统通知或者 null
		 */
		NIMFn.findSysMsg = function(sysMsgs, idServer) {
		    return util.findObjInArray(sysMsgs, {
		        keyPath: 'idServer',
		        value: idServer
		    });
		};


	/***/ },
	/* 127 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);

		/**
		 * 是否连接上服务器
		 * @private
		 * @return {Boolean} 连接状态
		 *
		 * @see {@link NIM#connect|connect}
		 * @see {@link NIM#disconnect|disconnect}
		 *
		 * @example
		 * if (!nim.isConnected()) {
		 *     console.log('未连接');
		 * }
		 */

		/**
		 * 登录 SDK
		 * 
		 * @memberOf NIM#
		 * @method connect
		 * 
		 * @return {Void}
		 *
		 * @see {@link NIM#disconnect|disconnect}
		 *
		 * @example
		 * nim.connect();
		 */

		/**
		 * 登出 SDK
		 * 
		 * @memberOf NIM#
		 * @method disconnect
		 *
		 * @return {Void}
		 *
		 * @see {@link NIM#connect|connect}
		 * 
		 * @example
		 * nim.disconnect();
		 */

		/**
		 * 踢当前用户登录的其它端
		 * 
		 * @method kick
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {String[]}   options.deviceIds   要踢掉的端的设备号数组
		 * @param  {done}       options.done        结果回调函数, 成功时会收到被踢掉的设备号数组
		 * @return {Void}
		 *
		 * @example
		 * nim.kick({
		 *     deviceIds: ['device1'],
		 *     done: onKick
		 * });
		 * function onKick(error, obj) {
		 *     console.log('踢其它端' + (!error?'成功':'失败'));
		 *     console.log(error);
		 *     console.log(obj);
		 * }
		 */
		NIMFn.kick = function(options) {
		    util.verifyOptions(options, 'deviceIds');
		    this.processCallback(options);
		    this.sendCmd('kick', { deviceIds: options.deviceIds.slice(0) }, options.callback);
		};


	/***/ },
	/* 128 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);

		/**
		 * 加入黑名单/从黑名单移除
		 *
		 * - 此接口可以完成以下两个功能, 通过参数`isAdd`来决定实际的功能
		 *     - `isAdd`为`true`时, 会将`account`{@link NIM#addToBlacklist|加入黑名单}
		 *         - 如果一个用户被加入了黑名单, 那么就不再会收到此用户发送的消息
		 *     - `isAdd`为`false`时, 会将`account`{@link NIM#removeFromBlacklist|从黑名单移除}
		 *         - 如果一个用户被从黑名单移除, 那么会重新收到此用户发送的消息
		 * - 每个功能SDK都提供了相应的独立接口
		 *
		 * @method markInBlacklist
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.account 要加入黑名单/从黑名单移除的账号
		 * @param  {Boolean}    options.isAdd   `true`表示加入黑名单, `false`表示从黑名单移除
		 * @param  {done}       options.done    结果回调函数
		 * @return {Void}
		 * 
		 * @see {@link NIM#addToBlacklist|nim.addToBlacklist}
		 * @see {@link NIM#removeFromBlacklist|nim.removeFromBlacklist}
		 * @see {@link NIM#getRelations|nim.getRelations}
		 *
		 * @example
		 * nim.markInBlacklist({
		 *     account: 'account',
		 *     // `true`表示加入黑名单, `false`表示从黑名单移除
		 *     isAdd: true,
		 *     done: markInBlacklistDone
		 * });
		 * function markInBlacklistDone(error, obj) {
		 *     console.log('将' + obj.account + (isAdd ? '加入黑名单' : '从黑名单移除') + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onMarkInBlacklist(obj);
		 *     }
		 * }
		 */
		NIMFn.markInBlacklist = function(options) {
		    util.verifyOptions(options, 'account isAdd');
		    util.verifyParamType('isAdd', options.isAdd, 'boolean');
		    this.processCallback(options);
		    this.sendCmd('markInBlacklist', {account: options.account, isAdd: options.isAdd}, options.callback);
		};
		/**
		 * 加入黑名单
		 *
		 * - 如果一个用户被加入了黑名单, 那么就不再会收到此用户发送的消息
		 * - SDK内部调用{@link NIM#markInBlacklist|nim.markInBlacklist}来完成实际工作
		 *
		 * @method addToBlacklist
		 * @memberOf NIM#
		 *
		 * @param {Object}  options         配置参数
		 * @param {String}  options.account 要加入黑名单的账号
		 * @param {done}    options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#markInBlacklist|nim.markInBlacklist}
		 * @see {@link NIM#removeFromBlacklist|nim.removeFromBlacklist}
		 * @see {@link NIM#getRelations|nim.getRelations}
		 *
		 * @example
		 * nim.addToBlacklist({
		 *     account: 'account',
		 *     done: addToBlacklistDone
		 * });
		 * function addToBlacklistDone(error, obj) {
		 *     console.log('加入黑名单' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         addToBlacklist(obj);
		 *     }
		 * }
		 */
		NIMFn.addToBlacklist = function(options) {
		    options.isAdd = true;
		    this.markInBlacklist(options);
		};
		/**
		 * 从黑名单移除
		 *
		 * - 如果一个用户被从黑名单移除, 那么会重新收到此用户发送的消息
		 * - SDK内部调用{@link NIM#markInBlacklist|nim.markInBlacklist}来完成实际工作
		 *
		 * @method removeFromBlacklist
		 * @memberOf NIM#
		 *
		 * @param {Object} options         配置参数
		 * @param {String} options.account 要从黑名单移除的账号
		 * @param {done}   options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#markInBlacklist|nim.markInBlacklist}
		 * @see {@link NIM#addToBlacklist|nim.addToBlacklist}
		 * @see {@link NIM#getRelations|nim.getRelations}
		 *
		 * @example
		 * nim.removeFromBlacklist({
		 *     account: 'account',
		 *     done: removeFromBlacklistDone
		 * });
		 * function removeFromBlacklistDone(error, obj) {
		 *     console.log('从黑名单移除' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         removeFromBlacklist(obj);
		 *     }
		 * }
		 */
		NIMFn.removeFromBlacklist = function(options) {
		    options.isAdd = false;
		    this.markInBlacklist(options);
		};
		/**
		 * 加入静音列表/从静音列表移除
		 * 
		 * - 此接口可以完成以下两个功能, 通过参数`isAdd`来决定实际的功能
		 *     - `isAdd`为`true`时, 会将`account`{@link NIM#addToMutelist|加入静音列表}
		 *     - `isAdd`为`false`时, 会将`account`{@link NIM#removeFromMutelist|从静音列表移除}
		 * - 每个功能SDK都提供了相应的独立接口
		 *
		 * @method markInMutelist
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.account 要加入静音列表/从静音列表移除的账号
		 * @param  {Boolean}    options.isAdd   `true`表示加入静音列表, `false`表示从静音列表移除
		 * @param  {done}       options.done    结果回调函数
		 * @return {Void}
		 * 
		 * @see {@link NIM#addToMutelist|nim.addToMutelist}
		 * @see {@link NIM#removeFromMutelist|nim.removeFromMutelist}
		 * @see {@link NIM#getRelations|nim.getRelations}
		 *
		 * @example
		 * nim.markInMutelist({
		 *     account: 'account',
		 *     // `true`表示加入静音列表, `false`表示从静音列表移除
		 *     isAdd: 'true',
		 *     done: markInMutelistDone
		 * });
		 * function markInMutelistDone(error, obj) {
		 *     console.log('将' + obj.account + (isAdd ? '加入静音列表' : '从静音列表移除') + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onMarkInMutelist(obj);
		 *     }
		 * }
		 */
		NIMFn.markInMutelist = function(options) {
		    util.verifyOptions(options, 'account');
		    util.verifyParamType('isAdd', options.isAdd, 'boolean');
		    this.processCallback(options);
		    this.sendCmd('markInMutelist', {account: options.account, isAdd: options.isAdd}, options.callback);
		};
		/**
		 * 加入静音列表
		 *
		 * - SDK只负责维护静音列表, 具体要根据静音列表进行的操作由开发者决定
		 * - SDK内部调用{@link NIM#markInMutelist|nim.markInMutelist}来完成实际工作
		 *
		 * @method addToMutelist
		 * @memberOf NIM#
		 *
		 * @param {Object}  options         配置参数
		 * @param {String}  options.account 要加入静音列表的账号
		 * @param {done}    options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#markInMutelist|nim.markInMutelist}
		 * @see {@link NIM#removeFromMutelist|nim.removeFromMutelist}
		 * @see {@link NIM#getRelations|nim.getRelations}
		 *
		 * @example
		 * nim.addToMutelist({
		 *     account: 'account',
		 *     done: addToMutelistDone
		 * });
		 * function addToMutelistDone(error, obj) {
		 *     console.log('加入静音列表' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         addToMutelist(obj);
		 *     }
		 * }
		 */
		NIMFn.addToMutelist = function(options) {
		    options.isAdd = true;
		    this.markInMutelist(options);
		};
		/**
		 * 从静音列表移除
		 *
		 * - SDK只负责维护静音列表, 具体要根据静音列表进行的操作由开发者决定
		 * - SDK内部调用{@link NIM#markInMutelist|nim.markInMutelist}来完成实际工作
		 *
		 * @method removeFromMutelist
		 * @memberOf NIM#
		 *
		 * @param {Object} options         配置参数
		 * @param {String} options.account 要从静音列表移除的账号
		 * @param {done}   options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#markInMutelist|nim.markInMutelist}
		 * @see {@link NIM#addToMutelist|nim.addToMutelist}
		 * @see {@link NIM#getRelations|nim.getRelations}
		 *
		 * @example
		 * nim.removeFromMutelist({
		 *     account: 'account',
		 *     done: removeFromMutelistDone
		 * });
		 * function removeFromMutelistDone(error, obj) {
		 *     console.log('从静音列表移除' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         removeFromMutelist(obj);
		 *     }
		 * }
		 */
		NIMFn.removeFromMutelist = function(options) {
		    options.isAdd = false;
		    this.markInMutelist(options);
		};
		/**
		 * 获取黑名单和静音列表
		 *
		 * - 如果开发者在{@link NIM|初始化SDK}的时候设置了`syncRelations`为`false`, 那么就收不到`onblacklist`和`onmutelist`回调, 可以调用此接口来获取黑名单和静音列表。
		 *
		 * @method getRelations
		 * @memberOf NIM#
		 *
		 * @param {Object} options         配置参数
		 * @param {done}   options.done    结果回调函数, 成功时会返回黑名单和静音列表
		 * @return {Void}
		 *
		 * @see {@link NIM#addToBlacklist|nim.addToBlacklist}
		 * @see {@link NIM#removeFromBlacklist|nim.removeFromBlacklist}
		 * @see {@link NIM#markInBlacklist|nim.markInBlacklist}
		 * @see {@link NIM#addToMutelist|nim.addToMutelist}
		 * @see {@link NIM#removeFromMutelist|nim.removeFromMutelist}
		 * @see {@link NIM#markInMutelist|nim.markInMutelist}
		 *
		 * @example
		 * nim.getRelations({
		 *     done: getRelationsDone
		 * });
		 * function getRelationsDone(error, obj) {
		 *     console.log('获取静音列表' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onBlacklist(obj.blacklist);
		 *         onMutelist(obj.mutelist);
		 *     }
		 * }
		 */
		NIMFn.getRelations = function(options) {
		    var self = this;
		    var db = self.db;
		    var timetag = 0;
		    util.verifyOptions(options);
		    self.processCallback(options);
		    if (db.enable) {
		        db.getRelationsTimetag().then(function(t) {
		            timetag = t;
		            getRelationsFromServer();
		        }, getRelationsFromServer);
		    } else {
		        getRelationsFromServer();
		    }
		    function getRelationsFromServer() {
		        self.sendCmd('getRelations', {timetag: timetag, NOTSTORE: 'timetag'}, options.callback);
		    }
		};


	/***/ },
	/* 129 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var objs2accounts = util.objs2accounts;
		var logger = __webpack_require__(40);
		var User = __webpack_require__(100);

		/**
		 * 更新我的名片
		 *
		 * @method updateMyInfo
		 * @memberOf NIM#
		 * 
		 * @param  {Object} options         配置参数
		 * @param  {String} options.nick    昵称
		 * @param  {String} options.avatar  头像
		 * @param  {String} options.sign    签名
		 * @param  {String} options.gender  {@link User.gender|性别}
		 * @param  {String} options.email   邮箱
		 * @param  {String} options.birth   生日
		 * @param  {String} options.tel     手机号
		 * @param  {String} options.custom  扩展字段
		 * @return {Void}
		 * 
		 * @see {@link NIM#getUser|获取用户名片}
		 * @see {@link NIM#getUsers|获取用户名片数组}
		 * @see {@link NIM#updateMyInfo|更新登录用户的名片}
		 *
		 * @example
		 * nim.updateMyInfo({
		 *     nick: 'newNick',
		 *     avatar: 'http://newAvatar',
		 *     sign: 'newSign',
		 *     gender: 'male',
		 *     email: 'new@email.com',
		 *     birth: '1900-01-01',
		 *     tel: '13523578129',
		 *     custom: '{type: "newCustom", value: "new"}',
		 *     done: updateMyInfoDone
		 * });
		 * function updateMyInfoDone(error, user) {
		 *     console.log('更新登录用户的名片' + (!error?'成功':'失败'), error, user);
		 *     if (!error) {
		 *         onUpdateMyInfo(user);
		 *     }
		 * }
		 */
		NIMFn.updateMyInfo = function(options) {
		    util.verifyOptions(options);
		    this.processCallback(options);
		    options.user = new User(options);
		    // 更新自己的名片不用传 account
		    delete options.user.account;
		    this.sendCmd('updateMyInfo', { user: options.user, single: true }, options.callback);
		};

		/**
		 * 获取我的名片
		 * @private
		 * @param  {Object} options 配置参数
		 * @return {Void}
		 */
		NIMFn.getMyInfo = function(options) {
		    var self = this;
		    options = options || {};
		    options.account = self.account;
		    return self.getUser(options);
		};

		/**
		 * 获取用户名片
		 *
		 * @method getUser
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.account 账号
		 * @param  {Function}   options.done    结果回调函数, 成功时会返回用户名片
		 * @return {Void}
		 *
		 * @see {@link NIM#getUser|获取用户名片}
		 * @see {@link NIM#getUsers|获取用户名片数组}
		 * @see {@link NIM#updateMyInfo|更新登录用户的名片}
		 *
		 * @example
		 * nim.getUser({
		 *     account: 'account',
		 *     done: getUserDone
		 * });
		 * function getUserDone(error, user) {
		 *     console.log('获取用户名片' + (!error?'成功':'失败'), error, obj);
		 *     if (!error && user) {
		 *         onUsers(user);
		 *     }
		 * }
		 */
		NIMFn.getUser = function(options) {
		    var self = this,
		        db = self.db,
		        account;
		    util.verifyOptions(options, 'account');
		    self.processCallback(options);

		    options.cbaop = function(error, obj) {
		        if (!error) {
		            obj = obj[0] || null;
		            log(obj);
		            return obj;
		        }
		    };

		    account = options.account;
		    if (options.sync) {
		        getUserFromServer();
		    } else {
		        if (db.enable) {
		            db.getUser(account).then(function(user) {
		                if (!!user) {
		                    log(user);
		                    options.done(null, user);
		                } else {
		                    getUserFromServer();
		                }
		            }, getUserFromServer);
		        } else {
		            getUserFromServer();
		        }
		    }
		    function getUserFromServer() {
		        self.sendCmd('getUsers', { accounts: [account], single: true }, options.callback);
		    }
		    function log(user) {
		        logger.warn('get user', account, user);
		    }
		};

		/**
		 * 获取用户名片数组
		 *
		 * @method getUsers
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options             配置参数
		 * @param  {String[]}   options.accounts    账号数组
		 * @param  {Function}   options.done        结果回调函数, 成功时会返回用户名片列表
		 * @return {Void}
		 * 
		 * @see {@link NIM#getUser|获取用户名片}
		 * @see {@link NIM#getUsers|获取用户名片数组}
		 * @see {@link NIM#updateMyInfo|更新登录用户的名片}
		 *
		 * @example
		 * nim.getUsers({
		 *     accounts: ['account1', 'account2'],
		 *     done: getUsersDone
		 * });
		 * function getUsersDone(error, users) {
		 *     console.log('获取用户名片数组' + (!error?'成功':'失败'), error, users);
		 *     if (!error && users.length) {
		 *         onUsers(users);
		 *     }
		 * }
		 */
		NIMFn.getUsers = function(options) {
		    var self = this,
		        db = self.db,
		        accounts,
		        usersLocal = [];
		    util.verifyOptions(options, 'accounts');
		    util.verifyParamType('accounts', options.accounts, 'array');
		    self.processCallback(options);

		    options.cbaop = function(error, obj) {
		        if (!error) {
		            obj = obj.concat(usersLocal);
		            log(obj);
		            return obj;
		        }
		    };

		    // 拷贝
		    accounts = options.accounts.slice(0);
		    if (options.sync) {
		        getUsersFromServer();
		    } else {
		        if (db.enable) {
		            db.getUsers(accounts).then(function(users) {
		                if (!!users && users.length === accounts.length) {
		                    log(users);
		                    options.done(null, users);
		                } else {
		                    usersLocal = users;
		                    // 如果从数据库只拿到了部分用户名片, 那么从服务器获取剩下的用户名片
		                    var accountsLocal = objs2accounts(users);
		                    var accountsServer = [];
		                    accounts.forEach(function(account) {
		                        if (accountsLocal.indexOf(account) === -1) {
		                            accountsServer.push(account);
		                        }
		                    });
		                    accounts = accountsServer;
		                    getUsersFromServer();
		                }
		            }, getUsersFromServer);
		        } else {
		            getUsersFromServer();
		        }
		    }
		    function getUsersFromServer() {
		        self.sendCmd('getUsers', { accounts: accounts, single: true }, options.callback);
		    }
		    function log(users) {
		        logger.warn('get users', objs2accounts(users), users);
		    }
		};


	/***/ },
	/* 130 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var notundef = util.notundef;
		var Friend = __webpack_require__(102);

		/**
		 * 好友请求
		 *
		 * - 此接口可以完成以下四个功能, 通过参数`type`来决定实际的功能, `type`可取的值有以下几种
		 *     - `'addFriend'` (直接加为好友)
		 *         - {@link NIM#addFriend|直接加某个用户为好友}后, 对方不需要确认, 直接成为当前登录用户的好友。
		 *         - 对方会收到一条类型为`'addFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号。
		 *     - `'applyFriend'` (申请加为好友)
		 *         - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
		 *     - `'passFriendApply'` (通过好友申请)
		 *         - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
		 *     - `'rejectFriendApply'` (拒绝好友申请)
		 *         - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
		 * - 每个功能SDK也提供了相应的独立接口
		 *
		 * @private
		 * @method friendRequest
		 * @memberOf NIM#
		 * 
		 * @param  {Object} options         配置参数
		 * @param  {String} options.type    {@link Friend.requestType|好友请求类型}
		 * @param  {String} options.account 账号
		 * @param  {String} [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param  {done}   options.done    结果回调函数
		 * @return {Void}
		 * 
		 * @see {@link NIM#rejectFriendApply|直接加为好友}
		 * @see {@link NIM#applyFriend|申请加为好友}
		 * @see {@link NIM#passFriendApply|通过好友申请}
		 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
		 * @see {@link NIM#deleteFriend|删除好友}
		 * @see {@link NIM#updateFriend|更新好友}
		 * @see {@link NIM#getFriends|获取好友列表}
		 */
		NIMFn.friendRequest = function(options) {
		    util.verifyOptions(options, 'type account');
		    util.verifyParamValid('type', options.type, Friend.validTypes());
		    this.processPs(options);
		    this.processCallback(options);
		    var content = {
		        account: options.account,
		        type: Friend.getByteFromType(options.type),
		        ps: options.ps
		    };
		    if (notundef(options.idServer)) {
		        content.idServer = options.idServer;
		    }
		    this.sendCmd('friendRequest', content, options.callback);
		};
		/**
		 * 直接加为好友
		 *
		 * - {@link NIM#addFriend|直接加某个用户为好友}后, 对方不需要确认, 直接成为当前登录用户的好友。
		 * - 对方会收到一条类型为`'addFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号。
		 *
		 * @method addFriend
		 * @memberOf NIM#
		 *
		 * @param {Object}  options         配置参数
		 * @param {String}  options.account 要直接加为好友的账号
		 * @param {String}  [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param {done}    options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#applyFriend|申请加为好友}
		 * @see {@link NIM#passFriendApply|通过好友申请}
		 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
		 * @see {@link NIM#deleteFriend|删除好友}
		 * @see {@link NIM#updateFriend|更新好友}
		 * @see {@link NIM#getFriends|获取好友列表}
		 *
		 * @example
		 * nim.addFriend({
		 *     account: 'account',
		 *     done: addFriendDone
		 * });
		 * function addFriendDone(error, obj) {
		 *     console.log('直接加为好友' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onAddFriend(obj.friend);
		 *     }
		 * }
		 */
		NIMFn.addFriend = function(options) {
		    options.type = 'addFriend';
		    this.friendRequest(options);
		};
		/**
		 * 申请加为好友
		 *
		 * - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
		 *     - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
		 *     - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
		 *
		 * @method applyFriend
		 * @memberOf NIM#
		 *
		 * @param {Object}  options         配置参数
		 * @param {String}  options.account 要申请加为好友的账号
		 * @param {String}  [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param {done}    options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#applyFriend|直接加为好友}
		 * @see {@link NIM#passFriendApply|通过好友申请}
		 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
		 * @see {@link NIM#deleteFriend|删除好友}
		 * @see {@link NIM#updateFriend|更新好友}
		 * @see {@link NIM#getFriends|获取好友列表}
		 *
		 * @example
		 * nim.applyFriend({
		 *     account: 'account',
		 *     done: applyFriendDone
		 * });
		 * function applyFriendDone(error, obj) {
		 *     console.log('申请加为好友' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.applyFriend = function(options) {
		    options.type = 'applyFriend';
		    this.friendRequest(options);
		};
		/**
		 * 通过好友申请
		 *
		 * - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
		 *     - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
		 *     - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
		 *
		 * @method passFriendApply
		 * @memberOf NIM#
		 *
		 * @param {Object}  options             配置参数
		 * @param {String}  options.idServer    对应的系统通知的 `idServer`
		 * @param {String}  options.account     要通过好友申请的账号
		 * @param {String}  [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param {done}    options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#passFriendApply|直接加为好友}
		 * @see {@link NIM#applyFriend|申请加为好友}
		 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
		 * @see {@link NIM#deleteFriend|删除好友}
		 * @see {@link NIM#updateFriend|更新好友}
		 * @see {@link NIM#getFriends|获取好友列表}
		 *
		 * @example
		 * nim.passFriendApply({
		 *     account: 'account',
		 *     done: passFriendApplyDone
		 * });
		 * function passFriendApplyDone(error, obj) {
		 *     console.log('通过好友申请' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onAddFriend(obj.friend);
		 *     }
		 * }
		 */
		NIMFn.passFriendApply = function(options) {
		    util.verifyOptions(options, 'idServer');
		    options.type = 'passFriendApply';
		    this.friendRequest(options);
		};
		/**
		 * 拒绝好友申请
		 *
		 * - {@link NIM#applyFriend|申请加某个用户为好友}后, 对方会收到一条类型为`'applyFriend'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为接收方的账号, 用户在收到好友申请后, 可以选择通过或者拒绝好友申请。
		 *     - 如果{@link NIM#passFriendApply|通过好友申请}, 那么申请方会收到一条类型为`'passFriendApply'`的{@link SystemMessage.type|系统通知}, 此类群通知消息的`from`字段的值为通过方的帐号, `to`字段的值为申请方的账号。
		 *     - 如果{@link NIM#rejectFriendApply|拒绝好友申请}, 那么申请方会收到一条类型为`'rejectFriendApply'`的{@link SystemMessage.type|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为申请方的账号。
		 *
		 * @method rejectFriendApply
		 * @memberOf NIM#
		 *
		 * @param {Object}  options             配置参数
		 * @param {String}  options.idServer    对应的系统通知的 `idServer`
		 * @param {String}  options.account     要拒绝好友申请的账号
		 * @param {String}  [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param {done}    options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#rejectFriendApply|直接加为好友}
		 * @see {@link NIM#applyFriend|申请加为好友}
		 * @see {@link NIM#passFriendApply|通过好友申请}
		 * @see {@link NIM#deleteFriend|删除好友}
		 * @see {@link NIM#updateFriend|更新好友}
		 * @see {@link NIM#getFriends|获取好友列表}
		 *
		 * @example
		 * nim.rejectFriendApply({
		 *     account: 'account',
		 *     done: rejectFriendApplyDone
		 * });
		 * function rejectFriendApplyDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('拒绝好友申请' + (!error?'成功':'失败'));
		 * }
		 */
		NIMFn.rejectFriendApply = function(options) {
		    util.verifyOptions(options, 'idServer');
		    options.type = 'rejectFriendApply';
		    this.friendRequest(options);
		};
		/**
		 * 删除好友
		 *
		 * - {@link NIM#deleteFriend|删除好友}后, 被删除的人会收到一条类型为`'deleteFriend'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为删除方的帐号, `to`字段的值为被删除方的账号。
		 *
		 * @method deleteFriend
		 * @memberOf NIM#
		 *
		 * @param {Object}  options         配置参数
		 * @param {String}  options.account 要删除好友的账号
		 * @param {done}    options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#deleteFriend|直接加为好友}
		 * @see {@link NIM#applyFriend|申请加为好友}
		 * @see {@link NIM#passFriendApply|通过好友申请}
		 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
		 * @see {@link NIM#updateFriend|更新好友}
		 * @see {@link NIM#getFriends|获取好友列表}
		 *
		 * @example
		 * nim.deleteFriend({
		 *     account: 'account',
		 *     done: deleteFriendDone
		 * });
		 * function deleteFriendDone(error, obj) {
		 *     console.log('删除好友' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onDeleteFriend(obj.account);
		 *     }
		 * }
		 */
		NIMFn.deleteFriend = function(options) {
		    util.verifyOptions(options, 'account');
		    this.processCallback(options);
		    this.sendCmd('deleteFriend', {account: options.account}, options.callback);
		};
		/**
		 * 更新好友
		 *
		 * - 开发者可以用此接口来更新好友的备注
		 * - 开发者也可以使用JSON格式的扩展字段来进行扩展
		 *
		 * @method updateFriend
		 * @memberOf NIM#
		 *
		 * @param {Object}  options             配置参数
		 * @param {String}  options.account     要更新的好友的account
		 * @param {String}  [options.alias]     备注
		 * @param {String}  [options.custom]    扩展字段, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param {done}    options.done        结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#updateFriend|直接加为好友}
		 * @see {@link NIM#applyFriend|申请加为好友}
		 * @see {@link NIM#passFriendApply|通过好友申请}
		 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
		 * @see {@link NIM#deleteFriend|删除好友}
		 * @see {@link NIM#getFriends|获取好友列表}
		 *
		 * @example
		 * nim.updateFriend({
		 *     account: 'account',
		 *     alias: 'alias',
		 *     custom: 'custom'
		 *     done: updateFriendDone
		 * });
		 * function updateFriendDone(error, obj) {
		 *     console.log('更新好友' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onUpdateFriend(obj);
		 *     }
		 * }
		 */
		NIMFn.updateFriend = function(options) {
		    this.processCallback(options);
		    var friend = new Friend(options);
		    this.sendCmd('updateFriend', {friend: friend, single: true}, options.callback);
		};
		/**
		 * 获取好友列表
		 *
		 * - 如果开发者在{@link NIM|初始化SDK}的时候设置了`syncFriends`为`false`, 那么就收不到`onfriends`回调, 可以调用此接口来获取好友列表。
		 *
		 * @method getFriends
		 * @memberOf NIM#
		 *
		 * @param {Object}  options         配置参数
		 * @param {done}    options.done    结果回调函数, 成功的时候会收到{@link Friend|好友}列表
		 * @return {Void}
		 *
		 * @see {@link NIM#addFriend|直接加为好友}
		 * @see {@link NIM#applyFriend|申请加为好友}
		 * @see {@link NIM#passFriendApply|通过好友申请}
		 * @see {@link NIM#rejectFriendApply|拒绝好友申请}
		 * @see {@link NIM#deleteFriend|删除好友}
		 * @see {@link NIM#updateFriend|更新好友}
		 *
		 * @example
		 * nim.getFriends({
		 *     done: getFriendsDone
		 * });
		 * function getFriendsDone(error, friends) {
		 *     console.log('获取好友列表' + (!error?'成功':'失败'), error, friends);
		 *     if (!error) {
		 *         onFriends(friends);
		 *     }
		 * }
		 */
		NIMFn.getFriends = function(options) {
		    var self = this;
		    var db = self.db;
		    var timetag = 0;
		    util.verifyOptions(options);
		    self.processCallback(options);
		    if (db.enable) {
		        db.getFriendsTimetag().then(function(t) {
		            timetag = t;
		            getFriendsFromServer();
		        }, getFriendsFromServer);
		    } else {
		        getFriendsFromServer();
		    }
		    function getFriendsFromServer() {
		        self.sendCmd('getFriends', {timetag:timetag, NOTSTORE: 'timetag'}, options.callback);
		    }
		};


	/***/ },
	/* 131 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var undef = util.undef;
		var logger = __webpack_require__(40);
		var Team = __webpack_require__(104);
		var TeamMember = __webpack_require__(87);

		/**
		 * 创建群
		 * 
		 * - {@link Team.type|普通群}只能设置群名字
		 * - {@link Team.type|高级群}可以设置群名字、群简介、群公告、{@link Team.joinMode|加入方式}和第三方扩展字段
		 * - {@link Team.type|高级群}的{@link Team.joinMode|加入方式}默认为`'needVerify'`
		 * - {@link Team.type|普通群}被邀请的{@link TeamMember|群成员}在有人说话之后才会看到该{@link Team|群}, 而且会先收到一条类型为{@link IMMessage.attach.type|'addTeamMembers'}的{@link IMMessage.type|群通知消息}, 然后会收到其它{@link IMMessage.scene|群消息}。
		 * - {@link Team.type|高级群}被邀请的{@link TeamMember|群成员}会收到一条类型为{@link SystemMessage.type|'teamInvite'}的{@link SystemMessage|系统通知}。
		 *     - 接受邀请后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|'acceptTeamInvite'}的{@link IMMessage.type|群通知消息}。
		 *     - 拒绝邀请后, `群主`会收到一条类型为{@link IMMessage.attach.type|'rejectTeamInvite'}的{@link SystemMessage|系统通知}。
		 * 
		 * @method createTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options                   配置参数
		 * @param  {String}   options.type              {@link Team.type|群类型}
		 * @param  {String}   options.name              群名字
		 * @param  {String[]} options.accounts          要拉进群的成员的帐号列表
		 * @param  {String}   [options.intro]           群简介
		 * @param  {String}   [options.announcement]    群公告
		 * @param  {String}   [options.joinMode]        {@link Team.joinMode|加入方式}
		 * @param  {String}   [options.custom]          扩展字段
		 * @param  {String}   [options.ps]              附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param  {done}     options.done              结果回调函数, 成功时会收到{@link Team|群资料}
		 * @return {Void}
		 * 
		 * @see {@link NIM#addTeamMembers|拉人入群}
		 * @see {@link NIM#removeTeamMembers|踢人出群}
		 * @see {@link NIM#updateTeam|更新群}
		 * 
		 * @example
		 * // 创建普通群
		 * nim.createTeam({
		 *     type: 'normal',
		 *     name: '普通群',
		 *     accounts: ['a1', 'a2'],
		 *     ps: '我建了一个普通群',
		 *     done: createTeamDone
		 * });
		 * // 创建高级群
		 * nim.createTeam({
		 *     type: 'advanced',
		 *     name: '高级群',
		 *     accounts: ['a1', 'a2'],
		 *     intro: '群简介',
		 *     announcement: '群公告',
		 *     // 高级群的加入方式默认为 'needVerify'
		 *     // joinMode: 'needVerify',
		 *     ps: '我建了一个高级群', 
		 *     done: createTeamDone
		 * });
		 * function createTeamDone(error, obj) {
		 *     console.log('创建' + obj.team.type + '群' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onCreateTeam(obj.team, obj.owner);
		 *     }
		 * }
		 */
		NIMFn.createTeam = function(options) {
		    util.verifyOptions(options, 'type name');
		    if (undef(options.accounts)) {
		        options.accounts = [];
		    } else {
		        util.verifyParamType('accounts', options.accounts, 'array');
		    }
		    options.action = 'create';
		    this.processPs(options);
		    this.processCallback(options);
		    options.team = new Team(options);
		    var content = {
		        team: options.team,
		        accounts: options.accounts.slice(0),
		        ps: options.ps
		    };
		    this.sendCmd('createTeam', content, options.callback);
		};

		/**
		 * 更新群
		 *
		 * - {@link Team.type|普通群}只能更新群名字, 
		 * - {@link Team.type|高级群}可以更新群名字、群简介、群公告、{@link Team.joinMode|加入方式}和第三方扩展字段
		 * - {@link NIM#updateTeam|更新群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'updateTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为更新群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为被更新的{@link Team|群信息}。
		 * 
		 * @method updateTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options                   配置参数
		 * @param  {String}   options.teamId            群id
		 * @param  {String}   [options.name]            群名字
		 * @param  {String}   [options.intro]           群简介
		 * @param  {String}   [options.announcement]    群公告
		 * @param  {String}   [options.joinMode]        {@link Team.joinMode|加入方式}
		 * @param  {String}   [options.custom]          扩展字段
		 * @param  {done}     options.done              结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.updateTeam({
		 *     teamId: '123',
		 *     name: '群名字',
		 *     intro: '群简介',
		 *     announcement: '群公告',
		 *     joinMode: 'needVerify',
		 *     custom: '自定义字段',
		 *     done: updateTeamDone
		 * });
		 * function updateTeamDone(error, team) {
		 *     console.log('更新群' + (!error?'成功':'失败'), error, team);
		 * }
		 */
		NIMFn.updateTeam = function(options) {
		    util.verifyOptions(options, 'teamId');
		    options.action = 'update';
		    this.processCallback(options);
		    options.team = new Team(options);
		    this.sendCmd('updateTeam', { team: options.team, single: true }, options.callback);
		};

		/**
		 * 拉人入群
		 * 
		 * - 普通群, {@link NIM#addTeamMembers|拉人入群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|``'addTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为拉人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的[群对象](#群对象), `attach`有一个字段`accounts`的值为被拉的人的帐号列表, `attach`有一个字段`members`的值为被拉的群成员列表。
		 *     - 被邀请的群成员在有人说话后才能看到该{@link Team|群}, 而且会先收到一条类型为{@link IMMessage.attach.type|`'addTeamMembers'`}的{@link IMMessage.type|群通知消息}, 然后会收到其它{@link Message|群消息}。
		 * - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
		 *     - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
		 *     - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
		 * 
		 * @method addTeamMembers
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options             配置参数
		 * @param  {String}   options.teamId      群id
		 * @param  {String[]} options.accounts    要拉进群的成员的帐号列表
		 * @param  {String}   [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param  {done}     options.done        结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#acceptTeamInvite|接受入群邀请}
		 * @see {@link NIM#rejectTeamInvite|拒绝入群邀请}
		 * @see {@link NIM#removeTeamMembers|踢人出群}
		 * 
		 * @example
		 * nim.addTeamMembers({
		 *     teamId: '123',
		 *     accounts: ['a3', 'a4'],
		 *     ps: '加入我们的群吧',
		 *     done: addTeamMembersDone
		 * });
		 * function addTeamMembersDone(error, obj) {
		 *     console.log('入群邀请发送' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.addTeamMembers = function(options) {
		    util.verifyOptions(options, 'teamId accounts');
		    util.verifyParamType('accounts', options.accounts, 'array');
		    this.processPs(options);
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId,
		        accounts: options.accounts.slice(0),
		        ps: options.ps
		    };
		    this.sendCmd('addTeamMembers', content, options.callback);
		};

		/**
		 * 踢人出群
		 * 
		 * - {@link NIM#removeTeamMembers|踢人出群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamMembers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为踢人的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`accounts`的值为被踢的人的帐号列表。
		 * 
		 * @method removeTeamMembers
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {String}     options.teamId      群id
		 * @param  {String[]}   options.accounts    要移除的成员帐号列表
		 * @param  {done}       options.done        结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#addTeamMembers|拉人入群}
		 *
		 * @example
		 * nim.removeTeamMembers({
		 *     teamId: '123',
		 *     accounts: ['a3', 'a4'],
		 *     done: removeTeamMembersDone
		 * });
		 * function removeTeamMembersDone(error, obj) {
		 *     console.log('踢人出群' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.removeTeamMembers = function(options) {
		    util.verifyOptions(options, 'teamId accounts');
		    util.verifyParamType('accounts', options.accounts, 'array');
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId,
		        accounts: options.accounts.slice(0)
		    };
		    this.sendCmd('removeTeamMembers', content, options.callback);
		};

		/**
		 * 接受入群邀请
		 *
		 * - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
		 *     - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
		 *     - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
		 * 
		 * @method acceptTeamInvite
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options           配置参数
		 * @param  {String}   options.idServer  对应的系统通知的 `idServer`
		 * @param  {String}   options.teamId    群id
		 * @param  {String}   options.from      邀请方的帐号
		 * @param  {done}     options.done      结果回调函数, 成功时会收到{@link Team|群资料}
		 * @return {Void}
		 *
		 * @see {@link NIM#rejectTeamInvite|拒绝入群邀请}
		 * @see {@link NIM#addTeamMembers|拉人入群}
		 * @see {@link NIM#getTeamMembers|获取群成员}
		 *
		 * @example
		 * nim.acceptTeamInvite({
		 *     teamId: '123',
		 *     from: 'zyy1',
		 *     done: acceptTeamInviteDone
		 * });
		 * function acceptTeamInviteDone(error, obj) {
		 *     console.log('接受入群邀请' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.acceptTeamInvite = function(options) {
		    util.verifyOptions(options, 'idServer teamId from');
		    this.processCallback(options);
		    var content = {
		        idServer: options.idServer,
		        teamId: options.teamId,
		        from: options.from
		    };
		    this.sendCmd('acceptTeamInvite', content, options.callback);
		};

		/**
		 * 拒绝入群邀请
		 *
		 * - 高级群的群主和管理员在邀请成员加入群（通过操作{@link NIM#createTeam|创建群}或{@link NIM#addTeamMembers|拉人入群}）之后, 被邀请的人会收到一条类型为`'teamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为邀请方的帐号, `to`字段的值为对应的群ID, 此类系统通知的`attach`有一个字段`team`的值为被邀请进入的{@link Team|群}, 被邀请的人可以选择接受邀请或者拒绝邀请。
		 *     - 如果{@link NIM#acceptTeamInvite|接受入群邀请}, 那么该群的所有群成员会收到一条类型为`'acceptTeamInvite'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为接受入群邀请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`members`的值为接收入群邀请的群成员列表。
		 *     - 如果{@link NIM#rejectTeamInvite|拒绝入群邀请}, 那么邀请你的人会收到一条类型为`'rejectTeamInvite'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝入群邀请的人的帐号, `to`字段的值为对应的群ID。
		 * 
		 * @method rejectTeamInvite
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options           配置参数
		 * @param  {String}   options.idServer  对应的系统通知的 `idServer`
		 * @param  {String}   options.teamId    群id
		 * @param  {String}   options.from      邀请方的帐号
		 * @param  {String}   [options.ps]      附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param  {done}     options.done      结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#acceptTeamInvite|接受入群邀请}
		 * @see {@link NIM#addTeamMembers|拉人入群}
		 *
		 * @example
		 * nim.rejectTeamInvite({
		 *     teamId: '123',
		 *     from: 'zyy1',
		 *     ps: '就不',
		 *     done: rejectTeamInviteDone
		 * });
		 * function rejectTeamInviteDone(error, obj) {
		 *     console.log('拒绝入群邀请' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.rejectTeamInvite = function(options) {
		    util.verifyOptions(options, 'idServer teamId from');
		    this.processPs(options);
		    this.processCallback(options);
		    var content = {
		        idServer: options.idServer,
		        teamId: options.teamId,
		        from: options.from,
		        ps: options.ps
		    };
		    this.sendCmd('rejectTeamInvite', content, options.callback);
		};

		/**
		 * 申请入群
		 *
		 * - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
		 *     - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
		 *     - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
		 * 
		 * @method applyTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.teamId  群id
		 * @param  {String}     [options.ps]    附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param  {done}       options.done    结果回调函数, 成功时会收到{@link Team|群资料}
		 * @return {Void}
		 *
		 * @see {@link NIM#passTeamApply|通过入群申请}
		 * @see {@link NIM#rejectTeamApply|拒绝入群申请}
		 *
		 * @example
		 * nim.applyTeam({
		 *     teamId: '123',
		 *     ps: '请加',
		 *     done: applyTeamDone
		 * });
		 * function applyTeamDone(error, obj) {
		 *     console.log('申请入群' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.applyTeam = function(options) {
		    util.verifyOptions(options, 'teamId');
		    this.processPs(options);
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId,
		        ps: options.ps
		    };
		    this.sendCmd('applyTeam', content, options.callback);
		};

		/**
		 * 通过入群申请
		 *
		 * - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
		 *     - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
		 *     - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
		 * 
		 * @method passTeamApply
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {String}     options.idServer    对应的系统通知的 `idServer`
		 * @param  {String}     options.teamId      群ID
		 * @param  {String}     options.from        申请方的帐号
		 * @param  {done}       options.done        结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#applyTeam|申请入群}
		 * @see {@link NIM#rejectTeamApply|拒绝入群申请}
		 *
		 * @example
		 * nim.passTeamApply({
		 *     teamId: '123',
		 *     from: 'a2',
		 *     done: passTeamApplyDone
		 * });
		 * function passTeamApplyDone(error, obj) {
		 *     console.log('通过入群申请' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.passTeamApply = function(options) {
		    util.verifyOptions(options, 'idServer teamId from');
		    this.processCallback(options);
		    var content = {
		        idServer: options.idServer,
		        teamId: options.teamId,
		        from: options.from
		    };
		    this.sendCmd('passTeamApply', content, options.callback);
		};

		/**
		 * 拒绝入群申请
		 *
		 * - 用户可以主动{@link NIM#applyTeam|申请加入高级群}, 目标群的群主和管理员会收到一条类型为`'applyTeam'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为申请方的帐号, `to`字段的值为对应的群ID, 高级群的群主和管理员在收到入群申请后, 可以选择通过或者拒绝入群申请。
		 *     - 如果{@link NIM#passTeamApply|通过入群申请}, 那么该群的所有群成员会收到一条类型为`'passTeamApply'`的{@link IMMessage.type|群通知消息}, 此类群通知消息的`from`字段的值为通过入群申请的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`包含了申请方的帐号, `attach`有一个字段`members`的值为被通过申请的群成员列表。
		 *     - 如果{@link NIM#rejectTeamApply|拒绝入群申请}, 那么申请人会收到一条类型为`'rejectTeamApply'`的{@link SystemMessage|系统通知}, 此类系统通知的`from`字段的值为拒绝方的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群}。
		 * 
		 * @method rejectTeamApply
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {String}     options.idServer    对应的系统通知的 `idServer`
		 * @param  {String}     options.teamId      群ID
		 * @param  {String}     options.from        申请方的帐号
		 * @param  {String}     [options.ps]        附言, 选填, 开发者也可以使用JSON格式的字符串来扩展此内容
		 * @param  {done}       options.done        结果回调函数
		 * @return {Void}
		 * 
		 * @see {@link NIM#applyTeam|申请入群}
		 * @see {@link NIM#passTeamApply|通过入群申请}
		 * 
		 * @example
		 * nim.rejectTeamApply({
		 *     teamId: '123',
		 *     from: 'a2',
		 *     ps: '就不',
		 *     done: rejectTeamApplyDone
		 * });
		 * function rejectTeamApplyDone(error, obj) {
		 *     console.log('拒绝入群申请' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.rejectTeamApply = function(options) {
		    util.verifyOptions(options, 'idServer teamId from');
		    this.processPs(options);
		    this.processCallback(options);
		    var content = {
		        idServer: options.idServer,
		        teamId: options.teamId,
		        from: options.from,
		        ps: options.ps
		    };
		    this.sendCmd('rejectTeamApply', content, options.callback);
		};

		/**
		 * 添加群管理员
		 * 
		 * - {@link NIM#addTeamManagers|添加群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'addTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为添加群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被加为管理员的帐号列表, `attach`有一个字段`members`的值为被加为管理员的群成员列表。
		 * 
		 * @method addTeamManagers
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {String}     options.teamId      群id
		 * @param  {String[]}   options.accounts    要添加的管理员帐号列表
		 * @param  {done}       options.done        结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#removeTeamManagers|移除群管理员}
		 *
		 * @example
		 * nim.addTeamManagers({
		 *     teamId: '123',
		 *     accounts: ['a2', 'a3'],
		 *     done: addTeamManagersDone
		 * });
		 * function addTeamManagersDone(error, obj) {
		 *     console.log('添加群管理员' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.addTeamManagers = function(options) {
		    util.verifyOptions(options, 'teamId accounts');
		    util.verifyParamType('accounts', options.accounts, 'array');
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId,
		        accounts: options.accounts.slice(0)
		    };
		    this.sendCmd('addTeamManagers', content, options.callback);
		};

		/**
		 * 移除群管理员
		 *
		 * - {@link NIM#removeTeamManagers|移除群管理员}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'removeTeamManagers'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为移除群管理员的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`accounts`的值为被移除的管理员的帐号列表, `attach`有一个字段`members`的值为被移除管理员的群成员列表。
		 * 
		 * @method removeTeamManagers
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options             配置参数
		 * @param  {String}   options.teamId      群id
		 * @param  {String[]} options.accounts    要移除的管理员帐号列表
		 * @param  {done}     options.done        结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#addTeamManagers|添加群管理员}
		 *
		 * @example
		 * nim.removeTeamManagers({
		 *     teamId: '123',
		 *     accounts: ['a2', 'a3'],
		 *     done: removeTeamManagersDone
		 * });
		 * function removeTeamManagersDone(error, obj) {
		 *     console.log('移除群管理员' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.removeTeamManagers = function(options) {
		    util.verifyOptions(options, 'teamId accounts');
		    util.verifyParamType('accounts', options.accounts, 'array');
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId,
		        accounts: options.accounts.slice(0)
		    };
		    this.sendCmd('removeTeamManagers', content, options.callback);
		};

		/**
		 * 修改自己的群属性
		 * 
		 * 目前支持修改的属性有这些
		 * - `nickInTeam`: 自己在群里面的群昵称
		 *     - 更新昵称后, 所有其它在线的{@link TeamMember|群成员}会收到{@link NIM|初始化SDK}时传入的`onupdateteammember`回调。
		 * - `muteTeam`: 是否关闭此群的消息提醒, `true`表示关闭提醒, 但是SDK仍然会收到这个群的消息, SDK只是记录这个设置, 具体根据这个设置要执行的操作由第三方APP决定
		 * 
		 * @method updateInfoInTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options               配置参数
		 * @param  {String}   options.teamId        群id
		 * @param  {String}   [options.nickInTeam]  在群里面的昵称
		 * @param  {Boolean}  [options.muteTeam]    是否关闭此群的消息提醒, `true`表示关闭提醒, 但是SDK仍然会收到这个群的消息, SDK只是记录这个设置, 具体根据这个设置要执行的操作由第三方APP决定
		 * @param  {done}     options.done          结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#updateNickInTeam|修改别人的群昵称}
		 *
		 * @example
		 * nim.updateInfoInTeam({
		 *     teamId: '123',
		 *     // 此参数为可选参数
		 *     nickInTeam: '群昵称',
		 *     // 静音群, 此参数为可选参数
		 *     // muteTeam: true,
		 *     done: updateInfoInTeamDone
		 * });
		 * function updateInfoInTeamDone(error, obj) {
		 *     console.log('修改自己的群属性' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.updateInfoInTeam = function(options) {
		    util.verifyOptions(options, 'teamId');
		    this.processCallback(options);
		    this.sendCmd('updateInfoInTeam', { teamMember: new TeamMember(options), single: true }, options.callback);
		};

		/**
		 * 修改别人的群昵称
		 * 
		 * - 所有其它在线的{@link TeamMember|群成员}会收到{@link NIM|初始化SDK}时传入的`onupdateteammember`回调
		 * 
		 * @method updateNickInTeam
		 * @memberOf NIM#
		 * 
		 * @param  {Object}   options             配置参数
		 * @param  {String}   options.teamId      群id
		 * @param  {String}   options.account     要修改昵称的{@link TeamMember|群成员}的帐号
		 * @param  {String}   options.nickInTeam  群昵称
		 * @param  {done}     options.done        结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#updateInfoInTeam|修改自己的群属性}
		 * 
		 * @example
		 * nim.updateNickInTeam({
		 *     teamId: '123',
		 *     account: 'a2',
		 *     nickInTeam: '群昵称',
		 *     done: updateNickInTeam
		 * });
		 * function updateNickInTeam(error, obj) {
		 *     console.log('修改自己的群属性' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.updateNickInTeam = function(options) {
		    util.verifyOptions(options, 'teamId account');
		    this.processCallback(options);
		    this.sendCmd('updateNickInTeam', { teamMember: new TeamMember(options), single: true }, options.callback);
		};

		/**
		 * 主动退群
		 *
		 * - {@link NIM#leaveTeam|主动退群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'leaveTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为退群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}。
		 * 
		 * @method leaveTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}   options           配置参数
		 * @param  {String}   options.teamId    群id
		 * @param  {done}     options.done      结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.leaveTeam({
		 *     teamId: '123',
		 *     done: leaveTeamDone
		 * });
		 * function leaveTeamDone(error, obj) {
		 *     console.log('主动退群' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.leaveTeam = function(options) {
		    util.verifyOptions(options, 'teamId');
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId
		    };
		    this.sendCmd('leaveTeam', content, options.callback);
		};

		/**
		 * 转让群
		 *
		 * - {@link NIM#transferTeam|转让群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'transferTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段的值为转让群的人的帐号, `to`字段的值为对应的群ID, `attach`有一个字段`team`的值为对应的{@link Team|群对象}, `attach`有一个字段`account`的值为为新群主的帐号, `attach`有一个字段`members`的值为包含新旧群主的群成员列表。
		 * - 如果转让群的同时离开群, 那么相当于调用{@link NIM#leaveTeam|主动退群}来离开群, 所有{@link TeamMember|群成员}会再收到一条类型为{@link IMMessage.attach.type|`'leaveTeam'`}的{@link IMMessage.type|群通知消息}。
		 * 
		 * @method transferTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.teamId  群id
		 * @param  {String}     options.account 新群主的帐号
		 * @param  {Boolean}    options.leave   转让群的同时是否离开群
		 * @param  {done}       options.done    结果回调函数
		 * @return {Void}
		 *
		 * @see {@link NIM#leaveTeam|离开群}
		 *
		 * @example
		 * nim.transferTeam({
		 *     teamId: '123',
		 *     account: 'zyy2',
		 *     leave: false,
		 *     done: transferOwnerDone
		 * });
		 * function transferOwnerDone(error, obj) {
		 *     console.log('转让群' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.transferTeam = function(options) {
		    util.verifyOptions(options, 'teamId account leave');
		    util.verifyParamType('leave', options.leave, 'boolean');
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId,
		        account: options.account,
		        leave: options.leave
		    };
		    this.sendCmd('transferTeam', content, options.callback);
		};

		/**
		 * 解散群
		 * 
		 * - {@link NIM#dismissTeam|解散群}后, 所有{@link TeamMember|群成员}会收到一条类型为{@link IMMessage.attach.type|`'dismissTeam'`}的{@link IMMessage.type|群通知消息}。此类群通知消息的`from`字段为解散群的人的帐号, `to`字段的值为被对应的群ID。
		 * 
		 * @method dismissTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.teamId  群id
		 * @param  {done}       options.done    结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.dismissTeam({
		 *     teamId: '123',
		 *     done: dismissTeamDone
		 * });
		 * function dismissTeamDone(error, obj) {
		 *     console.log('解散群' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.dismissTeam = function(options) {
		    util.verifyOptions(options, 'teamId');
		    this.processCallback(options);
		    var content = {
		        teamId: options.teamId
		    };
		    this.sendCmd('dismissTeam', content, options.callback);
		};

		/**
		 * 获取群
		 *
		 * - 开发者可以调用此接口获取群资料
		 * 
		 * @method getTeam
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.teamId  群id
		 * @param  {done}       options.done    结果回调函数, 成功时会收到{@link Team|群资料}
		 * @return {Void}
		 *
		 * @see {@link NIM#getTeams|获取群列表}
		 * @see {@link NIM#getTeamMembers|获取群成员}
		 *
		 * @example
		 * nim.getTeam({
		 *     teamId: '123',
		 *     done: getTeamDone
		 * });
		 * function getTeamDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('获取群' + (!error?'成功':'失败'));
		 * }
		 */
		NIMFn.getTeam = function(options) {
		    var self = this,
		        db = self.db,
		        teamId;
		    util.verifyOptions(options, 'teamId');
		    self.processCallback(options);

		    options.cbaop = function(error, obj) {
		        if (!error) {
		            log(obj);
		        }
		    };

		    teamId = options.teamId;
		    if (options.sync) {
		        getTeamFromServer();
		    } else {
		        if (db.enable) {
		            db.getTeam(teamId).then(function(team) {
		                if (!!team) {
		                    log(team);
		                    options.done(null, team);
		                } else {
		                    getTeamFromServer();
		                }
		            }, getTeamFromServer);
		        } else {
		            getTeamFromServer();
		        }
		    }
		    function getTeamFromServer() {
		        self.sendCmd('getTeam', { teamId: options.teamId }, options.callback);
		    }
		    function log(team) {
		        logger.warn('get team', teamId, team);
		    }
		};

		/**
		 * 获取群列表
		 *
		 * - 如果开发者在{@link NIM|初始化SDK}的时候设置了`syncTeams`为`false`, 那么就收不到`onteams`回调, 可以调用此接口来获取{@link Team|群}列表
		 * 
		 * @method getTeams
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options         配置参数
		 * @param  {done}       options.done    结果回调函数, 成功时会收到{@link Team|群}列表
		 * @return {Void}
		 * 
		 * @see {@link NIM#getTeam|获取群资料}
		 * @see {@link NIM#getTeamMembers|获取群成员}
		 *
		 * @example
		 * nim.getTeams({
		 *     done: getTeamsDone
		 * });
		 * function getTeamsDone(error, teams) {
		 *     console.log(error);
		 *     console.log(teams);
		 *     console.log('获取群列表' + (!error?'成功':'失败'));
		 * }
		 */
		NIMFn.getTeams = function(options) {
		    var self = this;
		    var db = self.db;
		    var timetag = 0;
		    util.verifyOptions(options);
		    self.processCallback(options);
		    if (db.enable) {
		        db.getTeamsTimetag().then(function(t) {
		            timetag = t;
		            getTeamsFromServer();
		        }, getTeamsFromServer);
		    } else {
		        getTeamsFromServer();
		    }
		    function getTeamsFromServer() {
		        self.sendCmd('getTeams', {timetag: timetag, NOTSTORE: 'timetag'}, options.callback);
		    }
		};

		/**
		 * 获取群成员
		 *
		 * - 如果开发者在{@link NIM|初始化SDK}时选择设置了`syncTeamMembers`为`false`, 那么就收不到`onteammembers`回调, 可以调用此方法来获取{@link TeamMember|群成员}列表
		 * - 接受入群邀请之后调用此方法来获取{@link TeamMember|群成员}列表
		 * 
		 * @method getTeamMembers
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.teamId  群id
		 * @param  {done}       options.done    结果回调函数, 成功时会额外附上{@link TeamMember|群成员}列表
		 * @return {Void}
		 * 
		 * @see {@link NIM#getTeam|获取群资料}
		 * @see {@link NIM#getTeams|获取群列表}
		 *
		 * @example
		 * nim.getTeamMembers({
		 *     teamId: '123',
		 *     done: getTeamMembersDone
		 * });
		 * function getTeamMembersDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('获取群成员' + (!error?'成功':'失败'));
		 *     if (!error) {
		 *         onTeamMembers(obj);
		 *     }
		 * }
		 */
		NIMFn.getTeamMembers = function(options) {
		    var self = this;
		    var db = self.db;
		    var timetag = 0;
		    util.verifyOptions(options, 'teamId');
		    self.processCallback(options);
		    if (db.enable) {
		        db.getTeamMembersTimetag(options.teamId).then(function(t) {
		            timetag = t;
		            getTeamMembersFromServer();
		        }, getTeamMembersFromServer);
		    } else {
		        getTeamMembersFromServer();
		    }
		    function getTeamMembersFromServer() {
		        self.sendCmd('getTeamMembers', { teamId: options.teamId, timetag: timetag, NOTSTORE: 'timetag' }, options.callback);
		    }
		};

		/**
		 * 获取`teamIds`对应的本地群
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 *
		 * @method getLocalTeams
		 * @memberOf NIM#
		 * 
		 * @param  {Object}      options         配置参数
		 * @param  {String[]}    options.teamIds teamId 数组
		 * @param  {Function}    options.done    结果回调函数, 成功时会额外附上群列表
		 * @return {Void}
		 *
		 * @example
		 * nim.getLocalTeams({
		 *     teamIds: teamIds
		 *     done: getLocalTeamsDone
		 * });
		 * function getLocalTeamsDone(error, obj) {
		 *     console.log('获取本地群' + (!error?'成功':'失败'));
		 *     console.log(error);
		 *     console.log(obj);
		 * }
		 */
		NIMFn.getLocalTeams = function(options) {
		    var self = this;
		    var db = self.db;
		    var error,
		        teams = [];
		    util.verifyOptions(options, 'teamIds');
		    util.verifyParamType('teamIds', options.teamIds, 'array');
		    self.processCallback(options);
		    if (db.enable) {
		        db.getTeamsByTeamIds(options.teamIds).then(function(records) {
		            teams = records.filter(function(record) {
		                return !!record;
		            });
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.teams = teams;
		        options.done(error, options);
		    }
		};

		NIMFn.getLocalTeamMembers = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    var members = [];
		    util.verifyOptions(options, 'teamId accounts');
		    util.verifyParamType('accounts', options.accounts, 'array');
		    self.processCallback(options);
		    if (db.enable) {
		        db.getInvalidTeamMembers(options.teamId, options.accounts).then(function(records) {
		            members = records.filter(function(record) {
		                return !!record;
		            });
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.members = members;
		        options.done(error, options);
		    }
		};

		/**
		 * 删除 `teamId` 对应的本地群
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 如果当前用户还在群里面, 那么会失败
		 * - 如果对应的群不存在, 算成功
		 * - 如果传了多个 teamId, 但是当前用户还在某个群里面, 那么会失败, 但是所有用户不在的群都会被删掉
		 *
		 * @method deleteLocalTeam
		 * @memberOf NIM#
		 * 
		 * @param  {Object}             options         配置参数
		 * @param  {String|String[]}    options.teamId  teamId 或者 teamId 数组
		 * @param  {Function}           options.done    结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.deleteLocalTeam({
		 *     teamId: '1234',
		 *     done: deleteLocalTeamDone
		 * });
		 * function deleteLocalTeamDone(error, obj) {
		 *     console.log('删除本地群' + (!error?'成功':'失败'));
		 *     console.log(error);
		 *     console.log(obj);
		 * }
		 */
		NIMFn.deleteLocalTeam = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    util.verifyOptions(options, 'teamId');
		    self.processCallback(options);
		    if (db.enable) {
		        db.deleteTeam(options.teamId).then(function() {
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.done(error, options);
		    }
		};


	/***/ },
	/* 132 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var undef = util.undef;
		var notundef = util.notundef;

		/**
		 * 设置当前会话
		 * - 设置后, 当前会话未读数会被置为 `0`, 同时开发者会收到 `onupdatesession` 回调
		 * - 传空字符串的话, 重置当前回话为空
		 * 
		 * @method setCurrSession
		 * @memberOf NIM#
		 *
		 * @param {String} sessionId 会话ID
		 *
		 * @example
		 * nim.setCurrSession('scene-account');
		 */
		NIMFn.setCurrSession = function(sessionId) {
		    this.protocol.setCurrSession(sessionId);
		};

		/**
		 * 清空某个会话的未读数
		 *
		 * @method resetSessionUnread
		 * @memberOf NIM#
		 * 
		 * @param {String} sessionId 会话ID
		 * @return {Void}
		 *
		 * @example
		 * nim.resetSessionUnread('scene-account');
		 */
		NIMFn.resetSessionUnread = function(sessionId) {
		    this.protocol.resetSessionUnread(sessionId);
		};

		/**
		 * 获取本地会话列表
		 * - 如果不{@link support.db|支持数据库}, 返回空数组
		 * - 会话列表按时间逆序排列, 即最近聊过天的放在列表的最前面
		 * 
		 * @method getLocalSessions
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options                 配置参数
		 * @param  {Number}     [options.lastSessionId] 上次查询的最后一条会话的`id`, 第一次不填
		 * @param  {Number}     [options.limit]         本次查询的会话数量限制, 最多 100 条, 默认 100 条
		 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从最近的会话开始往前查找本地会话；
		 *                                              `true`表示从第一条会话开始往后查找本地会话
		 * @param  {done}       options.done            结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.getLocalSessions({
		 *     lastSessionId: lastSessionId,
		 *     limit: 100,
		 *     done: getLocalSessionsDone
		 * });
		 * function getLocalSessionsDone(error, obj) {
		 *     console.log('获取本地会话列表' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         onSessions(obj.sessions);
		 *     }
		 * }
		 */
		NIMFn.getLocalSessions = function(options) {
		    var self = this;
		    var db = self.db;
		    var error,
		        sessions = [];
		    util.verifyOptions(options);
		    if (undef(options.limit)) {
		        options.limit = 100;
		    }
		    util.verifyParamType('limit', options.limit, 'number');
		    util.verifyParamMax('limit', options.limit, 100);
		    if (notundef(options.reverse)) {
		        util.verifyParamType('reverse', options.reverse, 'boolean');
		    } else {
		        options.reverse = false;
		    }
		    self.processCallback(options);

		    if (db.enable) {
		        db.getSessions(options).then(function(records) {
		            sessions = records;
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.sessions = sessions;
		        options.done(error, options);
		    }
		};

		/**
		 * 更新本地会话
		 * - 更新 `id` 对应的本地会话
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 如果对应的会话不存在, 算成功, 返回 null
		 * - 这些字段只会被更新到本地数据库, 不会被更新到服务器上
		 *
		 * @method updateLocalSession
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options                 配置参数
		 * @param  {String}     options.id              id
		 * @param  {String}     [options.localCustom]   自定义字段
		 * @param  {Function}   options.done            结果回调函数, 成功时会额外附上{@link Session|会话}
		 * @return {Void}
		 *
		 * @example
		 * nim.updateLocalSession({
		 *     id: 'p2p-account',
		 *     localCustom: '{"key","value"}',
		 *     done: updateLocalSessionDone
		 * });
		 * function updateLocalSessionDone(error, obj) {
		 *     console.log('更新本地会话' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.updateLocalSession = function(options) {
		    var self = this;
		    var db = self.db;
		    var error,
		        session = null;
		    util.verifyOptions(options, 'id');
		    self.processCallback(options);
		    if (db.enable) {
		        var obj = util.filterObj(options, 'id localCustom');
		        db.updateSession(obj).then(function(record) {
		            session = record;
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.session = session;
		        options.done(error, options);
		    }
		};

		/**
		 * 删除本地会话
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 如果对应的会话不存在, 算成功
		 *
		 * @method deleteLocalSession
		 * @memberOf NIM#
		 * 
		 * @param  {Object}             options         配置参数
		 * @param  {String|String[]}    options.id      id 或 id 数组
		 * @param  {Function}           options.done    结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.deleteLocalSession({
		 *     id: 'p2p-account',
		 *     done: deleteLocalSessionDone
		 * });
		 * function deleteLocalSessionDone(error, obj) {
		 *     console.log('删除本地会话' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.deleteLocalSession = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    util.verifyOptions(options, 'id');
		    self.processCallback(options);
		    if (db.enable) {
		        db.deleteSession(options.id).then(function() {
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.done(error, options);
		    }
		};

		/**
		 * 删除服务器上的会话
		 * 
		 * @method deleteSession
		 * @memberOf NIM#
		 *
		 * @param  {Object} options         配置参数
		 * @param  {String} options.scene   {@link IMMessage.scene|场景}
		 * @param  {String} options.to      对方账号或群ID
		 * @param  {done}   options.done    结果回调函数
		 * @return {Void}
		 * 
		 * @example
		 * nim.deleteSession({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     done: deleteSessionDone
		 * });
		 * function deleteSessionDone(error, obj) {
		 *     console.log('删除会话' + (!error?'成功':'失败'), error, obj);
		 * }
		 * @see {@link NIM#deleteSessions|批量删除服务器上的会话}
		 */
		NIMFn.deleteSession = function(options) {
		    util.verifyOptions(options, 'scene to');
		    this.processCallback(options);
		    options.sessions = [{
		        scene: options.scene,
		        to: options.to
		    }];
		    this.deleteSessions(options);
		};

		/**
		 * 批量删除服务器上的会话
		 * 
		 * @method deleteSessions
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {Session[]}  options.sessions    会话列表
		 * @param  {done}       options.done        结果回调函数
		 * @return {Void}
		 * 
		 * @example
		 * nim.deleteSessions({
		 *     sessions: {[
		 *         scene: 'p2p',
		 *         to: 'account'
		 *     ], [
		 *         scene: 'p2p',
		 *         to: 'account1'
		 *     ]},
		 *     done: deleteSessionsDone
		 * });
		 * function deleteSessionsDone(error, obj) {
		 *     console.log('批量删除会话' + (!error?'成功':'失败'), error, obj);
		 * }
		 * @see {@link NIM#deleteSession|删除服务器上的会话}
		 */
		NIMFn.deleteSessions = function(options) {
		    util.verifyOptions(options, 'sessions');
		    util.verifyParamType('sessions', options.sessions, 'array');
		    options.sessions.forEach(function(session, index) {
		        util.verifyOptions(session, 'scene to', true, 'sessions[' + index + '].');
		    });
		    this.processCallback(options);
		    this.sendCmd('deleteSessions', {
		        sessions: options.sessions.map(function(session) {
		            return session.scene + '|' + session.to;
		        })
		    }, options.callback);
		};


	/***/ },
	/* 133 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var undef = util.undef;
		var notundef = util.notundef;
		var device = __webpack_require__(47);

		/**
		 * 发送文本消息
		 *
		 * - 文本消息是消息的一种, 请参考{@link IMMessage|消息}
		 * 
		 * @memberOf NIM#
		 * @method sendText
		 * 
		 * @param  {Object}             options                         配置参数
		 * @param  {String}             options.scene                   {@link IMMessage.scene|场景}
		 * @param  {String|Number}      options.to                      接收方, 对方帐号或者群id
		 * @param  {String}             options.text                    文本消息内容
		 * @param  {Boolean}            [options.resend]                是否是重发
		 * @param  {String}             [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}             [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {String}             [options.pushContent]           自定义推送文案
		 * @param  {String}             [options.pushPayload]           自定义的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {Boolean}            [options.isHistoryable=true]    是否存储云端历史
		 * @param  {Boolean}            [options.isRoamingable=true]    是否支持漫游
		 * @param  {Boolean}            [options.isSyncable=true]       是否支持发送者多端同步
		 * @param  {Boolean}            [options.cc]                    是否支持抄送
		 * @param  {Boolean}            [options.isPushable=true]       是否需要推送
		 * @param  {Boolean}            [options.isOfflinable=true]     是否要存离线
		 * @param  {Boolean}            [options.isUnreadable=true]     是否计入消息未读数
		 * @param  {Boolean}            [options.needPushNick=true]     是否需要推送昵称
		 * @param  {done}               options.done                    结果回调函数
		 * @return {Message}                                            {@link IMMessage|消息}
		 *
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 * 
		 * @example
		 * var msg = nim.sendText({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     text: 'hello',
		 *     done: sendMsgDone
		 * });
		 * console.log('正在发送p2p text消息, id=' + msg.idClient);
		 * pushMsg(msg);
		 * function sendMsgDone(error, msg) {
		 *     console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient, error, msg);
		 * }
		 */

		/**
		 * 文件上传进度回调
		 * @callback uploadprogress
		 * @param {Object} obj                  进度信息
		 * @param {Number} obj.total            文件总大小
		 * @param {Number} obj.loaded           已经上传的大小
		 * @param {Number} obj.percentage       上传百分比
		 * @param {String} obj.percentageText   上传百分比的文字表示
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */
		/**
		 * 预览文件
		 *
		 * - 开发者可以预览文件, 支持以下几种场景
		 *     - 通过参数`fileInput`传入文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 *     - 通过参数`blob`传入 Blob 对象
		 *     - 通过参数`dataURL`传入包含 MIME type 和 base64 数据的 data URL
		 * - SDK会将文件上传到文件服务器, 然后将拿到的文件对象在`done`回调中传给开发者, 文件对象有以下几种
		 *     - {@link Image|图片对象}
		 *     - {@link Audio|音频对象}
		 *     - {@link Video|视频对象}
		 *     - {@link File|文件对象}
		 * - 开发者在拿到文件对象之后, 可以进行处理, 然后调用{@link NIM#sendFile|发送文件消息}来发送文件消息。
		 * - 文件大小限制为最大 100M
		 *     - 高级浏览器会在上传前就检测文件大小
		 *     - IE8/IE9 会在上传完成后检测文件大小
		 * 
		 * @memberOf NIM#
		 * @method previewFile
		 *
		 * @param  {Object}         options                     配置参数
		 * @param  {String}         [options.type]              文件过滤器
		 * - image会过滤掉非图片的文件, audio过滤掉非音频, video会过滤掉非视频的文件
		 * - IE8/IE9 不支持文件过滤
		 * @param  {String|Node}    [options.fileInput]         文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 * @param  {Blob}           [options.blob]              Blob 对象
		 * @param  {String}         [options.dataURL]           包含 MIME type 和 base64 数据的 data URL
		 * @param  {uploadprogress} [options.uploadprogress]    上传进度, ie9以下不支持上传进度
		 * @param  {done}           options.done                结果回调函数, 成功时会收到文件对象, 请参考
		 * - {@link Image|图片对象}
		 * - {@link Audio|音频对象}
		 * - {@link Video|视频对象}
		 * - {@link File|文件对象}
		 * @return {Void}
		 * 
		 * @see {@link NIM#sendFile|发送文件消息}
		 *
		 * @example
		 * nim.previewFile({
		 *     type: 'image',
		 *     fileInput: fileInput,
		 *     uploadprogress: function(obj) {
		 *         console.log('文件总大小: ' + obj.total + 'bytes');
		 *         console.log('已经上传的大小: ' + obj.loaded + 'bytes');
		 *         console.log('上传进度: ' + obj.percentage);
		 *         console.log('上传进度文本: ' + obj.percentageText);
		 *     },
		 *     done: function(error, file) {
		 *         console.log('上传image' + (!error?'成功':'失败'));
		 *         // show file to the user
		 *         if (!error) {
		 *             var msg = nim.sendFile({
		 *                 scene: 'p2p',
		 *                 to: 'account',
		 *                 file: file,
		 *                 done: sendMsgDone
		 *             });
		 *             console.log('正在发送p2p image消息, id=' + msg.idClient);
		 *             pushMsg(msg);
		 *         }
		 *     }
		 * });
		 */

		/**
		 * 上传完成回调
		 * @callback uploaddone
		 * @param {NIMError}    error   是否出错
		 * @param {Object}      file    上传成功时会包含文件对象, 请参考
		 *                              {@link Image|图片对象}
		 *                              {@link Audio|音频对象}
		 *                              {@link Video|视频对象}
		 *                              {@link File|文件对象}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */
		/**
		 * 发送文件消息之前的回调函数
		 * @callback beforesend
		 * @param {String} idClient SDK生成的ID
		 * @see {@link NIM#sendFile|发送文件消息}
		 */
		/**
		 * 发送文件消息
		 *
		 * - 文件消息是{@link IMMessage.type|消息类型}的一种
		 * - 开发者可以直接发送文件消息
		 *     - 支持以下几种场景
		 *         - 通过参数`fileInput`传入文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 *         - 通过参数`blob`传入 Blob 对象
		 *         - 通过参数`dataURL`传入包含 MIME type 和 base64 数据的 data URL
		 *     - SDK会先将文件上传到文件服务器, 然后把拿到的文件对象在`uploaddone`回调中传给用户, 然后将其拼装成文件消息发送出去。
		 * - 开发者也可以先{@link NIM#previewFile|预览文件}来获取文件对象, 然后调用此接口发送文件消息。
		 *     - 通过参数`file`传入文件
		 * - 直接发送文件消息的话会在`beforesend`回调里面传入SDK生成的`idClient`, 如果先预览文件再发送, 那么此接口会直接返回`idClient`
		 * - 参数`type`指定了要发送的文件类型, 包括图片、音频、视频和普通文件, 对应的值分别为`'image'`、`'audio'`、`'video'`和`'file'`, 不传默认为`'file'`。
		 * - 图片、音频、视频和普通文件的区别在于具体的文件信息不一样, 具体字段请参考
		 *     - {@link Image|图片对象}
		 *     - {@link Audio|音频对象}
		 *     - {@link Video|视频对象}
		 *     - {@link File|文件对象}
		 * - 文件大小限制为最大100M
		 *     - 高级浏览器会在上传前就检测文件大小
		 *     - IE8和IE9会在上传完成后检测文件大小
		 * 
		 * @memberOf NIM#
		 * @method sendFile
		 *
		 * @param  {Object}         options                         配置参数
		 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
		 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
		 * @param  {String}         [options.type]                  文件过滤器, 
		 *                                                          `'image'`会过滤掉非图片的文件, `'audio'`过滤掉非音频, `'video'`会过滤掉非视频的文件, 
		 *                                                          IE8/IE9 不支持文件过滤
		 * @param  {String|Node}    [options.fileInput]             文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 * @param  {Blob}           [options.blob]                  Blob 对象
		 * @param  {String}         [options.dataURL]               MIME type 和 base64 数据的 data URL
		 * @param  {Array}          [options.file]                  文件对象, 开发者可以通过{@link NIM#previewFile|预览文件}拿到文件对象
		 * @param  {Boolean}        [options.resend=false]          是否是重发
		 * @param  {Function}       [options.beginupload]           开始上传图片的回调
		 * - 如果开发者传入 fileInput, 在此回调之前不能修改 fileInput
		 * - 在此回调之后可以取消图片上传, 此回调会接收一个参数 `upload`, 调用 `upload.abort();` 来取消文件上传
		 * @param  {uploadprogress} [options.uploadprogress]        上传进度, IE9以下不支持上传进度
		 * @param  {uploaddone}     [options.uploaddone]            上传完成回调
		 * @param  {beforesend}     [options.beforesend]            发送文件消息之前的回调函数
		 * @param  {Boolean}        [options.resend]                是否是重发
		 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}         [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {String}         [options.pushContent]           自定义推送文案
		 * @param  {String}         [options.pushPayload]           自定义的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
		 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
		 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
		 * @param  {Boolean}        [options.cc]                    是否支持抄送
		 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
		 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
		 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
		 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
		 * @param  {done}           options.done                结果回调函数
		 * @return {Void|Message}
		 * - 如果提供了参数fileInput, 那么先上传文件到服务器再发送, 不会返回{@link IMMessage|消息}, 会在beforesend里面返回{@link IMMessage|消息}. 
		 * - 如果提供了参数file, 那么直接发送文件消息, 返回{@link IMMessage|消息}
		 *
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 *
		 * @example
		 * nim.sendFile({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     type: 'image',
		 *     fileInput: fileInput,
		 *     uploadprogress: function(obj) {
		 *         console.log('文件总大小: ' + obj.total + 'bytes');
		 *         console.log('已经上传的大小: ' + obj.loaded + 'bytes');
		 *         console.log('上传进度: ' + obj.percentage);
		 *         console.log('上传进度文本: ' + obj.percentageText);
		 *     },
		 *     uploaddone: function(error, file) {
		 *         console.log('上传' + (!error?'成功':'失败'), error, file);
		 *     },
		 *     beforesend: function(msg) {
		 *         console.log('正在发送p2p image消息, id=' + msg.idClient);
		 *         pushMsg(msg);
		 *     },
		 *     done: sendMsgDone
		 * });
		 */

		/**
		 * 发送自定义消息
		 * 
		 * - 自定义消息是{@link IMMessage.type|消息类型}的一种
		 * - 下面的代码用自定义消息实现了`石头剪刀布`游戏
		 * 
		 * @memberOf NIM#
		 * @method sendCustomMsg
		 *
		 * @param  {Object}         options                         配置参数
		 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
		 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
		 * @param  {String}         options.content                 自定义消息的消息内容, 推荐使用JSON格式构建
		 * @param  {Boolean}        [options.resend]                是否是重发
		 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}         [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {String}         [options.pushContent]           自定义推送文案
		 * @param  {String}         [options.pushPayload]           自定义的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
		 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
		 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
		 * @param  {Boolean}        [options.cc]                    是否支持抄送
		 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
		 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
		 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
		 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
		 * @return {Message}                            {@link IMMessage|消息}
		 *
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 *
		 * @example
		 * var value = Math.ceil(Math.random()*3);
		 * var content = {
		 *     type: 1,
		 *     data: {
		 *         value: value
		 *     }
		 * };
		 * var msg = nim.sendCustomMsg({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     content: JSON.stringify(content),
		 *     done: sendMsgDone
		 * });
		 * console.log('正在发送p2p自定义消息, id=' + msg.idClient);
		 * pushMsg(msg);
		 */

		/**
		 * 发送地理位置消息
		 * 
		 * - 地理位置消息是{@link IMMessage.type|消息类型}的一种, `geo`参数请参考{@link Geo|地理位置对象}
		 * 
		 * @method sendGeo
		 * @memberOf NIM#
		 *
		 * @param  {Object}         options                         配置参数
		 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
		 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
		 * @param  {Object}         options.geo                     地理位置对象
		 * @param  {Number}         options.geo.lng                 经度
		 * @param  {Number}         options.geo.lat                 纬度
		 * @param  {String}         options.geo.title               地址描述
		 * @param  {Boolean}        [options.resend]                是否是重发
		 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}         [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {String}         [options.pushContent]           自定义推送文案
		 * @param  {String}         [options.pushPayload]           自定义的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
		 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
		 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
		 * @param  {Boolean}        [options.cc]                    是否支持抄送
		 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
		 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
		 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
		 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
		 * @return {Message}                            {@link IMMessage|消息}
		 * 
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 *
		 * @example
		 * var msg = nim.sendGeo({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     geo: {
		 *         lng: '116.3833',
		 *         lat: '39.9167',
		 *         title: 'Beijing'
		 *     },
		 *     done: sendMsgDone
		 * });
		 * console.log('正在发送p2p geo消息, id=' + msg.idClient);
		 * pushMsg(msg);
		 */
		NIMFn.sendGeo = function(options) {
		    var self = this;
		    options.type = 'geo';
		    self.processCallback(options);
		    options.msg = new self.message.GeoMessage(options);
		    return self.sendMsg(options);
		};

		/**
		 * 发送欢迎语消息
		 * 
		 * - 欢迎语消息是{@link IMMessage.type|消息类型}的一种
		 *
		 * @method sendTipMsg
		 * @memberOf NIM#
		 *
		 * @param  {Object}         options                         配置参数
		 * @param  {String}         options.scene                   {@link IMMessage.scene|场景}
		 * @param  {String|Number}  options.to                      接收方, 对方帐号或者群id
		 * @param  {String}         options.content                 欢迎语内容, 推荐使用JSON格式构建
		 * @param  {Boolean}        [options.resend]                是否是重发
		 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}         [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {String}         [options.pushContent]           自定义推送文案
		 * @param  {String}         [options.pushPayload]           自定义的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {Boolean}        [options.isHistoryable=true]    是否存储云端历史
		 * @param  {Boolean}        [options.isRoamingable=true]    是否支持漫游
		 * @param  {Boolean}        [options.isSyncable=true]       是否支持发送者多端同步
		 * @param  {Boolean}        [options.cc]                    是否支持抄送
		 * @param  {Boolean}        [options.isPushable=true]       是否需要推送
		 * @param  {Boolean}        [options.isOfflinable=true]     是否要存离线
		 * @param  {Boolean}        [options.isUnreadable=true]     是否计入消息未读数
		 * @param  {Boolean}        [options.needPushNick=true]     是否需要推送昵称
		 * @return {Message}        {@link IMMessage|消息}
		 *
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 *
		 * @example
		 * var msg = nim.sendTipMsg({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     content: 'tips',
		 *     done: sendMsgDone
		 * });
		 * console.log('正在发送p2p欢迎语消息, id=' + msg.idClient);
		 * pushMsg(msg);
		 */
		NIMFn.sendTipMsg = function(options) {
		    var self = this;
		    options.type = 'tip';
		    self.processCallback(options);
		    options.msg = new self.message.TipMessage(options);
		    return self.sendMsg(options);
		};

		NIMFn.beforeSendMsg = function(options) {
		    var self = this;
		    var protocol = self.protocol;
		    var msg = options.msg;
		    // 如果是发送给自己, 需要带上设备号
		    if (msg.to === self.account) { msg.fromDeviceId = device.deviceId; }
		    // 在消息中带上当前用户的信息更新时间
		    msg.userUpdateTime = protocol.myInfo && protocol.myInfo.updateTime;
		    // 生成命令
		    var cmd;
		    // 区分点对点消息和群消息
		    switch (msg.getScene()) {
		    case 'p2p':
		        cmd = 'sendMsg';
		        break;
		    case 'team':
		        cmd = 'sendTeamMsg';
		        break;
		    default:
		        break;
		    }
		    // 是否是过滤消息
		    if (!!options.filter) {
		        cmd = 'sendFilterMsg';
		        msg.filter = true;
		    }
		    options.cmd = cmd;
		};

		/**
		 * 标记消息为已收到
		 * 
		 * - 如果没有消息、或者支持数据库、或者设置了自动标记, 那么直接返回
		 * 
		 * @memberOf NIM#
		 * @method markMsgRead
		 *
		 * @param  {Message|Message[]}  msgs    待标记的消息或者消息数组
		 * @return {Void}
		 *
		 * @example
		 * nim.markMsgRead(someMsg);
		 * // or
		 * nim.markMsgRead([someMsg]);
		 */
		NIMFn.markMsgRead = function(msgs) {
		    var self = this;
		    var protocol = self.protocol;
		    if (!msgs || self.db.enable || protocol.options.autoMarkRead) { return; }
		    protocol.markMsgRead(msgs, true);
		};

		/**
		 * 获取云端历史记录
		 *
		 * - 该接口用于获取一段时间内的历史消息, 由参数`beginTime`和`endTime`来控制时间范围。
		 *     - 当`reverse`为`false`时, 后续查询的`endTime`对应上次查询的最后一条消息的`time`字段
		 *     - 当`reverse`为`true`时, 后续查询的`beginTime`对应上次查询的最后一条消息的`time`字段
		 * - 如果要搜索历史消息, 请参考{@link NIM#searchHistoryMsgs|获取包含关键词的历史消息}
		 * 
		 * @method getHistoryMsgs
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options                 配置参数
		 * @param  {String}     options.scene           请参考{@link IMMessage.scene|消息场景}
		 * @param  {String}     options.to              聊天对象, 账号或者群id
		 * @param  {Number}     [options.beginTime]     时间戳, 开始时间, 精确到ms, 默认为0
		 * @param  {Number}     [options.endTime]       时间戳, 结束时间, 精确到ms, 默认为服务器的当前时间
		 * @param  {String}     [options.lastMsgId]     上次查询的最后一条消息的`idServer`, 第一次不填
		 * @param  {Number}     [options.limit]         本次查询的消息数量限制, 最多100条, 默认100条
		 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从`endTime`开始往前查找历史消息;
		 *                                              `true`表示从`beginTime`开始往后查找历史消息
		 * @param  {Boolean}    [options.asc=false]     默认`false`表示返回的消息按时间逆序排序;
		 *                                              `true`表示按时间正序排序
		 * @param  {done}       options.done            结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
		 * @return {Void}
		 *
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 *
		 * @example
		 * nim.getHistoryMsgs({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     done: getHistoryMsgsDone
		 * });
		 * function getHistoryMsgsDone(error, obj) {
		 *     console.log('获取云端历史记录' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         console.log(obj.msgs);
		 *     }
		 * }
		 */
		NIMFn.getHistoryMsgs = function(options) {
		    var self = this;
		    util.verifyOptions(options, 'scene to');
		    util.verifyParamValid('scene', options.scene, self.message.validScenes);
		    if (typeof options.beginTime === 'undefined') {
		        options.beginTime = 0;
		    }
		    util.verifyParamType('beginTime', options.beginTime, 'number');
		    if (typeof options.endTime === 'undefined') {
		        options.endTime = 0;
		    }
		    util.verifyParamType('endTime', options.endTime, 'number');
		    if (typeof options.lastMsgId === 'undefined') {
		        options.lastMsgId = '0';
		    }
		    if (typeof options.limit === 'undefined') {
		        options.limit = 100;
		    }
		    util.verifyParamType('limit', options.limit, 'number');
		    util.verifyParamMax('limit', options.limit, 100);
		    if (notundef(options.reverse)) {
		        util.verifyParamType('reverse', options.reverse, 'boolean');
		    } else {
		        options.reverse = false;
		    }
		    if (notundef(options.asc)) {
		        util.verifyParamType('asc', options.asc, 'boolean');
		    } else {
		        options.asc = false;
		    }
		    self.processCallback(options);

		    if (options.asc) {
		        options.cbaop = function(error, obj) {
		            if (!error) {
		                obj.msgs = obj.msgs.reverse();
		            }
		        };
		    }

		    var cmd;
		    switch (options.scene) {
		    case 'p2p':
		        cmd = 'getHistoryMsgs';
		        break;
		    case 'team':
		        cmd = 'getTeamHistoryMsgs';
		        break;
		    default:
		        break;
		    }
		    var content = {
		        scene: options.scene,
		        to: options.to,
		        beginTime: options.beginTime,
		        endTime: options.endTime,
		        lastMsgId: options.lastMsgId,
		        limit: options.limit,
		        reverse: options.reverse
		    };
		    self.sendCmd(cmd, content, options.callback);
		};

		/**
		 * 获取云端包含关键词的历史记录
		 *
		 * - 跟{@link NIM#getHistoryMsgs|获取历史消息}接口类似, 只是去掉了参数`lastMsgId`, 增加了参数`keyword(要搜索的关键词)`
		 * 
		 * @method searchHistoryMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options 配置参数
		 * @param  {String}     options.scene           {@link IMMessage.scene|场景}
		 * @param  {String}     options.to              聊天对象, 账号或者群id
		 * @param  {String}     options.keyword         待搜索的关键词
		 * @param  {Number}     [options.beginTime]     时间戳, 开始时间, 精确到ms, 默认为0
		 * @param  {Number}     [options.endTime]       时间戳, 结束时间, 精确到ms, 默认为服务器的当前时间
		 * @param  {Number}     [options.limit]         本次查询的消息数量限制, 最多100条, 默认100条
		 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从`endTime`开始往前查找历史消息;
		 *                                              `true`表示从`beginTime`开始往后查找历史消息
		 * @param  {Boolean}    [options.asc=false]     默认`false`表示返回的消息按时间逆序排序;
		 *                                              `true`表示按时间正序排序
		 * @param  {done}       options.done            结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
		 * @return {Void}
		 * 
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 *
		 * @example
		 * nim.searchHistoryMsgs({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     keyword: 'keyword',
		 *     done: searchHistoryMsgsDone
		 * });
		 * function searchHistoryMsgsDone(error, obj) {
		 *     console.log('获取云端包含关键词的历史记录' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         console.log(obj.msgs);
		 *     }
		 * }
		 */
		NIMFn.searchHistoryMsgs = function(options) {
		    var self = this;
		    util.verifyOptions(options, 'scene to keyword');
		    util.verifyParamValid('scene', options.scene, self.message.validScenes);
		    if (typeof options.beginTime === 'undefined') {
		        options.beginTime = 0;
		    }
		    util.verifyParamType('beginTime', options.beginTime, 'number');
		    if (typeof options.endTime === 'undefined') {
		        options.endTime = 0;
		    }
		    util.verifyParamType('endTime', options.endTime, 'number');
		    if (typeof options.limit === 'undefined') {
		        options.limit = 100;
		    }
		    util.verifyParamType('limit', options.limit, 'number');
		    util.verifyParamMax('limit', options.limit, 100);
		    if (notundef(options.reverse)) {
		        util.verifyParamType('reverse', options.reverse, 'boolean');
		    } else {
		        options.reverse = false;
		    }
		    if (notundef(options.asc)) {
		        util.verifyParamType('asc', options.asc, 'boolean');
		    } else {
		        options.asc = false;
		    }
		    self.processCallback(options);

		    if (options.asc) {
		        options.cbaop = function(error, obj) {
		            if (!error) {
		                obj.msgs = obj.msgs.reverse();
		            }
		        };
		    }

		    var cmd;
		    switch (options.scene) {
		    case 'p2p':
		        cmd = 'searchHistoryMsgs';
		        break;
		    case 'team':
		        cmd = 'searchTeamHistoryMsgs';
		        break;
		    default:
		        break;
		    }
		    var content = util.filterObj(options, 'scene to beginTime endTime keyword limit reverse');
		    self.sendCmd(cmd, content, options.callback);
		};

		/**
		 * 获取本地历史记录
		 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
		 *
		 * @method getLocalMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options                     配置参数
		 * @param  {String}     options.scene               {@link IMMessage.scene|场景}
		 * @param  {String}     options.to                  聊天对象, 账号或者群id
		 * @param  {String}     [options.type]              {@link IMMessage.type|消息类型}, 默认查找所有类型的消息
		 * @param  {Number}     [options.lastMsgIdClient]   上次查询的最后一条消息的`idClient`, 第一次不填
		 * @param  {Number}     [options.limit]             本次查询的消息数量限制, 最多 100 条, 默认 100 条
		 * @param  {Boolean}    [options.reverse=false]     默认`false`表示从最近的消息开始往前查找本地消息;
		 *                                                  `true`表示从第一条消息开始往后查找本地消息
		 * @param  {Boolean}    [options.asc=false]         默认`false`表示返回的消息按时间逆序排序;
		 *                                                  `true`表示按时间正序排序
		 * @param  {done}       options.done                结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
		 * @return {Void}
		 * 
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 * 
		 * @example
		 * nim.getLocalMsgs({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     lastMsgIdClient: 'lastMsgIdClient',
		 *     limit: 100,
		 *     done: getLocalMsgsDone
		 * });
		 * function getLocalMsgsDone(error, obj) {
		 *     console.log('获取本地消息' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         pushMsg(obj.msgs);
		 *     }
		 * }
		 */
		NIMFn.getLocalMsgs = function(options) {
		    var self = this;
		    var db = self.db;
		    var error,
		        msgs = [];

		    util.verifyOptions(options, 'scene to');
		    util.verifyParamValid('scene', options.scene, self.message.validScenes);
		    options.sessionId = options.scene + '-' + options.to;
		    if (notundef(options.type)) {
		        util.verifyParamValid('type', options.type, self.message.validTypes);
		    }
		    if (undef(options.limit)) {
		        options.limit = 100;
		    }
		    util.verifyParamType('limit', options.limit, 'number');
		    util.verifyParamMax('limit', options.limit, 100);
		    if (notundef(options.reverse)) {
		        util.verifyParamType('reverse', options.reverse, 'boolean');
		    } else {
		        options.reverse = false;
		    }
		    if (notundef(options.asc)) {
		        util.verifyParamType('asc', options.asc, 'boolean');
		    } else {
		        options.asc = false;
		    }
		    self.processCallback(options);

		    if (db.enable) {
		        db.getMsgsBySessionId(options).then(function(records) {
		            msgs = records;
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        if (options.asc) {
		            msgs = msgs.reverse();
		        }
		        options.msgs = msgs;
		        options.done(error, options);
		    }
		};

		/**
		 * 获取包含关键词的本地历史记录
		 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
		 *
		 * @method searchLocalMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options                     配置参数
		 * @param  {String}     options.scene               {@link IMMessage.scene|场景}
		 * @param  {String}     options.to                  聊天对象, 账号或者群id
		 * @param  {String}     options.keyword             待搜索的关键词
		 * @param  {Number}     [options.lastMsgIdClient]   上次查询的最后一条消息的`idClient`, 第一次不填
		 * @param  {Number}     [options.limit]             本次查询的消息数量限制, 最多 100 条, 默认 100 条
		 * @param  {Boolean}    [options.reverse=false]     默认`false`表示从最近的消息开始往前查找本地消息;
		 *                                                  `true`表示从第一条消息开始往后查找本地消息
		 * @param  {Boolean}    [options.asc=false]         默认`false`表示返回的消息按时间逆序排序;
		 *                                                  `true`表示按时间正序排序
		 * @param  {done}       options.done                结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
		 * @return {Void}
		 * 
		 * @see {@link NIM#sendText|发送文本消息}
		 * @see {@link NIM#sendFile|发送文件消息}
		 * @see {@link NIM#sendGeo|发送地理位置消息}
		 * @see {@link NIM#sendTipMsg|发送欢迎语消息}
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 * @see {@link NIM#getHistoryMsgs|获取服务器历史消息}
		 * @see {@link NIM#searchHistoryMsgs|获取包含关键词的服务器历史消息}
		 * @see {@link NIM#getLocalMsgs|获取本地历史消息}
		 * @see {@link NIM#searchLocalMsgs|获取包含关键词的本地历史消息}
		 *
		 * @example
		 * nim.searchLocalMsgs({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     keyword: 'keyword',
		 *     done: searchLocalMsgsDone
		 * });
		 * function searchLocalMsgsDone(error, obj) {
		 *     console.log('搜索本地消息' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         console.log(obj.msgs);
		 *     }
		 * }
		 */
		NIMFn.searchLocalMsgs = function(options) {
		    util.verifyOptions(options, 'keyword');
		    options.type = 'text';
		    return this.getLocalMsgs(options);
		};

		/**
		 * 获取 idClient 对应的本地消息
		 * - 如果不{@link support.db|支持数据库}, 算成功, 返回 null
		 * 
		 * @method getLocalMsgByIdClient
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {String}     options.idClient    idClient
		 * @param  {Function}   options.done        结果回调函数, 成功时会额外附上{@link IMMessage|消息}
		 * @return {Void}
		 *
		 * @example
		 * nim.getLocalMsgByIdClient({
		 *     idClient: 'd7a1b2c63066e1038e9aa01321652370',
		 *     done: getLocalMsgByIdClientDone
		 * });
		 * function getLocalMsgByIdClientDone(error, obj) {
		 *     console.log('获取本地消息' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         console.log(obj.msg);
		 *     }
		 * }
		 */
		NIMFn.getLocalMsgByIdClient = function(options) {
		    var self = this;
		    var db = self.db;
		    var error,
		        msg = null;
		    util.verifyOptions(options, 'idClient');
		    self.processCallback(options);
		    if (db.enable) {
		        db.getMsgByIdClient(options.idClient).then(function(record) {
		            if (record) { msg = record; }
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.msg = msg;
		        options.done(error, options);
		    }
		};

		/**
		 * 获取 idClients 对应的本地消息
		 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
		 * 
		 * @method getLocalMsgsByIdClients
		 * @memberOf NIM#
		 *
		 * @param  {Object}     options             配置参数
		 * @param  {String[]}   options.idClients   idClients
		 * @param  {Function}   options.done        结果回调函数, 成功时会额外附上{@link IMMessage|消息}列表
		 * @return {Void}
		 *
		 * @example
		 * nim.getLocalMsgsByIdClients({
		 *     idClients: [
		 *         'd7a1b2c63066e1038e9aa01321652370',
		 *         '22e604c7811c23586355f63f24658525'
		 *     ],
		 *     done: getLocalMsgsByIdClientsDone
		 * });
		 * function getLocalMsgsByIdClientsDone(error, obj) {
		 *     console.log('获取本地消息' + (!error?'成功':'失败'), error, obj);
		 *     if (!error) {
		 *         console.log(obj.msgs);
		 *     }
		 * }
		 */
		NIMFn.getLocalMsgsByIdClients = function(options) {
		    var self = this;
		    var db = self.db;
		    var error,
		        msgs = [];
		    util.verifyOptions(options, 'idClients');
		    util.verifyParamType('idClients', options.idClients, 'array');
		    self.processCallback(options);
		    if (db.enable) {
		        db.getMsgsByIdClients(options.idClients).then(function(records) {
		            msgs = records.filter(function(record) {
		                return !!record;
		            });
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.msgs = msgs;
		        options.done(error, options);
		    }
		};

		/**
		 * 更新本地消息
		 * - 更新 `idClient` 对应的本地消息
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 如果对应的消息不存在, 算成功, 返回 null
		 * - 这些字段只会被更新到本地数据库, 不会被更新到服务器上
		 *
		 * @method updateLocalMsg
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options                 配置参数
		 * @param  {String}     options.idClient        idClient
		 * @param {String}      [options.localCustom]   自定义字段
		 * @param  {Function}   options.done            结果回调函数, 成功时会额外附上{@link IMMessage|消息}
		 * @return {Void}
		 * 
		 * @example
		 * nim.updateLocalMsg({
		 *     id: 'p2p-account',
		 *     localCustom: '{"key","value"}',
		 *     done: updateLocalMsgDone
		 * });
		 * function updateLocalMsgDone(error, obj) {
		 *     console.log('更新本地消息' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.updateLocalMsg = function(options) {
		    var self = this;
		    var db = self.db;
		    var error,
		        msg = null;
		    util.verifyOptions(options, 'idClient');
		    self.processCallback(options);
		    if (db.enable) {
		        var obj = util.filterObj(options, 'idClient localCustom');
		        db.updateMsg(obj).then(function(record) {
		            msg = record;
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.msg = msg;
		        options.done(error, options);
		    }
		};

		/**
		 * 删除本地消息
		 * - 删除 `idClient` 对应的本地消息
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 如果对应的消息不存在, 算成功
		 * 
		 * @method deleteLocalMsg
		 * @memberOf NIM#
		 *
		 * @param  {Object}             options             配置参数
		 * @param  {String|String[]}    options.idClient    idClient 或者 idClient 数组
		 * @param  {Function}           options.done        结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.deleteLocalMsg({
		 *     idClient: 'd7a1b2c63066e1038e9aa01321652370',
		 *     done: deleteLocalMsgDone
		 * });
		 * function deleteLocalMsgDone(error, obj) {
		 *     console.log('删除本地消息' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.deleteLocalMsg = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    util.verifyOptions(options, 'idClient');
		    self.processCallback(options);
		    if (db.enable) {
		        db.deleteMsg(options.idClient).then(function() {
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.done(error, options);
		    }
		};

		/**
		 * 删除某个会话的本地消息
		 * 
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 *
		 * @method deleteLocalMsgsBySession
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options         配置参数
		 * @param  {String}     options.scene   {@link IMMessage.scene|场景}
		 * @param  {String}     options.to      聊天对象, 账号或者群id
		 * @param  {Function}   options.done    结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.deleteLocalMsgsBySession({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     done: deleteLocalMsgsBySessionDone
		 * });
		 * function deleteLocalMsgsBySession(error, obj) {
		 *     console.log('删除会话本地消息' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.deleteLocalMsgsBySession = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    util.verifyOptions(options, 'scene to');
		    util.verifyParamValid('scene', options.scene, self.message.validScenes);
		    options.sessionId = options.scene + '-' + options.to;
		    self.processCallback(options);
		    if (db.enable) {
		        db.deleteMsgsBySessionId(options.sessionId).then(function() {
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.done(error, options);
		    }
		};

		/**
		 * 删除所有本地消息
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 此方法同时会清空所有的会话, 请开发者自己清空内存里面的会话列表
		 *
		 * @method deleteAllLocalMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {Object} options 配置参数
		 * @return {Void}
		 *
		 * @example
		 * nim.deleteAllLocalMsgs({
		 *     done: deleteAllLocalMsgsDone
		 * });
		 * function deleteAllLocalMsgsDone(error, obj) {
		 *     console.log('删除所有本地消息' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.deleteAllLocalMsgs = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    self.processCallback(options);
		    if (db.enable) {
		        db.deleteAllMsgs().then(function() {
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    }
		    function bingo() {
		        options.done(error, options);
		    }
		};


	/***/ },
	/* 134 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var undef = util.undef;
		var notundef = util.notundef;
		var SystemMessage = __webpack_require__(111);

		/**
		 * 标记系统通知为已收到
		 * 
		 * @memberOf NIM#
		 * @method markSysMsgRead
		 *
		 * @param  {Object}     options                             配置参数
		 * @param  {SystemMessage|SystemMessage[]} options.sysMsgs  待标记的系统通知或者系统通知数组
		 * @param  {done}       options.done                        结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.markSysMsgRead({
		 *     sysMsgs: someSysMsg,
		 *     done: markSysMsgReadDone
		 * });
		 * function markSysMsgReadDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('标记系统通知为已收到' + (!error?'成功':'失败'));
		 * }
		 */
		NIMFn.markSysMsgRead = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    var promise = Promise.resolve();
		    var protocol = self.protocol;
		    util.verifyOptions(options, 'sysMsgs');
		    var sysMsgs = options.sysMsgs;
		    // 标记系统通知为已读, 如果支持数据库那么更新数据库记录；如果不支持数据库, 并且不自动标记已读, 那么标记已读
		    if (db.enable) {
		        promise = db.markSysMsgRead(sysMsgs).then(function(records) {
		            protocol.onUpdateSysMsg(records);
		        });
		    } else if (!protocol.options.autoMarkRead) {
		        protocol.markSysMsgRead(sysMsgs, true);
		    }
		    // 更新系统通知未读数
		    promise.then(function() {
		        return protocol.getSysMsgUnread().then(function(sysMsgUnread) {
		            return protocol.updateSysMsgUnread(sysMsgs, sysMsgUnread, -1).then(function(sysMsgUnread) {
		                protocol.onUpdateSysMsgUnread(sysMsgUnread);
		                bingo();
		            });
		        });
		    }, function(event) {
		        error = event;
		        bingo();
		    });
		    function bingo() {
		        options.done(error, options);
		    }
		};

		/**
		 * 发送自定义系统通知
		 *
		 * - 开发者可以向其他用户或群发送自定义通知。
		 * - 自定义系统通知和自定义消息的区别如下
		 *     - 自定义消息属于{@link IMMessage|消息}, 会存储在云信的消息数据库中, 需要跟其他{@link IMMessage|消息}一同展现给用户。
		 *     - 自定义系统通知属于{@link SystemMessage|系统通知}, 用于第三方通知自己, 不会存储在云信的数据库中, SDK不会解析这些通知, SDK仅仅负责传递这些通知。
		 * 
		 * @method sendCustomSysMsg
		 * @memberOf NIM#
		 *
		 * @param  {Object}         options                                 配置参数
		 * @param  {String}         options.scene                           场景跟{@link IMMessage.scene|消息场景}的一样, 分为`p2p(点对点)`和`team(群)`。
		 * @param  {String|Number}  options.to                              接收方, 帐号或者群id
		 * @param  {String}         options.content                         自定义系统通知的内容, 推荐使用JSON格式构建
		 * @param  {String}         [options.apnsText]                      apns推送文案, 仅对接收方为iOS设备有效
		 * @param  {String}         [options.pushPayload]                   自定义系统通知的推送属性
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {Boolean}        [options.sendToOnlineUsersOnly=true]    是否只发送给在线用户。
		 *                                                                  true时只发送给在线用户, 如果接收方不在线, 这条通知将被丢弃。
		 *                                                                  适合发送即时通知, 比如正在输入。
		 *                                                                  false时假如接收方在线, 那么会立即收到该通知, 
		 *                                                                  假如接收方不在线, 会在其上线后推送过去。
		 * @param  {Boolean}        [options.cc]                            是否抄送
		 * @param  {Boolean}        [options.isPushable=true]               是否需要推送
		 * @param  {Boolean}        [options.needPushNick=false]            是否需要推送昵称
		 * @param  {done}           options.done                            结果回调函数
		 * @return {String}         SDK生成的ID
		 *
		 * @see {@link NIM#sendCustomMsg|发送自定义消息}
		 *
		 * @example
		 * var content = {
		 *     type: 'type',
		 *     value: 'value'
		 * };
		 * content = JSON.stringify(content);
		 * var msgId = nim.sendCustomSysMsg({
		 *     scene: 'p2p',
		 *     to: 'account',
		 *     content: content,
		 *     sendToOnlineUsersOnly: false,
		 *     apnsText: content,
		 *     done: sendCustomSysMsgDone
		 * });
		 * console.log('正在发送p2p自定义系统通知, id=' + msgId);
		 * function sendCustomSysMsgDone(error, msg) {
		 *     console.log(error);
		 *     console.log(msg);
		 *     console.log('发送' + msg.scene + '自定义系统通知' + (!error?'成功':'失败') + ', id=' + msg.idClient);
		 * }
		 */
		NIMFn.sendCustomSysMsg = function(options) {
		    var self = this;
		    util.verifyOptions(options, 'scene to content');
		    util.verifyParamValid('scene', options.scene, self.message.validScenes);
		    self.processCallback(options);
		    if (options.scene === 'p2p') {
		        options.type = 'customP2p';
		    } else {
		        options.type = 'customTeam';
		    }
		    options.sysMsg = new SystemMessage(options);
		    var cmd = 'sendCustomSysMsg';
		    // 是否是过滤消息
		    if (!!options.filter) {
		        cmd = 'sendFilterCustomSysMsg';
		    }
		    self.sendCmd(cmd, { sysMsg: options.sysMsg, single: true }, options.callback);
		    return self.formatReturnSysMsg(options.sysMsg);
		};

		NIMFn.formatReturnSysMsg = function(sysMsg) {
		    var self = this;
		    sysMsg = util.copy(sysMsg);
		    self.protocol.completeSysMsg(sysMsg);
		    sysMsg.status = 'sending';
		    sysMsg = SystemMessage.reverse(sysMsg);
		    return sysMsg;
		};

		/**
		 * 获取本地系统通知
		 * - 如果不{@link support.db|支持数据库}, 算成功, 返回空数组
		 *
		 * @method getLocalSysMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options                 配置参数
		 * @param  {String}     [options.category]      {@link SystemMessage.category|种类}
		 * @param  {String}     [options.type]          {@link SystemMessage.type|类型}
		 * @param  {String}     [options.lastIdServer]  上次查询的最后一条系统通知的`idServer`, 第一次不填
		 * @param  {Number}     [options.limit]         本次查询的消息数量限制, 最多 100 条, 默认 100 条
		 * @param  {Boolean}    [options.reverse=false] 默认`false`表示从最近的系统通知开始往前查找本地系统通知；
		 *                                              `true`表示从第一条系统通知开始往后查找本地系统通知
		 * @param  {done}       options.done            结果回调函数, 成功时会额外附上{@link SystemMessage|系统通知}列表
		 * @return {Void}
		 *
		 * @example
		 * nim.getLocalSysMsgs({
		 *     lastIdServer: 'lastIdServer',
		 *     limit: 100,
		 *     done: getLocalSysMsgsDone
		 * });
		 * function getLocalSysMsgsDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('获取本地系统通知' + (!error?'成功':'失败'));
		 *     if (!error) {
		 *         console.log(obj.sysMsgs);
		 *     }
		 * }
		 */
		NIMFn.getLocalSysMsgs = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    var sysMsgs = [];
		    util.verifyOptions(options);
		    if (!!options.category) {
		        util.verifyParamValid('category', options.category, SystemMessage.validCategories);
		    }
		    if (!!options.type) {
		        util.verifyParamValid('type', options.type, SystemMessage.validTypes);
		    }
		    if (undef(options.limit)) {
		        options.limit = 100;
		    }
		    util.verifyParamType('limit', options.limit, 'number');
		    util.verifyParamMax('limit', options.limit, 100);
		    if (notundef(options.reverse)) {
		        util.verifyParamType('reverse', options.reverse, 'boolean');
		    } else {
		        options.reverse = false;
		    }
		    self.processCallback(options);

		    if (db.enable) {
		        db.getSysMsgs(options).then(function(records) {
		            sysMsgs = records;
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.sysMsgs = sysMsgs;
		        options.done(error, options);
		    }
		};

		/**
		 * 更新本地系统通知
		 * - 更新 `idServer` 对应的本地系统通知
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 如果对应的系统通知不存在, 算成功, 返回 null
		 * - 这些字段只会被更新到本地数据库, 不会被更新到服务器上
		 *
		 * @method updateLocalSysMsg
		 * @memberOf NIM#
		 * 
		 * @param  {Object}     options                 配置参数
		 * @param  {String}     options.idServer        idServer
		 * @param  {String}     [options.status]        状态
		 * @param  {String}     [options.localCustom]   自定义字段
		 * @param  {Function}   options.done            结果回调函数, 成功时会额外附上{@link SystemMessage|系统通知}
		 * @return {Void}
		 * 
		 * @example
		 * nim.updateLocalSysMsg({
		 *     idServer: '1234',
		 *     status: 'bingo',
		 *     localCustom: '{"key","value"}',
		 *     done: updateLocalSysMsgDone
		 * });
		 * function updateLocalSysMsgDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('更新本地系统通知' + (!error?'成功':'失败'));
		 * }
		 */
		NIMFn.updateLocalSysMsg = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    var sysMsg = null;
		    util.verifyOptions(options, 'idServer');
		    self.processCallback(options);
		    if (db.enable) {
		        var obj = util.filterObj(options, 'idServer state localCustom');
		        db.updateSysMsg(obj).then(function(reocrd) {
		            sysMsg = reocrd;
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.sysMsg = sysMsg;
		        options.done(error, options);
		    }
		};

		/**
		 * 删除本地系统通知
		 * - 删除 `idServer` 对应的本地系统通知
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 * - 如果对应的系统通知不存在, 算成功
		 *
		 * @method deleteLocalSysMsg
		 * @memberOf NIM#
		 * 
		 * @param  {Object}             options             配置参数
		 * @param  {String|String[]}    options.idServer    idServer 或 idServer 数组
		 * @param  {Function}           options.done        结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.deleteLocalSysMsg({
		 *     idServer: '1234',
		 *     done: deleteLocalSysMsgDone
		 * });
		 * function deleteLocalSysMsgDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('删除本地系统通知' + (!error?'成功':'失败'));
		 * }
		 */
		NIMFn.deleteLocalSysMsg = function(options) {
		    var self = this;
		    var db = self.db;
		    var error;
		    util.verifyOptions(options, 'idServer');
		    self.processCallback(options);
		    if (db.enable) {
		        db.deleteSysMsg(options.idServer).then(function() {
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    } else {
		        bingo();
		    }
		    function bingo() {
		        options.done(error, options);
		    }
		};

		/**
		 * 删除所有本地系统通知
		 * - 如果不{@link support.db|支持数据库}, 算成功
		 *
		 * @method deleteAllLocalSysMsgs
		 * @memberOf NIM#
		 * 
		 * @param  {Object}             options             配置参数
		 * @param  {Function}           options.done        结果回调函数
		 * @return {Void}
		 *
		 * @example
		 * nim.deleteAllLocalSysMsgs({
		 *     done: deleteAllLocalSysMsgsDone
		 * });
		 * function deleteAllLocalSysMsgsDone(error, obj) {
		 *     console.log(error);
		 *     console.log(obj);
		 *     console.log('删除所有本地系统通知' + (!error?'成功':'失败'));
		 * }
		 */
		NIMFn.deleteAllLocalSysMsgs = function(options) {
		    var error;
		    var self = this;
		    var db = self.db;
		    self.processCallback(options);
		    if (db.enable) {
		        db.deleteAllSysMsgs().then(function() {
		            bingo();
		        }, function(event) {
		            error = event;
		            bingo();
		        });
		    }
		    function bingo() {
		        self.protocol.onUpdateSysMsgUnread({});
		        options.done(error, options);
		    }
		};


	/***/ },
	/* 135 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);

		/**
		 * 获取聊天室服务器地址
		 *
		 * - 可以在 IM 连接上获取聊天室服务器地址
		 * 
		 * @memberOf NIM#
		 * @method getChatroomAddress
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String} [options.chatroomId] 聊天室 id
		 * @return {Void}
		 *
		 * @example
		 * nim.getChatroomAddress({
		 *     chatroomId: 'chatroomId',
		 *     done: getChatroomAddressDone
		 * });
		 * function getChatroomAddressDone(error, obj) {
		 *     console.log('获取聊天室地址' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.getChatroomAddress = function(options) {
		    util.verifyOptions(options, 'chatroomId');
		    var self = this;
		    self.processCallback(options);
		    self.sendCmd('getChatroomAddress', options);
		};


	/***/ },
	/* 136 */
	/***/ function(module, exports, __webpack_require__) {

		
		/**
		 * 修改图片下载的名字
		 *
		 * @memberOf NIM#
		 * @method packFileDownloadName
		 * 
		 * @param  {Object} options         配置参数
		 * @param  {String} options.url     原图 url
		 * @param  {String} options.name    下载的名字
		 * @return {String}                 修改图片下载名字后的图片 url
		 *
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * var nameUrl = nim.packFileDownloadName({
		 *     url: url,
		 *     name: '测试.jpg'
		 * });
		 * console.log(nameUrl);
		 */

		/**
		 * 将音频 url 转为 mp3
		 * - 此方法会返回一个新的 url
		 * @memberOf NIM#
		 * @method audioToMp3
		 *
		 * @param {Object} options 配置参数
		 * @param {String} options.url url
		 * @return {String} 转为 mp3 后的 url
		 *
		 * @example
		 * var url = 'http://b12026.nos.netease.com/MTAxMTAxMA==/bmltYV8xMTQwMzFfMTQ1MTg4ODk5MjMxMV9mNmI1Y2QyZC03N2UzLTQxNmUtYWY5NC1iODlhZGY4ZTYzYWQ=';
		 * var mp3Url = nim.audioToMp3({
		 *     url: url
		 * });
		 * console.log(mp3Url);
		 */

		/**
		 * 修改图片质量
		 * 
		 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
		 * - 默认图片质量为100, 开发者可以降低图片质量来省流量
		 *
		 * @memberOf NIM#
		 * @method qualityImage
		 * 
		 * @param  {Object} options         配置参数
		 * @param  {String} options.url     原图 url
		 * @param  {Int}    options.quality 图片质量, 必须为整数, 取值范围为 0-100, 此方法内部使用 Math.round 来格式化 quality
		 * @param  {done}   options.done    结果回调函数, 成功时附上修改质量后的图片 url
		 * @return {Void}
		 *
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * var qualityUrl = nim.qualityImage({
		 *     url: url,
		 *     quality: 20,
		 *     done: qualityImageDone
		 * });
		 * function qualityImageDone(error, obj) {
		 *     console.log('修改图片质量' + (!error?'成功':'失败'), error, obj);
		 * }
		 * 
		 * @see {@link NIM#qualityImage|修改图片质量}
		 * @see {@link NIM#interlaceImage|interlace 图片}
		 * @see {@link NIM#rotateImage|旋转图片}
		 * @see {@link NIM#blurImage|高斯模糊图片}
		 * @see {@link NIM#cropImage|裁剪图片}
		 * @see {@link NIM#thumbnailImage|生成缩略图}
		 * @see {@link NIM#processImage|处理图片}
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */

		/**
		 * interlace 图片
		 * 
		 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
		 * - 在网络环境较差时, interlace 后的图片会以从模糊到清晰的方式呈现给用户
		 * 
		 * @memberOf NIM#
		 * @method interlaceImage
		 * 
		 * @param  {Object} options         配置参数
		 * @param  {String} options.url     原图 url
		 * @param  {done}   options.done    结果回调函数, 成功时附上 interlace 后的图片 url
		 * @return {Void}
		 *
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * var interlaceUrl = nim.interlaceImage({
		 *     url: url,
		 *     done: interlaceImageDone
		 * });
		 * function interlaceImageDone(error, obj) {
		 *     console.log('interlace 图片' + (!error?'成功':'失败'), error, obj);
		 * }
		 *
		 * @see {@link NIM#qualityImage|修改图片质量}
		 * @see {@link NIM#interlaceImage|interlace 图片}
		 * @see {@link NIM#rotateImage|旋转图片}
		 * @see {@link NIM#blurImage|高斯模糊图片}
		 * @see {@link NIM#cropImage|裁剪图片}
		 * @see {@link NIM#thumbnailImage|生成缩略图}
		 * @see {@link NIM#processImage|处理图片}
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */

		/**
		 * 旋转图片
		 *
		 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
		 * 
		 * @memberOf NIM#
		 * @method rotateImage
		 *
		 * @param  {Object} options         配置参数
		 * @param  {String} options.url     原图 url
		 * @param  {Int}    options.angle   旋转的角度, 正整数表示顺时针, 负整数表示逆时针, 必须为整数, 此方法内部会先将 angle 格式化为 [0, 360] 范围内的数字, 然后使用 Math.round 来格式化 angle
		 * @param  {done}   options.done    结果回调函数, 成功时附上旋转后的图片的 url
		 * @return {Void}
		 *
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * var rotateUrl = nim.rotateImage({
		 *     url: url,
		 *     angle: 90,
		 *     done: rotateImageDone
		 * });
		 * function rotateImageDone(error, obj) {
		 *     console.log('旋转图片' + (!error?'成功':'失败'), error, obj);
		 * }
		 * 
		 * @see {@link NIM#qualityImage|修改图片质量}
		 * @see {@link NIM#interlaceImage|interlace 图片}
		 * @see {@link NIM#rotateImage|旋转图片}
		 * @see {@link NIM#blurImage|高斯模糊图片}
		 * @see {@link NIM#cropImage|裁剪图片}
		 * @see {@link NIM#thumbnailImage|生成缩略图}
		 * @see {@link NIM#processImage|处理图片}
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */

		/**
		 * 高斯模糊图片
		 * 
		 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
		 * 
		 * @memberOf NIM#
		 * @method blurImage
		 *
		 * @param  {Object} options         配置参数
		 * @param  {String} options.url     原图 url
		 * @param  {Number} radius          高斯模糊半径, 不包含中心点的像素, 取值范围 [1,50]
		 * @param  {Number} sigma           高斯模糊标准差, 不能小于 0
		 * @param  {done}   options.done    结果回调函数, 成功时附上高斯模糊后的图片 url
		 * @return {Void}
		 * 
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * var blurUrl = nim.blurImage({
		 *     url: url,
		 *     radius: 5,
		 *     sigma: 3,
		 *     done: blurImageDone
		 * });
		 * function blurImageDone(error, obj) {
		 *     console.log('高斯模糊图片' + (!error?'成功':'失败'), error, obj);
		 * }
		 * 
		 * @see {@link NIM#qualityImage|修改图片质量}
		 * @see {@link NIM#interlaceImage|interlace 图片}
		 * @see {@link NIM#rotateImage|旋转图片}
		 * @see {@link NIM#blurImage|高斯模糊图片}
		 * @see {@link NIM#cropImage|裁剪图片}
		 * @see {@link NIM#thumbnailImage|生成缩略图}
		 * @see {@link NIM#processImage|处理图片}
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */

		/**
		 * 裁剪图片
		 *
		 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
		 * - 从坐标 (x, y) 处截取尺寸为 width*height 的图片, (0, 0) 代表左上角
		 * - width/height 不能小于0, 如果 width/height 大于图片的原始宽度/高度, 那么将被替换为图片的原始宽度/高度
		 *
		 * @memberOf NIM#
		 * @method cropImage
		 * 
		 * @param  {Object} options         配置参数
		 * @param  {String} options.url     原图 url
		 * @param  {Int}    options.x       起点坐标 x, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
		 * @param  {Int}    options.y       起点坐标 y, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
		 * @param  {Int}    options.width   宽度, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
		 * @param  {Int}    options.height  高度, 必须需为整数, 此方法内部使用 Math.round 来格式化 x/y/width/height
		 * @param  {done}   options.done    结果回调函数, 成功时附上裁剪后的图片的 url
		 * @return {Void}
		 *
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * var cropUrl = nim.cropImage({
		 *     url: url,
		 *     x: 100,
		 *     y: 0,
		 *     width: 250,
		 *     height: 250,
		 *     done: function cropImageDone
		 * });
		 * function cropImageDone(error, obj) {
		 *     console.log('裁剪图片' + (!error?'成功':'失败'), error, obj);
		 * }
		 *
		 * @see {@link NIM#qualityImage|修改图片质量}
		 * @see {@link NIM#interlaceImage|interlace 图片}
		 * @see {@link NIM#rotateImage|旋转图片}
		 * @see {@link NIM#blurImage|高斯模糊图片}
		 * @see {@link NIM#cropImage|裁剪图片}
		 * @see {@link NIM#thumbnailImage|生成缩略图}
		 * @see {@link NIM#processImage|处理图片}
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */

		/**
		 * 生成缩略图
		 *
		 * - 只支持通过{@link NIM#previewFile|预览文件}或{@link NIM#sendFile|发送文件消息}拿到的图片 url, 或者经过其他图片操作后拿到的图片 url
		 * - width/height 限制了缩略图的尺寸
		 *     - width/height 必须大于等于 0, 不能同时为 0, 必须小于 4096
		 * - 不同模式下生成的缩略图是不一样的, 目前支持以下三种模式
		 *     - `'cover'`: 原图片等比缩略, 缩略图一边等于请求的尺寸, 另一边大于请求的尺寸, 即缩略图刚好能覆盖住尺寸为 width*height 的矩形
		 *     - `'contain'`: 原图片等比缩略, 缩略图一边等于请求的尺寸, 另一边小于请求的尺寸, 即尺寸为 width*height 的矩形刚好能覆盖住缩略图
		 *     - `'crop'`: 先等比缩略原图片, 使得一边等于请求的尺寸, 另一边大于请求的尺寸, 然后对大于请求尺寸的那条边进行裁剪, 使得最终的图片大小刚好等于请求的尺寸
		 * - 如果缩略图尺寸大于图片尺寸, 默认情况下图片不会被放大, 可以传入参数`enlarge=true`来放大图片
		 * - `'crop'` 模式下可以传入参数 axis.x 或 axis.y 来控制最后一步裁剪的位置
		 *     - x/y 必须为整数, 取值范围为 0-10, 此方法内部使用 Math.round 来格式化 x/y
		 *     - x 为 0 时表示裁取最左端, x 为 10 时表示裁取最右端
		 *     - y 为 0 时表示裁取最上端, y 为 10 时表示裁取最下端
		 *     - x/y 默认值均为 5, 即裁取正中间
		 *
		 * @memberOf NIM#
		 * @method thumbnailImage
		 * 
		 * @param  {Object}     options                 配置参数
		 * @param  {String}     options.url             原图 url
		 * @param  {Int}        [options.width]         缩略图的最大宽度, 必须为整数, 此方法内部使用 Math.round 来格式化 width/height
		 * @param  {Int}        [options.height]        缩略图的最大高度, 必须为整数, 此方法内部使用 Math.round 来格式化 width/height
		 * @param  {String}     options.mode            缩略模式, 目前支持以下三种模式, 请参考上面的描述
		 * - `'cover'`
		 * - `'contain'`
		 * - `'crop'`
		 * @param  {Int}        [options.axis.x]        `'crop'` 模式下控制最后一步裁剪的位置, 请参考上面的描述
		 * @param  {Int}        [options.axis.y]        `'crop'` 模式下控制最后一步裁剪的位置, 请参考上面的描述
		 * @param  {Boolean}    [options.enlarge=false] 当图片尺寸小于要缩略的尺寸时, 是否放大图片, 默认`false`不放大
		 * @param  {done}       options.done            结果回调函数, 成功时附上缩略后的图片 url
		 * @return {Void}
		 *
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * var thumbnailUrl = nim.thumbnailImage({
		 *     url: url,
		 *     mode: 'cover',
		 *     width: 80,
		 *     height: 100,
		 *     done: thumbnailImageDone
		 * });
		 * function thumbnailImageDone(error, obj) {
		 *     console.log('生成缩略图' + (!error?'成功':'失败'), error, obj);
		 * }
		 * 
		 * @see {@link NIM#qualityImage|修改图片质量}
		 * @see {@link NIM#interlaceImage|interlace 图片}
		 * @see {@link NIM#rotateImage|旋转图片}
		 * @see {@link NIM#blurImage|高斯模糊图片}
		 * @see {@link NIM#cropImage|裁剪图片}
		 * @see {@link NIM#thumbnailImage|生成缩略图}
		 * @see {@link NIM#processImage|处理图片}
		 * @see {@link NIM#previewFile|预览文件}
		 * @see {@link NIM#sendFile|发送文件消息}
		 */

		/**
		 * 处理图片
		 *
		 * 此方法接收一组图片操作, 按操作顺序依次处理图片, 可选的操作包括：
		 * - {@link NIM#qualityImage|修改图片质量}
		 * - {@link NIM#interlaceImage|interlace 图片}
		 * - {@link NIM#rotateImage|旋转图片}
		 * - {@link NIM#blurImage|高斯模糊图片}
		 * - {@link NIM#cropImage|裁剪图片}
		 * - {@link NIM#thumbnailImage|生成缩略图}
		 * - {@link NIM#previewFile|预览文件}
		 * - {@link NIM#sendFile|发送文件消息}
		 * 
		 * 每个操作所需的参数请参考上面的各个方法, 除了上面方法列出来的参数之外, 每个操作需要提供操作类型, 分别是
		 * - `'quality'`
		 * - `'interlace'`
		 * - `'rotate'`
		 * - `'blur'`
		 * - `'crop'`
		 * - `'thumbnail'`
		 * 
		 * 请参考下面的示例代码
		 * 
		 * @memberOf NIM#
		 * @method processImage
		 * 
		 * @param  {Object} options         配置参数
		 * @param  {String} options.url     原图 url
		 * @param  {Array}  options.ops     操作序列
		 * @param  {done}   options.done    结果回调函数, 成功时附上处理后的图片 url
		 * @return {Void}
		 *
		 * @example
		 * // 裁剪后旋转
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ0MzE0NTgyNDI0M184YjFkYTMwMS02NjcxLTRiYjktYTUwZC04ZTVlZjZlNzZjMzA=';
		 * nim.processImage({
		 *     url: url,
		 *     ops: [
		 *         {
		 *             type: 'crop',
		 *             x: 100,
		 *             y: 0,
		 *             width: 250,
		 *             height: 250,
		 *         },
		 *         {
		 *             type: 'thumbnail',
		 *             mode: 'cover',
		 *             width: 80,
		 *             height: 80
		 *         }
		 *     ],
		 *     done: processImageDone
		 * });
		 * function processImageDone(error, obj) {
		 *     console.log('处理图片' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);
		var ImageOp = __webpack_require__(107);

		NIMFn.getNosToken = function(options) {
		    this.sendCmd('getNosToken', {
		        responseBody: options.responseBody
		    }, options.callback);
		};

		NIMFn.packFileDownloadName = function(options) {
		    util.verifyOptions(options, 'url name');
		    var url = options.url;
		    return url + util.genUrlSep(url) + 'download=' + encodeURIComponent(options.name);
		};

		NIMFn.audioToMp3 = function(options) {
		    util.verifyOptions(options, 'url');
		    var url = options.url;
		    return url + util.genUrlSep(url) + 'audioTrans&type=mp3';
		};

		NIMFn.qualityImage = function(options) {
		    return this.beforeProcessImage(options, 'quality');
		};

		NIMFn.interlaceImage = function(options) {
		    return this.beforeProcessImage(options, 'interlace');
		};

		NIMFn.rotateImage = function(options) {
		    return this.beforeProcessImage(options, 'rotate');
		};

		NIMFn.blurImage = function(options) {
		    return this.beforeProcessImage(options, 'blur');
		};

		NIMFn.cropImage = function(options) {
		    return this.beforeProcessImage(options, 'crop');
		};

		NIMFn.thumbnailImage = function(options) {
		    return this.beforeProcessImage(options, 'thumbnail');
		};

		NIMFn.beforeProcessImage = function(options, type) {
		    var op = util.copy(options);
		    op.type = type;
		    options.ops = [op];
		    return this.processImage(options);
		};

		NIMFn.processImage = function(options) {
		    var self = this;
		    util.verifyOptions(options, 'url ops');
		    util.verifyParamType('ops', options.ops, 'array');
		    var imageOps = options.ops.map(function(op) {
		        util.verifyOptions(op, 'type');
		        util.verifyParamValid('type', op.type, ImageOp.validTypes);
		        return self['gen' + op.type.slice(0,1).toUpperCase() + op.type.slice(1) + 'Op'](op);
		    });
		    self.processCallback(options);
		    self.sendCmd('processImage', {
		        url: options.url,
		        imageOps: imageOps
		    }, options.callback);
		};

		NIMFn.genQualityOp = function(options) {
		    util.verifyOptions(options, 'quality');
		    util.verifyParamType('quality', options.quality, 'number');
		    util.verifyParamMin('quality', options.quality, 0);
		    util.verifyParamMax('quality', options.quality, 100);
		    var quality = Math.round(options.quality);
		    return new ImageOp({
		        type: options.type,
		        qualityQuality: quality
		    });
		};

		NIMFn.genInterlaceOp = function(options) {
		    return new ImageOp({
		        type: options.type
		    });
		};

		NIMFn.genRotateOp = function(options) {
		    util.verifyOptions(options, 'angle');
		    util.verifyParamType('angle', options.angle, 'number');
		    while (options.angle < 0) {
		        options.angle = options.angle + 360;
		    }
		    options.angle = options.angle % 360;
		    var angle = Math.round(options.angle);
		    return new ImageOp({
		        type: options.type,
		        rotateAngle: angle
		    });
		};

		NIMFn.genBlurOp = function(options) {
		    util.verifyOptions(options, 'radius sigma');
		    util.verifyParamType('radius', options.radius, 'number');
		    util.verifyParamMin('radius', options.radius, 1);
		    util.verifyParamMax('radius', options.radius, 50);
		    util.verifyParamType('sigma', options.sigma, 'number');
		    util.verifyParamMin('sigma', options.sigma, 0);
		    var radius = Math.round(options.radius);
		    var sigma = Math.round(options.sigma);
		    return new ImageOp({
		        type: options.type,
		        blurRadius: radius,
		        blurSigma: sigma
		    });
		};

		NIMFn.genCropOp = function(options) {
		    util.verifyOptions(options, 'x y width height');
		    util.verifyParamType('x', options.x, 'number');
		    util.verifyParamMin('x', options.x, 0);
		    util.verifyParamType('y', options.y, 'number');
		    util.verifyParamMin('y', options.y, 0);
		    util.verifyParamType('width', options.width, 'number');
		    util.verifyParamMin('width', options.width, 0);
		    util.verifyParamType('height', options.height, 'number');
		    util.verifyParamMin('height', options.height, 0);
		    var x = Math.round(options.x);
		    var y = Math.round(options.y);
		    var width = Math.round(options.width);
		    var height = Math.round(options.height);
		    return new ImageOp({
		        type: options.type,
		        cropX: x,
		        cropY: y,
		        cropWidth: width,
		        cropHeight: height
		    });
		};

		NIMFn.genThumbnailOp = (function() {
		    var modes = {
		        cover: 'z',
		        contain: 'x',
		        crop: 'y'
		    };
		    return function(options) {
		        util.verifyOptions(options, 'mode');
		        util.verifyParamValid('mode', options.mode, Object.keys(modes));
		        if (options.mode === 'contain') {
		            util.verifyParamAtLeastPresentOne(options, 'width height');
		        } else {
		            util.verifyOptions(options, 'width height');
		        }
		        if (util.undef(options.width)) { options.width = 0; }
		        if (util.undef(options.height)) { options.height = 0; }
		        util.verifyParamType('width', options.width, 'number');
		        util.verifyParamMin('width', options.width, 0);
		        util.verifyParamType('height', options.height, 'number');
		        util.verifyParamMin('height', options.height, 0);
		        var width = Math.round(options.width);
		        var height = Math.round(options.height);
		        var imageOp = new ImageOp({
		            type: options.type,
		            thumbnailMode: modes[options.mode],
		            thumbnailWidth: width,
		            thumbnailHeight: height
		        });
		        if (options.mode === 'crop') {
		            if (util.notundef(options.axis)) {
		                if (util.undef(options.axis.x)) { options.axis.x = 5; }
		                if (util.undef(options.axis.y)) { options.axis.y = 5; }
		                util.verifyParamMin('axis.x', options.axis.x, 0);
		                util.verifyParamMax('axis.x', options.axis.x, 10);
		                util.verifyParamMin('axis.y', options.axis.y, 0);
		                util.verifyParamMax('axis.y', options.axis.y, 10);
		                var x = Math.round(options.axis.x);
		                var y = Math.round(options.axis.y);
		                imageOp.thumbnailAxisX = x;
		                imageOp.thumbnailAxisY = y;
		            }
		        }
		        if (util.notundef(options.enlarge)) {
		            util.verifyParamType('enlarge', options.enlarge, 'boolean');
		            if (options.enlarge) {
		                imageOp.thumbnailEnlarge = 1;
		            }
		        }
		        return imageOp;
		    };
		}());


	/***/ },
	/* 137 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;
		var util = __webpack_require__(10);

		/**
		 * 音频转文字
		 *
		 * - 仅支持通过{@link NIM#previewFile|previewFile}或者{@link NIM#sendFile|sendFile}拿到的音频 url, 或者收到的音频消息的 url
		 *
		 * @memberOf NIM#
		 * @method audioToText
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String} options.url 音频 url
		 * @param {Function} options.done 结果回调函数, 成功时会额外附上文本 text
		 * @return {Void}
		 *
		 * @example
		 * var url = 'http://nim.nos.netease.com/MTAxMTAwMg==/bmltYV8xNDc5OTNfMTQ1MTg5MDI2MjY0MF9lYzk1MWMyZC1hMzRmLTQ1YzctYWI2ZS1kZWE2NTA2M2Q4NjY=';
		 * nim.audioToText({
		 *     url: url,
		 *     done: audioToTextDone
		 * });
		 * function audioToTextDone(error, obj) {
		 *     console.log('语音转文字' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		NIMFn.audioToText = function(options) {
		    util.verifyOptions(options, 'url');
		    options.audioToText = util.filterObj(options, 'url');
		    var self = this;
		    self.processCallback(options);
		    self.sendCmd('audioToText', options);
		};


	/***/ },
	/* 138 */
	/***/ function(module, exports, __webpack_require__) {

		var NIMFn = __webpack_require__(79).fn;

		// NIMFn.initDB = function(options) {
		//     var self = this;
		//     self.processCallback(options);
		//     var done = options.done;
		//     if (support.db) {
		//         db.init().then(done, done);
		//     } else {
		//         done();
		//     }
		// };

		NIMFn.clearDB = function(options) {
		    var self = this;
		    var db = self.db;
		    self.processCallback(options);
		    var done = options.done;
		    if (db.enable) {
		        db.clear().then(done, done);
		    } else {
		        done();
		    }
		};

		/**
		 * 删除数据库
		 * @private
		 * @param  {Object} options         配置参数
		 * @param  {done}   options.done    结果回调函数
		 * @return {Void}
		 */
		// NIMFn.deleteDB = function(options) {
		//     this.processCallback(options);
		//     var done = options.done;
		//     if (support.db) {
		//         db.destroy().then(done, done);
		//     } else {
		//         done();
		//     }
		// };


	/***/ }
	])
	});
	;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Chatroom"] = factory();
		else
			root["Chatroom"] = factory();
	})(this, function() {
	return webpackJsonp_NIM_Web_SDK_v2_0_0_dev([0],[
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		// ployfill
		__webpack_require__(1);
		__webpack_require__(2);
		// polyfill the global environment
		__webpack_require__(3).polyfill();

		var Chatroom = __webpack_require__(8);

		/**
		 * SDK 使用 {@link https://github.com/bestiejs/platform.js/|platform.js} 来检测浏览器平台, 通过 `Chatroom.platform` 来获取此库的引用
		 * @memberOf Chatroom
		 * @type {Object}
		 */
		Chatroom.platform = __webpack_require__(41);
		/**
		 * SDK 使用 {@link https://github.com/Raynos/xhr|xhr} 来发送 Ajax 请求, 通过 `Chatroom.xhr` 来获取此库的引用
		 * @memberOf Chatroom
		 * @type {Function}
		 */
		Chatroom.xhr = __webpack_require__(69);
		/**
		 * SDK 使用 {@link https://github.com/socketio/socket.io-client/tree/0.9|socket.io-client 0.9} 来建立 Socket 连接, 通过 `Chatroom.io` 或 `window.io` 来获取此库的引用
		 * @memberOf Chatroom
		 * @type {Object}
		 */
		Chatroom.io = __webpack_require__(44);
		/**
		 * SDK 使用 {@link https://github.com/Bill4Time/javascript-natural-sort|natural sort} 来对数组进行排序, 通过 `Chatroom.naturalSort` 来获取此库的引用
		 * @memberOf Chatroom
		 * @type {Function}
		 * @name naturalSort
		 */
		Chatroom.naturalSort = __webpack_require__(11);
		/**
		 * SDK 使用 {@link https://github.com/juliangruber/deep-access|deep access} 来获取对象的属性值, 通过 `Chatroom.deepAccess` 来获取此库的引用
		 * @type {Function}
		 */
		Chatroom.deepAccess = __webpack_require__(12);

		Chatroom.db = __webpack_require__(77);

		Chatroom.util = __webpack_require__(10);
		Chatroom.support = __webpack_require__(78);
		Chatroom.blob = __webpack_require__(37);

		module.exports = Chatroom;


	/***/ },
	/* 1 */,
	/* 2 */,
	/* 3 */,
	/* 4 */,
	/* 5 */,
	/* 6 */,
	/* 7 */,
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		var ApiBase = __webpack_require__(9);
		var Protocol = __webpack_require__(38);
		// var util = require('util');
		var config = __webpack_require__(26);
		var logger = __webpack_require__(40);
		var ChatroomMessage = __webpack_require__(60);

		/**
		 * Chatroom constructor
		 * @constructor
		 * 
		 * @param {Object} options 配置参数
		 * @param {String}              options.appKey                          在云信管理后台查看应用的 appKey
		 * @param {String}              options.account                         帐号, 应用内唯一
		 * @param {String}              options.token                           帐号的 token, 用于建立连接
		 * @param {String} options.chatroomId 聊天室 id
		 * @param {String[]} options.chatroomAddresses 聊天室地址列表
		 * @param {String} [options.chatroomNick] 进入聊天室后展示的昵称, 如果不设置并且托管了用户资料, 那么使用用户资料里面的昵称
		 * @param {String} [options.chatroomAvatar] 进入聊天室后展示的头像, 如果不设置并且托管了用户资料, 那么使用用户资料里面的头像
		 * @param {String} [options.chatroomCustom] 扩展字段, 设置了之后, 通过{@link Chatroom#getChatroomMembers|getChatroomMembers}获取的聊天室成员信息会包含此字段
		 * @param {String} [options.chatroomEnterCustom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
		 * @param {Function}            [options.onconnect]                     连接建立后的回调, 会传入{@link ChatroomInfo|聊天室信息}
		 * @param {Function}            [options.onwillreconnect]                 即将重连的回调
		 * - 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
		 * - 此回调会收到一个对象, 包含额外的信息, 有以下字段
		 *     - `duration`: 距离下次重连的时间
		 *     - `retryCount`: 重连尝试的次数
		 * @param {Function}            [options.ondisconnect]                  断开连接后的回调
		 * - 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
		 * - 此回调会收到一个对象, 包含错误的信息, 有以下字段
		 *     - `code`: 出错时的错误码, 可能为空
		 *         - `302`: 账号或者密码错误
		 *         - `'kicked'`: 被踢
		 * - 当`code`为`'kicked'`的时候, 此对象会有以下字段
		 *     - `reason`: 被踢的原因
		 *         - `chatroomDismiss`: 聊天室解散了
		 *         - `managerKick`: 被管理员踢出
		 *         - `samePlatformKick`: 不允许同一个帐号重复登录同一个聊天室
		 *     - `message`: 文字描述的被踢的原因
		 * @param {Function}            [options.onerror]                       发生错误的回调, 会传入{@link NIMError|错误}对象
		 * @param {Function}            [options.onmsg]                         收到消息的回调, 会传入{@link ChatroomMessage|消息}对象
		 *
		 * @example
		 * var chatroom = new Chatroom({
		 *     appKey: 'appKey',
		 *     account: 'account',
		 *     token: 'token',
		 *     chatroomId: 'chatroomId',
		 *     chatroomAddresses: [
		 *         'address1',
		 *         'address2'
		 *     ],
		 *     onconnect: onChatroomConnect,
		 *     onerror: onChatroomError,
		 *     onwillreconnect: onChatroomWillReconnect,
		 *     ondisconnect: onChatroomDisconnect,
		 *     // 消息
		 *     onmsg: onChatroomMsg
		 * });
		 * function onChatroomConnect(chatroom) {
		 *     console.log('进入聊天室', chatroom);
		 * }
		 * function onChatroomWillReconnect(obj) {
		 *     // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
		 *     console.log('即将重连', obj);
		 * }
		 * function onChatroomDisconnect(error) {
		 *     // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
		 *     console.log('连接断开', error);
		 *     if (error) {
		 *         switch (error.code) {
		 *         // 账号或者密码错误, 请跳转到登录页面并提示错误
		 *         case 302:
		 *             break;
		 *         // 被踢, 请提示错误后跳转到登录页面
		 *         case 'kicked':
		 *             break;
		 *         default:
		 *             break;
		 *         }
		 *     }
		 * }
		 * function onChatroomError(error, obj) {
		 *     console.log('发生错误', error, obj);
		 * }
		 * function onChatroomMsg(msg) {
		 *     console.log('收到聊天室消息', msg);
		 * }
		 */
		function Chatroom(options) {
		    var self = this;
		    self.account = options.account;
		    self.message = new ChatroomMessage({
		        account: self.account
		    });
		    self.protocol = new Protocol(options);
		    self.protocol.api = self;
		    self.protocol.message = self.message;
		}

		Chatroom.setDebug = function(debug) {
		    logger.setDebug(debug);
		};

		var ChatroomFn = Chatroom.fn = Chatroom.prototype = Object.create(ApiBase.prototype);

		Chatroom.info = ChatroomFn.info = config.info;

		/**
		 * 获取当前聊天室的信息
		 * 
		 * @memberOf Chatroom#
		 * @method getChatroom
		 * 
		 * @param  {Object} options 配置参数
		 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomInfo|聊天室信息}
		 * @return {Void}
		 * 
		 * @example
		 * chatroom.getChatroom({
		 *     done: getChatroomDone
		 * });
		 * function getChatroomDone(error, obj) {
		 *     console.log('获取当前聊天室的信息' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		ChatroomFn.getChatroom = function(options) {
		    var self = this;
		    self.processCallback(options);
		    self.sendCmd('getChatroom', options);
		};

		/**
		 * 解散聊天室
		 *
		 * - 聊天室解散后, 所有人都会被踢出聊天室, 所有人都不能再次进入该聊天室
		 * 
		 * @memberOf Chatroom#
		 * @method dismissChatroom
		 * 
		 * @param  {Object} options 配置参数
		 * @param {Function} options.done 结果回调函数
		 * @return {Void}
		 * 
		 * @example
		 * chatroom.dismissChatroom({
		 *     done: dismissChatroomDone
		 * });
		 * function dismissChatroomDone(error, obj) {
		 *     console.log('解散聊天室' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		ChatroomFn.dismissChatroom = function(options) {
		    var self = this;
		    self.processCustom(options);
		    self.processCallback(options);
		    self.sendCmd('dismissChatroom', options);
		};

		module.exports = Chatroom;

		__webpack_require__(67);
		__webpack_require__(68);


	/***/ },
	/* 9 */,
	/* 10 */,
	/* 11 */,
	/* 12 */,
	/* 13 */,
	/* 14 */,
	/* 15 */,
	/* 16 */,
	/* 17 */,
	/* 18 */,
	/* 19 */,
	/* 20 */,
	/* 21 */,
	/* 22 */,
	/* 23 */,
	/* 24 */,
	/* 25 */,
	/* 26 */,
	/* 27 */,
	/* 28 */,
	/* 29 */,
	/* 30 */,
	/* 31 */,
	/* 32 */,
	/* 33 */,
	/* 34 */,
	/* 35 */,
	/* 36 */,
	/* 37 */,
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		var Protocol = __webpack_require__(39);
		var util = __webpack_require__(10);
		var config = __webpack_require__(26);
		// parser start
		var Parser = __webpack_require__(49);
		var configMap = __webpack_require__(50);
		var serializeMap = __webpack_require__(52);
		var unserializeMap = __webpack_require__(53);
		var parser = Parser.getInstance({
		    type: 'Chatroom',
		    configMap: configMap,
		    serializeMap: serializeMap,
		    unserializeMap: unserializeMap
		});
		// parser end
		var Chatroom = __webpack_require__(54);
		var ChatroomMember = __webpack_require__(55);

		function ChatroomProtocol(options) {
		    var self = this;
		    util.verifyOptions(options, 'appKey account token chatroomId chatroomAddresses');
		    util.verifyParamType('chatroomAddresses', options.chatroomAddresses, 'array');
		    util.verifyCallback(options, 'onconnect onerror onwillreconnect ondisconnect onmsg');
		    // 调用父类初始化
		    Protocol.call(self, options);
		    self.name = 'Chatroom';
		}

		var ChatroomProtocolFn = ChatroomProtocol.fn = ChatroomProtocol.prototype = Object.create(Protocol.prototype);

		ChatroomProtocolFn.init = function() {
		    var self = this;

		    self.socketUrls = self.options.chatroomAddresses.map(config.formatSocketUrl);
		    self.socketUrlsBackup = self.socketUrls.slice(0);

		    self.parser = parser;

		    self.syncResult = {};
		    self.timetags = {};
		};

		ChatroomProtocolFn.processResponse = function(packet) {
		    var self = this;
		    switch (packet.service) {
		    case 'chatroom':
		        self.processChatroom(packet);
		        break;
		    default:
		        // 如果没有找到对应的服务, 那么不作处理直接返回
		        break;
		    }
		};

		ChatroomProtocolFn.processChatroom = function(packet) {
		    var self = this;
		    switch (packet.cmd) {
		    case 'login':
		        if (!packet.error) {
		            packet.obj = {
		                chatroom: Chatroom.reverse(packet.content.chatroom),
		                member: ChatroomMember.reverse(packet.content.chatroomMember)
		            };
		        }
		        break;
		    case 'kicked':
		        self.onKicked(packet);
		        break;
		    case 'logout':
		        break;
		    case 'sendMsg':
		        self.onSendMsg(packet);
		        break;
		    case 'msg':
		        self.onMsg(packet);
		        break;
		    case 'getChatroomMembers':
		        self.onChatroomMembers(packet);
		        break;
		    case 'getHistoryMsgs':
		        self.onHistoryMsgs(packet);
		        break;
		    case 'markChatroomMember':
		        self.onMarkChatroomMember(packet);
		        break;
		    case 'dismissChatroom':
		        // empty
		        break;
		    case 'getChatroom':
		        self.onChatroom(packet);
		        break;
		    case 'getChatroomMembersInfo':
		        self.onChatroomMembersInfo(packet);
		        break;
		    case 'kickChatroomMember':
		        // empty
		        break;
		    default:
		        break;
		    }
		};

		ChatroomProtocolFn.onChatroom = function(packet) {
		    if (!packet.error) {
		        packet.obj.chatroom = Chatroom.reverse(packet.content.chatroom);
		    }
		};

		module.exports = ChatroomProtocol;

		__webpack_require__(56);
		__webpack_require__(57);
		__webpack_require__(58);
		__webpack_require__(59);


	/***/ },
	/* 39 */,
	/* 40 */,
	/* 41 */,
	/* 42 */,
	/* 43 */,
	/* 44 */,
	/* 45 */,
	/* 46 */,
	/* 47 */,
	/* 48 */,
	/* 49 */,
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var configBase = __webpack_require__(51);

		// 外层是 service, 内层是 cmd
		var idMap = util.merge({}, configBase.idMap, {
		    chatroom: {
		        id: 13,
		        // 进入聊天室
		        login: 2,
		        // 被踢
		        kicked: 3,
		        // 退出聊天室
		        logout: 4,
		        // 发消息
		        sendMsg: 6,
		        // 收到消息
		        msg: 7,
		        getChatroomMembers: 8,
		        getHistoryMsgs: 9,
		        markChatroomMember: 11,
		        dismissChatroom: 12,
		        getChatroom: 13,
		        getChatroomMembersInfo: 16,
		        kickChatroomMember: 17
		    }
		});

		/**
		 * 命令配置
		 * params 说明: 如果类型是 Property, 如果没有 entity, entity 值就是 name
		 */
		var cmdConfig = util.merge({}, configBase.cmdConfig, {
		    login: {sid: idMap.chatroom.id, cid: idMap.chatroom.login, params: [
		        {type: 'byte', name: 'type'},
		        {type: 'Property', name: 'login'},
		        {type: 'Property', name: 'imLogin'}
		    ]},
		    logout: {sid: idMap.chatroom.id, cid: idMap.chatroom.logout},
		    sendMsg: {sid: idMap.chatroom.id, cid: idMap.chatroom.sendMsg, params: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    getChatroomMembers: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroomMembers, params: [
		        {type: 'byte', name: 'type'},
		        {type: 'long', name: 'time'},
		        {type: 'int', name: 'limit'}
		    ]},
		    getHistoryMsgs: {sid: idMap.chatroom.id, cid: idMap.chatroom.getHistoryMsgs, params: [
		        {type: 'long', name: 'timetag'},
		        {type: 'int', name: 'limit'}
		    ]},
		    markChatroomMember: {sid: idMap.chatroom.id, cid: idMap.chatroom.markChatroomMember, params: [
		        {type: 'string', name: 'account'},
		        {type: 'int', name: 'type'},
		        {type: 'bool', name: 'isAdd'},
		        {type: 'int', name: 'level'},
		        {type: 'string', name: 'custom'}
		    ]},
		    dismissChatroom: {sid: idMap.chatroom.id, cid: idMap.chatroom.dismissChatroom, params: [
		        {type: 'string', name: 'custom'}
		    ]},
		    getChatroom: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroom},
		    getChatroomMembersInfo: {sid: idMap.chatroom.id, cid: idMap.chatroom.getChatroomMembersInfo, params: [
		        {type: 'StrArray', name: 'accounts'}
		    ]},
		    kickChatroomMember: {sid: idMap.chatroom.id, cid: idMap.chatroom.kickChatroomMember, params: [
		        {type: 'string', name: 'account'},
		        {type: 'string', name: 'custom'}
		    ]}
		});

		/**
		 * 回包配置
		 * response 说明: 如果没有 entity, entity 值就是 name
		 */
		var serviceChatroom = 'chatroom';
		var packetConfig = util.merge({}, configBase.packetConfig, {
		    // 通知包
		    '4_10': {service: 'notify'},
		    '4_11': {service: 'notify'},
		    '13_2': {service: serviceChatroom, cmd: 'login', response: [
		        {type: 'Property', name: 'chatroom'},
		        {type: 'Property', name: 'chatroomMember'}
		    ]},
		    '13_3': {service: serviceChatroom, cmd: 'kicked', response: [
		        {type: 'Number', name: 'reason'},
		        {type: 'String', name: 'custom'}
		    ]},
		    '13_4': {service: serviceChatroom, cmd: 'logout'},
		    '13_6': {service: serviceChatroom, cmd: 'sendMsg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    '13_7': {service: serviceChatroom, cmd: 'msg', response: [
		        {type: 'Property', name: 'msg'}
		    ]},
		    '13_8': {service: serviceChatroom, cmd: 'getChatroomMembers', response: [
		        {type: 'PropertyArray', name: 'members', entity: 'chatroomMember'}
		    ]},
		    '13_9': {service: serviceChatroom, cmd: 'getHistoryMsgs', response: [
		        {type: 'PropertyArray', name: 'msgs', entity: 'msg'}
		    ]},
		    '13_11': {service: serviceChatroom, cmd: 'markChatroomMember', response: [
		        {type: 'Property', name: 'chatroomMember'}
		    ]},
		    '13_12': {service: serviceChatroom, cmd: 'dismissChatroom'},
		    '13_13': {service: serviceChatroom, cmd: 'getChatroom', response: [
		        {type: 'Property', name: 'chatroom'}
		    ]},
		    '13_16': {service: serviceChatroom, cmd: 'getChatroomMembersInfo', response: [
		        {type: 'PropertyArray', name: 'members', entity: 'chatroomMember'}
		    ]},
		    '13_17': {service: serviceChatroom, cmd: 'kickChatroomMember'}
		});

		module.exports = {
		    idMap: idMap,
		    cmdConfig: cmdConfig,
		    packetConfig: packetConfig
		};


	/***/ },
	/* 51 */,
	/* 52 */
	/***/ function(module, exports) {

		module.exports = {
		    "imLogin": {
		        "os": 4,
		        "sdkVersion": 6,
		        "protocolVersion": 9,
		        "deviceId": 13,
		        "appKey": 18,
		        "account": 19,
		        "browser": 24,
		        "token": 1000
		    },
		    "login": {
		        "appKey": 1,
		        "account": 2,
		        "deviceId": 3,
		        "chatroomId": 5,
		        "chatroomNick": 20,
		        "chatroomAvatar": 21,
		        "chatroomCustom": 22,
		        "chatroomEnterCustom": 23
		    },
		    "chatroom": {
		        "id": 1,
		        "name": 3,
		        "announcement": 4,
		        "broadcastUrl": 5,
		        "custom": 12,
		        "createTime": 14,
		        "updateTime": 15,
		        "creator": 100,
		        "onlineMemberNum": 101
		    },
		    "msg": {
		        "idClient": 1,
		        "type": 2,
		        "attach": 3,
		        "custom": 4,
		        "resend": 5,
		        "userUpdateTime": 6,
		        "fromNick": 7,
		        "fromAvatar": 8,
		        "fromCustom": 9,
		        "time": 20,
		        "from": 21,
		        "chatroomId": 22,
		        "fromClientType": 23
		    },
		    "chatroomMember": {
		        "chatroomId": 1,
		        "account": 2,
		        "type": 3,
		        "level": 4,
		        "nick": 5,
		        "avatar": 6,
		        "custom": 7,
		        "online": 8,
		        "guest": 9,
		        "enterTime": 10,
		        "blacked": 12,
		        "gaged": 13,
		        "valid": 14,
		        "updateTime": 15
		    }
		};

	/***/ },
	/* 53 */
	/***/ function(module, exports) {

		module.exports = {
		    "imLogin": {
		        "4": "os",
		        "6": "sdkVersion",
		        "9": "protocolVersion",
		        "13": "deviceId",
		        "18": "appKey",
		        "19": "account",
		        "24": "browser",
		        "1000": "token"
		    },
		    "login": {
		        "1": "appKey",
		        "2": "account",
		        "3": "deviceId",
		        "5": "chatroomId",
		        "20": "chatroomNick",
		        "21": "chatroomAvatar",
		        "22": "chatroomCustom",
		        "23": "chatroomEnterCustom"
		    },
		    "chatroom": {
		        "1": "id",
		        "3": "name",
		        "4": "announcement",
		        "5": "broadcastUrl",
		        "12": "custom",
		        "14": "createTime",
		        "15": "updateTime",
		        "100": "creator",
		        "101": "onlineMemberNum"
		    },
		    "msg": {
		        "1": "idClient",
		        "2": "type",
		        "3": "attach",
		        "4": "custom",
		        "5": "resend",
		        "6": "userUpdateTime",
		        "7": "fromNick",
		        "8": "fromAvatar",
		        "9": "fromCustom",
		        "20": "time",
		        "21": "from",
		        "22": "chatroomId",
		        "23": "fromClientType"
		    },
		    "chatroomMember": {
		        "1": "chatroomId",
		        "2": "account",
		        "3": "type",
		        "4": "level",
		        "5": "nick",
		        "6": "avatar",
		        "7": "custom",
		        "8": "online",
		        "9": "guest",
		        "10": "enterTime",
		        "12": "blacked",
		        "13": "gaged",
		        "14": "valid",
		        "15": "updateTime"
		    }
		};

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var notundef = util.notundef;

		/**
		 * @constructor
		 * @name ChatroomInfo
		 * @property {String} id 聊天室 id
		 * @property {String} name 聊天室名字
		 * @property {String} announcement 聊天室公告
		 * @property {String} broadcastUrl 直播地址
		 * @property {String} custom 扩展字段
		 * @property {Number} createTime 创建时间
		 * @property {Number} updateTime 更新时间
		 * @property {String} creator 创建者账号
		 * @property {Number} onlineMemberNum 当前在线人数
		 */
		function Chatroom() {

		}

		Chatroom.reverse = function(chatroom) {
		    var obj = util.copy(chatroom);
		    if (notundef(obj.createTime)) {obj.createTime = +obj.createTime;}
		    if (notundef(obj.updateTime)) {obj.updateTime = +obj.updateTime;}
		    if (notundef(obj.onlineMemberNum)) {obj.onlineMemberNum = +obj.onlineMemberNum;}
		    return obj;
		};

		module.exports = Chatroom;


	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var notundef = util.notundef;

		/**
		 * 聊天室成员类型
		 * 
		 * - `'owner'` (房主)
		 * - `'manager'` (管理员)
		 * - `'restricted'` (受限制, 被拉黑或者禁言)
		 * - `'normal'` (普通成员)
		 * - `'guest'` (游客)
		 * 
		 * @memberOf ChatroomMember
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeReverseMap = {
		    '-1': 'restricted',
		    0: 'normal',
		    1: 'owner',
		    2: 'manager'
		};

		/**
		 * 聊天室成员
		 *
		 * @constructor
		 * @property {String} chatroomId 聊天室 ID
		 * @property {String} account 账号
		 * @property {String} nick 聊天室内的昵称
		 * @property {String} avatar 聊天室内的头像
		 * @property {String} type {@link ChatroomMember.type|聊天室成员类型}
		 * @property {Number} level 级别
		 * @property {Boolean} online 是否在线, 只有固定成员才能离线, 对游客而言只能是在线
		 * @property {Number} enterTime 进入聊天室的时间, 如果离线, 无该字段
		 * @property {String} custom 扩展字段
		 * @property {Number} updateTime 更新时间
		 */
		function ChatroomMember() {}

		ChatroomMember.reverse = function(chatroomMember) {
		    var obj = util.copy(chatroomMember);
		    if (notundef(obj.chatroomId)) {obj.chatroomId = '' + obj.chatroomId;}
		    if (notundef(obj.type)) {obj.type = typeReverseMap[obj.type];}
		    if (notundef(obj.level)) {obj.level = +obj.level;}
		    if (notundef(obj.online)) {obj.online = +obj.online===1;}
		    if (notundef(obj.enterTime)) {obj.enterTime = +obj.enterTime;}
		    if (notundef(obj.guest)) {obj.guest = +obj.guest===1;}
		    if (notundef(obj.blacked)) {obj.blacked = +obj.blacked===1;}
		    if (notundef(obj.gaged)) {obj.gaged = +obj.gaged===1;}
		    if (notundef(obj.valid)) {obj.valid = +obj.valid===1;}
		    if (notundef(obj.updateTime)) {obj.updateTime = +obj.updateTime;}
		    
		    // 如果不在线, 去掉进入时间
		    if (!obj.online) {delete obj.enterTime;}
		    
		    // 如果是游客, 设置其类型, 去掉无意义的字段
		    if (obj.guest) {
		        obj.type = 'guest';
		        delete obj.valid;
		    }

		    // 如果不是普通成员, 去掉等级
		    if (obj.type !== 'normal') {
		        delete obj.level;
		    }

		    delete obj.guest;

		    return obj;
		};

		ChatroomMember.reverseMembers = function(members) {
		    return members.map(function(member) {
		        return ChatroomMember.reverse(member);
		    });
		};

		ChatroomMember.validTypes = Object.keys(typeReverseMap);

		module.exports = ChatroomMember;


	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		var ChatroomProtocolFn = __webpack_require__(38).fn;

		ChatroomProtocolFn.refreshSocketUrl = function() {
		    var self = this;
		    self.socketUrls = self.socketUrlsBackup.slice(0);
		    self.connectToUrl(self.getNextSocketUrl());
		};


	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		var ChatroomProtocolFn = __webpack_require__(38).fn;
		var device = __webpack_require__(47);
		var util = __webpack_require__(10);

		ChatroomProtocolFn.assembleLogin = function() {
		    var self = this;
		    var options = self.options;
		    var login = {
		        appKey: options.appKey,
		        account: options.account,
		        deviceId: device.deviceId,
		        chatroomId: options.chatroomId
		    };
		    login = util.merge(login, util.filterObj(options, 'chatroomNick chatroomAvatar chatroomCustom chatroomEnterCustom'));
		    return {
		        type: 1,
		        login: login,
		        imLogin: self.assembleIMLogin()
		    };
		};

		ChatroomProtocolFn.afterLogin = function(obj) {
		    var self = this;
		    var chatroom = obj.chatroom;
		    self.chatroom = chatroom;
		    self.api.info = chatroom;
		};

		ChatroomProtocolFn.kickedReasons = [
		    '',
		    'chatroomDismiss',
		    'managerKick',
		    'samePlatformKick',
		    'illegalState',
		    'blacked'
		];

		ChatroomProtocolFn.kickedMessages = [
		    '',
		    '聊天室解散了',
		    '被房主或者管理员踢出',
		    '不允许同一个帐号在多个地方同时登录',
		    '状态异常',
		    '被拉黑了'
		];


	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var ChatroomProtocolFn = __webpack_require__(38).fn;
		var util = __webpack_require__(10);

		ChatroomProtocolFn.completeMsg = function(msg) {
		    var self = this;
		    msg.chatroomId = self.chatroom.id;
		    msg.from = self.options.account;
		    msg.fromClientType = 'Web';
		    if (!msg.time) {msg.time = +new Date();}
		};

		ChatroomProtocolFn.onMsg = function(packet) {
		    var self = this;
		    var msg = self.message.reverse(packet.content.msg);
		    if (self.checkMsgUnique(msg)) {
		        self.options.onmsg(msg);
		    }
		};

		ChatroomProtocolFn.checkMsgUnique = util.genCheckUniqueFunc('idClient');

		ChatroomProtocolFn.onSendMsg = function(packet) {
		    var msg = packet.obj.msg;
		    if (!packet.error) {
		        msg = packet.content.msg;
		        msg.status = 'success';
		    } else {
		        msg.status = 'fail';
		    }
		    msg = this.message.reverse(msg);
		    packet.obj = msg;
		};

		ChatroomProtocolFn.onHistoryMsgs = function(packet) {
		    if (!packet.error) {
		        packet.obj.msgs = this.message.reverseMsgs(packet.content.msgs);
		    }
		};


	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		var ChatroomProtocolFn = __webpack_require__(38).fn;
		var ChatroomMember = __webpack_require__(55);

		ChatroomProtocolFn.onChatroomMembersInfo = 
		ChatroomProtocolFn.onChatroomMembers = function(packet) {
		    if (!packet.error) {
		        packet.obj.members = ChatroomMember.reverseMembers(packet.content.members);
		    }
		};

		ChatroomProtocolFn.onMarkChatroomMember = function(packet) {
		    if (!packet.error) {
		        packet.obj.member = ChatroomMember.reverse(packet.content.chatroomMember);
		    }
		};


	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var Index = function(options) {
		    this.account = options.account;
		};

		var pro = Index.prototype;

		var Message = pro.Message = __webpack_require__(61);
		var TextMessage = pro.TextMessage = __webpack_require__(63);
		var FileMessage = pro.FileMessage = __webpack_require__(64);
		var NotificationMessage = pro.NotificationMessage = __webpack_require__(65);
		var CustomMessage = pro.CustomMessage = __webpack_require__(66);

		pro.reverse = function(msg) {
		    var obj;
		    var type = Message.getType(msg);
		    switch (type) {
		    case 'text':
		        obj = TextMessage.reverse(msg);
		        break;
		    case 'image':
		    case 'audio':
		    case 'video':
		    case 'file':
		        obj = FileMessage.reverse(msg);
		        break;
		    case 'notification':
		        obj = NotificationMessage.reverse(msg);
		        break;
		    case 'custom':
		        obj = CustomMessage.reverse(msg);
		        break;
		    }
		    Message.setExtra(obj, this.account);
		    return obj;
		};

		pro.reverseMsgs = function(msgs) {
		    var self = this;
		    return msgs.map(function(msg) {
		        return self.reverse(msg);
		    });
		};

		module.exports = Index;


	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var notundef = util.notundef;
		var loginPort = __webpack_require__(46);
		var BaseMessage = __webpack_require__(62);

		/**
		 * 消息类型
		 * 
		 * - `'text'` (文本)
		 * - `'custom'` (自定义消息)
		 * - `'notification'` (聊天室通知消息)
		 *     - 某些聊天室操作后所有聊天室成员会收到一条相应的聊天室通知消息, 详细介绍请参考{@link ChatroomMessage.attach.type|聊天室通知消息的类型}
		 * 
		 * @memberOf ChatroomMessage
		 * @name type
		 * @readOnly
		 * @enum {String}
		 */
		var typeMap = BaseMessage.typeMap;
		Message.validTypes = BaseMessage.validTypes;

		/**
		 * 聊天室消息
		 *
		 * @constructor
		 * @name ChatroomMessage
		 * @property {String}   chatroomId      聊天室 ID
		 * @property {String}   idClient        SDK生成的消息id, 在发送消息之后会返回给开发者, 开发者可以在发送消息的结果回调里面根据这个ID来判断相应消息的发送状态, 到底是发送成功了还是发送失败了, 然后根据此状态来更新页面的UI。如果发送失败, 那么可以重新发送此消息
		 * @property {String}   from            消息发送方, 帐号
		 * @property {String}   fromNick        消息发送方的昵称
		 * @property {String} fromAvatar 消息发送方的头像
		 * @property {String} fromCustom 消息发送方的扩展字段
		 * @property {String}   fromClientType  发送方的{@link LoginPort.type|设备类型}
		 * @property {String}   type            {@link ChatroomMessage.type|消息类型}
		 * @property {String}   flow            消息的流向
		 * - 'in'表示此消息是收到的消息
		 * - 'out'表示此消息是发出的消息
		 * @property {String}   [text]          文本消息的文本内容, 请参考{@link Chatroom#sendText|发送文本消息}
		 * @property {String}   [content]       自定义消息的消息内容, 开发者可以自行扩展, 建议封装成JSON格式字符串, 请参考{@link Chatroom#sendCustomMsg|发送自定义消息}
		 * @property {Object}   [attach]        {@link ChatroomMessage.type|聊天室通知消息}的附加信息, 
		 *                                      参考{@link ChatroomMessage.attach.type|聊天室通知消息的类型}来查看详细解释
		 * @property {String}   [custom]        扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @property {Boolean}  resend          是否是重发的消息
		 * @property {Number}   time            时间戳
		 */
		function Message(options) {
		    var self = this;
		    // 如果不是重发, 那么生成idClient；如果是重发, 那么由开发者传入idClient
		    if (!options.resend) {
		        self.idClient = util.guid();
		    } else {
		        util.verifyOptions(options, 'idClient');
		        self.idClient = options.idClient;
		    }
		    self.type = typeMap[options.type];
		    self.resend = !!options.resend ? 1 : 0;
		    if (notundef(options.custom)) { self.custom = '' + options.custom; }
		}

		Message.getType = BaseMessage.getType;

		Message.reverse = function(msg) {
		    var obj = util.filterObj(msg, 'chatroomId idClient from fromNick fromAvatar fromCustom userUpdateTime custom status');
		    obj = util.merge(obj, {
		        fromClientType: loginPort.reverseType(msg.fromClientType),
		        type: Message.getType(msg),
		        time: +msg.time,
		        resend: +msg.resend === 1
		    });
		    if (notundef(obj.userUpdateTime)) {obj.userUpdateTime = +obj.userUpdateTime;}
		    obj.status = obj.status || 'success';
		    return obj;
		};

		Message.setExtra = function(obj, account) {
		    BaseMessage.setFlow(obj, account);
		};

		module.exports = Message;


	/***/ },
	/* 62 */,
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		var Message = __webpack_require__(61);
		var util = __webpack_require__(10);

		function TextMessage(options) {
		    util.verifyOptions(options, 'text');
		    options.type = 'text';
		    Message.call(this, options);
		    // 这里跟 IM 消息不一样
		    this.attach = options.text;
		}
		TextMessage.prototype = Object.create(Message.prototype);

		TextMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    obj.text = msg.attach;
		    return obj;
		};

		module.exports = TextMessage;


	/***/ },
	/* 64 */
	/***/ function(module, exports) {

		

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		/* exported notificationTypes */

		var util = __webpack_require__(10);
		var notundef = util.notundef;
		var Message = __webpack_require__(61);

		/**
		 * 聊天室通知消息的类型
		 *
		 * - 聊天室通知消息是{@link ChatroomMessage|聊天室消息}的一种, 请参考{@link ChatroomMessage.type|聊天室消息类型}, 某些聊天室操作后所有聊天室成员会收到一条相应的聊天室通知消息
		 * - 聊天室通知消息有一个字段`attach`包含了额外的信息, `attach`有一个字段`type`来标识聊天室通知消息的类型
		 *     - `memberEnter`
		 *         - 当有人进入聊天室时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'memberEnter'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `memberExit`
		 *         - 当有人退出聊天室时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'memberExit'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `addManager`
		 *         - 当有人被{@link Chatroom#markChatroomManager|加为管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addManager'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `removeManager`
		 *         - 当有人被{@link Chatroom#markChatroomManager|移除管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeManager'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `addLevel`
		 *         - 当有人被{@link Chatroom#markChatroomMemberLevel|添加等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `removeLevel`
		 *         - 当有人被{@link Chatroom#markChatroomMemberLevel|移除等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `blackMember`
		 *         - 当有人被{@link Chatroom#markChatroomBlacklist|加入黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `unblackMember`
		 *         - 当有人被{@link Chatroom#markChatroomBlacklist|移除黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `gagMember`
		 *         - 当有人被{@link Chatroom#markChatroomGaglist|加入禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'gagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `ungagMember`
		 *         - 当有人被{@link Chatroom#markChatroomGaglist|移除禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'ungagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 *     - `kickMember`
		 *         - 当有人被{@link Chatroom#kickChatroomMember|踢出聊天室}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.type|`'kickMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * - `attach`的字段`from`为操作方的账号, `fromNick`为操作方的昵称, `to`为被操作方的账号, `toNick`为被操作方的昵称
		 * 
		 * @memberOf ChatroomMessage
		 * @readOnly
		 * @enum {String}
		 * @alias attach.type
		 */

		/*
		 *     - `updateChatroom`
		 *         - 当房主或者管理员{@link Chatroom#updateChatroom|更新聊天室}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.type|`'updateChatroom'`}的{@link ChatroomMessage|聊天室通知消息}。
		*/

		var notificationTypes = {};

		var notificationTypeReverseMap = {
		    301: 'memberEnter',
		    302: 'memberExit',
		    303: 'blackMember',
		    304: 'unblackMember',
		    305: 'gagMember',
		    306: 'ungagMember',
		    307: 'addManager',
		    308: 'removeManager',
		    309: 'addLevel',
		    310: 'removeLevel',
		    311: 'dismissChatroom',
		    312: 'updateChatroom',
		    313: 'kickMember'
		};

		// 聊天室通知消息
		function NotificationMessage() {}

		NotificationMessage.prototype = Object.create(Message.prototype);

		NotificationMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    msg.attach = !!msg.attach ? ''+msg.attach : '';
		    if (msg.attach) {
		        var attach = JSON.parse(msg.attach);
		        obj.attach = {
		            type: notificationTypeReverseMap[attach.id]
		        };
		        if (notundef(attach.data)) {
		            var data = attach.data;
		            if (notundef(data.operator)) {
		                obj.attach.from = data.operator;
		            }
		            if (notundef(data.opeNick)) {
		                obj.attach.fromNick = data.opeNick;
		            }
		            if (notundef(data.target)) {
		                obj.attach.to = data.target;
		            }
		            if (notundef(data.tarNick)) {
		                obj.attach.toNick = data.tarNick;
		            }
		            if (notundef(data.ext)) {
		                obj.attach.custom = data.ext;
		            }
		        }
		    } else {
		        obj.attach = {};
		    }
		    return obj;
		};

		module.exports = NotificationMessage;


	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var Message = __webpack_require__(61);
		var util = __webpack_require__(10);

		function CustomMessage(options) {
		    util.verifyOptions(options, 'content');
		    Message.call(this, options);
		    this.attach = options.content;
		}

		CustomMessage.prototype = Object.create(Message.prototype);

		CustomMessage.reverse = function(msg) {
		    var obj = Message.reverse(msg);
		    obj.content = msg.attach;
		    return obj;
		};

		module.exports = CustomMessage;


	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var undef = util.undef;
		var ChatroomFn = __webpack_require__(8).fn;

		/**
		 * 发送文本消息
		 *
		 * - 文本消息是消息的一种, 请参考{@link ChatroomMessage|消息}
		 * 
		 * @memberOf Chatroom#
		 * @method sendText
		 * 
		 * @param  {Object}             options                         配置参数
		 * @param  {String}             options.text                    文本消息内容
		 * @param  {Boolean}            [options.resend]                是否是重发
		 * @param  {String}             [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}             [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param  {done}               options.done                    结果回调函数
		 * @return {Message}                                            {@link ChatroomMessage|消息}
		 *
		 * @see {@link Chatroom#sendText|发送文本消息}
		 * @see {@link Chatroom#sendCustomMsg|发送自定义消息}
		 * 
		 * @example
		 * var msg = chatroom.sendText({
		 *     text: 'hello',
		 *     done: sendChatroomMsgDone
		 * });
		 * console.log('正在发送聊天室text消息, id=' + msg.idClient);
		 * function sendChatroomMsgDone(error, msg) {
		 *     console.log('发送聊天室' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient, error, msg);
		 * }
		 */

		/**
		 * 文件上传进度回调
		 * @callback uploadprogress
		 * @param {Object} obj                  进度信息
		 * @param {Number} obj.total            文件总大小
		 * @param {Number} obj.loaded           已经上传的大小
		 * @param {Number} obj.percentage       上传百分比
		 * @param {String} obj.percentageText   上传百分比的文字表示
		 * @see {@link Chatroom#previewFile|预览文件}
		 * @see {@link Chatroom#sendFile|发送文件消息}
		 */
		/**
		 * 预览文件
		 *
		 * - 开发者可以预览文件, 支持以下几种场景
		 *     - 通过参数`fileInput`传入文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 *     - 通过参数`blob`传入 Blob 对象
		 *     - 通过参数`dataURL`传入包含 MIME type 和 base64 数据的 data URL
		 * - SDK会将文件上传到文件服务器, 然后将拿到的文件对象在`done`回调中传给开发者, 文件对象有以下几种
		 *     - {@link Image|图片对象}
		 *     - {@link Audio|音频对象}
		 *     - {@link Video|视频对象}
		 *     - {@link File|文件对象}
		 * - 开发者在拿到文件对象之后, 可以进行处理, 然后调用{@link Chatroom#sendFile|发送文件消息}来发送文件消息。
		 * - 文件大小限制为最大 100M
		 *     - 高级浏览器会在上传前就检测文件大小
		 *     - IE8/IE9 会在上传完成后检测文件大小
		 * 
		 * @memberOf Chatroom#
		 * @method previewFile
		 * @private
		 *
		 * @param  {Object}         options                     配置参数
		 * @param  {String}         [options.type]              文件过滤器
		 * - image会过滤掉非图片的文件, audio过滤掉非音频, video会过滤掉非视频的文件
		 * - IE8/IE9 不支持文件过滤
		 * @param  {String|Node}    [options.fileInput]         文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 * @param  {Blob}           [options.blob]              Blob 对象
		 * @param  {String}         [options.dataURL]           包含 MIME type 和 base64 数据的 data URL
		 * @param  {uploadprogress} [options.uploadprogress]    上传进度, ie9以下不支持上传进度
		 * @param  {done}           options.done                结果回调函数, 成功时会收到文件对象, 请参考
		 * - {@link Image|图片对象}
		 * - {@link Audio|音频对象}
		 * - {@link Video|视频对象}
		 * - {@link File|文件对象}
		 * @return {Void}
		 * 
		 * @see {@link Chatroom#sendFile|发送文件消息}
		 *
		 * @example
		 * chatroom.previewFile({
		 *     type: 'image',
		 *     fileInput: fileInput,
		 *     uploadprogress: function(obj) {
		 *         console.log('文件总大小: ' + obj.total + 'bytes');
		 *         console.log('已经上传的大小: ' + obj.loaded + 'bytes');
		 *         console.log('上传进度: ' + obj.percentage);
		 *         console.log('上传进度文本: ' + obj.percentageText);
		 *     },
		 *     done: function(error, file) {
		 *         console.log('上传image' + (!error?'成功':'失败'));
		 *         // show file to the user
		 *         if (!error) {
		 *             var msg = chatroom.sendFile({
		 *                 scene: 'p2p',
		 *                 to: 'account',
		 *                 file: file,
		 *                 done: sendMsgDone
		 *             });
		 *             console.log('正在发送聊天室image消息, id=' + msg.idClient);
		 *             pushMsg(msg);
		 *         }
		 *     }
		 * });
		 */

		/**
		 * 上传完成回调
		 * @callback uploaddone
		 * @param {ChatroomError}    error   是否出错
		 * @param {Object}      file    上传成功时会包含文件对象, 请参考
		 *                              {@link Image|图片对象}
		 *                              {@link Audio|音频对象}
		 *                              {@link Video|视频对象}
		 *                              {@link File|文件对象}
		 * @see {@link Chatroom#sendFile|发送文件消息}
		 */
		/**
		 * 发送文件消息之前的回调函数
		 * @callback beforesend
		 * @param {String} idClient SDK生成的ID
		 * @see {@link Chatroom#sendFile|发送文件消息}
		 */
		/**
		 * 发送文件消息
		 *
		 * - 文件消息是{@link IMMessage.type|消息类型}的一种
		 * - 开发者可以直接发送文件消息
		 *     - 支持以下几种场景
		 *         - 通过参数`fileInput`传入文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 *         - 通过参数`blob`传入 Blob 对象
		 *         - 通过参数`dataURL`传入包含 MIME type 和 base64 数据的 data URL
		 *     - SDK会先将文件上传到文件服务器, 然后把拿到的文件对象在`uploaddone`回调中传给用户, 然后将其拼装成文件消息发送出去。
		 * - 开发者也可以先{@link Chatroom#previewFile|预览文件}来获取文件对象, 然后调用此接口发送文件消息。
		 *     - 通过参数`file`传入文件
		 * - 直接发送文件消息的话会在`beforesend`回调里面传入SDK生成的`idClient`, 如果先预览文件再发送, 那么此接口会直接返回`idClient`
		 * - 参数`type`指定了要发送的文件类型, 包括图片、音频、视频和普通文件, 对应的值分别为`'image'`、`'audio'`、`'video'`和`'file'`, 不传默认为`'file'`。
		 * - 图片、音频、视频和普通文件的区别在于具体的文件信息不一样, 具体字段请参考
		 *     - {@link Image|图片对象}
		 *     - {@link Audio|音频对象}
		 *     - {@link Video|视频对象}
		 *     - {@link File|文件对象}
		 * - 文件大小限制为最大100M
		 *     - 高级浏览器会在上传前就检测文件大小
		 *     - IE8和IE9会在上传完成后检测文件大小
		 * 
		 * @memberOf Chatroom#
		 * @method sendFile
		 * @private
		 *
		 * @param  {Object}         options                         配置参数
		 * @param  {String}         [options.type]                  文件过滤器, 
		 *                                                          `'image'`会过滤掉非图片的文件, `'audio'`过滤掉非音频, `'video'`会过滤掉非视频的文件, 
		 *                                                          IE8/IE9 不支持文件过滤
		 * @param  {String|Node}    [options.fileInput]             文件选择 dom 节点或者节点 ID, SDK 会读取该节点下的文件, 在上传完成前请不要操作该节点下的文件
		 * @param  {Blob}           [options.blob]                  Blob 对象
		 * @param  {String}         [options.dataURL]               MIME type 和 base64 数据的 data URL
		 * @param  {Array}          [options.file]                  文件对象, 开发者可以通过{@link Chatroom#previewFile|预览文件}拿到文件对象
		 * @param  {Boolean}        [options.resend=false]          是否是重发
		 * @param  {Function}       [options.beginupload]           开始上传图片的回调
		 * - 如果开发者传入 fileInput, 在此回调之前不能修改 fileInput
		 * - 在此回调之后可以取消图片上传, 此回调会接收一个参数 `upload`, 调用 `upload.abort();` 来取消文件上传
		 * @param  {uploadprogress} [options.uploadprogress]        上传进度, IE9以下不支持上传进度
		 * @param  {uploaddone}     [options.uploaddone]            上传完成回调
		 * @param  {beforesend}     [options.beforesend]            发送文件消息之前的回调函数
		 * @param  {Boolean}        [options.resend]                是否是重发
		 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}         [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param {String} [options.fromNick] 发送方的昵称
		 * @param  {done}           options.done                结果回调函数
		 * @return {Void|Message}
		 * - 如果提供了参数fileInput, 那么先上传文件到服务器再发送, 不会返回{@link ChatroomMessage|消息}, 会在beforesend里面返回{@link ChatroomMessage|消息}. 
		 * - 如果提供了参数file, 那么直接发送文件消息, 返回{@link ChatroomMessage|消息}
		 *
		 * @see {@link Chatroom#previewFile|预览文件}
		 * @see {@link Chatroom#sendText|发送文本消息}
		 * @see {@link Chatroom#sendFile|发送文件消息}
		 *
		 * @example
		 * chatroom.sendFile({
		 *     type: 'image',
		 *     fileInput: fileInput,
		 *     uploadprogress: function(obj) {
		 *         console.log('文件总大小: ' + obj.total + 'bytes');
		 *         console.log('已经上传的大小: ' + obj.loaded + 'bytes');
		 *         console.log('上传进度: ' + obj.percentage);
		 *         console.log('上传进度文本: ' + obj.percentageText);
		 *     },
		 *     uploaddone: function(error, file) {
		 *         console.log('上传' + (!error?'成功':'失败'), error, file);
		 *     },
		 *     beforesend: function(msg) {
		 *         console.log('正在发送聊天室image消息, id=' + msg.idClient);
		 *         pushMsg(msg);
		 *     },
		 *     done: sendMsgDone
		 * });
		 */

		/**
		 * 发送自定义消息
		 * 
		 * - 自定义消息是{@link IMMessage.type|消息类型}的一种
		 * - 下面的代码用自定义消息实现了`石头剪刀布`游戏
		 * 
		 * @memberOf Chatroom#
		 * @method sendCustomMsg
		 *
		 * @param  {Object}         options                         配置参数
		 * @param  {String}         options.content                 自定义消息的消息内容, 推荐使用JSON格式构建
		 * @param  {Boolean}        [options.resend]                是否是重发
		 * @param  {String}         [options.idClient]              如果是重发, 那么需要带上之前生成的idClient来标记这条消息
		 * @param  {String}         [options.custom]                扩展字段
		 * - 推荐使用`JSON`格式构建, 非`JSON`格式的话, Web端会正常接收, 但是会被其它端丢弃
		 * @param {String} [options.fromNick] 发送方的昵称
		 * @param  {done}               options.done                结果回调函数
		 * @return {Message}                                        {@link ChatroomMessage|消息}
		 *
		 * @see {@link Chatroom#sendText|发送文本消息}
		 * @see {@link Chatroom#sendCustomMsg|发送自定义消息}
		 *
		 * @example
		 * var value = Math.ceil(Math.random()*3);
		 * var content = {
		 *     type: 1,
		 *     data: {
		 *         value: value
		 *     }
		 * };
		 * var msg = chatroom.sendCustomMsg({
		 *     content: JSON.stringify(content),
		 *     done: sendChatroomMsgDone
		 * });
		 * console.log('正在发送聊天室自定义消息, id=' + msg.idClient);
		 */

		ChatroomFn.beforeSendMsg = function(options) {
		    options.cmd = 'sendMsg';
		};

		/**
		 * 获取聊天室历史消息
		 *
		 * - 获取从 timetag 对应的时间点往前的若干条数据
		 * - 不填 timetag 的话默认为服务器当前时间
		 *
		 * @memberOf Chatroom#
		 * @method getHistoryMsgs
		 * 
		 * @param  {Object} options 配置参数
		 * @param {Number} [options.timetag] 时间戳
		 * @param {Number} [options.limit=100] limit, 默认 100
		 * @return {Void}
		 *
		 * @example
		 * chatroom.getHistoryMsgs({
		 *     timetag: 1451393192478,
		 *     limit: 100,
		 *     done: getHistoryMsgsDone
		 * });
		 * function getHistoryMsgsDone(error, obj) {
		 *     console.log('获取聊天室历史' + (!error?'成功':'失败'), error, obj.msgs);
		 * }
		 */
		ChatroomFn.getHistoryMsgs = function(options) {
		    util.verifyOptions(options);
		    if (undef(options.timetag)) {
		        options.timetag = 0;
		    } else {
		        util.verifyParamType('timetag', options.timetag, 'number');
		    }
		    if (undef(options.limit)) {
		        options.limit = 100;
		    } else {
		        util.verifyParamType('limit', options.limit, 'number');
		    }
		    var self = this;
		    self.processCallback(options);
		    self.sendCmd('getHistoryMsgs', options, options.callback);
		};


	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {

		var util = __webpack_require__(10);
		var undef = util.undef;
		var verifyOptions = util.verifyOptions;
		var verifyParamType = util.verifyParamType;
		var ChatroomFn = __webpack_require__(8).fn;

		/**
		 * 获取聊天室成员列表
		 *
		 * @memberOf Chatroom#
		 * @method getChatroomMembers
		 * 
		 * @param  {Object} options 配置参数
		 * @param {Boolean} options.guest `true`表示获取游客, `false`表示获取非游客成员
		 * - 游客列表按照游客进入聊天室的时间倒序排列
		 * - 非游客（即固定成员）列表按照成为固定成员的时间倒序排列
		 * @param {Boolean} [options.onlyOnline=false] 当设置`guest=false`来获取非游客成员时, 默认会获取所有的固定成员, 包括不在线的, 可以设置`onlyOnline=true`来只获取在线的固定成员
		 * @param {Number} [options.time=0] 分页用, 查找该时间戳之前的成员
		 * - 默认 0 代表当前服务器时间
		 * - 获取游客时, 此字段填上次获取的最后一个游客的`enterTime`
		 * - 获取非游客时, 此字段填上次获取的最后一个非游客的`updateTime`
		 * @param {Number} [options.limit=100] 分页用, 默认 100
		 * @param  {done} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}列表
		 * @return {Void}
		 *
		 * @example
		 * chatroom.getChatroomMembers({
		 *     guest: false,
		 *     limit: 100,
		 *     done: getChatroomMembersDone
		 * });
		 * function getChatroomMembersDone(error, obj) {
		 *     console.log('获取聊天室成员' + (!error?'成功':'失败'), error, obj.members);
		 * }
		 */
		ChatroomFn.getChatroomMembers = function(options) {
		    var self = this;
		    verifyOptions(options, 'guest');
		    verifyParamType('guest', options.guest, 'boolean');
		    if (undef(options.time)) {
		        options.time = 0;
		    } else {
		        verifyParamType('time', options.time, 'number');
		    }
		    if (undef(options.limit)) {
		        options.limit = 100;
		    } else {
		        verifyParamType('limit', options.limit, 'number');
		    }
		    self.processCallback(options);

		    options.type = options.guest ? 1 : 0;
		    if (!options.guest && options.onlyOnline) {
		        options.type = 2;
		    }
		    self.sendCmd('getChatroomMembers', options);
		};

		/**
		 * 获取聊天室成员信息
		 * 
		 * @memberOf Chatroom#
		 * @method getChatroomMembersInfo
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String[]} options.accounts 待查询的账号列表
		 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}列表
		 * @return {Void}
		 * 
		 * @example
		 * chatroom.getChatroomMembersInfo({
		 *     accounts: ['account1', 'account2'],
		 *     done: getChatroomMembersInfoDone
		 * });
		 * function getChatroomMembersInfo(erorr, obj) {
		 *     console.log('获取聊天室成员信息' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		ChatroomFn.getChatroomMembersInfo = function(options) {
		    var self = this;
		    verifyOptions(options, 'accounts');
		    verifyParamType('accounts', options.accounts, 'array');
		    self.processCallback(options);
		    self.sendCmd('getChatroomMembersInfo', options);
		};

		/**
		 * 设置聊天室管理员
		 *
		 * - 管理员可以{@link Chatroom#markChatroomMemberLevel|设置聊天室成员等级}, {@link Chatroom#markChatroomBlacklist|设置聊天室黑名单}, {@link Chatroom#markChatroomGaglist|设置聊天室禁言名单}, {@link Chatroom#kickChatroomMember|踢聊天室成员}
		 *
		 * @memberOf Chatroom#
		 * @method markChatroomManager
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String} options.account 待设置的账号
		 * @param {Boolean} options.isAdd `true`表示添加, `false`表示移除
		 * - 当有人被{@link Chatroom#markChatroomManager|加为管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addManager'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * - 当有人被{@link Chatroom#markChatroomManager|移除管理员}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeManager'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
		 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
		 * @return {Void}
		 *
		 * @example
		 * chatroom.markChatroomManager({
		 *     account: 'account',
		 *     isAdd: true,
		 *     done: markChatroomManagerDone
		 * });
		 * function markChatroomManagerDone(error, obj) {
		 *     console.log('添加聊天室管理员' + (!error?'成功':'失败'), error, obj.member);
		 * }
		 */
		ChatroomFn.markChatroomManager = function(options) {
		    options.type = 1;
		    this.markChatroomMember(options);
		};

		/**
		 * 设置聊天室成员等级
		 *
		 * @memberOf Chatroom#
		 * @method markChatroomMemberLevel
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String} options.account 待设置的账号
		 * @param {Boolean} options.isAdd 是否添加等级
		 * - 当有人被{@link Chatroom#markChatroomMemberLevel|添加等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'addLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * - 当有人被{@link Chatroom#markChatroomMemberLevel|移除等级}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'removeLevel'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * @param {Number} options.level 等级
		 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
		 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
		 * @return {Void}
		 *
		 * @example
		 * chatroom.markChatroomMemberLevel({
		 *     account: 'account',
		 *     level: 1,
		 *     done: markChatroomMemberLevelDone
		 * });
		 * function markChatroomMemberLevelDone(error, obj) {
		 *     console.log('更改聊天室成员等级' + (!error?'成功':'失败'), error, obj.member);
		 * }
		 */
		ChatroomFn.markChatroomMemberLevel = function(options) {
		    options.type = 2;
		    this.markChatroomMember(options);
		};

		/**
		 * 设置聊天室黑名单
		 *
		 * - 被加入黑名单的人将不能进入此聊天室
		 *
		 * @memberOf Chatroom#
		 * @method markChatroomBlacklist
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String} options.account 待设置的账号
		 * @param {Boolean} options.isAdd `true`表示添加, `false`表示移除
		 * - 当有人被{@link Chatroom#markChatroomBlacklist|加入黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * - 当有人被{@link Chatroom#markChatroomBlacklist|移除黑名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'blackMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
		 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
		 * @return {Void}
		 *
		 * @example
		 * chatroom.markChatroomBlacklist({
		 *     account: 'account',
		 *     isAdd: true,
		 *     done: markChatroomBlacklistDone
		 * });
		 * function markChatroomBlacklistDone(error, obj) {
		 *     console.log('添加聊天室黑名单' + (!error?'成功':'失败'), error, obj.member);
		 * }
		 */
		ChatroomFn.markChatroomBlacklist = function(options) {
		    options.type = -1;
		    this.markChatroomMember(options);
		};

		/**
		 * 设置聊天室禁言名单
		 *
		 * - 被加入禁言名单的人将不能在该聊天室发送消息
		 *
		 * @memberOf Chatroom#
		 * @method markChatroomGaglist
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String} options.account 待设置的账号
		 * @param {Boolean} options.isAdd `true`表示添加, `false`表示移除
		 * - 当有人被{@link Chatroom#markChatroomGaglist|加入禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'gagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * - 当有人被{@link Chatroom#markChatroomGaglist|移除禁言名单}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.attach.type|`'ungagMember'`}的{@link ChatroomMessage|聊天室通知消息}。
		 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段
		 * @param {Function} options.done 结果回调函数, 成功时会额外附上{@link ChatroomMember|聊天室成员信息}
		 * @return {Void}
		 *
		 * @example
		 * chatroom.markChatroomGaglist({
		 *     account: 'account',
		 *     isAdd: true,
		 *     done: markChatroomGaglistDone
		 * });
		 * function markChatroomGaglistDone(error, obj) {
		 *     console.log('添加聊天室禁言名单' + (!error?'成功':'失败'), error, obj.member);
		 * }
		 */
		ChatroomFn.markChatroomGaglist = function(options) {
		    options.type = -2;
		    this.markChatroomMember(options);
		};

		ChatroomFn.markChatroomMember = function(options) {
		    verifyOptions(options, 'account type isAdd');
		    verifyParamType('isAdd', options.isAdd, 'boolean');
		    if (undef(options.level)) {
		        options.level = 0;
		    } else {
		        verifyParamType('level', options.level, 'number');
		    }
		    var self = this;
		    self.processCustom(options);
		    self.processCallback(options);
		    self.sendCmd('markChatroomMember', options);
		};

		/**
		 * 踢聊天室成员
		 * 
		 * - 当有人被{@link Chatroom#kickChatroomMember|踢出聊天室}时, 所有其他聊天室成员会收到类型为{@link ChatroomMessage.type|'`kickMember`'}的{@link ChatroomMessage|聊天室通知消息}。
		 * 
		 * @memberOf Chatroom#
		 * @method kickChatroomMember
		 * 
		 * @param  {Object} options 配置参数
		 * @param {String} options.account 待踢的账号
		 * @param {String} [options.custom] 扩展字段, 如果填了, 那么其它聊天室成员收到的{@link ChatroomMessage|聊天室通知消息}的`attach.custom`的值为此字段, 被踢的人收到的`kicked`的`custom`的值为次字段
		 * @param {Function} options.done 结果回调函数
		 * @return {Void}
		 * 
		 * @example
		 * chatroom.kickChatroomMember({
		 *     account: 'account',
		 *     done: kickChatroomMemberDone
		 * });
		 * function kickChatroomMember(error, obj) {
		 *     console.log('踢人' + (!error?'成功':'失败'), error, obj);
		 * }
		 */
		ChatroomFn.kickChatroomMember = function(options) {
		    var self = this;
		    verifyOptions(options, 'account');
		    self.processCustom(options);
		    self.processCallback(options);
		    self.sendCmd('kickChatroomMember', options);
		};


	/***/ }
	])
	});
	;

/***/ }
/******/ ]);