/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/BColor.js":
/*!*******************************!*\
  !*** ../Components/BColor.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BColor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BColor.scss */ "../Components/BColor.scss");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");

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
    defaultColor,
    onChange,
    disableAlpha
  } = props;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  const themeColors = wp.data.select('core/block-editor').getSettings().colors;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        isPrimary: true,
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
        disableAlpha: disableAlpha ? disableAlpha : false,
        onChangeComplete: c => {
          onChange(`rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`);
          setState(c.hex);
        }
      }), themeColors.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "themeColors"
      }, themeColors.map(_ref3 => {
        let {
          color
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bColorButtonContainer"
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

/***/ "../Components/BDevice.js":
/*!********************************!*\
  !*** ../Components/BDevice.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BDevice_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BDevice.scss */ "../Components/BDevice.scss");
/* harmony import */ var _Helper_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Helper/icons */ "../Components/Helper/icons.js");

/**
 * @props device: 'desktop' (String)
 * @props onChange: (Function)
 * @props style: {} (Object)
 * @return Selected device
 */




const BDevice = _ref => {
  let {
    onChange,
    device = 'desktop',
    style,
    className = 'iconButton'
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
  }, device == 'desktop' ? _Helper_icons__WEBPACK_IMPORTED_MODULE_2__.desktopIcon : device == 'tablet' ? _Helper_icons__WEBPACK_IMPORTED_MODULE_2__.tabletIcon : _Helper_icons__WEBPACK_IMPORTED_MODULE_2__.mobileIcon), show && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'bDevicePopup'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    title: "Desktop",
    onClick: () => {
      onChange('desktop');
      setShow(false);
    }
  }, _Helper_icons__WEBPACK_IMPORTED_MODULE_2__.desktopIcon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    title: "Tablet",
    onClick: () => {
      onChange('tablet');
      setShow(false);
    }
  }, _Helper_icons__WEBPACK_IMPORTED_MODULE_2__.tabletIcon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: className,
    title: "Mobile",
    onClick: () => {
      onChange('mobile');
      setShow(false);
    }
  }, _Helper_icons__WEBPACK_IMPORTED_MODULE_2__.mobileIcon)));
};
/* harmony default export */ __webpack_exports__["default"] = (BDevice);

/***/ }),

/***/ "../Components/Background.js":
/*!***********************************!*\
  !*** ../Components/Background.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");
/* harmony import */ var _BColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BColor */ "../Components/BColor.js");
/* harmony import */ var _BtnGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BtnGroup */ "../Components/BtnGroup.js");
/* harmony import */ var _MediaControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaControl */ "../Components/MediaControl.js");
/* harmony import */ var _Helper_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Helper/options */ "../Components/Helper/options.js");

/**
 * @props className (optional): 'mt20' (String)
 * @props label (optional): 'Background' (String)
 * @props background (required): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 * @props onChange (required): (Function)
 * @props defaults (optional): { type, color, gradient, image, position, attachment, repeat, size, overlayColor } (Object)
 */



const Gradient = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGradientPicker || _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker;

