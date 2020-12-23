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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/waves.js":
/*!*******************************!*\
  !*** ./resources/js/waves.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (t) {
  "use strict";

  function e(t) {
    return null !== t && t === t.window;
  }

  function n(t) {
    return e(t) ? t : 9 === t.nodeType && t.defaultView;
  }

  function a(t) {
    var e,
        a,
        i = {
      top: 0,
      left: 0
    },
        o = t && t.ownerDocument;
    return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (i = t.getBoundingClientRect()), a = n(o), {
      top: i.top + a.pageYOffset - e.clientTop,
      left: i.left + a.pageXOffset - e.clientLeft
    };
  }

  function i(t) {
    var e = "";

    for (var n in t) {
      t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
    }

    return e;
  }

  function o(t) {
    if (d.allowEvent(t) === !1) return null;

    for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
      if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
        e = n;
        break;
      }

      if (n.classList.contains("waves-effect")) {
        e = n;
        break;
      }

      n = n.parentElement;
    }

    return e;
  }

  function r(e) {
    var n = o(e);
    null !== n && (c.show(e, n), "ontouchstart" in t && (n.addEventListener("touchend", c.hide, !1), n.addEventListener("touchcancel", c.hide, !1)), n.addEventListener("mouseup", c.hide, !1), n.addEventListener("mouseleave", c.hide, !1));
  }

  var s = s || {},
      u = document.querySelectorAll.bind(document),
      c = {
    duration: 750,
    show: function show(t, e) {
      if (2 === t.button) return !1;
      var n = e || this,
          o = document.createElement("div");
      o.className = "waves-ripple", n.appendChild(o);
      var r = a(n),
          s = t.pageY - r.top,
          u = t.pageX - r.left,
          d = "scale(" + n.clientWidth / 100 * 10 + ")";
      "touches" in t && (s = t.touches[0].pageY - r.top, u = t.touches[0].pageX - r.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", d), o.setAttribute("data-x", u), o.setAttribute("data-y", s);
      var l = {
        top: s + "px",
        left: u + "px"
      };
      o.className = o.className + " waves-notransition", o.setAttribute("style", i(l)), o.className = o.className.replace("waves-notransition", ""), l["-webkit-transform"] = d, l["-moz-transform"] = d, l["-ms-transform"] = d, l["-o-transform"] = d, l.transform = d, l.opacity = "1", l["-webkit-transition-duration"] = c.duration + "ms", l["-moz-transition-duration"] = c.duration + "ms", l["-o-transition-duration"] = c.duration + "ms", l["transition-duration"] = c.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", i(l));
    },
    hide: function hide(t) {
      d.touchup(t);
      var e = this,
          n = (1.4 * e.clientWidth, null),
          a = e.getElementsByClassName("waves-ripple");
      if (!(a.length > 0)) return !1;
      n = a[a.length - 1];
      var o = n.getAttribute("data-x"),
          r = n.getAttribute("data-y"),
          s = n.getAttribute("data-scale"),
          u = Date.now() - Number(n.getAttribute("data-hold")),
          l = 350 - u;
      0 > l && (l = 0), setTimeout(function () {
        var t = {
          top: r + "px",
          left: o + "px",
          opacity: "0",
          "-webkit-transition-duration": c.duration + "ms",
          "-moz-transition-duration": c.duration + "ms",
          "-o-transition-duration": c.duration + "ms",
          "transition-duration": c.duration + "ms",
          "-webkit-transform": s,
          "-moz-transform": s,
          "-ms-transform": s,
          "-o-transform": s,
          transform: s
        };
        n.setAttribute("style", i(t)), setTimeout(function () {
          try {
            e.removeChild(n);
          } catch (t) {
            return !1;
          }
        }, c.duration);
      }, l);
    },
    wrapInput: function wrapInput(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e];

        if ("input" === n.tagName.toLowerCase()) {
          var a = n.parentNode;
          if ("i" === a.tagName.toLowerCase() && -1 !== a.className.indexOf("waves-effect")) continue;
          var i = document.createElement("i");
          i.className = n.className + " waves-input-wrapper";
          var o = n.getAttribute("style");
          o || (o = ""), i.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), a.replaceChild(i, n), i.appendChild(n);
        }
      }
    }
  },
      d = {
    touches: 0,
    allowEvent: function allowEvent(t) {
      var e = !0;
      return "touchstart" === t.type ? d.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
        d.touches > 0 && (d.touches -= 1);
      }, 500) : "mousedown" === t.type && d.touches > 0 && (e = !1), e;
    },
    touchup: function touchup(t) {
      d.allowEvent(t);
    }
  };
  s.displayEffect = function (e) {
    e = e || {}, "duration" in e && (c.duration = e.duration), c.wrapInput(u(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", r, !1), document.body.addEventListener("mousedown", r, !1);
  }, s.attach = function (e) {
    "input" === e.tagName.toLowerCase() && (c.wrapInput([e]), e = e.parentElement), "ontouchstart" in t && e.addEventListener("touchstart", r, !1), e.addEventListener("mousedown", r, !1);
  }, t.Waves = s, document.addEventListener("DOMContentLoaded", function () {
    s.displayEffect();
  }, !1);
}(window);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/style.css":
/*!**********************************!*\
  !*** ./resources/sass/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./resources/js/waves.js ./resources/sass/app.scss ./resources/sass/style.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Themes\Laravel\base_lubakachi-master\resources\js\waves.js */"./resources/js/waves.js");
__webpack_require__(/*! D:\Themes\Laravel\base_lubakachi-master\resources\sass\app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! D:\Themes\Laravel\base_lubakachi-master\resources\sass\style.css */"./resources/sass/style.css");


/***/ })

/******/ });