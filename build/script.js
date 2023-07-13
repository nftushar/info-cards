/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/utils/functions.js":
/*!****************************************!*\
  !*** ../Components/utils/functions.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoxValue": function() { return /* binding */ getBoxValue; },
/* harmony export */   "getImageSizes": function() { return /* binding */ getImageSizes; },
/* harmony export */   "tabController": function() { return /* binding */ tabController; }
/* harmony export */ });
const getBoxValue = object => Object.values(object).join(' ');
const getImageSizes = (image, imageSizes) => {
  if (!image) return [];
  let options = [];
  const sizes = image.media_details.sizes;
  for (const key in sizes) {
    const imageSize = imageSizes.find(s => s.slug === key);
    if (imageSize) {
      options.push({
        label: imageSize.name,
        value: sizes[key].source_url
      });
    }
  }
  return options;
};
const tabController = () => {
  setTimeout(() => {
    const panelBodies = document.querySelectorAll('.components-panel__body-title button');
    panelBodies.forEach(item => {
      item.addEventListener('click', clickEveryItem);
    });
    function clickEveryItem() {
      this.removeEventListener('click', clickEveryItem);
      panelBodies.forEach(item => {
        if (item.getAttribute('aria-expanded') === 'true' && !item.isEqualNode(this)) {
          item.click();
        }
      });
      setTimeout(() => {
        this.addEventListener('click', clickEveryItem);
      }, 500);
    }
  }, 500);
};

/***/ }),

/***/ "../Components/utils/getCSS.js":
/*!*************************************!*\
  !*** ../Components/utils/getCSS.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBackgroundCSS": function() { return /* binding */ getBackgroundCSS; },
/* harmony export */   "getBorderCSS": function() { return /* binding */ getBorderCSS; },
/* harmony export */   "getBoxCSS": function() { return /* binding */ getBoxCSS; },
/* harmony export */   "getColorsCSS": function() { return /* binding */ getColorsCSS; },
/* harmony export */   "getIconCSS": function() { return /* binding */ getIconCSS; },
/* harmony export */   "getMultiShadowCSS": function() { return /* binding */ getMultiShadowCSS; },
/* harmony export */   "getSeparatorCSS": function() { return /* binding */ getSeparatorCSS; },
/* harmony export */   "getShadowCSS": function() { return /* binding */ getShadowCSS; },
/* harmony export */   "getSpaceCSS": function() { return /* binding */ getSpaceCSS; },
/* harmony export */   "getTypoCSS": function() { return /* binding */ getTypoCSS; }
/* harmony export */ });
const getBackgroundCSS = function (bg) {
  let isSolid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let isGradient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let isImage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const {
    type = 'solid',
    color = '#000000b3',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)',
    image = {},
    position = 'center center',
    attachment = 'initial',
    repeat = 'no-repeat',
    size = 'cover',
    overlayColor = '#000000b3'
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? `background: ${gradient};` : 'image' === type && isImage ? `background: url(${image?.url});
				background-color: ${overlayColor};
				background-position: ${position};
				background-size: ${size};
				background-repeat: ${repeat};
				background-attachment: ${attachment};
				background-blend-mode: overlay;` : isSolid && `background: ${color};`;
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '#0000',
    side = 'all',
    radius = '0px'
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '#0000',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors || {};
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? `background: ${'gradient' === bgType ? gradient : bg};` : ''}
	`;
  return styles;
};
const getIconCSS = function (icon) {
  let isSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let isColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : `color: ${color};`;
  const styles = `
		${!fontSize || !isSize ? '' : `font-size: ${fontSize}px;`}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = function (value) {
  let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'box';
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator || {};
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = shadow => {
  const {
    type = 'box',
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = function (selector, typo) {
  let isFamily = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo || {};
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${`font-size: ${desktopFontSize}px;`}
		${generateCss(fontStyle, 'font-style')}
		${generateCss(textTransform, 'text-transform')}
		${generateCss(textDecoration, 'text-decoration')}
		${generateCss(lineHeight, 'line-height')}
		${generateCss(letterSpace, 'letter-spacing')}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		@media (max-width: 768px) {
			${selector}{
				${`font-size: ${tabletFontSize}px;`}
			}
		}
		@media (max-width: 576px) {
			${selector}{
				${`font-size: ${mobileFontSize}px;`}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = function () {
  let val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.values(val).join(' ');
};

/***/ }),

/***/ "./src/Components/Frontend/Cards.js":
/*!******************************************!*\
  !*** ./src/Components/Frontend/Cards.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _First4Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./First4Theme */ "./src/Components/Frontend/First4Theme.js");
/* harmony import */ var _Theme5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme5 */ "./src/Components/Frontend/Theme5.js");



const Cards = _ref => {
  let {
    attributes,
    clientId
  } = _ref;
  const {
    cards,
    theme,
    layout,
    columns
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `icbCards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile} ${layout}`
  }, cards.map((card, index) => {
    switch (theme) {
      case 'default':
      case 'theme1':
      case 'theme2':
      case 'theme3':
      case 'theme4':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_First4Theme__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attributes: attributes,
          card: card,
          index: index
        });
      case 'theme5':
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Theme5__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attributes: attributes,
          card: card,
          index: index
        });
      default:
        return null;
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./src/Components/Frontend/First4Theme.js":
/*!************************************************!*\
  !*** ./src/Components/Frontend/First4Theme.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const First4Theme = _ref => {
  let {
    attributes,
    card,
    index
  } = _ref;
  const {
    theme,
    isImg,
    imgPos
  } = attributes;
  const {
    img,
    title,
    desc,
    btnLabal,
    btnUrl
  } = card;
  const imgEl = isImg && img && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: img,
    alt: title
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `card card-${index} ${theme} first4Theme`,
    key: index
  }, 'first' === imgPos && imgEl, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content"
  }, title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), desc && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: desc
    }
  }), btnLabal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btnWrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: btnUrl,
    dangerouslySetInnerHTML: {
      __html: btnLabal
    }
  }))), 'last' === imgPos && imgEl);
};
/* harmony default export */ __webpack_exports__["default"] = (First4Theme);

/***/ }),

