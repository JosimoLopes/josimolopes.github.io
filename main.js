/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/anima-scroll-controller.js":
/*!***********************************************!*\
  !*** ./js/modules/anima-scroll-controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScroll)\n/* harmony export */ });\nfunction initAnimaScroll() {\n  const workElements = document.querySelectorAll('[data-anima=\"line\"]');\n\n  const addActive = () => {\n    workElements.forEach((el) => {\n      const elementTop = el.getBoundingClientRect().top - 600;\n      if (elementTop < 0) {\n        el.classList.add(\"active-line\");\n      }\n    });\n  };\n\n  const handleScroll = () => {\n    addActive();\n  };\n\n  window.addEventListener(\"scroll\", handleScroll);\n  addActive();\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/anima-scroll-controller.js?");

/***/ }),

/***/ "./js/modules/cursor-controller.js":
/*!*****************************************!*\
  !*** ./js/modules/cursor-controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCursor)\n/* harmony export */ });\nfunction initCursor() {\n  const cursor = document.querySelector('[data-cursor=\"custom\"]');\n  const elementsHover = document.querySelectorAll(\"[data-hover]\");\n  let isHovering = false;\n\n  const handleCursor = (x, y) => {\n    if ((x && y) || isHovering) {\n      cursor.classList.add(\"active\");\n    } else {\n      cursor.classList.remove(\"active\");\n    }\n  };\n\n  const handleCursorPosition = ({ pageX, pageY }) => {\n    const [x, y] = [pageX - scrollX, pageY - scrollY];\n\n    cursor.style.top = y - 8 + \"px\";\n    cursor.style.left = x - 8 + \"px\";\n\n    handleCursor(x, y);\n  };\n\n  const handleMouseEnter = ({ currentTarget }) => {\n    isHovering = true;\n\n    if (currentTarget.classList.contains(\"logo\")) {\n      cursor.classList.add(\"scale2\");\n    } else {\n      cursor.classList.add(\"scale\");\n    }\n  };\n\n  const handleMouseLeave = () => {\n    isHovering = false;\n    cursor.classList.remove(\"scale\", \"scale2\");\n  };\n\n  window.addEventListener(\"mousemove\", handleCursorPosition);\n\n  elementsHover.forEach((el) => {\n    el.addEventListener(\"mouseenter\", handleMouseEnter);\n    el.addEventListener(\"mouseleave\", handleMouseLeave);\n  });\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/cursor-controller.js?");

/***/ }),

/***/ "./js/modules/email-obfuscation.js":
/*!*****************************************!*\
  !*** ./js/modules/email-obfuscation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initObfuscation)\n/* harmony export */ });\nfunction initObfuscation() {\n  const emailElementsMarquee = document.querySelectorAll(\"[data-mail]\");\n\n  const [user, domain] = [\"joe.lopes\", \"outlook.com\"];\n\n  emailElementsMarquee.forEach((el) => {\n    el.setAttribute(\"href\", `mailto:${user}@${domain}`);\n  });\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/email-obfuscation.js?");

/***/ }),

/***/ "./js/modules/light-dark-mode.js":
/*!***************************************!*\
  !*** ./js/modules/light-dark-mode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initLightDarkMode)\n/* harmony export */ });\nfunction initLightDarkMode() {\n  const toggle = document.querySelector('[data-toggle=\"light-dark\"]');\n  const root = document.querySelector(\":root\");\n  let getMode = localStorage.getItem(\"mode\");\n\n  const checkMode = () => {\n    if (getMode && getMode === \"light\") {\n      toggle.classList.add(\"active\");\n      root.classList.add(\"light\");\n    }\n  };\n\n  checkMode();\n\n  const handleClick = (e) => {\n    e.currentTarget.classList.toggle(\"active\");\n    root.classList.toggle(\"light\");\n\n    if (!root.classList.contains(\"light\")) {\n      return localStorage.setItem(\"mode\", \"dark\");\n    } else {\n      return localStorage.setItem(\"mode\", \"light\");\n    }\n  };\n\n  toggle.addEventListener(\"click\", handleClick);\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/light-dark-mode.js?");

/***/ }),

/***/ "./js/modules/magnet-effect.js":
/*!*************************************!*\
  !*** ./js/modules/magnet-effect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMagnetEffect)\n/* harmony export */ });\nfunction initMagnetEffect() {\n  const elBox = document.querySelectorAll('[data-magnet=\"box\"]');\n\n  const handleMouseMove = (e) => {\n    const elTarget = e.currentTarget.querySelector(\"span\");\n    const { offsetX: x, offsetY: y } = e;\n    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;\n\n    const move = 20;\n    const xMove = (x / width) * (move * 2) - move;\n    const yMove = (y / height) * (move * 2) - move;\n\n    handleMouseOut.elTarget = elTarget;\n\n    if (window.innerWidth >= 780) {\n      elTarget.style.transform = `translate(${xMove}px, ${yMove}px)`;\n    }\n  };\n\n  const handleMouseOut = {\n    elTarget: \"\",\n    handleEvent() {\n      this.elTarget.style.transform = \"\";\n    },\n  };\n\n  elBox.forEach((el) => {\n    el.addEventListener(\"mousemove\", handleMouseMove);\n    el.addEventListener(\"mouseout\", handleMouseOut);\n  });\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/magnet-effect.js?");

/***/ }),

/***/ "./js/modules/scroll-target-controller.js":
/*!************************************************!*\
  !*** ./js/modules/scroll-target-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollToTarget)\n/* harmony export */ });\nfunction initScrollToTarget() {\n  const internalAnchors = document.querySelectorAll('a[href^=\"#\"]');\n\n  const scrollToTarget = (e) => {\n    e.preventDefault();\n    const href = e.target.getAttribute(\"href\");\n    const section = document.querySelector(href);\n\n    section.scrollIntoView({ behavior: \"smooth\", block: \"center\" });\n  };\n\n  internalAnchors.forEach((a) => {\n    a.addEventListener(\"click\", scrollToTarget);\n  });\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/scroll-target-controller.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cursor_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cursor-controller.js */ \"./js/modules/cursor-controller.js\");\n/* harmony import */ var _modules_scroll_target_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-target-controller.js */ \"./js/modules/scroll-target-controller.js\");\n/* harmony import */ var _modules_anima_scroll_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/anima-scroll-controller.js */ \"./js/modules/anima-scroll-controller.js\");\n/* harmony import */ var _modules_magnet_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/magnet-effect.js */ \"./js/modules/magnet-effect.js\");\n/* harmony import */ var _modules_light_dark_mode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/light-dark-mode.js */ \"./js/modules/light-dark-mode.js\");\n/* harmony import */ var _modules_email_obfuscation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/email-obfuscation.js */ \"./js/modules/email-obfuscation.js\");\n\n// import initLenisSmoothScroll from \"./modules/smooth-scroll-controller.js\";\n\n\n\n\n\n\n(0,_modules_cursor_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// initLenisSmoothScroll();\n(0,_modules_scroll_target_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_anima_scroll_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_magnet_effect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_light_dark_mode_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_email_obfuscation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;