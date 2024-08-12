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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaScroll)\n/* harmony export */ });\nclass AnimaScroll {\n  constructor(lines, rectTop) {\n    this.lines = document.querySelectorAll(lines);\n    this.activeClass = \"active-line\";\n    this.rectTop = rectTop;\n\n    this.handleScroll = this.handleScroll.bind(this);\n  }\n\n  addActiveClass = () => {\n    this.lines.forEach((el) => {\n      const elementTop = el.getBoundingClientRect().top - this.rectTop;\n\n      if (elementTop < 0) {\n        el.classList.add(this.activeClass);\n      } else {\n        el.classList.remove(this.activeClass);\n      }\n    });\n  };\n\n  handleScroll() {\n    this.addActiveClass();\n  }\n\n  addScrollEvent() {\n    window.addEventListener(\"scroll\", this.handleScroll);\n    this.addActiveClass();\n  }\n\n  init() {\n    if (this.lines.length) {\n      this.addScrollEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/anima-scroll-controller.js?");

/***/ }),

/***/ "./js/modules/cursor-controller.js":
/*!*****************************************!*\
  !*** ./js/modules/cursor-controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CursorController)\n/* harmony export */ });\nclass CursorController {\n  constructor(cursor, hoverElements) {\n    this.cursor = document.querySelector(cursor);\n    this.hoverElements = document.querySelectorAll(hoverElements);\n    this.classActive = \"active\";\n\n    this.handleCursorPosition = this.handleCursorPosition.bind(this);\n    this.handleMouseEnter = this.handleMouseEnter.bind(this);\n    this.handleMouseLeave = this.handleMouseLeave.bind(this);\n  }\n\n  activeCursor(x, y) {\n    if (x && y) this.cursor.classList.add(this.classActive);\n  }\n\n  handleCursorPosition({ pageX, pageY }) {\n    let [x, y] = [pageX - scrollX, pageY - scrollY];\n\n    if (this.cursor.classList.contains(\"scale\")) {\n      x -= 6;\n      y -= 6;\n    }\n\n    this.cursor.style.top = `${y}px`;\n    this.cursor.style.left = `${x}px`;\n\n    this.activeCursor(x, y);\n  }\n\n  handleMouseEnter() {\n    this.cursor.classList.add(\"scale\");\n  }\n\n  handleMouseLeave() {\n    this.cursor.classList.remove(\"scale\", \"scaleLogo\");\n  }\n\n  addCursorEvent() {\n    window.addEventListener(\"mousemove\", this.handleCursorPosition);\n\n    this.hoverElements.forEach((el) => {\n      el.addEventListener(\"mouseenter\", this.handleMouseEnter);\n      el.addEventListener(\"mouseleave\", this.handleMouseLeave);\n    });\n  }\n\n  init() {\n    if ((this.cursor, this.hoverElements)) {\n      this.addCursorEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/cursor-controller.js?");

/***/ }),

