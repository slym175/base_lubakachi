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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/dashboards/dashboard1.js":
/*!*****************************************************!*\
  !*** ./resources/js/pages/dashboards/dashboard1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
  "use strict"; // ============================================================== 
  // Newsletter
  // ============================================================== 

  /*var chart = new Chartist.Line('.campaign', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
          [0, 5, 6, 8, 25, 9, 8, 24],
          [0, 3, 1, 2, 8, 1, 5, 1]
      ]
  }, {
      low: 0,
      high: 28,
        showArea: true,
      fullWidth: true,
      plugins: [
          Chartist.plugins.tooltip()
      ],
      axisY: {
          onlyInteger: true,
          scaleMinSpace: 40,
          offset: 20,
          labelInterpolationFnc: function(value) {
              return (value / 1) + 'k';
          }
      },
    });
  */
  // Offset x1 a tiny amount so that the straight stroke gets a bounding box
  // Straight lines don't get a bounding box 
  // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox

  chart.on('draw', function (ctx) {
    if (ctx.type === 'area') {
      ctx.element.attr({
        x1: ctx.x1 + 0.001
      });
    }
  }); // Create the gradient definition on created event (always after chart re-render)

  chart.on('created', function (ctx) {
    var defs = ctx.svg.elem('defs');
    defs.elem('linearGradient', {
      id: 'gradient',
      x1: 0,
      y1: 1,
      x2: 0,
      y2: 0
    }).elem('stop', {
      offset: 0,
      'stop-color': 'rgba(255, 255, 255, 1)'
    }).parent().elem('stop', {
      offset: 1,
      'stop-color': 'rgba(64, 196, 255, 1)'
    });
  });
  var chart = [chart]; // ============================================================== 
  // Our Visitor
  // ============================================================== 

  var sparklineLogin = function sparklineLogin() {
    $('#ravenue').sparkline([6, 10, 9, 11, 9, 10, 12], {
      type: 'bar',
      height: '100',
      barWidth: '4',
      width: '100%',
      resize: true,
      barSpacing: '11',
      barColor: '#fff'
    });
    $('#views').sparkline([6, 10, 9, 11, 9, 10, 12], {
      type: 'line',
      height: '72',
      lineColor: 'transparent',
      fillColor: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      resize: true
    });
  };

  var sparkResize;
  $(window).resize(function (e) {
    clearTimeout(sparkResize);
    sparkResize = setTimeout(sparklineLogin, 500);
  });
  sparklineLogin(); // This is for the chat messege on enter

  $(function () {
    $(document).on('keypress', "#textarea1", function (e) {
      if (e.keyCode == 13) {
        var id = $(this).attr("data-user-id");
        var msg = $(this).val();
        msg = msg_sent(msg);
        $("#someDiv").append(msg);
        $(this).val("");
        $(this).focus();
      }
    });
  });
});

/***/ }),

/***/ 3:
/*!***********************************************************!*\
  !*** multi ./resources/js/pages/dashboards/dashboard1.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Themes\Laravel\base_lubakachi-master\resources\js\pages\dashboards\dashboard1.js */"./resources/js/pages/dashboards/dashboard1.js");


/***/ })

/******/ });