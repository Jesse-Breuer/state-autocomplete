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

/***/ "./client/js/App.js":
/*!**************************!*\
  !*** ./client/js/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ \"./node_modules/core-js/modules/es.regexp.constructor.js\");\n/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ \"./node_modules/core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sass/app.scss */ \"./client/sass/app.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n //-- Autocomplete component\n\nvar search = document.getElementById('search');\nvar matchList = document.getElementById('match-list'); //search states.json and filter it\n\nvar searchStates = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchText) {\n    var res, states, matches;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('../api/states?term=' + search.value);\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            states = _context.sent;\n            // Get matches to current text input\n            matches = states.data.filter(function (state) {\n              var regex = new RegExp(\"^\".concat(searchText), 'gi');\n              return state.name.match(regex) || state.abbreviation.match(regex);\n            });\n\n            if (searchText.length < 2) {\n              matches = [];\n              matchList.innerHTML = '';\n            }\n\n            outputHtml(matches);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function searchStates(_x) {\n    return _ref.apply(this, arguments);\n  };\n}(); //show results in HTML\n\n\nvar outputHtml = function outputHtml(matches) {\n  if (matches.length > 0) {\n    var html = matches.map(function (match) {\n      return \"\\n\\t\\t\\t\\n\\t\\t\\t<li>\\n\\t\\t\\t\\t<h4 class=\\\"statename\\\">\".concat(match.name, \"</h4>\\n\\t\\t\\t</li>\\n\\t\\t\\t\\n\\t\\t\");\n    }).join('');\n    matchList.innerHTML = html;\n  }\n};\n\nsearch.addEventListener('input', function () {\n  return searchStates(search.value);\n});\ndocument.getElementById('match-list').addEventListener('click', function (event) {\n  if (event.target.className === 'statename') {\n    search.value = event.target.innerHTML;\n    matchList.innerHTML = '';\n  }\n});\n\n//# sourceURL=webpack://verndale-code-test/./client/js/App.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt; // `AdvanceStringIndex` abstract operation\n// https://tc39.es/ecma262/#sec-advancestringindex\n\n\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("module.exports = function (it, Constructor, name) {\n  if (!(it instanceof Constructor)) {\n    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\"); // `Array.prototype.{ indexOf, includes }` methods implementation\n\n\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value; // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++]; // eslint-disable-next-line no-self-compare\n\n      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not\n    } else for (; length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    }\n    return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation\n\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_OUT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;\n    var value, result;\n\n    for (; length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n            case 3:\n              return true;\n            // some\n\n            case 5:\n              return value;\n            // find\n\n            case 6:\n              return index;\n            // findIndex\n\n            case 2:\n              push.call(target, value);\n            // filter\n          } else switch (TYPE) {\n            case 4:\n              return false;\n            // every\n\n            case 7:\n              push.call(target, value);\n            // filterOut\n          }\n      }\n    }\n\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterOut` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterOut: createMethod(7)\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n\n    constructor[SPECIES] = function () {\n      return {\n        foo: 1\n      };\n    };\n\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () {\n      throw 1;\n    }, 1);\n  });\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) {\n  throw it;\n};\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = {\n      length: -1\n    };\n    if (ACCESSORS) defineProperty(O, 1, {\n      enumerable: true,\n      get: thrower\n    });else O[1] = 1;\n    method.call(O, argument0, argument1);\n  });\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/array-method-uses-to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\n\nmodule.exports = function (originalArray, length) {\n  var C;\n\n  if (isArray(originalArray)) {\n    C = originalArray.constructor; // cross-realm fallback\n\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  }\n\n  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return {\n        done: !!called++\n      };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  }; // eslint-disable-next-line no-throw-literal\n\n\n  Array.from(iteratorWithReturn, function () {\n    throw 2;\n  });\n} catch (error) {\n  /* empty */\n}\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n\n  try {\n    var object = {};\n\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return {\n            done: ITERATION_SUPPORT = true\n          };\n        }\n      };\n    };\n\n    exec(object);\n  } catch (error) {\n    /* empty */\n  }\n\n  return ITERATION_SUPPORT;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\n\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here\n\nvar CORRECT_ARGUMENTS = classofRaw(function () {\n  return arguments;\n}()) == 'Arguments'; // fallback for IE11 Script Access Denied error\n\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) {\n    /* empty */\n  }\n}; // getting tag from ES6+ `Object.prototype.toString`\n\n\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case\n  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case\n  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback\n  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\n\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\"); // Detect IE8's incomplete defineProperty implementation\n\n\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, {\n    get: function () {\n      return 7;\n    }\n  })[1] != 7;\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document; // typeof document.createElement is 'object' in old IE\n\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/engine-is-ios.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = classof(global.process) == 'process';\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/engine-is-node.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nmodule.exports = /web0s(?!.*chrome)/i.test(userAgent);\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/engine-is-webos-webkit.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("// IE8- don't enum bug keys\nmodule.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\n\n\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target\n\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    } // add a flag to not completely full polyfills\n\n\n    if (options.sham || targetProperty && targetProperty.sham) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    } // extend global\n\n\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(" // TODO: Remove from `core-js@4` since it's moved to entry points\n\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n\n  re.exec = function () {\n    var result = [];\n    result.groups = {\n      a: '7'\n    };\n    return result;\n  };\n\n  return ''.replace(re, '$<a>') !== '7';\n}); // IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\n\nvar REPLACE_KEEPS_$0 = function () {\n  return 'a'.replace(/./, '$0') === '$0';\n}();\n\nvar REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string\n\nvar REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {\n  if (/./[REPLACE]) {\n    return /./[REPLACE]('a', '$0') === '';\n  }\n\n  return false;\n}(); // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\n\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  var re = /(?:)/;\n  var originalExec = re.exec;\n\n  re.exec = function () {\n    return originalExec.apply(this, arguments);\n  };\n\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\nmodule.exports = function (KEY, length, exec, sham) {\n  var SYMBOL = wellKnownSymbol(KEY);\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n\n    O[SYMBOL] = function () {\n      return 7;\n    };\n\n    return ''[KEY](O) != 7;\n  });\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n\n      re.constructor = {};\n\n      re.constructor[SPECIES] = function () {\n        return re;\n      };\n\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () {\n      execCalled = true;\n      return null;\n    };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      if (regexp.exec === regexpExec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return {\n            done: true,\n            value: nativeRegExpMethod.call(regexp, str, arg2)\n          };\n        }\n\n        return {\n          done: true,\n          value: nativeMethod.call(str, regexp, arg2)\n        };\n      }\n\n      return {\n        done: false\n      };\n    }, {\n      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,\n      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE\n    });\n    var stringMethod = methods[0];\n    var regexMethod = methods[1];\n    redefine(String.prototype, KEY, stringMethod);\n    redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n    // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n    ? function (string, arg) {\n      return regexMethod.call(string, this, arg);\n    } // 21.2.5.6 RegExp.prototype[@@match](string)\n    // 21.2.5.9 RegExp.prototype[@@search](string)\n    : function (string) {\n      return regexMethod.call(string, this);\n    });\n  }\n\n  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\"); // optional / simple context binding\n\n\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n\n  switch (length) {\n    case 0:\n      return function () {\n        return fn.call(that);\n      };\n\n    case 1:\n      return function (a) {\n        return fn.call(that, a);\n      };\n\n    case 2:\n      return function (a, b) {\n        return fn.call(that, a, b);\n      };\n\n    case 3:\n      return function (a, b, c) {\n        return fn.call(that, a, b, c);\n      };\n  }\n\n  return function ()\n  /* ...args */\n  {\n    return fn.apply(that, arguments);\n  };\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\n\n\nmodule.exports = // eslint-disable-next-line no-undef\ncheck(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func\nfunction () {\n  return this;\n}() || Function('return this')();\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = function (a, b) {\n  var console = global.console;\n\n  if (console && console.error) {\n    arguments.length === 1 ? console.error(a) : console.error(a, b);\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/host-report-errors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\"); // Thank's IE8 for his funny defineProperty\n\n\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () {\n      return 7;\n    }\n  }).a != 7;\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings\n\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\"); // makes subclassing work correct for wrapped built-ins\n\n\nmodule.exports = function ($this, dummy, Wrapper) {\n  var NewTarget, NewTargetPrototype;\n  if ( // it can work only with native `setPrototypeOf`\n  setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this\n  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);\n  return $this;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\n\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    }\n\n    return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n\n  set = function (it, metadata) {\n    metadata.facade = it;\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n\n  set = function (it, metadata) {\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype; // check on default Array iterator\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\"); // `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n\n\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\nmodule.exports = isForced;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation\n// https://tc39.es/ecma262/#sec-isregexp\n\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ \"./node_modules/core-js/internals/iterator-close.js\");\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nmodule.exports = function (iterable, unboundFunction, options) {\n  var that = options && options.that;\n  var AS_ENTRIES = !!(options && options.AS_ENTRIES);\n  var IS_ITERATOR = !!(options && options.IS_ITERATOR);\n  var INTERRUPTED = !!(options && options.INTERRUPTED);\n  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);\n  var iterator, iterFn, index, length, result, next, step;\n\n  var stop = function (condition) {\n    if (iterator) iteratorClose(iterator);\n    return new Result(true, condition);\n  };\n\n  var callFn = function (value) {\n    if (AS_ENTRIES) {\n      anObject(value);\n      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);\n    }\n\n    return INTERRUPTED ? fn(value, stop) : fn(value);\n  };\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators\n\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = toLength(iterable.length); length > index; index++) {\n        result = callFn(iterable[index]);\n        if (result && result instanceof Result) return result;\n      }\n\n      return new Result(false);\n    }\n\n    iterator = iterFn.call(iterable);\n  }\n\n  next = iterator.next;\n\n  while (!(step = next.call(iterator)).done) {\n    try {\n      result = callFn(step.value);\n    } catch (error) {\n      iteratorClose(iterator);\n      throw error;\n    }\n\n    if (typeof result == 'object' && result && result instanceof Result) return result;\n  }\n\n  return new Result(false);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nmodule.exports = function (iterator) {\n  var returnMethod = iterator['return'];\n\n  if (returnMethod !== undefined) {\n    return anObject(returnMethod.call(iterator)).value;\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/iterator-close.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\n\nvar macrotask = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set;\n\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\n\nvar IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ \"./node_modules/core-js/internals/engine-is-webos-webkit.js\");\n\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar document = global.document;\nvar process = global.process;\nvar Promise = global.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\n\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\nvar flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method\n\nif (!queueMicrotask) {\n  flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n\n      try {\n        fn();\n      } catch (error) {\n        if (head) notify();else last = undefined;\n        throw error;\n      }\n    }\n\n    last = undefined;\n    if (parent) parent.enter();\n  }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898\n\n\n  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, {\n      characterData: true\n    });\n\n    notify = function () {\n      node.data = toggle = !toggle;\n    }; // environments with maybe non-completely correct, but existent Promise\n\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    then = promise.then;\n\n    notify = function () {\n      then.call(promise, flush);\n    }; // Node.js without promises\n\n  } else if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    }; // for other environments - macrotask based on:\n    // - setImmediate\n    // - MessageChannel\n    // - window.postMessag\n    // - onreadystatechange\n    // - setTimeout\n\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n}\n\nmodule.exports = queueMicrotask || function (fn) {\n  var task = {\n    fn: fn,\n    next: undefined\n  };\n  if (last) last.next = task;\n\n  if (!head) {\n    head = task;\n    notify();\n  }\n\n  last = task;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/native-promise-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}; // 25.4.1.5 NewPromiseCapability(C)\n\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\n\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) {\n    /* empty */\n  }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\n\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) {\n    /* empty */\n  }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys\n\n\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug\n\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({\n  1: 2\n}, 1); // `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\n\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js/internals/a-possible-prototype.js\"); // `Object.setPrototypeOf` method\n// https://tc39.es/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n\n/* eslint-disable no-proto */\n\n\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) {\n    /* empty */\n  }\n\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\"); // `Object.prototype.toString` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\n\n\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\n\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\"); // all object keys, includes non-enumerable and symbols\n\n\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return {\n      error: false,\n      value: exec()\n    };\n  } catch (error) {\n    return {\n      error: true,\n      value: error\n    };\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/perform.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) redefine(target, key, src[key], options);\n\n  return target;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var state;\n\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) {\n      createNonEnumerableProperty(value, 'name', key);\n    }\n\n    state = enforceInternalState(value);\n\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');\n    }\n  }\n\n  if (O === global) {\n    if (simple) O[key] = value;else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n\n  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ./classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar regexpExec = __webpack_require__(/*! ./regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\"); // `RegExpExec` abstract operation\n// https://tc39.es/ecma262/#sec-regexpexec\n\n\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n\n    if (typeof result !== 'object') {\n      throw TypeError('RegExp exec method returned something other than an Object or null');\n    }\n\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return regexpExec.call(R, S);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\n\nvar nativeReplace = String.prototype.replace;\nvar patchedExec = nativeExec;\n\nvar UPDATES_LAST_INDEX_WRONG = function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n}();\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.\n\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = regexpFlags.call(re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = flags.replace('y', '');\n\n      if (flags.indexOf('g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.\n\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      } // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n\n\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n    match = nativeExec.call(sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = match.input.slice(charsAdded);\n        match[0] = match[0].slice(charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\"); // `RegExp.prototype.flags` getter implementation\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\n\n\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./fails */ \"./node_modules/core-js/internals/fails.js\"); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,\n// so we use an intermediate function.\n\n\nfunction RE(s, f) {\n  return RegExp(s, f);\n}\n\nexports.UNSUPPORTED_Y = fails(function () {\n  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\n  var re = RE('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') != null;\n});\nexports.BROKEN_CARET = fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = RE('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') != null;\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  }\n\n  return value;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () {\n        return this;\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, {\n      configurable: true,\n      value: TAG\n    });\n  }\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\nmodule.exports = store;\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.8.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '?? 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\n\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\"); // `String.prototype.{ codePointAt, at }` methods implementation\n\n\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\n\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\n\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\nvar IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ \"./node_modules/core-js/internals/engine-is-ios.js\");\n\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar location = global.location;\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\n\nvar run = function (id) {\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar listener = function (event) {\n  run(event.data);\n};\n\nvar post = function (id) {\n  // old engines have not location.origin\n  global.postMessage(id + '', location.protocol + '//' + location.host);\n}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:\n\n\nif (!set || !clear) {\n  set = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n\n    while (arguments.length > i) args.push(arguments[i++]);\n\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);\n    };\n\n    defer(counter);\n    return counter;\n  };\n\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  }; // Node.js 0.8-\n\n\n  if (IS_NODE) {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    }; // Sphere (JS game engine) Dispatch API\n\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    }; // Browsers with MessageChannel, includes WebWorkers\n    // except iOS - https://github.com/zloirock/core-js/issues/624\n\n  } else if (MessageChannel && !IS_IOS) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers\n    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {\n    defer = post;\n    global.addEventListener('message', listener, false); // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    }; // Rest old browsers\n\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/task.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min; // Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\n\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var ceil = Math.ceil;\nvar floor = Math.floor; // `ToInteger` abstract operation\n// https://tc39.es/ecma262/#sec-tointeger\n\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min; // `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\n\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\"); // `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\n\n\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\"); // `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\n\n\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\ntest[TO_STRING_TAG] = 'z';\nmodule.exports = String(test) === '[object z]';\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module) => {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef\n&& !Symbol.sham // eslint-disable-next-line no-undef\n&& typeof Symbol.iterator == 'symbol';\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  }\n\n  return WellKnownSymbolsStore[name];\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar $filter = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").filter;\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method\n// https://tc39.es/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH\n}, {\n  filter: function filter(callbackfn\n  /* , thisArg */\n  ) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar nativeJoin = [].join;\nvar ES3_STRINGS = IndexedObject != Object;\nvar STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method\n// https://tc39.es/ecma262/#sec-array.prototype.join\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: ES3_STRINGS || !STRICT_METHOD\n}, {\n  join: function join(separator) {\n    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").map;\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method\n// https://tc39.es/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH\n}, {\n  map: function map(callbackfn\n  /* , thisArg */\n  ) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name'; // Function instances `.name` property\n// https://tc39.es/ecma262/#sec-function-instances-name\n\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js/internals/to-string-tag-support.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js/internals/object-to-string.js\"); // `Object.prototype.toString` method\n// https://tc39.es/ecma262/#sec-object.prototype.tostring\n\n\nif (!TO_STRING_TAG_SUPPORT) {\n  redefine(Object.prototype, 'toString', toString, {\n    unsafe: true\n  });\n}\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"./node_modules/core-js/internals/native-promise-constructor.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js/internals/redefine-all.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js/internals/an-instance.js\");\n\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\n\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js/internals/check-correctness-of-iteration.js\");\n\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\n\nvar task = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js/internals/task.js\").set;\n\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"./node_modules/core-js/internals/microtask.js\");\n\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js/internals/promise-resolve.js\");\n\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"./node_modules/core-js/internals/host-report-errors.js\");\n\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js/internals/new-promise-capability.js\");\n\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js/internals/perform.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"./node_modules/core-js/internals/engine-is-node.js\");\n\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar PROMISE = 'Promise';\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar PromiseConstructor = NativePromise;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar $fetch = getBuiltIn('fetch');\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\nvar FORCED = isForced(PROMISE, function () {\n  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);\n\n  if (!GLOBAL_CORE_JS_PROMISE) {\n    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n    // We can't detect it synchronously, so just check versions\n    if (V8_VERSION === 66) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n\n    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;\n  } // We need Promise#finally in the pure version for preventing prototype pollution\n\n\n  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true; // We can't use @@species feature detection in V8 since it causes\n  // deoptimization and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n\n  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support\n\n  var promise = PromiseConstructor.resolve(1);\n\n  var FakePromise = function (exec) {\n    exec(function () {\n      /* empty */\n    }, function () {\n      /* empty */\n    });\n  };\n\n  var constructor = promise.constructor = {};\n  constructor[SPECIES] = FakePromise;\n  return !(promise.then(function () {\n    /* empty */\n  }) instanceof FakePromise);\n});\nvar INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {\n  PromiseConstructor.all(iterable)['catch'](function () {\n    /* empty */\n  });\n}); // helpers\n\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\n\nvar notify = function (state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  var chain = state.reactions;\n  microtask(function () {\n    var value = state.value;\n    var ok = state.state == FULFILLED;\n    var index = 0; // variable length - can't use forEach\n\n    while (chain.length > index) {\n      var reaction = chain[index++];\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n\n      try {\n        if (handler) {\n          if (!ok) {\n            if (state.rejection === UNHANDLED) onHandleUnhandled(state);\n            state.rejection = HANDLED;\n          }\n\n          if (handler === true) result = value;else {\n            if (domain) domain.enter();\n            result = handler(value); // can throw\n\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (error) {\n        if (domain && !exited) domain.exit();\n        reject(error);\n      }\n    }\n\n    state.reactions = [];\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = {\n    promise: promise,\n    reason: reason\n  };\n\n  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (state) {\n  task.call(global, function () {\n    var promise = state.facade;\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (state) {\n  task.call(global, function () {\n    var promise = state.facade;\n\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, state, unwrap) {\n  return function (value) {\n    fn(state, value, unwrap);\n  };\n};\n\nvar internalReject = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(state, true);\n};\n\nvar internalResolve = function (state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n\n  try {\n    if (state.facade === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n\n    if (then) {\n      microtask(function () {\n        var wrapper = {\n          done: false\n        };\n\n        try {\n          then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));\n        } catch (error) {\n          internalReject(wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(state, false);\n    }\n  } catch (error) {\n    internalReject({\n      done: false\n    }, error, state);\n  }\n}; // constructor polyfill\n\n\nif (FORCED) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromiseConstructor, PROMISE);\n    aFunction(executor);\n    Internal.call(this);\n    var state = getInternalState(this);\n\n    try {\n      executor(bind(internalResolve, state), bind(internalReject, state));\n    } catch (error) {\n      internalReject(state, error);\n    }\n  }; // eslint-disable-next-line no-unused-vars\n\n\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: [],\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n\n  Internal.prototype = redefineAll(PromiseConstructor.prototype, {\n    // `Promise.prototype.then` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.then\n    then: function then(onFulfilled, onRejected) {\n      var state = getInternalPromiseState(this);\n      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = IS_NODE ? process.domain : undefined;\n      state.parent = true;\n      state.reactions.push(reaction);\n      if (state.state != PENDING) notify(state, false);\n      return reaction.promise;\n    },\n    // `Promise.prototype.catch` method\n    // https://tc39.es/ecma262/#sec-promise.prototype.catch\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, state);\n    this.reject = bind(internalReject, state);\n  };\n\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && typeof NativePromise == 'function') {\n    nativeThen = NativePromise.prototype.then; // wrap native Promise#then for native async functions\n\n    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {\n      var that = this;\n      return new PromiseConstructor(function (resolve, reject) {\n        nativeThen.call(that, resolve, reject);\n      }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640\n    }, {\n      unsafe: true\n    }); // wrap fetch result\n\n    if (typeof $fetch == 'function') $({\n      global: true,\n      enumerable: true,\n      forced: true\n    }, {\n      // eslint-disable-next-line no-unused-vars\n      fetch: function fetch(input\n      /* , init */\n      ) {\n        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));\n      }\n    });\n  }\n}\n\n$({\n  global: true,\n  wrap: true,\n  forced: FORCED\n}, {\n  Promise: PromiseConstructor\n});\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\nPromiseWrapper = getBuiltIn(PROMISE); // statics\n\n$({\n  target: PROMISE,\n  stat: true,\n  forced: FORCED\n}, {\n  // `Promise.reject` method\n  // https://tc39.es/ecma262/#sec-promise.reject\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    capability.reject.call(undefined, r);\n    return capability.promise;\n  }\n});\n$({\n  target: PROMISE,\n  stat: true,\n  forced: IS_PURE || FORCED\n}, {\n  // `Promise.resolve` method\n  // https://tc39.es/ecma262/#sec-promise.resolve\n  resolve: function resolve(x) {\n    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);\n  }\n});\n$({\n  target: PROMISE,\n  stat: true,\n  forced: INCORRECT_ITERATION\n}, {\n  // `Promise.all` method\n  // https://tc39.es/ecma262/#sec-promise.all\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        $promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  },\n  // `Promise.race` method\n  // https://tc39.es/ecma262/#sec-promise.race\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      iterate(iterable, function (promise) {\n        $promiseResolve.call(C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\nvar inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ \"./node_modules/core-js/internals/inherit-if-required.js\");\n\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\").f;\n\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nvar getFlags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar setInternalState = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\").set;\n\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js/internals/set-species.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\nvar NativeRegExp = global.RegExp;\nvar RegExpPrototype = NativeRegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g; // \"new\" should create a new object, old webkit bug\n\nvar CORRECT_NEW = new NativeRegExp(re1) !== re1;\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;\nvar FORCED = DESCRIPTORS && isForced('RegExp', !CORRECT_NEW || UNSUPPORTED_Y || fails(function () {\n  re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match\n\n  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';\n})); // `RegExp` constructor\n// https://tc39.es/ecma262/#sec-regexp-constructor\n\nif (FORCED) {\n  var RegExpWrapper = function RegExp(pattern, flags) {\n    var thisIsRegExp = this instanceof RegExpWrapper;\n    var patternIsRegExp = isRegExp(pattern);\n    var flagsAreUndefined = flags === undefined;\n    var sticky;\n\n    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {\n      return pattern;\n    }\n\n    if (CORRECT_NEW) {\n      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;\n    } else if (pattern instanceof RegExpWrapper) {\n      if (flagsAreUndefined) flags = getFlags.call(pattern);\n      pattern = pattern.source;\n    }\n\n    if (UNSUPPORTED_Y) {\n      sticky = !!flags && flags.indexOf('y') > -1;\n      if (sticky) flags = flags.replace(/y/g, '');\n    }\n\n    var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);\n    if (UNSUPPORTED_Y && sticky) setInternalState(result, {\n      sticky: sticky\n    });\n    return result;\n  };\n\n  var proxy = function (key) {\n    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {\n      configurable: true,\n      get: function () {\n        return NativeRegExp[key];\n      },\n      set: function (it) {\n        NativeRegExp[key] = it;\n      }\n    });\n  };\n\n  var keys = getOwnPropertyNames(NativeRegExp);\n  var index = 0;\n\n  while (keys.length > index) proxy(keys[index++]);\n\n  RegExpPrototype.constructor = RegExpWrapper;\n  RegExpWrapper.prototype = RegExpPrototype;\n  redefine(global, 'RegExp', RegExpWrapper);\n} // https://tc39.es/ecma262/#sec-get-regexp-@@species\n\n\nsetSpecies('RegExp');\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\"); // `RegExp.prototype.exec` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.exec\n\n\n$({\n  target: 'RegExp',\n  proto: true,\n  forced: /./.exec !== exec\n}, {\n  exec: exec\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar flags = __webpack_require__(/*! ../internals/regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar TO_STRING = 'toString';\nvar RegExpPrototype = RegExp.prototype;\nvar nativeToString = RegExpPrototype[TO_STRING];\nvar NOT_GENERIC = fails(function () {\n  return nativeToString.call({\n    source: 'a',\n    flags: 'b'\n  }) != '/a/b';\n}); // FF44- RegExp#toString has a wrong name\n\nvar INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.tostring\n\nif (NOT_GENERIC || INCORRECT_NAME) {\n  redefine(RegExp.prototype, TO_STRING, function toString() {\n    var R = anObject(this);\n    var p = String(R.source);\n    var rf = R.flags;\n    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);\n    return '/' + p + '/' + f;\n  }, {\n    unsafe: true\n  });\n}\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\n\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\"); // @@match logic\n\n\nfixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {\n  return [// `String.prototype.match` method\n  // https://tc39.es/ecma262/#sec-string.prototype.match\n  function match(regexp) {\n    var O = requireObjectCoercible(this);\n    var matcher = regexp == undefined ? undefined : regexp[MATCH];\n    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n  }, // `RegExp.prototype[@@match]` method\n  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match\n  function (regexp) {\n    var res = maybeCallNative(nativeMatch, regexp, this);\n    if (res.done) return res.value;\n    var rx = anObject(regexp);\n    var S = String(this);\n    if (!rx.global) return regExpExec(rx, S);\n    var fullUnicode = rx.unicode;\n    rx.lastIndex = 0;\n    var A = [];\n    var n = 0;\n    var result;\n\n    while ((result = regExpExec(rx, S)) !== null) {\n      var matchStr = String(result[0]);\n      A[n] = matchStr;\n      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      n++;\n    }\n\n    return n === 0 ? null : A;\n  }];\n});\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/core-js/modules/es.string.match.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar runtime = function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function (obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n    return generator;\n  }\n\n  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\"; // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n\n  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n\n\n  var IteratorPrototype = {};\n\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n\n  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"); // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function (genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can\n    // do is to check its .name property.\n    (ctor.displayName || ctor.name) === \"GeneratorFunction\" : false;\n  };\n\n  exports.mark = function (genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  }; // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n\n\n  exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n\n        if (value && typeof value === \"object\" && hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function (value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function (err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function (unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function (error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = // If enqueue has been called before, then we want to wait until\n      // all previous Promises have been resolved before calling invoke,\n      // so that results are always delivered in the correct order. If\n      // enqueue has not been called before, then it is important to\n      // call invoke immediately, without waiting on a callback to fire,\n      // so that the async generator function has the opportunity to do\n      // any necessary setup in a predictable way. This predictability\n      // is why the Promise constructor synchronously invokes its\n      // executor callback, and why async functions synchronously\n      // execute code before the first await. Since we implement simple\n      // async functions in terms of async generators, it is especially\n      // important to get this right, even though it requires care.\n      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later\n      // invocations of the iterator.\n      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    } // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n\n\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n\n  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n\n  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.\n    : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        } // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n\n\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n        var record = tryCatch(innerFn, self, context);\n\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done ? GenStateCompleted : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted; // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  } // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (!info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).\n\n      context.next = delegate.nextLoc; // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    } // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n\n\n    context.delegate = null;\n    return ContinueSentinel;\n  } // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n\n\n  defineIteratorMethods(Gp);\n  define(Gp, toStringTagSymbol, \"Generator\"); // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n\n  Gp[iteratorSymbol] = function () {\n    return this;\n  };\n\n  Gp.toString = function () {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    keys.reverse(); // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      } // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n\n\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n          return next;\n        };\n\n        return next.next = next;\n      }\n    } // Return an iterator with no values.\n\n\n    return {\n      next: doneResult\n    };\n  }\n\n  exports.values = values;\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: true\n    };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n    reset: function (skipTempReset) {\n      this.prev = 0;\n      this.next = 0; // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n      this.method = \"next\";\n      this.arg = undefined;\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n    stop: function () {\n      this.done = true;\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n    dispatchException: function (exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n    abrupt: function (type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry && (type === \"break\" || type === \"continue\") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n    complete: function (record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" || record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n    finish: function (finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n    \"catch\": function (tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      } // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function (iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  }; // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n\n  return exports;\n}( // If this script is executing as a CommonJS module, use module.exports\n// as the regeneratorRuntime namespace. Otherwise create a new empty\n// object. Either way, the resulting object will be used to initialize\n// the regeneratorRuntime variable at the top of this file.\n true ? module.exports : 0);\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/sass/app.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/sass/app.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\nbody,\\nhtml {\\n  font-weight: normal;\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif; }\\n\\n.form-group {\\n  margin-bottom: -2px; }\\n\\nul {\\n  border: solid #ccc 1px;\\n  border-radius: .3rem; }\\n\\nli {\\n  padding: 12px 6px; }\\n\\nli:hover {\\n  background-color: #80bdff; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://verndale-code-test/./client/sass/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./client/sass/app.scss":
/*!******************************!*\
  !*** ./client/sass/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/sass/app.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://verndale-code-test/./client/sass/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://verndale-code-test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	__webpack_require__("./client/js/App.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;