/***/ "./js/modules/email-obfuscation.js":
/*!*****************************************!*\
  !*** ./js/modules/email-obfuscation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmailObfuscation)\n/* harmony export */ });\nclass EmailObfuscation {\n  constructor(emails, user, domain) {\n    this.emails = document.querySelectorAll(emails);\n    this.user = user;\n    this.domain = domain;\n  }\n\n  obfuscate() {\n    this.emails.forEach((el) => {\n      el.setAttribute(\"href\", `mailto:${this.user}@${this.domain}`);\n    });\n  }\n\n  init() {\n    if (this.emails.length) {\n      this.obfuscate();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/email-obfuscation.js?");

/***/ }),

/***/ "./js/modules/light-dark-mode.js":
/*!***************************************!*\
  !*** ./js/modules/light-dark-mode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LightDarkMode)\n/* harmony export */ });\nclass LightDarkMode {\n  constructor(toggle, documentRoot) {\n    this.toggle = document.querySelector(toggle);\n    this.documentRoot = document.querySelector(documentRoot);\n    this.getMode = localStorage.getItem(\"mode\");\n    this.activeClass = \"active\";\n    this.darkMode = \"dark\";\n    this.lightMode = \"light\";\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  checkMode() {\n    if (this.getMode === this.lightMode) {\n      this.toggle.classList.add(this.activeClass);\n      this.documentRoot.classList.add(this.lightMode);\n    }\n  }\n\n  handleClick({ currentTarget }) {\n    currentTarget.classList.toggle(this.activeClass);\n    this.documentRoot.classList.toggle(this.lightMode);\n\n    if (!this.documentRoot.classList.contains(this.lightMode)) {\n      return localStorage.setItem(\"mode\", \"dark\");\n    } else {\n      return localStorage.setItem(\"mode\", \"light\");\n    }\n  }\n\n  addToggleEvent() {\n    this.toggle.addEventListener(\"click\", this.handleClick);\n  }\n\n  init() {\n    if (this.toggle && this.documentRoot) {\n      this.checkMode();\n      this.addToggleEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/light-dark-mode.js?");

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

/***/ "./js/modules/smooth-scroll-controller.js":
/*!************************************************!*\
  !*** ./js/modules/smooth-scroll-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initLenisSmoothScroll)\n/* harmony export */ });\n/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lenis */ \"./node_modules/lenis/dist/lenis.mjs\");\n\n\nfunction initLenisSmoothScroll() {\n  const lenis = new lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  function raf(time) {\n    lenis.raf(time);\n    requestAnimationFrame(raf);\n  }\n\n  requestAnimationFrame(raf);\n}\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/modules/smooth-scroll-controller.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_anima_scroll_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/anima-scroll-controller.js */ \"./js/modules/anima-scroll-controller.js\");\n/* harmony import */ var _modules_cursor_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cursor-controller.js */ \"./js/modules/cursor-controller.js\");\n/* harmony import */ var _modules_smooth_scroll_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smooth-scroll-controller.js */ \"./js/modules/smooth-scroll-controller.js\");\n/* harmony import */ var _modules_scroll_target_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-target-controller.js */ \"./js/modules/scroll-target-controller.js\");\n/* harmony import */ var _modules_magnet_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/magnet-effect.js */ \"./js/modules/magnet-effect.js\");\n/* harmony import */ var _modules_light_dark_mode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/light-dark-mode.js */ \"./js/modules/light-dark-mode.js\");\n/* harmony import */ var _modules_email_obfuscation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/email-obfuscation.js */ \"./js/modules/email-obfuscation.js\");\n\n\n\n\n\n\n\n\nconst animaScroll = new _modules_anima_scroll_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-anima=\"line\"]', 500);\nanimaScroll.init();\n\nconst cursorController = new _modules_cursor_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-cursor=\"custom\"]', \"[data-hover]\");\ncursorController.init();\n\nconst emailObfuscation = new _modules_email_obfuscation_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-mail]\", \"joe.lopes\", \"outlook.com\");\nemailObfuscation.init();\n\nconst lightDarkMode = new _modules_light_dark_mode_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-toggle=\"light-dark\"]', \":root\");\nlightDarkMode.init();\n\n(0,_modules_smooth_scroll_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_scroll_target_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_magnet_effect_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://josimolopes.github.io/./js/script.js?");

/***/ }),