// Variables





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
const Background = props => {
  const {
    className = '',
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'bplugins'),
    value = {},
    defaults = {},
    onChange,
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

  // useEffect(() => {
  // 	const allStyles = ('gradient' === getValue('type') && isGradient) ? `background: ${getValue('gradient')};` :
  // 		('image' === getValue('type') && isImage) ?
  // 			`background: url(${getValue('image')?.url});
  // 			background-position: ${getValue('position')};
  // 			background-size: ${getValue('size')};
  // 			background-repeat: ${getValue('repeat')};
  // 			background-color: ${getValue('overlayColor')};
  // 			background-blend-mode: overlay;` :
  // 			`background: ${getValue('color')};`;

  // 	const initObj = { type: getValue('type'), color: getValue('color'), gradient: getValue('gradient'), image: getValue('image'), position: getValue('position'), attachment: getValue('attachment'), repeat: getValue('repeat'), size: getValue('size'), overlayColor: getValue('overlayColor') }

  // 	onChange({ ...background, ...initObj, styles: allStyles.replace(/\s+/g, ' ').trim() });
  // }, [getValue('type'), getValue('color'), getValue('gradient'), getValue('image'), getValue('position'), getValue('attachment'), getValue('repeat'), getValue('size'), getValue('overlayColor')]);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BtnGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: getValue('type'),
      onChange: val => setValue('type', val),
      options: false === isSolid ? bgTypes.filter(b => b.value !== 'solid') : false === isGradient ? bgTypes.filter(b => b.value !== 'gradient') : false === isImage ? bgTypes.filter(b => b.value !== 'image') : bgTypes
    })), 'solid' === getValue('type') && isSolid && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mt20",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), 'gradient' === getValue('type') && isGradient && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
      className: "mt20",
      value: getValue('gradient'),
      onChange: val => setValue('gradient', val),
      gradients: _Helper_options__WEBPACK_IMPORTED_MODULE_7__.gradients
    }), 'image' === getValue('type') && isImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "mb5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MediaControl__WEBPACK_IMPORTED_MODULE_6__.InlineDetailMediaUpload, {
      types: ['image'],
      value: getValue('image'),
      onChange: val => setValue('image', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalAlignmentMatrixControl, {
      value: getValue('position'),
      onChange: val => setValue('position', val)
    }), value?.position && value?.position !== getDefault('position') && resetValue('position')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Attachment:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('attachment'),
      onChange: val => setValue('attachment', val),
      options: attachments
    }), value?.attachments && value?.attachments !== getDefault('attachments') && resetValue('attachments')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('repeat'),
      onChange: val => setValue('repeat', val),
      options: repeats
    }), value?.repeat && value?.repeat !== getDefault('repeat') && resetValue('repeat')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('size'),
      onChange: val => setValue('size', val),
      options: sizes
    }), value?.size && value?.size !== getDefault('size') && resetValue('size')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ "../Components/BtnGroup.js":
/*!*********************************!*\
  !*** ../Components/BtnGroup.js ***!
  \*********************************/
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

/***/ "../Components/ColorsControl.js":
/*!**************************************!*\
  !*** ../Components/ColorsControl.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");
/* harmony import */ var _BtnGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BtnGroup */ "../Components/BtnGroup.js");
/* harmony import */ var _BColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BColor */ "../Components/BColor.js");
/* harmony import */ var _Helper_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Helper/options */ "../Components/Helper/options.js");

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

  // useEffect(() => {
  // 	const allStyles = `${getValue('color') ? `color: ${getValue('color')};` : ''}
  // 	${getValue('gradient') || getValue('bg') ? `background: ${'gradient' === getValue('bgType') ? getValue('gradient') : getValue('bg')};` : ''}`

  // 	const initialObj = { color: getValue('color'), bgType: getValue('bgType'), bg: getValue('bg'), gradient: getValue('gradient') }

  // 	onChange({ ...colors, ...initialObj, ['styles']: allStyles.replace(/\s+/g, ' ').trim() });
  // }, [getValue('color'), getValue('bgType'), getValue('bg'), getValue('gradient')]);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BColor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color:', 'bplugins'),
      value: getValue('color'),
      onChange: val => setValue('color', val),
      defaultColor: getDefault('color')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BtnGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: getValue('bgType'),
      onChange: val => setValue('bgType', val),
      options: _Helper_options__WEBPACK_IMPORTED_MODULE_6__.bgTypes,
      size: "small"
    })), 'gradient' === getValue('bgType') ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Gradient, {
      value: getValue('gradient'),
      onChange: val => setValue('gradient', val),
      gradients: _Helper_options__WEBPACK_IMPORTED_MODULE_6__.gradients
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BColor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color:', 'bplugins'),
      value: getValue('bg'),
      onChange: val => setValue('bg', val),
      defaultColor: getDefault('bg')
    }))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ColorsControl);

