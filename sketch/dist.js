/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_json__);


console.log(__WEBPACK_IMPORTED_MODULE_0__index_json___default.a);
window.json = __WEBPACK_IMPORTED_MODULE_0__index_json___default.a;
window.colors = __WEBPACK_IMPORTED_MODULE_0__index_json___default.a.pages[0].layers[0];


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"assets":{"<class>":"MSAssetCollection","gradients":[],"colors":[],"imageCollection":{"<class>":"MSImageCollection","images":[]},"images":[]},"currentPageIndex":0,"foreignSymbols":[],"layerStyles":{"<class>":"MSSharedStyleContainer","objects":[]},"pages":[{"isFlippedHorizontal":0,"style":{"startDecorationType":0,"borderOptions":{"lineJoinStyle":0,"<class>":"MSStyleBorderOptions","isEnabled":0,"lineCapStyle":0,"dashPattern":[]},"endDecorationType":0,"contextSettings":{"<class>":"MSGraphicsContextSettings","opacity":1,"blendMode":0},"blur":{"radius":10,"<class>":"MSStyleBlur","motionAngle":0,"isEnabled":0,"type":0,"center":{"x":0.5,"y":0.5}},"reflection":{"<class>":"MSStyleReflection","strength":0.5,"isEnabled":0,"distance":1},"<class>":"MSStyle","miterLimit":10,"colorControls":{"hue":0,"<class>":"MSStyleColorControls","brightness":0,"contrast":1,"isEnabled":0,"saturation":1},"fills":[],"borders":[],"innerShadows":[],"shadows":[]},"horizontalRulerData":{"<class>":"MSRulerData","base":0,"guides":[]},"frame":{"y":0,"<class>":"MSRect","constrainProportions":0,"height":300,"width":300,"x":0},"hasClickThrough":1,"includeInCloudUpload":1,"exportOptions":{"shouldTrim":0,"<class>":"MSExportOptions","includedLayerIds":[],"layerOptions":0,"exportFormats":[]},"objectID":"1816479A-291A-406A-9E03-893E0758FD9F","rotation":0,"layerListExpandedType":0,"verticalRulerData":{"<class>":"MSRulerData","base":0,"guides":[]},"isFlippedVertical":0,"resizingType":0,"<class>":"MSPage","layers":[{"isFlippedHorizontal":0,"style":{"startDecorationType":0,"borderOptions":{"lineJoinStyle":0,"<class>":"MSStyleBorderOptions","isEnabled":0,"lineCapStyle":0,"dashPattern":[]},"endDecorationType":0,"contextSettings":{"<class>":"MSGraphicsContextSettings","opacity":1,"blendMode":0},"blur":{"radius":10,"<class>":"MSStyleBlur","motionAngle":0,"isEnabled":0,"type":0,"center":{"x":0.5,"y":0.5}},"reflection":{"<class>":"MSStyleReflection","strength":0.5,"isEnabled":0,"distance":1},"<class>":"MSStyle","miterLimit":10,"colorControls":{"hue":0,"<class>":"MSStyleColorControls","brightness":0,"contrast":1,"isEnabled":0,"saturation":1},"fills":[{"contextSettings":{"<class>":"MSGraphicsContextSettings","opacity":1,"blendMode":0},"color":{"<class>":"MSColor","value":"#D8D8D8"},"<class>":"MSStyleFill","gradient":{"from":{"x":0.5,"y":0},"shouldSmoothenOpacity":0,"gradientType":0,"<class>":"MSGradient","stops":[{"<class>":"MSGradientStop","color":{"<class>":"MSColor","value":"#FFFFFF"},"position":0},{"<class>":"MSGradientStop","color":{"<class>":"MSColor","value":"#000000"},"position":1}],"to":{"x":0.5,"y":1},"elipseLength":0},"fillType":0,"noiseIntensity":0,"patternFillType":1,"patternTileScale":1,"noiseIndex":0,"isEnabled":1}],"borders":[{"position":1,"color":{"<class>":"MSColor","value":"#979797"},"<class>":"MSStyleBorder","gradient":{"from":{"x":0.5,"y":0},"shouldSmoothenOpacity":0,"gradientType":0,"<class>":"MSGradient","stops":[{"<class>":"MSGradientStop","color":{"<class>":"MSColor","value":"#FFFFFF"},"position":0},{"<class>":"MSGradientStop","color":{"<class>":"MSColor","value":"#000000"},"position":1}],"to":{"x":0.5,"y":1},"elipseLength":0},"fillType":0,"thickness":1,"contextSettings":{"<class>":"MSGraphicsContextSettings","opacity":1,"blendMode":0},"isEnabled":1}],"innerShadows":[],"shadows":[]},"rotation":0,"frame":{"y":105,"<class>":"MSRect","constrainProportions":0,"height":72,"width":117,"x":101},"hasClickThrough":0,"objectID":"33694412-643A-49D6-BBEB-F7AEF96087B3","exportOptions":{"shouldTrim":0,"<class>":"MSExportOptions","includedLayerIds":[],"layerOptions":0,"exportFormats":[]},"layerListExpandedType":1,"windingRule":1,"isFlippedVertical":0,"clippingMaskMode":0,"resizingType":0,"layers":[{"isFlippedHorizontal":0,"objectID":"892A1E15-E43A-4405-AF9B-8E575E4C2FD0","rotation":0,"frame":{"y":0,"<class>":"MSRect","constrainProportions":0,"height":72,"width":117,"x":0},"layerListExpandedType":0,"hasConvertedToNewRoundCorners":1,"exportOptions":{"shouldTrim":0,"<class>":"MSExportOptions","includedLayerIds":[],"layerOptions":0,"exportFormats":[]},"edited":0,"path":{"points":[{"hasCurveFrom":0,"curveMode":1,"curveFrom":{"x":0,"y":0},"point":{"x":0,"y":0},"<class>":"MSCurvePoint","cornerRadius":8,"curveTo":{"x":0,"y":0},"hasCurveTo":0},{"hasCurveFrom":0,"curveMode":1,"curveFrom":{"x":1,"y":0},"point":{"x":1,"y":0},"<class>":"MSCurvePoint","cornerRadius":8,"curveTo":{"x":1,"y":0},"hasCurveTo":0},{"hasCurveFrom":0,"curveMode":1,"curveFrom":{"x":1,"y":1},"point":{"x":1,"y":1},"<class>":"MSCurvePoint","cornerRadius":8,"curveTo":{"x":1,"y":1},"hasCurveTo":0},{"hasCurveFrom":0,"curveMode":1,"curveFrom":{"x":0,"y":1},"point":{"x":0,"y":1},"<class>":"MSCurvePoint","cornerRadius":8,"curveTo":{"x":0,"y":1},"hasCurveTo":0}],"<class>":"MSShapePath","pointRadiusBehaviour":1,"isClosed":1},"isFlippedVertical":0,"<class>":"MSRectangleShape","resizingType":0,"isVisible":1,"nameIsFixed":0,"name":"Path","isLocked":0,"shouldBreakMaskChain":0,"fixedRadius":8,"booleanOperation":-1,"resizingConstraint":63}],"isVisible":1,"hasClippingMask":0,"<class>":"MSShapeGroup","nameIsFixed":0,"name":"Rectangle","isLocked":0,"shouldBreakMaskChain":0,"resizingConstraint":63}],"isVisible":1,"nameIsFixed":0,"name":"Page 1","isLocked":0,"shouldBreakMaskChain":0,"resizingConstraint":63}],"enableSliceInteraction":1,"<class>":"MSDocumentData","layerTextStyles":{"<class>":"MSSharedTextStyleContainer","objects":[]},"enableLayerInteraction":1,"layerSymbols":{"<class>":"MSSymbolContainer","objects":[]},"objectID":"91493175-6341-430D-B4DA-AFFEB00E9248"}

/***/ })
/******/ ]);