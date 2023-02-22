/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/function.js":
/*!*******************************!*\
  !*** ./src/utils/function.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoxValue": function() { return /* binding */ getBoxValue; }
/* harmony export */ });
const getBoxValue = object => Object.values(object).join(" ");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/function */ "./src/utils/function.js");



window.addEventListener('DOMContentLoaded', () => {
  const allCards = document.querySelectorAll('.wp-block-icb-cards');
  allCards.forEach(cardsEl => {
    const attributes = JSON.parse(cardsEl.dataset.attributes);
    react_dom__WEBPACK_IMPORTED_MODULE_1___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardsRender, {
      attributes: attributes
    }), cardsEl);
  });
});
const CardsRender = _ref => {
  let {
    attributes
  } = _ref;
  const {
    cId: clientId,
    cards,
    btnPadding,
    gridColumns,
    titleTypo,
    descTypo,
    contentPadding,
    columnGap,
    rowGap
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `main main-${clientId}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, ` 
                .main-${clientId}{
                    grid-template-columns: repeat(${gridColumns['desktop']}, auto);
                    column-gap: ${columnGap};
                    row-gap: ${rowGap};
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(btnPadding)};
                }
                .main-${clientId} .container button{
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(btnPadding)};
                }
                .main-${clientId}  .container {
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(contentPadding)};
                }
            `), cards.map((card, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `card card-${index}`,
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                        .main-${clientId} .card-${index} .container h2 {
                            color: ${card.titleColor};
                            font-size: ${titleTypo.fontSize}
                        }
                        .main-${clientId} .card-${index} .container p {
                            color: ${card.descColor};
                            font-size: ${descTypo.fontSize}
                        }
                        .main-${clientId} .card-${index} .container button{
                            background-color: ${card.btnColor?.color}
                        }
				    `), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: card.img,
    alt: "img"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, card.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, card.desc), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, card.btnLabal)))));
};
}();
/******/ })()
;
//# sourceMappingURL=script.js.map