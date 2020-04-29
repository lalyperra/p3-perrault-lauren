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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../modules'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n// Create a method for this class called APP renderTemplate()\r\n//Inside of this method, utilize ES6 template strings to build out an index.html structure \r\nclass App {\r\n    constructor() {\r\n        !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../modules'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).addText();\r\n        _modules_footer__WEBPACK_IMPORTED_MODULE_2__[\"footerContent\"].addText();\r\n            this.renderTemplate();\r\n        }\r\n        \r\n        renderTemplate() {\r\n        const template = ` \r\n            <div>\r\n            <h1> School Lunch Generator</h1>\r\n                <h2>What's in Your Food Tray?</h2>\r\n                <button onclick=\"myFunction1()\">View Entrees (random order)</button>\r\n\r\n                <p id=\"entree\"> </p>\r\n\r\n                <h2>Sides</h2>\r\n                <div class=\"row\">\r\n                    <figure class=\"column\"> <img src=\"images/carrots.jpeg\" alt=\"carrots\">\r\n                        <figcaption>Crunchy Carrots</figcaption>\r\n                    </figure>\r\n\r\n                        <figure class=\"column\"> <img src=\"images/fruitCup.jpg\" alt=\"fruit cup\">\r\n                            <figcaption>Fresh Fruit Cup</figcaption>\r\n                     </figure>\r\n\r\n                            <figure class=\"column\"> <img src=\"images/laysChips.jpg\" alt=\"chips\">\r\n                                <figcaption>Lays Chips</figcaption>\r\n                     </figure>\r\n\r\n                </div>\r\n                `;\r\n\r\n        document.body.innerHTML = template;\r\n     }\r\n}\r\n\r\nconst lunchApp = new App();\r\nlunchApp.renderTemplate();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (13:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| \\n> * {\\n|   margin: 0;\\n|   padding: 0;\");\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (13:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|    }\\n|     addFooterText\\n> }\\n| \\n| export const footerContent = new Footer ('For lunch', lunchGenerator);\");\n\n//# sourceURL=webpack:///./src/modules/footer.js?");

/***/ })

/******/ });