/***/ }),

/***/ "../Components/Helper/fontLists.js":
/*!*****************************************!*\
  !*** ../Components/Helper/fontLists.js ***!
  \*****************************************/
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

/***/ "../Components/Helper/icons.js":
/*!*************************************!*\
  !*** ../Components/Helper/icons.js ***!
  \*************************************/
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

/***/ "../Components/Helper/options.js":
/*!***************************************!*\
  !*** ../Components/Helper/options.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgTypes": function() { return /* binding */ bgTypes; },
/* harmony export */   "borderStyles": function() { return /* binding */ borderStyles; },
/* harmony export */   "emUnit": function() { return /* binding */ emUnit; },
/* harmony export */   "fontStyles": function() { return /* binding */ fontStyles; },
/* harmony export */   "gradients": function() { return /* binding */ gradients; },
/* harmony export */   "perUnit": function() { return /* binding */ perUnit; },
/* harmony export */   "pxUnit": function() { return /* binding */ pxUnit; },
/* harmony export */   "remUnit": function() { return /* binding */ remUnit; },
/* harmony export */   "sides": function() { return /* binding */ sides; },
/* harmony export */   "textDecorations": function() { return /* binding */ textDecorations; },
/* harmony export */   "textTransforms": function() { return /* binding */ textTransforms; },
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

/***/ "../Components/Helper/style.js":
/*!*************************************!*\
  !*** ../Components/Helper/style.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "../Components/Helper/style.scss");


/***/ }),

/***/ "../Components/MediaControl.js":
/*!*************************************!*\
  !*** ../Components/MediaControl.js ***!
  \*************************************/
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
/* harmony import */ var _MediaControl_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaControl.scss */ "../Components/MediaControl.scss");






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

// Inline Detail Media Upload
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

// Media Placeholder
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

// Media Edit Control
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

/***/ "../Components/MultiShadowControl.js":
/*!*******************************************!*\
  !*** ../Components/MultiShadowControl.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");
/* harmony import */ var _BColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BColor */ "../Components/BColor.js");
/* harmony import */ var _BtnGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BtnGroup */ "../Components/BtnGroup.js");
/* harmony import */ var _Helper_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Helper/options */ "../Components/Helper/options.js");
/* harmony import */ var _Helper_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Helper/icons */ "../Components/Helper/icons.js");

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
    defaults = {},
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 1 < shadow.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "mt5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BtnGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      units: [(0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)()]
    }), hOffset && hOffset !== getDefault('hOffset') && resetValue('hOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical Offset:', 'bplugins'),
      labelPosition: "left",
      value: vOffset,
      onChange: val => updateShadow('vOffset', val),
      units: [(0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)()]
    }), vOffset && vOffset !== getDefault('vOffset') && resetValue('vOffset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur:', 'bplugins'),
      labelPosition: "left",
      value: blur,
      onChange: val => updateShadow('blur', val),
      units: [(0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)()]
    }), blur && blur !== getDefault('blur') && resetValue('blur')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur cannot be negative value!', 'bplugins')), 'box' === type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spreed:', 'bplugins'),
      labelPosition: "left",
      value: spreed,
      onChange: val => updateShadow('spreed', val),
      units: [(0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)()]
    }), spreed && spreed !== getDefault('spreed') && resetValue('spreed')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }, _Helper_icons__WEBPACK_IMPORTED_MODULE_7__.gearIcon, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Duplicate', 'bplugins')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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

/***/ "../Components/Title.js":
/*!******************************!*\
  !*** ../Components/Title.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helper_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper/style */ "../Components/Helper/style.js");


const Title = props => {
  const {
    className = 'mt20 mb5',
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `bPlLabel ${className}`
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "../Components/Typography.js":
/*!***********************************!*\
  !*** ../Components/Typography.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Typography_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography.scss */ "../Components/Typography.scss");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ "../Components/Title.js");