/***/ "./node_modules/lenis/dist/lenis.mjs":
/*!*******************************************!*\
  !*** ./node_modules/lenis/dist/lenis.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Lenis)\n/* harmony export */ });\nfunction clamp(t,i,e){return Math.max(t,Math.min(i,e))}class Animate{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.duration=0,this.currentTime=0}advance(t){var i;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=clamp(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function damp(t,i,e,s){return function lerp(t,i,e){return(1-e)*t+e*i}(t,i,1-Math.exp(-e*s))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),null===(i=this.onUpdate)||void 0===i||i.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,i,{lerp:e,duration:s,easing:o,onStart:n,onUpdate:l}){this.from=this.value=t,this.to=i,this.lerp=e,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=l}}class Dimensions{constructor({wrapper:t,content:i,autoResize:e=!0,debounce:s=250}={}){this.width=0,this.height=0,this.scrollWidth=0,this.scrollHeight=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):this.wrapper instanceof HTMLElement&&(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):this.wrapper instanceof HTMLElement&&(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},this.wrapper=t,this.content=i,e&&(this.debouncedResize=function debounce(t,i){let e;return function(){let s=arguments,o=this;clearTimeout(e),e=setTimeout((function(){t.apply(o,s)}),i)}}(this.resize,s),this.wrapper===window?window.addEventListener(\"resize\",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,i;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(i=this.contentResizeObserver)||void 0===i||i.disconnect(),window.removeEventListener(\"resize\",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Emitter{constructor(){this.events={}}emit(t,...i){let e=this.events[t]||[];for(let t=0,s=e.length;t<s;t++)e[t](...i)}on(t,i){var e;return(null===(e=this.events[t])||void 0===e?void 0:e.push(i))||(this.events[t]=[i]),()=>{var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t))}}off(t,i){var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t))}destroy(){this.events={}}}const t=100/6;class VirtualScroll{constructor(i,{wheelMultiplier:e=1,touchMultiplier:s=1}){this.lastDelta={x:0,y:0},this.windowWidth=0,this.windowHeight=0,this.onTouchStart=t=>{const{clientX:i,clientY:e}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit(\"scroll\",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{var i,e,s,o;const{clientX:n,clientY:l}=t.targetTouches?t.targetTouches[0]:t,r=-(n-(null!==(e=null===(i=this.touchStart)||void 0===i?void 0:i.x)&&void 0!==e?e:0))*this.touchMultiplier,h=-(l-(null!==(o=null===(s=this.touchStart)||void 0===s?void 0:s.y)&&void 0!==o?o:0))*this.touchMultiplier;this.touchStart.x=n,this.touchStart.y=l,this.lastDelta={x:r,y:h},this.emitter.emit(\"scroll\",{deltaX:r,deltaY:h,event:t})},this.onTouchEnd=t=>{this.emitter.emit(\"scroll\",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=i=>{let{deltaX:e,deltaY:s,deltaMode:o}=i;e*=1===o?t:2===o?this.windowWidth:1,s*=1===o?t:2===o?this.windowHeight:1,e*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit(\"scroll\",{deltaX:e,deltaY:s,event:i})},this.onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight},this.element=i,this.wheelMultiplier=e,this.touchMultiplier=s,this.touchStart={x:null,y:null},this.emitter=new Emitter,window.addEventListener(\"resize\",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener(\"wheel\",this.onWheel,{passive:!1}),this.element.addEventListener(\"touchstart\",this.onTouchStart,{passive:!1}),this.element.addEventListener(\"touchmove\",this.onTouchMove,{passive:!1}),this.element.addEventListener(\"touchend\",this.onTouchEnd,{passive:!1})}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener(\"resize\",this.onWindowResize,!1),this.element.removeEventListener(\"wheel\",this.onWheel),this.element.removeEventListener(\"touchstart\",this.onTouchStart),this.element.removeEventListener(\"touchmove\",this.onTouchMove),this.element.removeEventListener(\"touchend\",this.onTouchEnd)}}class Lenis{constructor({wrapper:t=window,content:i=document.documentElement,wheelEventsTarget:e=t,eventsTarget:s=e,smoothWheel:o=!0,syncTouch:n=!1,syncTouchLerp:l=.075,touchInertiaMultiplier:r=35,duration:h,easing:a=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:c=.1,infinite:d=!1,orientation:u=\"vertical\",gestureOrientation:p=\"vertical\",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:g=!0,prevent:w,virtualScroll:S,__experimental__naiveDimensions:f=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if(\"function\"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;const{deltaX:i,deltaY:e,event:s}=t;if(this.emitter.emit(\"virtual-scroll\",{deltaX:i,deltaY:e,event:s}),s.ctrlKey)return;const o=s.type.includes(\"touch\"),n=s.type.includes(\"wheel\");this.isTouching=\"touchstart\"===s.type||\"touchmove\"===s.type;if(this.options.syncTouch&&o&&\"touchstart\"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const l=0===i&&0===e,r=\"vertical\"===this.options.gestureOrientation&&0===e||\"horizontal\"===this.options.gestureOrientation&&0===i;if(l||r)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const a=this.options.prevent;if(h.find((t=>{var i,e,s,l,r;return t instanceof Element&&(\"function\"==typeof a&&(null==a?void 0:a(t))||(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,\"data-lenis-prevent\"))||o&&(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,\"data-lenis-prevent-touch\"))||n&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,\"data-lenis-prevent-wheel\"))||(null===(l=t.classList)||void 0===l?void 0:l.contains(\"lenis\"))&&!(null===(r=t.classList)||void 0===r?void 0:r.contains(\"lenis-stopped\")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n))return this.isScrolling=\"native\",void this.animate.stop();s.preventDefault();let c=e;\"both\"===this.options.gestureOrientation?c=Math.abs(e)>Math.abs(i)?e:i:\"horizontal\"===this.options.gestureOrientation&&(c=i);const d=o&&this.options.syncTouch,u=o&&\"touchend\"===s.type&&Math.abs(c)>5;u&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(!1===this.isScrolling||\"native\"===this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling=\"native\",this.emit(),0!==this.velocity&&(this.__resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()}),400))}},window.lenisVersion=\"1.1.9\",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,wheelEventsTarget:e,eventsTarget:s,smoothWheel:o,syncTouch:n,syncTouchLerp:l,touchInertiaMultiplier:r,duration:h,easing:a,lerp:c,infinite:d,gestureOrientation:p,orientation:u,touchMultiplier:m,wheelMultiplier:v,autoResize:g,prevent:w,virtualScroll:S,__experimental__naiveDimensions:f},this.animate=new Animate,this.emitter=new Emitter,this.dimensions=new Dimensions({wrapper:t,content:i,autoResize:g}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(\"scroll\",this.onNativeScroll,!1),this.options.wrapper.addEventListener(\"pointerdown\",this.onPointerDown,!1),this.virtualScroll=new VirtualScroll(s,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on(\"scroll\",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(\"scroll\",this.onNativeScroll,!1),this.options.wrapper.removeEventListener(\"pointerdown\",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit(\"scroll\",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)}scrollTo(t,{offset:i=0,immediate:e=!1,lock:s=!1,duration:o=this.options.duration,easing:n=this.options.easing,lerp:l=this.options.lerp,onStart:r,onComplete:h,force:a=!1,programmatic:c=!0,userData:d={}}={}){if(!this.isStopped&&!this.isLocked||a){if(\"string\"==typeof t&&[\"top\",\"left\",\"start\"].includes(t))t=0;else if(\"string\"==typeof t&&[\"bottom\",\"right\",\"end\"].includes(t))t=this.limit;else{let e;if(\"string\"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(e=t),e){if(this.options.wrapper!==window){const t=this.rootElement.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top}const s=e.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if(\"number\"==typeof t&&(t+=i,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=clamp(0,t,this.limit),t!==this.targetScroll)){if(this.userData=d,e)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==h||h(this),void(this.userData={});c||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:n,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling=\"smooth\",null==r||r(this)},onUpdate:(t,i)=>{this.isScrolling=\"smooth\",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),i||this.emit(),i&&(this.reset(),this.emit(),null==h||h(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextNativeScrollEvent}))}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?\"x\":\"y\"]}get isHorizontal(){return\"horizontal\"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function modulo(t,i){return(t%i+i)%i}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.updateClassName())}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.updateClassName())}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.updateClassName())}get isSmooth(){return\"smooth\"===this.isScrolling}get className(){let t=\"lenis\";return this.isStopped&&(t+=\" lenis-stopped\"),this.isLocked&&(t+=\" lenis-locked\"),this.isScrolling&&(t+=\" lenis-scrolling\"),\"smooth\"===this.isScrolling&&(t+=\" lenis-smooth\"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\\w+)?/g,\"\").trim()}}\n//# sourceMappingURL=lenis.mjs.map\n\n\n//# sourceURL=webpack://josimolopes.github.io/./node_modules/lenis/dist/lenis.mjs?");

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