/***/ "./src/Components/Frontend/Theme5.js":
/*!*******************************************!*\
  !*** ./src/Components/Frontend/Theme5.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Theme5 = _ref => {
  let {
    attributes,
    card,
    index
  } = _ref;
  const {
    theme
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `card card-${index} ${theme}`,
    key: index
  }, "new card");
};
/* harmony default export */ __webpack_exports__["default"] = (Theme5);

/***/ }),

/***/ "./src/Style.js":
/*!**********************!*\
  !*** ./src/Style.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/utils/getCSS */ "../Components/utils/getCSS.js");
/* harmony import */ var _Components_utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/utils/functions */ "../Components/utils/functions.js");



const Style = _ref => {
  let {
    attributes,
    clientId
  } = _ref;
  const {
    cards,
    background,
    btnPadding,
    padding,
    titleColor,
    titleTypo,
    descTypo,
    btnTypo,
    contentAlign,
    btnRadius,
    contentPadding,
    cardPadding,
    cardShadow,
    cardRadius,
    imgHeight,
    columnGap,
    rowGap,
    btnAlign,
    btnColors,
    btnHovColors
  } = attributes;
  const cardsSl = `#icbCards-${clientId} .icbCards`;
  // console.log(btnTypo);
  // ${getTypoCSS('', typography)?.googleFontLink}
  // ${getTypoCSS('selector', typography)?.styles}

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
        ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)('', titleTypo)?.googleFontLink}
        ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)('', descTypo)?.googleFontLink}
        ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)('', btnTypo)?.googleFontLink}
        ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2`, titleTypo)?.styles}
        ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${cardsSl} .first4Theme .content h2 p, ${cardsSl} .theme5 .content .details h2 span`, descTypo)?.styles}
        ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(`${cardsSl} .theme5 .content .details .actionBtn button`, btnTypo)?.styles}
        
        ${cardsSl}{
            ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(background)}
            column-gap: ${columnGap};
            row-gap: ${rowGap};
            padding: ${(0,_Components_utils_functions__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(padding)}
        }
        ${cardsSl} .first4Theme, ${cardsSl} .theme5 .content{
            border-radius: ${cardRadius};
            padding: ${(0,_Components_utils_functions__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(cardPadding)};
            box-shadow: ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getMultiShadowCSS)(cardShadow)}
        }
        ${cardsSl} .first4Theme img{
            height: ${imgHeight}
        }
        ${cardsSl} .vertical .card img{
            max-height: ${imgHeight}
        }
        ${cardsSl} .first4Theme .content, ${cardsSl} .theme5 .content {
            padding: ${(0,_Components_utils_functions__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(contentPadding)};
            text-align: ${contentAlign};
        }
        ${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2{
            color: ${titleColor};
            text-align: ${contentAlign};
        }
        ${cardsSl} .first4Theme .content p{
            text-align: ${contentAlign};
            color: ${descTypo};
        }
        ${cardsSl} .first4Theme .content .btnWrapper, ${cardsSl} .theme5 .content .details .actionBtn{
            justify-content: ${btnAlign}
        }
        ${cardsSl}  .first4Theme .content a{

            ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnColors)};
            border-radius: ${btnRadius};
            padding: ${(0,_Components_utils_functions__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(btnPadding)}
        }
        ${cardsSl}  .first4Theme .content a:hover{
            ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnHovColors)}
        }
    `, cards.map((card, index) => {
    const {
      background
    } = card;
    // console.log(titleColor);
    return `
        ${cardsSl} .first4Theme.card-${index}, ${cardsSl} .theme5.card-${index} .content{
            ${(0,_Components_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(background, true, true, false)}
        }

        
    `;
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Style);

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
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./src/Style.js");
/* harmony import */ var _Components_Frontend_Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Frontend/Cards */ "./src/Components/Frontend/Cards.js");




window.addEventListener('DOMContentLoaded', () => {
  const allCards = document.querySelectorAll('.wp-block-icb-cards');
  allCards.forEach(cardsEl => {
    const attributes = JSON.parse(cardsEl.dataset.attributes);
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: attributes,
      clientId: attributes.clientId
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Frontend_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      clientId: attributes.clientId
    })), cardsEl);
  });
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map