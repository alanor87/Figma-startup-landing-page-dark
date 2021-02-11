/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/intersection-observer.js":
/*!*****************************************!*\
  !*** ./src/js/intersection-observer.js ***!
  \*****************************************/
/***/ (() => {

eval("function onSectionEntry(entries) {\n  entries.forEach(function (entry) {\n    if (entry.isIntersecting) {\n      entry.target.classList.toggle('container-shift');\n      sectionObserver.unobserve(entry.target);\n    }\n  });\n}\n\nvar sectionOptions = {\n  root: null,\n  threshold: 0.01\n};\nvar sectionsTarget = Array.from(document.getElementsByClassName('container-shift'));\nvar sectionObserver = new IntersectionObserver(onSectionEntry, sectionOptions);\nsectionsTarget.forEach(function (section) {\n  return sectionObserver.observe(section);\n});\n\n//# sourceURL=webpack://figma/./src/js/intersection-observer.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _theme_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-toggle */ \"./src/js/theme-toggle.js\");\n/* harmony import */ var _theme_toggle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_toggle__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intersection-observer */ \"./src/js/intersection-observer.js\");\n/* harmony import */ var _intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n(function () {\n  var refs = {\n    openModalClick: document.querySelector(\"[open-modal]\"),\n    closeModalButton: document.querySelector(\"[close-modal]\"),\n    closeModalLink: document.querySelector(\"[close-modal-link]\"),\n    modal: document.querySelector(\"[modal]\")\n  };\n\n  var openModal = function openModal() {\n    refs.modal.classList.toggle('hidden');\n  };\n\n  var closeModal = function closeModal() {\n    refs.modal.classList.toggle('hidden');\n  };\n\n  var closeModalLink = function closeModalLink(event) {\n    var clickedElRef = event.target.nodeName;\n    if (clickedElRef === 'A') closeModal();\n  };\n\n  refs.openModalClick.addEventListener('click', openModal);\n  refs.closeModalButton.addEventListener('click', closeModal);\n  refs.closeModalLink.addEventListener('click', closeModalLink);\n})();\n\n//# sourceURL=webpack://figma/./src/js/main.js?");

/***/ }),

/***/ "./src/js/theme-toggle.js":
/*!********************************!*\
  !*** ./src/js/theme-toggle.js ***!
  \********************************/
/***/ (() => {

eval("function themeToggle() {\n  document.querySelector('body').classList.toggle('light-theme');\n  var heroRef = document.querySelector('.section-hero');\n  var bgImage = window.getComputedStyle(heroRef).backgroundImage;\n\n  if (!bgImage.includes('-inverse@')) {\n    var _newImage = bgImage.replace('@', '-inverse@');\n\n    heroRef.style.backgroundImage = _newImage;\n    return;\n  }\n\n  var newImage = bgImage.replace('-inverse@', '@');\n  heroRef.style.backgroundImage = newImage;\n}\n\nvar themeToggleRef = document.querySelector('.js-theme-switch');\nthemeToggleRef.addEventListener('change', themeToggle);\n\n//# sourceURL=webpack://figma/./src/js/theme-toggle.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://figma/./src/sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;