/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controls = __webpack_require__(1);
	
	var _player = __webpack_require__(23);
	
	(0, _controls.getcords)();
	
	function animate() {
	
	    _controls.player1.update();
	    _controls.player1.draw();
	
	    requestAnimationFrame(animate);
	}
	animate();
	
	function animatefg() {
	    var canvas2 = document.getElementById('fg1');
	    var ctx2 = canvas2.getContext('2d');
	    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	
	    _player.shootdown.draw();
	    _player.shootdown.update();
	    _player.shootup.draw();
	    _player.shootup.update();
	    _player.shootleft.draw();
	    _player.shootleft.update();
	    _player.shootright.draw();
	    _player.shootright.update();
	
	    requestAnimationFrame(animatefg);
	}
	animatefg();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getcords = exports.player1 = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _player = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Supersaiyan = function () {
	    function Supersaiyan(player1xcord, player1ycord, dx, dy, radius, color) {
	        (0, _classCallCheck3.default)(this, Supersaiyan);
	
	        this.x = player1xcord;
	        this.y = player1ycord;
	        this.dx = dx;
	        this.dy = dy;
	        this.radius = radius;
	        this.color = color;
	    }
	
	    (0, _createClass3.default)(Supersaiyan, [{
	        key: 'draw',
	        value: function draw() {
	            var canvas3 = document.getElementById('bg');
	            var ctx3 = canvas3.getContext('2d');
	
	            ctx3.fillStyle = 'rgba(255,255,255, .2)';
	            ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
	
	            ctx3.fillStyle = this.color;
	            ctx3.beginPath();
	            ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	            ctx3.closePath();
	            ctx3.fill();
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var canvas3 = document.getElementById('bg');
	
	            this.x += this.dx;
	            this.y += this.dy;
	            this.dx = this.dx * .99;
	            this.dy = this.dy * .99;
	
	            if (this.y > canvas3.height || this.y < 0) {
	
	                this.dy = -this.dy;
	            }
	            if (this.x > canvas3.width || this.x < 0) {
	
	                this.dx = -this.dx;
	            }
	        }
	    }]);
	    return Supersaiyan;
	}();
	
	function getcords() {
	
	    window.addEventListener("keydown", moveSomething, false);
	    function moveSomething(e) {
	
	        switch (e.keyCode) {
	            case 65:
	                //a
	                _player.player1.dx--;
	
	                break;
	            case 87:
	                //w
	                _player.player1.dy--;
	
	                break;
	            case 68:
	                //d
	                _player.player1.dx++;
	
	                break;
	            case 83:
	                //s
	                _player.player1.dy++;
	
	                break;
	            case 49:
	                var animatefg2 = function animatefg2() {
	
	                    _player.shootleft.x = _player.player1.x - 20;
	                    _player.shootleft.y = _player.player1.y;
	                    _player.shootleft.dx = _player.player1.dx;
	                    _player.shootleft.dy = _player.player1.dy;
	                    _player.shootright.x = _player.player1.x + 20;
	                    _player.shootright.y = _player.player1.y;
	                    _player.shootright.dx = _player.player1.dx;
	                    _player.shootright.dy = _player.player1.dy;
	                    _player.shootdown.x = _player.player1.x;
	                    _player.shootdown.y = _player.player1.y + 20;
	                    _player.shootdown.dx = _player.player1.dx;
	                    _player.shootdown.dy = _player.player1.dy;
	                    _player.shootup.x = _player.player1.x;
	                    _player.shootup.y = _player.player1.y - 20;
	                    _player.shootup.dx = _player.player1.dx;
	                    _player.shootup.dy = _player.player1.dy;
	                    _player.shootup.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                    _player.shootdown.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                    _player.shootright.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                    _player.shootleft.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                };
	
	                animatefg2();
	                break;
	
	            case 50:
	                var animatefg1 = function animatefg1() {
	
	                    _player.shootleft.dx = -_player.shootleft.dx;
	                    _player.shootleft.dy = -_player.shootleft.dy;
	                    _player.shootright.dx = -_player.shootright.dx;
	                    _player.shootright.dy = -_player.shootright.dy;
	                    _player.shootdown.dx = -_player.shootdown.dx;
	                    _player.shootdown.dy = -_player.shootdown.dy;
	                    _player.shootup.dx = -_player.shootup.dx;
	                    _player.shootup.dy = -_player.shootup.dy;
	                    _player.shootup.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                    _player.shootdown.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                    _player.shootright.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                    _player.shootleft.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	                };
	
	                animatefg1();
	                break;
	
	            case 32:
	                var animatefg1 = function animatefg1() {
	
	                    var myparticle = new Supersaiyan(_player.player1.x, _player.player1.y, _player.player1.dx, _player.player1.dy, 15, 'pink');
	
	                    myparticle.draw();
	                    myparticle.update();
	
	                    requestAnimationFrame(animatefg1);
	                };
	
	                animatefg1();
	
	                break;
	            case 37:
	
	                _player.shootleft.x = _player.player1.x;
	                _player.shootleft.y = _player.player1.y;
	                _player.shootleft.dx = -5;
	                _player.shootleft.dy = 0;
	                _player.shootleft.radius = 8;
	
	                break;
	            case 38:
	
	                _player.shootup.x = _player.player1.x;
	                _player.shootup.y = _player.player1.y;
	                _player.shootup.dx = 0;
	                _player.shootup.dy = -5;
	                _player.shootup.radius = 8;
	
	                break;
	            case 39:
	                _player.shootright.x = _player.player1.x;
	                _player.shootright.y = _player.player1.y;
	                _player.shootright.dx = 5;
	                _player.shootright.dy = 0;
	                _player.shootright.radius = 8;
	
	                break;
	            case 40:
	                _player.shootdown.x = _player.player1.x;
	                _player.shootdown.y = _player.player1.y;
	                _player.shootdown.dx = 0;
	                _player.shootdown.dy = 5;
	                _player.shootdown.radius = 8;
	
	                break;
	
	        }
	    }
	}
	
	exports.player1 = _player.player1;
	exports.getcords = getcords;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(4);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(17), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8);
	var core = __webpack_require__(9);
	var ctx = __webpack_require__(10);
	var hide = __webpack_require__(12);
	var has = __webpack_require__(22);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.6.12' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(13);
	var createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(14);
	var IE8_DOM_DEFINE = __webpack_require__(16);
	var toPrimitive = __webpack_require__(20);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function () {
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	var document = __webpack_require__(8).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.shootleft = exports.shootright = exports.shootdown = exports.shootup = exports.player1 = undefined;
	
	var _options = __webpack_require__(24);
	
	var _options2 = _interopRequireDefault(_options);
	
	var _shape = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var player1 = new _shape.LittleRed(_options2.default.bigslowx, _options2.default.bigslowy, _options2.default.bigslowdx, _options2.default.bigslowdy, _options2.default.bigslowradius, _options2.default.bigslowcolor);
	var shootup = new _shape.BigBlue(_options2.default.bigslowx, _options2.default.bigslowy, _options2.default.bigslowdx, _options2.default.bigslowdy, _options2.default.bigslowradius2, _options2.default.bigslowcolor3);
	var shootdown = new _shape.BigBlue(_options2.default.bigslowx, _options2.default.bigslowy, _options2.default.bigslowdx, _options2.default.bigslowdy, _options2.default.bigslowradius2, _options2.default.bigslowcolor3);
	var shootleft = new _shape.BigBlue(_options2.default.bigslowx, _options2.default.bigslowy, _options2.default.bigslowdx, _options2.default.bigslowdy, _options2.default.bigslowradius2, _options2.default.bigslowcolor3);
	var shootright = new _shape.BigBlue(_options2.default.bigslowx, _options2.default.bigslowy, _options2.default.bigslowdx, _options2.default.bigslowdy, _options2.default.bigslowradius2, _options2.default.bigslowcolor3);
	
	exports.player1 = player1;
	exports.shootup = shootup;
	exports.shootdown = shootdown;
	exports.shootright = shootright;
	exports.shootleft = shootleft;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    bigslowx: 50,
	    bigslowy: 100,
	    bigslowdx: .5,
	    bigslowdy: 1,
	    bigslowradius: 12,
	    bigslowcolor: 'grey',
	
	    bigslowcolor3: 'white',
	    bigslowradius2: 5,
	
	    updownradius: 10,
	    leftrighradius: 8
	
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BigBlue = exports.LittleRed = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LittleRed = exports.LittleRed = function () {
	  function LittleRed(x, y, dx, dy, radius, color) {
	    (0, _classCallCheck3.default)(this, LittleRed);
	
	    this.x = x;
	    this.y = y;
	    this.dx = dx;
	    this.dy = dy;
	    this.radius = radius;
	    this.color = color;
	  }
	
	  (0, _createClass3.default)(LittleRed, [{
	    key: 'draw',
	    value: function draw() {
	      var canvas = document.getElementById('fg');
	      var ctx = canvas.getContext('2d');
	
	      ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	      ctx.fillStyle = this.color;
	      ctx.beginPath();
	      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	      ctx.closePath();
	      ctx.fill();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var canvas = document.getElementById('fg');
	
	      this.x += this.dx;
	      this.y += this.dy;
	      this.dx = this.dx * .99;
	      this.dy = this.dy * .99;
	
	      if (this.y > canvas.height || this.y < 0) {
	
	        this.dy = -this.dy;
	      }
	      if (this.x > canvas.width || this.x < 0) {
	
	        this.dx = -this.dx;
	      }
	    }
	  }]);
	  return LittleRed;
	}();
	
	var BigBlue = exports.BigBlue = function () {
	  function BigBlue(x, y, dx, dy, radius, color) {
	    (0, _classCallCheck3.default)(this, BigBlue);
	
	
	    this.x = x;
	    this.y = y;
	    this.dx = dx;
	    this.dy = dy;
	    this.radius = radius;
	    this.color = color;
	  }
	
	  (0, _createClass3.default)(BigBlue, [{
	    key: 'draw',
	    value: function draw() {
	      var canvas2 = document.getElementById('fg1');
	      var ctx2 = canvas2.getContext('2d');
	
	      ctx2.fillStyle = this.color;
	      ctx2.beginPath();
	      ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	      ctx2.closePath();
	      ctx2.fill();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      var canvas2 = document.getElementById('fg1');
	      this.x += this.dx;
	      this.y += this.dy;
	      this.radius = this.radius * .999;
	      this.dx = this.dx * .99;
	      this.dy = this.dy * .99;
	
	      if (this.y > canvas2.height || this.y < 0) {
	
	        this.dy = -this.dy;
	      }
	      if (this.x > canvas2.width || this.x < 0) {
	
	        this.dx = -this.dx;
	      }
	    }
	  }]);
	  return BigBlue;
	}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map