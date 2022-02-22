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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/brand/brand.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/brand/brand.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.js-open-models').on('click', function () {
    var models = JSON.parse($(this).attr('data-models'));
    var name = $(this).attr('data-name');
    var logo = $(this).attr('data-logo');
    var category = $(this).attr('data-category');

    if (models) {
      $.fancybox.open("\n                <div class=\"brand__popup\">\n                    <div class=\"brand__popup-top\">\n                        <div class=\"brand__popup-left\">\n                            <span class=\"brand__popup-name\">".concat(name, "</span>\n                            <span class=\"brand__popup-category\">").concat(category, "</span>\n                        </div>\n                        <div class=\"brand__popup-logo style=\"\">\n                            <img src=\"./img/content/brands/").concat(logo, ".png\">\n                        </div>\n                    </div> \n                    <ul class=\"brand__popup-list\">\n                        ").concat(models.map(function (item) {
        return "\n                            <li>\n                                <span class=\"brand__popup-model\">".concat(item.name, "</span>\n                                <span class=\"brand__popup-cost\">").concat(item.cost, " \u20BD</span>\n                            </li>");
      }).join(''), "\n                    </ul>\n                    <button class=\"brand__popup-btn btn btn_orange\" data-src=\"#sign-up\" data-fancybox >\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</button>\n                </div>\n            "));
      return;
    }

    $.fancybox.open("\n            <div class=\"brand__popup\">\n                <div class=\"brand__popup-top\">\n                    <div class=\"brand__popup-left\">\n                        <span class=\"brand__popup-name\">".concat(name, "</span>\n                        <span class=\"brand__popup-category\">").concat(category, "</span>\n                    </div>\n                    <div class=\"brand__popup-logo style=\"\">\n                        <img src=\"./img/content/brands/").concat(logo, ".png\">\n                    </div>\n                </div> \n                <h3>\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u043E\u0434\u0435\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442</h3>\n                <button class=\"brand__popup-btn btn btn_orange\" data-src=\"#sign-up\" data-fancybox >\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</button>\n            </div>\n        "));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {// alert('footer script');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $form = $('.js-form');
  $("[type='tel']").mask("+7 (999) 999-9999", {
    completed: function completed() {
      $(this).parent().removeClass('error');
    }
  });
  $('.js-form-select').select2({});
  $form.find('#name').on('input', function () {
    var value = $(this).val();
    if (value.length > 3) $(this).parent().removeClass('error');
  });
  $form.find('.js-checkbox').on('change', function () {
    $(this).next().removeClass('error');
  });
  $form.on('submit', function (e) {
    e.preventDefault();
    var $this = $(this);
    var url = $this.attr('data-action');
    var name = $this.find('#name');
    var phone = $this.find('#phone');
    var model = $this.find('#model');
    var brand = $this.find('#brand');
    var submit = $this.find('.js-form__btn');
    if (name.val() === '' || name.val().length < 3) name.parent().addClass('error');
    if (phone.val() === '') phone.parent().addClass('error');
    if (name.val().length < 3 || phone.val() === '') return;
    submit.attr('disabled', true);
    var modelVal = model.val();
    var brandVal = brand.val();
    var nameVal = name.val();
    var phoneVal = phone.val().replace(/\D+/g, '');
    $.post(url, {
      brand: brandVal,
      model: modelVal,
      name: nameVal,
      phone: phoneVal
    }).done(function (response) {
      submit.removeAttr('disabled');
      $form.each(function (i) {
        return $form[i].reset();
      });
      $.fancybox.close();
      $.fancybox.open({
        src: "#success",
        type: 'inline',
        opts: {
          afterShow: function afterShow(instance, current) {
            setTimeout(function () {
              return $.fancybox.close();
            }, 3000);
          }
        }
      });
    }).fail(function (response) {});
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $headerBurger = $('.js-header__burger'),
      $headerMenu = $('.js-header__menu'),
      $headerMenuClose = $('.js-header-menu-close');

  var hiddenBody = function hiddenBody(val) {
    return $('body').css('overflow', val);
  };

  $headerBurger.on('click', function () {
    $headerMenu.addClass('show');
    hiddenBody('hidden');
  });
  $headerMenuClose.on('click', function () {
    $headerMenu.removeClass('show');
    hiddenBody('visible');
  });
  $(document).mouseup(function (e) {
    if (!$headerMenu.is(e.target) && $headerMenu.has(e.target).length === 0) {
      $headerMenu.removeClass('show');
      hiddenBody('visible');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $mapSelect = $('.js-map-select');
  var $mapContact = $('.map__contact-item');
  ymaps.ready(init);
  var newMap;

  function init() {
    var place;
    var placMarkers = [];
    var pointer = [{
      hintContent: "Сервис Перово",
      balloonContent: "ул. Электродная, д. 14, стр. 1",
      coor: [55.750048, 37.755015]
    }, {
      hintContent: "Сервис Бутово",
      balloonContent: "ул. Бартеневская  д. 55",
      coor: [55.547056, 37.517850]
    }, {
      hintContent: "Сервис Таганка",
      balloonContent: "Михайловский пр., д.1, стр.3",
      coor: [55.731577, 37.687731]
    }, {
      hintContent: "Сервис Митино",
      balloonContent: "Митино, Волоцкой пер., д. 7",
      coor: [55.834714, 37.350755]
    }, {
      hintContent: "Сервис Медведково",
      balloonContent: "ул. Полярная, д. 35",
      coor: [55.889321, 37.645285]
    }];
    newMap = new ymaps.Map("ymaps", {
      center: [55.755811, 37.617617],
      zoom: 9,
      controls: []
    });
    pointer.forEach(function (item) {
      place = new ymaps.Placemark(item.coor, {
        hintContent: item.hintContent,
        balloonContent: item.balloonContent
      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/pin.png',
        iconImageSize: [38, 49] // iconImageOffset: [-50, -30]

      });
      newMap.geoObjects.add(place);
      placMarkers.push(place);
      place.events.add('mousemove', function (event) {
        placMarkers.forEach(function (plase) {
          return plase.options.set('iconImageHref', './img/content/pin.png');
        });
        event.get('target').options.set('iconImageHref', './img/content/pin1.png');

        var hintContent = event.get('target').properties._data.hintContent;

        $mapContact.each(function (i) {
          var content = $(this).attr('data-content');
          if (hintContent === content) return $(this).addClass('active');
        });
      });
      place.events.add('mouseleave', function (event) {
        event.get('target').options.set('iconImageHref', './img/content/pin.png');
        $mapContact.removeClass('active');
      });
    });
    $mapSelect.on('click', function () {
      var idx = $(this).attr('data-idx');
      $mapContact.removeClass('active');
      $mapContact.eq(+idx).addClass('active');
      placMarkers.forEach(function (plase) {
        return plase.options.set('iconImageHref', './img/content/pin.png');
      });
      placMarkers[+idx].options.set('iconImageHref', './img/content/pin1.png');
    });
    var width = $(window).width();

    if (width < 770) {
      newMap.behaviors.disable('drag');
    }
  }

  ;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $tabs = $('.js-tabs-item');
  var $brand = $('.js-brand');
  $tabs.on('click', function () {
    $tabs.removeClass('active');
    $(this).addClass('active');
    var idx = $tabs.index($(this));
    $brand.removeClass('active');
    $brand.eq(idx).addClass('active');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/global.js":
/*!*********************************!*\
  !*** ./src/js/import/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $(document).on('click', '.js-anchor', function (event) {
    event.preventDefault();
    $('body').css('overflow', 'visible');
    $('html, body').stop(true, true).delay(200).animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  $('.js-modal-close').on('click', function () {
    $.fancybox.close();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/js/import/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_map_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_brand_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/brand/brand */ "./src/blocks/modules/brand/brand.js");
/* harmony import */ var _modules_brand_brand__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_brand_brand__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map