/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/BColor/BColor.js":
/*!**************************************!*\
  !*** ../Components/BColor/BColor.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BColor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BColor.scss */ "../Components/BColor/BColor.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Color' (String)
 * @props value: value of color (String)
 * @props defaultColor: default color for reset color
 * @props onChange: (Function)
 * @props disableAlpha: Disable alpha of color (Boolean)
 * @return color (String)
 */






const BColor = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
    value,
    onChange,
    defaultColor,
    disableAlpha = false
  } = props;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  const themeColors = wp.data.select('core/block-editor').getSettings().colors;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer bColor",
    contentClassName: "bPlDropdownPopover bColorDropdownPopover",
    position: "top right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bColorButtonContainer"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "bColorButton",
        onClick: onToggle,
        "aria-expanded": isOpen,
        style: {
          backgroundColor: value || 'transparent'
        }
      })), defaultColor && defaultColor != state && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "bPlResetVal",
        icon: "image-rotate",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'bplugins'),
        onClick: () => {
          onChange(defaultColor);
          setState(defaultColor);
        }
      }));
    },
    renderContent: _ref2 => {
      let {
        isOpen,
        onClose
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: value || '',
        disableAlpha: disableAlpha,
        onChangeComplete: c => {
          onChange(`rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`);
          setState(c.hex);
        }
      }), themeColors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "themeColors"
      }, themeColors.map((_ref3, index) => {
        let {
          color
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bColorButtonContainer",
          key: index
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "bColorButton",
          onClick: () => {
            onChange(color);
            setState(color);
            onClose;
          },
          "aria-expanded": isOpen,
          style: {
            backgroundColor: value ? color : 'transparent'
          }
        }));
      })));
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BColor);

/***/ }),

/***/ "../Components/BDevice/BDevice.js":
/*!****************************************!*\
  !*** ../Components/BDevice/BDevice.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BDevice_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BDevice.scss */ "../Components/BDevice/BDevice.scss");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/icons */ "../Components/utils/icons.js");

/**
 * @props device: 'desktop' (String)
 * @props onChange: (Function)
 * @props style: {} (Object)
 * @return Selected device
 */




const BDevice = _ref => {
  let {
    device = 'desktop',
    onChange,
    className = 'iconButton',
    style
  } = _ref;
  const [show, setShow] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  window.addEventListener('click', () => setShow(false));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'bDevice',
    style: style
  }, !show && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    title: device[0].toUpperCase() + device.slice(1),
    onClick: event => {
      setShow(true);
      event.stopPropagation();
    }
  }, device == 'desktop' ? _utils_icons__WEBPACK_IMPORTED_MODULE_2__.desktopIcon : device == 'tablet' ? _utils_icons__WEBPACK_IMPORTED_MODULE_2__.tabletIcon : _utils_icons__WEBPACK_IMPORTED_MODULE_2__.mobileIcon), show && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'bDevicePopup'
  }, [{
    value: 'desktop',
    icon: _utils_icons__WEBPACK_IMPORTED_MODULE_2__.desktopIcon
  }, {
    value: 'tablet',
    icon: _utils_icons__WEBPACK_IMPORTED_MODULE_2__.tabletIcon
  }, {
    value: 'mobile',
    icon: _utils_icons__WEBPACK_IMPORTED_MODULE_2__.mobileIcon
  }].map(_ref2 => {
    let {
      icon,
      value
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: value,
      className: className,
      title: value[0].toUpperCase() + value.slice(1),
      onClick: () => {
        onChange(value);
        setShow(false);
      }
    }, icon);
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (BDevice);

/***/ }),

/***/ "../Components/Background/Background.js":
/*!**********************************************!*\
  !*** ../Components/Background/Background.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "../Components/Background/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Background' (String)
 * @props background (required): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 */



const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker;



const Background = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'bplugins'),
    value = {},
    onChange,
    defaults = {},
    isSolid = true,
    isGradient = true,
    isImage = true
  } = props;
  const defaultVal = {
    type: 'solid',
    color: '#000000b3',
    gradient: 'linear-gradient(135deg, #4527a4, #8344c5)',
    image: {},
    position: 'center center',
    attachment: 'initial',
    repeat: 'no-repeat',
    size: 'cover',
    overlayColor: '#000000b3'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BtnGroup, {
      value: getValue('type'),
      onChange: val => setValue('type', val),
      options: false === isSolid ? _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes.filter(b => b.value !== 'solid') : false === isGradient ? _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes.filter(b => b.value !== 'gradient') : false === isImage ? _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes.filter(b => b.value !== 'image') : _options__WEBPACK_IMPORTED_MODULE_5__.bgTypes
    })), 'solid' === getValue('type') && isSolid && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), 'gradient' === getValue('type') && isGradient && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
      className: "mt20",
      value: getValue('gradient'),
      onChange: val => setValue('gradient', val),
      gradients: _utils_options__WEBPACK_IMPORTED_MODULE_4__.gradients
    }), 'image' === getValue('type') && isImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: "mb5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.InlineDetailMediaUpload, {
      types: ['image'],
      value: getValue('image'),
      onChange: val => setValue('image', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalAlignmentMatrixControl, {
      value: getValue('position'),
      onChange: val => setValue('position', val)
    }), value?.position && value?.position !== getDefault('position') && resetValue('position')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attachment:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('attachment'),
      onChange: val => setValue('attachment', val),
      options: _options__WEBPACK_IMPORTED_MODULE_5__.attachments
    }), value?.attachments && value?.attachments !== getDefault('attachments') && resetValue('attachments')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('repeat'),
      onChange: val => setValue('repeat', val),
      options: _options__WEBPACK_IMPORTED_MODULE_5__.repeats
    }), value?.repeat && value?.repeat !== getDefault('repeat') && resetValue('repeat')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('size'),
      onChange: val => setValue('size', val),
      options: _options__WEBPACK_IMPORTED_MODULE_5__.sizes
    }), value?.size && value?.size !== getDefault('size') && resetValue('size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overlay Color:', 'bplugins'),
      value: getValue('overlayColor'),
      onChange: val => setValue('overlayColor', val),
      defaultColor: getDefault('overlayColor')
    })))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "../Components/Background/options.js":
/*!*******************************************!*\
  !*** ../Components/Background/options.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachments": function() { return /* binding */ attachments; },
/* harmony export */   "bgTypes": function() { return /* binding */ bgTypes; },
/* harmony export */   "repeats": function() { return /* binding */ repeats; },
/* harmony export */   "sizes": function() { return /* binding */ sizes; }
/* harmony export */ });
const bgTypes = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Gradient',
  value: 'gradient'
}, {
  label: 'Image',
  value: 'image'
}];
const attachments = [{
  label: 'Initial',
  value: 'initial'
}, {
  label: 'Scroll',
  value: 'scroll'
}, {
  label: 'Fixed',
  value: 'fixed'
}, {
  label: 'Local',
  value: 'local'
}];
const repeats = [{
  label: 'No Repeat',
  value: 'no-repeat'
}, {
  label: 'Repeat',
  value: 'repeat'
}, {
  label: 'Repeat X',
  value: 'repeat-x'
}, {
  label: 'Repeat Y',
  value: 'repeat-y'
}];
const sizes = [{
  label: 'Cover',
  value: 'cover'
}, {
  label: 'Auto',
  value: 'auto'
}, {
  label: 'Contain',
  value: 'contain'
}];

/***/ }),

/***/ "../Components/BorderControl/BorderControl.js":
/*!****************************************************!*\
  !*** ../Components/BorderControl/BorderControl.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Border Settings' (String)
 * @props border: { width, style, color, side, radius } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { width, style, color, side, radius } (Object)
 * @return Border Properties (Object)
 */





const BorderControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border:', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    width: '0px',
    style: 'solid',
    color: '#0000',
    side: 'all',
    radius: '0px'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width:', 'bplugins'),
      labelPosition: "left",
      value: getValue('width'),
      onChange: val => setValue('width', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)()]
    }), value?.width && value?.width !== getDefault('width') && resetValue('width')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('style'),
      onChange: val => setValue('style', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.borderStyles
    }), value?.style && value?.style !== getDefault('style') && resetValue('style')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sides:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('side'),
      onChange: val => setValue('side', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.sides
    }), value?.side && value?.side !== getDefault('side') && resetValue('side')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Radius:', 'bplugins'),
      labelPosition: "left",
      value: getValue('radius'),
      onChange: val => setValue('radius', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(50), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.perUnit)(50), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(3), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)(3)],
      isResetValueOnUnitChange: true
    }), value?.radius && value?.radius !== getDefault('radius') && resetValue('radius')))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BorderControl);

/***/ }),

/***/ "../Components/BtnGroup/BtnGroup.js":
/*!******************************************!*\
  !*** ../Components/BtnGroup/BtnGroup.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * @props className (optional): 'mt20' (String)
 * @props value (String)
 * @props onChange: (Function)
 * @return Value (String)
 */


const BtnGroup = props => {
  const {
    className,
    value,
    onChange,
    options,
    isIcon = false,
    isTextIcon = false,
    size
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    className: `bPlBtnGroup ${className || null}`
  }, Object.values(options).map(obj => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    key: obj.value,
    text: obj.label,
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: isIcon ? obj?.icon : null,
    isPrimary: value === obj.value,
    "aria-pressed": value === obj.value,
    isSmall: size === 'small' ? true : false,
    isMedium: size === 'small' ? false : true,
    onClick: () => onChange(obj.value, obj.def && obj.def)
  }, isTextIcon ? obj.icon : isIcon ? '' : obj.label))));
};
/* harmony default export */ __webpack_exports__["default"] = (BtnGroup);

/***/ }),

/***/ "../Components/ColorControl/ColorControl.js":
/*!**************************************************!*\
  !*** ../Components/ColorControl/ColorControl.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColorControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorControl.scss */ "../Components/ColorControl/ColorControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Color' (String)
 * @props value: value of color (String)
 * @props defaultColor: default color for reset color
 * @props onChange: (Function)
 * @props disableAlpha: Disable alpha of color (Boolean)
 * @return color (String)
 */





const ColorControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
    value,
    onChange,
    defaultColor,
    disableAlpha
  } = props;
  const themeColors = wp.data.select('core/block-editor').getSettings().colors;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer bPlColor",
    contentClassName: "bPlDropdownPopover bPlColorPopover",
    position: "top center",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "bPlColorButtonContainer"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "bPlColorButton",
        onClick: onToggle,
        "aria-expanded": isOpen,
        style: {
          backgroundColor: value || 'transparent'
        }
      })), defaultColor && defaultColor != value && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "bPlResetVal",
        icon: "image-rotate",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'bplugins'),
        onClick: () => onChange(defaultColor)
      }));
    },
    renderContent: _ref2 => {
      let {
        isOpen,
        onClose
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        className: "bPlColorControl",
        color: value || '',
        onChangeComplete: c => {
          const alphaToHex = disableAlpha ? '' : ('0' + Math.round(c.rgb.a * 255).toString(16)).slice(-2);
          onChange(c.hex + alphaToHex);
        },
        disableAlpha: disableAlpha
      }), themeColors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "themeColors"
      }, themeColors.map((_ref3, index) => {
        let {
          color
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bColorButtonContainer",
          key: index
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "bColorButton",
          onClick: () => {
            onChange(color);
            onClose;
          },
          "aria-expanded": isOpen,
          style: {
            backgroundColor: value ? color : 'transparent'
          }
        }));
      })));
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "../Components/ColorsControl/ColorsControl.js":
/*!****************************************************!*\
  !*** ../Components/ColorsControl/ColorsControl.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Typography' (String)
 * @props colors (required): { color, bgType, bg, gradient } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { color, bgType, bg, gradient } (Object)
 */



const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker;

// Variables


const ColorsControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors:', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    color: '#333',
    bgType: 'solid',
    bg: '#0000',
    gradient: 'linear-gradient(135deg, #4527a4, #8344c5)'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: ""
  }, label, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: getValue('color')
  }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: getValue('gradient' === getValue('bgType') ? 'gradient' : 'bg')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BtnGroup, {
      value: getValue('bgType'),
      onChange: val => setValue('bgType', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.bgTypes,
      size: "small"
    })), 'gradient' === getValue('bgType') ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
      value: getValue('gradient'),
      onChange: val => setValue('gradient', val),
      gradients: _utils_options__WEBPACK_IMPORTED_MODULE_4__.gradients
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color:', 'bplugins'),
      value: getValue('bg'),
      onChange: val => setValue('bg', val),
      defaultColor: getDefault('bg')
    }))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ColorsControl);

/***/ }),

/***/ "../Components/Helper/getCSS.js":
/*!**************************************!*\
  !*** ../Components/Helper/getCSS.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBackgroundCSS": function() { return /* binding */ getBackgroundCSS; },
/* harmony export */   "getBorderCSS": function() { return /* binding */ getBorderCSS; },
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
  } = bg;
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
  } = border;
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : borderSideCheck('top') ? `border-top: ${borderCSS};` : ''}
		${noWidth ? '' : borderSideCheck('right') ? `border-right: ${borderCSS};` : ''}
		${noWidth ? '' : borderSideCheck('bottom') ? `border-bottom: ${borderCSS};` : ''}
		${noWidth ? '' : borderSideCheck('left') ? `border-left: ${borderCSS};` : ''}
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
  } = colors;
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
  } = icon;
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
    } = item;
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset || ''} ${vOffset || ''} ${blur || ''}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color || ''}${isComa}` : `${offsetBlur} ${spreed || ''} ${color || ''} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator;
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
  } = shadow;
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
  } = space;
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = function (typo) {
  let isFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = 15,
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo;
  const generateCss = (value, cssProperty) => !value ? '' : `${cssProperty}: ${value};`;
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${generateCss(fontWeight, 'font-weight')}
		${!fontSize ? '' : `font-size: ${fontSize}px;`}
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
    styles: styles.replace(/\s+/g, ' ').trim(),
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`
  };
};

/***/ }),

/***/ "../Components/IconControl/IconControl.js":
/*!************************************************!*\
  !*** ../Components/IconControl/IconControl.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconControl.scss */ "../Components/IconControl/IconControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _iconLists6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iconLists6 */ "../Components/IconControl/iconLists6.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Select Icon' (String)
 * @props icon (required): { class, fontSize, color } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { class, fontSize, color } (Object)
 */




const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker;




const IconControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Icon:', 'bplugins'),
    value = {},
    onChange,
    defaults = {},
    isSize = true,
    isColor = true
  } = props;
  const defaultVal = {
    class: '',
    name: '',
    fontSize: 16,
    colorType: 'solid',
    color: 'inherit',
    gradient: 'linear-gradient(135deg, #4527a4, #8344c5)'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });

  // Font family searching
  const [query, setQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isSearching, setIsSearching] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const searchIcons = _iconLists6__WEBPACK_IMPORTED_MODULE_6__["default"].filter(_ref => {
    let {
      name
    } = _ref;
    return name.replace(/-/g, ' ').toLowerCase().includes(query.toLowerCase());
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlIconTitle ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: "mt0 mb0"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: value?.class
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bPlIconSelect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "search",
    value: query,
    onClick: () => setIsSearching(!isSearching),
    placeholder: getValue('name')?.replace(/-/g, ' ') || 'Search & Select Icon',
    onChange: e => setQuery(e.target.value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `dashicon dashicons dashicons-${isSearching ? 'arrow-up' : 'arrow-down'}`,
    onClick: () => setIsSearching(!isSearching)
  }), isSearching && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bPlIconLists"
  }, searchIcons?.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    key: item?.class,
    text: item?.name?.replace(/-/g, ' '),
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    onClick: () => {
      onChange({
        ...value,
        ['class']: item?.class,
        ['name']: item?.name
      });
      setQuery('');
      setIsSearching(false);
    },
    className: item?.class
  }))))), isSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: getValue('fontSize'),
    onChange: val => setValue('fontSize', val),
    min: 0,
    max: 400,
    step: 1,
    allowReset: true,
    resetFallbackValue: getDefault('fontSize'),
    initialPosition: getDefault('fontSize')
  })), isColor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Color Type:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.BtnGroup, {
    value: getValue('colorType'),
    onChange: val => setValue('colorType', val),
    options: _utils_options__WEBPACK_IMPORTED_MODULE_5__.bgTypes,
    size: "small"
  })), 'gradient' === getValue('colorType') ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
    value: getValue('gradient'),
    onChange: val => setValue('gradient', val),
    gradients: _utils_options__WEBPACK_IMPORTED_MODULE_5__.gradients
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.BColor, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Color:', 'bplugins'),
    value: getValue('color'),
    onChange: val => setValue('color', val),
    defaultColor: getDefault('color')
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (IconControl);

/***/ }),

/***/ "../Components/IconControl/iconLists6.js":
/*!***********************************************!*\
  !*** ../Components/IconControl/iconLists6.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'No Ion',
  class: '',
  name: 'no-icon'
}, {
  title: '42 Group',
  class: 'fab fa-42-group',
  name: '42-group'
}, {
  title: '500Px',
  class: 'fab fa-500px',
  name: '500px'
}, {
  title: 'Accessible Icon',
  class: 'fab fa-accessible-icon',
  name: 'accessible-icon'
}, {
  title: 'Accusoft',
  class: 'fab fa-accusoft',
  name: 'accusoft'
}, {
  title: 'Adn',
  class: 'fab fa-adn',
  name: 'adn'
}, {
  title: 'Adversal',
  class: 'fab fa-adversal',
  name: 'adversal'
}, {
  title: 'Affiliatetheme',
  class: 'fab fa-affiliatetheme',
  name: 'affiliatetheme'
}, {
  title: 'Airbnb',
  class: 'fab fa-airbnb',
  name: 'airbnb'
}, {
  title: 'Algolia',
  class: 'fab fa-algolia',
  name: 'algolia'
}, {
  title: 'Alipay',
  class: 'fab fa-alipay',
  name: 'alipay'
}, {
  title: 'Amazon Pay',
  class: 'fab fa-amazon-pay',
  name: 'amazon-pay'
}, {
  title: 'Amazon',
  class: 'fab fa-amazon',
  name: 'amazon'
}, {
  title: 'Amilia',
  class: 'fab fa-amilia',
  name: 'amilia'
}, {
  title: 'Android',
  class: 'fab fa-android',
  name: 'android'
}, {
  title: 'Angellist',
  class: 'fab fa-angellist',
  name: 'angellist'
}, {
  title: 'Angrycreative',
  class: 'fab fa-angrycreative',
  name: 'angrycreative'
}, {
  title: 'Angular',
  class: 'fab fa-angular',
  name: 'angular'
}, {
  title: 'App Store Ios',
  class: 'fab fa-app-store-ios',
  name: 'app-store-ios'
}, {
  title: 'App Store',
  class: 'fab fa-app-store',
  name: 'app-store'
}, {
  title: 'Apper',
  class: 'fab fa-apper',
  name: 'apper'
}, {
  title: 'Apple Pay',
  class: 'fab fa-apple-pay',
  name: 'apple-pay'
}, {
  title: 'Apple',
  class: 'fab fa-apple',
  name: 'apple'
}, {
  title: 'Artstation',
  class: 'fab fa-artstation',
  name: 'artstation'
}, {
  title: 'Asymmetrik',
  class: 'fab fa-asymmetrik',
  name: 'asymmetrik'
}, {
  title: 'Atlassian',
  class: 'fab fa-atlassian',
  name: 'atlassian'
}, {
  title: 'Audible',
  class: 'fab fa-audible',
  name: 'audible'
}, {
  title: 'Autoprefixer',
  class: 'fab fa-autoprefixer',
  name: 'autoprefixer'
}, {
  title: 'Avianex',
  class: 'fab fa-avianex',
  name: 'avianex'
}, {
  title: 'Aviato',
  class: 'fab fa-aviato',
  name: 'aviato'
}, {
  title: 'Aws',
  class: 'fab fa-aws',
  name: 'aws'
}, {
  title: 'Bandcamp',
  class: 'fab fa-bandcamp',
  name: 'bandcamp'
}, {
  title: 'Battle Net',
  class: 'fab fa-battle-net',
  name: 'battle-net'
}, {
  title: 'Behance',
  class: 'fab fa-behance',
  name: 'behance'
}, {
  title: 'Bilibili',
  class: 'fab fa-bilibili',
  name: 'bilibili'
}, {
  title: 'Bimobject',
  class: 'fab fa-bimobject',
  name: 'bimobject'
}, {
  title: 'Bitbucket',
  class: 'fab fa-bitbucket',
  name: 'bitbucket'
}, {
  title: 'Bitcoin',
  class: 'fab fa-bitcoin',
  name: 'bitcoin'
}, {
  title: 'Bity',
  class: 'fab fa-bity',
  name: 'bity'
}, {
  title: 'Black Tie',
  class: 'fab fa-black-tie',
  name: 'black-tie'
}, {
  title: 'Blackberry',
  class: 'fab fa-blackberry',
  name: 'blackberry'
}, {
  title: 'Blogger B',
  class: 'fab fa-blogger-b',
  name: 'blogger-b'
}, {
  title: 'Blogger',
  class: 'fab fa-blogger',
  name: 'blogger'
}, {
  title: 'Bluetooth B',
  class: 'fab fa-bluetooth-b',
  name: 'bluetooth-b'
}, {
  title: 'Bluetooth',
  class: 'fab fa-bluetooth',
  name: 'bluetooth'
}, {
  title: 'Bootstrap',
  class: 'fab fa-bootstrap',
  name: 'bootstrap'
}, {
  title: 'Bots',
  class: 'fab fa-bots',
  name: 'bots'
}, {
  title: 'Btc',
  class: 'fab fa-btc',
  name: 'btc'
}, {
  title: 'Buffer',
  class: 'fab fa-buffer',
  name: 'buffer'
}, {
  title: 'Buromobelexperte',
  class: 'fab fa-buromobelexperte',
  name: 'buromobelexperte'
}, {
  title: 'Buy N Large',
  class: 'fab fa-buy-n-large',
  name: 'buy-n-large'
}, {
  title: 'Buysellads',
  class: 'fab fa-buysellads',
  name: 'buysellads'
}, {
  title: 'Canadian Maple Leaf',
  class: 'fab fa-canadian-maple-leaf',
  name: 'canadian-maple-leaf'
}, {
  title: 'Cc Amazon Pay',
  class: 'fab fa-cc-amazon-pay',
  name: 'cc-amazon-pay'
}, {
  title: 'Cc Amex',
  class: 'fab fa-cc-amex',
  name: 'cc-amex'
}, {
  title: 'Cc Apple Pay',
  class: 'fab fa-cc-apple-pay',
  name: 'cc-apple-pay'
}, {
  title: 'Cc Diners Club',
  class: 'fab fa-cc-diners-club',
  name: 'cc-diners-club'
}, {
  title: 'Cc Discover',
  class: 'fab fa-cc-discover',
  name: 'cc-discover'
}, {
  title: 'Cc Jcb',
  class: 'fab fa-cc-jcb',
  name: 'cc-jcb'
}, {
  title: 'Cc Mastercard',
  class: 'fab fa-cc-mastercard',
  name: 'cc-mastercard'
}, {
  title: 'Cc Paypal',
  class: 'fab fa-cc-paypal',
  name: 'cc-paypal'
}, {
  title: 'Cc Stripe',
  class: 'fab fa-cc-stripe',
  name: 'cc-stripe'
}, {
  title: 'Cc Visa',
  class: 'fab fa-cc-visa',
  name: 'cc-visa'
}, {
  title: 'Centercode',
  class: 'fab fa-centercode',
  name: 'centercode'
}, {
  title: 'Centos',
  class: 'fab fa-centos',
  name: 'centos'
}, {
  title: 'Chrome',
  class: 'fab fa-chrome',
  name: 'chrome'
}, {
  title: 'Chromecast',
  class: 'fab fa-chromecast',
  name: 'chromecast'
}, {
  title: 'Cloudflare',
  class: 'fab fa-cloudflare',
  name: 'cloudflare'
}, {
  title: 'Cloudscale',
  class: 'fab fa-cloudscale',
  name: 'cloudscale'
}, {
  title: 'Cloudsmith',
  class: 'fab fa-cloudsmith',
  name: 'cloudsmith'
}, {
  title: 'Cloudversify',
  class: 'fab fa-cloudversify',
  name: 'cloudversify'
}, {
  title: 'Cmplid',
  class: 'fab fa-cmplid',
  name: 'cmplid'
}, {
  title: 'Codepen',
  class: 'fab fa-codepen',
  name: 'codepen'
}, {
  title: 'Codiepie',
  class: 'fab fa-codiepie',
  name: 'codiepie'
}, {
  title: 'Confluence',
  class: 'fab fa-confluence',
  name: 'confluence'
}, {
  title: 'Connectdevelop',
  class: 'fab fa-connectdevelop',
  name: 'connectdevelop'
}, {
  title: 'Contao',
  class: 'fab fa-contao',
  name: 'contao'
}, {
  title: 'Cotton Bureau',
  class: 'fab fa-cotton-bureau',
  name: 'cotton-bureau'
}, {
  title: 'Cpanel',
  class: 'fab fa-cpanel',
  name: 'cpanel'
}, {
  title: 'Creative Commons By',
  class: 'fab fa-creative-commons-by',
  name: 'creative-commons-by'
}, {
  title: 'Creative Commons Nc Eu',
  class: 'fab fa-creative-commons-nc-eu',
  name: 'creative-commons-nc-eu'
}, {
  title: 'Creative Commons Nc Jp',
  class: 'fab fa-creative-commons-nc-jp',
  name: 'creative-commons-nc-jp'
}, {
  title: 'Creative Commons Nc',
  class: 'fab fa-creative-commons-nc',
  name: 'creative-commons-nc'
}, {
  title: 'Creative Commons Nd',
  class: 'fab fa-creative-commons-nd',
  name: 'creative-commons-nd'
}, {
  title: 'Creative Commons Pd Alt',
  class: 'fab fa-creative-commons-pd-alt',
  name: 'creative-commons-pd-alt'
}, {
  title: 'Creative Commons Pd',
  class: 'fab fa-creative-commons-pd',
  name: 'creative-commons-pd'
}, {
  title: 'Creative Commons Remix',
  class: 'fab fa-creative-commons-remix',
  name: 'creative-commons-remix'
}, {
  title: 'Creative Commons Sa',
  class: 'fab fa-creative-commons-sa',
  name: 'creative-commons-sa'
}, {
  title: 'Creative Commons Sampling Plus',
  class: 'fab fa-creative-commons-sampling-plus',
  name: 'creative-commons-sampling-plus'
}, {
  title: 'Creative Commons Sampling',
  class: 'fab fa-creative-commons-sampling',
  name: 'creative-commons-sampling'
}, {
  title: 'Creative Commons Share',
  class: 'fab fa-creative-commons-share',
  name: 'creative-commons-share'
}, {
  title: 'Creative Commons Zero',
  class: 'fab fa-creative-commons-zero',
  name: 'creative-commons-zero'
}, {
  title: 'Creative Commons',
  class: 'fab fa-creative-commons',
  name: 'creative-commons'
}, {
  title: 'Critical Role',
  class: 'fab fa-critical-role',
  name: 'critical-role'
}, {
  title: 'Css3 Alt',
  class: 'fab fa-css3-alt',
  name: 'css3-alt'
}, {
  title: 'Css3',
  class: 'fab fa-css3',
  name: 'css3'
}, {
  title: 'Cuttlefish',
  class: 'fab fa-cuttlefish',
  name: 'cuttlefish'
}, {
  title: 'D And D Beyond',
  class: 'fab fa-d-and-d-beyond',
  name: 'd-and-d-beyond'
}, {
  title: 'D And D',
  class: 'fab fa-d-and-d',
  name: 'd-and-d'
}, {
  title: 'Dailymotion',
  class: 'fab fa-dailymotion',
  name: 'dailymotion'
}, {
  title: 'Dashcube',
  class: 'fab fa-dashcube',
  name: 'dashcube'
}, {
  title: 'Deezer',
  class: 'fab fa-deezer',
  name: 'deezer'
}, {
  title: 'Delicious',
  class: 'fab fa-delicious',
  name: 'delicious'
}, {
  title: 'Deploydog',
  class: 'fab fa-deploydog',
  name: 'deploydog'
}, {
  title: 'Deskpro',
  class: 'fab fa-deskpro',
  name: 'deskpro'
}, {
  title: 'Dev',
  class: 'fab fa-dev',
  name: 'dev'
}, {
  title: 'Deviantart',
  class: 'fab fa-deviantart',
  name: 'deviantart'
}, {
  title: 'Dhl',
  class: 'fab fa-dhl',
  name: 'dhl'
}, {
  title: 'Diaspora',
  class: 'fab fa-diaspora',
  name: 'diaspora'
}, {
  title: 'Digg',
  class: 'fab fa-digg',
  name: 'digg'
}, {
  title: 'Digital Ocean',
  class: 'fab fa-digital-ocean',
  name: 'digital-ocean'
}, {
  title: 'Discord',
  class: 'fab fa-discord',
  name: 'discord'
}, {
  title: 'Discourse',
  class: 'fab fa-discourse',
  name: 'discourse'
}, {
  title: 'Dochub',
  class: 'fab fa-dochub',
  name: 'dochub'
}, {
  title: 'Docker',
  class: 'fab fa-docker',
  name: 'docker'
}, {
  title: 'Draft2digital',
  class: 'fab fa-draft2digital',
  name: 'draft2digital'
}, {
  title: 'Dribbble',
  class: 'fab fa-dribbble',
  name: 'dribbble'
}, {
  title: 'Dropbox',
  class: 'fab fa-dropbox',
  name: 'dropbox'
}, {
  title: 'Drupal',
  class: 'fab fa-drupal',
  name: 'drupal'
}, {
  title: 'Dyalog',
  class: 'fab fa-dyalog',
  name: 'dyalog'
}, {
  title: 'Earlybirds',
  class: 'fab fa-earlybirds',
  name: 'earlybirds'
}, {
  title: 'Ebay',
  class: 'fab fa-ebay',
  name: 'ebay'
}, {
  title: 'Edge Legacy',
  class: 'fab fa-edge-legacy',
  name: 'edge-legacy'
}, {
  title: 'Edge',
  class: 'fab fa-edge',
  name: 'edge'
}, {
  title: 'Elementor',
  class: 'fab fa-elementor',
  name: 'elementor'
}, {
  title: 'Ello',
  class: 'fab fa-ello',
  name: 'ello'
}, {
  title: 'Ember',
  class: 'fab fa-ember',
  name: 'ember'
}, {
  title: 'Empire',
  class: 'fab fa-empire',
  name: 'empire'
}, {
  title: 'Envira',
  class: 'fab fa-envira',
  name: 'envira'
}, {
  title: 'Erlang',
  class: 'fab fa-erlang',
  name: 'erlang'
}, {
  title: 'Ethereum',
  class: 'fab fa-ethereum',
  name: 'ethereum'
}, {
  title: 'Etsy',
  class: 'fab fa-etsy',
  name: 'etsy'
}, {
  title: 'Evernote',
  class: 'fab fa-evernote',
  name: 'evernote'
}, {
  title: 'Expeditedssl',
  class: 'fab fa-expeditedssl',
  name: 'expeditedssl'
}, {
  title: 'Facebook F',
  class: 'fab fa-facebook-f',
  name: 'facebook-f'
}, {
  title: 'Facebook Messenger',
  class: 'fab fa-facebook-messenger',
  name: 'facebook-messenger'
}, {
  title: 'Facebook',
  class: 'fab fa-facebook',
  name: 'facebook'
}, {
  title: 'Fantasy Flight Games',
  class: 'fab fa-fantasy-flight-games',
  name: 'fantasy-flight-games'
}, {
  title: 'Fedex',
  class: 'fab fa-fedex',
  name: 'fedex'
}, {
  title: 'Fedora',
  class: 'fab fa-fedora',
  name: 'fedora'
}, {
  title: 'Figma',
  class: 'fab fa-figma',
  name: 'figma'
}, {
  title: 'Firefox Browser',
  class: 'fab fa-firefox-browser',
  name: 'firefox-browser'
}, {
  title: 'Firefox',
  class: 'fab fa-firefox',
  name: 'firefox'
}, {
  title: 'First Order Alt',
  class: 'fab fa-first-order-alt',
  name: 'first-order-alt'
}, {
  title: 'First Order',
  class: 'fab fa-first-order',
  name: 'first-order'
}, {
  title: 'Firstdraft',
  class: 'fab fa-firstdraft',
  name: 'firstdraft'
}, {
  title: 'Flickr',
  class: 'fab fa-flickr',
  name: 'flickr'
}, {
  title: 'Flipboard',
  class: 'fab fa-flipboard',
  name: 'flipboard'
}, {
  title: 'Fly',
  class: 'fab fa-fly',
  name: 'fly'
}, {
  title: 'Font Awesome',
  class: 'fab fa-font-awesome',
  name: 'font-awesome'
}, {
  title: 'Fonticons Fi',
  class: 'fab fa-fonticons-fi',
  name: 'fonticons-fi'
}, {
  title: 'Fonticons',
  class: 'fab fa-fonticons',
  name: 'fonticons'
}, {
  title: 'Fort Awesome Alt',
  class: 'fab fa-fort-awesome-alt',
  name: 'fort-awesome-alt'
}, {
  title: 'Fort Awesome',
  class: 'fab fa-fort-awesome',
  name: 'fort-awesome'
}, {
  title: 'Forumbee',
  class: 'fab fa-forumbee',
  name: 'forumbee'
}, {
  title: 'Foursquare',
  class: 'fab fa-foursquare',
  name: 'foursquare'
}, {
  title: 'Free Code Camp',
  class: 'fab fa-free-code-camp',
  name: 'free-code-camp'
}, {
  title: 'Freebsd',
  class: 'fab fa-freebsd',
  name: 'freebsd'
}, {
  title: 'Fulcrum',
  class: 'fab fa-fulcrum',
  name: 'fulcrum'
}, {
  title: 'Galactic Republic',
  class: 'fab fa-galactic-republic',
  name: 'galactic-republic'
}, {
  title: 'Galactic Senate',
  class: 'fab fa-galactic-senate',
  name: 'galactic-senate'
}, {
  title: 'Get Pocket',
  class: 'fab fa-get-pocket',
  name: 'get-pocket'
}, {
  title: 'Gg Circle',
  class: 'fab fa-gg-circle',
  name: 'gg-circle'
}, {
  title: 'Gg',
  class: 'fab fa-gg',
  name: 'gg'
}, {
  title: 'Git Alt',
  class: 'fab fa-git-alt',
  name: 'git-alt'
}, {
  title: 'Git',
  class: 'fab fa-git',
  name: 'git'
}, {
  title: 'Github Alt',
  class: 'fab fa-github-alt',
  name: 'github-alt'
}, {
  title: 'Github',
  class: 'fab fa-github',
  name: 'github'
}, {
  title: 'Gitkraken',
  class: 'fab fa-gitkraken',
  name: 'gitkraken'
}, {
  title: 'Gitlab',
  class: 'fab fa-gitlab',
  name: 'gitlab'
}, {
  title: 'Gitter',
  class: 'fab fa-gitter',
  name: 'gitter'
}, {
  title: 'Glide G',
  class: 'fab fa-glide-g',
  name: 'glide-g'
}, {
  title: 'Glide',
  class: 'fab fa-glide',
  name: 'glide'
}, {
  title: 'Gofore',
  class: 'fab fa-gofore',
  name: 'gofore'
}, {
  title: 'Golang',
  class: 'fab fa-golang',
  name: 'golang'
}, {
  title: 'Goodreads G',
  class: 'fab fa-goodreads-g',
  name: 'goodreads-g'
}, {
  title: 'Goodreads',
  class: 'fab fa-goodreads',
  name: 'goodreads'
}, {
  title: 'Google Drive',
  class: 'fab fa-google-drive',
  name: 'google-drive'
}, {
  title: 'Google Pay',
  class: 'fab fa-google-pay',
  name: 'google-pay'
}, {
  title: 'Google Play',
  class: 'fab fa-google-play',
  name: 'google-play'
}, {
  title: 'Google Plus G',
  class: 'fab fa-google-plus-g',
  name: 'google-plus-g'
}, {
  title: 'Google Plus',
  class: 'fab fa-google-plus',
  name: 'google-plus'
}, {
  title: 'Google Wallet',
  class: 'fab fa-google-wallet',
  name: 'google-wallet'
}, {
  title: 'Google',
  class: 'fab fa-google',
  name: 'google'
}, {
  title: 'Gratipay',
  class: 'fab fa-gratipay',
  name: 'gratipay'
}, {
  title: 'Grav',
  class: 'fab fa-grav',
  name: 'grav'
}, {
  title: 'Gripfire',
  class: 'fab fa-gripfire',
  name: 'gripfire'
}, {
  title: 'Grunt',
  class: 'fab fa-grunt',
  name: 'grunt'
}, {
  title: 'Guilded',
  class: 'fab fa-guilded',
  name: 'guilded'
}, {
  title: 'Gulp',
  class: 'fab fa-gulp',
  name: 'gulp'
}, {
  title: 'Hacker News',
  class: 'fab fa-hacker-news',
  name: 'hacker-news'
}, {
  title: 'Hackerrank',
  class: 'fab fa-hackerrank',
  name: 'hackerrank'
}, {
  title: 'Hashnode',
  class: 'fab fa-hashnode',
  name: 'hashnode'
}, {
  title: 'Hips',
  class: 'fab fa-hips',
  name: 'hips'
}, {
  title: 'Hire A Helper',
  class: 'fab fa-hire-a-helper',
  name: 'hire-a-helper'
}, {
  title: 'Hive',
  class: 'fab fa-hive',
  name: 'hive'
}, {
  title: 'Hooli',
  class: 'fab fa-hooli',
  name: 'hooli'
}, {
  title: 'Hornbill',
  class: 'fab fa-hornbill',
  name: 'hornbill'
}, {
  title: 'Hotjar',
  class: 'fab fa-hotjar',
  name: 'hotjar'
}, {
  title: 'Houzz',
  class: 'fab fa-houzz',
  name: 'houzz'
}, {
  title: 'Html5',
  class: 'fab fa-html5',
  name: 'html5'
}, {
  title: 'Hubspot',
  class: 'fab fa-hubspot',
  name: 'hubspot'
}, {
  title: 'Ideal',
  class: 'fab fa-ideal',
  name: 'ideal'
}, {
  title: 'Imdb',
  class: 'fab fa-imdb',
  name: 'imdb'
}, {
  title: 'Instagram',
  class: 'fab fa-instagram',
  name: 'instagram'
}, {
  title: 'Instalod',
  class: 'fab fa-instalod',
  name: 'instalod'
}, {
  title: 'Intercom',
  class: 'fab fa-intercom',
  name: 'intercom'
}, {
  title: 'Internet Explorer',
  class: 'fab fa-internet-explorer',
  name: 'internet-explorer'
}, {
  title: 'Invision',
  class: 'fab fa-invision',
  name: 'invision'
}, {
  title: 'Ioxhost',
  class: 'fab fa-ioxhost',
  name: 'ioxhost'
}, {
  title: 'Itch Io',
  class: 'fab fa-itch-io',
  name: 'itch-io'
}, {
  title: 'Itunes Note',
  class: 'fab fa-itunes-note',
  name: 'itunes-note'
}, {
  title: 'Itunes',
  class: 'fab fa-itunes',
  name: 'itunes'
}, {
  title: 'Java',
  class: 'fab fa-java',
  name: 'java'
}, {
  title: 'Jedi Order',
  class: 'fab fa-jedi-order',
  name: 'jedi-order'
}, {
  title: 'Jenkins',
  class: 'fab fa-jenkins',
  name: 'jenkins'
}, {
  title: 'Jira',
  class: 'fab fa-jira',
  name: 'jira'
}, {
  title: 'Joget',
  class: 'fab fa-joget',
  name: 'joget'
}, {
  title: 'Joomla',
  class: 'fab fa-joomla',
  name: 'joomla'
}, {
  title: 'Js',
  class: 'fab fa-js',
  name: 'js'
}, {
  title: 'Jsfiddle',
  class: 'fab fa-jsfiddle',
  name: 'jsfiddle'
}, {
  title: 'Kaggle',
  class: 'fab fa-kaggle',
  name: 'kaggle'
}, {
  title: 'Keybase',
  class: 'fab fa-keybase',
  name: 'keybase'
}, {
  title: 'Keycdn',
  class: 'fab fa-keycdn',
  name: 'keycdn'
}, {
  title: 'Kickstarter K',
  class: 'fab fa-kickstarter-k',
  name: 'kickstarter-k'
}, {
  title: 'Kickstarter',
  class: 'fab fa-kickstarter',
  name: 'kickstarter'
}, {
  title: 'Korvue',
  class: 'fab fa-korvue',
  name: 'korvue'
}, {
  title: 'Laravel',
  class: 'fab fa-laravel',
  name: 'laravel'
}, {
  title: 'Lastfm',
  class: 'fab fa-lastfm',
  name: 'lastfm'
}, {
  title: 'Leanpub',
  class: 'fab fa-leanpub',
  name: 'leanpub'
}, {
  title: 'Less',
  class: 'fab fa-less',
  name: 'less'
}, {
  title: 'Line',
  class: 'fab fa-line',
  name: 'line'
}, {
  title: 'Linkedin In',
  class: 'fab fa-linkedin-in',
  name: 'linkedin-in'
}, {
  title: 'Linkedin',
  class: 'fab fa-linkedin',
  name: 'linkedin'
}, {
  title: 'Linode',
  class: 'fab fa-linode',
  name: 'linode'
}, {
  title: 'Linux',
  class: 'fab fa-linux',
  name: 'linux'
}, {
  title: 'Lyft',
  class: 'fab fa-lyft',
  name: 'lyft'
}, {
  title: 'Magento',
  class: 'fab fa-magento',
  name: 'magento'
}, {
  title: 'Mailchimp',
  class: 'fab fa-mailchimp',
  name: 'mailchimp'
}, {
  title: 'Mandalorian',
  class: 'fab fa-mandalorian',
  name: 'mandalorian'
}, {
  title: 'Markdown',
  class: 'fab fa-markdown',
  name: 'markdown'
}, {
  title: 'Mastodon',
  class: 'fab fa-mastodon',
  name: 'mastodon'
}, {
  title: 'Maxcdn',
  class: 'fab fa-maxcdn',
  name: 'maxcdn'
}, {
  title: 'Mdb',
  class: 'fab fa-mdb',
  name: 'mdb'
}, {
  title: 'Medapps',
  class: 'fab fa-medapps',
  name: 'medapps'
}, {
  title: 'Medium',
  class: 'fab fa-medium',
  name: 'medium'
}, {
  title: 'Medrt',
  class: 'fab fa-medrt',
  name: 'medrt'
}, {
  title: 'Meetup',
  class: 'fab fa-meetup',
  name: 'meetup'
}, {
  title: 'Megaport',
  class: 'fab fa-megaport',
  name: 'megaport'
}, {
  title: 'Mendeley',
  class: 'fab fa-mendeley',
  name: 'mendeley'
}, {
  title: 'Meta',
  class: 'fab fa-meta',
  name: 'meta'
}, {
  title: 'Microblog',
  class: 'fab fa-microblog',
  name: 'microblog'
}, {
  title: 'Microsoft',
  class: 'fab fa-microsoft',
  name: 'microsoft'
}, {
  title: 'Mix',
  class: 'fab fa-mix',
  name: 'mix'
}, {
  title: 'Mixcloud',
  class: 'fab fa-mixcloud',
  name: 'mixcloud'
}, {
  title: 'Mixer',
  class: 'fab fa-mixer',
  name: 'mixer'
}, {
  title: 'Mizuni',
  class: 'fab fa-mizuni',
  name: 'mizuni'
}, {
  title: 'Modx',
  class: 'fab fa-modx',
  name: 'modx'
}, {
  title: 'Monero',
  class: 'fab fa-monero',
  name: 'monero'
}, {
  title: 'Napster',
  class: 'fab fa-napster',
  name: 'napster'
}, {
  title: 'Neos',
  class: 'fab fa-neos',
  name: 'neos'
}, {
  title: 'Nfc Directional',
  class: 'fab fa-nfc-directional',
  name: 'nfc-directional'
}, {
  title: 'Nfc Symbol',
  class: 'fab fa-nfc-symbol',
  name: 'nfc-symbol'
}, {
  title: 'Nimblr',
  class: 'fab fa-nimblr',
  name: 'nimblr'
}, {
  title: 'Node Js',
  class: 'fab fa-node-js',
  name: 'node-js'
}, {
  title: 'Node',
  class: 'fab fa-node',
  name: 'node'
}, {
  title: 'Npm',
  class: 'fab fa-npm',
  name: 'npm'
}, {
  title: 'Ns8',
  class: 'fab fa-ns8',
  name: 'ns8'
}, {
  title: 'Nutritionix',
  class: 'fab fa-nutritionix',
  name: 'nutritionix'
}, {
  title: 'Octopus Deploy',
  class: 'fab fa-octopus-deploy',
  name: 'octopus-deploy'
}, {
  title: 'Odnoklassniki',
  class: 'fab fa-odnoklassniki',
  name: 'odnoklassniki'
}, {
  title: 'Old Republic',
  class: 'fab fa-old-republic',
  name: 'old-republic'
}, {
  title: 'Opencart',
  class: 'fab fa-opencart',
  name: 'opencart'
}, {
  title: 'Openid',
  class: 'fab fa-openid',
  name: 'openid'
}, {
  title: 'Opera',
  class: 'fab fa-opera',
  name: 'opera'
}, {
  title: 'Optin Monster',
  class: 'fab fa-optin-monster',
  name: 'optin-monster'
}, {
  title: 'Orcid',
  class: 'fab fa-orcid',
  name: 'orcid'
}, {
  title: 'Osi',
  class: 'fab fa-osi',
  name: 'osi'
}, {
  title: 'Padlet',
  class: 'fab fa-padlet',
  name: 'padlet'
}, {
  title: 'Page4',
  class: 'fab fa-page4',
  name: 'page4'
}, {
  title: 'Pagelines',
  class: 'fab fa-pagelines',
  name: 'pagelines'
}, {
  title: 'Palfed',
  class: 'fab fa-palfed',
  name: 'palfed'
}, {
  title: 'Patreon',
  class: 'fab fa-patreon',
  name: 'patreon'
}, {
  title: 'Paypal',
  class: 'fab fa-paypal',
  name: 'paypal'
}, {
  title: 'Perbyte',
  class: 'fab fa-perbyte',
  name: 'perbyte'
}, {
  title: 'Periscope',
  class: 'fab fa-periscope',
  name: 'periscope'
}, {
  title: 'Phabricator',
  class: 'fab fa-phabricator',
  name: 'phabricator'
}, {
  title: 'Phoenix Framework',
  class: 'fab fa-phoenix-framework',
  name: 'phoenix-framework'
}, {
  title: 'Phoenix Squadron',
  class: 'fab fa-phoenix-squadron',
  name: 'phoenix-squadron'
}, {
  title: 'Php',
  class: 'fab fa-php',
  name: 'php'
}, {
  title: 'Pied Piper Alt',
  class: 'fab fa-pied-piper-alt',
  name: 'pied-piper-alt'
}, {
  title: 'Pied Piper Hat',
  class: 'fab fa-pied-piper-hat',
  name: 'pied-piper-hat'
}, {
  title: 'Pied Piper Pp',
  class: 'fab fa-pied-piper-pp',
  name: 'pied-piper-pp'
}, {
  title: 'Pied Piper',
  class: 'fab fa-pied-piper',
  name: 'pied-piper'
}, {
  title: 'Pinterest P',
  class: 'fab fa-pinterest-p',
  name: 'pinterest-p'
}, {
  title: 'Pinterest',
  class: 'fab fa-pinterest',
  name: 'pinterest'
}, {
  title: 'Pix',
  class: 'fab fa-pix',
  name: 'pix'
}, {
  title: 'Playstation',
  class: 'fab fa-playstation',
  name: 'playstation'
}, {
  title: 'Product Hunt',
  class: 'fab fa-product-hunt',
  name: 'product-hunt'
}, {
  title: 'Pushed',
  class: 'fab fa-pushed',
  name: 'pushed'
}, {
  title: 'Python',
  class: 'fab fa-python',
  name: 'python'
}, {
  title: 'Qq',
  class: 'fab fa-qq',
  name: 'qq'
}, {
  title: 'Quinscape',
  class: 'fab fa-quinscape',
  name: 'quinscape'
}, {
  title: 'Quora',
  class: 'fab fa-quora',
  name: 'quora'
}, {
  title: 'R Project',
  class: 'fab fa-r-project',
  name: 'r-project'
}, {
  title: 'Raspberry Pi',
  class: 'fab fa-raspberry-pi',
  name: 'raspberry-pi'
}, {
  title: 'Ravelry',
  class: 'fab fa-ravelry',
  name: 'ravelry'
}, {
  title: 'React',
  class: 'fab fa-react',
  name: 'react'
}, {
  title: 'Reacteurope',
  class: 'fab fa-reacteurope',
  name: 'reacteurope'
}, {
  title: 'Readme',
  class: 'fab fa-readme',
  name: 'readme'
}, {
  title: 'Rebel',
  class: 'fab fa-rebel',
  name: 'rebel'
}, {
  title: 'Red River',
  class: 'fab fa-red-river',
  name: 'red-river'
}, {
  title: 'Reddit Alien',
  class: 'fab fa-reddit-alien',
  name: 'reddit-alien'
}, {
  title: 'Reddit',
  class: 'fab fa-reddit',
  name: 'reddit'
}, {
  title: 'Redhat',
  class: 'fab fa-redhat',
  name: 'redhat'
}, {
  title: 'Renren',
  class: 'fab fa-renren',
  name: 'renren'
}, {
  title: 'Replyd',
  class: 'fab fa-replyd',
  name: 'replyd'
}, {
  title: 'Researchgate',
  class: 'fab fa-researchgate',
  name: 'researchgate'
}, {
  title: 'Resolving',
  class: 'fab fa-resolving',
  name: 'resolving'
}, {
  title: 'Rev',
  class: 'fab fa-rev',
  name: 'rev'
}, {
  title: 'Rocketchat',
  class: 'fab fa-rocketchat',
  name: 'rocketchat'
}, {
  title: 'Rockrms',
  class: 'fab fa-rockrms',
  name: 'rockrms'
}, {
  title: 'Rust',
  class: 'fab fa-rust',
  name: 'rust'
}, {
  title: 'Safari',
  class: 'fab fa-safari',
  name: 'safari'
}, {
  title: 'Salesforce',
  class: 'fab fa-salesforce',
  name: 'salesforce'
}, {
  title: 'Sass',
  class: 'fab fa-sass',
  name: 'sass'
}, {
  title: 'Schlix',
  class: 'fab fa-schlix',
  name: 'schlix'
}, {
  title: 'Screenpal',
  class: 'fab fa-screenpal',
  name: 'screenpal'
}, {
  title: 'Scribd',
  class: 'fab fa-scribd',
  name: 'scribd'
}, {
  title: 'Searchengin',
  class: 'fab fa-searchengin',
  name: 'searchengin'
}, {
  title: 'Sellcast',
  class: 'fab fa-sellcast',
  name: 'sellcast'
}, {
  title: 'Sellsy',
  class: 'fab fa-sellsy',
  name: 'sellsy'
}, {
  title: 'Servicestack',
  class: 'fab fa-servicestack',
  name: 'servicestack'
}, {
  title: 'Shirtsinbulk',
  class: 'fab fa-shirtsinbulk',
  name: 'shirtsinbulk'
}, {
  title: 'Shopify',
  class: 'fab fa-shopify',
  name: 'shopify'
}, {
  title: 'Shopware',
  class: 'fab fa-shopware',
  name: 'shopware'
}, {
  title: 'Simplybuilt',
  class: 'fab fa-simplybuilt',
  name: 'simplybuilt'
}, {
  title: 'Sistrix',
  class: 'fab fa-sistrix',
  name: 'sistrix'
}, {
  title: 'Sith',
  class: 'fab fa-sith',
  name: 'sith'
}, {
  title: 'Sitrox',
  class: 'fab fa-sitrox',
  name: 'sitrox'
}, {
  title: 'Sketch',
  class: 'fab fa-sketch',
  name: 'sketch'
}, {
  title: 'Skyatlas',
  class: 'fab fa-skyatlas',
  name: 'skyatlas'
}, {
  title: 'Skype',
  class: 'fab fa-skype',
  name: 'skype'
}, {
  title: 'Slack',
  class: 'fab fa-slack',
  name: 'slack'
}, {
  title: 'Slideshare',
  class: 'fab fa-slideshare',
  name: 'slideshare'
}, {
  title: 'Snapchat',
  class: 'fab fa-snapchat',
  name: 'snapchat'
}, {
  title: 'Soundcloud',
  class: 'fab fa-soundcloud',
  name: 'soundcloud'
}, {
  title: 'Sourcetree',
  class: 'fab fa-sourcetree',
  name: 'sourcetree'
}, {
  title: 'Space Awesome',
  class: 'fab fa-space-awesome',
  name: 'space-awesome'
}, {
  title: 'Speakap',
  class: 'fab fa-speakap',
  name: 'speakap'
}, {
  title: 'Speaker Deck',
  class: 'fab fa-speaker-deck',
  name: 'speaker-deck'
}, {
  title: 'Spotify',
  class: 'fab fa-spotify',
  name: 'spotify'
}, {
  title: 'Square Behance',
  class: 'fab fa-square-behance',
  name: 'square-behance'
}, {
  title: 'Square Dribbble',
  class: 'fab fa-square-dribbble',
  name: 'square-dribbble'
}, {
  title: 'Square Facebook',
  class: 'fab fa-square-facebook',
  name: 'square-facebook'
}, {
  title: 'Square Font Awesome Stroke',
  class: 'fab fa-square-font-awesome-stroke',
  name: 'square-font-awesome-stroke'
}, {
  title: 'Square Font Awesome',
  class: 'fab fa-square-font-awesome',
  name: 'square-font-awesome'
}, {
  title: 'Square Git',
  class: 'fab fa-square-git',
  name: 'square-git'
}, {
  title: 'Square Github',
  class: 'fab fa-square-github',
  name: 'square-github'
}, {
  title: 'Square Gitlab',
  class: 'fab fa-square-gitlab',
  name: 'square-gitlab'
}, {
  title: 'Square Google Plus',
  class: 'fab fa-square-google-plus',
  name: 'square-google-plus'
}, {
  title: 'Square Hacker News',
  class: 'fab fa-square-hacker-news',
  name: 'square-hacker-news'
}, {
  title: 'Square Instagram',
  class: 'fab fa-square-instagram',
  name: 'square-instagram'
}, {
  title: 'Square Js',
  class: 'fab fa-square-js',
  name: 'square-js'
}, {
  title: 'Square Lastfm',
  class: 'fab fa-square-lastfm',
  name: 'square-lastfm'
}, {
  title: 'Square Odnoklassniki',
  class: 'fab fa-square-odnoklassniki',
  name: 'square-odnoklassniki'
}, {
  title: 'Square Pied Piper',
  class: 'fab fa-square-pied-piper',
  name: 'square-pied-piper'
}, {
  title: 'Square Pinterest',
  class: 'fab fa-square-pinterest',
  name: 'square-pinterest'
}, {
  title: 'Square Reddit',
  class: 'fab fa-square-reddit',
  name: 'square-reddit'
}, {
  title: 'Square Snapchat',
  class: 'fab fa-square-snapchat',
  name: 'square-snapchat'
}, {
  title: 'Square Steam',
  class: 'fab fa-square-steam',
  name: 'square-steam'
}, {
  title: 'Square Tumblr',
  class: 'fab fa-square-tumblr',
  name: 'square-tumblr'
}, {
  title: 'Square Twitter',
  class: 'fab fa-square-twitter',
  name: 'square-twitter'
}, {
  title: 'Square Viadeo',
  class: 'fab fa-square-viadeo',
  name: 'square-viadeo'
}, {
  title: 'Square Vimeo',
  class: 'fab fa-square-vimeo',
  name: 'square-vimeo'
}, {
  title: 'Square Whatsapp',
  class: 'fab fa-square-whatsapp',
  name: 'square-whatsapp'
}, {
  title: 'Square Xing',
  class: 'fab fa-square-xing',
  name: 'square-xing'
}, {
  title: 'Square Youtube',
  class: 'fab fa-square-youtube',
  name: 'square-youtube'
}, {
  title: 'Squarespace',
  class: 'fab fa-squarespace',
  name: 'squarespace'
}, {
  title: 'Stack Exchange',
  class: 'fab fa-stack-exchange',
  name: 'stack-exchange'
}, {
  title: 'Stack Overflow',
  class: 'fab fa-stack-overflow',
  name: 'stack-overflow'
}, {
  title: 'Stackpath',
  class: 'fab fa-stackpath',
  name: 'stackpath'
}, {
  title: 'Staylinked',
  class: 'fab fa-staylinked',
  name: 'staylinked'
}, {
  title: 'Steam Symbol',
  class: 'fab fa-steam-symbol',
  name: 'steam-symbol'
}, {
  title: 'Steam',
  class: 'fab fa-steam',
  name: 'steam'
}, {
  title: 'Sticker Mule',
  class: 'fab fa-sticker-mule',
  name: 'sticker-mule'
}, {
  title: 'Strava',
  class: 'fab fa-strava',
  name: 'strava'
}, {
  title: 'Stripe S',
  class: 'fab fa-stripe-s',
  name: 'stripe-s'
}, {
  title: 'Stripe',
  class: 'fab fa-stripe',
  name: 'stripe'
}, {
  title: 'Studiovinari',
  class: 'fab fa-studiovinari',
  name: 'studiovinari'
}, {
  title: 'Stumbleupon Circle',
  class: 'fab fa-stumbleupon-circle',
  name: 'stumbleupon-circle'
}, {
  title: 'Stumbleupon',
  class: 'fab fa-stumbleupon',
  name: 'stumbleupon'
}, {
  title: 'Superpowers',
  class: 'fab fa-superpowers',
  name: 'superpowers'
}, {
  title: 'Supple',
  class: 'fab fa-supple',
  name: 'supple'
}, {
  title: 'Suse',
  class: 'fab fa-suse',
  name: 'suse'
}, {
  title: 'Swift',
  class: 'fab fa-swift',
  name: 'swift'
}, {
  title: 'Symfony',
  class: 'fab fa-symfony',
  name: 'symfony'
}, {
  title: 'Teamspeak',
  class: 'fab fa-teamspeak',
  name: 'teamspeak'
}, {
  title: 'Telegram',
  class: 'fab fa-telegram',
  name: 'telegram'
}, {
  title: 'Tencent Weibo',
  class: 'fab fa-tencent-weibo',
  name: 'tencent-weibo'
}, {
  title: 'The Red Yeti',
  class: 'fab fa-the-red-yeti',
  name: 'the-red-yeti'
}, {
  title: 'Themeco',
  class: 'fab fa-themeco',
  name: 'themeco'
}, {
  title: 'Themeisle',
  class: 'fab fa-themeisle',
  name: 'themeisle'
}, {
  title: 'Think Peaks',
  class: 'fab fa-think-peaks',
  name: 'think-peaks'
}, {
  title: 'Tiktok',
  class: 'fab fa-tiktok',
  name: 'tiktok'
}, {
  title: 'Trade Federation',
  class: 'fab fa-trade-federation',
  name: 'trade-federation'
}, {
  title: 'Trello',
  class: 'fab fa-trello',
  name: 'trello'
}, {
  title: 'Tumblr',
  class: 'fab fa-tumblr',
  name: 'tumblr'
}, {
  title: 'Twitch',
  class: 'fab fa-twitch',
  name: 'twitch'
}, {
  title: 'Twitter',
  class: 'fab fa-twitter',
  name: 'twitter'
}, {
  title: 'Typo3',
  class: 'fab fa-typo3',
  name: 'typo3'
}, {
  title: 'Uber',
  class: 'fab fa-uber',
  name: 'uber'
}, {
  title: 'Ubuntu',
  class: 'fab fa-ubuntu',
  name: 'ubuntu'
}, {
  title: 'Uikit',
  class: 'fab fa-uikit',
  name: 'uikit'
}, {
  title: 'Umbraco',
  class: 'fab fa-umbraco',
  name: 'umbraco'
}, {
  title: 'Uncharted',
  class: 'fab fa-uncharted',
  name: 'uncharted'
}, {
  title: 'Uniregistry',
  class: 'fab fa-uniregistry',
  name: 'uniregistry'
}, {
  title: 'Unity',
  class: 'fab fa-unity',
  name: 'unity'
}, {
  title: 'Unsplash',
  class: 'fab fa-unsplash',
  name: 'unsplash'
}, {
  title: 'Untappd',
  class: 'fab fa-untappd',
  name: 'untappd'
}, {
  title: 'Ups',
  class: 'fab fa-ups',
  name: 'ups'
}, {
  title: 'Usb',
  class: 'fab fa-usb',
  name: 'usb'
}, {
  title: 'Usps',
  class: 'fab fa-usps',
  name: 'usps'
}, {
  title: 'Ussunnah',
  class: 'fab fa-ussunnah',
  name: 'ussunnah'
}, {
  title: 'Vaadin',
  class: 'fab fa-vaadin',
  name: 'vaadin'
}, {
  title: 'Viacoin',
  class: 'fab fa-viacoin',
  name: 'viacoin'
}, {
  title: 'Viadeo',
  class: 'fab fa-viadeo',
  name: 'viadeo'
}, {
  title: 'Viber',
  class: 'fab fa-viber',
  name: 'viber'
}, {
  title: 'Vimeo V',
  class: 'fab fa-vimeo-v',
  name: 'vimeo-v'
}, {
  title: 'Vimeo',
  class: 'fab fa-vimeo',
  name: 'vimeo'
}, {
  title: 'Vine',
  class: 'fab fa-vine',
  name: 'vine'
}, {
  title: 'Vk',
  class: 'fab fa-vk',
  name: 'vk'
}, {
  title: 'Vnv',
  class: 'fab fa-vnv',
  name: 'vnv'
}, {
  title: 'Vuejs',
  class: 'fab fa-vuejs',
  name: 'vuejs'
}, {
  title: 'Watchman Monitoring',
  class: 'fab fa-watchman-monitoring',
  name: 'watchman-monitoring'
}, {
  title: 'Waze',
  class: 'fab fa-waze',
  name: 'waze'
}, {
  title: 'Weebly',
  class: 'fab fa-weebly',
  name: 'weebly'
}, {
  title: 'Weibo',
  class: 'fab fa-weibo',
  name: 'weibo'
}, {
  title: 'Weixin',
  class: 'fab fa-weixin',
  name: 'weixin'
}, {
  title: 'Whatsapp',
  class: 'fab fa-whatsapp',
  name: 'whatsapp'
}, {
  title: 'Whmcs',
  class: 'fab fa-whmcs',
  name: 'whmcs'
}, {
  title: 'Wikipedia W',
  class: 'fab fa-wikipedia-w',
  name: 'wikipedia-w'
}, {
  title: 'Windows',
  class: 'fab fa-windows',
  name: 'windows'
}, {
  title: 'Wirsindhandwerk',
  class: 'fab fa-wirsindhandwerk',
  name: 'wirsindhandwerk'
}, {
  title: 'Wix',
  class: 'fab fa-wix',
  name: 'wix'
}, {
  title: 'Wizards Of The Coast',
  class: 'fab fa-wizards-of-the-coast',
  name: 'wizards-of-the-coast'
}, {
  title: 'Wodu',
  class: 'fab fa-wodu',
  name: 'wodu'
}, {
  title: 'Wolf Pack Battalion',
  class: 'fab fa-wolf-pack-battalion',
  name: 'wolf-pack-battalion'
}, {
  title: 'Wordpress Simple',
  class: 'fab fa-wordpress-simple',
  name: 'wordpress-simple'
}, {
  title: 'Wordpress',
  class: 'fab fa-wordpress',
  name: 'wordpress'
}, {
  title: 'Wpbeginner',
  class: 'fab fa-wpbeginner',
  name: 'wpbeginner'
}, {
  title: 'Wpexplorer',
  class: 'fab fa-wpexplorer',
  name: 'wpexplorer'
}, {
  title: 'Wpforms',
  class: 'fab fa-wpforms',
  name: 'wpforms'
}, {
  title: 'Wpressr',
  class: 'fab fa-wpressr',
  name: 'wpressr'
}, {
  title: 'Xbox',
  class: 'fab fa-xbox',
  name: 'xbox'
}, {
  title: 'Xing',
  class: 'fab fa-xing',
  name: 'xing'
}, {
  title: 'Y Combinator',
  class: 'fab fa-y-combinator',
  name: 'y-combinator'
}, {
  title: 'Yahoo',
  class: 'fab fa-yahoo',
  name: 'yahoo'
}, {
  title: 'Yammer',
  class: 'fab fa-yammer',
  name: 'yammer'
}, {
  title: 'Yandex International',
  class: 'fab fa-yandex-international',
  name: 'yandex-international'
}, {
  title: 'Yandex',
  class: 'fab fa-yandex',
  name: 'yandex'
}, {
  title: 'Yarn',
  class: 'fab fa-yarn',
  name: 'yarn'
}, {
  title: 'Yelp',
  class: 'fab fa-yelp',
  name: 'yelp'
}, {
  title: 'Yoast',
  class: 'fab fa-yoast',
  name: 'yoast'
}, {
  title: 'Youtube',
  class: 'fab fa-youtube',
  name: 'youtube'
}, {
  title: 'Zhihu',
  class: 'fab fa-zhihu',
  name: 'zhihu'
}, {
  title: 'Address Book',
  class: 'far fa-address-book',
  name: 'address-book'
}, {
  title: 'Address Card',
  class: 'far fa-address-card',
  name: 'address-card'
}, {
  title: 'Bell Slash',
  class: 'far fa-bell-slash',
  name: 'bell-slash'
}, {
  title: 'Bell',
  class: 'far fa-bell',
  name: 'bell'
}, {
  title: 'Bookmark',
  class: 'far fa-bookmark',
  name: 'bookmark'
}, {
  title: 'Building',
  class: 'far fa-building',
  name: 'building'
}, {
  title: 'Calendar Check',
  class: 'far fa-calendar-check',
  name: 'calendar-check'
}, {
  title: 'Calendar Days',
  class: 'far fa-calendar-days',
  name: 'calendar-days'
}, {
  title: 'Calendar Minus',
  class: 'far fa-calendar-minus',
  name: 'calendar-minus'
}, {
  title: 'Calendar Plus',
  class: 'far fa-calendar-plus',
  name: 'calendar-plus'
}, {
  title: 'Calendar Xmark',
  class: 'far fa-calendar-xmark',
  name: 'calendar-xmark'
}, {
  title: 'Calendar',
  class: 'far fa-calendar',
  name: 'calendar'
}, {
  title: 'Chart Bar',
  class: 'far fa-chart-bar',
  name: 'chart-bar'
}, {
  title: 'Chess Bishop',
  class: 'far fa-chess-bishop',
  name: 'chess-bishop'
}, {
  title: 'Chess King',
  class: 'far fa-chess-king',
  name: 'chess-king'
}, {
  title: 'Chess Knight',
  class: 'far fa-chess-knight',
  name: 'chess-knight'
}, {
  title: 'Chess Pawn',
  class: 'far fa-chess-pawn',
  name: 'chess-pawn'
}, {
  title: 'Chess Queen',
  class: 'far fa-chess-queen',
  name: 'chess-queen'
}, {
  title: 'Chess Rook',
  class: 'far fa-chess-rook',
  name: 'chess-rook'
}, {
  title: 'Circle Check',
  class: 'far fa-circle-check',
  name: 'circle-check'
}, {
  title: 'Circle Dot',
  class: 'far fa-circle-dot',
  name: 'circle-dot'
}, {
  title: 'Circle Down',
  class: 'far fa-circle-down',
  name: 'circle-down'
}, {
  title: 'Circle Left',
  class: 'far fa-circle-left',
  name: 'circle-left'
}, {
  title: 'Circle Pause',
  class: 'far fa-circle-pause',
  name: 'circle-pause'
}, {
  title: 'Circle Play',
  class: 'far fa-circle-play',
  name: 'circle-play'
}, {
  title: 'Circle Question',
  class: 'far fa-circle-question',
  name: 'circle-question'
}, {
  title: 'Circle Right',
  class: 'far fa-circle-right',
  name: 'circle-right'
}, {
  title: 'Circle Stop',
  class: 'far fa-circle-stop',
  name: 'circle-stop'
}, {
  title: 'Circle Up',
  class: 'far fa-circle-up',
  name: 'circle-up'
}, {
  title: 'Circle User',
  class: 'far fa-circle-user',
  name: 'circle-user'
}, {
  title: 'Circle Xmark',
  class: 'far fa-circle-xmark',
  name: 'circle-xmark'
}, {
  title: 'Circle',
  class: 'far fa-circle',
  name: 'circle'
}, {
  title: 'Clipboard',
  class: 'far fa-clipboard',
  name: 'clipboard'
}, {
  title: 'Clock',
  class: 'far fa-clock',
  name: 'clock'
}, {
  title: 'Clone',
  class: 'far fa-clone',
  name: 'clone'
}, {
  title: 'Closed Captioning',
  class: 'far fa-closed-captioning',
  name: 'closed-captioning'
}, {
  title: 'Comment Dots',
  class: 'far fa-comment-dots',
  name: 'comment-dots'
}, {
  title: 'Comment',
  class: 'far fa-comment',
  name: 'comment'
}, {
  title: 'Comments',
  class: 'far fa-comments',
  name: 'comments'
}, {
  title: 'Compass',
  class: 'far fa-compass',
  name: 'compass'
}, {
  title: 'Copy',
  class: 'far fa-copy',
  name: 'copy'
}, {
  title: 'Copyright',
  class: 'far fa-copyright',
  name: 'copyright'
}, {
  title: 'Credit Card',
  class: 'far fa-credit-card',
  name: 'credit-card'
}, {
  title: 'Envelope Open',
  class: 'far fa-envelope-open',
  name: 'envelope-open'
}, {
  title: 'Envelope',
  class: 'far fa-envelope',
  name: 'envelope'
}, {
  title: 'Eye Slash',
  class: 'far fa-eye-slash',
  name: 'eye-slash'
}, {
  title: 'Eye',
  class: 'far fa-eye',
  name: 'eye'
}, {
  title: 'Face Angry',
  class: 'far fa-face-angry',
  name: 'face-angry'
}, {
  title: 'Face Dizzy',
  class: 'far fa-face-dizzy',
  name: 'face-dizzy'
}, {
  title: 'Face Flushed',
  class: 'far fa-face-flushed',
  name: 'face-flushed'
}, {
  title: 'Face Frown Open',
  class: 'far fa-face-frown-open',
  name: 'face-frown-open'
}, {
  title: 'Face Frown',
  class: 'far fa-face-frown',
  name: 'face-frown'
}, {
  title: 'Face Grimace',
  class: 'far fa-face-grimace',
  name: 'face-grimace'
}, {
  title: 'Face Grin Beam Sweat',
  class: 'far fa-face-grin-beam-sweat',
  name: 'face-grin-beam-sweat'
}, {
  title: 'Face Grin Beam',
  class: 'far fa-face-grin-beam',
  name: 'face-grin-beam'
}, {
  title: 'Face Grin Hearts',
  class: 'far fa-face-grin-hearts',
  name: 'face-grin-hearts'
}, {
  title: 'Face Grin Squint Tears',
  class: 'far fa-face-grin-squint-tears',
  name: 'face-grin-squint-tears'
}, {
  title: 'Face Grin Squint',
  class: 'far fa-face-grin-squint',
  name: 'face-grin-squint'
}, {
  title: 'Face Grin Stars',
  class: 'far fa-face-grin-stars',
  name: 'face-grin-stars'
}, {
  title: 'Face Grin Tears',
  class: 'far fa-face-grin-tears',
  name: 'face-grin-tears'
}, {
  title: 'Face Grin Tongue Squint',
  class: 'far fa-face-grin-tongue-squint',
  name: 'face-grin-tongue-squint'
}, {
  title: 'Face Grin Tongue Wink',
  class: 'far fa-face-grin-tongue-wink',
  name: 'face-grin-tongue-wink'
}, {
  title: 'Face Grin Tongue',
  class: 'far fa-face-grin-tongue',
  name: 'face-grin-tongue'
}, {
  title: 'Face Grin Wide',
  class: 'far fa-face-grin-wide',
  name: 'face-grin-wide'
}, {
  title: 'Face Grin Wink',
  class: 'far fa-face-grin-wink',
  name: 'face-grin-wink'
}, {
  title: 'Face Grin',
  class: 'far fa-face-grin',
  name: 'face-grin'
}, {
  title: 'Face Kiss Beam',
  class: 'far fa-face-kiss-beam',
  name: 'face-kiss-beam'
}, {
  title: 'Face Kiss Wink Heart',
  class: 'far fa-face-kiss-wink-heart',
  name: 'face-kiss-wink-heart'
}, {
  title: 'Face Kiss',
  class: 'far fa-face-kiss',
  name: 'face-kiss'
}, {
  title: 'Face Laugh Beam',
  class: 'far fa-face-laugh-beam',
  name: 'face-laugh-beam'
}, {
  title: 'Face Laugh Squint',
  class: 'far fa-face-laugh-squint',
  name: 'face-laugh-squint'
}, {
  title: 'Face Laugh Wink',
  class: 'far fa-face-laugh-wink',
  name: 'face-laugh-wink'
}, {
  title: 'Face Laugh',
  class: 'far fa-face-laugh',
  name: 'face-laugh'
}, {
  title: 'Face Meh Blank',
  class: 'far fa-face-meh-blank',
  name: 'face-meh-blank'
}, {
  title: 'Face Meh',
  class: 'far fa-face-meh',
  name: 'face-meh'
}, {
  title: 'Face Rolling Eyes',
  class: 'far fa-face-rolling-eyes',
  name: 'face-rolling-eyes'
}, {
  title: 'Face Sad Cry',
  class: 'far fa-face-sad-cry',
  name: 'face-sad-cry'
}, {
  title: 'Face Sad Tear',
  class: 'far fa-face-sad-tear',
  name: 'face-sad-tear'
}, {
  title: 'Face Smile Beam',
  class: 'far fa-face-smile-beam',
  name: 'face-smile-beam'
}, {
  title: 'Face Smile Wink',
  class: 'far fa-face-smile-wink',
  name: 'face-smile-wink'
}, {
  title: 'Face Smile',
  class: 'far fa-face-smile',
  name: 'face-smile'
}, {
  title: 'Face Surprise',
  class: 'far fa-face-surprise',
  name: 'face-surprise'
}, {
  title: 'Face Tired',
  class: 'far fa-face-tired',
  name: 'face-tired'
}, {
  title: 'File Audio',
  class: 'far fa-file-audio',
  name: 'file-audio'
}, {
  title: 'File Code',
  class: 'far fa-file-code',
  name: 'file-code'
}, {
  title: 'File Excel',
  class: 'far fa-file-excel',
  name: 'file-excel'
}, {
  title: 'File Image',
  class: 'far fa-file-image',
  name: 'file-image'
}, {
  title: 'File Lines',
  class: 'far fa-file-lines',
  name: 'file-lines'
}, {
  title: 'File Pdf',
  class: 'far fa-file-pdf',
  name: 'file-pdf'
}, {
  title: 'File Powerpoint',
  class: 'far fa-file-powerpoint',
  name: 'file-powerpoint'
}, {
  title: 'File Video',
  class: 'far fa-file-video',
  name: 'file-video'
}, {
  title: 'File Word',
  class: 'far fa-file-word',
  name: 'file-word'
}, {
  title: 'File Zipper',
  class: 'far fa-file-zipper',
  name: 'file-zipper'
}, {
  title: 'File',
  class: 'far fa-file',
  name: 'file'
}, {
  title: 'Flag',
  class: 'far fa-flag',
  name: 'flag'
}, {
  title: 'Floppy Disk',
  class: 'far fa-floppy-disk',
  name: 'floppy-disk'
}, {
  title: 'Folder Closed',
  class: 'far fa-folder-closed',
  name: 'folder-closed'
}, {
  title: 'Folder Open',
  class: 'far fa-folder-open',
  name: 'folder-open'
}, {
  title: 'Folder',
  class: 'far fa-folder',
  name: 'folder'
}, {
  title: 'Font Awesome',
  class: 'far fa-font-awesome',
  name: 'font-awesome'
}, {
  title: 'Futbol',
  class: 'far fa-futbol',
  name: 'futbol'
}, {
  title: 'Gem',
  class: 'far fa-gem',
  name: 'gem'
}, {
  title: 'Hand Back Fist',
  class: 'far fa-hand-back-fist',
  name: 'hand-back-fist'
}, {
  title: 'Hand Lizard',
  class: 'far fa-hand-lizard',
  name: 'hand-lizard'
}, {
  title: 'Hand Peace',
  class: 'far fa-hand-peace',
  name: 'hand-peace'
}, {
  title: 'Hand Point Down',
  class: 'far fa-hand-point-down',
  name: 'hand-point-down'
}, {
  title: 'Hand Point Left',
  class: 'far fa-hand-point-left',
  name: 'hand-point-left'
}, {
  title: 'Hand Point Right',
  class: 'far fa-hand-point-right',
  name: 'hand-point-right'
}, {
  title: 'Hand Point Up',
  class: 'far fa-hand-point-up',
  name: 'hand-point-up'
}, {
  title: 'Hand Pointer',
  class: 'far fa-hand-pointer',
  name: 'hand-pointer'
}, {
  title: 'Hand Scissors',
  class: 'far fa-hand-scissors',
  name: 'hand-scissors'
}, {
  title: 'Hand Spock',
  class: 'far fa-hand-spock',
  name: 'hand-spock'
}, {
  title: 'Hand',
  class: 'far fa-hand',
  name: 'hand'
}, {
  title: 'Handshake',
  class: 'far fa-handshake',
  name: 'handshake'
}, {
  title: 'Hard Drive',
  class: 'far fa-hard-drive',
  name: 'hard-drive'
}, {
  title: 'Heart',
  class: 'far fa-heart',
  name: 'heart'
}, {
  title: 'Hospital',
  class: 'far fa-hospital',
  name: 'hospital'
}, {
  title: 'Hourglass Half',
  class: 'far fa-hourglass-half',
  name: 'hourglass-half'
}, {
  title: 'Hourglass',
  class: 'far fa-hourglass',
  name: 'hourglass'
}, {
  title: 'Id Badge',
  class: 'far fa-id-badge',
  name: 'id-badge'
}, {
  title: 'Id Card',
  class: 'far fa-id-card',
  name: 'id-card'
}, {
  title: 'Image',
  class: 'far fa-image',
  name: 'image'
}, {
  title: 'Images',
  class: 'far fa-images',
  name: 'images'
}, {
  title: 'Keyboard',
  class: 'far fa-keyboard',
  name: 'keyboard'
}, {
  title: 'Lemon',
  class: 'far fa-lemon',
  name: 'lemon'
}, {
  title: 'Life Ring',
  class: 'far fa-life-ring',
  name: 'life-ring'
}, {
  title: 'Lightbulb',
  class: 'far fa-lightbulb',
  name: 'lightbulb'
}, {
  title: 'Map',
  class: 'far fa-map',
  name: 'map'
}, {
  title: 'Message',
  class: 'far fa-message',
  name: 'message'
}, {
  title: 'Money Bill 1',
  class: 'far fa-money-bill-1',
  name: 'money-bill-1'
}, {
  title: 'Moon',
  class: 'far fa-moon',
  name: 'moon'
}, {
  title: 'Newspaper',
  class: 'far fa-newspaper',
  name: 'newspaper'
}, {
  title: 'Note Sticky',
  class: 'far fa-note-sticky',
  name: 'note-sticky'
}, {
  title: 'Object Group',
  class: 'far fa-object-group',
  name: 'object-group'
}, {
  title: 'Object Ungroup',
  class: 'far fa-object-ungroup',
  name: 'object-ungroup'
}, {
  title: 'Paper Plane',
  class: 'far fa-paper-plane',
  name: 'paper-plane'
}, {
  title: 'Paste',
  class: 'far fa-paste',
  name: 'paste'
}, {
  title: 'Pen To Square',
  class: 'far fa-pen-to-square',
  name: 'pen-to-square'
}, {
  title: 'Rectangle List',
  class: 'far fa-rectangle-list',
  name: 'rectangle-list'
}, {
  title: 'Rectangle Xmark',
  class: 'far fa-rectangle-xmark',
  name: 'rectangle-xmark'
}, {
  title: 'Registered',
  class: 'far fa-registered',
  name: 'registered'
}, {
  title: 'Share From Square',
  class: 'far fa-share-from-square',
  name: 'share-from-square'
}, {
  title: 'Snowflake',
  class: 'far fa-snowflake',
  name: 'snowflake'
}, {
  title: 'Square Caret Down',
  class: 'far fa-square-caret-down',
  name: 'square-caret-down'
}, {
  title: 'Square Caret Left',
  class: 'far fa-square-caret-left',
  name: 'square-caret-left'
}, {
  title: 'Square Caret Right',
  class: 'far fa-square-caret-right',
  name: 'square-caret-right'
}, {
  title: 'Square Caret Up',
  class: 'far fa-square-caret-up',
  name: 'square-caret-up'
}, {
  title: 'Square Check',
  class: 'far fa-square-check',
  name: 'square-check'
}, {
  title: 'Square Full',
  class: 'far fa-square-full',
  name: 'square-full'
}, {
  title: 'Square Minus',
  class: 'far fa-square-minus',
  name: 'square-minus'
}, {
  title: 'Square Plus',
  class: 'far fa-square-plus',
  name: 'square-plus'
}, {
  title: 'Square',
  class: 'far fa-square',
  name: 'square'
}, {
  title: 'Star Half Stroke',
  class: 'far fa-star-half-stroke',
  name: 'star-half-stroke'
}, {
  title: 'Star Half',
  class: 'far fa-star-half',
  name: 'star-half'
}, {
  title: 'Star',
  class: 'far fa-star',
  name: 'star'
}, {
  title: 'Sun',
  class: 'far fa-sun',
  name: 'sun'
}, {
  title: 'Thumbs Down',
  class: 'far fa-thumbs-down',
  name: 'thumbs-down'
}, {
  title: 'Thumbs Up',
  class: 'far fa-thumbs-up',
  name: 'thumbs-up'
}, {
  title: 'Trash Can',
  class: 'far fa-trash-can',
  name: 'trash-can'
}, {
  title: 'User',
  class: 'far fa-user',
  name: 'user'
}, {
  title: 'Window Maximize',
  class: 'far fa-window-maximize',
  name: 'window-maximize'
}, {
  title: 'Window Minimize',
  class: 'far fa-window-minimize',
  name: 'window-minimize'
}, {
  title: 'Window Restore',
  class: 'far fa-window-restore',
  name: 'window-restore'
}, {
  title: '0 Number',
  class: 'fas fa-0',
  name: '0'
}, {
  title: '1 Number',
  class: 'fas fa-1',
  name: '1'
}, {
  title: '2 Number',
  class: 'fas fa-2',
  name: '2'
}, {
  title: '3 Number',
  class: 'fas fa-3',
  name: '3'
}, {
  title: '4 Number',
  class: 'fas fa-4',
  name: '4'
}, {
  title: '5 Number',
  class: 'fas fa-5',
  name: '5'
}, {
  title: '6 Number',
  class: 'fas fa-6',
  name: '6'
}, {
  title: '7 Number',
  class: 'fas fa-7',
  name: '7'
}, {
  title: '8 Number',
  class: 'fas fa-8',
  name: '8'
}, {
  title: '9 Number',
  class: 'fas fa-9',
  name: '9'
}, {
  title: 'A',
  class: 'fas fa-a',
  name: 'a'
}, {
  title: 'Address Book',
  class: 'fas fa-address-book',
  name: 'address-book'
}, {
  title: 'Address Card',
  class: 'fas fa-address-card',
  name: 'address-card'
}, {
  title: 'Align Center',
  class: 'fas fa-align-center',
  name: 'align-center'
}, {
  title: 'Align Justify',
  class: 'fas fa-align-justify',
  name: 'align-justify'
}, {
  title: 'Align Left',
  class: 'fas fa-align-left',
  name: 'align-left'
}, {
  title: 'Align Right',
  class: 'fas fa-align-right',
  name: 'align-right'
}, {
  title: 'Anchor Circle Check',
  class: 'fas fa-anchor-circle-check',
  name: 'anchor-circle-check'
}, {
  title: 'Anchor Circle Exclamation',
  class: 'fas fa-anchor-circle-exclamation',
  name: 'anchor-circle-exclamation'
}, {
  title: 'Anchor Circle Xmark',
  class: 'fas fa-anchor-circle-xmark',
  name: 'anchor-circle-xmark'
}, {
  title: 'Anchor Lock',
  class: 'fas fa-anchor-lock',
  name: 'anchor-lock'
}, {
  title: 'Anchor',
  class: 'fas fa-anchor',
  name: 'anchor'
}, {
  title: 'Angle Down',
  class: 'fas fa-angle-down',
  name: 'angle-down'
}, {
  title: 'Angle Left',
  class: 'fas fa-angle-left',
  name: 'angle-left'
}, {
  title: 'Angle Right',
  class: 'fas fa-angle-right',
  name: 'angle-right'
}, {
  title: 'Angle Up',
  class: 'fas fa-angle-up',
  name: 'angle-up'
}, {
  title: 'Angles Down',
  class: 'fas fa-angles-down',
  name: 'angles-down'
}, {
  title: 'Angles Left',
  class: 'fas fa-angles-left',
  name: 'angles-left'
}, {
  title: 'Angles Right',
  class: 'fas fa-angles-right',
  name: 'angles-right'
}, {
  title: 'Angles Up',
  class: 'fas fa-angles-up',
  name: 'angles-up'
}, {
  title: 'Ankh',
  class: 'fas fa-ankh',
  name: 'ankh'
}, {
  title: 'Apple Whole',
  class: 'fas fa-apple-whole',
  name: 'apple-whole'
}, {
  title: 'Archway',
  class: 'fas fa-archway',
  name: 'archway'
}, {
  title: 'Arrow Down 1 9',
  class: 'fas fa-arrow-down-1-9',
  name: 'arrow-down-1-9'
}, {
  title: 'Arrow Down 9 1',
  class: 'fas fa-arrow-down-9-1',
  name: 'arrow-down-9-1'
}, {
  title: 'Arrow Down A Z',
  class: 'fas fa-arrow-down-a-z',
  name: 'arrow-down-a-z'
}, {
  title: 'Arrow Down Long',
  class: 'fas fa-arrow-down-long',
  name: 'arrow-down-long'
}, {
  title: 'Arrow Down Short Wide',
  class: 'fas fa-arrow-down-short-wide',
  name: 'arrow-down-short-wide'
}, {
  title: 'Arrow Down Up Across Line',
  class: 'fas fa-arrow-down-up-across-line',
  name: 'arrow-down-up-across-line'
}, {
  title: 'Arrow Down Up Lock',
  class: 'fas fa-arrow-down-up-lock',
  name: 'arrow-down-up-lock'
}, {
  title: 'Arrow Down Wide Short',
  class: 'fas fa-arrow-down-wide-short',
  name: 'arrow-down-wide-short'
}, {
  title: 'Arrow Down Z A',
  class: 'fas fa-arrow-down-z-a',
  name: 'arrow-down-z-a'
}, {
  title: 'Arrow Down',
  class: 'fas fa-arrow-down',
  name: 'arrow-down'
}, {
  title: 'Arrow Left Long',
  class: 'fas fa-arrow-left-long',
  name: 'arrow-left-long'
}, {
  title: 'Arrow Left',
  class: 'fas fa-arrow-left',
  name: 'arrow-left'
}, {
  title: 'Arrow Pointer',
  class: 'fas fa-arrow-pointer',
  name: 'arrow-pointer'
}, {
  title: 'Arrow Right Arrow Left',
  class: 'fas fa-arrow-right-arrow-left',
  name: 'arrow-right-arrow-left'
}, {
  title: 'Arrow Right From Bracket',
  class: 'fas fa-arrow-right-from-bracket',
  name: 'arrow-right-from-bracket'
}, {
  title: 'Arrow Right Long',
  class: 'fas fa-arrow-right-long',
  name: 'arrow-right-long'
}, {
  title: 'Arrow Right To Bracket',
  class: 'fas fa-arrow-right-to-bracket',
  name: 'arrow-right-to-bracket'
}, {
  title: 'Arrow Right To City',
  class: 'fas fa-arrow-right-to-city',
  name: 'arrow-right-to-city'
}, {
  title: 'Arrow Right',
  class: 'fas fa-arrow-right',
  name: 'arrow-right'
}, {
  title: 'Arrow Rotate Left',
  class: 'fas fa-arrow-rotate-left',
  name: 'arrow-rotate-left'
}, {
  title: 'Arrow Rotate Right',
  class: 'fas fa-arrow-rotate-right',
  name: 'arrow-rotate-right'
}, {
  title: 'Arrow Trend Down',
  class: 'fas fa-arrow-trend-down',
  name: 'arrow-trend-down'
}, {
  title: 'Arrow Trend Up',
  class: 'fas fa-arrow-trend-up',
  name: 'arrow-trend-up'
}, {
  title: 'Arrow Turn Down',
  class: 'fas fa-arrow-turn-down',
  name: 'arrow-turn-down'
}, {
  title: 'Arrow Turn Up',
  class: 'fas fa-arrow-turn-up',
  name: 'arrow-turn-up'
}, {
  title: 'Arrow Up 1 9',
  class: 'fas fa-arrow-up-1-9',
  name: 'arrow-up-1-9'
}, {
  title: 'Arrow Up 9 1',
  class: 'fas fa-arrow-up-9-1',
  name: 'arrow-up-9-1'
}, {
  title: 'Arrow Up A Z',
  class: 'fas fa-arrow-up-a-z',
  name: 'arrow-up-a-z'
}, {
  title: 'Arrow Up From Bracket',
  class: 'fas fa-arrow-up-from-bracket',
  name: 'arrow-up-from-bracket'
}, {
  title: 'Arrow Up From Ground Water',
  class: 'fas fa-arrow-up-from-ground-water',
  name: 'arrow-up-from-ground-water'
}, {
  title: 'Arrow Up From Water Pump',
  class: 'fas fa-arrow-up-from-water-pump',
  name: 'arrow-up-from-water-pump'
}, {
  title: 'Arrow Up Long',
  class: 'fas fa-arrow-up-long',
  name: 'arrow-up-long'
}, {
  title: 'Arrow Up Right Dots',
  class: 'fas fa-arrow-up-right-dots',
  name: 'arrow-up-right-dots'
}, {
  title: 'Arrow Up Right From Square',
  class: 'fas fa-arrow-up-right-from-square',
  name: 'arrow-up-right-from-square'
}, {
  title: 'Arrow Up Short Wide',
  class: 'fas fa-arrow-up-short-wide',
  name: 'arrow-up-short-wide'
}, {
  title: 'Arrow Up Wide Short',
  class: 'fas fa-arrow-up-wide-short',
  name: 'arrow-up-wide-short'
}, {
  title: 'Arrow Up Z A',
  class: 'fas fa-arrow-up-z-a',
  name: 'arrow-up-z-a'
}, {
  title: 'Arrow Up',
  class: 'fas fa-arrow-up',
  name: 'arrow-up'
}, {
  title: 'Arrows Down To Line',
  class: 'fas fa-arrows-down-to-line',
  name: 'arrows-down-to-line'
}, {
  title: 'Arrows Down To People',
  class: 'fas fa-arrows-down-to-people',
  name: 'arrows-down-to-people'
}, {
  title: 'Arrows Left Right To Line',
  class: 'fas fa-arrows-left-right-to-line',
  name: 'arrows-left-right-to-line'
}, {
  title: 'Arrows Left Right',
  class: 'fas fa-arrows-left-right',
  name: 'arrows-left-right'
}, {
  title: 'Arrows Rotate',
  class: 'fas fa-arrows-rotate',
  name: 'arrows-rotate'
}, {
  title: 'Arrows Spin',
  class: 'fas fa-arrows-spin',
  name: 'arrows-spin'
}, {
  title: 'Arrows Split Up And Left',
  class: 'fas fa-arrows-split-up-and-left',
  name: 'arrows-split-up-and-left'
}, {
  title: 'Arrows To Circle',
  class: 'fas fa-arrows-to-circle',
  name: 'arrows-to-circle'
}, {
  title: 'Arrows To Dot',
  class: 'fas fa-arrows-to-dot',
  name: 'arrows-to-dot'
}, {
  title: 'Arrows To Eye',
  class: 'fas fa-arrows-to-eye',
  name: 'arrows-to-eye'
}, {
  title: 'Arrows Turn Right',
  class: 'fas fa-arrows-turn-right',
  name: 'arrows-turn-right'
}, {
  title: 'Arrows Turn To Dots',
  class: 'fas fa-arrows-turn-to-dots',
  name: 'arrows-turn-to-dots'
}, {
  title: 'Arrows Up Down Left Right',
  class: 'fas fa-arrows-up-down-left-right',
  name: 'arrows-up-down-left-right'
}, {
  title: 'Arrows Up Down',
  class: 'fas fa-arrows-up-down',
  name: 'arrows-up-down'
}, {
  title: 'Arrows Up To Line',
  class: 'fas fa-arrows-up-to-line',
  name: 'arrows-up-to-line'
}, {
  title: 'Asterisk',
  class: 'fas fa-asterisk',
  name: 'asterisk'
}, {
  title: 'At',
  class: 'fas fa-at',
  name: 'at'
}, {
  title: 'Atom',
  class: 'fas fa-atom',
  name: 'atom'
}, {
  title: 'Audio Description',
  class: 'fas fa-audio-description',
  name: 'audio-description'
}, {
  title: 'Austral Sign',
  class: 'fas fa-austral-sign',
  name: 'austral-sign'
}, {
  title: 'Award',
  class: 'fas fa-award',
  name: 'award'
}, {
  title: 'B',
  class: 'fas fa-b',
  name: 'b'
}, {
  title: 'Baby Carriage',
  class: 'fas fa-baby-carriage',
  name: 'baby-carriage'
}, {
  title: 'Baby',
  class: 'fas fa-baby',
  name: 'baby'
}, {
  title: 'Backward Fast',
  class: 'fas fa-backward-fast',
  name: 'backward-fast'
}, {
  title: 'Backward Step',
  class: 'fas fa-backward-step',
  name: 'backward-step'
}, {
  title: 'Backward',
  class: 'fas fa-backward',
  name: 'backward'
}, {
  title: 'Bacon',
  class: 'fas fa-bacon',
  name: 'bacon'
}, {
  title: 'Bacteria',
  class: 'fas fa-bacteria',
  name: 'bacteria'
}, {
  title: 'Bacterium',
  class: 'fas fa-bacterium',
  name: 'bacterium'
}, {
  title: 'Bag Shopping',
  class: 'fas fa-bag-shopping',
  name: 'bag-shopping'
}, {
  title: 'Bahai',
  class: 'fas fa-bahai',
  name: 'bahai'
}, {
  title: 'Baht Sign',
  class: 'fas fa-baht-sign',
  name: 'baht-sign'
}, {
  title: 'Ban Smoking',
  class: 'fas fa-ban-smoking',
  name: 'ban-smoking'
}, {
  title: 'Ban',
  class: 'fas fa-ban',
  name: 'ban'
}, {
  title: 'Bandage',
  class: 'fas fa-bandage',
  name: 'bandage'
}, {
  title: 'Barcode',
  class: 'fas fa-barcode',
  name: 'barcode'
}, {
  title: 'Bars Progress',
  class: 'fas fa-bars-progress',
  name: 'bars-progress'
}, {
  title: 'Bars Staggered',
  class: 'fas fa-bars-staggered',
  name: 'bars-staggered'
}, {
  title: 'Bars',
  class: 'fas fa-bars',
  name: 'bars'
}, {
  title: 'Baseball Bat Ball',
  class: 'fas fa-baseball-bat-ball',
  name: 'baseball-bat-ball'
}, {
  title: 'Baseball',
  class: 'fas fa-baseball',
  name: 'baseball'
}, {
  title: 'Basket Shopping',
  class: 'fas fa-basket-shopping',
  name: 'basket-shopping'
}, {
  title: 'Basketball',
  class: 'fas fa-basketball',
  name: 'basketball'
}, {
  title: 'Bath',
  class: 'fas fa-bath',
  name: 'bath'
}, {
  title: 'Battery Empty',
  class: 'fas fa-battery-empty',
  name: 'battery-empty'
}, {
  title: 'Battery Full',
  class: 'fas fa-battery-full',
  name: 'battery-full'
}, {
  title: 'Battery Half',
  class: 'fas fa-battery-half',
  name: 'battery-half'
}, {
  title: 'Battery Quarter',
  class: 'fas fa-battery-quarter',
  name: 'battery-quarter'
}, {
  title: 'Battery Three Quarters',
  class: 'fas fa-battery-three-quarters',
  name: 'battery-three-quarters'
}, {
  title: 'Bed Pulse',
  class: 'fas fa-bed-pulse',
  name: 'bed-pulse'
}, {
  title: 'Bed',
  class: 'fas fa-bed',
  name: 'bed'
}, {
  title: 'Beer Mug Empty',
  class: 'fas fa-beer-mug-empty',
  name: 'beer-mug-empty'
}, {
  title: 'Bell Concierge',
  class: 'fas fa-bell-concierge',
  name: 'bell-concierge'
}, {
  title: 'Bell Slash',
  class: 'fas fa-bell-slash',
  name: 'bell-slash'
}, {
  title: 'Bell',
  class: 'fas fa-bell',
  name: 'bell'
}, {
  title: 'Bezier Curve',
  class: 'fas fa-bezier-curve',
  name: 'bezier-curve'
}, {
  title: 'Bicycle',
  class: 'fas fa-bicycle',
  name: 'bicycle'
}, {
  title: 'Binoculars',
  class: 'fas fa-binoculars',
  name: 'binoculars'
}, {
  title: 'Biohazard',
  class: 'fas fa-biohazard',
  name: 'biohazard'
}, {
  title: 'Bitcoin Sign',
  class: 'fas fa-bitcoin-sign',
  name: 'bitcoin-sign'
}, {
  title: 'Blender Phone',
  class: 'fas fa-blender-phone',
  name: 'blender-phone'
}, {
  title: 'Blender',
  class: 'fas fa-blender',
  name: 'blender'
}, {
  title: 'Blog',
  class: 'fas fa-blog',
  name: 'blog'
}, {
  title: 'Bold',
  class: 'fas fa-bold',
  name: 'bold'
}, {
  title: 'Bolt Lightning',
  class: 'fas fa-bolt-lightning',
  name: 'bolt-lightning'
}, {
  title: 'Bolt',
  class: 'fas fa-bolt',
  name: 'bolt'
}, {
  title: 'Bomb',
  class: 'fas fa-bomb',
  name: 'bomb'
}, {
  title: 'Bone',
  class: 'fas fa-bone',
  name: 'bone'
}, {
  title: 'Bong',
  class: 'fas fa-bong',
  name: 'bong'
}, {
  title: 'Book Atlas',
  class: 'fas fa-book-atlas',
  name: 'book-atlas'
}, {
  title: 'Book Bible',
  class: 'fas fa-book-bible',
  name: 'book-bible'
}, {
  title: 'Book Bookmark',
  class: 'fas fa-book-bookmark',
  name: 'book-bookmark'
}, {
  title: 'Book Journal Whills',
  class: 'fas fa-book-journal-whills',
  name: 'book-journal-whills'
}, {
  title: 'Book Medical',
  class: 'fas fa-book-medical',
  name: 'book-medical'
}, {
  title: 'Book Open Reader',
  class: 'fas fa-book-open-reader',
  name: 'book-open-reader'
}, {
  title: 'Book Open',
  class: 'fas fa-book-open',
  name: 'book-open'
}, {
  title: 'Book Quran',
  class: 'fas fa-book-quran',
  name: 'book-quran'
}, {
  title: 'Book Skull',
  class: 'fas fa-book-skull',
  name: 'book-skull'
}, {
  title: 'Book Tanakh',
  class: 'fas fa-book-tanakh',
  name: 'book-tanakh'
}, {
  title: 'Book',
  class: 'fas fa-book',
  name: 'book'
}, {
  title: 'Bookmark',
  class: 'fas fa-bookmark',
  name: 'bookmark'
}, {
  title: 'Border All',
  class: 'fas fa-border-all',
  name: 'border-all'
}, {
  title: 'Border None',
  class: 'fas fa-border-none',
  name: 'border-none'
}, {
  title: 'Border Top Left',
  class: 'fas fa-border-top-left',
  name: 'border-top-left'
}, {
  title: 'Bore Hole',
  class: 'fas fa-bore-hole',
  name: 'bore-hole'
}, {
  title: 'Bottle Droplet',
  class: 'fas fa-bottle-droplet',
  name: 'bottle-droplet'
}, {
  title: 'Bottle Water',
  class: 'fas fa-bottle-water',
  name: 'bottle-water'
}, {
  title: 'Bowl Food',
  class: 'fas fa-bowl-food',
  name: 'bowl-food'
}, {
  title: 'Bowl Rice',
  class: 'fas fa-bowl-rice',
  name: 'bowl-rice'
}, {
  title: 'Bowling Ball',
  class: 'fas fa-bowling-ball',
  name: 'bowling-ball'
}, {
  title: 'Box Archive',
  class: 'fas fa-box-archive',
  name: 'box-archive'
}, {
  title: 'Box Open',
  class: 'fas fa-box-open',
  name: 'box-open'
}, {
  title: 'Box Tissue',
  class: 'fas fa-box-tissue',
  name: 'box-tissue'
}, {
  title: 'Box',
  class: 'fas fa-box',
  name: 'box'
}, {
  title: 'Boxes Packing',
  class: 'fas fa-boxes-packing',
  name: 'boxes-packing'
}, {
  title: 'Boxes Stacked',
  class: 'fas fa-boxes-stacked',
  name: 'boxes-stacked'
}, {
  title: 'Braille',
  class: 'fas fa-braille',
  name: 'braille'
}, {
  title: 'Brain',
  class: 'fas fa-brain',
  name: 'brain'
}, {
  title: 'Brazilian Real Sign',
  class: 'fas fa-brazilian-real-sign',
  name: 'brazilian-real-sign'
}, {
  title: 'Bread Slice',
  class: 'fas fa-bread-slice',
  name: 'bread-slice'
}, {
  title: 'Bridge Circle Check',
  class: 'fas fa-bridge-circle-check',
  name: 'bridge-circle-check'
}, {
  title: 'Bridge Circle Exclamation',
  class: 'fas fa-bridge-circle-exclamation',
  name: 'bridge-circle-exclamation'
}, {
  title: 'Bridge Circle Xmark',
  class: 'fas fa-bridge-circle-xmark',
  name: 'bridge-circle-xmark'
}, {
  title: 'Bridge Lock',
  class: 'fas fa-bridge-lock',
  name: 'bridge-lock'
}, {
  title: 'Bridge Water',
  class: 'fas fa-bridge-water',
  name: 'bridge-water'
}, {
  title: 'Bridge',
  class: 'fas fa-bridge',
  name: 'bridge'
}, {
  title: 'Briefcase Medical',
  class: 'fas fa-briefcase-medical',
  name: 'briefcase-medical'
}, {
  title: 'Briefcase',
  class: 'fas fa-briefcase',
  name: 'briefcase'
}, {
  title: 'Broom Ball',
  class: 'fas fa-broom-ball',
  name: 'broom-ball'
}, {
  title: 'Broom',
  class: 'fas fa-broom',
  name: 'broom'
}, {
  title: 'Brush',
  class: 'fas fa-brush',
  name: 'brush'
}, {
  title: 'Bucket',
  class: 'fas fa-bucket',
  name: 'bucket'
}, {
  title: 'Bug Slash',
  class: 'fas fa-bug-slash',
  name: 'bug-slash'
}, {
  title: 'Bug',
  class: 'fas fa-bug',
  name: 'bug'
}, {
  title: 'Bugs',
  class: 'fas fa-bugs',
  name: 'bugs'
}, {
  title: 'Building Circle Arrow Right',
  class: 'fas fa-building-circle-arrow-right',
  name: 'building-circle-arrow-right'
}, {
  title: 'Building Circle Check',
  class: 'fas fa-building-circle-check',
  name: 'building-circle-check'
}, {
  title: 'Building Circle Exclamation',
  class: 'fas fa-building-circle-exclamation',
  name: 'building-circle-exclamation'
}, {
  title: 'Building Circle Xmark',
  class: 'fas fa-building-circle-xmark',
  name: 'building-circle-xmark'
}, {
  title: 'Building Columns',
  class: 'fas fa-building-columns',
  name: 'building-columns'
}, {
  title: 'Building Flag',
  class: 'fas fa-building-flag',
  name: 'building-flag'
}, {
  title: 'Building Lock',
  class: 'fas fa-building-lock',
  name: 'building-lock'
}, {
  title: 'Building Ngo',
  class: 'fas fa-building-ngo',
  name: 'building-ngo'
}, {
  title: 'Building Shield',
  class: 'fas fa-building-shield',
  name: 'building-shield'
}, {
  title: 'Building Un',
  class: 'fas fa-building-un',
  name: 'building-un'
}, {
  title: 'Building User',
  class: 'fas fa-building-user',
  name: 'building-user'
}, {
  title: 'Building Wheat',
  class: 'fas fa-building-wheat',
  name: 'building-wheat'
}, {
  title: 'Building',
  class: 'fas fa-building',
  name: 'building'
}, {
  title: 'Bullhorn',
  class: 'fas fa-bullhorn',
  name: 'bullhorn'
}, {
  title: 'Bullseye',
  class: 'fas fa-bullseye',
  name: 'bullseye'
}, {
  title: 'Burger',
  class: 'fas fa-burger',
  name: 'burger'
}, {
  title: 'Burst',
  class: 'fas fa-burst',
  name: 'burst'
}, {
  title: 'Bus Simple',
  class: 'fas fa-bus-simple',
  name: 'bus-simple'
}, {
  title: 'Bus',
  class: 'fas fa-bus',
  name: 'bus'
}, {
  title: 'Business Time',
  class: 'fas fa-business-time',
  name: 'business-time'
}, {
  title: 'C',
  class: 'fas fa-c',
  name: 'c'
}, {
  title: 'Cable Car',
  class: 'fas fa-cable-car',
  name: 'cable-car'
}, {
  title: 'Cake Candles',
  class: 'fas fa-cake-candles',
  name: 'cake-candles'
}, {
  title: 'Calculator',
  class: 'fas fa-calculator',
  name: 'calculator'
}, {
  title: 'Calendar Check',
  class: 'fas fa-calendar-check',
  name: 'calendar-check'
}, {
  title: 'Calendar Day',
  class: 'fas fa-calendar-day',
  name: 'calendar-day'
}, {
  title: 'Calendar Days',
  class: 'fas fa-calendar-days',
  name: 'calendar-days'
}, {
  title: 'Calendar Minus',
  class: 'fas fa-calendar-minus',
  name: 'calendar-minus'
}, {
  title: 'Calendar Plus',
  class: 'fas fa-calendar-plus',
  name: 'calendar-plus'
}, {
  title: 'Calendar Week',
  class: 'fas fa-calendar-week',
  name: 'calendar-week'
}, {
  title: 'Calendar Xmark',
  class: 'fas fa-calendar-xmark',
  name: 'calendar-xmark'
}, {
  title: 'Calendar',
  class: 'fas fa-calendar',
  name: 'calendar'
}, {
  title: 'Camera Retro',
  class: 'fas fa-camera-retro',
  name: 'camera-retro'
}, {
  title: 'Camera Rotate',
  class: 'fas fa-camera-rotate',
  name: 'camera-rotate'
}, {
  title: 'Camera',
  class: 'fas fa-camera',
  name: 'camera'
}, {
  title: 'Campground',
  class: 'fas fa-campground',
  name: 'campground'
}, {
  title: 'Candy Cane',
  class: 'fas fa-candy-cane',
  name: 'candy-cane'
}, {
  title: 'Cannabis',
  class: 'fas fa-cannabis',
  name: 'cannabis'
}, {
  title: 'Capsules',
  class: 'fas fa-capsules',
  name: 'capsules'
}, {
  title: 'Car Battery',
  class: 'fas fa-car-battery',
  name: 'car-battery'
}, {
  title: 'Car Burst',
  class: 'fas fa-car-burst',
  name: 'car-burst'
}, {
  title: 'Car On',
  class: 'fas fa-car-on',
  name: 'car-on'
}, {
  title: 'Car Rear',
  class: 'fas fa-car-rear',
  name: 'car-rear'
}, {
  title: 'Car Side',
  class: 'fas fa-car-side',
  name: 'car-side'
}, {
  title: 'Car Tunnel',
  class: 'fas fa-car-tunnel',
  name: 'car-tunnel'
}, {
  title: 'Car',
  class: 'fas fa-car',
  name: 'car'
}, {
  title: 'Caravan',
  class: 'fas fa-caravan',
  name: 'caravan'
}, {
  title: 'Caret Down',
  class: 'fas fa-caret-down',
  name: 'caret-down'
}, {
  title: 'Caret Left',
  class: 'fas fa-caret-left',
  name: 'caret-left'
}, {
  title: 'Caret Right',
  class: 'fas fa-caret-right',
  name: 'caret-right'
}, {
  title: 'Caret Up',
  class: 'fas fa-caret-up',
  name: 'caret-up'
}, {
  title: 'Carrot',
  class: 'fas fa-carrot',
  name: 'carrot'
}, {
  title: 'Cart Arrow Down',
  class: 'fas fa-cart-arrow-down',
  name: 'cart-arrow-down'
}, {
  title: 'Cart Flatbed Suitcase',
  class: 'fas fa-cart-flatbed-suitcase',
  name: 'cart-flatbed-suitcase'
}, {
  title: 'Cart Flatbed',
  class: 'fas fa-cart-flatbed',
  name: 'cart-flatbed'
}, {
  title: 'Cart Plus',
  class: 'fas fa-cart-plus',
  name: 'cart-plus'
}, {
  title: 'Cart Shopping',
  class: 'fas fa-cart-shopping',
  name: 'cart-shopping'
}, {
  title: 'Cash Register',
  class: 'fas fa-cash-register',
  name: 'cash-register'
}, {
  title: 'Cat',
  class: 'fas fa-cat',
  name: 'cat'
}, {
  title: 'Cedi Sign',
  class: 'fas fa-cedi-sign',
  name: 'cedi-sign'
}, {
  title: 'Cent Sign',
  class: 'fas fa-cent-sign',
  name: 'cent-sign'
}, {
  title: 'Certificate',
  class: 'fas fa-certificate',
  name: 'certificate'
}, {
  title: 'Chair',
  class: 'fas fa-chair',
  name: 'chair'
}, {
  title: 'Chalkboard User',
  class: 'fas fa-chalkboard-user',
  name: 'chalkboard-user'
}, {
  title: 'Chalkboard',
  class: 'fas fa-chalkboard',
  name: 'chalkboard'
}, {
  title: 'Champagne Glasses',
  class: 'fas fa-champagne-glasses',
  name: 'champagne-glasses'
}, {
  title: 'Charging Station',
  class: 'fas fa-charging-station',
  name: 'charging-station'
}, {
  title: 'Chart Area',
  class: 'fas fa-chart-area',
  name: 'chart-area'
}, {
  title: 'Chart Bar',
  class: 'fas fa-chart-bar',
  name: 'chart-bar'
}, {
  title: 'Chart Column',
  class: 'fas fa-chart-column',
  name: 'chart-column'
}, {
  title: 'Chart Gantt',
  class: 'fas fa-chart-gantt',
  name: 'chart-gantt'
}, {
  title: 'Chart Line',
  class: 'fas fa-chart-line',
  name: 'chart-line'
}, {
  title: 'Chart Pie',
  class: 'fas fa-chart-pie',
  name: 'chart-pie'
}, {
  title: 'Chart Simple',
  class: 'fas fa-chart-simple',
  name: 'chart-simple'
}, {
  title: 'Check Double',
  class: 'fas fa-check-double',
  name: 'check-double'
}, {
  title: 'Check To Slot',
  class: 'fas fa-check-to-slot',
  name: 'check-to-slot'
}, {
  title: 'Check',
  class: 'fas fa-check',
  name: 'check'
}, {
  title: 'Cheese',
  class: 'fas fa-cheese',
  name: 'cheese'
}, {
  title: 'Chess Bishop',
  class: 'fas fa-chess-bishop',
  name: 'chess-bishop'
}, {
  title: 'Chess Board',
  class: 'fas fa-chess-board',
  name: 'chess-board'
}, {
  title: 'Chess King',
  class: 'fas fa-chess-king',
  name: 'chess-king'
}, {
  title: 'Chess Knight',
  class: 'fas fa-chess-knight',
  name: 'chess-knight'
}, {
  title: 'Chess Pawn',
  class: 'fas fa-chess-pawn',
  name: 'chess-pawn'
}, {
  title: 'Chess Queen',
  class: 'fas fa-chess-queen',
  name: 'chess-queen'
}, {
  title: 'Chess Rook',
  class: 'fas fa-chess-rook',
  name: 'chess-rook'
}, {
  title: 'Chess',
  class: 'fas fa-chess',
  name: 'chess'
}, {
  title: 'Chevron Down',
  class: 'fas fa-chevron-down',
  name: 'chevron-down'
}, {
  title: 'Chevron Left',
  class: 'fas fa-chevron-left',
  name: 'chevron-left'
}, {
  title: 'Chevron Right',
  class: 'fas fa-chevron-right',
  name: 'chevron-right'
}, {
  title: 'Chevron Up',
  class: 'fas fa-chevron-up',
  name: 'chevron-up'
}, {
  title: 'Child Dress',
  class: 'fas fa-child-dress',
  name: 'child-dress'
}, {
  title: 'Child Reaching',
  class: 'fas fa-child-reaching',
  name: 'child-reaching'
}, {
  title: 'Child Rifle',
  class: 'fas fa-child-rifle',
  name: 'child-rifle'
}, {
  title: 'Child',
  class: 'fas fa-child',
  name: 'child'
}, {
  title: 'Children',
  class: 'fas fa-children',
  name: 'children'
}, {
  title: 'Church',
  class: 'fas fa-church',
  name: 'church'
}, {
  title: 'Circle Arrow Down',
  class: 'fas fa-circle-arrow-down',
  name: 'circle-arrow-down'
}, {
  title: 'Circle Arrow Left',
  class: 'fas fa-circle-arrow-left',
  name: 'circle-arrow-left'
}, {
  title: 'Circle Arrow Right',
  class: 'fas fa-circle-arrow-right',
  name: 'circle-arrow-right'
}, {
  title: 'Circle Arrow Up',
  class: 'fas fa-circle-arrow-up',
  name: 'circle-arrow-up'
}, {
  title: 'Circle Check',
  class: 'fas fa-circle-check',
  name: 'circle-check'
}, {
  title: 'Circle Chevron Down',
  class: 'fas fa-circle-chevron-down',
  name: 'circle-chevron-down'
}, {
  title: 'Circle Chevron Left',
  class: 'fas fa-circle-chevron-left',
  name: 'circle-chevron-left'
}, {
  title: 'Circle Chevron Right',
  class: 'fas fa-circle-chevron-right',
  name: 'circle-chevron-right'
}, {
  title: 'Circle Chevron Up',
  class: 'fas fa-circle-chevron-up',
  name: 'circle-chevron-up'
}, {
  title: 'Circle Dollar To Slot',
  class: 'fas fa-circle-dollar-to-slot',
  name: 'circle-dollar-to-slot'
}, {
  title: 'Circle Dot',
  class: 'fas fa-circle-dot',
  name: 'circle-dot'
}, {
  title: 'Circle Down',
  class: 'fas fa-circle-down',
  name: 'circle-down'
}, {
  title: 'Circle Exclamation',
  class: 'fas fa-circle-exclamation',
  name: 'circle-exclamation'
}, {
  title: 'Circle H',
  class: 'fas fa-circle-h',
  name: 'circle-h'
}, {
  title: 'Circle Half Stroke',
  class: 'fas fa-circle-half-stroke',
  name: 'circle-half-stroke'
}, {
  title: 'Circle Info',
  class: 'fas fa-circle-info',
  name: 'circle-info'
}, {
  title: 'Circle Left',
  class: 'fas fa-circle-left',
  name: 'circle-left'
}, {
  title: 'Circle Minus',
  class: 'fas fa-circle-minus',
  name: 'circle-minus'
}, {
  title: 'Circle Nodes',
  class: 'fas fa-circle-nodes',
  name: 'circle-nodes'
}, {
  title: 'Circle Notch',
  class: 'fas fa-circle-notch',
  name: 'circle-notch'
}, {
  title: 'Circle Pause',
  class: 'fas fa-circle-pause',
  name: 'circle-pause'
}, {
  title: 'Circle Play',
  class: 'fas fa-circle-play',
  name: 'circle-play'
}, {
  title: 'Circle Plus',
  class: 'fas fa-circle-plus',
  name: 'circle-plus'
}, {
  title: 'Circle Question',
  class: 'fas fa-circle-question',
  name: 'circle-question'
}, {
  title: 'Circle Radiation',
  class: 'fas fa-circle-radiation',
  name: 'circle-radiation'
}, {
  title: 'Circle Right',
  class: 'fas fa-circle-right',
  name: 'circle-right'
}, {
  title: 'Circle Stop',
  class: 'fas fa-circle-stop',
  name: 'circle-stop'
}, {
  title: 'Circle Up',
  class: 'fas fa-circle-up',
  name: 'circle-up'
}, {
  title: 'Circle User',
  class: 'fas fa-circle-user',
  name: 'circle-user'
}, {
  title: 'Circle Xmark',
  class: 'fas fa-circle-xmark',
  name: 'circle-xmark'
}, {
  title: 'Circle',
  class: 'fas fa-circle',
  name: 'circle'
}, {
  title: 'City',
  class: 'fas fa-city',
  name: 'city'
}, {
  title: 'Clapperboard',
  class: 'fas fa-clapperboard',
  name: 'clapperboard'
}, {
  title: 'Clipboard Check',
  class: 'fas fa-clipboard-check',
  name: 'clipboard-check'
}, {
  title: 'Clipboard List',
  class: 'fas fa-clipboard-list',
  name: 'clipboard-list'
}, {
  title: 'Clipboard Question',
  class: 'fas fa-clipboard-question',
  name: 'clipboard-question'
}, {
  title: 'Clipboard User',
  class: 'fas fa-clipboard-user',
  name: 'clipboard-user'
}, {
  title: 'Clipboard',
  class: 'fas fa-clipboard',
  name: 'clipboard'
}, {
  title: 'Clock Rotate Left',
  class: 'fas fa-clock-rotate-left',
  name: 'clock-rotate-left'
}, {
  title: 'Clock',
  class: 'fas fa-clock',
  name: 'clock'
}, {
  title: 'Clone',
  class: 'fas fa-clone',
  name: 'clone'
}, {
  title: 'Closed Captioning',
  class: 'fas fa-closed-captioning',
  name: 'closed-captioning'
}, {
  title: 'Cloud Arrow Down',
  class: 'fas fa-cloud-arrow-down',
  name: 'cloud-arrow-down'
}, {
  title: 'Cloud Arrow Up',
  class: 'fas fa-cloud-arrow-up',
  name: 'cloud-arrow-up'
}, {
  title: 'Cloud Bolt',
  class: 'fas fa-cloud-bolt',
  name: 'cloud-bolt'
}, {
  title: 'Cloud Meatball',
  class: 'fas fa-cloud-meatball',
  name: 'cloud-meatball'
}, {
  title: 'Cloud Moon Rain',
  class: 'fas fa-cloud-moon-rain',
  name: 'cloud-moon-rain'
}, {
  title: 'Cloud Moon',
  class: 'fas fa-cloud-moon',
  name: 'cloud-moon'
}, {
  title: 'Cloud Rain',
  class: 'fas fa-cloud-rain',
  name: 'cloud-rain'
}, {
  title: 'Cloud Showers Heavy',
  class: 'fas fa-cloud-showers-heavy',
  name: 'cloud-showers-heavy'
}, {
  title: 'Cloud Showers Water',
  class: 'fas fa-cloud-showers-water',
  name: 'cloud-showers-water'
}, {
  title: 'Cloud Sun Rain',
  class: 'fas fa-cloud-sun-rain',
  name: 'cloud-sun-rain'
}, {
  title: 'Cloud Sun',
  class: 'fas fa-cloud-sun',
  name: 'cloud-sun'
}, {
  title: 'Cloud',
  class: 'fas fa-cloud',
  name: 'cloud'
}, {
  title: 'Clover',
  class: 'fas fa-clover',
  name: 'clover'
}, {
  title: 'Code Branch',
  class: 'fas fa-code-branch',
  name: 'code-branch'
}, {
  title: 'Code Commit',
  class: 'fas fa-code-commit',
  name: 'code-commit'
}, {
  title: 'Code Compare',
  class: 'fas fa-code-compare',
  name: 'code-compare'
}, {
  title: 'Code Fork',
  class: 'fas fa-code-fork',
  name: 'code-fork'
}, {
  title: 'Code Merge',
  class: 'fas fa-code-merge',
  name: 'code-merge'
}, {
  title: 'Code Pull Request',
  class: 'fas fa-code-pull-request',
  name: 'code-pull-request'
}, {
  title: 'Code',
  class: 'fas fa-code',
  name: 'code'
}, {
  title: 'Coins',
  class: 'fas fa-coins',
  name: 'coins'
}, {
  title: 'Colon Sign',
  class: 'fas fa-colon-sign',
  name: 'colon-sign'
}, {
  title: 'Comment Dollar',
  class: 'fas fa-comment-dollar',
  name: 'comment-dollar'
}, {
  title: 'Comment Dots',
  class: 'fas fa-comment-dots',
  name: 'comment-dots'
}, {
  title: 'Comment Medical',
  class: 'fas fa-comment-medical',
  name: 'comment-medical'
}, {
  title: 'Comment Slash',
  class: 'fas fa-comment-slash',
  name: 'comment-slash'
}, {
  title: 'Comment Sms',
  class: 'fas fa-comment-sms',
  name: 'comment-sms'
}, {
  title: 'Comment',
  class: 'fas fa-comment',
  name: 'comment'
}, {
  title: 'Comments Dollar',
  class: 'fas fa-comments-dollar',
  name: 'comments-dollar'
}, {
  title: 'Comments',
  class: 'fas fa-comments',
  name: 'comments'
}, {
  title: 'Compact Disc',
  class: 'fas fa-compact-disc',
  name: 'compact-disc'
}, {
  title: 'Compass Drafting',
  class: 'fas fa-compass-drafting',
  name: 'compass-drafting'
}, {
  title: 'Compass',
  class: 'fas fa-compass',
  name: 'compass'
}, {
  title: 'Compress',
  class: 'fas fa-compress',
  name: 'compress'
}, {
  title: 'Computer Mouse',
  class: 'fas fa-computer-mouse',
  name: 'computer-mouse'
}, {
  title: 'Computer',
  class: 'fas fa-computer',
  name: 'computer'
}, {
  title: 'Cookie Bite',
  class: 'fas fa-cookie-bite',
  name: 'cookie-bite'
}, {
  title: 'Cookie',
  class: 'fas fa-cookie',
  name: 'cookie'
}, {
  title: 'Copy',
  class: 'fas fa-copy',
  name: 'copy'
}, {
  title: 'Copyright',
  class: 'fas fa-copyright',
  name: 'copyright'
}, {
  title: 'Couch',
  class: 'fas fa-couch',
  name: 'couch'
}, {
  title: 'Cow',
  class: 'fas fa-cow',
  name: 'cow'
}, {
  title: 'Credit Card',
  class: 'fas fa-credit-card',
  name: 'credit-card'
}, {
  title: 'Crop Simple',
  class: 'fas fa-crop-simple',
  name: 'crop-simple'
}, {
  title: 'Crop',
  class: 'fas fa-crop',
  name: 'crop'
}, {
  title: 'Cross',
  class: 'fas fa-cross',
  name: 'cross'
}, {
  title: 'Crosshairs',
  class: 'fas fa-crosshairs',
  name: 'crosshairs'
}, {
  title: 'Crow',
  class: 'fas fa-crow',
  name: 'crow'
}, {
  title: 'Crown',
  class: 'fas fa-crown',
  name: 'crown'
}, {
  title: 'Crutch',
  class: 'fas fa-crutch',
  name: 'crutch'
}, {
  title: 'Cruzeiro Sign',
  class: 'fas fa-cruzeiro-sign',
  name: 'cruzeiro-sign'
}, {
  title: 'Cube',
  class: 'fas fa-cube',
  name: 'cube'
}, {
  title: 'Cubes Stacked',
  class: 'fas fa-cubes-stacked',
  name: 'cubes-stacked'
}, {
  title: 'Cubes',
  class: 'fas fa-cubes',
  name: 'cubes'
}, {
  title: 'D',
  class: 'fas fa-d',
  name: 'd'
}, {
  title: 'Database',
  class: 'fas fa-database',
  name: 'database'
}, {
  title: 'Delete Left',
  class: 'fas fa-delete-left',
  name: 'delete-left'
}, {
  title: 'Democrat',
  class: 'fas fa-democrat',
  name: 'democrat'
}, {
  title: 'Desktop',
  class: 'fas fa-desktop',
  name: 'desktop'
}, {
  title: 'Dharmachakra',
  class: 'fas fa-dharmachakra',
  name: 'dharmachakra'
}, {
  title: 'Diagram Next',
  class: 'fas fa-diagram-next',
  name: 'diagram-next'
}, {
  title: 'Diagram Predecessor',
  class: 'fas fa-diagram-predecessor',
  name: 'diagram-predecessor'
}, {
  title: 'Diagram Project',
  class: 'fas fa-diagram-project',
  name: 'diagram-project'
}, {
  title: 'Diagram Successor',
  class: 'fas fa-diagram-successor',
  name: 'diagram-successor'
}, {
  title: 'Diamond Turn Right',
  class: 'fas fa-diamond-turn-right',
  name: 'diamond-turn-right'
}, {
  title: 'Diamond',
  class: 'fas fa-diamond',
  name: 'diamond'
}, {
  title: 'Dice D20',
  class: 'fas fa-dice-d20',
  name: 'dice-d20'
}, {
  title: 'Dice D6',
  class: 'fas fa-dice-d6',
  name: 'dice-d6'
}, {
  title: 'Dice Five',
  class: 'fas fa-dice-five',
  name: 'dice-five'
}, {
  title: 'Dice Four',
  class: 'fas fa-dice-four',
  name: 'dice-four'
}, {
  title: 'Dice One',
  class: 'fas fa-dice-one',
  name: 'dice-one'
}, {
  title: 'Dice Six',
  class: 'fas fa-dice-six',
  name: 'dice-six'
}, {
  title: 'Dice Three',
  class: 'fas fa-dice-three',
  name: 'dice-three'
}, {
  title: 'Dice Two',
  class: 'fas fa-dice-two',
  name: 'dice-two'
}, {
  title: 'Dice',
  class: 'fas fa-dice',
  name: 'dice'
}, {
  title: 'Disease',
  class: 'fas fa-disease',
  name: 'disease'
}, {
  title: 'Display',
  class: 'fas fa-display',
  name: 'display'
}, {
  title: 'Divide',
  class: 'fas fa-divide',
  name: 'divide'
}, {
  title: 'Dna',
  class: 'fas fa-dna',
  name: 'dna'
}, {
  title: 'Dog',
  class: 'fas fa-dog',
  name: 'dog'
}, {
  title: 'Dollar Sign',
  class: 'fas fa-dollar-sign',
  name: 'dollar-sign'
}, {
  title: 'Dolly',
  class: 'fas fa-dolly',
  name: 'dolly'
}, {
  title: 'Dong Sign',
  class: 'fas fa-dong-sign',
  name: 'dong-sign'
}, {
  title: 'Door Closed',
  class: 'fas fa-door-closed',
  name: 'door-closed'
}, {
  title: 'Door Open',
  class: 'fas fa-door-open',
  name: 'door-open'
}, {
  title: 'Dove',
  class: 'fas fa-dove',
  name: 'dove'
}, {
  title: 'Down Left And Up Right To Center',
  class: 'fas fa-down-left-and-up-right-to-center',
  name: 'down-left-and-up-right-to-center'
}, {
  title: 'Down Long',
  class: 'fas fa-down-long',
  name: 'down-long'
}, {
  title: 'Download',
  class: 'fas fa-download',
  name: 'download'
}, {
  title: 'Dragon',
  class: 'fas fa-dragon',
  name: 'dragon'
}, {
  title: 'Draw Polygon',
  class: 'fas fa-draw-polygon',
  name: 'draw-polygon'
}, {
  title: 'Droplet Slash',
  class: 'fas fa-droplet-slash',
  name: 'droplet-slash'
}, {
  title: 'Droplet',
  class: 'fas fa-droplet',
  name: 'droplet'
}, {
  title: 'Drum Steelpan',
  class: 'fas fa-drum-steelpan',
  name: 'drum-steelpan'
}, {
  title: 'Drum',
  class: 'fas fa-drum',
  name: 'drum'
}, {
  title: 'Drumstick Bite',
  class: 'fas fa-drumstick-bite',
  name: 'drumstick-bite'
}, {
  title: 'Dumbbell',
  class: 'fas fa-dumbbell',
  name: 'dumbbell'
}, {
  title: 'Dumpster Fire',
  class: 'fas fa-dumpster-fire',
  name: 'dumpster-fire'
}, {
  title: 'Dumpster',
  class: 'fas fa-dumpster',
  name: 'dumpster'
}, {
  title: 'Dungeon',
  class: 'fas fa-dungeon',
  name: 'dungeon'
}, {
  title: 'E',
  class: 'fas fa-e',
  name: 'e'
}, {
  title: 'Ear Deaf',
  class: 'fas fa-ear-deaf',
  name: 'ear-deaf'
}, {
  title: 'Ear Listen',
  class: 'fas fa-ear-listen',
  name: 'ear-listen'
}, {
  title: 'Earth Africa',
  class: 'fas fa-earth-africa',
  name: 'earth-africa'
}, {
  title: 'Earth Americas',
  class: 'fas fa-earth-americas',
  name: 'earth-americas'
}, {
  title: 'Earth Asia',
  class: 'fas fa-earth-asia',
  name: 'earth-asia'
}, {
  title: 'Earth Europe',
  class: 'fas fa-earth-europe',
  name: 'earth-europe'
}, {
  title: 'Earth Oceania',
  class: 'fas fa-earth-oceania',
  name: 'earth-oceania'
}, {
  title: 'Egg',
  class: 'fas fa-egg',
  name: 'egg'
}, {
  title: 'Eject',
  class: 'fas fa-eject',
  name: 'eject'
}, {
  title: 'Elevator',
  class: 'fas fa-elevator',
  name: 'elevator'
}, {
  title: 'Ellipsis Vertical',
  class: 'fas fa-ellipsis-vertical',
  name: 'ellipsis-vertical'
}, {
  title: 'Ellipsis',
  class: 'fas fa-ellipsis',
  name: 'ellipsis'
}, {
  title: 'Envelope Circle Check',
  class: 'fas fa-envelope-circle-check',
  name: 'envelope-circle-check'
}, {
  title: 'Envelope Open Text',
  class: 'fas fa-envelope-open-text',
  name: 'envelope-open-text'
}, {
  title: 'Envelope Open',
  class: 'fas fa-envelope-open',
  name: 'envelope-open'
}, {
  title: 'Envelope',
  class: 'fas fa-envelope',
  name: 'envelope'
}, {
  title: 'Envelopes Bulk',
  class: 'fas fa-envelopes-bulk',
  name: 'envelopes-bulk'
}, {
  title: 'Equals',
  class: 'fas fa-equals',
  name: 'equals'
}, {
  title: 'Eraser',
  class: 'fas fa-eraser',
  name: 'eraser'
}, {
  title: 'Ethernet',
  class: 'fas fa-ethernet',
  name: 'ethernet'
}, {
  title: 'Euro Sign',
  class: 'fas fa-euro-sign',
  name: 'euro-sign'
}, {
  title: 'Exclamation',
  class: 'fas fa-exclamation',
  name: 'exclamation'
}, {
  title: 'Expand',
  class: 'fas fa-expand',
  name: 'expand'
}, {
  title: 'Explosion',
  class: 'fas fa-explosion',
  name: 'explosion'
}, {
  title: 'Eye Dropper',
  class: 'fas fa-eye-dropper',
  name: 'eye-dropper'
}, {
  title: 'Eye Low Vision',
  class: 'fas fa-eye-low-vision',
  name: 'eye-low-vision'
}, {
  title: 'Eye Slash',
  class: 'fas fa-eye-slash',
  name: 'eye-slash'
}, {
  title: 'Eye',
  class: 'fas fa-eye',
  name: 'eye'
}, {
  title: 'F',
  class: 'fas fa-f',
  name: 'f'
}, {
  title: 'Face Angry',
  class: 'fas fa-face-angry',
  name: 'face-angry'
}, {
  title: 'Face Dizzy',
  class: 'fas fa-face-dizzy',
  name: 'face-dizzy'
}, {
  title: 'Face Flushed',
  class: 'fas fa-face-flushed',
  name: 'face-flushed'
}, {
  title: 'Face Frown Open',
  class: 'fas fa-face-frown-open',
  name: 'face-frown-open'
}, {
  title: 'Face Frown',
  class: 'fas fa-face-frown',
  name: 'face-frown'
}, {
  title: 'Face Grimace',
  class: 'fas fa-face-grimace',
  name: 'face-grimace'
}, {
  title: 'Face Grin Beam Sweat',
  class: 'fas fa-face-grin-beam-sweat',
  name: 'face-grin-beam-sweat'
}, {
  title: 'Face Grin Beam',
  class: 'fas fa-face-grin-beam',
  name: 'face-grin-beam'
}, {
  title: 'Face Grin Hearts',
  class: 'fas fa-face-grin-hearts',
  name: 'face-grin-hearts'
}, {
  title: 'Face Grin Squint Tears',
  class: 'fas fa-face-grin-squint-tears',
  name: 'face-grin-squint-tears'
}, {
  title: 'Face Grin Squint',
  class: 'fas fa-face-grin-squint',
  name: 'face-grin-squint'
}, {
  title: 'Face Grin Stars',
  class: 'fas fa-face-grin-stars',
  name: 'face-grin-stars'
}, {
  title: 'Face Grin Tears',
  class: 'fas fa-face-grin-tears',
  name: 'face-grin-tears'
}, {
  title: 'Face Grin Tongue Squint',
  class: 'fas fa-face-grin-tongue-squint',
  name: 'face-grin-tongue-squint'
}, {
  title: 'Face Grin Tongue Wink',
  class: 'fas fa-face-grin-tongue-wink',
  name: 'face-grin-tongue-wink'
}, {
  title: 'Face Grin Tongue',
  class: 'fas fa-face-grin-tongue',
  name: 'face-grin-tongue'
}, {
  title: 'Face Grin Wide',
  class: 'fas fa-face-grin-wide',
  name: 'face-grin-wide'
}, {
  title: 'Face Grin Wink',
  class: 'fas fa-face-grin-wink',
  name: 'face-grin-wink'
}, {
  title: 'Face Grin',
  class: 'fas fa-face-grin',
  name: 'face-grin'
}, {
  title: 'Face Kiss Beam',
  class: 'fas fa-face-kiss-beam',
  name: 'face-kiss-beam'
}, {
  title: 'Face Kiss Wink Heart',
  class: 'fas fa-face-kiss-wink-heart',
  name: 'face-kiss-wink-heart'
}, {
  title: 'Face Kiss',
  class: 'fas fa-face-kiss',
  name: 'face-kiss'
}, {
  title: 'Face Laugh Beam',
  class: 'fas fa-face-laugh-beam',
  name: 'face-laugh-beam'
}, {
  title: 'Face Laugh Squint',
  class: 'fas fa-face-laugh-squint',
  name: 'face-laugh-squint'
}, {
  title: 'Face Laugh Wink',
  class: 'fas fa-face-laugh-wink',
  name: 'face-laugh-wink'
}, {
  title: 'Face Laugh',
  class: 'fas fa-face-laugh',
  name: 'face-laugh'
}, {
  title: 'Face Meh Blank',
  class: 'fas fa-face-meh-blank',
  name: 'face-meh-blank'
}, {
  title: 'Face Meh',
  class: 'fas fa-face-meh',
  name: 'face-meh'
}, {
  title: 'Face Rolling Eyes',
  class: 'fas fa-face-rolling-eyes',
  name: 'face-rolling-eyes'
}, {
  title: 'Face Sad Cry',
  class: 'fas fa-face-sad-cry',
  name: 'face-sad-cry'
}, {
  title: 'Face Sad Tear',
  class: 'fas fa-face-sad-tear',
  name: 'face-sad-tear'
}, {
  title: 'Face Smile Beam',
  class: 'fas fa-face-smile-beam',
  name: 'face-smile-beam'
}, {
  title: 'Face Smile Wink',
  class: 'fas fa-face-smile-wink',
  name: 'face-smile-wink'
}, {
  title: 'Face Smile',
  class: 'fas fa-face-smile',
  name: 'face-smile'
}, {
  title: 'Face Surprise',
  class: 'fas fa-face-surprise',
  name: 'face-surprise'
}, {
  title: 'Face Tired',
  class: 'fas fa-face-tired',
  name: 'face-tired'
}, {
  title: 'Fan',
  class: 'fas fa-fan',
  name: 'fan'
}, {
  title: 'Faucet Drip',
  class: 'fas fa-faucet-drip',
  name: 'faucet-drip'
}, {
  title: 'Faucet',
  class: 'fas fa-faucet',
  name: 'faucet'
}, {
  title: 'Fax',
  class: 'fas fa-fax',
  name: 'fax'
}, {
  title: 'Feather Pointed',
  class: 'fas fa-feather-pointed',
  name: 'feather-pointed'
}, {
  title: 'Feather',
  class: 'fas fa-feather',
  name: 'feather'
}, {
  title: 'Ferry',
  class: 'fas fa-ferry',
  name: 'ferry'
}, {
  title: 'File Arrow Down',
  class: 'fas fa-file-arrow-down',
  name: 'file-arrow-down'
}, {
  title: 'File Arrow Up',
  class: 'fas fa-file-arrow-up',
  name: 'file-arrow-up'
}, {
  title: 'File Audio',
  class: 'fas fa-file-audio',
  name: 'file-audio'
}, {
  title: 'File Circle Check',
  class: 'fas fa-file-circle-check',
  name: 'file-circle-check'
}, {
  title: 'File Circle Exclamation',
  class: 'fas fa-file-circle-exclamation',
  name: 'file-circle-exclamation'
}, {
  title: 'File Circle Minus',
  class: 'fas fa-file-circle-minus',
  name: 'file-circle-minus'
}, {
  title: 'File Circle Plus',
  class: 'fas fa-file-circle-plus',
  name: 'file-circle-plus'
}, {
  title: 'File Circle Question',
  class: 'fas fa-file-circle-question',
  name: 'file-circle-question'
}, {
  title: 'File Circle Xmark',
  class: 'fas fa-file-circle-xmark',
  name: 'file-circle-xmark'
}, {
  title: 'File Code',
  class: 'fas fa-file-code',
  name: 'file-code'
}, {
  title: 'File Contract',
  class: 'fas fa-file-contract',
  name: 'file-contract'
}, {
  title: 'File Csv',
  class: 'fas fa-file-csv',
  name: 'file-csv'
}, {
  title: 'File Excel',
  class: 'fas fa-file-excel',
  name: 'file-excel'
}, {
  title: 'File Export',
  class: 'fas fa-file-export',
  name: 'file-export'
}, {
  title: 'File Image',
  class: 'fas fa-file-image',
  name: 'file-image'
}, {
  title: 'File Import',
  class: 'fas fa-file-import',
  name: 'file-import'
}, {
  title: 'File Invoice Dollar',
  class: 'fas fa-file-invoice-dollar',
  name: 'file-invoice-dollar'
}, {
  title: 'File Invoice',
  class: 'fas fa-file-invoice',
  name: 'file-invoice'
}, {
  title: 'File Lines',
  class: 'fas fa-file-lines',
  name: 'file-lines'
}, {
  title: 'File Medical',
  class: 'fas fa-file-medical',
  name: 'file-medical'
}, {
  title: 'File Pdf',
  class: 'fas fa-file-pdf',
  name: 'file-pdf'
}, {
  title: 'File Pen',
  class: 'fas fa-file-pen',
  name: 'file-pen'
}, {
  title: 'File Powerpoint',
  class: 'fas fa-file-powerpoint',
  name: 'file-powerpoint'
}, {
  title: 'File Prescription',
  class: 'fas fa-file-prescription',
  name: 'file-prescription'
}, {
  title: 'File Shield',
  class: 'fas fa-file-shield',
  name: 'file-shield'
}, {
  title: 'File Signature',
  class: 'fas fa-file-signature',
  name: 'file-signature'
}, {
  title: 'File Video',
  class: 'fas fa-file-video',
  name: 'file-video'
}, {
  title: 'File Waveform',
  class: 'fas fa-file-waveform',
  name: 'file-waveform'
}, {
  title: 'File Word',
  class: 'fas fa-file-word',
  name: 'file-word'
}, {
  title: 'File Zipper',
  class: 'fas fa-file-zipper',
  name: 'file-zipper'
}, {
  title: 'File',
  class: 'fas fa-file',
  name: 'file'
}, {
  title: 'Fill Drip',
  class: 'fas fa-fill-drip',
  name: 'fill-drip'
}, {
  title: 'Fill',
  class: 'fas fa-fill',
  name: 'fill'
}, {
  title: 'Film',
  class: 'fas fa-film',
  name: 'film'
}, {
  title: 'Filter Circle Dollar',
  class: 'fas fa-filter-circle-dollar',
  name: 'filter-circle-dollar'
}, {
  title: 'Filter Circle Xmark',
  class: 'fas fa-filter-circle-xmark',
  name: 'filter-circle-xmark'
}, {
  title: 'Filter',
  class: 'fas fa-filter',
  name: 'filter'
}, {
  title: 'Fingerprint',
  class: 'fas fa-fingerprint',
  name: 'fingerprint'
}, {
  title: 'Fire Burner',
  class: 'fas fa-fire-burner',
  name: 'fire-burner'
}, {
  title: 'Fire Extinguisher',
  class: 'fas fa-fire-extinguisher',
  name: 'fire-extinguisher'
}, {
  title: 'Fire Flame Curved',
  class: 'fas fa-fire-flame-curved',
  name: 'fire-flame-curved'
}, {
  title: 'Fire Flame Simple',
  class: 'fas fa-fire-flame-simple',
  name: 'fire-flame-simple'
}, {
  title: 'Fire',
  class: 'fas fa-fire',
  name: 'fire'
}, {
  title: 'Fish Fins',
  class: 'fas fa-fish-fins',
  name: 'fish-fins'
}, {
  title: 'Fish',
  class: 'fas fa-fish',
  name: 'fish'
}, {
  title: 'Flag Checkered',
  class: 'fas fa-flag-checkered',
  name: 'flag-checkered'
}, {
  title: 'Flag Usa',
  class: 'fas fa-flag-usa',
  name: 'flag-usa'
}, {
  title: 'Flag',
  class: 'fas fa-flag',
  name: 'flag'
}, {
  title: 'Flask Vial',
  class: 'fas fa-flask-vial',
  name: 'flask-vial'
}, {
  title: 'Flask',
  class: 'fas fa-flask',
  name: 'flask'
}, {
  title: 'Floppy Disk',
  class: 'fas fa-floppy-disk',
  name: 'floppy-disk'
}, {
  title: 'Florin Sign',
  class: 'fas fa-florin-sign',
  name: 'florin-sign'
}, {
  title: 'Folder Closed',
  class: 'fas fa-folder-closed',
  name: 'folder-closed'
}, {
  title: 'Folder Minus',
  class: 'fas fa-folder-minus',
  name: 'folder-minus'
}, {
  title: 'Folder Open',
  class: 'fas fa-folder-open',
  name: 'folder-open'
}, {
  title: 'Folder Plus',
  class: 'fas fa-folder-plus',
  name: 'folder-plus'
}, {
  title: 'Folder Tree',
  class: 'fas fa-folder-tree',
  name: 'folder-tree'
}, {
  title: 'Folder',
  class: 'fas fa-folder',
  name: 'folder'
}, {
  title: 'Font Awesome',
  class: 'fas fa-font-awesome',
  name: 'font-awesome'
}, {
  title: 'Font',
  class: 'fas fa-font',
  name: 'font'
}, {
  title: 'Football',
  class: 'fas fa-football',
  name: 'football'
}, {
  title: 'Forward Fast',
  class: 'fas fa-forward-fast',
  name: 'forward-fast'
}, {
  title: 'Forward Step',
  class: 'fas fa-forward-step',
  name: 'forward-step'
}, {
  title: 'Forward',
  class: 'fas fa-forward',
  name: 'forward'
}, {
  title: 'Franc Sign',
  class: 'fas fa-franc-sign',
  name: 'franc-sign'
}, {
  title: 'Frog',
  class: 'fas fa-frog',
  name: 'frog'
}, {
  title: 'Futbol',
  class: 'fas fa-futbol',
  name: 'futbol'
}, {
  title: 'G',
  class: 'fas fa-g',
  name: 'g'
}, {
  title: 'Gamepad',
  class: 'fas fa-gamepad',
  name: 'gamepad'
}, {
  title: 'Gas Pump',
  class: 'fas fa-gas-pump',
  name: 'gas-pump'
}, {
  title: 'Gauge High',
  class: 'fas fa-gauge-high',
  name: 'gauge-high'
}, {
  title: 'Gauge Simple High',
  class: 'fas fa-gauge-simple-high',
  name: 'gauge-simple-high'
}, {
  title: 'Gauge Simple',
  class: 'fas fa-gauge-simple',
  name: 'gauge-simple'
}, {
  title: 'Gauge',
  class: 'fas fa-gauge',
  name: 'gauge'
}, {
  title: 'Gavel',
  class: 'fas fa-gavel',
  name: 'gavel'
}, {
  title: 'Gear',
  class: 'fas fa-gear',
  name: 'gear'
}, {
  title: 'Gears',
  class: 'fas fa-gears',
  name: 'gears'
}, {
  title: 'Gem',
  class: 'fas fa-gem',
  name: 'gem'
}, {
  title: 'Genderless',
  class: 'fas fa-genderless',
  name: 'genderless'
}, {
  title: 'Ghost',
  class: 'fas fa-ghost',
  name: 'ghost'
}, {
  title: 'Gift',
  class: 'fas fa-gift',
  name: 'gift'
}, {
  title: 'Gifts',
  class: 'fas fa-gifts',
  name: 'gifts'
}, {
  title: 'Glass Water Droplet',
  class: 'fas fa-glass-water-droplet',
  name: 'glass-water-droplet'
}, {
  title: 'Glass Water',
  class: 'fas fa-glass-water',
  name: 'glass-water'
}, {
  title: 'Glasses',
  class: 'fas fa-glasses',
  name: 'glasses'
}, {
  title: 'Globe',
  class: 'fas fa-globe',
  name: 'globe'
}, {
  title: 'Golf Ball Tee',
  class: 'fas fa-golf-ball-tee',
  name: 'golf-ball-tee'
}, {
  title: 'Gopuram',
  class: 'fas fa-gopuram',
  name: 'gopuram'
}, {
  title: 'Graduation Cap',
  class: 'fas fa-graduation-cap',
  name: 'graduation-cap'
}, {
  title: 'Greater Than Equal',
  class: 'fas fa-greater-than-equal',
  name: 'greater-than-equal'
}, {
  title: 'Greater Than',
  class: 'fas fa-greater-than',
  name: 'greater-than'
}, {
  title: 'Grip Lines Vertical',
  class: 'fas fa-grip-lines-vertical',
  name: 'grip-lines-vertical'
}, {
  title: 'Grip Lines',
  class: 'fas fa-grip-lines',
  name: 'grip-lines'
}, {
  title: 'Grip Vertical',
  class: 'fas fa-grip-vertical',
  name: 'grip-vertical'
}, {
  title: 'Grip',
  class: 'fas fa-grip',
  name: 'grip'
}, {
  title: 'Group Arrows Rotate',
  class: 'fas fa-group-arrows-rotate',
  name: 'group-arrows-rotate'
}, {
  title: 'Guarani Sign',
  class: 'fas fa-guarani-sign',
  name: 'guarani-sign'
}, {
  title: 'Guitar',
  class: 'fas fa-guitar',
  name: 'guitar'
}, {
  title: 'Gun',
  class: 'fas fa-gun',
  name: 'gun'
}, {
  title: 'H',
  class: 'fas fa-h',
  name: 'h'
}, {
  title: 'Hammer',
  class: 'fas fa-hammer',
  name: 'hammer'
}, {
  title: 'Hamsa',
  class: 'fas fa-hamsa',
  name: 'hamsa'
}, {
  title: 'Hand Back Fist',
  class: 'fas fa-hand-back-fist',
  name: 'hand-back-fist'
}, {
  title: 'Hand Dots',
  class: 'fas fa-hand-dots',
  name: 'hand-dots'
}, {
  title: 'Hand Fist',
  class: 'fas fa-hand-fist',
  name: 'hand-fist'
}, {
  title: 'Hand Holding Dollar',
  class: 'fas fa-hand-holding-dollar',
  name: 'hand-holding-dollar'
}, {
  title: 'Hand Holding Droplet',
  class: 'fas fa-hand-holding-droplet',
  name: 'hand-holding-droplet'
}, {
  title: 'Hand Holding Hand',
  class: 'fas fa-hand-holding-hand',
  name: 'hand-holding-hand'
}, {
  title: 'Hand Holding Heart',
  class: 'fas fa-hand-holding-heart',
  name: 'hand-holding-heart'
}, {
  title: 'Hand Holding Medical',
  class: 'fas fa-hand-holding-medical',
  name: 'hand-holding-medical'
}, {
  title: 'Hand Holding',
  class: 'fas fa-hand-holding',
  name: 'hand-holding'
}, {
  title: 'Hand Lizard',
  class: 'fas fa-hand-lizard',
  name: 'hand-lizard'
}, {
  title: 'Hand Middle Finger',
  class: 'fas fa-hand-middle-finger',
  name: 'hand-middle-finger'
}, {
  title: 'Hand Peace',
  class: 'fas fa-hand-peace',
  name: 'hand-peace'
}, {
  title: 'Hand Point Down',
  class: 'fas fa-hand-point-down',
  name: 'hand-point-down'
}, {
  title: 'Hand Point Left',
  class: 'fas fa-hand-point-left',
  name: 'hand-point-left'
}, {
  title: 'Hand Point Right',
  class: 'fas fa-hand-point-right',
  name: 'hand-point-right'
}, {
  title: 'Hand Point Up',
  class: 'fas fa-hand-point-up',
  name: 'hand-point-up'
}, {
  title: 'Hand Pointer',
  class: 'fas fa-hand-pointer',
  name: 'hand-pointer'
}, {
  title: 'Hand Scissors',
  class: 'fas fa-hand-scissors',
  name: 'hand-scissors'
}, {
  title: 'Hand Sparkles',
  class: 'fas fa-hand-sparkles',
  name: 'hand-sparkles'
}, {
  title: 'Hand Spock',
  class: 'fas fa-hand-spock',
  name: 'hand-spock'
}, {
  title: 'Hand',
  class: 'fas fa-hand',
  name: 'hand'
}, {
  title: 'Handcuffs',
  class: 'fas fa-handcuffs',
  name: 'handcuffs'
}, {
  title: 'Hands Asl Interpreting',
  class: 'fas fa-hands-asl-interpreting',
  name: 'hands-asl-interpreting'
}, {
  title: 'Hands Bound',
  class: 'fas fa-hands-bound',
  name: 'hands-bound'
}, {
  title: 'Hands Bubbles',
  class: 'fas fa-hands-bubbles',
  name: 'hands-bubbles'
}, {
  title: 'Hands Clapping',
  class: 'fas fa-hands-clapping',
  name: 'hands-clapping'
}, {
  title: 'Hands Holding Child',
  class: 'fas fa-hands-holding-child',
  name: 'hands-holding-child'
}, {
  title: 'Hands Holding Circle',
  class: 'fas fa-hands-holding-circle',
  name: 'hands-holding-circle'
}, {
  title: 'Hands Holding',
  class: 'fas fa-hands-holding',
  name: 'hands-holding'
}, {
  title: 'Hands Praying',
  class: 'fas fa-hands-praying',
  name: 'hands-praying'
}, {
  title: 'Hands',
  class: 'fas fa-hands',
  name: 'hands'
}, {
  title: 'Handshake Angle',
  class: 'fas fa-handshake-angle',
  name: 'handshake-angle'
}, {
  title: 'Handshake Simple Slash',
  class: 'fas fa-handshake-simple-slash',
  name: 'handshake-simple-slash'
}, {
  title: 'Handshake Simple',
  class: 'fas fa-handshake-simple',
  name: 'handshake-simple'
}, {
  title: 'Handshake Slash',
  class: 'fas fa-handshake-slash',
  name: 'handshake-slash'
}, {
  title: 'Handshake',
  class: 'fas fa-handshake',
  name: 'handshake'
}, {
  title: 'Hanukiah',
  class: 'fas fa-hanukiah',
  name: 'hanukiah'
}, {
  title: 'Hard Drive',
  class: 'fas fa-hard-drive',
  name: 'hard-drive'
}, {
  title: 'Hashtag',
  class: 'fas fa-hashtag',
  name: 'hashtag'
}, {
  title: 'Hat Cowboy Side',
  class: 'fas fa-hat-cowboy-side',
  name: 'hat-cowboy-side'
}, {
  title: 'Hat Cowboy',
  class: 'fas fa-hat-cowboy',
  name: 'hat-cowboy'
}, {
  title: 'Hat Wizard',
  class: 'fas fa-hat-wizard',
  name: 'hat-wizard'
}, {
  title: 'Head Side Cough Slash',
  class: 'fas fa-head-side-cough-slash',
  name: 'head-side-cough-slash'
}, {
  title: 'Head Side Cough',
  class: 'fas fa-head-side-cough',
  name: 'head-side-cough'
}, {
  title: 'Head Side Mask',
  class: 'fas fa-head-side-mask',
  name: 'head-side-mask'
}, {
  title: 'Head Side Virus',
  class: 'fas fa-head-side-virus',
  name: 'head-side-virus'
}, {
  title: 'Heading',
  class: 'fas fa-heading',
  name: 'heading'
}, {
  title: 'Headphones Simple',
  class: 'fas fa-headphones-simple',
  name: 'headphones-simple'
}, {
  title: 'Headphones',
  class: 'fas fa-headphones',
  name: 'headphones'
}, {
  title: 'Headset',
  class: 'fas fa-headset',
  name: 'headset'
}, {
  title: 'Heart Circle Bolt',
  class: 'fas fa-heart-circle-bolt',
  name: 'heart-circle-bolt'
}, {
  title: 'Heart Circle Check',
  class: 'fas fa-heart-circle-check',
  name: 'heart-circle-check'
}, {
  title: 'Heart Circle Exclamation',
  class: 'fas fa-heart-circle-exclamation',
  name: 'heart-circle-exclamation'
}, {
  title: 'Heart Circle Minus',
  class: 'fas fa-heart-circle-minus',
  name: 'heart-circle-minus'
}, {
  title: 'Heart Circle Plus',
  class: 'fas fa-heart-circle-plus',
  name: 'heart-circle-plus'
}, {
  title: 'Heart Circle Xmark',
  class: 'fas fa-heart-circle-xmark',
  name: 'heart-circle-xmark'
}, {
  title: 'Heart Crack',
  class: 'fas fa-heart-crack',
  name: 'heart-crack'
}, {
  title: 'Heart Pulse',
  class: 'fas fa-heart-pulse',
  name: 'heart-pulse'
}, {
  title: 'Heart',
  class: 'fas fa-heart',
  name: 'heart'
}, {
  title: 'Helicopter Symbol',
  class: 'fas fa-helicopter-symbol',
  name: 'helicopter-symbol'
}, {
  title: 'Helicopter',
  class: 'fas fa-helicopter',
  name: 'helicopter'
}, {
  title: 'Helmet Safety',
  class: 'fas fa-helmet-safety',
  name: 'helmet-safety'
}, {
  title: 'Helmet Un',
  class: 'fas fa-helmet-un',
  name: 'helmet-un'
}, {
  title: 'Highlighter',
  class: 'fas fa-highlighter',
  name: 'highlighter'
}, {
  title: 'Hill Avalanche',
  class: 'fas fa-hill-avalanche',
  name: 'hill-avalanche'
}, {
  title: 'Hill Rockslide',
  class: 'fas fa-hill-rockslide',
  name: 'hill-rockslide'
}, {
  title: 'Hippo',
  class: 'fas fa-hippo',
  name: 'hippo'
}, {
  title: 'Hockey Puck',
  class: 'fas fa-hockey-puck',
  name: 'hockey-puck'
}, {
  title: 'Holly Berry',
  class: 'fas fa-holly-berry',
  name: 'holly-berry'
}, {
  title: 'Horse Head',
  class: 'fas fa-horse-head',
  name: 'horse-head'
}, {
  title: 'Horse',
  class: 'fas fa-horse',
  name: 'horse'
}, {
  title: 'Hospital User',
  class: 'fas fa-hospital-user',
  name: 'hospital-user'
}, {
  title: 'Hospital',
  class: 'fas fa-hospital',
  name: 'hospital'
}, {
  title: 'Hot Tub Person',
  class: 'fas fa-hot-tub-person',
  name: 'hot-tub-person'
}, {
  title: 'Hotdog',
  class: 'fas fa-hotdog',
  name: 'hotdog'
}, {
  title: 'Hotel',
  class: 'fas fa-hotel',
  name: 'hotel'
}, {
  title: 'Hourglass End',
  class: 'fas fa-hourglass-end',
  name: 'hourglass-end'
}, {
  title: 'Hourglass Half',
  class: 'fas fa-hourglass-half',
  name: 'hourglass-half'
}, {
  title: 'Hourglass Start',
  class: 'fas fa-hourglass-start',
  name: 'hourglass-start'
}, {
  title: 'Hourglass',
  class: 'fas fa-hourglass',
  name: 'hourglass'
}, {
  title: 'House Chimney Crack',
  class: 'fas fa-house-chimney-crack',
  name: 'house-chimney-crack'
}, {
  title: 'House Chimney Medical',
  class: 'fas fa-house-chimney-medical',
  name: 'house-chimney-medical'
}, {
  title: 'House Chimney User',
  class: 'fas fa-house-chimney-user',
  name: 'house-chimney-user'
}, {
  title: 'House Chimney Window',
  class: 'fas fa-house-chimney-window',
  name: 'house-chimney-window'
}, {
  title: 'House Chimney',
  class: 'fas fa-house-chimney',
  name: 'house-chimney'
}, {
  title: 'House Circle Check',
  class: 'fas fa-house-circle-check',
  name: 'house-circle-check'
}, {
  title: 'House Circle Exclamation',
  class: 'fas fa-house-circle-exclamation',
  name: 'house-circle-exclamation'
}, {
  title: 'House Circle Xmark',
  class: 'fas fa-house-circle-xmark',
  name: 'house-circle-xmark'
}, {
  title: 'House Crack',
  class: 'fas fa-house-crack',
  name: 'house-crack'
}, {
  title: 'House Fire',
  class: 'fas fa-house-fire',
  name: 'house-fire'
}, {
  title: 'House Flag',
  class: 'fas fa-house-flag',
  name: 'house-flag'
}, {
  title: 'House Flood Water Circle Arrow Right',
  class: 'fas fa-house-flood-water-circle-arrow-right',
  name: 'house-flood-water-circle-arrow-right'
}, {
  title: 'House Flood Water',
  class: 'fas fa-house-flood-water',
  name: 'house-flood-water'
}, {
  title: 'House Laptop',
  class: 'fas fa-house-laptop',
  name: 'house-laptop'
}, {
  title: 'House Lock',
  class: 'fas fa-house-lock',
  name: 'house-lock'
}, {
  title: 'House Medical Circle Check',
  class: 'fas fa-house-medical-circle-check',
  name: 'house-medical-circle-check'
}, {
  title: 'House Medical Circle Exclamation',
  class: 'fas fa-house-medical-circle-exclamation',
  name: 'house-medical-circle-exclamation'
}, {
  title: 'House Medical Circle Xmark',
  class: 'fas fa-house-medical-circle-xmark',
  name: 'house-medical-circle-xmark'
}, {
  title: 'House Medical Flag',
  class: 'fas fa-house-medical-flag',
  name: 'house-medical-flag'
}, {
  title: 'House Medical',
  class: 'fas fa-house-medical',
  name: 'house-medical'
}, {
  title: 'House Signal',
  class: 'fas fa-house-signal',
  name: 'house-signal'
}, {
  title: 'House Tsunami',
  class: 'fas fa-house-tsunami',
  name: 'house-tsunami'
}, {
  title: 'House User',
  class: 'fas fa-house-user',
  name: 'house-user'
}, {
  title: 'House',
  class: 'fas fa-house',
  name: 'house'
}, {
  title: 'Hryvnia Sign',
  class: 'fas fa-hryvnia-sign',
  name: 'hryvnia-sign'
}, {
  title: 'Hurricane',
  class: 'fas fa-hurricane',
  name: 'hurricane'
}, {
  title: 'I Cursor',
  class: 'fas fa-i-cursor',
  name: 'i-cursor'
}, {
  title: 'I',
  class: 'fas fa-i',
  name: 'i'
}, {
  title: 'Ice Cream',
  class: 'fas fa-ice-cream',
  name: 'ice-cream'
}, {
  title: 'Icicles',
  class: 'fas fa-icicles',
  name: 'icicles'
}, {
  title: 'Icons',
  class: 'fas fa-icons',
  name: 'icons'
}, {
  title: 'Id Badge',
  class: 'fas fa-id-badge',
  name: 'id-badge'
}, {
  title: 'Id Card Clip',
  class: 'fas fa-id-card-clip',
  name: 'id-card-clip'
}, {
  title: 'Id Card',
  class: 'fas fa-id-card',
  name: 'id-card'
}, {
  title: 'Igloo',
  class: 'fas fa-igloo',
  name: 'igloo'
}, {
  title: 'Image Portrait',
  class: 'fas fa-image-portrait',
  name: 'image-portrait'
}, {
  title: 'Image',
  class: 'fas fa-image',
  name: 'image'
}, {
  title: 'Images',
  class: 'fas fa-images',
  name: 'images'
}, {
  title: 'Inbox',
  class: 'fas fa-inbox',
  name: 'inbox'
}, {
  title: 'Indent',
  class: 'fas fa-indent',
  name: 'indent'
}, {
  title: 'Indian Rupee Sign',
  class: 'fas fa-indian-rupee-sign',
  name: 'indian-rupee-sign'
}, {
  title: 'Industry',
  class: 'fas fa-industry',
  name: 'industry'
}, {
  title: 'Infinity',
  class: 'fas fa-infinity',
  name: 'infinity'
}, {
  title: 'Info',
  class: 'fas fa-info',
  name: 'info'
}, {
  title: 'Italic',
  class: 'fas fa-italic',
  name: 'italic'
}, {
  title: 'J',
  class: 'fas fa-j',
  name: 'j'
}, {
  title: 'Jar Wheat',
  class: 'fas fa-jar-wheat',
  name: 'jar-wheat'
}, {
  title: 'Jar',
  class: 'fas fa-jar',
  name: 'jar'
}, {
  title: 'Jedi',
  class: 'fas fa-jedi',
  name: 'jedi'
}, {
  title: 'Jet Fighter Up',
  class: 'fas fa-jet-fighter-up',
  name: 'jet-fighter-up'
}, {
  title: 'Jet Fighter',
  class: 'fas fa-jet-fighter',
  name: 'jet-fighter'
}, {
  title: 'Joint',
  class: 'fas fa-joint',
  name: 'joint'
}, {
  title: 'Jug Detergent',
  class: 'fas fa-jug-detergent',
  name: 'jug-detergent'
}, {
  title: 'K',
  class: 'fas fa-k',
  name: 'k'
}, {
  title: 'Kaaba',
  class: 'fas fa-kaaba',
  name: 'kaaba'
}, {
  title: 'Key',
  class: 'fas fa-key',
  name: 'key'
}, {
  title: 'Keyboard',
  class: 'fas fa-keyboard',
  name: 'keyboard'
}, {
  title: 'Khanda',
  class: 'fas fa-khanda',
  name: 'khanda'
}, {
  title: 'Kip Sign',
  class: 'fas fa-kip-sign',
  name: 'kip-sign'
}, {
  title: 'Kit Medical',
  class: 'fas fa-kit-medical',
  name: 'kit-medical'
}, {
  title: 'Kitchen Set',
  class: 'fas fa-kitchen-set',
  name: 'kitchen-set'
}, {
  title: 'Kiwi Bird',
  class: 'fas fa-kiwi-bird',
  name: 'kiwi-bird'
}, {
  title: 'L',
  class: 'fas fa-l',
  name: 'l'
}, {
  title: 'Land Mine On',
  class: 'fas fa-land-mine-on',
  name: 'land-mine-on'
}, {
  title: 'Landmark Dome',
  class: 'fas fa-landmark-dome',
  name: 'landmark-dome'
}, {
  title: 'Landmark Flag',
  class: 'fas fa-landmark-flag',
  name: 'landmark-flag'
}, {
  title: 'Landmark',
  class: 'fas fa-landmark',
  name: 'landmark'
}, {
  title: 'Language',
  class: 'fas fa-language',
  name: 'language'
}, {
  title: 'Laptop Code',
  class: 'fas fa-laptop-code',
  name: 'laptop-code'
}, {
  title: 'Laptop File',
  class: 'fas fa-laptop-file',
  name: 'laptop-file'
}, {
  title: 'Laptop Medical',
  class: 'fas fa-laptop-medical',
  name: 'laptop-medical'
}, {
  title: 'Laptop',
  class: 'fas fa-laptop',
  name: 'laptop'
}, {
  title: 'Lari Sign',
  class: 'fas fa-lari-sign',
  name: 'lari-sign'
}, {
  title: 'Layer Group',
  class: 'fas fa-layer-group',
  name: 'layer-group'
}, {
  title: 'Leaf',
  class: 'fas fa-leaf',
  name: 'leaf'
}, {
  title: 'Left Long',
  class: 'fas fa-left-long',
  name: 'left-long'
}, {
  title: 'Left Right',
  class: 'fas fa-left-right',
  name: 'left-right'
}, {
  title: 'Lemon',
  class: 'fas fa-lemon',
  name: 'lemon'
}, {
  title: 'Less Than Equal',
  class: 'fas fa-less-than-equal',
  name: 'less-than-equal'
}, {
  title: 'Less Than',
  class: 'fas fa-less-than',
  name: 'less-than'
}, {
  title: 'Life Ring',
  class: 'fas fa-life-ring',
  name: 'life-ring'
}, {
  title: 'Lightbulb',
  class: 'fas fa-lightbulb',
  name: 'lightbulb'
}, {
  title: 'Lines Leaning',
  class: 'fas fa-lines-leaning',
  name: 'lines-leaning'
}, {
  title: 'Link Slash',
  class: 'fas fa-link-slash',
  name: 'link-slash'
}, {
  title: 'Link',
  class: 'fas fa-link',
  name: 'link'
}, {
  title: 'Lira Sign',
  class: 'fas fa-lira-sign',
  name: 'lira-sign'
}, {
  title: 'List Check',
  class: 'fas fa-list-check',
  name: 'list-check'
}, {
  title: 'List Ol',
  class: 'fas fa-list-ol',
  name: 'list-ol'
}, {
  title: 'List Ul',
  class: 'fas fa-list-ul',
  name: 'list-ul'
}, {
  title: 'List',
  class: 'fas fa-list',
  name: 'list'
}, {
  title: 'Litecoin Sign',
  class: 'fas fa-litecoin-sign',
  name: 'litecoin-sign'
}, {
  title: 'Location Arrow',
  class: 'fas fa-location-arrow',
  name: 'location-arrow'
}, {
  title: 'Location Crosshairs',
  class: 'fas fa-location-crosshairs',
  name: 'location-crosshairs'
}, {
  title: 'Location Dot',
  class: 'fas fa-location-dot',
  name: 'location-dot'
}, {
  title: 'Location Pin Lock',
  class: 'fas fa-location-pin-lock',
  name: 'location-pin-lock'
}, {
  title: 'Location Pin',
  class: 'fas fa-location-pin',
  name: 'location-pin'
}, {
  title: 'Lock Open',
  class: 'fas fa-lock-open',
  name: 'lock-open'
}, {
  title: 'Lock',
  class: 'fas fa-lock',
  name: 'lock'
}, {
  title: 'Locust',
  class: 'fas fa-locust',
  name: 'locust'
}, {
  title: 'Lungs Virus',
  class: 'fas fa-lungs-virus',
  name: 'lungs-virus'
}, {
  title: 'Lungs',
  class: 'fas fa-lungs',
  name: 'lungs'
}, {
  title: 'M',
  class: 'fas fa-m',
  name: 'm'
}, {
  title: 'Magnet',
  class: 'fas fa-magnet',
  name: 'magnet'
}, {
  title: 'Magnifying Glass Arrow Right',
  class: 'fas fa-magnifying-glass-arrow-right',
  name: 'magnifying-glass-arrow-right'
}, {
  title: 'Magnifying Glass Chart',
  class: 'fas fa-magnifying-glass-chart',
  name: 'magnifying-glass-chart'
}, {
  title: 'Magnifying Glass Dollar',
  class: 'fas fa-magnifying-glass-dollar',
  name: 'magnifying-glass-dollar'
}, {
  title: 'Magnifying Glass Location',
  class: 'fas fa-magnifying-glass-location',
  name: 'magnifying-glass-location'
}, {
  title: 'Magnifying Glass Minus',
  class: 'fas fa-magnifying-glass-minus',
  name: 'magnifying-glass-minus'
}, {
  title: 'Magnifying Glass Plus',
  class: 'fas fa-magnifying-glass-plus',
  name: 'magnifying-glass-plus'
}, {
  title: 'Magnifying Glass',
  class: 'fas fa-magnifying-glass',
  name: 'magnifying-glass'
}, {
  title: 'Manat Sign',
  class: 'fas fa-manat-sign',
  name: 'manat-sign'
}, {
  title: 'Map Location Dot',
  class: 'fas fa-map-location-dot',
  name: 'map-location-dot'
}, {
  title: 'Map Location',
  class: 'fas fa-map-location',
  name: 'map-location'
}, {
  title: 'Map Pin',
  class: 'fas fa-map-pin',
  name: 'map-pin'
}, {
  title: 'Map',
  class: 'fas fa-map',
  name: 'map'
}, {
  title: 'Marker',
  class: 'fas fa-marker',
  name: 'marker'
}, {
  title: 'Mars And Venus Burst',
  class: 'fas fa-mars-and-venus-burst',
  name: 'mars-and-venus-burst'
}, {
  title: 'Mars And Venus',
  class: 'fas fa-mars-and-venus',
  name: 'mars-and-venus'
}, {
  title: 'Mars Double',
  class: 'fas fa-mars-double',
  name: 'mars-double'
}, {
  title: 'Mars Stroke Right',
  class: 'fas fa-mars-stroke-right',
  name: 'mars-stroke-right'
}, {
  title: 'Mars Stroke Up',
  class: 'fas fa-mars-stroke-up',
  name: 'mars-stroke-up'
}, {
  title: 'Mars Stroke',
  class: 'fas fa-mars-stroke',
  name: 'mars-stroke'
}, {
  title: 'Mars',
  class: 'fas fa-mars',
  name: 'mars'
}, {
  title: 'Martini Glass Citrus',
  class: 'fas fa-martini-glass-citrus',
  name: 'martini-glass-citrus'
}, {
  title: 'Martini Glass Empty',
  class: 'fas fa-martini-glass-empty',
  name: 'martini-glass-empty'
}, {
  title: 'Martini Glass',
  class: 'fas fa-martini-glass',
  name: 'martini-glass'
}, {
  title: 'Mask Face',
  class: 'fas fa-mask-face',
  name: 'mask-face'
}, {
  title: 'Mask Ventilator',
  class: 'fas fa-mask-ventilator',
  name: 'mask-ventilator'
}, {
  title: 'Mask',
  class: 'fas fa-mask',
  name: 'mask'
}, {
  title: 'Masks Theater',
  class: 'fas fa-masks-theater',
  name: 'masks-theater'
}, {
  title: 'Mattress Pillow',
  class: 'fas fa-mattress-pillow',
  name: 'mattress-pillow'
}, {
  title: 'Maximize',
  class: 'fas fa-maximize',
  name: 'maximize'
}, {
  title: 'Medal',
  class: 'fas fa-medal',
  name: 'medal'
}, {
  title: 'Memory',
  class: 'fas fa-memory',
  name: 'memory'
}, {
  title: 'Menorah',
  class: 'fas fa-menorah',
  name: 'menorah'
}, {
  title: 'Mercury',
  class: 'fas fa-mercury',
  name: 'mercury'
}, {
  title: 'Message',
  class: 'fas fa-message',
  name: 'message'
}, {
  title: 'Meteor',
  class: 'fas fa-meteor',
  name: 'meteor'
}, {
  title: 'Microchip',
  class: 'fas fa-microchip',
  name: 'microchip'
}, {
  title: 'Microphone Lines Slash',
  class: 'fas fa-microphone-lines-slash',
  name: 'microphone-lines-slash'
}, {
  title: 'Microphone Lines',
  class: 'fas fa-microphone-lines',
  name: 'microphone-lines'
}, {
  title: 'Microphone Slash',
  class: 'fas fa-microphone-slash',
  name: 'microphone-slash'
}, {
  title: 'Microphone',
  class: 'fas fa-microphone',
  name: 'microphone'
}, {
  title: 'Microscope',
  class: 'fas fa-microscope',
  name: 'microscope'
}, {
  title: 'Mill Sign',
  class: 'fas fa-mill-sign',
  name: 'mill-sign'
}, {
  title: 'Minimize',
  class: 'fas fa-minimize',
  name: 'minimize'
}, {
  title: 'Minus',
  class: 'fas fa-minus',
  name: 'minus'
}, {
  title: 'Mitten',
  class: 'fas fa-mitten',
  name: 'mitten'
}, {
  title: 'Mobile Button',
  class: 'fas fa-mobile-button',
  name: 'mobile-button'
}, {
  title: 'Mobile Retro',
  class: 'fas fa-mobile-retro',
  name: 'mobile-retro'
}, {
  title: 'Mobile Screen Button',
  class: 'fas fa-mobile-screen-button',
  name: 'mobile-screen-button'
}, {
  title: 'Mobile Screen',
  class: 'fas fa-mobile-screen',
  name: 'mobile-screen'
}, {
  title: 'Mobile',
  class: 'fas fa-mobile',
  name: 'mobile'
}, {
  title: 'Money Bill 1 Wave',
  class: 'fas fa-money-bill-1-wave',
  name: 'money-bill-1-wave'
}, {
  title: 'Money Bill 1',
  class: 'fas fa-money-bill-1',
  name: 'money-bill-1'
}, {
  title: 'Money Bill Transfer',
  class: 'fas fa-money-bill-transfer',
  name: 'money-bill-transfer'
}, {
  title: 'Money Bill Trend Up',
  class: 'fas fa-money-bill-trend-up',
  name: 'money-bill-trend-up'
}, {
  title: 'Money Bill Wave',
  class: 'fas fa-money-bill-wave',
  name: 'money-bill-wave'
}, {
  title: 'Money Bill Wheat',
  class: 'fas fa-money-bill-wheat',
  name: 'money-bill-wheat'
}, {
  title: 'Money Bill',
  class: 'fas fa-money-bill',
  name: 'money-bill'
}, {
  title: 'Money Bills',
  class: 'fas fa-money-bills',
  name: 'money-bills'
}, {
  title: 'Money Check Dollar',
  class: 'fas fa-money-check-dollar',
  name: 'money-check-dollar'
}, {
  title: 'Money Check',
  class: 'fas fa-money-check',
  name: 'money-check'
}, {
  title: 'Monument',
  class: 'fas fa-monument',
  name: 'monument'
}, {
  title: 'Moon',
  class: 'fas fa-moon',
  name: 'moon'
}, {
  title: 'Mortar Pestle',
  class: 'fas fa-mortar-pestle',
  name: 'mortar-pestle'
}, {
  title: 'Mosque',
  class: 'fas fa-mosque',
  name: 'mosque'
}, {
  title: 'Mosquito Net',
  class: 'fas fa-mosquito-net',
  name: 'mosquito-net'
}, {
  title: 'Mosquito',
  class: 'fas fa-mosquito',
  name: 'mosquito'
}, {
  title: 'Motorcycle',
  class: 'fas fa-motorcycle',
  name: 'motorcycle'
}, {
  title: 'Mound',
  class: 'fas fa-mound',
  name: 'mound'
}, {
  title: 'Mountain City',
  class: 'fas fa-mountain-city',
  name: 'mountain-city'
}, {
  title: 'Mountain Sun',
  class: 'fas fa-mountain-sun',
  name: 'mountain-sun'
}, {
  title: 'Mountain',
  class: 'fas fa-mountain',
  name: 'mountain'
}, {
  title: 'Mug Hot',
  class: 'fas fa-mug-hot',
  name: 'mug-hot'
}, {
  title: 'Mug Saucer',
  class: 'fas fa-mug-saucer',
  name: 'mug-saucer'
}, {
  title: 'Music',
  class: 'fas fa-music',
  name: 'music'
}, {
  title: 'N',
  class: 'fas fa-n',
  name: 'n'
}, {
  title: 'Naira Sign',
  class: 'fas fa-naira-sign',
  name: 'naira-sign'
}, {
  title: 'Network Wired',
  class: 'fas fa-network-wired',
  name: 'network-wired'
}, {
  title: 'Neuter',
  class: 'fas fa-neuter',
  name: 'neuter'
}, {
  title: 'Newspaper',
  class: 'fas fa-newspaper',
  name: 'newspaper'
}, {
  title: 'Not Equal',
  class: 'fas fa-not-equal',
  name: 'not-equal'
}, {
  title: 'Note Sticky',
  class: 'fas fa-note-sticky',
  name: 'note-sticky'
}, {
  title: 'Notes Medical',
  class: 'fas fa-notes-medical',
  name: 'notes-medical'
}, {
  title: 'O',
  class: 'fas fa-o',
  name: 'o'
}, {
  title: 'Object Group',
  class: 'fas fa-object-group',
  name: 'object-group'
}, {
  title: 'Object Ungroup',
  class: 'fas fa-object-ungroup',
  name: 'object-ungroup'
}, {
  title: 'Oil Can',
  class: 'fas fa-oil-can',
  name: 'oil-can'
}, {
  title: 'Oil Well',
  class: 'fas fa-oil-well',
  name: 'oil-well'
}, {
  title: 'Om',
  class: 'fas fa-om',
  name: 'om'
}, {
  title: 'Otter',
  class: 'fas fa-otter',
  name: 'otter'
}, {
  title: 'Outdent',
  class: 'fas fa-outdent',
  name: 'outdent'
}, {
  title: 'P',
  class: 'fas fa-p',
  name: 'p'
}, {
  title: 'Pager',
  class: 'fas fa-pager',
  name: 'pager'
}, {
  title: 'Paint Roller',
  class: 'fas fa-paint-roller',
  name: 'paint-roller'
}, {
  title: 'Paintbrush',
  class: 'fas fa-paintbrush',
  name: 'paintbrush'
}, {
  title: 'Palette',
  class: 'fas fa-palette',
  name: 'palette'
}, {
  title: 'Pallet',
  class: 'fas fa-pallet',
  name: 'pallet'
}, {
  title: 'Panorama',
  class: 'fas fa-panorama',
  name: 'panorama'
}, {
  title: 'Paper Plane',
  class: 'fas fa-paper-plane',
  name: 'paper-plane'
}, {
  title: 'Paperclip',
  class: 'fas fa-paperclip',
  name: 'paperclip'
}, {
  title: 'Parachute Box',
  class: 'fas fa-parachute-box',
  name: 'parachute-box'
}, {
  title: 'Paragraph',
  class: 'fas fa-paragraph',
  name: 'paragraph'
}, {
  title: 'Passport',
  class: 'fas fa-passport',
  name: 'passport'
}, {
  title: 'Paste',
  class: 'fas fa-paste',
  name: 'paste'
}, {
  title: 'Pause',
  class: 'fas fa-pause',
  name: 'pause'
}, {
  title: 'Paw',
  class: 'fas fa-paw',
  name: 'paw'
}, {
  title: 'Peace',
  class: 'fas fa-peace',
  name: 'peace'
}, {
  title: 'Pen Clip',
  class: 'fas fa-pen-clip',
  name: 'pen-clip'
}, {
  title: 'Pen Fancy',
  class: 'fas fa-pen-fancy',
  name: 'pen-fancy'
}, {
  title: 'Pen Nib',
  class: 'fas fa-pen-nib',
  name: 'pen-nib'
}, {
  title: 'Pen Ruler',
  class: 'fas fa-pen-ruler',
  name: 'pen-ruler'
}, {
  title: 'Pen To Square',
  class: 'fas fa-pen-to-square',
  name: 'pen-to-square'
}, {
  title: 'Pen',
  class: 'fas fa-pen',
  name: 'pen'
}, {
  title: 'Pencil',
  class: 'fas fa-pencil',
  name: 'pencil'
}, {
  title: 'People Arrows',
  class: 'fas fa-people-arrows',
  name: 'people-arrows'
}, {
  title: 'People Carry Box',
  class: 'fas fa-people-carry-box',
  name: 'people-carry-box'
}, {
  title: 'People Group',
  class: 'fas fa-people-group',
  name: 'people-group'
}, {
  title: 'People Line',
  class: 'fas fa-people-line',
  name: 'people-line'
}, {
  title: 'People Pulling',
  class: 'fas fa-people-pulling',
  name: 'people-pulling'
}, {
  title: 'People Robbery',
  class: 'fas fa-people-robbery',
  name: 'people-robbery'
}, {
  title: 'People Roof',
  class: 'fas fa-people-roof',
  name: 'people-roof'
}, {
  title: 'Pepper Hot',
  class: 'fas fa-pepper-hot',
  name: 'pepper-hot'
}, {
  title: 'Percent',
  class: 'fas fa-percent',
  name: 'percent'
}, {
  title: 'Person Arrow Down To Line',
  class: 'fas fa-person-arrow-down-to-line',
  name: 'person-arrow-down-to-line'
}, {
  title: 'Person Arrow Up From Line',
  class: 'fas fa-person-arrow-up-from-line',
  name: 'person-arrow-up-from-line'
}, {
  title: 'Person Biking',
  class: 'fas fa-person-biking',
  name: 'person-biking'
}, {
  title: 'Person Booth',
  class: 'fas fa-person-booth',
  name: 'person-booth'
}, {
  title: 'Person Breastfeeding',
  class: 'fas fa-person-breastfeeding',
  name: 'person-breastfeeding'
}, {
  title: 'Person Burst',
  class: 'fas fa-person-burst',
  name: 'person-burst'
}, {
  title: 'Person Cane',
  class: 'fas fa-person-cane',
  name: 'person-cane'
}, {
  title: 'Person Chalkboard',
  class: 'fas fa-person-chalkboard',
  name: 'person-chalkboard'
}, {
  title: 'Person Circle Check',
  class: 'fas fa-person-circle-check',
  name: 'person-circle-check'
}, {
  title: 'Person Circle Exclamation',
  class: 'fas fa-person-circle-exclamation',
  name: 'person-circle-exclamation'
}, {
  title: 'Person Circle Minus',
  class: 'fas fa-person-circle-minus',
  name: 'person-circle-minus'
}, {
  title: 'Person Circle Plus',
  class: 'fas fa-person-circle-plus',
  name: 'person-circle-plus'
}, {
  title: 'Person Circle Question',
  class: 'fas fa-person-circle-question',
  name: 'person-circle-question'
}, {
  title: 'Person Circle Xmark',
  class: 'fas fa-person-circle-xmark',
  name: 'person-circle-xmark'
}, {
  title: 'Person Digging',
  class: 'fas fa-person-digging',
  name: 'person-digging'
}, {
  title: 'Person Dots From Line',
  class: 'fas fa-person-dots-from-line',
  name: 'person-dots-from-line'
}, {
  title: 'Person Dress Burst',
  class: 'fas fa-person-dress-burst',
  name: 'person-dress-burst'
}, {
  title: 'Person Dress',
  class: 'fas fa-person-dress',
  name: 'person-dress'
}, {
  title: 'Person Drowning',
  class: 'fas fa-person-drowning',
  name: 'person-drowning'
}, {
  title: 'Person Falling Burst',
  class: 'fas fa-person-falling-burst',
  name: 'person-falling-burst'
}, {
  title: 'Person Falling',
  class: 'fas fa-person-falling',
  name: 'person-falling'
}, {
  title: 'Person Half Dress',
  class: 'fas fa-person-half-dress',
  name: 'person-half-dress'
}, {
  title: 'Person Harassing',
  class: 'fas fa-person-harassing',
  name: 'person-harassing'
}, {
  title: 'Person Hiking',
  class: 'fas fa-person-hiking',
  name: 'person-hiking'
}, {
  title: 'Person Military Pointing',
  class: 'fas fa-person-military-pointing',
  name: 'person-military-pointing'
}, {
  title: 'Person Military Rifle',
  class: 'fas fa-person-military-rifle',
  name: 'person-military-rifle'
}, {
  title: 'Person Military To Person',
  class: 'fas fa-person-military-to-person',
  name: 'person-military-to-person'
}, {
  title: 'Person Praying',
  class: 'fas fa-person-praying',
  name: 'person-praying'
}, {
  title: 'Person Pregnant',
  class: 'fas fa-person-pregnant',
  name: 'person-pregnant'
}, {
  title: 'Person Rays',
  class: 'fas fa-person-rays',
  name: 'person-rays'
}, {
  title: 'Person Rifle',
  class: 'fas fa-person-rifle',
  name: 'person-rifle'
}, {
  title: 'Person Running',
  class: 'fas fa-person-running',
  name: 'person-running'
}, {
  title: 'Person Shelter',
  class: 'fas fa-person-shelter',
  name: 'person-shelter'
}, {
  title: 'Person Skating',
  class: 'fas fa-person-skating',
  name: 'person-skating'
}, {
  title: 'Person Skiing Nordic',
  class: 'fas fa-person-skiing-nordic',
  name: 'person-skiing-nordic'
}, {
  title: 'Person Skiing',
  class: 'fas fa-person-skiing',
  name: 'person-skiing'
}, {
  title: 'Person Snowboarding',
  class: 'fas fa-person-snowboarding',
  name: 'person-snowboarding'
}, {
  title: 'Person Swimming',
  class: 'fas fa-person-swimming',
  name: 'person-swimming'
}, {
  title: 'Person Through Window',
  class: 'fas fa-person-through-window',
  name: 'person-through-window'
}, {
  title: 'Person Walking Arrow Loop Left',
  class: 'fas fa-person-walking-arrow-loop-left',
  name: 'person-walking-arrow-loop-left'
}, {
  title: 'Person Walking Arrow Right',
  class: 'fas fa-person-walking-arrow-right',
  name: 'person-walking-arrow-right'
}, {
  title: 'Person Walking Dashed Line Arrow Right',
  class: 'fas fa-person-walking-dashed-line-arrow-right',
  name: 'person-walking-dashed-line-arrow-right'
}, {
  title: 'Person Walking Luggage',
  class: 'fas fa-person-walking-luggage',
  name: 'person-walking-luggage'
}, {
  title: 'Person Walking With Cane',
  class: 'fas fa-person-walking-with-cane',
  name: 'person-walking-with-cane'
}, {
  title: 'Person Walking',
  class: 'fas fa-person-walking',
  name: 'person-walking'
}, {
  title: 'Person',
  class: 'fas fa-person',
  name: 'person'
}, {
  title: 'Peseta Sign',
  class: 'fas fa-peseta-sign',
  name: 'peseta-sign'
}, {
  title: 'Peso Sign',
  class: 'fas fa-peso-sign',
  name: 'peso-sign'
}, {
  title: 'Phone Flip',
  class: 'fas fa-phone-flip',
  name: 'phone-flip'
}, {
  title: 'Phone Slash',
  class: 'fas fa-phone-slash',
  name: 'phone-slash'
}, {
  title: 'Phone Volume',
  class: 'fas fa-phone-volume',
  name: 'phone-volume'
}, {
  title: 'Phone',
  class: 'fas fa-phone',
  name: 'phone'
}, {
  title: 'Photo Film',
  class: 'fas fa-photo-film',
  name: 'photo-film'
}, {
  title: 'Piggy Bank',
  class: 'fas fa-piggy-bank',
  name: 'piggy-bank'
}, {
  title: 'Pills',
  class: 'fas fa-pills',
  name: 'pills'
}, {
  title: 'Pizza Slice',
  class: 'fas fa-pizza-slice',
  name: 'pizza-slice'
}, {
  title: 'Place Of Worship',
  class: 'fas fa-place-of-worship',
  name: 'place-of-worship'
}, {
  title: 'Plane Arrival',
  class: 'fas fa-plane-arrival',
  name: 'plane-arrival'
}, {
  title: 'Plane Circle Check',
  class: 'fas fa-plane-circle-check',
  name: 'plane-circle-check'
}, {
  title: 'Plane Circle Exclamation',
  class: 'fas fa-plane-circle-exclamation',
  name: 'plane-circle-exclamation'
}, {
  title: 'Plane Circle Xmark',
  class: 'fas fa-plane-circle-xmark',
  name: 'plane-circle-xmark'
}, {
  title: 'Plane Departure',
  class: 'fas fa-plane-departure',
  name: 'plane-departure'
}, {
  title: 'Plane Lock',
  class: 'fas fa-plane-lock',
  name: 'plane-lock'
}, {
  title: 'Plane Slash',
  class: 'fas fa-plane-slash',
  name: 'plane-slash'
}, {
  title: 'Plane Up',
  class: 'fas fa-plane-up',
  name: 'plane-up'
}, {
  title: 'Plane',
  class: 'fas fa-plane',
  name: 'plane'
}, {
  title: 'Plant Wilt',
  class: 'fas fa-plant-wilt',
  name: 'plant-wilt'
}, {
  title: 'Plate Wheat',
  class: 'fas fa-plate-wheat',
  name: 'plate-wheat'
}, {
  title: 'Play',
  class: 'fas fa-play',
  name: 'play'
}, {
  title: 'Plug Circle Bolt',
  class: 'fas fa-plug-circle-bolt',
  name: 'plug-circle-bolt'
}, {
  title: 'Plug Circle Check',
  class: 'fas fa-plug-circle-check',
  name: 'plug-circle-check'
}, {
  title: 'Plug Circle Exclamation',
  class: 'fas fa-plug-circle-exclamation',
  name: 'plug-circle-exclamation'
}, {
  title: 'Plug Circle Minus',
  class: 'fas fa-plug-circle-minus',
  name: 'plug-circle-minus'
}, {
  title: 'Plug Circle Plus',
  class: 'fas fa-plug-circle-plus',
  name: 'plug-circle-plus'
}, {
  title: 'Plug Circle Xmark',
  class: 'fas fa-plug-circle-xmark',
  name: 'plug-circle-xmark'
}, {
  title: 'Plug',
  class: 'fas fa-plug',
  name: 'plug'
}, {
  title: 'Plus Minus',
  class: 'fas fa-plus-minus',
  name: 'plus-minus'
}, {
  title: 'Plus',
  class: 'fas fa-plus',
  name: 'plus'
}, {
  title: 'Podcast',
  class: 'fas fa-podcast',
  name: 'podcast'
}, {
  title: 'Poo Storm',
  class: 'fas fa-poo-storm',
  name: 'poo-storm'
}, {
  title: 'Poo',
  class: 'fas fa-poo',
  name: 'poo'
}, {
  title: 'Poop',
  class: 'fas fa-poop',
  name: 'poop'
}, {
  title: 'Power Off',
  class: 'fas fa-power-off',
  name: 'power-off'
}, {
  title: 'Prescription Bottle Medical',
  class: 'fas fa-prescription-bottle-medical',
  name: 'prescription-bottle-medical'
}, {
  title: 'Prescription Bottle',
  class: 'fas fa-prescription-bottle',
  name: 'prescription-bottle'
}, {
  title: 'Prescription',
  class: 'fas fa-prescription',
  name: 'prescription'
}, {
  title: 'Print',
  class: 'fas fa-print',
  name: 'print'
}, {
  title: 'Pump Medical',
  class: 'fas fa-pump-medical',
  name: 'pump-medical'
}, {
  title: 'Pump Soap',
  class: 'fas fa-pump-soap',
  name: 'pump-soap'
}, {
  title: 'Puzzle Piece',
  class: 'fas fa-puzzle-piece',
  name: 'puzzle-piece'
}, {
  title: 'Q',
  class: 'fas fa-q',
  name: 'q'
}, {
  title: 'Qrcode',
  class: 'fas fa-qrcode',
  name: 'qrcode'
}, {
  title: 'Question',
  class: 'fas fa-question',
  name: 'question'
}, {
  title: 'Quote Left',
  class: 'fas fa-quote-left',
  name: 'quote-left'
}, {
  title: 'Quote Right',
  class: 'fas fa-quote-right',
  name: 'quote-right'
}, {
  title: 'R',
  class: 'fas fa-r',
  name: 'r'
}, {
  title: 'Radiation',
  class: 'fas fa-radiation',
  name: 'radiation'
}, {
  title: 'Radio',
  class: 'fas fa-radio',
  name: 'radio'
}, {
  title: 'Rainbow',
  class: 'fas fa-rainbow',
  name: 'rainbow'
}, {
  title: 'Ranking Star',
  class: 'fas fa-ranking-star',
  name: 'ranking-star'
}, {
  title: 'Receipt',
  class: 'fas fa-receipt',
  name: 'receipt'
}, {
  title: 'Record Vinyl',
  class: 'fas fa-record-vinyl',
  name: 'record-vinyl'
}, {
  title: 'Rectangle Ad',
  class: 'fas fa-rectangle-ad',
  name: 'rectangle-ad'
}, {
  title: 'Rectangle List',
  class: 'fas fa-rectangle-list',
  name: 'rectangle-list'
}, {
  title: 'Rectangle Xmark',
  class: 'fas fa-rectangle-xmark',
  name: 'rectangle-xmark'
}, {
  title: 'Recycle',
  class: 'fas fa-recycle',
  name: 'recycle'
}, {
  title: 'Registered',
  class: 'fas fa-registered',
  name: 'registered'
}, {
  title: 'Repeat',
  class: 'fas fa-repeat',
  name: 'repeat'
}, {
  title: 'Reply All',
  class: 'fas fa-reply-all',
  name: 'reply-all'
}, {
  title: 'Reply',
  class: 'fas fa-reply',
  name: 'reply'
}, {
  title: 'Republican',
  class: 'fas fa-republican',
  name: 'republican'
}, {
  title: 'Restroom',
  class: 'fas fa-restroom',
  name: 'restroom'
}, {
  title: 'Retweet',
  class: 'fas fa-retweet',
  name: 'retweet'
}, {
  title: 'Ribbon',
  class: 'fas fa-ribbon',
  name: 'ribbon'
}, {
  title: 'Right From Bracket',
  class: 'fas fa-right-from-bracket',
  name: 'right-from-bracket'
}, {
  title: 'Right Left',
  class: 'fas fa-right-left',
  name: 'right-left'
}, {
  title: 'Right Long',
  class: 'fas fa-right-long',
  name: 'right-long'
}, {
  title: 'Right To Bracket',
  class: 'fas fa-right-to-bracket',
  name: 'right-to-bracket'
}, {
  title: 'Ring',
  class: 'fas fa-ring',
  name: 'ring'
}, {
  title: 'Road Barrier',
  class: 'fas fa-road-barrier',
  name: 'road-barrier'
}, {
  title: 'Road Bridge',
  class: 'fas fa-road-bridge',
  name: 'road-bridge'
}, {
  title: 'Road Circle Check',
  class: 'fas fa-road-circle-check',
  name: 'road-circle-check'
}, {
  title: 'Road Circle Exclamation',
  class: 'fas fa-road-circle-exclamation',
  name: 'road-circle-exclamation'
}, {
  title: 'Road Circle Xmark',
  class: 'fas fa-road-circle-xmark',
  name: 'road-circle-xmark'
}, {
  title: 'Road Lock',
  class: 'fas fa-road-lock',
  name: 'road-lock'
}, {
  title: 'Road Spikes',
  class: 'fas fa-road-spikes',
  name: 'road-spikes'
}, {
  title: 'Road',
  class: 'fas fa-road',
  name: 'road'
}, {
  title: 'Robot',
  class: 'fas fa-robot',
  name: 'robot'
}, {
  title: 'Rocket',
  class: 'fas fa-rocket',
  name: 'rocket'
}, {
  title: 'Rotate Left',
  class: 'fas fa-rotate-left',
  name: 'rotate-left'
}, {
  title: 'Rotate Right',
  class: 'fas fa-rotate-right',
  name: 'rotate-right'
}, {
  title: 'Rotate',
  class: 'fas fa-rotate',
  name: 'rotate'
}, {
  title: 'Route',
  class: 'fas fa-route',
  name: 'route'
}, {
  title: 'Rss',
  class: 'fas fa-rss',
  name: 'rss'
}, {
  title: 'Ruble Sign',
  class: 'fas fa-ruble-sign',
  name: 'ruble-sign'
}, {
  title: 'Rug',
  class: 'fas fa-rug',
  name: 'rug'
}, {
  title: 'Ruler Combined',
  class: 'fas fa-ruler-combined',
  name: 'ruler-combined'
}, {
  title: 'Ruler Horizontal',
  class: 'fas fa-ruler-horizontal',
  name: 'ruler-horizontal'
}, {
  title: 'Ruler Vertical',
  class: 'fas fa-ruler-vertical',
  name: 'ruler-vertical'
}, {
  title: 'Ruler',
  class: 'fas fa-ruler',
  name: 'ruler'
}, {
  title: 'Rupee Sign',
  class: 'fas fa-rupee-sign',
  name: 'rupee-sign'
}, {
  title: 'Rupiah Sign',
  class: 'fas fa-rupiah-sign',
  name: 'rupiah-sign'
}, {
  title: 'S',
  class: 'fas fa-s',
  name: 's'
}, {
  title: 'Sack Dollar',
  class: 'fas fa-sack-dollar',
  name: 'sack-dollar'
}, {
  title: 'Sack Xmark',
  class: 'fas fa-sack-xmark',
  name: 'sack-xmark'
}, {
  title: 'Sailboat',
  class: 'fas fa-sailboat',
  name: 'sailboat'
}, {
  title: 'Satellite Dish',
  class: 'fas fa-satellite-dish',
  name: 'satellite-dish'
}, {
  title: 'Satellite',
  class: 'fas fa-satellite',
  name: 'satellite'
}, {
  title: 'Scale Balanced',
  class: 'fas fa-scale-balanced',
  name: 'scale-balanced'
}, {
  title: 'Scale Unbalanced Flip',
  class: 'fas fa-scale-unbalanced-flip',
  name: 'scale-unbalanced-flip'
}, {
  title: 'Scale Unbalanced',
  class: 'fas fa-scale-unbalanced',
  name: 'scale-unbalanced'
}, {
  title: 'School Circle Check',
  class: 'fas fa-school-circle-check',
  name: 'school-circle-check'
}, {
  title: 'School Circle Exclamation',
  class: 'fas fa-school-circle-exclamation',
  name: 'school-circle-exclamation'
}, {
  title: 'School Circle Xmark',
  class: 'fas fa-school-circle-xmark',
  name: 'school-circle-xmark'
}, {
  title: 'School Flag',
  class: 'fas fa-school-flag',
  name: 'school-flag'
}, {
  title: 'School Lock',
  class: 'fas fa-school-lock',
  name: 'school-lock'
}, {
  title: 'School',
  class: 'fas fa-school',
  name: 'school'
}, {
  title: 'Scissors',
  class: 'fas fa-scissors',
  name: 'scissors'
}, {
  title: 'Screwdriver Wrench',
  class: 'fas fa-screwdriver-wrench',
  name: 'screwdriver-wrench'
}, {
  title: 'Screwdriver',
  class: 'fas fa-screwdriver',
  name: 'screwdriver'
}, {
  title: 'Scroll Torah',
  class: 'fas fa-scroll-torah',
  name: 'scroll-torah'
}, {
  title: 'Scroll',
  class: 'fas fa-scroll',
  name: 'scroll'
}, {
  title: 'Sd Card',
  class: 'fas fa-sd-card',
  name: 'sd-card'
}, {
  title: 'Section',
  class: 'fas fa-section',
  name: 'section'
}, {
  title: 'Seedling',
  class: 'fas fa-seedling',
  name: 'seedling'
}, {
  title: 'Server',
  class: 'fas fa-server',
  name: 'server'
}, {
  title: 'Shapes',
  class: 'fas fa-shapes',
  name: 'shapes'
}, {
  title: 'Share From Square',
  class: 'fas fa-share-from-square',
  name: 'share-from-square'
}, {
  title: 'Share Nodes',
  class: 'fas fa-share-nodes',
  name: 'share-nodes'
}, {
  title: 'Share',
  class: 'fas fa-share',
  name: 'share'
}, {
  title: 'Sheet Plastic',
  class: 'fas fa-sheet-plastic',
  name: 'sheet-plastic'
}, {
  title: 'Shekel Sign',
  class: 'fas fa-shekel-sign',
  name: 'shekel-sign'
}, {
  title: 'Shield Cat',
  class: 'fas fa-shield-cat',
  name: 'shield-cat'
}, {
  title: 'Shield Dog',
  class: 'fas fa-shield-dog',
  name: 'shield-dog'
}, {
  title: 'Shield Halved',
  class: 'fas fa-shield-halved',
  name: 'shield-halved'
}, {
  title: 'Shield Heart',
  class: 'fas fa-shield-heart',
  name: 'shield-heart'
}, {
  title: 'Shield Virus',
  class: 'fas fa-shield-virus',
  name: 'shield-virus'
}, {
  title: 'Shield',
  class: 'fas fa-shield',
  name: 'shield'
}, {
  title: 'Ship',
  class: 'fas fa-ship',
  name: 'ship'
}, {
  title: 'Shirt',
  class: 'fas fa-shirt',
  name: 'shirt'
}, {
  title: 'Shoe Prints',
  class: 'fas fa-shoe-prints',
  name: 'shoe-prints'
}, {
  title: 'Shop Lock',
  class: 'fas fa-shop-lock',
  name: 'shop-lock'
}, {
  title: 'Shop Slash',
  class: 'fas fa-shop-slash',
  name: 'shop-slash'
}, {
  title: 'Shop',
  class: 'fas fa-shop',
  name: 'shop'
}, {
  title: 'Shower',
  class: 'fas fa-shower',
  name: 'shower'
}, {
  title: 'Shrimp',
  class: 'fas fa-shrimp',
  name: 'shrimp'
}, {
  title: 'Shuffle',
  class: 'fas fa-shuffle',
  name: 'shuffle'
}, {
  title: 'Shuttle Space',
  class: 'fas fa-shuttle-space',
  name: 'shuttle-space'
}, {
  title: 'Sign Hanging',
  class: 'fas fa-sign-hanging',
  name: 'sign-hanging'
}, {
  title: 'Signal',
  class: 'fas fa-signal',
  name: 'signal'
}, {
  title: 'Signature',
  class: 'fas fa-signature',
  name: 'signature'
}, {
  title: 'Signs Post',
  class: 'fas fa-signs-post',
  name: 'signs-post'
}, {
  title: 'Sim Card',
  class: 'fas fa-sim-card',
  name: 'sim-card'
}, {
  title: 'Sink',
  class: 'fas fa-sink',
  name: 'sink'
}, {
  title: 'Sitemap',
  class: 'fas fa-sitemap',
  name: 'sitemap'
}, {
  title: 'Skull Crossbones',
  class: 'fas fa-skull-crossbones',
  name: 'skull-crossbones'
}, {
  title: 'Skull',
  class: 'fas fa-skull',
  name: 'skull'
}, {
  title: 'Slash',
  class: 'fas fa-slash',
  name: 'slash'
}, {
  title: 'Sleigh',
  class: 'fas fa-sleigh',
  name: 'sleigh'
}, {
  title: 'Sliders',
  class: 'fas fa-sliders',
  name: 'sliders'
}, {
  title: 'Smog',
  class: 'fas fa-smog',
  name: 'smog'
}, {
  title: 'Smoking',
  class: 'fas fa-smoking',
  name: 'smoking'
}, {
  title: 'Snowflake',
  class: 'fas fa-snowflake',
  name: 'snowflake'
}, {
  title: 'Snowman',
  class: 'fas fa-snowman',
  name: 'snowman'
}, {
  title: 'Snowplow',
  class: 'fas fa-snowplow',
  name: 'snowplow'
}, {
  title: 'Soap',
  class: 'fas fa-soap',
  name: 'soap'
}, {
  title: 'Socks',
  class: 'fas fa-socks',
  name: 'socks'
}, {
  title: 'Solar Panel',
  class: 'fas fa-solar-panel',
  name: 'solar-panel'
}, {
  title: 'Sort Down',
  class: 'fas fa-sort-down',
  name: 'sort-down'
}, {
  title: 'Sort Up',
  class: 'fas fa-sort-up',
  name: 'sort-up'
}, {
  title: 'Sort',
  class: 'fas fa-sort',
  name: 'sort'
}, {
  title: 'Spa',
  class: 'fas fa-spa',
  name: 'spa'
}, {
  title: 'Spaghetti Monster Flying',
  class: 'fas fa-spaghetti-monster-flying',
  name: 'spaghetti-monster-flying'
}, {
  title: 'Spell Check',
  class: 'fas fa-spell-check',
  name: 'spell-check'
}, {
  title: 'Spider',
  class: 'fas fa-spider',
  name: 'spider'
}, {
  title: 'Spinner',
  class: 'fas fa-spinner',
  name: 'spinner'
}, {
  title: 'Splotch',
  class: 'fas fa-splotch',
  name: 'splotch'
}, {
  title: 'Spoon',
  class: 'fas fa-spoon',
  name: 'spoon'
}, {
  title: 'Spray Can Sparkles',
  class: 'fas fa-spray-can-sparkles',
  name: 'spray-can-sparkles'
}, {
  title: 'Spray Can',
  class: 'fas fa-spray-can',
  name: 'spray-can'
}, {
  title: 'Square Arrow Up Right',
  class: 'fas fa-square-arrow-up-right',
  name: 'square-arrow-up-right'
}, {
  title: 'Square Caret Down',
  class: 'fas fa-square-caret-down',
  name: 'square-caret-down'
}, {
  title: 'Square Caret Left',
  class: 'fas fa-square-caret-left',
  name: 'square-caret-left'
}, {
  title: 'Square Caret Right',
  class: 'fas fa-square-caret-right',
  name: 'square-caret-right'
}, {
  title: 'Square Caret Up',
  class: 'fas fa-square-caret-up',
  name: 'square-caret-up'
}, {
  title: 'Square Check',
  class: 'fas fa-square-check',
  name: 'square-check'
}, {
  title: 'Square Envelope',
  class: 'fas fa-square-envelope',
  name: 'square-envelope'
}, {
  title: 'Square Full',
  class: 'fas fa-square-full',
  name: 'square-full'
}, {
  title: 'Square H',
  class: 'fas fa-square-h',
  name: 'square-h'
}, {
  title: 'Square Minus',
  class: 'fas fa-square-minus',
  name: 'square-minus'
}, {
  title: 'Square Nfi',
  class: 'fas fa-square-nfi',
  name: 'square-nfi'
}, {
  title: 'Square Parking',
  class: 'fas fa-square-parking',
  name: 'square-parking'
}, {
  title: 'Square Pen',
  class: 'fas fa-square-pen',
  name: 'square-pen'
}, {
  title: 'Square Person Confined',
  class: 'fas fa-square-person-confined',
  name: 'square-person-confined'
}, {
  title: 'Square Phone Flip',
  class: 'fas fa-square-phone-flip',
  name: 'square-phone-flip'
}, {
  title: 'Square Phone',
  class: 'fas fa-square-phone',
  name: 'square-phone'
}, {
  title: 'Square Plus',
  class: 'fas fa-square-plus',
  name: 'square-plus'
}, {
  title: 'Square Poll Horizontal',
  class: 'fas fa-square-poll-horizontal',
  name: 'square-poll-horizontal'
}, {
  title: 'Square Poll Vertical',
  class: 'fas fa-square-poll-vertical',
  name: 'square-poll-vertical'
}, {
  title: 'Square Root Variable',
  class: 'fas fa-square-root-variable',
  name: 'square-root-variable'
}, {
  title: 'Square Rss',
  class: 'fas fa-square-rss',
  name: 'square-rss'
}, {
  title: 'Square Share Nodes',
  class: 'fas fa-square-share-nodes',
  name: 'square-share-nodes'
}, {
  title: 'Square Up Right',
  class: 'fas fa-square-up-right',
  name: 'square-up-right'
}, {
  title: 'Square Virus',
  class: 'fas fa-square-virus',
  name: 'square-virus'
}, {
  title: 'Square Xmark',
  class: 'fas fa-square-xmark',
  name: 'square-xmark'
}, {
  title: 'Square',
  class: 'fas fa-square',
  name: 'square'
}, {
  title: 'Staff Snake',
  class: 'fas fa-staff-snake',
  name: 'staff-snake'
}, {
  title: 'Stairs',
  class: 'fas fa-stairs',
  name: 'stairs'
}, {
  title: 'Stamp',
  class: 'fas fa-stamp',
  name: 'stamp'
}, {
  title: 'Stapler',
  class: 'fas fa-stapler',
  name: 'stapler'
}, {
  title: 'Star And Crescent',
  class: 'fas fa-star-and-crescent',
  name: 'star-and-crescent'
}, {
  title: 'Star Half Stroke',
  class: 'fas fa-star-half-stroke',
  name: 'star-half-stroke'
}, {
  title: 'Star Half',
  class: 'fas fa-star-half',
  name: 'star-half'
}, {
  title: 'Star Of David',
  class: 'fas fa-star-of-david',
  name: 'star-of-david'
}, {
  title: 'Star Of Life',
  class: 'fas fa-star-of-life',
  name: 'star-of-life'
}, {
  title: 'Star',
  class: 'fas fa-star',
  name: 'star'
}, {
  title: 'Sterling Sign',
  class: 'fas fa-sterling-sign',
  name: 'sterling-sign'
}, {
  title: 'Stethoscope',
  class: 'fas fa-stethoscope',
  name: 'stethoscope'
}, {
  title: 'Stop',
  class: 'fas fa-stop',
  name: 'stop'
}, {
  title: 'Stopwatch 20',
  class: 'fas fa-stopwatch-20',
  name: 'stopwatch-20'
}, {
  title: 'Stopwatch',
  class: 'fas fa-stopwatch',
  name: 'stopwatch'
}, {
  title: 'Store Slash',
  class: 'fas fa-store-slash',
  name: 'store-slash'
}, {
  title: 'Store',
  class: 'fas fa-store',
  name: 'store'
}, {
  title: 'Street View',
  class: 'fas fa-street-view',
  name: 'street-view'
}, {
  title: 'Strikethrough',
  class: 'fas fa-strikethrough',
  name: 'strikethrough'
}, {
  title: 'Stroopwafel',
  class: 'fas fa-stroopwafel',
  name: 'stroopwafel'
}, {
  title: 'Subscript',
  class: 'fas fa-subscript',
  name: 'subscript'
}, {
  title: 'Suitcase Medical',
  class: 'fas fa-suitcase-medical',
  name: 'suitcase-medical'
}, {
  title: 'Suitcase Rolling',
  class: 'fas fa-suitcase-rolling',
  name: 'suitcase-rolling'
}, {
  title: 'Suitcase',
  class: 'fas fa-suitcase',
  name: 'suitcase'
}, {
  title: 'Sun Plant Wilt',
  class: 'fas fa-sun-plant-wilt',
  name: 'sun-plant-wilt'
}, {
  title: 'Sun',
  class: 'fas fa-sun',
  name: 'sun'
}, {
  title: 'Superscript',
  class: 'fas fa-superscript',
  name: 'superscript'
}, {
  title: 'Swatchbook',
  class: 'fas fa-swatchbook',
  name: 'swatchbook'
}, {
  title: 'Synagogue',
  class: 'fas fa-synagogue',
  name: 'synagogue'
}, {
  title: 'Syringe',
  class: 'fas fa-syringe',
  name: 'syringe'
}, {
  title: 'T',
  class: 'fas fa-t',
  name: 't'
}, {
  title: 'Table Cells Large',
  class: 'fas fa-table-cells-large',
  name: 'table-cells-large'
}, {
  title: 'Table Cells',
  class: 'fas fa-table-cells',
  name: 'table-cells'
}, {
  title: 'Table Columns',
  class: 'fas fa-table-columns',
  name: 'table-columns'
}, {
  title: 'Table List',
  class: 'fas fa-table-list',
  name: 'table-list'
}, {
  title: 'Table Tennis Paddle Ball',
  class: 'fas fa-table-tennis-paddle-ball',
  name: 'table-tennis-paddle-ball'
}, {
  title: 'Table',
  class: 'fas fa-table',
  name: 'table'
}, {
  title: 'Tablet Button',
  class: 'fas fa-tablet-button',
  name: 'tablet-button'
}, {
  title: 'Tablet Screen Button',
  class: 'fas fa-tablet-screen-button',
  name: 'tablet-screen-button'
}, {
  title: 'Tablet',
  class: 'fas fa-tablet',
  name: 'tablet'
}, {
  title: 'Tablets',
  class: 'fas fa-tablets',
  name: 'tablets'
}, {
  title: 'Tachograph Digital',
  class: 'fas fa-tachograph-digital',
  name: 'tachograph-digital'
}, {
  title: 'Tag',
  class: 'fas fa-tag',
  name: 'tag'
}, {
  title: 'Tags',
  class: 'fas fa-tags',
  name: 'tags'
}, {
  title: 'Tape',
  class: 'fas fa-tape',
  name: 'tape'
}, {
  title: 'Tarp Droplet',
  class: 'fas fa-tarp-droplet',
  name: 'tarp-droplet'
}, {
  title: 'Tarp',
  class: 'fas fa-tarp',
  name: 'tarp'
}, {
  title: 'Taxi',
  class: 'fas fa-taxi',
  name: 'taxi'
}, {
  title: 'Teeth Open',
  class: 'fas fa-teeth-open',
  name: 'teeth-open'
}, {
  title: 'Teeth',
  class: 'fas fa-teeth',
  name: 'teeth'
}, {
  title: 'Temperature Arrow Down',
  class: 'fas fa-temperature-arrow-down',
  name: 'temperature-arrow-down'
}, {
  title: 'Temperature Arrow Up',
  class: 'fas fa-temperature-arrow-up',
  name: 'temperature-arrow-up'
}, {
  title: 'Temperature Empty',
  class: 'fas fa-temperature-empty',
  name: 'temperature-empty'
}, {
  title: 'Temperature Full',
  class: 'fas fa-temperature-full',
  name: 'temperature-full'
}, {
  title: 'Temperature Half',
  class: 'fas fa-temperature-half',
  name: 'temperature-half'
}, {
  title: 'Temperature High',
  class: 'fas fa-temperature-high',
  name: 'temperature-high'
}, {
  title: 'Temperature Low',
  class: 'fas fa-temperature-low',
  name: 'temperature-low'
}, {
  title: 'Temperature Quarter',
  class: 'fas fa-temperature-quarter',
  name: 'temperature-quarter'
}, {
  title: 'Temperature Three Quarters',
  class: 'fas fa-temperature-three-quarters',
  name: 'temperature-three-quarters'
}, {
  title: 'Tenge Sign',
  class: 'fas fa-tenge-sign',
  name: 'tenge-sign'
}, {
  title: 'Tent Arrow Down To Line',
  class: 'fas fa-tent-arrow-down-to-line',
  name: 'tent-arrow-down-to-line'
}, {
  title: 'Tent Arrow Left Right',
  class: 'fas fa-tent-arrow-left-right',
  name: 'tent-arrow-left-right'
}, {
  title: 'Tent Arrow Turn Left',
  class: 'fas fa-tent-arrow-turn-left',
  name: 'tent-arrow-turn-left'
}, {
  title: 'Tent Arrows Down',
  class: 'fas fa-tent-arrows-down',
  name: 'tent-arrows-down'
}, {
  title: 'Tent',
  class: 'fas fa-tent',
  name: 'tent'
}, {
  title: 'Tents',
  class: 'fas fa-tents',
  name: 'tents'
}, {
  title: 'Terminal',
  class: 'fas fa-terminal',
  name: 'terminal'
}, {
  title: 'Text Height',
  class: 'fas fa-text-height',
  name: 'text-height'
}, {
  title: 'Text Slash',
  class: 'fas fa-text-slash',
  name: 'text-slash'
}, {
  title: 'Text Width',
  class: 'fas fa-text-width',
  name: 'text-width'
}, {
  title: 'Thermometer',
  class: 'fas fa-thermometer',
  name: 'thermometer'
}, {
  title: 'Thumbs Down',
  class: 'fas fa-thumbs-down',
  name: 'thumbs-down'
}, {
  title: 'Thumbs Up',
  class: 'fas fa-thumbs-up',
  name: 'thumbs-up'
}, {
  title: 'Thumbtack',
  class: 'fas fa-thumbtack',
  name: 'thumbtack'
}, {
  title: 'Ticket Simple',
  class: 'fas fa-ticket-simple',
  name: 'ticket-simple'
}, {
  title: 'Ticket',
  class: 'fas fa-ticket',
  name: 'ticket'
}, {
  title: 'Timeline',
  class: 'fas fa-timeline',
  name: 'timeline'
}, {
  title: 'Toggle Off',
  class: 'fas fa-toggle-off',
  name: 'toggle-off'
}, {
  title: 'Toggle On',
  class: 'fas fa-toggle-on',
  name: 'toggle-on'
}, {
  title: 'Toilet Paper Slash',
  class: 'fas fa-toilet-paper-slash',
  name: 'toilet-paper-slash'
}, {
  title: 'Toilet Paper',
  class: 'fas fa-toilet-paper',
  name: 'toilet-paper'
}, {
  title: 'Toilet Portable',
  class: 'fas fa-toilet-portable',
  name: 'toilet-portable'
}, {
  title: 'Toilet',
  class: 'fas fa-toilet',
  name: 'toilet'
}, {
  title: 'Toilets Portable',
  class: 'fas fa-toilets-portable',
  name: 'toilets-portable'
}, {
  title: 'Toolbox',
  class: 'fas fa-toolbox',
  name: 'toolbox'
}, {
  title: 'Tooth',
  class: 'fas fa-tooth',
  name: 'tooth'
}, {
  title: 'Torii Gate',
  class: 'fas fa-torii-gate',
  name: 'torii-gate'
}, {
  title: 'Tornado',
  class: 'fas fa-tornado',
  name: 'tornado'
}, {
  title: 'Tower Broadcast',
  class: 'fas fa-tower-broadcast',
  name: 'tower-broadcast'
}, {
  title: 'Tower Cell',
  class: 'fas fa-tower-cell',
  name: 'tower-cell'
}, {
  title: 'Tower Observation',
  class: 'fas fa-tower-observation',
  name: 'tower-observation'
}, {
  title: 'Tractor',
  class: 'fas fa-tractor',
  name: 'tractor'
}, {
  title: 'Trademark',
  class: 'fas fa-trademark',
  name: 'trademark'
}, {
  title: 'Traffic Light',
  class: 'fas fa-traffic-light',
  name: 'traffic-light'
}, {
  title: 'Trailer',
  class: 'fas fa-trailer',
  name: 'trailer'
}, {
  title: 'Train Subway',
  class: 'fas fa-train-subway',
  name: 'train-subway'
}, {
  title: 'Train Tram',
  class: 'fas fa-train-tram',
  name: 'train-tram'
}, {
  title: 'Train',
  class: 'fas fa-train',
  name: 'train'
}, {
  title: 'Transgender',
  class: 'fas fa-transgender',
  name: 'transgender'
}, {
  title: 'Trash Arrow Up',
  class: 'fas fa-trash-arrow-up',
  name: 'trash-arrow-up'
}, {
  title: 'Trash Can Arrow Up',
  class: 'fas fa-trash-can-arrow-up',
  name: 'trash-can-arrow-up'
}, {
  title: 'Trash Can',
  class: 'fas fa-trash-can',
  name: 'trash-can'
}, {
  title: 'Trash',
  class: 'fas fa-trash',
  name: 'trash'
}, {
  title: 'Tree City',
  class: 'fas fa-tree-city',
  name: 'tree-city'
}, {
  title: 'Tree',
  class: 'fas fa-tree',
  name: 'tree'
}, {
  title: 'Triangle Exclamation',
  class: 'fas fa-triangle-exclamation',
  name: 'triangle-exclamation'
}, {
  title: 'Trophy',
  class: 'fas fa-trophy',
  name: 'trophy'
}, {
  title: 'Trowel Bricks',
  class: 'fas fa-trowel-bricks',
  name: 'trowel-bricks'
}, {
  title: 'Trowel',
  class: 'fas fa-trowel',
  name: 'trowel'
}, {
  title: 'Truck Arrow Right',
  class: 'fas fa-truck-arrow-right',
  name: 'truck-arrow-right'
}, {
  title: 'Truck Droplet',
  class: 'fas fa-truck-droplet',
  name: 'truck-droplet'
}, {
  title: 'Truck Fast',
  class: 'fas fa-truck-fast',
  name: 'truck-fast'
}, {
  title: 'Truck Field Un',
  class: 'fas fa-truck-field-un',
  name: 'truck-field-un'
}, {
  title: 'Truck Field',
  class: 'fas fa-truck-field',
  name: 'truck-field'
}, {
  title: 'Truck Front',
  class: 'fas fa-truck-front',
  name: 'truck-front'
}, {
  title: 'Truck Medical',
  class: 'fas fa-truck-medical',
  name: 'truck-medical'
}, {
  title: 'Truck Monster',
  class: 'fas fa-truck-monster',
  name: 'truck-monster'
}, {
  title: 'Truck Moving',
  class: 'fas fa-truck-moving',
  name: 'truck-moving'
}, {
  title: 'Truck Pickup',
  class: 'fas fa-truck-pickup',
  name: 'truck-pickup'
}, {
  title: 'Truck Plane',
  class: 'fas fa-truck-plane',
  name: 'truck-plane'
}, {
  title: 'Truck Ramp Box',
  class: 'fas fa-truck-ramp-box',
  name: 'truck-ramp-box'
}, {
  title: 'Truck',
  class: 'fas fa-truck',
  name: 'truck'
}, {
  title: 'Tty',
  class: 'fas fa-tty',
  name: 'tty'
}, {
  title: 'Turkish Lira Sign',
  class: 'fas fa-turkish-lira-sign',
  name: 'turkish-lira-sign'
}, {
  title: 'Turn Down',
  class: 'fas fa-turn-down',
  name: 'turn-down'
}, {
  title: 'Turn Up',
  class: 'fas fa-turn-up',
  name: 'turn-up'
}, {
  title: 'Tv',
  class: 'fas fa-tv',
  name: 'tv'
}, {
  title: 'U',
  class: 'fas fa-u',
  name: 'u'
}, {
  title: 'Umbrella Beach',
  class: 'fas fa-umbrella-beach',
  name: 'umbrella-beach'
}, {
  title: 'Umbrella',
  class: 'fas fa-umbrella',
  name: 'umbrella'
}, {
  title: 'Underline',
  class: 'fas fa-underline',
  name: 'underline'
}, {
  title: 'Universal Access',
  class: 'fas fa-universal-access',
  name: 'universal-access'
}, {
  title: 'Unlock Keyhole',
  class: 'fas fa-unlock-keyhole',
  name: 'unlock-keyhole'
}, {
  title: 'Unlock',
  class: 'fas fa-unlock',
  name: 'unlock'
}, {
  title: 'Up Down Left Right',
  class: 'fas fa-up-down-left-right',
  name: 'up-down-left-right'
}, {
  title: 'Up Down',
  class: 'fas fa-up-down',
  name: 'up-down'
}, {
  title: 'Up Long',
  class: 'fas fa-up-long',
  name: 'up-long'
}, {
  title: 'Up Right And Down Left From Center',
  class: 'fas fa-up-right-and-down-left-from-center',
  name: 'up-right-and-down-left-from-center'
}, {
  title: 'Up Right From Square',
  class: 'fas fa-up-right-from-square',
  name: 'up-right-from-square'
}, {
  title: 'Upload',
  class: 'fas fa-upload',
  name: 'upload'
}, {
  title: 'User Astronaut',
  class: 'fas fa-user-astronaut',
  name: 'user-astronaut'
}, {
  title: 'User Check',
  class: 'fas fa-user-check',
  name: 'user-check'
}, {
  title: 'User Clock',
  class: 'fas fa-user-clock',
  name: 'user-clock'
}, {
  title: 'User Doctor',
  class: 'fas fa-user-doctor',
  name: 'user-doctor'
}, {
  title: 'User Gear',
  class: 'fas fa-user-gear',
  name: 'user-gear'
}, {
  title: 'User Graduate',
  class: 'fas fa-user-graduate',
  name: 'user-graduate'
}, {
  title: 'User Group',
  class: 'fas fa-user-group',
  name: 'user-group'
}, {
  title: 'User Injured',
  class: 'fas fa-user-injured',
  name: 'user-injured'
}, {
  title: 'User Large Slash',
  class: 'fas fa-user-large-slash',
  name: 'user-large-slash'
}, {
  title: 'User Large',
  class: 'fas fa-user-large',
  name: 'user-large'
}, {
  title: 'User Lock',
  class: 'fas fa-user-lock',
  name: 'user-lock'
}, {
  title: 'User Minus',
  class: 'fas fa-user-minus',
  name: 'user-minus'
}, {
  title: 'User Ninja',
  class: 'fas fa-user-ninja',
  name: 'user-ninja'
}, {
  title: 'User Nurse',
  class: 'fas fa-user-nurse',
  name: 'user-nurse'
}, {
  title: 'User Pen',
  class: 'fas fa-user-pen',
  name: 'user-pen'
}, {
  title: 'User Plus',
  class: 'fas fa-user-plus',
  name: 'user-plus'
}, {
  title: 'User Secret',
  class: 'fas fa-user-secret',
  name: 'user-secret'
}, {
  title: 'User Shield',
  class: 'fas fa-user-shield',
  name: 'user-shield'
}, {
  title: 'User Slash',
  class: 'fas fa-user-slash',
  name: 'user-slash'
}, {
  title: 'User Tag',
  class: 'fas fa-user-tag',
  name: 'user-tag'
}, {
  title: 'User Tie',
  class: 'fas fa-user-tie',
  name: 'user-tie'
}, {
  title: 'User Xmark',
  class: 'fas fa-user-xmark',
  name: 'user-xmark'
}, {
  title: 'User',
  class: 'fas fa-user',
  name: 'user'
}, {
  title: 'Users Between Lines',
  class: 'fas fa-users-between-lines',
  name: 'users-between-lines'
}, {
  title: 'Users Gear',
  class: 'fas fa-users-gear',
  name: 'users-gear'
}, {
  title: 'Users Line',
  class: 'fas fa-users-line',
  name: 'users-line'
}, {
  title: 'Users Rays',
  class: 'fas fa-users-rays',
  name: 'users-rays'
}, {
  title: 'Users Rectangle',
  class: 'fas fa-users-rectangle',
  name: 'users-rectangle'
}, {
  title: 'Users Slash',
  class: 'fas fa-users-slash',
  name: 'users-slash'
}, {
  title: 'Users Viewfinder',
  class: 'fas fa-users-viewfinder',
  name: 'users-viewfinder'
}, {
  title: 'Users',
  class: 'fas fa-users',
  name: 'users'
}, {
  title: 'Utensils',
  class: 'fas fa-utensils',
  name: 'utensils'
}, {
  title: 'V',
  class: 'fas fa-v',
  name: 'v'
}, {
  title: 'Van Shuttle',
  class: 'fas fa-van-shuttle',
  name: 'van-shuttle'
}, {
  title: 'Vault',
  class: 'fas fa-vault',
  name: 'vault'
}, {
  title: 'Vector Square',
  class: 'fas fa-vector-square',
  name: 'vector-square'
}, {
  title: 'Venus Double',
  class: 'fas fa-venus-double',
  name: 'venus-double'
}, {
  title: 'Venus Mars',
  class: 'fas fa-venus-mars',
  name: 'venus-mars'
}, {
  title: 'Venus',
  class: 'fas fa-venus',
  name: 'venus'
}, {
  title: 'Vest Patches',
  class: 'fas fa-vest-patches',
  name: 'vest-patches'
}, {
  title: 'Vest',
  class: 'fas fa-vest',
  name: 'vest'
}, {
  title: 'Vial Circle Check',
  class: 'fas fa-vial-circle-check',
  name: 'vial-circle-check'
}, {
  title: 'Vial Virus',
  class: 'fas fa-vial-virus',
  name: 'vial-virus'
}, {
  title: 'Vial',
  class: 'fas fa-vial',
  name: 'vial'
}, {
  title: 'Vials',
  class: 'fas fa-vials',
  name: 'vials'
}, {
  title: 'Video Slash',
  class: 'fas fa-video-slash',
  name: 'video-slash'
}, {
  title: 'Video',
  class: 'fas fa-video',
  name: 'video'
}, {
  title: 'Vihara',
  class: 'fas fa-vihara',
  name: 'vihara'
}, {
  title: 'Virus Covid Slash',
  class: 'fas fa-virus-covid-slash',
  name: 'virus-covid-slash'
}, {
  title: 'Virus Covid',
  class: 'fas fa-virus-covid',
  name: 'virus-covid'
}, {
  title: 'Virus Slash',
  class: 'fas fa-virus-slash',
  name: 'virus-slash'
}, {
  title: 'Virus',
  class: 'fas fa-virus',
  name: 'virus'
}, {
  title: 'Viruses',
  class: 'fas fa-viruses',
  name: 'viruses'
}, {
  title: 'Voicemail',
  class: 'fas fa-voicemail',
  name: 'voicemail'
}, {
  title: 'Volcano',
  class: 'fas fa-volcano',
  name: 'volcano'
}, {
  title: 'Volleyball',
  class: 'fas fa-volleyball',
  name: 'volleyball'
}, {
  title: 'Volume High',
  class: 'fas fa-volume-high',
  name: 'volume-high'
}, {
  title: 'Volume Low',
  class: 'fas fa-volume-low',
  name: 'volume-low'
}, {
  title: 'Volume Off',
  class: 'fas fa-volume-off',
  name: 'volume-off'
}, {
  title: 'Volume Xmark',
  class: 'fas fa-volume-xmark',
  name: 'volume-xmark'
}, {
  title: 'Vr Cardboard',
  class: 'fas fa-vr-cardboard',
  name: 'vr-cardboard'
}, {
  title: 'W',
  class: 'fas fa-w',
  name: 'w'
}, {
  title: 'Walkie Talkie',
  class: 'fas fa-walkie-talkie',
  name: 'walkie-talkie'
}, {
  title: 'Wallet',
  class: 'fas fa-wallet',
  name: 'wallet'
}, {
  title: 'Wand Magic Sparkles',
  class: 'fas fa-wand-magic-sparkles',
  name: 'wand-magic-sparkles'
}, {
  title: 'Wand Magic',
  class: 'fas fa-wand-magic',
  name: 'wand-magic'
}, {
  title: 'Wand Sparkles',
  class: 'fas fa-wand-sparkles',
  name: 'wand-sparkles'
}, {
  title: 'Warehouse',
  class: 'fas fa-warehouse',
  name: 'warehouse'
}, {
  title: 'Water Ladder',
  class: 'fas fa-water-ladder',
  name: 'water-ladder'
}, {
  title: 'Water',
  class: 'fas fa-water',
  name: 'water'
}, {
  title: 'Wave Square',
  class: 'fas fa-wave-square',
  name: 'wave-square'
}, {
  title: 'Weight Hanging',
  class: 'fas fa-weight-hanging',
  name: 'weight-hanging'
}, {
  title: 'Weight Scale',
  class: 'fas fa-weight-scale',
  name: 'weight-scale'
}, {
  title: 'Wheat Awn Circle Exclamation',
  class: 'fas fa-wheat-awn-circle-exclamation',
  name: 'wheat-awn-circle-exclamation'
}, {
  title: 'Wheat Awn',
  class: 'fas fa-wheat-awn',
  name: 'wheat-awn'
}, {
  title: 'Wheelchair Move',
  class: 'fas fa-wheelchair-move',
  name: 'wheelchair-move'
}, {
  title: 'Wheelchair',
  class: 'fas fa-wheelchair',
  name: 'wheelchair'
}, {
  title: 'Whiskey Glass',
  class: 'fas fa-whiskey-glass',
  name: 'whiskey-glass'
}, {
  title: 'Wifi',
  class: 'fas fa-wifi',
  name: 'wifi'
}, {
  title: 'Wind',
  class: 'fas fa-wind',
  name: 'wind'
}, {
  title: 'Window Maximize',
  class: 'fas fa-window-maximize',
  name: 'window-maximize'
}, {
  title: 'Window Minimize',
  class: 'fas fa-window-minimize',
  name: 'window-minimize'
}, {
  title: 'Window Restore',
  class: 'fas fa-window-restore',
  name: 'window-restore'
}, {
  title: 'Wine Bottle',
  class: 'fas fa-wine-bottle',
  name: 'wine-bottle'
}, {
  title: 'Wine Glass Empty',
  class: 'fas fa-wine-glass-empty',
  name: 'wine-glass-empty'
}, {
  title: 'Wine Glass',
  class: 'fas fa-wine-glass',
  name: 'wine-glass'
}, {
  title: 'Won Sign',
  class: 'fas fa-won-sign',
  name: 'won-sign'
}, {
  title: 'Worm',
  class: 'fas fa-worm',
  name: 'worm'
}, {
  title: 'Wrench',
  class: 'fas fa-wrench',
  name: 'wrench'
}, {
  title: 'X Ray',
  class: 'fas fa-x-ray',
  name: 'x-ray'
}, {
  title: 'X',
  class: 'fas fa-x',
  name: 'x'
}, {
  title: 'Xmark',
  class: 'fas fa-xmark',
  name: 'xmark'
}, {
  title: 'Xmarks Lines',
  class: 'fas fa-xmarks-lines',
  name: 'xmarks-lines'
}, {
  title: 'Y',
  class: 'fas fa-y',
  name: 'y'
}, {
  title: 'Yen Sign',
  class: 'fas fa-yen-sign',
  name: 'yen-sign'
}, {
  title: 'Yin Yang',
  class: 'fas fa-yin-yang',
  name: 'yin-yang'
}, {
  title: 'Z',
  class: 'fas fa-z',
  name: 'z'
}]);

/***/ }),

/***/ "../Components/ImageControl/ImageControl.js":
/*!**************************************************!*\
  !*** ../Components/ImageControl/ImageControl.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeImageData": function() { return /* binding */ ChangeImageData; },
/* harmony export */   "ImageEditControl": function() { return /* binding */ ImageEditControl; },
/* harmony export */   "ImageHolderControl": function() { return /* binding */ ImageHolderControl; },
/* harmony export */   "ImagePlaceholder": function() { return /* binding */ ImagePlaceholder; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ImageControl_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageControl.scss */ "../Components/ImageControl/ImageControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/functions */ "../Components/utils/functions.js");









const ImageHolderControl = props => {
  const {
    className,
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image:', 'bplugins'),
    value = {},
    onChange
  } = props;
  const onImageSelect = _ref => {
    let {
      id,
      url,
      alt,
      title
    } = _ref;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_7__.Label, {
    className: "mb5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editImageHolder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mediaControl"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ['image'],
    value: value?.id,
    onSelect: onImageSelect,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return !value.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "btnControl"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "upload",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload', 'bplugins'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "btnControl"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "controls-repeat",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        icon: "exit",
        onClick: () => onChange({}),
        className: "btnRed"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'bplugins')));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: value?.url,
    alt: value?.alt || value?.title
  })));
};
const ChangeImageData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, props) => {
  const {
    value
  } = props;
  return {
    image: value?.id ? select('core').getMedia(value?.id) : null,
    imageSizes: select('core/block-editor').getSettings().imageSizes
  };
})(props => {
  const {
    className,
    value = {},
    onChange,
    image,
    imageSizes
  } = props;
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, value?.url && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_5__.isBlobURL)(value?.url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_7__.Label, {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alt Text (Alternative Text):', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: value?.alt,
    onChange: val => setValue('alt', val)
  })), value?.id && 0 !== (0,_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getImageSizes)(image, imageSizes)?.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_7__.Label, {
    className: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: value?.url,
    onChange: val => setValue('url', val),
    options: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getImageSizes)(image, imageSizes)
  })));
});
const ImageEditControl = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image:', 'bplugins'),
    value = {},
    onChange
  } = props;
  const onImageSelect = _ref3 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref3;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return value?.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, {
    className: "bPlToolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    allowedTypes: ['image'],
    value: value?.id,
    onSelect: onImageSelect,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
        label: label,
        icon: "format-image",
        onClick: open
      });
    }
  })));
};
const ImagePlaceholder = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices)(props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Image:', 'bplugins'),
    icon = 'format-image',
    value = {},
    onChange,
    noticeOperations,
    noticeUI
  } = props;
  const onImageSelect = _ref5 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref5;
    return onChange({
      ...value,
      id,
      url,
      alt,
      title
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    labels: {
      title: label
    },
    icon: icon,
    allowedTypes: ['image'],
    accept: "image/*",
    onSelect: onImageSelect,
    onSelectURL: val => onChange({
      ...value,
      id: null,
      url: val,
      alt: '',
      title: ''
    }),
    onError: val => noticeOperations.createErrorNotice(val),
    notices: noticeUI
  });
});

/***/ }),

/***/ "../Components/Label/Label.js":
/*!************************************!*\
  !*** ../Components/Label/Label.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Label = props => {
  const {
    className = 'mt20 mb5',
    htmlFor,
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `bPlLabel ${className}`,
    htmlFor: htmlFor
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "../Components/MediaControl/MediaControl.js":
/*!**************************************************!*\
  !*** ../Components/MediaControl/MediaControl.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BplMediaPlaceholder": function() { return /* binding */ BplMediaPlaceholder; },
/* harmony export */   "InlineDetailMediaUpload": function() { return /* binding */ InlineDetailMediaUpload; },
/* harmony export */   "InlineMediaUpload": function() { return /* binding */ InlineMediaUpload; },
/* harmony export */   "MediaEditControl": function() { return /* binding */ MediaEditControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MediaControl_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaControl.scss */ "../Components/MediaControl/MediaControl.scss");






const InlineMediaUpload = props => {
  const {
    className,
    value,
    types = ['image'],
    onChange,
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter URL', 'bplugins')
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: `${className} bplInlineMediaUpload`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: value,
    onChange: val => onChange(val),
    placeholder: placeholder
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: types,
    onSelect: val => onChange(val.url),
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "button button-primary",
        onClick: open,
        icon: 'upload'
      });
    }
  })));
};
const InlineDetailMediaUpload = props => {
  const {
    className,
    value = {},
    types = ['image'],
    onChange,
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter URL', 'bplugins')
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: `${className} bplInlineMediaUpload`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    value: value?.url,
    onChange: url => onChange({
      id: null,
      url,
      alt: '',
      title: ''
    }),
    placeholder: placeholder
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: types,
    onSelect: _ref2 => {
      let {
        id,
        url,
        alt,
        title
      } = _ref2;
      return onChange({
        id,
        url,
        alt,
        title
      });
    },
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "button button-primary",
        onClick: open,
        icon: 'upload'
      });
    }
  })));
};
const BplMediaPlaceholder = props => {
  const {
    onChange,
    icon = 'format-image',
    type = 'image',
    typeName = '',
    placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paste or type a video URL', 'bplugins')
  } = props;
  const [mediaSource, setMediaSource] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    className: "bplMediaPlaceholder",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Upload ${typeName || type}`, 'bplugins'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Upload a ${typeName || type} or paste/write ${typeName || type} url to get started.`, 'bplugins'),
    icon: icon
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: [type],
    onSelect: val => onChange(val),
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isPrimary: true,
        onClick: open
      }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload', 'bplugins'), " ");
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
    className: "bplUrlInput"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Or', 'bplugins'), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "url",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('URL', 'bplugins'),
    placeholder: placeholder,
    onChange: src => setMediaSource(src.target.value),
    value: mediaSource
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply', 'bplugins'),
    type: "submit",
    onClick: e => {
      e.preventDefault();
      onChange({
        id: null,
        url: mediaSource,
        alt: '',
        title: ''
      });
      setMediaSource('');
    },
    isPrimary: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply', 'bplugins'))));
};
const MediaEditControl = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image:', 'bplugins'),
    icon = 'format-image',
    types = ['image'],
    value = {},
    onChange
  } = props;
  const onFileSelect = _ref5 => {
    let {
      id,
      url,
      alt,
      title
    } = _ref5;
    return onChange({
      id,
      url,
      alt,
      title
    });
  };
  return value?.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
    className: "bPlToolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    allowedTypes: types,
    value: value?.id,
    onSelect: onFileSelect,
    render: _ref6 => {
      let {
        open
      } = _ref6;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        label: label,
        icon: icon,
        onClick: open
      });
    }
  })));
};

/***/ }),

/***/ "../Components/MultiShadowControl/MultiShadowControl.js":
/*!**************************************************************!*\
  !*** ../Components/MultiShadowControl/MultiShadowControl.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/icons */ "../Components/utils/icons.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Shadow' (String)
 * @props value: [{hOffset, vOffset, blur, spreed, color, isInset}] (Array)
 * @props onChange: (Function)
 * @props defaults (optional): [{hOffset, vOffset, blur, spreed, color, isInset}] (Array)
 * @return Shadow Properties (Array)
 */







const MultiShadowControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow', 'bplugins'),
    value,
    onChange,
    type = 'box',
    defaults = [],
    produce
  } = props;
  const [activeIndex, setActiveIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const defaultVal = [{
    hOffset: '0px',
    vOffset: '0px',
    blur: '0px',
    spreed: '0px',
    color: '#7090b0',
    isInset: false
  }];
  const shadow = (value?.length ? value : null) || (defaults?.length ? defaults : null) || defaultVal;
  const getDefault = property => defaults?.[activeIndex]?.[property] || defaultVal[0][property];
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => updateShadow(property, getDefault(property))
  });
  const updateShadow = (property, val) => {
    const newShadow = produce(shadow, draft => {
      draft[activeIndex][property] = val;
    });
    onChange(newShadow);
  };
  const duplicateShadow = e => {
    e.preventDefault();
    onChange([...shadow.slice(0, activeIndex), {
      ...shadow[activeIndex]
    }, ...shadow.slice(activeIndex)]);
    setActiveIndex(activeIndex + 1);
  };
  const removeShadow = e => {
    e.preventDefault();
    onChange([...shadow.slice(0, activeIndex), ...shadow.slice(activeIndex + 1)]);
    setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
  };
  const {
    hOffset = '',
    vOffset = '',
    blur = '',
    spreed = '',
    color = '',
    isInset = false
  } = shadow[activeIndex] || {};
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: () => {
          onToggle(), setActiveIndex(0);
        },
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 1 < shadow.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: "mt5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BtnGroup, {
      value: activeIndex,
      onChange: val => setActiveIndex(val),
      options: shadow.map((_, index) => ({
        label: index + 1 + '',
        value: index
      })) || [{
        label: 1,
        value: 0
      }]
    })), null !== activeIndex && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal Offset:', 'bplugins'),
      labelPosition: "left",
      value: hOffset,
      onChange: val => updateShadow('hOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), hOffset && hOffset !== getDefault('hOffset') && resetValue('hOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical Offset:', 'bplugins'),
      labelPosition: "left",
      value: vOffset,
      onChange: val => updateShadow('vOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), vOffset && vOffset !== getDefault('vOffset') && resetValue('vOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur:', 'bplugins'),
      labelPosition: "left",
      value: blur,
      onChange: val => updateShadow('blur', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), blur && blur !== getDefault('blur') && resetValue('blur')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur cannot be negative value!', 'bplugins')), 'box' === type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spreed:', 'bplugins'),
      labelPosition: "left",
      value: spreed,
      onChange: val => updateShadow('spreed', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), spreed && spreed !== getDefault('spreed') && resetValue('spreed')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: color,
      onChange: val => updateShadow('color', val),
      defaultColor: getDefault('color')
    }), 'box' === type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow Inset?', 'bplugins'),
      checked: isInset,
      onChange: val => updateShadow('isInset', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "itemAction mt20"
    }, 1 < shadow?.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "removeItem",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'bplugins'),
      onClick: removeShadow
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "no"
    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "duplicateItem",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Duplicate', 'bplugins'),
      onClick: duplicateShadow
    }, _utils_icons__WEBPACK_IMPORTED_MODULE_5__.gearIcon, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Duplicate', 'bplugins')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "addItem"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add New Shadow', 'bplugins'),
      onClick: () => onChange([...shadow, defaultVal[0]])
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "plus"
    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add New Shadow', 'bplugins'))))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MultiShadowControl);

/***/ }),

/***/ "../Components/SelectPureControl/SelectPureControl.js":
/*!************************************************************!*\
  !*** ../Components/SelectPureControl/SelectPureControl.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectPureControl_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectPureControl.scss */ "../Components/SelectPureControl/SelectPureControl.scss");

/**
 * @props className (optional): 'mt20' (String)
 * @props value: selectedOptions (Array)
 * @props onChange: (Function)
 * @props defaults (optional): { width, height, style, color } (Array)
 * @return Separator Properties (Object)
 */


// import { __ } from '@wordpress/i18n';


const SelectPureControl = props => {
  const {
    className = '',
    value,
    onChange,
    options = [],
    SelectPure
  } = props;
  const selectPureEl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectPureEl.current) {
      selectPureEl.current.innerHTML = '';
      new SelectPure(selectPureEl.current, {
        value,
        onChange: val => onChange(val),
        options,
        multiple: true,
        autocomplete: true,
        icon: 'closeIcon',
        classNames: {
          select: 'bplSelectPure',
          multiselect: 'selectMultiple',
          label: 'selectLabel',
          selectedLabel: 'selectSelectedLabel',
          dropdown: 'selectOptions',
          dropdownShown: 'selectOptionsOpened',
          autocompleteInput: 'selectAutocomplete',
          option: 'selectOption',
          selectedOption: 'selectOptionSelected',
          optionDisabled: 'selectOptionDisabled',
          optionHidden: 'selectOptionHidden',
          placeholder: 'selectPlaceholder',
          placeholderHidden: 'selectPlaceholderHidden'
        }
      });
    }
  }, [selectPureEl]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    ref: selectPureEl
  });
};
/* harmony default export */ __webpack_exports__["default"] = (SelectPureControl);

/***/ }),

/***/ "../Components/SeparatorControl/SeparatorControl.js":
/*!**********************************************************!*\
  !*** ../Components/SeparatorControl/SeparatorControl.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Separator' (String)
 * @props separator: { width, height, style, color } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { width, height, style, color } (Object)
 * @return Separator Properties (Object)
 */





const SeparatorControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Separator', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    width: '50%',
    height: '2px',
    style: 'solid',
    color: '#bbb'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width:', 'bplugins'),
      labelPosition: "left",
      value: getValue('width'),
      onChange: val => setValue('width', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(50), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.perUnit)(25), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(3)],
      isResetValueOnUnitChange: true
    }), value?.width && value?.width !== getDefault('width') && resetValue('width')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height:', 'bplugins'),
      labelPosition: "left",
      value: getValue('height'),
      onChange: val => setValue('height', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(3), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.height && value?.height !== getDefault('height') && resetValue('height')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('style'),
      onChange: val => setValue('style', val),
      options: _utils_options__WEBPACK_IMPORTED_MODULE_4__.borderStyles
    }), value?.style && value?.style !== getDefault('style') && resetValue('style')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SeparatorControl);

/***/ }),

/***/ "../Components/ShadowControl/ShadowControl.js":
/*!****************************************************!*\
  !*** ../Components/ShadowControl/ShadowControl.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Box Shadow' (String)
 * @props shadow: { hOffset, vOffset, blur, spreed, color, isInset } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { hOffset, vOffset, blur, spreed, color, isInset } (Object)
 * @return Shadow Properties (Object)
 */





const ShadowControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    type: 'box',
    hOffset: '0px',
    vOffset: '0px',
    blur: '0px',
    spreed: '0px',
    color: '#7090b0',
    isInset: false
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Label, {
    className: "mt5"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Horizontal Offset:', 'bplugins'),
      labelPosition: "left",
      value: getValue('hOffset'),
      onChange: val => setValue('hOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.hOffset && value?.hOffset !== getDefault('hOffset') && resetValue('hOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical Offset:', 'bplugins'),
      labelPosition: "left",
      value: getValue('vOffset'),
      onChange: val => setValue('vOffset', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.vOffset && value?.vOffset !== getDefault('vOffset') && resetValue('vOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur:', 'bplugins'),
      labelPosition: "left",
      value: getValue('blur'),
      onChange: val => setValue('blur', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.blur && value?.blur !== getDefault('blur') && resetValue('blur')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur cannot be negative value!', 'bplugins')), 'box' === getValue('type') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spreed:', 'bplugins'),
      labelPosition: "left",
      value: getValue('spreed'),
      onChange: val => setValue('spreed', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_4__.remUnit)()]
    }), value?.spreed && value?.spreed !== getDefault('spreed') && resetValue('spreed')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.BColor, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), 'box' === getValue('type') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow Inset?', 'bplugins'),
      checked: getValue('isInset'),
      onChange: val => setValue('isInset', val)
    }))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ShadowControl);

/***/ }),

/***/ "../Components/SpaceControl/SpaceControl.js":
/*!**************************************************!*\
  !*** ../Components/SpaceControl/SpaceControl.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpaceControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpaceControl.scss */ "../Components/SpaceControl/SpaceControl.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/icons */ "../Components/utils/icons.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Space' (String)
 * @props space (required): {side, vertical, horizontal, top, right, bottom, left} (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { side, vertical, horizontal, top, right, bottom, left } (Object)
 */







const SpaceControl = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space:', 'bplugins'),
    value,
    onChange,
    defaults = {}
  } = props;
  const defaultVal = {
    side: 2,
    vertical: '0px',
    horizontal: '0px',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const getValue = property => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const getIntVal = property => parseInt(getValue(property)?.replace(/([a-z])+/g, ''));

  // Check if space property and value are equals to defaults or defaultVal
  const isObject = object => object != null && typeof object === 'object';
  const triCompare = (main, defaults, defaultVal) => {
    const mainAllKeys = Object.keys(main || {});
    const mainKeys = mainAllKeys.filter(arr => arr !== 'styles');
    const equalSpecific = (main, defaults) => {
      const mainKeys = Object.keys(main);
      for (const key of mainKeys) {
        const mainVal = main[key];
        const defaultVal = defaults[key];
        const areObjects = isObject(mainVal) && isObject(defaultVal);
        if (areObjects && !equalSpecific(mainVal, defaultVal) || !areObjects && mainVal !== defaultVal) {
          return false;
        }
      }
      return true;
    };
    for (const key of mainKeys) {
      const mainSingle = main[key];
      const defaultsSingle = defaults[key];
      const defaultValSingle = defaultVal[key];
      const areObjects1 = isObject(mainSingle) && isObject(defaultsSingle);
      const areObjects2 = isObject(mainSingle) && isObject(defaultValSingle);
      if (!defaultsSingle) {
        if (areObjects2 && !equalSpecific(mainSingle, defaultValSingle) || !areObjects2 && mainSingle !== defaultValSingle) {
          return false;
        }
      } else {
        if (areObjects1 && !equalSpecific(mainSingle, defaultsSingle) || !areObjects1 && mainSingle !== defaultsSingle) {
          return false;
        }
      }
    }
    return true;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `bPlSpaceControl ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: `bPlBtnGroup`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical, Horizontal', 'bplugins'),
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "side2",
    isSmall: true,
    isMedium: false,
    isPrimary: 2 === getValue('side'),
    "aria-pressed": 2 === getValue('side'),
    onClick: () => onChange({
      ...value,
      ['side']: 2,
      ['vertical']: `${(getIntVal('top') + getIntVal('bottom')) / 2}px`,
      ['horizontal']: `${(getIntVal('left') + getIntVal('right')) / 2}px`
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "scrollIcon"
  }, _utils_icons__WEBPACK_IMPORTED_MODULE_6__.scrollIcon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sideScrollIcon"
  }, _utils_icons__WEBPACK_IMPORTED_MODULE_6__.scrollIcon))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top, Right, Bottom, Left', 'bplugins'),
    position: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSmall: true,
    isMedium: false,
    isPrimary: 4 === getValue('side'),
    "aria-pressed": 4 === getValue('side'),
    onClick: () => onChange({
      ...value,
      ['side']: 4,
      ['top']: getValue('vertical'),
      ['right']: getValue('horizontal'),
      ['bottom']: getValue('vertical'),
      ['left']: getValue('horizontal')
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-up-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-right-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-down-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "arrow-left-alt"
  })))), !triCompare(value, defaults, defaultVal) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => {
      const obj = {
        side: getDefault('side'),
        vertical: getDefault('vertical'),
        horizontal: getDefault('horizontal'),
        top: getDefault('top'),
        right: getDefault('right'),
        bottom: getDefault('bottom'),
        left: getDefault('left')
      };
      onChange({
        ...value,
        ...obj
      });
    }
  })), 2 === getValue('side') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "twoColumn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Bottom:', 'bplugins'),
    labelPosition: "top",
    value: getValue('vertical'),
    onChange: val => setValue('vertical', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left Right:', 'bplugins'),
    labelPosition: "top",
    value: getValue('horizontal'),
    onChange: val => setValue('horizontal', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  })), 4 === getValue('side') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "fourColumn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top:', 'bplugins'),
    labelPosition: "top",
    value: getValue('top'),
    onChange: val => setValue('top', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right:', 'bplugins'),
    labelPosition: "top",
    value: getValue('right'),
    onChange: val => setValue('right', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom:', 'bplugins'),
    labelPosition: "top",
    value: getValue('bottom'),
    onChange: val => setValue('bottom', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left:', 'bplugins'),
    labelPosition: "top",
    value: getValue('left'),
    onChange: val => setValue('left', val),
    units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (SpaceControl);

/***/ }),

/***/ "../Components/Typography/Typography.js":
/*!**********************************************!*\
  !*** ../Components/Typography/Typography.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Typography_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography.scss */ "../Components/Typography/Typography.scss");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../Components/index.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/options */ "../Components/utils/options.js");
/* harmony import */ var _fontLists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fontLists */ "../Components/Typography/fontLists.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options */ "../Components/Typography/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Typography' (String)
 * @props typography (required): {fontFamily, fontWeight, fontSize, fontStyle, textTransform, textDecoration, lineHeight, letterSpace} (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { fontFamily, fontWeight, fontSize, fontStyle, textTransform, textDecoration, lineHeight, letterSpace } (Object)
 */









const Typography = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography:', 'bplugins'),
    value,
    onChange,
    defaults = {},
    isFamily = true,
    produce
  } = props;
  const defaultVal = {
    fontFamily: 'Default',
    fontCategory: 'sans-serif',
    fontWeight: 400,
    isUploadFont: true,
    fontSize: {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle: 'normal',
    textTransform: 'none',
    textDecoration: 'auto',
    lineHeight: '135%',
    letterSpace: '0px'
  };
  const getDefault = property => defaults?.[property] || defaultVal[property];
  const setDefault = property => onChange({
    ...value,
    [property]: getDefault(property)
  });
  const getValue = property => undefined === value?.[property] ? getDefault(property) : value?.[property];
  // const setValue = (property, val) => onChange({ ...value, [property]: val });
  const resetValue = property => value?.[property] && value?.[property] !== getDefault(property) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });

  // Font family searching
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('desktop');
  const [query, setQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isSearching, setIsSearching] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const searchFonts = _fontLists__WEBPACK_IMPORTED_MODULE_6__["default"].filter(_ref => {
    let {
      family
    } = _ref;
    return family.toLowerCase().includes(query.toLowerCase());
  });

  // Get Font weights
  const fontWeights = () => {
    const currentFontWeights = _fontLists__WEBPACK_IMPORTED_MODULE_6__["default"].find(font => font.family === getValue('fontFamily'))?.variants;
    let weights = [];
    currentFontWeights?.map(weight => weights?.push({
      label: weight,
      value: weight
    }));
    return 0 === weights.length ? [400] : weights;
  };
  const setValue = (property, val, otherProperty) => {
    const newTypo = produce(value, draft => {
      if (otherProperty) {
        draft[property] = {
          ...draft[property],
          [otherProperty]: val
        };
      } else {
        draft[property] = val;
      }
    });
    onChange(newTypo);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: ""
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    className: "bPlDropdownContainer",
    contentClassName: "bPlDropdownPopover",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "admin-customizer",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isFamily ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "bPlTypoFontTitle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Family:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Weight:', 'bplugins'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "bPlTypoFont"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bPlTypoFontSelect"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "search",
      value: query,
      onClick: () => setIsSearching(!isSearching),
      placeholder: getValue('fontFamily') || 'Search Font',
      onChange: e => setQuery(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicon dashicons dashicons-${isSearching ? 'arrow-up' : 'arrow-down'} `,
      onClick: () => setIsSearching(!isSearching)
    }), isSearching && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "bPlTypoFontLists"
    }, searchFonts?.map(font => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: font?.family,
      onClick: () => {
        onChange({
          ...value,
          ['fontFamily']: font?.family,
          ['fontCategory']: font?.category || 'sans-serif',
          ['fontWeight']: 400,
          ['fontVariant']: 400
        });
        setQuery('');
        setIsSearching(false);
      }
    }, font?.family)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('fontVariant'),
      onChange: val => {
        onChange({
          ...value,
          ['fontWeight']: parseInt(val?.replace('00i', '00')),
          ['fontVariant']: val
        });
      },
      options: fontWeights()
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      className: "mt10",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Google Font', 'bplugins'),
      checked: getValue('isUploadFont'),
      onChange: val => setValue('isUploadFont', val)
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Weight:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('fontWeight'),
      onChange: val => setValue('fontWeight', val),
      options: fontWeights()
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.BDevice, {
      device: device,
      onChange: val => setDevice(val)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      value: getValue('fontSize')?.[device] || getValue('fontSize'),
      onChange: val => setValue('fontSize', val, device),
      min: 0,
      max: 120,
      step: 1,
      allowReset: true,
      resetFallbackValue: getDefault('fontSize')?.[device] || getDefault('fontSize'),
      initialPosition: getDefault('fontSize')?.[device] || getDefault('fontSize')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Style:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('fontStyle'),
      onChange: val => setValue('fontStyle', val),
      options: _options__WEBPACK_IMPORTED_MODULE_7__.fontStyles
    }), resetValue('fontStyle')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: "mt5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Transform:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.BtnGroup, {
      value: getValue('textTransform'),
      onChange: val => setValue('textTransform', val),
      options: _options__WEBPACK_IMPORTED_MODULE_7__.textTransforms,
      isTextIcon: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Decoration:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('textDecoration'),
      onChange: val => setValue('textDecoration', val),
      options: _options__WEBPACK_IMPORTED_MODULE_7__.textDecorations
    }), resetValue('textDecoration')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height:', 'bplugins'),
      labelPosition: "left",
      value: getValue('lineHeight'),
      onChange: val => setValue('lineHeight', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(24), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.perUnit)(135), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(2), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)(2)],
      isResetValueOnUnitChange: true
    }), resetValue('lineHeight')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter Spacing:', 'bplugins'),
      labelPosition: "left",
      value: getValue('letterSpace'),
      onChange: val => setValue('letterSpace', val),
      units: [(0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.pxUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.emUnit)(), (0,_utils_options__WEBPACK_IMPORTED_MODULE_5__.remUnit)()]
    }), resetValue('letterSpace')))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "../Components/Typography/fontLists.js":
/*!*********************************************!*\
  !*** ../Components/Typography/fontLists.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  family: 'Default',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'ABeeZee',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Abel',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Abhaya Libre',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Abril Fatface',
  variants: [400],
  category: 'display'
}, {
  family: 'Aclonica',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Acme',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Actor',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Adamina',
  variants: [400],
  category: 'serif'
}, {
  family: 'Advent Pro',
  variants: [100, 200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Aguafina Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Akaya Kanadaka',
  variants: [400],
  category: 'display'
}, {
  family: 'Akaya Telivigala',
  variants: [400],
  category: 'display'
}, {
  family: 'Akronim',
  variants: [400],
  category: 'display'
}, {
  family: 'Aladin',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Alata',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Alatsi',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Aldrich',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Alef',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Alegreya',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Alegreya SC',
  variants: [400, '400i', 500, '500i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Alegreya Sans',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Alegreya Sans SC',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Aleo',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Alex Brush',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Alfa Slab One',
  variants: [400],
  category: 'display'
}, {
  family: 'Alice',
  variants: [400],
  category: 'serif'
}, {
  family: 'Alike',
  variants: [400],
  category: 'serif'
}, {
  family: 'Alike Angular',
  variants: [400],
  category: 'serif'
}, {
  family: 'Allan',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Allerta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Allerta Stencil',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Allura',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Almarai',
  variants: [300, 400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Almendra',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Almendra Display',
  variants: [400],
  category: 'display'
}, {
  family: 'Almendra SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Amarante',
  variants: [400],
  category: 'display'
}, {
  family: 'Amaranth',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Amatic SC',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Amethysta',
  variants: [400],
  category: 'serif'
}, {
  family: 'Amiko',
  variants: [400, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Amiri',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Amita',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Anaheim',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Andada',
  variants: [400],
  category: 'serif'
}, {
  family: 'Andika',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Andika New Basic',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Angkor',
  variants: [400],
  category: 'display'
}, {
  family: 'Annie Use Your Telescope',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Anonymous Pro',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Antic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Antic Didone',
  variants: [400],
  category: 'serif'
}, {
  family: 'Antic Slab',
  variants: [400],
  category: 'serif'
}, {
  family: 'Anton',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Antonio',
  variants: [100, 200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Arapey',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Arbutus',
  variants: [400],
  category: 'display'
}, {
  family: 'Arbutus Slab',
  variants: [400],
  category: 'serif'
}, {
  family: 'Architects Daughter',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Archivo',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Archivo Black',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Archivo Narrow',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Aref Ruqaa',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Arima Madurai',
  variants: [100, 200, 300, 400, 500, 700, 800, 900],
  category: 'display'
}, {
  family: 'Arimo',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Arizonia',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Armata',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Arsenal',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Artifika',
  variants: [400],
  category: 'serif'
}, {
  family: 'Arvo',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Arya',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Asap',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Asap Condensed',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Asar',
  variants: [400],
  category: 'serif'
}, {
  family: 'Asset',
  variants: [400],
  category: 'display'
}, {
  family: 'Assistant',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Astloch',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Asul',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Athiti',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Atma',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Atomic Age',
  variants: [400],
  category: 'display'
}, {
  family: 'Aubrey',
  variants: [400],
  category: 'display'
}, {
  family: 'Audiowide',
  variants: [400],
  category: 'display'
}, {
  family: 'Autour One',
  variants: [400],
  category: 'display'
}, {
  family: 'Average',
  variants: [400],
  category: 'serif'
}, {
  family: 'Average Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Averia Gruesa Libre',
  variants: [400],
  category: 'display'
}, {
  family: 'Averia Libre',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Averia Sans Libre',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Averia Serif Libre',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'B612',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'B612 Mono',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Bad Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Bahiana',
  variants: [400],
  category: 'display'
}, {
  family: 'Bahianita',
  variants: [400],
  category: 'display'
}, {
  family: 'Bai Jamjuree',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Ballet',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Baloo 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Bhai 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Bhaina 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Chettan 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Da 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Paaji 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Tamma 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Tammudu 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Baloo Thambi 2',
  variants: [400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Balsamiq Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Balthazar',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bangers',
  variants: [400],
  category: 'display'
}, {
  family: 'Barlow',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Barlow Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Barlow Semi Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Barriecito',
  variants: [400],
  category: 'display'
}, {
  family: 'Barrio',
  variants: [400],
  category: 'display'
}, {
  family: 'Basic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Baskervville',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Battambang',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Baumans',
  variants: [400],
  category: 'display'
}, {
  family: 'Bayon',
  variants: [400],
  category: 'display'
}, {
  family: 'Be Vietnam',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Bebas Neue',
  variants: [400],
  category: 'display'
}, {
  family: 'Belgrano',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bellefair',
  variants: [400],
  category: 'serif'
}, {
  family: 'Belleza',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Bellota',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Bellota Text',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'BenchNine',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Benne',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bentham',
  variants: [400],
  category: 'serif'
}, {
  family: 'Berkshire Swash',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Beth Ellen',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Bevan',
  variants: [400],
  category: 'display'
}, {
  family: 'Big Shoulders Display',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Inline Display',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Inline Text',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Stencil Display',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Stencil Text',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Big Shoulders Text',
  variants: [100, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Bigelow Rules',
  variants: [400],
  category: 'display'
}, {
  family: 'Bigshot One',
  variants: [400],
  category: 'display'
}, {
  family: 'Bilbo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Bilbo Swash Caps',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'BioRhyme',
  variants: [200, 300, 400, 700, 800],
  category: 'serif'
}, {
  family: 'BioRhyme Expanded',
  variants: [200, 300, 400, 700, 800],
  category: 'serif'
}, {
  family: 'Biryani',
  variants: [200, 300, 400, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Bitter',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Black And White Picture',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Black Han Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Black Ops One',
  variants: [400],
  category: 'display'
}, {
  family: 'Blinker',
  variants: [100, 200, 300, 400, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Bodoni Moda',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Bokor',
  variants: [400],
  category: 'display'
}, {
  family: 'Bonbon',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Boogaloo',
  variants: [400],
  category: 'display'
}, {
  family: 'Bowlby One',
  variants: [400],
  category: 'display'
}, {
  family: 'Bowlby One SC',
  variants: [400],
  category: 'display'
}, {
  family: 'Brawler',
  variants: [400],
  category: 'serif'
}, {
  family: 'Bree Serif',
  variants: [400],
  category: 'serif'
}, {
  family: 'Brygada 1918',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Bubblegum Sans',
  variants: [400],
  category: 'display'
}, {
  family: 'Bubbler One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Buda',
  variants: [300, 400],
  category: 'display'
}, {
  family: 'Buenard',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Bungee',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Hairline',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Inline',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Outline',
  variants: [400],
  category: 'display'
}, {
  family: 'Bungee Shade',
  variants: [400],
  category: 'display'
}, {
  family: 'Butcherman',
  variants: [400],
  category: 'display'
}, {
  family: 'Butterfly Kids',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Cabin',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Cabin Condensed',
  variants: [400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Cabin Sketch',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Caesar Dressing',
  variants: [400],
  category: 'display'
}, {
  family: 'Cagliostro',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cairo',
  variants: [200, 300, 400, 600, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Caladea',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Calistoga',
  variants: [400],
  category: 'display'
}, {
  family: 'Calligraffitti',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Cambay',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Cambo',
  variants: [400],
  category: 'serif'
}, {
  family: 'Candal',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cantarell',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Cantata One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Cantora One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Capriola',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cardo',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Carme',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Carrois Gothic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Carrois Gothic SC',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Carter One',
  variants: [400],
  category: 'display'
}, {
  family: 'Castoro',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Catamaran',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Caudex',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Caveat',
  variants: [400, 500, 600, 700],
  category: 'handwriting'
}, {
  family: 'Caveat Brush',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Cedarville Cursive',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ceviche One',
  variants: [400],
  category: 'display'
}, {
  family: 'Chakra Petch',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Changa',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Changa One',
  variants: [400, '400i'],
  category: 'display'
}, {
  family: 'Chango',
  variants: [400],
  category: 'display'
}, {
  family: 'Charm',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Charmonman',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Chathura',
  variants: [100, 300, 400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Chau Philomene One',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Chela One',
  variants: [400],
  category: 'display'
}, {
  family: 'Chelsea Market',
  variants: [400],
  category: 'display'
}, {
  family: 'Chenla',
  variants: [400],
  category: 'display'
}, {
  family: 'Cherry Cream Soda',
  variants: [400],
  category: 'display'
}, {
  family: 'Cherry Swash',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Chewy',
  variants: [400],
  category: 'display'
}, {
  family: 'Chicle',
  variants: [400],
  category: 'display'
}, {
  family: 'Chilanka',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Chivo',
  variants: [300, '300i', 400, '400i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Chonburi',
  variants: [400],
  category: 'display'
}, {
  family: 'Cinzel',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Cinzel Decorative',
  variants: [400, 700, 900],
  category: 'display'
}, {
  family: 'Clicker Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Coda',
  variants: [400, 800],
  category: 'display'
}, {
  family: 'Coda Caption',
  variants: [400, 800],
  category: 'sans-serif'
}, {
  family: 'Codystar',
  variants: [300, 400],
  category: 'display'
}, {
  family: 'Coiny',
  variants: [400],
  category: 'display'
}, {
  family: 'Combo',
  variants: [400],
  category: 'display'
}, {
  family: 'Comfortaa',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Comic Neue',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'handwriting'
}, {
  family: 'Coming Soon',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Commissioner',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Concert One',
  variants: [400],
  category: 'display'
}, {
  family: 'Condiment',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Content',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Contrail One',
  variants: [400],
  category: 'display'
}, {
  family: 'Convergence',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Cookie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Copse',
  variants: [400],
  category: 'serif'
}, {
  family: 'Corben',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Cormorant',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Cormorant Garamond',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Cormorant Infant',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Cormorant SC',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Cormorant Unicase',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Cormorant Upright',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Courgette',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Courier Prime',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Cousine',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Coustard',
  variants: [400, 900],
  category: 'serif'
}, {
  family: 'Covered By Your Grace',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Crafty Girls',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Creepster',
  variants: [400],
  category: 'display'
}, {
  family: 'Crete Round',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Crimson Pro',
  variants: [200, 300, 400, 500, 600, 700, 800, 900, '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Crimson Text',
  variants: [400, '400i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Croissant One',
  variants: [400],
  category: 'display'
}, {
  family: 'Crushed',
  variants: [400],
  category: 'display'
}, {
  family: 'Cuprum',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Cute Font',
  variants: [400],
  category: 'display'
}, {
  family: 'Cutive',
  variants: [400],
  category: 'serif'
}, {
  family: 'Cutive Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'DM Mono',
  variants: [300, '300i', 400, '400i', 500, '500i'],
  category: 'monospace'
}, {
  family: 'DM Sans',
  variants: [400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'DM Serif Display',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'DM Serif Text',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Damion',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Dancing Script',
  variants: [400, 500, 600, 700],
  category: 'handwriting'
}, {
  family: 'Dangrek',
  variants: [400],
  category: 'display'
}, {
  family: 'Darker Grotesque',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'David Libre',
  variants: [400, 500, 700],
  category: 'serif'
}, {
  family: 'Dawning of a New Day',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Days One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dekko',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Dela Gothic One',
  variants: [400],
  category: 'display'
}, {
  family: 'Delius',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Delius Swash Caps',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Delius Unicase',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Della Respira',
  variants: [400],
  category: 'serif'
}, {
  family: 'Denk One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Devonshire',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Dhurjati',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Didact Gothic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Diplomata',
  variants: [400],
  category: 'display'
}, {
  family: 'Diplomata SC',
  variants: [400],
  category: 'display'
}, {
  family: 'Do Hyeon',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dokdo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Domine',
  variants: [400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Donegal One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Doppio One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dorsa',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dosis',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'DotGothic16',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dr Sugiyama',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Duru Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Dynalight',
  variants: [400],
  category: 'display'
}, {
  family: 'EB Garamond',
  variants: [400, 500, 600, 700, 800, '400i', '500i', '600i', '700i', '800i'],
  category: 'serif'
}, {
  family: 'Eagle Lake',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'East Sea Dokdo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Eater',
  variants: [400],
  category: 'display'
}, {
  family: 'Economica',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Eczar',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'El Messiri',
  variants: [400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Electrolize',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Elsie',
  variants: [400, 900],
  category: 'display'
}, {
  family: 'Elsie Swash Caps',
  variants: [400, 900],
  category: 'display'
}, {
  family: 'Emblema One',
  variants: [400],
  category: 'display'
}, {
  family: 'Emilys Candy',
  variants: [400],
  category: 'display'
}, {
  family: 'Encode Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Expanded',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Semi Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Encode Sans Semi Expanded',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Engagement',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Englebert',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Enriqueta',
  variants: [400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Epilogue',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Erica One',
  variants: [400],
  category: 'display'
}, {
  family: 'Esteban',
  variants: [400],
  category: 'serif'
}, {
  family: 'Euphoria Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ewert',
  variants: [400],
  category: 'display'
}, {
  family: 'Exo',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Exo 2',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Expletus Sans',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'display'
}, {
  family: 'Fahkwang',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Fanwood Text',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Farro',
  variants: [300, 400, 500, 700],
  category: 'sans-serif'
}, {
  family: 'Farsan',
  variants: [400],
  category: 'display'
}, {
  family: 'Fascinate',
  variants: [400],
  category: 'display'
}, {
  family: 'Fascinate Inline',
  variants: [400],
  category: 'display'
}, {
  family: 'Faster One',
  variants: [400],
  category: 'display'
}, {
  family: 'Fasthand',
  variants: [400],
  category: 'serif'
}, {
  family: 'Fauna One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Faustina',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Federant',
  variants: [400],
  category: 'display'
}, {
  family: 'Federo',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Felipa',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Fenix',
  variants: [400],
  category: 'serif'
}, {
  family: 'Finger Paint',
  variants: [400],
  category: 'display'
}, {
  family: 'Fira Code',
  variants: [300, 400, 500, 600, 700],
  category: 'monospace'
}, {
  family: 'Fira Mono',
  variants: [400, 500, 700],
  category: 'monospace'
}, {
  family: 'Fira Sans',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Fira Sans Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Fira Sans Extra Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Fjalla One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Fjord One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Flamenco',
  variants: [300, 400],
  category: 'display'
}, {
  family: 'Flavors',
  variants: [400],
  category: 'display'
}, {
  family: 'Fondamento',
  variants: [400, '400i'],
  category: 'handwriting'
}, {
  family: 'Fontdiner Swanky',
  variants: [400],
  category: 'display'
}, {
  family: 'Forum',
  variants: [400],
  category: 'display'
}, {
  family: 'Francois One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Frank Ruhl Libre',
  variants: [300, 400, 500, 700, 900],
  category: 'serif'
}, {
  family: 'Fraunces',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Freckle Face',
  variants: [400],
  category: 'display'
}, {
  family: 'Fredericka the Great',
  variants: [400],
  category: 'display'
}, {
  family: 'Fredoka One',
  variants: [400],
  category: 'display'
}, {
  family: 'Freehand',
  variants: [400],
  category: 'display'
}, {
  family: 'Fresca',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Frijole',
  variants: [400],
  category: 'display'
}, {
  family: 'Fruktur',
  variants: [400],
  category: 'display'
}, {
  family: 'Fugaz One',
  variants: [400],
  category: 'display'
}, {
  family: 'GFS Didot',
  variants: [400],
  category: 'serif'
}, {
  family: 'GFS Neohellenic',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Gabriela',
  variants: [400],
  category: 'serif'
}, {
  family: 'Gaegu',
  variants: [300, 400, 700],
  category: 'handwriting'
}, {
  family: 'Gafata',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Galada',
  variants: [400],
  category: 'display'
}, {
  family: 'Galdeano',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Galindo',
  variants: [400],
  category: 'display'
}, {
  family: 'Gamja Flower',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Gayathri',
  variants: [100, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Gelasio',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Gentium Basic',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Gentium Book Basic',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Geo',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Geostar',
  variants: [400],
  category: 'display'
}, {
  family: 'Geostar Fill',
  variants: [400],
  category: 'display'
}, {
  family: 'Germania One',
  variants: [400],
  category: 'display'
}, {
  family: 'Gidugu',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Gilda Display',
  variants: [400],
  category: 'serif'
}, {
  family: 'Girassol',
  variants: [400],
  category: 'display'
}, {
  family: 'Give You Glory',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Glass Antiqua',
  variants: [400],
  category: 'display'
}, {
  family: 'Glegoo',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Gloria Hallelujah',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Goblin One',
  variants: [400],
  category: 'display'
}, {
  family: 'Gochi Hand',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Goldman',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Gorditas',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Gothic A1',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Gotu',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Goudy Bookletter 1911',
  variants: [400],
  category: 'serif'
}, {
  family: 'Graduate',
  variants: [400],
  category: 'display'
}, {
  family: 'Grand Hotel',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Grandstander',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'display'
}, {
  family: 'Gravitas One',
  variants: [400],
  category: 'display'
}, {
  family: 'Great Vibes',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Grenze',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Grenze Gotisch',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Griffy',
  variants: [400],
  category: 'display'
}, {
  family: 'Gruppo',
  variants: [400],
  category: 'display'
}, {
  family: 'Gudea',
  variants: [400, '400i', 700],
  category: 'sans-serif'
}, {
  family: 'Gugi',
  variants: [400],
  category: 'display'
}, {
  family: 'Gupter',
  variants: [400, 500, 700],
  category: 'serif'
}, {
  family: 'Gurajada',
  variants: [400],
  category: 'serif'
}, {
  family: 'Habibi',
  variants: [400],
  category: 'serif'
}, {
  family: 'Hachi Maru Pop',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Halant',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Hammersmith One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Hanalei',
  variants: [400],
  category: 'display'
}, {
  family: 'Hanalei Fill',
  variants: [400],
  category: 'display'
}, {
  family: 'Handlee',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Hanuman',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Happy Monkey',
  variants: [400],
  category: 'display'
}, {
  family: 'Harmattan',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Headland One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Heebo',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Henny Penny',
  variants: [400],
  category: 'display'
}, {
  family: 'Hepta Slab',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Herr Von Muellerhoff',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Hi Melody',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Hind',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Guntur',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Madurai',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Siliguri',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Hind Vadodara',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Holtwood One SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Homemade Apple',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Homenaje',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'IBM Plex Mono',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'IBM Plex Sans',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'IBM Plex Sans Condensed',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'IBM Plex Serif',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'IM Fell DW Pica',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell DW Pica SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell Double Pica',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell Double Pica SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell English',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell English SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell French Canon',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell French Canon SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'IM Fell Great Primer',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'IM Fell Great Primer SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Ibarra Real Nova',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Iceberg',
  variants: [400],
  category: 'display'
}, {
  family: 'Iceland',
  variants: [400],
  category: 'display'
}, {
  family: 'Imbue',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Imprima',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Inconsolata',
  variants: [200, 300, 400, 500, 600, 700, 800, 900],
  category: 'monospace'
}, {
  family: 'Inder',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Indie Flower',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Inika',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Inknut Antiqua',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Inria Sans',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Inria Serif',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Inter',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Irish Grover',
  variants: [400],
  category: 'display'
}, {
  family: 'Istok Web',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Italiana',
  variants: [400],
  category: 'serif'
}, {
  family: 'Italianno',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Itim',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Jacques Francois',
  variants: [400],
  category: 'serif'
}, {
  family: 'Jacques Francois Shadow',
  variants: [400],
  category: 'display'
}, {
  family: 'Jaldi',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'JetBrains Mono',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'monospace'
}, {
  family: 'Jim Nightshade',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Jockey One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Jolly Lodger',
  variants: [400],
  category: 'display'
}, {
  family: 'Jomhuria',
  variants: [400],
  category: 'display'
}, {
  family: 'Jomolhari',
  variants: [400],
  category: 'serif'
}, {
  family: 'Josefin Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, '100i', '200i', '300i', '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Josefin Slab',
  variants: [100, 200, 300, 400, 500, 600, 700, '100i', '200i', '300i', '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Jost',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Joti One',
  variants: [400],
  category: 'display'
}, {
  family: 'Jua',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Judson',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Julee',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Julius Sans One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Junge',
  variants: [400],
  category: 'serif'
}, {
  family: 'Jura',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Just Another Hand',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Just Me Again Down Here',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'K2D',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Kadwa',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Kalam',
  variants: [300, 400, 700],
  category: 'handwriting'
}, {
  family: 'Kameron',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Kanit',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Kantumruy',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Karantina',
  variants: [300, 400, 700],
  category: 'display'
}, {
  family: 'Karla',
  variants: [200, 300, 400, 500, 600, 700, 800, '200i', '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'sans-serif'
}, {
  family: 'Karma',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Katibeh',
  variants: [400],
  category: 'display'
}, {
  family: 'Kaushan Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Kavivanar',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Kavoon',
  variants: [400],
  category: 'display'
}, {
  family: 'Kdam Thmor',
  variants: [400],
  category: 'display'
}, {
  family: 'Keania One',
  variants: [400],
  category: 'display'
}, {
  family: 'Kelly Slab',
  variants: [400],
  category: 'display'
}, {
  family: 'Kenia',
  variants: [400],
  category: 'display'
}, {
  family: 'Khand',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Khmer',
  variants: [400],
  category: 'display'
}, {
  family: 'Khula',
  variants: [300, 400, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Kirang Haerang',
  variants: [400],
  category: 'display'
}, {
  family: 'Kite One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Kiwi Maru',
  variants: [300, 400, 500],
  category: 'serif'
}, {
  family: 'Knewave',
  variants: [400],
  category: 'display'
}, {
  family: 'KoHo',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kodchasan',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kosugi',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Kosugi Maru',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Kotta One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Koulen',
  variants: [400],
  category: 'display'
}, {
  family: 'Kranky',
  variants: [400],
  category: 'display'
}, {
  family: 'Kreon',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Kristi',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Krona One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Krub',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kufam',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'display'
}, {
  family: 'Kulim Park',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Kumar One',
  variants: [400],
  category: 'display'
}, {
  family: 'Kumar One Outline',
  variants: [400],
  category: 'display'
}, {
  family: 'Kumbh Sans',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Kurale',
  variants: [400],
  category: 'serif'
}, {
  family: 'La Belle Aurore',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lacquer',
  variants: [400],
  category: 'display'
}, {
  family: 'Laila',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Lakki Reddy',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lalezar',
  variants: [400],
  category: 'display'
}, {
  family: 'Lancelot',
  variants: [400],
  category: 'display'
}, {
  family: 'Langar',
  variants: [400],
  category: 'display'
}, {
  family: 'Lateef',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lato',
  variants: [100, '100i', 300, '300i', 400, '400i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'League Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Leckerli One',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ledger',
  variants: [400],
  category: 'serif'
}, {
  family: 'Lekton',
  variants: [400, '400i', 700],
  category: 'sans-serif'
}, {
  family: 'Lemon',
  variants: [400],
  category: 'display'
}, {
  family: 'Lemonada',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Lexend',
  variants: [100, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Lexend Deca',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Exa',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Giga',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Mega',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Peta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Tera',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Lexend Zetta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Libre Barcode 128',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 128 Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39 Extended',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39 Extended Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode 39 Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Barcode EAN13 Text',
  variants: [400],
  category: 'display'
}, {
  family: 'Libre Baskerville',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Libre Caslon Display',
  variants: [400],
  category: 'serif'
}, {
  family: 'Libre Caslon Text',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Libre Franklin',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Life Savers',
  variants: [400, 700, 800],
  category: 'display'
}, {
  family: 'Lilita One',
  variants: [400],
  category: 'display'
}, {
  family: 'Lily Script One',
  variants: [400],
  category: 'display'
}, {
  family: 'Limelight',
  variants: [400],
  category: 'display'
}, {
  family: 'Linden Hill',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Literata',
  variants: [200, 300, 400, 500, 600, 700, 800, 900, '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Liu Jian Mao Cao',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Livvic',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Lobster',
  variants: [400],
  category: 'display'
}, {
  family: 'Lobster Two',
  variants: [400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Londrina Outline',
  variants: [400],
  category: 'display'
}, {
  family: 'Londrina Shadow',
  variants: [400],
  category: 'display'
}, {
  family: 'Londrina Sketch',
  variants: [400],
  category: 'display'
}, {
  family: 'Londrina Solid',
  variants: [100, 300, 400, 900],
  category: 'display'
}, {
  family: 'Long Cang',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lora',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Love Ya Like A Sister',
  variants: [400],
  category: 'display'
}, {
  family: 'Loved by the King',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Lovers Quarrel',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Luckiest Guy',
  variants: [400],
  category: 'display'
}, {
  family: 'Lusitana',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Lustria',
  variants: [400],
  category: 'serif'
}, {
  family: 'M PLUS 1p',
  variants: [100, 300, 400, 500, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'M PLUS Rounded 1c',
  variants: [100, 300, 400, 500, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Ma Shan Zheng',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Macondo',
  variants: [400],
  category: 'display'
}, {
  family: 'Macondo Swash Caps',
  variants: [400],
  category: 'display'
}, {
  family: 'Mada',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Magra',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Maiden Orange',
  variants: [400],
  category: 'display'
}, {
  family: 'Maitree',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Major Mono Display',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Mako',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Mali',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'handwriting'
}, {
  family: 'Mallanna',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Mandali',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Manjari',
  variants: [100, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Manrope',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mansalva',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Manuale',
  variants: [400, 500, 600, 700, '400i', '500i', '600i', '700i'],
  category: 'serif'
}, {
  family: 'Marcellus',
  variants: [400],
  category: 'serif'
}, {
  family: 'Marcellus SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Marck Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Margarine',
  variants: [400],
  category: 'display'
}, {
  family: 'Markazi Text',
  variants: [400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Marko One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Marmelad',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Martel',
  variants: [200, 300, 400, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Martel Sans',
  variants: [200, 300, 400, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Marvel',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Mate',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Mate SC',
  variants: [400],
  category: 'serif'
}, {
  family: 'Maven Pro',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'McLaren',
  variants: [400],
  category: 'display'
}, {
  family: 'Meddon',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'MedievalSharp',
  variants: [400],
  category: 'display'
}, {
  family: 'Medula One',
  variants: [400],
  category: 'display'
}, {
  family: 'Meera Inimai',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Megrim',
  variants: [400],
  category: 'display'
}, {
  family: 'Meie Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Merienda',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Merienda One',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Merriweather',
  variants: [300, '300i', 400, '400i', 700, '700i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Merriweather Sans',
  variants: [300, 400, 500, 600, 700, 800, '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'sans-serif'
}, {
  family: 'Metal',
  variants: [400],
  category: 'display'
}, {
  family: 'Metal Mania',
  variants: [400],
  category: 'display'
}, {
  family: 'Metamorphous',
  variants: [400],
  category: 'display'
}, {
  family: 'Metrophobic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Michroma',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Milonga',
  variants: [400],
  category: 'display'
}, {
  family: 'Miltonian',
  variants: [400],
  category: 'display'
}, {
  family: 'Miltonian Tattoo',
  variants: [400],
  category: 'display'
}, {
  family: 'Mina',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Miniver',
  variants: [400],
  category: 'display'
}, {
  family: 'Miriam Libre',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Mirza',
  variants: [400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Miss Fajardose',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mitr',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Modak',
  variants: [400],
  category: 'display'
}, {
  family: 'Modern Antiqua',
  variants: [400],
  category: 'display'
}, {
  family: 'Mogra',
  variants: [400],
  category: 'display'
}, {
  family: 'Molengo',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Molle',
  variants: [400, '400i'],
  category: 'handwriting'
}, {
  family: 'Monda',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Monofett',
  variants: [400],
  category: 'display'
}, {
  family: 'Monoton',
  variants: [400],
  category: 'display'
}, {
  family: 'Monsieur La Doulaise',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Montaga',
  variants: [400],
  category: 'serif'
}, {
  family: 'Montez',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Montserrat',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Montserrat Alternates',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Montserrat Subrayada',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Moul',
  variants: [400],
  category: 'display'
}, {
  family: 'Moulpali',
  variants: [400],
  category: 'display'
}, {
  family: 'Mountains of Christmas',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Mouse Memoirs',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Mr Bedfort',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mr Dafoe',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mr De Haviland',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mrs Saint Delafield',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mrs Sheppards',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Mukta',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mukta Mahee',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mukta Malar',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mukta Vaani',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Mulish',
  variants: [200, 300, 400, 500, 600, 700, 800, 900, '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'MuseoModerno',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Mystery Quest',
  variants: [400],
  category: 'display'
}, {
  family: 'NTR',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Nanum Brush Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Nanum Gothic',
  variants: [400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Nanum Gothic Coding',
  variants: [400, 700],
  category: 'monospace'
}, {
  family: 'Nanum Myeongjo',
  variants: [400, 700, 800],
  category: 'serif'
}, {
  family: 'Nanum Pen Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Nerko One',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Neucha',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Neuton',
  variants: [200, 300, 400, '400i', 700, 800],
  category: 'serif'
}, {
  family: 'New Rocker',
  variants: [400],
  category: 'display'
}, {
  family: 'New Tegomin',
  variants: [400],
  category: 'serif'
}, {
  family: 'News Cycle',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Newsreader',
  variants: [200, 300, 400, 500, 600, 700, 800, '200i', '300i', '400i', '500i', '600i', '700i', '800i'],
  category: 'serif'
}, {
  family: 'Niconne',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Niramit',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Nixie One',
  variants: [400],
  category: 'display'
}, {
  family: 'Nobile',
  variants: [400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Nokora',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Norican',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Nosifer',
  variants: [400],
  category: 'display'
}, {
  family: 'Notable',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Nothing You Could Do',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Noticia Text',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Noto Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Noto Sans HK',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans JP',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans KR',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans SC',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Sans TC',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Noto Serif',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Noto Serif JP',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Noto Serif KR',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Noto Serif SC',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Noto Serif TC',
  variants: [200, 300, 400, 500, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Nova Cut',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Flat',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Nova Oval',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Round',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Script',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Slim',
  variants: [400],
  category: 'display'
}, {
  family: 'Nova Square',
  variants: [400],
  category: 'display'
}, {
  family: 'Numans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Nunito',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Nunito Sans',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Odibee Sans',
  variants: [400],
  category: 'display'
}, {
  family: 'Odor Mean Chey',
  variants: [400],
  category: 'display'
}, {
  family: 'Offside',
  variants: [400],
  category: 'display'
}, {
  family: 'Oi',
  variants: [400],
  category: 'display'
}, {
  family: 'Old Standard TT',
  variants: [400, '400i', 700],
  category: 'serif'
}, {
  family: 'Oldenburg',
  variants: [400],
  category: 'display'
}, {
  family: 'Oleo Script',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Oleo Script Swash Caps',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Open Sans',
  variants: [300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Open Sans Condensed',
  variants: [300, '300i', 400, 700],
  category: 'sans-serif'
}, {
  family: 'Oranienbaum',
  variants: [400],
  category: 'serif'
}, {
  family: 'Orbitron',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Oregano',
  variants: [400, '400i'],
  category: 'display'
}, {
  family: 'Orelega One',
  variants: [400],
  category: 'display'
}, {
  family: 'Orienta',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Original Surfer',
  variants: [400],
  category: 'display'
}, {
  family: 'Oswald',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Over the Rainbow',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Overlock',
  variants: [400, '400i', 700, '700i', 900, '900i'],
  category: 'display'
}, {
  family: 'Overlock SC',
  variants: [400],
  category: 'display'
}, {
  family: 'Overpass',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Overpass Mono',
  variants: [300, 400, 600, 700],
  category: 'monospace'
}, {
  family: 'Ovo',
  variants: [400],
  category: 'serif'
}, {
  family: 'Oxanium',
  variants: [200, 300, 400, 500, 600, 700, 800],
  category: 'display'
}, {
  family: 'Oxygen',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Oxygen Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'PT Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'PT Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'PT Sans Caption',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'PT Sans Narrow',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'PT Serif',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'PT Serif Caption',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Pacifico',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Padauk',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Palanquin',
  variants: [100, 200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Palanquin Dark',
  variants: [400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Pangolin',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Paprika',
  variants: [400],
  category: 'display'
}, {
  family: 'Parisienne',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Passero One',
  variants: [400],
  category: 'display'
}, {
  family: 'Passion One',
  variants: [400, 700, 900],
  category: 'display'
}, {
  family: 'Pathway Gothic One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Patrick Hand',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Patrick Hand SC',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Pattaya',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Patua One',
  variants: [400],
  category: 'display'
}, {
  family: 'Pavanam',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Paytone One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Peddana',
  variants: [400],
  category: 'serif'
}, {
  family: 'Peralta',
  variants: [400],
  category: 'display'
}, {
  family: 'Permanent Marker',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Petit Formal Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Petrona',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Philosopher',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Piazzolla',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Piedra',
  variants: [400],
  category: 'display'
}, {
  family: 'Pinyon Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Pirata One',
  variants: [400],
  category: 'display'
}, {
  family: 'Plaster',
  variants: [400],
  category: 'display'
}, {
  family: 'Play',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Playball',
  variants: [400],
  category: 'display'
}, {
  family: 'Playfair Display',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Playfair Display SC',
  variants: [400, '400i', 700, '700i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Podkova',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Poiret One',
  variants: [400],
  category: 'display'
}, {
  family: 'Poller One',
  variants: [400],
  category: 'display'
}, {
  family: 'Poly',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Pompiere',
  variants: [400],
  category: 'display'
}, {
  family: 'Pontano Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Poor Story',
  variants: [400],
  category: 'display'
}, {
  family: 'Poppins',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Port Lligat Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Port Lligat Slab',
  variants: [400],
  category: 'serif'
}, {
  family: 'Potta One',
  variants: [400],
  category: 'display'
}, {
  family: 'Pragati Narrow',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Prata',
  variants: [400],
  category: 'serif'
}, {
  family: 'Preahvihear',
  variants: [400],
  category: 'display'
}, {
  family: 'Press Start 2P',
  variants: [400],
  category: 'display'
}, {
  family: 'Pridi',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Princess Sofia',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Prociono',
  variants: [400],
  category: 'serif'
}, {
  family: 'Prompt',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Prosto One',
  variants: [400],
  category: 'display'
}, {
  family: 'Proza Libre',
  variants: [400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Public Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Puritan',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Purple Purse',
  variants: [400],
  category: 'display'
}, {
  family: 'Quando',
  variants: [400],
  category: 'serif'
}, {
  family: 'Quantico',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Quattrocento',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Quattrocento Sans',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Questrial',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Quicksand',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Quintessential',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Qwigley',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Racing Sans One',
  variants: [400],
  category: 'display'
}, {
  family: 'Radley',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Rajdhani',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Rakkas',
  variants: [400],
  category: 'display'
}, {
  family: 'Raleway',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Raleway Dots',
  variants: [400],
  category: 'display'
}, {
  family: 'Ramabhadra',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ramaraja',
  variants: [400],
  category: 'serif'
}, {
  family: 'Rambla',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Rammetto One',
  variants: [400],
  category: 'display'
}, {
  family: 'Ranchers',
  variants: [400],
  category: 'display'
}, {
  family: 'Rancho',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ranga',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Rasa',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Rationale',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ravi Prakash',
  variants: [400],
  category: 'display'
}, {
  family: 'Recursive',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Red Hat Display',
  variants: [400, '400i', 500, '500i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Red Hat Text',
  variants: [400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Red Rose',
  variants: [300, 400, 500, 600, 700],
  category: 'display'
}, {
  family: 'Redressed',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Reem Kufi',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Reenie Beanie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Reggae One',
  variants: [400],
  category: 'display'
}, {
  family: 'Revalia',
  variants: [400],
  category: 'display'
}, {
  family: 'Rhodium Libre',
  variants: [400],
  category: 'serif'
}, {
  family: 'Ribeye',
  variants: [400],
  category: 'display'
}, {
  family: 'Ribeye Marrow',
  variants: [400],
  category: 'display'
}, {
  family: 'Righteous',
  variants: [400],
  category: 'display'
}, {
  family: 'Risque',
  variants: [400],
  category: 'display'
}, {
  family: 'Roboto',
  variants: [100, '100i', 300, '300i', 400, '400i', 500, '500i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Roboto Condensed',
  variants: [300, '300i', 400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Roboto Mono',
  variants: [100, 200, 300, 400, 500, 600, 700, '100i', '200i', '300i', '400i', '500i', '600i', '700i'],
  category: 'monospace'
}, {
  family: 'Roboto Slab',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Rochester',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Rock Salt',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'RocknRoll One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Rokkitt',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'serif'
}, {
  family: 'Romanesco',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ropa Sans',
  variants: [400, '400i'],
  category: 'sans-serif'
}, {
  family: 'Rosario',
  variants: [300, 400, 500, 600, 700, '300i', '400i', '500i', '600i', '700i'],
  category: 'sans-serif'
}, {
  family: 'Rosarivo',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Rouge Script',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Rowdies',
  variants: [300, 400, 700],
  category: 'display'
}, {
  family: 'Rozha One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Rubik',
  variants: [300, 400, 500, 600, 700, 800, 900, '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Rubik Mono One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ruda',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Rufina',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Ruge Boogie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Ruluko',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Rum Raisin',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ruslan Display',
  variants: [400],
  category: 'display'
}, {
  family: 'Russo One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ruthie',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Rye',
  variants: [400],
  category: 'display'
}, {
  family: 'Sacramento',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sahitya',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Sail',
  variants: [400],
  category: 'display'
}, {
  family: 'Saira',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Saira Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Saira Extra Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Saira Semi Condensed',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Saira Stencil One',
  variants: [400],
  category: 'display'
}, {
  family: 'Salsa',
  variants: [400],
  category: 'display'
}, {
  family: 'Sanchez',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Sancreek',
  variants: [400],
  category: 'display'
}, {
  family: 'Sansita',
  variants: [400, '400i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Sansita Swashed',
  variants: [300, 400, 500, 600, 700, 800, 900],
  category: 'display'
}, {
  family: 'Sarabun',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'sans-serif'
}, {
  family: 'Sarala',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Sarina',
  variants: [400],
  category: 'display'
}, {
  family: 'Sarpanch',
  variants: [400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Satisfy',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sawarabi Gothic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Sawarabi Mincho',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Scada',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Scheherazade',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Schoolbell',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Scope One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Seaweed Script',
  variants: [400],
  category: 'display'
}, {
  family: 'Secular One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Sedgwick Ave',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sedgwick Ave Display',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Sen',
  variants: [400, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Sevillana',
  variants: [400],
  category: 'display'
}, {
  family: 'Seymour One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Shadows Into Light',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Shadows Into Light Two',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Shanti',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Share',
  variants: [400, '400i', 700, '700i'],
  category: 'display'
}, {
  family: 'Share Tech',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Share Tech Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Shippori Mincho',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Shippori Mincho B1',
  variants: [400, 500, 600, 700, 800],
  category: 'serif'
}, {
  family: 'Shojumaru',
  variants: [400],
  category: 'display'
}, {
  family: 'Short Stack',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Shrikhand',
  variants: [400],
  category: 'display'
}, {
  family: 'Siemreap',
  variants: [400],
  category: 'display'
}, {
  family: 'Sigmar One',
  variants: [400],
  category: 'display'
}, {
  family: 'Signika',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Signika Negative',
  variants: [300, 400, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Simonetta',
  variants: [400, '400i', 900, '900i'],
  category: 'display'
}, {
  family: 'Single Day',
  variants: [400],
  category: 'display'
}, {
  family: 'Sintony',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Sirin Stencil',
  variants: [400],
  category: 'display'
}, {
  family: 'Six Caps',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Skranji',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Slabo 13px',
  variants: [400],
  category: 'serif'
}, {
  family: 'Slabo 27px',
  variants: [400],
  category: 'serif'
}, {
  family: 'Slackey',
  variants: [400],
  category: 'display'
}, {
  family: 'Smokum',
  variants: [400],
  category: 'display'
}, {
  family: 'Smythe',
  variants: [400],
  category: 'display'
}, {
  family: 'Sniglet',
  variants: [400, 800],
  category: 'display'
}, {
  family: 'Snippet',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Snowburst One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sofadi One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sofia',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Solway',
  variants: [300, 400, 500, 700, 800],
  category: 'serif'
}, {
  family: 'Song Myung',
  variants: [400],
  category: 'serif'
}, {
  family: 'Sonsie One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sora',
  variants: [100, 200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Sorts Mill Goudy',
  variants: [400, '400i'],
  category: 'serif'
}, {
  family: 'Source Code Pro',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'monospace'
}, {
  family: 'Source Sans Pro',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Source Serif Pro',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Space Grotesk',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Space Mono',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Spartan',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Special Elite',
  variants: [400],
  category: 'display'
}, {
  family: 'Spectral',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'serif'
}, {
  family: 'Spectral SC',
  variants: [200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i'],
  category: 'serif'
}, {
  family: 'Spicy Rice',
  variants: [400],
  category: 'display'
}, {
  family: 'Spinnaker',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Spirax',
  variants: [400],
  category: 'display'
}, {
  family: 'Squada One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sree Krushnadevaraya',
  variants: [400],
  category: 'serif'
}, {
  family: 'Sriracha',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Srisakdi',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Staatliches',
  variants: [400],
  category: 'display'
}, {
  family: 'Stalemate',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Stalinist One',
  variants: [400],
  category: 'display'
}, {
  family: 'Stardos Stencil',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Stick',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Stint Ultra Condensed',
  variants: [400],
  category: 'display'
}, {
  family: 'Stint Ultra Expanded',
  variants: [400],
  category: 'display'
}, {
  family: 'Stoke',
  variants: [300, 400],
  category: 'serif'
}, {
  family: 'Strait',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Stylish',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Sue Ellen Francisco',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Suez One',
  variants: [400],
  category: 'serif'
}, {
  family: 'Sulphur Point',
  variants: [300, 400, 700],
  category: 'sans-serif'
}, {
  family: 'Sumana',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Sunflower',
  variants: [300, 400, 500, 700],
  category: 'sans-serif'
}, {
  family: 'Sunshiney',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Supermercado One',
  variants: [400],
  category: 'display'
}, {
  family: 'Sura',
  variants: [400, 700],
  category: 'serif'
}, {
  family: 'Suranna',
  variants: [400],
  category: 'serif'
}, {
  family: 'Suravaram',
  variants: [400],
  category: 'serif'
}, {
  family: 'Suwannaphum',
  variants: [400],
  category: 'display'
}, {
  family: 'Swanky and Moo Moo',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Syncopate',
  variants: [400, 700],
  category: 'sans-serif'
}, {
  family: 'Syne',
  variants: [400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Syne Mono',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Syne Tactile',
  variants: [400],
  category: 'display'
}, {
  family: 'Tajawal',
  variants: [200, 300, 400, 500, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Tangerine',
  variants: [400, 700],
  category: 'handwriting'
}, {
  family: 'Taprom',
  variants: [400],
  category: 'display'
}, {
  family: 'Tauri',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Taviraj',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Teko',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Telex',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Tenali Ramakrishna',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Tenor Sans',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Text Me One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Texturina',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Thasadith',
  variants: [400, '400i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'The Girl Next Door',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Tienne',
  variants: [400, 700, 900],
  category: 'serif'
}, {
  family: 'Tillana',
  variants: [400, 500, 600, 700, 800],
  category: 'handwriting'
}, {
  family: 'Timmana',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Tinos',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Titan One',
  variants: [400],
  category: 'display'
}, {
  family: 'Titillium Web',
  variants: [200, '200i', 300, '300i', 400, '400i', 600, '600i', 700, '700i', 900],
  category: 'sans-serif'
}, {
  family: 'Tomorrow',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'sans-serif'
}, {
  family: 'Trade Winds',
  variants: [400],
  category: 'display'
}, {
  family: 'Train One',
  variants: [400],
  category: 'display'
}, {
  family: 'Trirong',
  variants: [100, '100i', 200, '200i', 300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i', 800, '800i', 900, '900i'],
  category: 'serif'
}, {
  family: 'Trispace',
  variants: [100, 200, 300, 400, 500, 600, 700, 800],
  category: 'sans-serif'
}, {
  family: 'Trocchi',
  variants: [400],
  category: 'serif'
}, {
  family: 'Trochut',
  variants: [400, '400i', 700],
  category: 'display'
}, {
  family: 'Truculenta',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: 'sans-serif'
}, {
  family: 'Trykker',
  variants: [400],
  category: 'serif'
}, {
  family: 'Tulpen One',
  variants: [400],
  category: 'display'
}, {
  family: 'Turret Road',
  variants: [200, 300, 400, 500, 700, 800],
  category: 'display'
}, {
  family: 'Ubuntu',
  variants: [300, '300i', 400, '400i', 500, '500i', 700, '700i'],
  category: 'sans-serif'
}, {
  family: 'Ubuntu Condensed',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Ubuntu Mono',
  variants: [400, '400i', 700, '700i'],
  category: 'monospace'
}, {
  family: 'Ultra',
  variants: [400],
  category: 'serif'
}, {
  family: 'Uncial Antiqua',
  variants: [400],
  category: 'display'
}, {
  family: 'Underdog',
  variants: [400],
  category: 'display'
}, {
  family: 'Unica One',
  variants: [400],
  category: 'display'
}, {
  family: 'UnifrakturCook',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'UnifrakturMaguntia',
  variants: [400],
  category: 'display'
}, {
  family: 'Unkempt',
  variants: [400, 700],
  category: 'display'
}, {
  family: 'Unlock',
  variants: [400],
  category: 'display'
}, {
  family: 'Unna',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'VT323',
  variants: [400],
  category: 'monospace'
}, {
  family: 'Vampiro One',
  variants: [400],
  category: 'display'
}, {
  family: 'Varela',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Varela Round',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Varta',
  variants: [300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Vast Shadow',
  variants: [400],
  category: 'display'
}, {
  family: 'Vesper Libre',
  variants: [400, 500, 700, 900],
  category: 'serif'
}, {
  family: 'Viaoda Libre',
  variants: [400],
  category: 'display'
}, {
  family: 'Vibes',
  variants: [400],
  category: 'display'
}, {
  family: 'Vibur',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Vidaloka',
  variants: [400],
  category: 'serif'
}, {
  family: 'Viga',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Voces',
  variants: [400],
  category: 'display'
}, {
  family: 'Volkhov',
  variants: [400, '400i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Vollkorn',
  variants: [400, 500, 600, 700, 800, 900, '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'serif'
}, {
  family: 'Vollkorn SC',
  variants: [400, 600, 700, 900],
  category: 'serif'
}, {
  family: 'Voltaire',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Waiting for the Sunrise',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Wallpoet',
  variants: [400],
  category: 'display'
}, {
  family: 'Walter Turncoat',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Warnes',
  variants: [400],
  category: 'display'
}, {
  family: 'Wellfleet',
  variants: [400],
  category: 'display'
}, {
  family: 'Wendy One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Wire One',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'Work Sans',
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900, '100i', '200i', '300i', '400i', '500i', '600i', '700i', '800i', '900i'],
  category: 'sans-serif'
}, {
  family: 'Xanh Mono',
  variants: [400, '400i'],
  category: 'monospace'
}, {
  family: 'Yanone Kaffeesatz',
  variants: [200, 300, 400, 500, 600, 700],
  category: 'sans-serif'
}, {
  family: 'Yantramanav',
  variants: [100, 300, 400, 500, 700, 900],
  category: 'sans-serif'
}, {
  family: 'Yatra One',
  variants: [400],
  category: 'display'
}, {
  family: 'Yellowtail',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Yeon Sung',
  variants: [400],
  category: 'display'
}, {
  family: 'Yeseva One',
  variants: [400],
  category: 'display'
}, {
  family: 'Yesteryear',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Yrsa',
  variants: [300, 400, 500, 600, 700],
  category: 'serif'
}, {
  family: 'Yusei Magic',
  variants: [400],
  category: 'sans-serif'
}, {
  family: 'ZCOOL KuaiLe',
  variants: [400],
  category: 'display'
}, {
  family: 'ZCOOL QingKe HuangYou',
  variants: [400],
  category: 'display'
}, {
  family: 'ZCOOL XiaoWei',
  variants: [400],
  category: 'serif'
}, {
  family: 'Zen Dots',
  variants: [400],
  category: 'display'
}, {
  family: 'Zeyada',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Zhi Mang Xing',
  variants: [400],
  category: 'handwriting'
}, {
  family: 'Zilla Slab',
  variants: [300, '300i', 400, '400i', 500, '500i', 600, '600i', 700, '700i'],
  category: 'serif'
}, {
  family: 'Zilla Slab Highlight',
  variants: [400, 700],
  category: 'display'
}]);

/***/ }),

/***/ "../Components/Typography/options.js":
/*!*******************************************!*\
  !*** ../Components/Typography/options.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontStyles": function() { return /* binding */ fontStyles; },
/* harmony export */   "textDecorations": function() { return /* binding */ textDecorations; },
/* harmony export */   "textTransforms": function() { return /* binding */ textTransforms; }
/* harmony export */ });
const fontStyles = [{
  label: 'Normal',
  value: 'normal'
}, {
  label: 'Italic',
  value: 'italic'
}, {
  label: 'Oblique',
  value: 'oblique'
}];
const textTransforms = [{
  label: 'None',
  value: 'none',
  icon: 'NO'
}, {
  label: 'Capitalize',
  value: 'capitalize',
  icon: 'Aa'
}, {
  label: 'Uppercase',
  value: 'uppercase',
  icon: 'AA'
}, {
  label: 'Lowercase',
  value: 'lowercase',
  icon: 'aa'
}];
const textDecorations = [{
  label: 'Default',
  value: 'auto'
}, {
  label: 'Underline',
  value: 'underline'
}, {
  label: 'Overline',
  value: 'overline'
}, {
  label: 'Line Through',
  value: 'line-through'
}, {
  label: 'None',
  value: 'none'
}];

/***/ }),

/***/ "../Components/index.js":
/*!******************************!*\
  !*** ../Components/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BColor": function() { return /* reexport safe */ _BColor_BColor__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "BDevice": function() { return /* reexport safe */ _BDevice_BDevice__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Background": function() { return /* reexport safe */ _Background_Background__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "BorderControl": function() { return /* reexport safe */ _BorderControl_BorderControl__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "BplMediaPlaceholder": function() { return /* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.BplMediaPlaceholder; },
/* harmony export */   "BtnGroup": function() { return /* reexport safe */ _BtnGroup_BtnGroup__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "ChangeImageData": function() { return /* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ChangeImageData; },
/* harmony export */   "ColorControl": function() { return /* reexport safe */ _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "ColorsControl": function() { return /* reexport safe */ _ColorsControl_ColorsControl__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "IconControl": function() { return /* reexport safe */ _IconControl_IconControl__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "ImageEditControl": function() { return /* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ImageEditControl; },
/* harmony export */   "ImageHolderControl": function() { return /* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ImageHolderControl; },
/* harmony export */   "ImagePlaceholder": function() { return /* reexport safe */ _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__.ImagePlaceholder; },
/* harmony export */   "InlineDetailMediaUpload": function() { return /* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.InlineDetailMediaUpload; },
/* harmony export */   "InlineMediaUpload": function() { return /* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.InlineMediaUpload; },
/* harmony export */   "Label": function() { return /* reexport safe */ _Label_Label__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "MediaEditControl": function() { return /* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__.MediaEditControl; },
/* harmony export */   "MultiShadowControl": function() { return /* reexport safe */ _MultiShadowControl_MultiShadowControl__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "SelectPureControl": function() { return /* reexport safe */ _SelectPureControl_SelectPureControl__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "SeparatorControl": function() { return /* reexport safe */ _SeparatorControl_SeparatorControl__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "ShadowControl": function() { return /* reexport safe */ _ShadowControl_ShadowControl__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "SpaceControl": function() { return /* reexport safe */ _SpaceControl_SpaceControl__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "Typography": function() { return /* reexport safe */ _Typography_Typography__WEBPACK_IMPORTED_MODULE_17__["default"]; }
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../Components/style.scss");
/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label/Label */ "../Components/Label/Label.js");
/* harmony import */ var _Background_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Background/Background */ "../Components/Background/Background.js");
/* harmony import */ var _BColor_BColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BColor/BColor */ "../Components/BColor/BColor.js");
/* harmony import */ var _BDevice_BDevice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BDevice/BDevice */ "../Components/BDevice/BDevice.js");
/* harmony import */ var _BorderControl_BorderControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BorderControl/BorderControl */ "../Components/BorderControl/BorderControl.js");
/* harmony import */ var _BtnGroup_BtnGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BtnGroup/BtnGroup */ "../Components/BtnGroup/BtnGroup.js");
/* harmony import */ var _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ColorControl/ColorControl */ "../Components/ColorControl/ColorControl.js");
/* harmony import */ var _ColorsControl_ColorsControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ColorsControl/ColorsControl */ "../Components/ColorsControl/ColorsControl.js");
/* harmony import */ var _IconControl_IconControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconControl/IconControl */ "../Components/IconControl/IconControl.js");
/* harmony import */ var _ImageControl_ImageControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageControl/ImageControl */ "../Components/ImageControl/ImageControl.js");
/* harmony import */ var _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MediaControl/MediaControl */ "../Components/MediaControl/MediaControl.js");
/* harmony import */ var _MultiShadowControl_MultiShadowControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MultiShadowControl/MultiShadowControl */ "../Components/MultiShadowControl/MultiShadowControl.js");
/* harmony import */ var _SelectPureControl_SelectPureControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SelectPureControl/SelectPureControl */ "../Components/SelectPureControl/SelectPureControl.js");
/* harmony import */ var _SeparatorControl_SeparatorControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SeparatorControl/SeparatorControl */ "../Components/SeparatorControl/SeparatorControl.js");
/* harmony import */ var _ShadowControl_ShadowControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadowControl/ShadowControl */ "../Components/ShadowControl/ShadowControl.js");
/* harmony import */ var _SpaceControl_SpaceControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SpaceControl/SpaceControl */ "../Components/SpaceControl/SpaceControl.js");
/* harmony import */ var _Typography_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Typography/Typography */ "../Components/Typography/Typography.js");




















/***/ }),

/***/ "../Components/utils/functions.js":
/*!****************************************!*\
  !*** ../Components/utils/functions.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImageSizes": function() { return /* binding */ getImageSizes; },
/* harmony export */   "tabController": function() { return /* binding */ tabController; }
/* harmony export */ });
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

/***/ "../Components/utils/icons.js":
/*!************************************!*\
  !*** ../Components/utils/icons.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "desktopIcon": function() { return /* binding */ desktopIcon; },
/* harmony export */   "gearIcon": function() { return /* binding */ gearIcon; },
/* harmony export */   "mobileIcon": function() { return /* binding */ mobileIcon; },
/* harmony export */   "scrollIcon": function() { return /* binding */ scrollIcon; },
/* harmony export */   "tabletIcon": function() { return /* binding */ tabletIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const color = '#4527a4';
const desktopIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 15,
  height: 15,
  viewBox: "0 0 548.172 548.172"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: color,
  d: "M534.75 49.965c-8.945-8.945-19.694-13.422-32.261-13.422H45.681c-12.562 0-23.313 4.477-32.264 13.422C4.471 58.913 0 69.663 0 82.226v310.633c0 12.566 4.471 23.315 13.417 32.265 8.951 8.945 19.702 13.414 32.264 13.414h155.318c0 7.231-1.524 14.661-4.57 22.269-3.044 7.614-6.09 14.273-9.136 19.981-3.042 5.715-4.565 9.897-4.565 12.56 0 4.948 1.807 9.24 5.424 12.847 3.615 3.621 7.898 5.435 12.847 5.435h146.179c4.949 0 9.233-1.813 12.848-5.435 3.62-3.606 5.427-7.898 5.427-12.847 0-2.468-1.526-6.611-4.571-12.415-3.046-5.801-6.092-12.566-9.134-20.267-3.046-7.71-4.569-15.085-4.569-22.128h155.318c12.56 0 23.309-4.469 32.254-13.414 8.949-8.949 13.422-19.698 13.422-32.265V82.226c.003-12.563-4.474-23.313-13.423-32.261zm-23.123 269.803c0 2.475-.903 4.613-2.711 6.424-1.81 1.804-3.952 2.707-6.427 2.707H45.681c-2.473 0-4.615-.903-6.423-2.707-1.807-1.817-2.712-3.949-2.712-6.424V82.226c0-2.475.902-4.615 2.712-6.423 1.809-1.805 3.951-2.712 6.423-2.712h456.815c2.471 0 4.617.904 6.42 2.712 1.808 1.809 2.711 3.949 2.711 6.423v237.542z"
}));
const tabletIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 15,
  height: 15,
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: color,
  d: "M394.667 0H117.333C87.936 0 64 23.936 64 53.333v405.333C64 488.064 87.936 512 117.333 512h277.333C424.064 512 448 488.064 448 458.667V53.333C448 23.936 424.064 0 394.667 0zM256 480c-11.755 0-21.333-9.579-21.333-21.333s9.579-21.333 21.333-21.333 21.333 9.579 21.333 21.333S267.755 480 256 480zm149.333-64c0 5.888-4.779 10.667-10.667 10.667H117.333c-5.888 0-10.667-4.779-10.667-10.667V53.333c0-5.888 4.779-10.667 10.667-10.667h277.333c5.888 0 10.667 4.779 10.667 10.667V416z"
}));
const mobileIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 15,
  height: 15,
  viewBox: "0 0 503.604 503.604"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: color,
  d: "M337.324 0H167.192c-28.924 0-53.5 23.584-53.5 52.5v398.664c0 28.916 24.056 52.44 52.98 52.44l170.412-.184c28.92 0 52.58-23.528 52.58-52.448l.248-398.5C389.908 23.452 366.364 0 337.324 0zM227.68 31.476h49.36c4.336 0 7.868 3.52 7.868 7.868 0 4.348-3.532 7.868-7.868 7.868h-49.36a7.865 7.865 0 01-7.868-7.868 7.865 7.865 0 017.868-7.868zm-29.66 2.504c2.916-2.912 8.224-2.952 11.136 0a7.973 7.973 0 012.324 5.588c0 2.048-.864 4.088-2.324 5.548-1.452 1.46-3.504 2.32-5.548 2.32-2.084 0-4.088-.86-5.588-2.32-1.452-1.456-2.28-3.5-2.28-5.548-.004-2.088.828-4.132 2.28-5.588zm52.752 454.028c-12.984 0-23.544-10.568-23.544-23.548 0-12.984 10.56-23.548 23.544-23.548s23.544 10.564 23.544 23.548c0 12.98-10.564 23.548-23.544 23.548zm114.716-63.1H141.232V74.756h224.256v350.152z"
}));
const scrollIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "https://www.w3.org/2000/svg",
  width: 14,
  height: 14,
  viewBox: "0 0 330 330"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M100.606 229.393c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l75 75A14.954 14.954 0 00165 330a14.95 14.95 0 0010.606-4.394l75-75c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0L180 278.787V51.212l49.394 49.394A14.95 14.95 0 00240 105a14.95 14.95 0 0010.606-4.394c5.858-5.857 5.858-15.355 0-21.213l-75-75c-5.857-5.858-15.355-5.858-21.213 0l-75 75c-5.858 5.857-5.858 15.355 0 21.213 5.857 5.857 15.355 5.857 21.213 0L150 51.212v227.574l-49.394-49.393z"
}));
const gearIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  viewBox: "0 0 430.848 430.848"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M286.244,249.537l10.992-45.639c0.035-0.143,0.071-0.285,0.109-0.428c2.909-10.867,11.469-19.426,22.339-22.338 l33.347-8.936c-5.472-6.525-13.678-10.682-22.839-10.682h-9.837c-2.511-7.895-5.7-15.59-9.515-22.957l6.96-6.959 c11.622-11.623,11.622-30.535,0-42.156L296.76,68.4c-5.631-5.629-13.117-8.73-21.079-8.73c-7.961,0-15.447,3.102-21.078,8.732 l-6.96,6.959c-7.369-3.814-15.064-7.004-22.956-9.516V56.01c0-16.436-13.372-29.807-29.808-29.807h-29.758 c-16.436,0-29.808,13.371-29.808,29.807v9.836c-7.893,2.512-15.588,5.701-22.957,9.516l-6.96-6.961 c-5.631-5.629-13.117-8.73-21.078-8.73c-7.961,0-15.447,3.102-21.079,8.732L42.2,89.443c-11.622,11.621-11.622,30.533,0,42.156 l6.959,6.959c-3.815,7.367-7.004,15.063-9.515,22.957h-9.837C13.372,161.516,0,174.887,0,191.324v29.758 c0,16.436,13.372,29.807,29.808,29.807h9.837c2.511,7.895,5.7,15.588,9.515,22.957l-6.96,6.959 c-11.623,11.623-11.623,30.533,0,42.158l21.041,21.039c5.632,5.631,13.118,8.732,21.079,8.732s15.447-3.102,21.077-8.732 l6.96-6.959c7.366,3.815,15.061,7.002,22.957,9.514v9.838c0,16.436,13.372,29.809,29.808,29.809h25.809 c-2.388-5.691-3.644-11.852-3.645-18.209c-0.002-12.572,4.892-24.391,13.781-33.279L286.244,249.537z M180,286.201 c-44.112,0-80-35.887-80-79.998c0-44.113,35.888-80.002,80-80.002s80,35.889,80,80.002C260,250.314,224.112,286.201,180,286.201z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M425.267,218.734l-0.319-0.32c-0.939-0.941-2.189-1.428-3.541-1.469c-1.326,0-2.598,0.525-3.536,1.465l-21.596,21.596 c-3.304,3.305-7.699,5.125-12.375,5.125c-4.676,0-9.072-1.82-12.379-5.129c-3.307-3.305-5.128-7.701-5.128-12.377 c0.001-4.676,1.821-9.072,5.126-12.377l21.596-21.596c0.939-0.939,1.465-2.213,1.464-3.539c-0.001-1.328-0.53-2.6-1.47-3.537 l-0.314-0.313c-3.605-3.605-8.399-5.592-13.499-5.592c-1.665,0-3.325,0.219-4.936,0.65l-44.348,11.885 c-6.568,1.76-11.741,6.932-13.498,13.496c-0.011,0.041-0.021,0.08-0.031,0.121l-11.817,49.063l-87.667,87.666 c-6.528,6.527-10.122,15.207-10.121,24.44c0.002,9.232,3.598,17.91,10.126,24.439l2.088,2.088 c6.528,6.529,15.209,10.125,24.443,10.125h0c9.231,0,17.909-3.594,24.437-10.121l87.667-87.666l49.061-11.816 c0.041-0.01,0.082-0.022,0.122-0.031c6.563-1.758,11.735-6.928,13.497-13.496l11.883-44.352 C431.959,230.598,430.066,223.535,425.267,218.734z M257.26,368.406c-1.888,1.889-4.399,2.93-7.071,2.93 c-2.671,0-5.183-1.041-7.072-2.932c-1.887-1.885-2.928-4.397-2.928-7.068c-0.001-2.672,1.041-5.185,2.931-7.072 c1.886-1.887,4.398-2.928,7.069-2.928c2.672,0,5.184,1.041,7.072,2.93c1.887,1.885,2.928,4.396,2.928,7.068 C260.189,364.006,259.148,366.518,257.26,368.406z M316.194,305.935L274.82,347.31c-1.416,1.416-3.3,2.197-5.303,2.197 c-2.003,0-3.887-0.781-5.303-2.197c-1.417-1.416-2.197-3.299-2.197-5.303s0.78-3.887,2.197-5.303l41.374-41.375 c1.417-1.418,3.3-2.197,5.303-2.197s3.887,0.779,5.303,2.197c1.417,1.416,2.197,3.299,2.197,5.303S317.611,304.519,316.194,305.935 z"
}));

/***/ }),

/***/ "../Components/utils/options.js":
/*!**************************************!*\
  !*** ../Components/utils/options.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgTypes": function() { return /* binding */ bgTypes; },
/* harmony export */   "borderStyles": function() { return /* binding */ borderStyles; },
/* harmony export */   "emUnit": function() { return /* binding */ emUnit; },
/* harmony export */   "gradients": function() { return /* binding */ gradients; },
/* harmony export */   "perUnit": function() { return /* binding */ perUnit; },
/* harmony export */   "pxUnit": function() { return /* binding */ pxUnit; },
/* harmony export */   "remUnit": function() { return /* binding */ remUnit; },
/* harmony export */   "sides": function() { return /* binding */ sides; },
/* harmony export */   "vhUnit": function() { return /* binding */ vhUnit; },
/* harmony export */   "vwUnit": function() { return /* binding */ vwUnit; }
/* harmony export */ });
const borderStyles = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Dashed',
  value: 'dashed'
}, {
  label: 'Dotted',
  value: 'dotted'
}, {
  label: 'Double',
  value: 'double'
}, {
  label: 'Groove',
  value: 'groove'
}, {
  label: 'Inset',
  value: 'inset'
}, {
  label: 'Outset',
  value: 'outset'
}, {
  label: 'Ridge',
  value: 'ridge'
}];
const pxUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'px',
    label: 'px',
    default: def
  };
};
const perUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: '%',
    label: '%',
    default: def
  };
};
const emUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'em',
    label: 'em',
    default: def
  };
};
const remUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'rem',
    label: 'rem',
    default: def
  };
};
const vwUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'vw',
    label: 'vw',
    default: def
  };
};
const vhUnit = function () {
  let def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    value: 'vh',
    label: 'vh',
    default: def
  };
};
const sides = [{
  value: 'all',
  label: 'All Sides'
}, {
  value: 'top',
  label: 'Top'
}, {
  value: 'right',
  label: 'Right'
}, {
  value: 'bottom',
  label: 'Bottom'
}, {
  value: 'left',
  label: 'Left'
}, {
  value: 'topRight',
  label: 'Top Right'
}, {
  value: 'topBottom',
  label: 'Top Bottom'
}, {
  value: 'topLeft',
  label: 'Top Left'
}, {
  value: 'topRightBottom',
  label: 'Top Right Bottom'
}, {
  value: 'topRightLeft',
  label: 'Top Right Left'
}, {
  value: 'topBottomLeft',
  label: 'Top Bottom Left'
}, {
  value: 'rightBottom',
  label: 'Right Bottom'
}, {
  value: 'rightLeft',
  label: 'Right Left'
}, {
  value: 'rightBottomLeft',
  label: 'Right Bottom Left'
}, {
  value: 'bottomLeft',
  label: 'Bottom Left'
}];
const gradients = [{
  name: 'Daisy Bush to Fuchsia Blue',
  gradient: 'linear-gradient(135deg, #4527a4, #8344c5)',
  slug: 'daisy-bush-to-fuchsia-blue'
}, {
  name: 'Reddish Orange to Yellowish Orange',
  gradient: 'linear-gradient(135deg, #fe6601, #fbb040)',
  slug: 'reddish-orange-to-yellowish-orange'
}, {
  name: 'Tuft Bush to Carnation Pink',
  gradient: 'linear-gradient(135deg, #fed1c7, #fe8dc6)',
  slug: 'tuft-bush-to-carnation-pink'
}, {
  name: 'Golden Fizz to Yellow Orange',
  gradient: 'linear-gradient(135deg, #f9ed32, #fbb040)',
  slug: 'golden-fizz-to-yellow-orange'
}, {
  name: 'Light Electric Violet to Electric Violet',
  gradient: 'linear-gradient(135deg, #e100ff, #7f00ff)',
  slug: 'light-electric-violet-to-electric-violet'
}, {
  name: 'Hot Pink to Violet Red',
  gradient: 'linear-gradient(135deg, #ff7db8, #ee2a7b)',
  slug: 'hot-pink-to-violet-red'
}, {
  name: 'Spring Green to Azure Radiance',
  gradient: 'linear-gradient(135deg, #00ff8f, #00a1ff)',
  slug: 'spring-green-to-azure-radiance'
}];
const bgTypes = [{
  label: 'Solid',
  value: 'solid'
}, {
  label: 'Gradient',
  value: 'gradient'
}];

/***/ }),

/***/ "./src/Cards.js":
/*!**********************!*\
  !*** ./src/Cards.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Helper/getCSS */ "../Components/Helper/getCSS.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/function */ "./src/utils/function.js");



const Cards = props => {
  const {
    attributes,
    clientId,
    children
  } = props;
  const {
    cards,
    layout,
    background,
    btnPadding,
    columns,
    padding,
    titleColor,
    titleTypo,
    descColor,
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(titleTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(descTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(btnTypo)?.googleFontLink}

                #icbCards-${clientId} .icbCards{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(background)}
                    column-gap: ${columnGap};
                    row-gap: ${rowGap};
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(padding)}
                }
                #icbCards-${clientId} .icbCards .card{
                    border-radius: ${cardRadius};
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(cardPadding)};
                    box-shadow: ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getMultiShadowCSS)(cardShadow)}
                }
                #icbCards-${clientId} .icbCards .card img{
                    height: ${imgHeight}
                }
                #icbCards-${clientId} .icbCards.vertical .card img{
                    max-height: ${imgHeight}
                }
                #icbCards-${clientId} .icbCards .content {
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(contentPadding)};
                    text-align: ${contentAlign};
                    
                }
                #icbCards-${clientId} .icbCards .content h2{
                    color: ${titleColor};
                    text-align: ${contentAlign};
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(titleTypo)?.styles}
                    
                }
                #icbCards-${clientId} .icbCards .content p{
                    text-align: ${contentAlign};
                    color: ${descColor};
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(descTypo)?.styles}
                }
                #icbCards-${clientId} .icbCards .content .btnWrapper{
                    text-align: ${btnAlign}
                }
                #icbCards-${clientId} .icbCards .content a{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnColors)};
                    border-radius: ${btnRadius};
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(btnTypo)?.styles};
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(btnPadding)}
                }
                #icbCards-${clientId} .icbCards .content a:hover{
                     ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnHovColors)}
                }
            `, cards.map((card, index) => {
    const {
      background
    } = card;
    // console.log(titleColor);
    return `
                #icbCards-${clientId} .icbCards .card-${index}{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(background, true, true, false)}
                }

               
            `;
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `icbCards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile} ${layout}`
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./src/Edit.js":
/*!*********************!*\
  !*** ./src/Edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings */ "./src/Settings.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/ */ "../Components/index.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cards */ "./src/Cards.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  let {
    attributes,
    setAttributes,
    clientId,
    ...rest
  } = _ref;
  // console.log(imgHeight);
  const {
    cards,
    imgPos,
    isImg
  } = attributes;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    clientId && setAttributes({
      clientId: clientId
    });
  }, [clientId]);
  function updateCard(index, property, value) {
    const newCrads = [...cards];
    newCrads[index][property] = value;
    setAttributes({
      cards: newCrads
    });
  }
  // console.log(clientId);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    updateCard: updateCard,
    clientId: clientId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-icb-cards",
    id: `icbCards-${clientId}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Cards__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    clientId: clientId
  }, cards.map((card, index) => {
    const {
      img,
      title,
      desc,
      btnLabal,
      btnUrl
    } = card;
    const imgEl = isImg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, img ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: img,
      alt: title
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components___WEBPACK_IMPORTED_MODULE_5__.ImagePlaceholder, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Card Image:', 'info-cards'),
      value: {
        url: img
      },
      onChange: val => updateCard(index, 'img', val?.url)
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `card card-${index}`,
      key: index
    }, 'first' === imgPos && imgEl, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "h2",
      value: title,
      onChange: content => updateCard(index, "title", content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title", 'info-cards'),
      inlineToolbar: true,
      allowedFormats: ["core/bold", "core/italic"]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "p",
      value: desc,
      onChange: content => updateCard(index, "desc", content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Description", 'info-cards'),
      inlineToolbar: true,
      allowedFormats: ["core/bold", "core/italic"]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btnWrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "a",
      href: btnUrl,
      value: btnLabal,
      onChange: content => updateCard(index, "btnLabal", content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button", 'info-cards'),
      inlineToolbar: true,
      allowedFormats: ["core/bold", "core/italic"]
    }))), 'last' === imgPos && imgEl);
  }))));
}

/***/ }),

/***/ "./src/Settings.js":
/*!*************************!*\
  !*** ./src/Settings.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components */ "../Components/index.js");
/* harmony import */ var _Components_utils_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/utils/icons */ "../Components/utils/icons.js");








// import { getBoxValue } from "../src/utils/function";


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  let {
    attributes,
    setAttributes,
    updateCard
  } = _ref;
  const {
    cards,
    layout,
    theme,
    columns,
    columnGap,
    rowGap,
    isImg,
    imgPos,
    background,
    padding,
    cardPadding,
    cardShadow,
    imgHeight,
    contentPadding,
    titleColor,
    titleTypo,
    descColor,
    descTypo,
    btnColors,
    btnHovColors,
    btnAlign,
    btnTypo,
    btnPadding,
    cardRadius,
    btnRadius
  } = attributes;
  const [device, setDevice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("desktop");
  const onAddCard = () => {
    const newCrads = [...cards, {
      background: cards?.[0]?.background || {
        color: '#fff'
      },
      img: "",
      title: `Title of the ${cards?.length + 1} number card`,
      desc: `Description of the ${cards?.length + 1} number card`,
      btnLabal: cards?.[0]?.btnLabal || 'Button',
      btnUrl: "#"
    }];
    setAttributes({
      cards: newCrads
    });
  };
  function handleCardDelete(index) {
    const newCrads = [...cards];
    newCrads.splice(index, 1);
    setAttributes({
      cards: newCrads
    });
  }
  const onDuplicateCard = (e, index) => {
    e.preventDefault();
    const newCards = [...cards];
    newCards.splice(index, 0, cards[index]);
    setAttributes({
      cards: newCards
    });
  };
  const updateAllCard = (property, value) => {
    const newCards = [...cards];
    newCards.map((social, index) => {
      newCards[index][property] = value;
    });
    setAttributes({
      cards: newCards
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "bPlTabPanel",
    activeClass: "activeTab",
    tabs: [{
      name: "general",
      title: "General"
    }, {
      name: "style",
      title: "Style"
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "general" === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add or Remove Cards", "info-cards")
  }, cards.map((card, index) => {
    const {
      background,
      img,
      btnLabal,
      btnUrl
    } = card;
    // console.log(card.btnLabal)
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      className: "bPlPanelBody",
      title: `This is card ${index + 1}`,
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.Background, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background", "info-cards"),
      value: background,
      onChange: val => updateCard(index, "background", val),
      isImage: false
    }), isImg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.InlineMediaUpload, {
      value: img,
      onChange: val => updateCard(index, "img", val),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enter Image URL", "info-cards")
    }), btnLabal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.Label, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Url:", "info-cards")), btnLabal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      value: btnUrl,
      onChange: content => updateCard(index, "btnUrl", content)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
      className: "itemAction mt20"
    }, 1 < cards?.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      className: "removeItem",
      onClick: () => handleCardDelete(index)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
      icon: "no"
    }), " Delete"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      className: "duplicateItem",
      onClick: e => onDuplicateCard(e, index)
    }, _Components_utils_icons__WEBPACK_IMPORTED_MODULE_7__.gearIcon, " Duplicate")));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "addItem mt15"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: () => onAddCard()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
    icon: "plus"
  }), " Add New Card"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", "info-cards"),
    className: "bPlPanelBody",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", "info-cards"),
    labelPosition: "left",
    value: layout,
    onChange: val => {
      let deskCol = 2;
      if (val == "vertical") {
        deskCol = 3;
      }
      setAttributes({
        layout: val,
        columns: {
          ...columns,
          desktop: deskCol
        }
      });
    },
    options: [{
      label: "Vertical",
      value: "vertical"
    }, {
      label: "Horizontal",
      value: "horizontal"
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Theme", "info-cards"),
    labelPosition: "left",
    value: theme,
    onChange: val => {
      setAttributes({
        theme: val
      });
      "default" === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: "vertical",
        titleColor: "#000",
        descColor: "#000",
        isImg: true,
        imgPos: "first",
        cardPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0"
        },
        btnColors: {
          color: "#fff",
          bg: "#4527a4"
        },
        btnHovColors: {
          color: "#fff",
          bg: "#fe6601"
        }
      }), updateAllCard("background", {
        color: "#fff"
      }));
      "theme1" === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: "vertical",
        titleColor: "#000",
        descColor: "#000",
        isImg: true,
        imgPos: "last",
        cardPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0"
        },
        btnColors: {
          color: "#fff",
          bg: "#4527a4"
        },
        btnHovColors: {
          color: "#fff",
          bg: "#fe6601"
        }
      }), updateAllCard("background", {
        color: "#fff"
      }));
      "theme2" === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: "vertical",
        titleColor: "#000",
        descColor: "#000",
        isImg: true,
        imgPos: "first",
        cardPadding: {
          top: "15px",
          right: "15px",
          bottom: "15px",
          left: "15px"
        },
        btnColors: {
          color: "#fff",
          bg: "#4527a4"
        },
        btnHovColors: {
          color: "#fff",
          bg: "#fe6601"
        }
      }), updateAllCard("background", {
        color: "#fff"
      }));
      "theme3" === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 2
        },
        layout: "horizontal",
        titleColor: "#000",
        descColor: "#000",
        isImg: true,
        imgPos: "first",
        cardPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0"
        },
        btnColors: {
          color: "#fff",
          bg: "#4527a4"
        },
        btnHovColors: {
          color: "#fff",
          bg: "#fe6601"
        }
      }), updateAllCard("background", {
        color: "#fff"
      }));
      "theme4" === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: "vertical",
        isImg: true,
        imgPos: "first",
        titleColor: "#fff",
        descColor: "#fff",
        cardPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0"
        },
        btnColors: {
          color: "#fff",
          bg: "#000"
        },
        btnHovColors: {
          color: "#ffffffb3",
          bg: "#000000b3"
        }
      }), updateAllCard("background", {
        color: "#570DF8"
      }));
    },
    options: [{
      label: "Default",
      value: "default"
    }, {
      label: "Theme 1",
      value: "theme1"
    }, {
      label: "Theme 2",
      value: "theme2"
    }, {
      label: "Theme 3",
      value: "theme3"
    }, {
      label: "Theme 4",
      value: "theme4"
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.Label, {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Columns:", "info-cards")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.BDevice, {
    device: device,
    onChange: val => setDevice(val)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    value: columns[device],
    onChange: val => {
      setAttributes({
        columns: {
          ...columns,
          [device]: val
        }
      });
    },
    min: 1,
    max: 6,
    step: 1,
    beforeIcon: "grid-view"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Column Gap", "info-cards"),
    labelPosition: "left",
    value: columnGap,
    onChange: val => setAttributes({
      columnGap: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Row Gap", "info-cards"),
    labelPosition: "left",
    value: rowGap,
    onChange: val => setAttributes({
      rowGap: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Elements", "info-cards"),
    className: "bPlPanelBody",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Image", "info-cards"),
    checked: isImg,
    onChange: val => setAttributes({
      isImg: val
    })
  }), isImg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image Position", "info-cards"),
    labelPosition: "left",
    value: imgPos,
    onChange: val => setAttributes({
      imgPos: val
    }),
    options: [{
      label: "vertical" === layout ? "Top" : "Left",
      value: "first"
    }, {
      label: "vertical" === layout ? "Bottom" : "Right",
      value: "last"
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image Height", "info-cards"),
    labelPosition: "left",
    value: imgHeight,
    onChange: val => setAttributes({
      imgHeight: val
    })
  })))), "style" === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Cards", "info-cards"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.Background, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("background", "info-cards"),
    defaults: {
      color: "#0000"
    },
    value: background,
    onChange: val => setAttributes({
      background: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Paddign", "info-cards"),
    values: padding,
    resetValues: {
      "top": "0px",
      "right": "0x",
      "bottom": "0px",
      "left": "0px"
    },
    onChange: value => setAttributes({
      padding: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Card", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Paddign", "info-cards"),
    values: cardPadding,
    resetValues: {
      "top": "0px",
      "right": "0x",
      "bottom": "0px",
      "left": "0px"
    },
    onChange: value => setAttributes({
      cardPadding: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border radious", "info-cards"),
    labelPosition: "left",
    value: cardRadius,
    onChange: val => setAttributes({
      cardRadius: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.MultiShadowControl, {
    className: "mt20",
    value: cardShadow,
    onChange: val => setAttributes({
      cardShadow: val
    }),
    produce: immer__WEBPACK_IMPORTED_MODULE_8__["default"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alignment", "info-cards"),
    labelPosition: "left",
    value: _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.contentAlign,
    onChange: val => setAttributes({
      contentAlign: val
    }),
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Paddign", "info-cards"),
    values: contentPadding,
    resetValues: {
      "top": "0px",
      "right": "0x",
      "bottom": "0px",
      "left": "0px"
    },
    onChange: value => setAttributes({
      contentPadding: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "info-cards"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.Typography, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Typography", "info-cards"),
    value: titleTypo,
    onChange: val => setAttributes({
      titleTypo: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.BColor, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "info-cards"),
    value: titleColor,
    onChange: val => setAttributes({
      titleColor: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Description", "info-cards"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.Typography, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Typography", "info-cards"),
    value: descTypo,
    onChange: val => setAttributes({
      descTypo: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.BColor, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "info-cards"),
    value: descColor,
    onChange: val => setAttributes({
      descColor: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.Typography, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Typography", "info-cards"),
    value: btnTypo,
    onChange: val => setAttributes({
      btnTypo: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alignment", "info-cards"),
    labelPosition: "left",
    value: btnAlign,
    onChange: val => setAttributes({
      btnAlign: val
    }),
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.ColorsControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Colors", "info-cards"),
    value: btnColors,
    onChange: val => setAttributes({
      btnColors: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components__WEBPACK_IMPORTED_MODULE_6__.ColorsControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hover Colors", "info-cards"),
    value: btnHovColors,
    onChange: val => setAttributes({
      btnHovColors: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Paddign", "info-cards"),
    values: btnPadding,
    resetValues: {
      "top": "0px",
      "right": "0x",
      "bottom": "0px",
      "left": "0px"
    },
    onChange: value => setAttributes({
      btnPadding: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Radious", "info-cards"),
    labelPosition: "left",
    value: btnRadius,
    onChange: val => setAttributes({
      btnRadius: val
    })
  }))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./src/Edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/icons */ "./src/utils/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.cardIcon,
  save: () => null
});

/***/ }),

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

/***/ "./src/utils/icons.js":
/*!****************************!*\
  !*** ./src/utils/icons.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardIcon": function() { return /* binding */ cardIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const iconColor = '#4527a4';
const cardIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 576 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: iconColor,
  d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
}));

/***/ }),

/***/ "../Components/BColor/BColor.scss":
/*!****************************************!*\
  !*** ../Components/BColor/BColor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/BDevice/BDevice.scss":
/*!******************************************!*\
  !*** ../Components/BDevice/BDevice.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/ColorControl/ColorControl.scss":
/*!****************************************************!*\
  !*** ../Components/ColorControl/ColorControl.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/IconControl/IconControl.scss":
/*!**************************************************!*\
  !*** ../Components/IconControl/IconControl.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/ImageControl/ImageControl.scss":
/*!****************************************************!*\
  !*** ../Components/ImageControl/ImageControl.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/MediaControl/MediaControl.scss":
/*!****************************************************!*\
  !*** ../Components/MediaControl/MediaControl.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/SelectPureControl/SelectPureControl.scss":
/*!**************************************************************!*\
  !*** ../Components/SelectPureControl/SelectPureControl.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/SpaceControl/SpaceControl.scss":
/*!****************************************************!*\
  !*** ../Components/SpaceControl/SpaceControl.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/Typography/Typography.scss":
/*!************************************************!*\
  !*** ../Components/Typography/Typography.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/style.scss":
/*!********************************!*\
  !*** ../Components/style.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.mjs":
/*!***********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": function() { return /* binding */ un; },
/* harmony export */   "applyPatches": function() { return /* binding */ pn; },
/* harmony export */   "castDraft": function() { return /* binding */ K; },
/* harmony export */   "castImmutable": function() { return /* binding */ $; },
/* harmony export */   "createDraft": function() { return /* binding */ ln; },
/* harmony export */   "current": function() { return /* binding */ R; },
/* harmony export */   "enableAllPlugins": function() { return /* binding */ J; },
/* harmony export */   "enableES5": function() { return /* binding */ F; },
/* harmony export */   "enableMapSet": function() { return /* binding */ C; },
/* harmony export */   "enablePatches": function() { return /* binding */ T; },
/* harmony export */   "finishDraft": function() { return /* binding */ dn; },
/* harmony export */   "freeze": function() { return /* binding */ d; },
/* harmony export */   "immerable": function() { return /* binding */ L; },
/* harmony export */   "isDraft": function() { return /* binding */ r; },
/* harmony export */   "isDraftable": function() { return /* binding */ t; },
/* harmony export */   "nothing": function() { return /* binding */ H; },
/* harmony export */   "original": function() { return /* binding */ e; },
/* harmony export */   "produce": function() { return /* binding */ fn; },
/* harmony export */   "produceWithPatches": function() { return /* binding */ cn; },
/* harmony export */   "setAutoFreeze": function() { return /* binding */ sn; },
/* harmony export */   "setUseProxies": function() { return /* binding */ vn; }
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s,v){if( true&&c===o&&n(5),r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){F(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__["default"] = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"icb/cards","version":"0.1.0","title":"Info Cards","category":"widgets","icon":"smiley","description":"info-card block plugin","textdomain":"info-cards","attributes":{"className":{"type":"string","default":""},"align":{"type":"string","default":""},"clientId":{"type":"string","default":""},"cards":{"type":"array","default":[{"background":{"color":"#fff"},"img":"","title":"Title of the 1 number card","desc":"Description of the 1 number card","btnLabal":"Button","btnUrl":"#"},{"background":{"color":"#fff"},"img":"","title":"Title of the 2 number card","desc":"Description of the 2 number card","btnLabal":"Button","btnUrl":"#"},{"background":{"color":"#fff"},"img":"","title":"Title of the 3 number card","desc":"Description of the 3 number card","btnLabal":"Button","btnUrl":"#"}]},"layout":{"type":"string","default":"vertical"},"theme":{"type":"string","default":"default"},"columns":{"type":"object","default":{"desktop":3,"tablet":2,"mobile":1}},"columnGap":{"type":"string","default":"20px"},"rowGap":{"type":"string","default":"20px"},"isImg":{"type":"boolean","default":true},"imgHeight":{"type":"string","default":"200px"},"imgPos":{"type":"string","default":"first"},"background":{"type":"object","default":{"color":"#0000"}},"padding":{"type":"object","default":{"top":"0px","right":"0x","bottom":"0px","left":"0px"}},"cardPadding":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"cardRadius":{"type":"string","default":"8px"},"cardShadow":{"type":"array","default":[{"hOffset":"0px","vOffset":"4px","blur":"8px","spreed":"0px","color":"#0003"}]},"contentAlign":{"type":"string","default":"left"},"contentPadding":{"type":"object","default":{"top":"20px","right":"15px","bottom":"15px","left":"15px"}},"titleTypo":{"type":"object","default":{"fontSize":"20"}},"titleColor":{"type":"string","color":"#000"},"descTypo":{"type":"object","default":{"fontSize":"16"}},"descColor":{"type":"string","color":"#000"},"btnTypo":{"type":"object","default":{"fontSize":15,"textDecoration":"none"}},"btnAlign":{"type":"string","default":"left"},"btnColors":{"type":"object","default":{"color":"#fff","bg":"#4527a4"}},"btnHovColors":{"type":"object","default":{"color":"#fff","bg":"#fe6601"}},"btnPadding":{"type":"object","default":{"top":"10px","right":"15px","bottom":"10px","left":"15px"}},"btnRadius":{"type":"string","default":"8px"}},"supports":{"align":["wide","full"],"html":false},"example":{"attributes":{"cards":[{"background":{"color":"#fff"},"img":"https://i.ibb.co/cTjwpDT/pexels-photo-97533.jpg","title":"Title of the 1 number card","desc":"Description of the 1 number card","btnLabal":"Button","btnUrl":"#"}],"columns":{"desktop":1,"tablet":1,"mobile":1}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","script":"file:./script.js","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkinfo_cards"] = self["webpackChunkinfo_cards"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map