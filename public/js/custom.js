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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/custom.js":
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  "use strict";

  $(".preloader").fadeOut(); // ============================================================== 
  // Theme options
  // ==============================================================     
  // ============================================================== 
  // sidebar-hover
  // ==============================================================

  $(".left-sidebar").hover(function () {
    $(".navbar-header").addClass("expand-logo");
  }, function () {
    $(".navbar-header").removeClass("expand-logo");
  }); // this is for close icon when navigation open in mobile view

  $(".nav-toggler").on('click', function () {
    $("#main-wrapper").toggleClass("show-sidebar");
    $(".nav-toggler i").toggleClass("ti-menu");
  });
  $(".nav-lock").on('click', function () {
    $("body").toggleClass("lock-nav");
    $(".nav-lock i").toggleClass("mdi-toggle-switch-off");
    $("body, .page-wrapper").trigger("resize");
  });
  $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
    $(".app-search").toggle(200);
    $(".app-search input").focus();
  }); // ============================================================== 
  // Right sidebar options
  // ==============================================================

  $(function () {
    $(".service-panel-toggle").on('click', function () {
      $(".customizer").toggleClass('show-service-panel');
    });
    $('.page-wrapper').on('click', function () {
      $(".customizer").removeClass('show-service-panel');
    });
  }); // ============================================================== 
  // This is for the floating labels
  // ============================================================== 

  $('.floating-labels .form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', e.type === 'focus' || this.value.length > 0);
  }).trigger('blur'); // ============================================================== 
  //tooltip
  // ============================================================== 

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); // ============================================================== 
  //Popover
  // ============================================================== 

  $(function () {
    $('[data-toggle="popover"]').popover();
  }); // ============================================================== 
  // Perfact scrollbar
  // ============================================================== 

  $('.message-center, .customizer-body, .scrollable').perfectScrollbar({
    wheelPropagation: !0
  });
  /*var ps = new PerfectScrollbar('.message-body');
  var ps = new PerfectScrollbar('.notifications');
  var ps = new PerfectScrollbar('.scroll-sidebar');
  var ps = new PerfectScrollbar('.customizer-body');*/
  // ============================================================== 
  // Resize all elements
  // ============================================================== 

  $("body, .page-wrapper").trigger("resize");
  $(".page-wrapper").delay(20).show(); // ============================================================== 
  // To do list
  // ============================================================== 

  $(".list-task li label").click(function () {
    $(this).toggleClass("task-done");
  }); //****************************

  /* This is for the mini-sidebar if width is less then 1170*/
  //**************************** 

  var setsidebartype = function setsidebartype() {
    var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;

    if (width < 1170) {
      $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
    } else {
      $("#main-wrapper").attr("data-sidebartype", "full");
    }
  };

  $(window).ready(setsidebartype);
  $(window).on("resize", setsidebartype); //****************************

  /* This is for sidebartoggler*/
  //****************************

  $('.sidebartoggler').on("click", function () {
    $("#main-wrapper").toggleClass("mini-sidebar");

    if ($("#main-wrapper").hasClass("mini-sidebar")) {
      $(".sidebartoggler").prop("checked", !0);
      $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
    } else {
      $(".sidebartoggler").prop("checked", !1);
      $("#main-wrapper").attr("data-sidebartype", "full");
    }
  });
});

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/custom.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Themes\Laravel\base_lubakachi-master\resources\js\custom.js */"./resources/js/custom.js");


/***/ })

/******/ });