/* harmony import */ var _BtnGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BtnGroup */ "../Components/BtnGroup.js");
/* harmony import */ var _Helper_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Helper/options */ "../Components/Helper/options.js");
/* harmony import */ var _Helper_fontLists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Helper/fontLists */ "../Components/Helper/fontLists.js");

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
    isFamily = true
  } = props;
  const defaultVal = {
    fontFamily: 'Default',
    fontCategory: 'sans-serif',
    fontWeight: 400,
    isUploadFont: true,
    fontSize: 15,
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
  const setValue = (property, val) => onChange({
    ...value,
    [property]: val
  });
  const resetValue = property => value?.[property] && value?.[property] !== getDefault(property) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  });

  // Font family searching
  const [query, setQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isSearching, setIsSearching] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const searchFonts = _Helper_fontLists__WEBPACK_IMPORTED_MODULE_7__["default"].filter(_ref => {
    let {
      family
    } = _ref;
    return family.toLowerCase().includes(query.toLowerCase());
  });

  // Get Font weights
  const fontWeights = () => {
    const currentFontWeights = _Helper_fontLists__WEBPACK_IMPORTED_MODULE_7__["default"].find(font => font.family === getValue('fontFamily'))?.variants;
    let weights = [];
    currentFontWeights?.map(weight => weights?.push({
      label: weight,
      value: weight
    }));
    return 0 === weights.length ? [400] : weights;
  };

  // Add styles and google font to typography
  // const generateCss = (value, cssProperty, def) => undefined == value ? '' : value === def ? '' : `${cssProperty}: ${value};`;

  // useEffect(() => {
  // 	const allStyles = `${!isFamily || undefined == getValue('fontFamily') || defaultVal.fontFamily === getValue('fontFamily') ? '' : `font-family: '${getValue('fontFamily')}', ${getValue('fontCategory')};`}
  // 	${generateCss(getValue('fontWeight'), 'font-weight', defaultVal.fontWeight)}
  // 	${undefined == getValue('fontSize') ? '' : `font-size: ${getValue('fontSize')}px;`}
  // 	${generateCss(getValue('fontStyle'), 'font-style', defaultVal.fontStyle)}
  // 	${generateCss(getValue('textTransform'), 'text-transform', defaultVal.textTransform)}
  // 	${generateCss(getValue('textDecoration'), 'text-decoration', defaultVal.textDecoration)}
  // 	${undefined == getValue('lineHeight') ? '' : `line-height: ${getValue('lineHeight')};`}
  // 	${generateCss(getValue('letterSpace'), 'letter-spacing', defaultVal.letterSpace)}`;

  // 	// Google font link
  // 	const linkQuery = undefined === getValue('fontVariant') || 400 === getValue('fontVariant') ? '' : '400i' === getValue('fontVariant') ? ':ital@1' : getValue('fontVariant')?.includes('00i') ? `: ital, wght@1, ${getValue('fontVariant')?.replace('00i', '00')} ` : `: wght@${getValue('fontVariant')} `;

  // 	const link = 'Default' === getValue('fontFamily') || undefined === getValue('fontFamily') ? '' : `https://fonts.googleapis.com/css2?family=${getValue('fontFamily')?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;

  // 	onChange({ ...typography, ['styles']: allStyles.replace(/\s+/g, ' ').trim(), ['googleFontLink']: link });
  // }, [typography?.fontFamily, typography?.fontWeight, typography?.fontSize, typography?.fontStyle, typography?.textTransform, typography?.textDecoration, typography?.lineHeight, typography?.letterSpace]);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: `bPlDropdown ${className}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Family:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Weight:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('fontWeight'),
      onChange: val => setValue('fontWeight', val),
      options: fontWeights()
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      value: getValue('fontSize'),
      onChange: val => setValue('fontSize', val),
      min: 0,
      max: 120,
      step: 1,
      allowReset: true,
      resetFallbackValue: defaults?.fontSize || defaultVal.fontSize,
      initialPosition: defaults?.fontSize || defaultVal.fontSize
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Style:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('fontStyle'),
      onChange: val => setValue('fontStyle', val),
      options: _Helper_options__WEBPACK_IMPORTED_MODULE_6__.fontStyles
    }), resetValue('fontStyle')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mt5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Transform:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BtnGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: getValue('textTransform'),
      onChange: val => setValue('textTransform', val),
      options: _Helper_options__WEBPACK_IMPORTED_MODULE_6__.textTransforms,
      isTextIcon: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Decoration:', 'bplugins')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: getValue('textDecoration'),
      onChange: val => setValue('textDecoration', val),
      options: _Helper_options__WEBPACK_IMPORTED_MODULE_6__.textDecorations
    }), resetValue('textDecoration')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height:', 'bplugins'),
      labelPosition: "left",
      value: getValue('lineHeight'),
      onChange: val => setValue('lineHeight', val),
      units: [(0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(24), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.perUnit)(135), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(2), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)(2)],
      isResetValueOnUnitChange: true
    }), resetValue('lineHeight')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "mt20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter Spacing:', 'bplugins'),
      labelPosition: "left",
      value: getValue('letterSpace'),
      onChange: val => setValue('letterSpace', val),
      units: [(0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_Helper_options__WEBPACK_IMPORTED_MODULE_6__.remUnit)()]
    }), resetValue('letterSpace')))
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "./src/Components/Cards.js":
/*!*********************************!*\
  !*** ./src/Components/Cards.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/Helper/getCSS */ "../Components/Helper/getCSS.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/function */ "./src/utils/function.js");



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
    titleTypo,
    descTypo,
    btnTypo,
    contentPadding,
    cardPadding,
    cardShadow,
    columnGap,
    rowGap,
    btnAlign
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(titleTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(descTypo)?.googleFontLink}
                ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(btnTypo)?.googleFontLink}

                #icbCards-${clientId} .icbCards{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(background)}
                    column-gap: ${columnGap};
                    row-gap: ${rowGap};
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(padding)};
                }
                #icbCards-${clientId} .icbCards .card{
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(cardPadding)};
                    box-shadow: ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getMultiShadowCSS)(cardShadow)};
                }
                #icbCards-${clientId} .icbCards .content {
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(contentPadding)};
                }
                #icbCards-${clientId} .icbCards .content h2{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(titleTypo)?.styles}
                }
                #icbCards-${clientId} .icbCards .content p{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(descTypo)?.styles}
                }
                #icbCards-${clientId} .icbCards .content .btnWrapper{
                    text-align: ${btnAlign}
                }
                #icbCards-${clientId} .icbCards .content a{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getTypoCSS)(btnTypo)?.styles}
                    padding: ${(0,_utils_function__WEBPACK_IMPORTED_MODULE_2__.getBoxValue)(btnPadding)};
                }
            `, cards.map((card, index) => {
    const {
      background,
      titleColor,
      btnHovColors,
      descColor,
      btnColors
    } = card;
    return `
                #icbCards-${clientId} .icbCards .card-${index}{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getBackgroundCSS)(background, true, true, false)}
                }
                #icbCards-${clientId} .icbCards .card-${index} .content h2 {
                    color: ${titleColor};
                }
                #icbCards-${clientId} .icbCards .card-${index} .content p {
                    color: ${descColor};
                }
                #icbCards-${clientId} .icbCards .card-${index} .content a{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnColors)}
                }
                 #icbCards-${clientId} .icbCards .card-${index} .content a:hover{
                    ${(0,_Components_Helper_getCSS__WEBPACK_IMPORTED_MODULE_1__.getColorsCSS)(btnHovColors)}
                }
            `;
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `icbCards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile} ${layout}`
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Cards);

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _Components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Title */ "../Components/Title.js");
/* harmony import */ var _Components_BColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/BColor */ "../Components/BColor.js");
/* harmony import */ var _Components_Background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/Background */ "../Components/Background.js");
/* harmony import */ var _Components_ColorsControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/ColorsControl */ "../Components/ColorsControl.js");
/* harmony import */ var _Components_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Components/Typography */ "../Components/Typography.js");
/* harmony import */ var _Components_MultiShadowControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/MultiShadowControl */ "../Components/MultiShadowControl.js");
/* harmony import */ var _Components_BDevice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Components/BDevice */ "../Components/BDevice.js");
/* harmony import */ var _Components_MediaControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Components/MediaControl */ "../Components/MediaControl.js");
/* harmony import */ var _Components_Helper_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Components/Helper/icons */ "../Components/Helper/icons.js");








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
    contentPadding,
    titleTypo,
    descTypo,
    btnAlign,
    btnTypo,
    btnPadding
  } = attributes;
  const [device, setDevice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("desktop");
  const onAddCard = () => {
    const newCrads = [...cards, {
      background: {
        color: '#fff'
      },
      img: 'https://thumbs.dreamstime.com/b/two-lorikeet-birds-2293918.jpg',
      title: 'This Is My Title',
      titleColor: '#69f70c',
      desc: 'This Is My New Description',
      descColor: '#69f70c',
      btnLabal: 'Button',
      btnUrl: 'https://www.google.com',
      btnColors: {
        color: '#fff',
        bg: '#4527a4'
      },
      btnHovColors: {
        color: '#fff',
        bg: '#fe6601'
      }
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
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'general' === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add or Remove Cards", "info-cards")
  }, cards.map((card, index) => {
    const {
      background,
      img,
      titleColor,
      descColor,
      btnUrl,
      btnHovColors,
      btnColors
    } = card;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      className: "bPlPanelBody",
      title: `This is card ${index + 1}`,
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Background__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background', 'info-cards'),
      value: background,
      onChange: val => updateCard(index, "background", val),
      isImage: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_MediaControl__WEBPACK_IMPORTED_MODULE_13__.InlineMediaUpload, {
      value: img,
      onChange: val => updateCard(index, 'img', val),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter Image URL', 'info-cards')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_BColor__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Color', 'info-cards'),
      value: titleColor,
      onChange: val => updateCard(index, 'titleColor', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_BColor__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description Color', 'info-cards'),
      value: descColor,
      onChange: val => updateCard(index, 'descColor', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Title__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Url:", "info-cards")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      value: btnUrl,
      onChange: content => updateCard(index, "btnUrl", content)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_ColorsControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Colors', 'info-cards'),
      value: btnColors,
      onChange: val => updateCard(index, 'btnColors', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_ColorsControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Hover Colors', 'info-cards'),
      value: btnHovColors,
      onChange: val => updateCard(index, 'btnHovColors', val)
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
    }, _Components_Helper_icons__WEBPACK_IMPORTED_MODULE_14__.gearIcon, " Duplicate")));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "addItem mt15"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: () => onAddCard()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
    icon: "plus"
  }), " Add New Card"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", 'info-cards'),
    labelPosition: "left",
    value: layout,
    onChange: val => setAttributes({
      layout: val
    }),
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
      'default' === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: 'vertical',
        isImg: true,
        imgPos: 'first',
        cardPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }
      }), updateAllCard('background', {
        color: '#fff'
      }), updateAllCard('titleColor', '#000'), updateAllCard('descColor', '#000'), updateAllCard('btnColors', {
        color: '#fff',
        bg: '#4527a4'
      }), updateAllCard('btnHovColors', {
        color: '#fff',
        bg: '#fe6601'
      }));
      'theme1' === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: 'vertical',
        isImg: true,
        imgPos: 'last',
        cardPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }
      }), updateAllCard('background', {
        color: '#fff'
      }), updateAllCard('titleColor', '#000'), updateAllCard('descColor', '#000'), updateAllCard('btnColors', {
        color: '#fff',
        bg: '#4527a4'
      }), updateAllCard('btnHovColors', {
        color: '#fff',
        bg: '#fe6601'
      }));
      'theme2' === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: 'vertical',
        isImg: true,
        imgPos: 'first',
        cardPadding: {
          top: '15px',
          right: '15px',
          bottom: '15px',
          left: '15px'
        }
      }), updateAllCard('background', {
        color: '#fff'
      }), updateAllCard('titleColor', '#000'), updateAllCard('descColor', '#000'), updateAllCard('btnColors', {
        color: '#fff',
        bg: '#4527a4'
      }), updateAllCard('btnHovColors', {
        color: '#fff',
        bg: '#fe6601'
      }));
      'theme3' === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 2
        },
        layout: 'horizontal',
        isImg: true,
        imgPos: 'first',
        cardPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }
      }), updateAllCard('background', {
        color: '#fff'
      }), updateAllCard('titleColor', '#000'), updateAllCard('descColor', '#000'), updateAllCard('btnColors', {
        color: '#fff',
        bg: '#4527a4'
      }), updateAllCard('btnHovColors', {
        color: '#fff',
        bg: '#fe6601'
      }));
      'theme4' === val && (setAttributes({
        columns: {
          ...columns,
          desktop: 3
        },
        layout: 'vertical',
        isImg: true,
        imgPos: 'first',
        cardPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }
      }), updateAllCard('background', {
        color: '#570dfb'
      }), updateAllCard('titleColor', '#fff'), updateAllCard('descColor', '#fff'), updateAllCard('btnColors', {
        color: '#fff',
        bg: '#000'
      }), updateAllCard('btnHovColors', {
        color: '#ffffffb3',
        bg: '#000000b3'
      }));
    },
    options: [{
      label: 'Default',
      value: 'default'
    }, {
      label: 'Theme 1',
      value: 'theme1'
    }, {
      label: 'Theme 2',
      value: 'theme2'
    }, {
      label: 'Theme 3',
      value: 'theme3'
    }, {
      label: 'Theme 4',
      value: 'theme4'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "mb5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Columns:", "info-cards")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_BDevice__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Image', 'info-cards'),
    checked: isImg,
    onChange: val => setAttributes({
      isImg: val
    })
  }), isImg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
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
  }))), "style" === tab.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Cards", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Background__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('background', 'info-cards'),
    value: background,
    onChange: val => setAttributes({
      background: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Paddign", "info-cards"),
    values: padding,
    onChange: value => setAttributes({
      padding: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Card", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Card Paddign", "info-cards"),
    values: cardPadding,
    onChange: value => setAttributes({
      cardPadding: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_MultiShadowControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "mt20",
    value: cardShadow,
    onChange: val => setAttributes({
      cardShadow: val
    }),
    produce: immer__WEBPACK_IMPORTED_MODULE_15__["default"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content Paddign", "info-cards"),
    values: contentPadding,
    onChange: value => setAttributes({
      contentPadding: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title Typography", "info-cards"),
    value: titleTypo,
    onChange: val => setAttributes({
      titleTypo: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Description Typography", "info-cards"),
    value: descTypo,
    onChange: val => setAttributes({
      descTypo: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button", "info-cards"),
    className: "bPlPanelBody"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Align", "info-cards"),
    labelPosition: "left",
    value: btnAlign,
    onChange: val => setAttributes({
      btnAlign: val
    }),
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "mt20",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Typography", "info-cards"),
    value: btnTypo,
    onChange: val => setAttributes({
      btnTypo: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "mt20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Paddign", "info-cards"),
    values: btnPadding,
    onChange: value => setAttributes({
      btnPadding: value
    })
  })))))));
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
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
/* harmony import */ var _Components_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Cards */ "./src/Components/Cards.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  let {
    attributes,
    setAttributes,
    clientId,
    ...rest
  } = _ref;
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    updateCard: updateCard,
    clientId: clientId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-icb-cards",
    id: `icbCards-${clientId}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Cards__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    const imgEl = isImg && img && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: img,
      alt: title
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `card card-${index}`,
      key: index
    }, 'first' === imgPos && imgEl, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
      tagName: "h2",
      value: title,
      onChange: content => updateCard(index, "title", content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title", 'info-cards'),
      inlineToolbar: true,
      allowedFormats: ["core/bold", "core/italic"]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
      tagName: "p",
      value: desc,
      onChange: content => updateCard(index, "desc", content),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Description", 'info-cards'),
      inlineToolbar: true,
      allowedFormats: ["core/bold", "core/italic"]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btnWrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
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

/***/ "../Components/BColor.scss":
/*!*********************************!*\
  !*** ../Components/BColor.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/BDevice.scss":
/*!**********************************!*\
  !*** ../Components/BDevice.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/Helper/style.scss":
/*!***************************************!*\
  !*** ../Components/Helper/style.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/MediaControl.scss":
/*!***************************************!*\
  !*** ../Components/MediaControl.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../Components/Typography.scss":
/*!*************************************!*\
  !*** ../Components/Typography.scss ***!
  \*************************************/
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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"icb/cards","version":"0.1.0","title":"Info Cards","category":"widgets","icon":"smiley","description":"info-card block plugin","supports":{"html":false},"attributes":{"clientId":{"type":"string","default":""},"cards":{"type":"array","default":[{"background":{"color":"#fff"},"img":"https://thumbs.dreamstime.com/b/two-lorikeet-birds-2293918.jpg","title":"This Is My Title","titleColor":"#000","desc":"This Is My New Description","descColor":"#000","btnLabal":"Button","btnUrl":"https://www.google.com/","btnColors":{"color":"#fff","bg":"#4527a4"},"btnHovColors":{"color":"#fff","bg":"#fe6601"}},{"background":{"color":"#fff"},"img":"https://thumbs.dreamstime.com/b/two-lorikeet-birds-2293918.jpg","title":"This Is My Title","titleColor":"#000","desc":"This Is My New Description","descColor":"#000","btnLabal":"Button","btnUrl":"https://www.google.com/","btnColors":{"color":"#fff","bg":"#4527a4"},"btnHovColors":{"color":"#fff","bg":"#fe6601"}},{"background":{"color":"#fff"},"img":"https://thumbs.dreamstime.com/b/two-lorikeet-birds-2293918.jpg","title":"This Is My Title","titleColor":"#000","desc":"This Is My New Description","descColor":"#000","btnLabal":"Button","btnUrl":"https://www.google.com/","btnColors":{"color":"#fff","bg":"#4527a4"},"btnHovColors":{"color":"#fff","bg":"#fe6601"}}]},"layout":{"type":"string","default":"vertical"},"theme":{"type":"string","default":"default"},"columns":{"type":"object","default":{"desktop":3,"tablet":2,"mobile":1}},"columnGap":{"type":"string","default":"20px"},"rowGap":{"type":"string","default":"20px"},"isImg":{"type":"boolean","default":true},"imgPos":{"type":"string","default":"first"},"background":{"type":"object","default":{"color":"#0000"}},"padding":{"type":"object","default":{"top":"10px","right":"15px","bottom":"10px","left":"15px"}},"cardPadding":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"cardShadow":{"type":"array","default":[{"hOffset":"0px","vOffset":"4px","blur":"8px","spreed":"0px","color":"#0003"}]},"contentPadding":{"type":"object","default":{"top":"10px","right":"15px","bottom":"10px","left":"15px"}},"titleTypo":{"type":"object","default":{"fontSize":20}},"descTypo":{"type":"object","default":{"fontSize":15}},"btnAlign":{"type":"string","default":"left"},"btnTypo":{"type":"object","default":{"fontSize":15,"textDecoration":"none"}},"btnPadding":{"type":"object","default":{"top":"10px","right":"15px","bottom":"10px","left":"15px"}}},"textdomain":"info-cards","editorScript":"file:./index.js","editorStyle":"file:./index.css","script":"file:./script.js","style":"file:./style-index.css"}');

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