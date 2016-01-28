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