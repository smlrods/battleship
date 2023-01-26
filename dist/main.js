/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --gap-board: 5px;\n  --ship-color: #a6e3a1;\n  --ship-sunk-color: #f38ba8; \n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'VT323', monospace;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  place-items: center;\n  height: 100vh;\n  gap: 50px;\n  padding: 50px;\n}\n\n#content {\n  display: flex;\n  gap: 35px;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  background: black;\n  gap: var(--gap-board);\n  border: 5px solid;\n  box-shadow: 10px 10px 0px black;\n}\n\n.board > div {\n  display: flex;\n  gap: var(--gap-board);\n}\n\n.board-square {\n  width: 50px;\n  height: 50px;\n  background: white;\n}\n\n.board-square:hover {\n  background-color: black;\n}\n\n.board-square.missed {\n  background-color: black;\n}\n\n.board-square.attacked {\n  background-color: var(--ship-color);\n  border: 5px solid;\n}\n\n.board.finished {\n  pointer-events:none;\n}\n\n/* SHIPS */\n\n.shipsBoard {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.shipsRow {\n  display: flex;\n  gap: 15px;\n}\n\n.shipsRow > .ship {\n  border: 5px solid;\n  box-shadow: 5px 5px 0px black;\n}\n\n.ship {\n  position: relative;\n  z-index: 100;\n  background: var(--ship-color);\n}\n\n.ship-shadow {\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.ship-sunk {\n  background: var(--ship-sunk-color) !important;\n}\n\n.ship > div {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n\n.horizontal {\n  width: max-content;\n  height: 50px;\n}\n\n.horizontal > div {\n  width: calc(50px + var(--gap-board));\n}\n\n.horizontal > div:last-child {\n  width: 50px;\n}\n\n.vertical {\n  width: 50px;\n  height: max-content;\n}\n\n/* Drag and Drop */\n\n.dragging {\n  opacity: 0.8;\n  display: none;\n}\n\n.drag-over {\n  background: var(--ship-color);\n}\n\n#placeships {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: min-content min-content;\n  gap: 40px;\n}\n\n#placeships p {\n  font-size: 1.3em;\n}\n\n#placeships > div:first-child {\n  border: 5px solid;\n  padding: 25px;\n  box-shadow: 10px 10px 0px black;\n}\n\n#placeships > button {\n  background: var(--ship-color);\n  padding: 20px;\n  border: 5px solid;\n  font-size: 1.3em;\n  box-shadow: 10px 10px 0px black;\n}\n\n#placeships > button:hover {\n  background: var(--ship-sunk-color);\n}\n\nimg {\n  width: 150px;\n  height: auto;\n}\n\n#infos {\n  display: flex;\n  place-content: center;\n  place-items: end;\n  font-size: 35px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA,kBAAkB;;AAElB;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2CAA2C;EAC3C,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');\n\n:root {\n  --gap-board: 5px;\n  --ship-color: #a6e3a1;\n  --ship-sunk-color: #f38ba8; \n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'VT323', monospace;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  place-items: center;\n  height: 100vh;\n  gap: 50px;\n  padding: 50px;\n}\n\n#content {\n  display: flex;\n  gap: 35px;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  background: black;\n  gap: var(--gap-board);\n  border: 5px solid;\n  box-shadow: 10px 10px 0px black;\n}\n\n.board > div {\n  display: flex;\n  gap: var(--gap-board);\n}\n\n.board-square {\n  width: 50px;\n  height: 50px;\n  background: white;\n}\n\n.board-square:hover {\n  background-color: black;\n}\n\n.board-square.missed {\n  background-color: black;\n}\n\n.board-square.attacked {\n  background-color: var(--ship-color);\n  border: 5px solid;\n}\n\n.board.finished {\n  pointer-events:none;\n}\n\n/* SHIPS */\n\n.shipsBoard {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.shipsRow {\n  display: flex;\n  gap: 15px;\n}\n\n.shipsRow > .ship {\n  border: 5px solid;\n  box-shadow: 5px 5px 0px black;\n}\n\n.ship {\n  position: relative;\n  z-index: 100;\n  background: var(--ship-color);\n}\n\n.ship-shadow {\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.ship-sunk {\n  background: var(--ship-sunk-color) !important;\n}\n\n.ship > div {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n}\n\n.horizontal {\n  width: max-content;\n  height: 50px;\n}\n\n.horizontal > div {\n  width: calc(50px + var(--gap-board));\n}\n\n.horizontal > div:last-child {\n  width: 50px;\n}\n\n.vertical {\n  width: 50px;\n  height: max-content;\n}\n\n/* Drag and Drop */\n\n.dragging {\n  opacity: 0.8;\n  display: none;\n}\n\n.drag-over {\n  background: var(--ship-color);\n}\n\n#placeships {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: min-content min-content;\n  gap: 40px;\n}\n\n#placeships p {\n  font-size: 1.3em;\n}\n\n#placeships > div:first-child {\n  border: 5px solid;\n  padding: 25px;\n  box-shadow: 10px 10px 0px black;\n}\n\n#placeships > button {\n  background: var(--ship-color);\n  padding: 20px;\n  border: 5px solid;\n  font-size: 1.3em;\n  box-shadow: 10px 10px 0px black;\n}\n\n#placeships > button:hover {\n  background: var(--ship-sunk-color);\n}\n\nimg {\n  width: 150px;\n  height: auto;\n}\n\n#infos {\n  display: flex;\n  place-content: center;\n  place-items: end;\n  font-size: 35px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/ai.js":
/*!***************************!*\
  !*** ./src/scripts/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiAttack": () => (/* binding */ aiAttack)
/* harmony export */ });
/* harmony import */ var _randomplays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomplays */ "./src/scripts/randomplays.js");
/* harmony import */ var _images_crown_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/crown.gif */ "./src/images/crown.gif");



const aiAttack = (enemy, player) => {
  if (enemy.gameboard.allSunk()) return;
  const board = document.querySelector('.board');
  const allAttacked = board.querySelectorAll('.attacked');
  const attackedNotSunk = [];

  allAttacked.forEach((square) => {
    const x = +square.id[0];
    const y = +square.id[1];
    const isSunk = player.gameboard.board[x][y].ship.isSunk();

    if (!isSunk) attackedNotSunk.push(square);
  });

  if (attackedNotSunk.length === 1) {
    const x = +attackedNotSunk[0].id[0];
    const y = +attackedNotSunk[0].id[1];

    // check the top
    if (x > 0
        && player.gameboard.board[x - 1][y]
        /* player.gameboard.board[x + 1][y].ship.attacked */
    ) {
      enemy.attack(x - 1, y);
      const square = document.getElementById(`${x - 1}${y}`);
      (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x - 1][y]);
    } else

    // check the right
    if (y < 9 && player.gameboard.board[x][y + 1]) {
      enemy.attack(x, y + 1);
      const square = document.getElementById(`${x}${y + 1}`);
      (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x][y + 1]);
    } else

    // check the bottom
    if (x < 9 && player.gameboard.board[x + 1][y]) {
      enemy.attack(x + 1, y);
      const square = document.getElementById(`${x + 1}${y}`);
      (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x + 1][y]);
    } else

    // check the left
    if (y > 0 && player.gameboard.board[x][y - 1]) {
      enemy.attack(x, y - 1);
      const square = document.getElementById(`${x}${y - 1}`);
      (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x][y - 1]);
    }
  } else if (attackedNotSunk.length > 1) {
    let x = +attackedNotSunk[0].id[0];
    let y = +attackedNotSunk[0].id[1];

    const orientation = attackedNotSunk.every((square) => +square.id[0] === x);

    // horizontal
    if (orientation) {
      y = +attackedNotSunk[attackedNotSunk.length - 1].id[1];

      // Check right
      if (y < 9 && player.gameboard.board[x][y + 1]) {
        enemy.attack(x, y + 1);
        const square = document.getElementById(`${x}${y + 1}`);
        (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x][y + 1]);
      } else

      // Check left
      if (y > 0 && player.gameboard.board[x][y - 1]) {
        y = +attackedNotSunk[0].id[1];

        enemy.attack(x, y - 1);
        const square = document.getElementById(`${x}${y - 1}`);
        (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x][y - 1]);
      }
    } else { // vertical
      x = +attackedNotSunk[0].id[0];

      // Check TOP
      if (x > 0 && player.gameboard.board[x - 1][y]) {
        enemy.attack(x - 1, y);
        const square = document.getElementById(`${x - 1}${y}`);
        (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x - 1][y]);
      } else

      // Check BOTTOM
      if (x < 9 && player.gameboard.board[x + 1][y]) {
        x = +attackedNotSunk[attackedNotSunk.length - 1].id[0];

        enemy.attack(x + 1, y);
        const square = document.getElementById(`${x + 1}${y}`);
        (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.showAttack)(square, player.gameboard.board[x + 1][y]);
      }
    }
  } else {
    (0,_randomplays__WEBPACK_IMPORTED_MODULE_0__.attackRandom)(enemy, player);
  }

  if (player.gameboard.allSunk()) {
    const infos = document.getElementById('infos');
    const crownImage = new Image();
    crownImage.src = _images_crown_gif__WEBPACK_IMPORTED_MODULE_1__;
    document.querySelector('body').insertBefore(crownImage, infos);
    infos.textContent = 'Computer Won';
    const boards = document.querySelectorAll('.board');
    boards.forEach((el) => el.classList.add('finished'));
  }
};




/***/ }),

/***/ "./src/scripts/drag-and-drop.js":
/*!**************************************!*\
  !*** ./src/scripts/drag-and-drop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShips": () => (/* binding */ placeShips)
/* harmony export */ });
/* harmony import */ var _interfaceDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaceDOM */ "./src/scripts/interfaceDOM.js");
/* harmony import */ var _images_cat_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cat.gif */ "./src/images/cat.gif");
/* harmony import */ var _randomplays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomplays */ "./src/scripts/randomplays.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");





const shipsBoard = (size = 10) => {
  const board = document.createElement('div');
  board.classList.add('board');

  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');

    for (let j = 0; j < size; j++) {
      const col = document.createElement('div');
      col.classList.add('board-square');
      col.id = `${i}${j}`;

      col.addEventListener('dragenter', dragEnter);
      col.addEventListener('dragover', dragOver);
      col.addEventListener('dragleave', dragLeave);
      col.addEventListener('drop', (event) => drop(event));

      row.appendChild(col);
    }

    board.appendChild(row);
  }

  return board;
};

const renderShips = () => {
  const shipsBoard = document.createElement('div');
  shipsBoard.classList.add('shipsBoard');

  const title = document.createElement('p');
  title.textContent = 'Drag the ships to the board, and then click to rotate';

  const shipsL4Section = createShips(4, 1);
  shipsL4Section.classList.add('shipsRow');

  const shipsL3Section = createShips(3, 2);
  shipsL3Section.classList.add('shipsRow');

  const shipsL2Section = createShips(2, 3);
  shipsL2Section.classList.add('shipsRow');

  const shipsL1Section = createShips(1, 4);
  shipsL1Section.classList.add('shipsRow');

  shipsBoard.appendChild(title);
  shipsBoard.appendChild(shipsL4Section);
  shipsBoard.appendChild(shipsL3Section);
  shipsBoard.appendChild(shipsL2Section);
  shipsBoard.appendChild(shipsL1Section);

  return shipsBoard;
};

const createShips = (size, amount) => {
  const ships = document.createElement('div');
  for (let i = 1; i < amount + 1; i++) {
    const ship = document.createElement('div');

    ship.addEventListener('dragstart', dragStart);
    ship.addEventListener('dragend', dragEnd);

    for (let j = 0; j < size; j++) {
      const part = document.createElement('div');

      part.addEventListener('click', (event) => {
        const ship = event.target.parentElement;
        const square = ship.parentElement;
        const squareX = +square.id[0];
        const squareY = +square.id[1];

        const shipLength = +ship.id[4];

        if (ship.classList.contains('horizontal') && shipLength + squareX - 1 < 10) {
          const shipSquaresVertical = [];

          for (let x = squareX + 1; x < squareX + shipLength; x++) {
            shipSquaresVertical.push(document.getElementById(`${x}${squareY}`));
          }

          const isPossible = shipSquaresVertical.some((square) => square.classList.contains('hasShip'));

          if (!isPossible) {
            event.target.parentElement.classList.remove('horizontal');
            event.target.parentElement.classList.add('vertical');

            for (let y = squareY; y < squareY + shipLength; y++) {
              document.getElementById(`${squareX}${y}`).classList.remove('hasShip');
            }

            for (let x = squareX; x < squareX + shipLength; x++) {
              document.getElementById(`${x}${squareY}`).classList.add('hasShip');
            }
          }
        } else if (ship.classList.contains('vertical') && shipLength + squareY - 1 < 10) {
          const shipSquaresHorizontal = [];

          for (let y = squareY + 1; y < squareY + shipLength; y++) {
            shipSquaresHorizontal.push(document.getElementById(`${squareX}${y}`));
          }

          const isPossible = shipSquaresHorizontal.some((square) => square.classList.contains('hasShip'));

          if (!isPossible) {
            event.target.parentElement.classList.remove('vertical');
            event.target.parentElement.classList.add('horizontal');

            for (let x = squareX; x < squareX + shipLength; x++) {
              document.getElementById(`${x}${squareY}`).classList.remove('hasShip');
            }

            for (let y = squareY; y < squareY + shipLength; y++) {
              document.getElementById(`${squareX}${y}`).classList.add('hasShip');
            }
          }
        }
      });
      ship.appendChild(part);
    }

    ship.classList.add(`ship${size}`, 'ship', 'horizontal');
    ship.id = `ship${size}${i}`;

    ship.setAttribute('draggable', true);

    ships.appendChild(ship);
  }

  return ships;
};

const dragStart = (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);

  const ship = event.target;
  const shipLength = +ship.id[4];
  const square = ship.parentElement;
  const squareX = +square.id[0];
  const squareY = +square.id[1];

  setTimeout(() => {
    ship.classList.add('dragging');
  });

  if (square.classList.contains('board-square')) {
    square.classList.remove('startShip');

    if (ship.classList.contains('horizontal')) {
      for (let y = squareY; y < squareY + shipLength; y++) {
        document.getElementById(`${squareX}${y}`).classList.remove('hasShip');
      }
    } else if (ship.classList.contains('vertical')) {
      for (let x = squareX; x < squareX + shipLength; x++) {
        document.getElementById(`${x}${squareY}`).classList.remove('hasShip');
      }
    }
  }
};

const dragEnd = (event) => {
  const ship = event.target;
  const shipLength = +ship.id[4];
  const square = ship.parentElement;
  const squareX = +square.id[0];
  const squareY = +square.id[1];

  ship.classList.remove('dragging');

  if (square.classList.contains('board-square')) {
    square.classList.add('startShip');

    if (ship.classList.contains('horizontal')) {
      for (let y = squareY; y < squareY + shipLength; y++) {
        document.getElementById(`${squareX}${y}`).classList.add('hasShip');
      }
    } else if (ship.classList.contains('vertical')) {
      for (let x = squareX; x < squareX + shipLength; x++) {
        document.getElementById(`${x}${squareY}`).classList.add('hasShip');
      }
    }
  }
};

const dragEnter = (event) => {
  event.preventDefault();
  event.target.classList.add('drag-over');
};

const dragOver = (event) => {
  event.preventDefault();
  event.target.classList.add('drag-over');
};

const dragLeave = (event) => {
  event.target.classList.remove('drag-over');
};

const drop = (event) => {
  event.target.classList.remove('drag-over');

  if (!event.target.classList.contains('board-square')) return;

  const id = event.dataTransfer.getData('text/plain');
  const ship = document.getElementById(id);

  const shipLength = +id[4];

  const square = event.target;
  const squareX = +square.id[0];
  const squareY = +square.id[1];
  const finalShipY = document.getElementById(`${squareX}${squareY + shipLength - 1}`);
  const finalShipX = document.getElementById(`${squareX + shipLength - 1}${squareY}`);

  if (finalShipY
    && ship.classList.contains('horizontal')) {
    const shipSquaresHorizontal = [square];

    for (let y = squareY; y < squareY + shipLength; y++) {
      shipSquaresHorizontal.push(document.getElementById(`${squareX}${y}`));
    }

    const isPossible = shipSquaresHorizontal.some((square) => square.classList.contains('hasShip'));

    if (!isPossible) {
      square.appendChild(ship);
    }
  } else if (finalShipX
            && ship.classList.contains('vertical')) {
    const shipSquaresVertical = [square];

    for (let x = squareX; x < squareX + shipLength; x++) {
      shipSquaresVertical.push(document.getElementById(`${x}${squareY}`));
    }

    const isPossible = shipSquaresVertical.some((square) => square.classList.contains('hasShip'));

    if (!isPossible) {
      square.appendChild(ship);
    }
  }
};

const placeShips = (player, computer) => {
  const main = document.createElement('div');
  main.id = 'placeships';

  const shipsSection = document.createElement('div');
  const ships = renderShips();

  shipsSection.appendChild(ships);

  const boardSection = document.createElement('div');
  const board = shipsBoard();

  boardSection.appendChild(board);

  const btn = document.createElement('button');
  btn.textContent = 'START';

  btn.addEventListener('click', () => {
    const ships = document.querySelectorAll('.startShip');
    if (ships.length == 10) {
      ships.forEach((square) => {
        const ship = square.firstChild;
        const shipLength = +ship.id[4];
        const x = +square.id[0];
        const y = +square.id[1];

        if (ship.classList.contains('horizontal')) {
          player.gameboard.placeShip(x, y, (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])(shipLength));
        } else if (ship.classList.contains('vertical')) {
          player.gameboard.placeShip(x, y, (0,_ship__WEBPACK_IMPORTED_MODULE_3__["default"])(shipLength), true);
        }
      });

      (0,_randomplays__WEBPACK_IMPORTED_MODULE_2__.placeAllShipsRandom)(_randomplays__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_SHIPS, computer.gameboard);

      main.remove();
      const body = document.querySelector('body');
      const content = document.createElement('div');
      const infos = document.createElement('div');
      const playerTitle = document.createElement('p');
      const computerTitle = document.createElement('p');

      playerTitle.textContent = 'Player';
      computerTitle.textContent = 'Computer';

      content.id = 'content';
      infos.id = 'infos';

      const playerIcon = new Image();
      playerIcon.src = _images_cat_gif__WEBPACK_IMPORTED_MODULE_1__;

      infos.appendChild(playerTitle);
      infos.appendChild(playerIcon);
      infos.appendChild(computerTitle);

      body.appendChild(infos);
      content.appendChild((0,_interfaceDOM__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(computer, player, true));
      content.appendChild((0,_interfaceDOM__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(player, computer));
      body.appendChild(content);
      (0,_interfaceDOM__WEBPACK_IMPORTED_MODULE_0__.showShadowOfShips)(document.querySelectorAll('.board')[0], player);
    }
  });

  main.appendChild(shipsSection);
  main.appendChild(boardSection);
  main.appendChild(btn);

  return main;
};




/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
function Gameboard() {
  const _createBoard = (size) => {
    const board = [];
    for (let i = 0; i < size; i++) {
      board.push([]);
      for (let j = 0; j < size; j++) {
        board[i].push(
          {
            attacked: false,
            ship: null,
          },
        );
      }
    }
    return board;
  };

  const board = _createBoard(10);

  const _ships = [];

  const placeShip = (x, y, ship, orientation = false) => {
    if (x + ship.getLength() - 1 > 9
        || y + ship.getLength() - 1 > 9) return false;

    if (orientation) {
      const squares = [];
      for (let i = x; i < ship.getLength() + x; i++) {
        squares.push(board[i][y]);
      }

      const isPossible = squares.some((square) => square.ship != null);
      if (!isPossible) {
        squares.forEach((square) => square.ship = ship);

        _ships.push(ship);
        return true;
      }
    } else {
      const squares = [];

      for (let i = y; i < ship.getLength() + y; i++) {
        squares.push(board[x][i]);
      }

      const isPossible = squares.some((square) => square.ship != null);
      if (!isPossible) {
        squares.forEach((square) => square.ship = ship);

        _ships.push(ship);
        return true;
      }
    }

    return false;
  };

  const receiveAttack = (x, y) => {
    if (!board[x][y].attacked) {
      board[x][y].attacked = true;

      if (board[x][y].ship) {
        board[x][y].ship.hit();
      } else if (board[x][y].ship === null) {
        board[x][y] = false;
      }

      return true;
    }
    return false;
  };

  const allSunk = () => _ships.every((ship) => ship.isSunk() == true);

  return {
    placeShip, board, receiveAttack, allSunk,
  };
}


/***/ }),

/***/ "./src/scripts/interfaceDOM.js":
/*!*************************************!*\
  !*** ./src/scripts/interfaceDOM.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "showShadowOfShips": () => (/* binding */ showShadowOfShips)
/* harmony export */ });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ "./src/scripts/ai.js");
/* harmony import */ var _images_crown_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/crown.gif */ "./src/images/crown.gif");



const renderBoard = (player, enemy, isPlayer = false, size = 10) => {
  const board = document.createElement('div');
  board.classList.add('board');
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < size; j++) {
      const col = document.createElement('div');

      if (isPlayer) col.id = `${i}${j}`;

      if (!isPlayer) {
        col.addEventListener('click', () => {
          if (col.classList.contains('attacked') && enemy.gameboard.board[i][j].ship.isSunk()) {
            if (!col.classList.contains('ship-sunk')) col.classList.add('ship-sunk');
            return;
          }

          if (!player.gameboard.allSunk() && enemy.gameboard.board[i][j]) {
            if (!enemy.gameboard.board[i][j].attacked) {
              player.attack(i, j);

              if (enemy.gameboard.board[i][j].ship) {
                col.classList.add('attacked');
                if (enemy.gameboard.allSunk()) {
                  const infos = document.getElementById('infos');
                  const crownImage = new Image();
                  crownImage.src = _images_crown_gif__WEBPACK_IMPORTED_MODULE_1__;
                  document.querySelector('body').insertBefore(crownImage, infos);
                  infos.textContent = 'Player Won';
                  const boards = document.querySelectorAll('.board');
                  boards.forEach((el) => el.classList.add('finished'));
                }
              } else {
                col.classList.add('missed');
              }

              showSunk();

              (0,_ai__WEBPACK_IMPORTED_MODULE_0__.aiAttack)(enemy, player);
            }
          }
        });
      }

      col.classList.add('board-square');

      row.appendChild(col);
    }
    board.appendChild(row);
  }
  return board;
};

const showShadowOfShips = (board, player) => {
  const squares = board.querySelectorAll('.board-square');

  squares.forEach((square) => {
    if (player.gameboard.board[+square.id[0]][+square.id[1]].ship) {
      square.classList.add('ship-shadow');
    }
  });
};

const showSunk = () => {
  const boards = document.querySelectorAll('.board');
  const computerBoard = boards[1];

  computerBoard.querySelectorAll('.attacked').forEach((squareAttacked) => {
    squareAttacked.click();
  });
};




/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");


function Player(name, turn) {
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let _enemy = null;

  const setEnemy = (gameboard) => {
    if (!_enemy) {
      _enemy = gameboard;
    }
  };

  const attack = function (x, y) {
    if (this.turn) {
      const isPossible = _enemy.gameboard.receiveAttack(x, y);
      if (isPossible) {
        this.turn = false;
        _enemy.turn = true;
      }
      return isPossible;
    }
  };

  return {
    gameboard, setEnemy, attack, turn,
  };
}


/***/ }),

/***/ "./src/scripts/randomplays.js":
/*!************************************!*\
  !*** ./src/scripts/randomplays.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_SHIPS": () => (/* binding */ DEFAULT_SHIPS),
/* harmony export */   "attackRandom": () => (/* binding */ attackRandom),
/* harmony export */   "default": () => (/* binding */ randomplays),
/* harmony export */   "placeAllShipsRandom": () => (/* binding */ placeAllShipsRandom),
/* harmony export */   "showAttack": () => (/* binding */ showAttack)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");


function randomplays() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const orientation = Math.random() < 0.5;
  return [x, y, orientation];
}

const DEFAULT_SHIPS = [(0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(1)];

const attackRandom = (computer, player) => {
  let isPossible = false;
  let x; let
    y;
  do {
    [x, y] = randomplays();
    if (player.gameboard.board[x][y]) {
      isPossible = computer.attack(x, y);
    }
  } while (!isPossible);
  const square = document.getElementById(`${x}${y}`);
  showAttack(square, player.gameboard.board[x][y]);
};

const showAttack = (square, hit) => {
  if (hit) {
    square.classList.add('attacked');
  } else {
    square.classList.add('missed');
  }
};

const placeRandom = (gameboard, ship) => {
  let isPossible = false;
  const length = ship.getLength();
  let around = [];

  do {
    const [x, y, orientation] = randomplays();

    if (gameboard.board[x][y].ship != null) continue;

    // vertical

    if (orientation) {
      if (x - 1 > 0) around.push(gameboard.board[x - 1][y]);
      if (x + length - 1 < 9) {
        around.push(gameboard.board[x + length][y]);

        if ((y - 1) > 0) {
          for (let i = x; i < x + length; i++) {
            around.push(gameboard.board[i][y - 1]);
          }
        }

        if (y + 1 < 10) {
          for (let i = x; i < x + length; i++) {
            around.push(gameboard.board[i][y + 1]);
          }
        }
      }
    } else {
    // horizontal
    //
      if (y - 1 > 0) around.push(gameboard.board[x][y - 1]);
      if (y + length - 1 < 9) {
        around.push(gameboard.board[x][y + length]);

        if ((x - 1) > 0) {
          for (let i = y; i < y + length; i++) {
            around.push(gameboard.board[x - 1][i]);
          }
        }

        if (x + 1 < 10) {
          for (let i = y; i < y + length; i++) {
            around.push(gameboard.board[x + 1][i]);
          }
        }
      }
    }

    const aroundPossible = around.every((square) => square.ship === null);

    if (aroundPossible) {
      isPossible = gameboard.placeShip(x, y, ship, orientation);
    } else {
      isPossible = false;
    }

    around = [];
  } while (!isPossible);
};

const placeAllShipsRandom = (ships, gameboard) => {
  ships.forEach((ship) => placeRandom(gameboard, ship));
};




/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  const _length = length;
  let _timesHit = 0;

  const hit = () => {
    if (!isSunk()) {
      return ++_timesHit;
    }
    return null;
  };

  const isSunk = () => _timesHit === _length;

  const getLength = () => _length;

  const getTimesHit = () => _timesHit;

  return {
    hit, isSunk, getLength, getTimesHit,
  };
}


/***/ }),

/***/ "./src/scripts/start.js":
/*!******************************!*\
  !*** ./src/scripts/start.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-and-drop */ "./src/scripts/drag-and-drop.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");



function startGame() {
  // Create new players
  const player = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('player', true);
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('computer', false);
  player.setEnemy(computer);
  computer.setEnemy(player);

  const body = document.querySelector('body');

  body.appendChild((0,_drag_and_drop__WEBPACK_IMPORTED_MODULE_0__.placeShips)(player, computer));
}


/***/ }),

/***/ "./src/images/cat.gif":
/*!****************************!*\
  !*** ./src/images/cat.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c6d99b4c4f307dd2729.gif";

/***/ }),

/***/ "./src/images/crown.gif":
/*!******************************!*\
  !*** ./src/images/crown.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18148114b5a29d4ddb03.gif";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/start */ "./src/scripts/start.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_scripts_start__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNuQjs7QUFFckIsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZHJhZy1hbmQtZHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9pbnRlcmZhY2VET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcmFuZG9tcGxheXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WVDMyMyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWdhcC1ib2FyZDogNXB4O1xcbiAgLS1zaGlwLWNvbG9yOiAjYTZlM2ExO1xcbiAgLS1zaGlwLXN1bmstY29sb3I6ICNmMzhiYTg7IFxcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdWVDMyMycsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzVweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBnYXA6IHZhcigtLWdhcC1ib2FyZCk7XFxuICBib3JkZXI6IDVweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggYmxhY2s7XFxufVxcblxcbi5ib2FyZCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1nYXAtYm9hcmQpO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5ib2FyZC1zcXVhcmUubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLmF0dGFja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgYm9yZGVyOiA1cHggc29saWQ7XFxufVxcblxcbi5ib2FyZC5maW5pc2hlZCB7XFxuICBwb2ludGVyLWV2ZW50czpub25lO1xcbn1cXG5cXG4vKiBTSElQUyAqL1xcblxcbi5zaGlwc0JvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2hpcHNSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnNoaXBzUm93ID4gLnNoaXAge1xcbiAgYm9yZGVyOiA1cHggc29saWQ7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDBweCBibGFjaztcXG59XFxuXFxuLnNoaXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5zaGlwLXNoYWRvdyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbi5zaGlwLXN1bmsge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hpcC1zdW5rLWNvbG9yKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2hpcCA+IGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmhvcml6b250YWwge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uaG9yaXpvbnRhbCA+IGRpdiB7XFxuICB3aWR0aDogY2FsYyg1MHB4ICsgdmFyKC0tZ2FwLWJvYXJkKSk7XFxufVxcblxcbi5ob3Jpem9udGFsID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi8qIERyYWcgYW5kIERyb3AgKi9cXG5cXG4uZHJhZ2dpbmcge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRyYWctb3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuI3BsYWNlc2hpcHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbiNwbGFjZXNoaXBzIHAge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI3BsYWNlc2hpcHMgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyOiA1cHggc29saWQ7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCBibGFjaztcXG59XFxuXFxuI3BsYWNlc2hpcHMgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hpcC1jb2xvcik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQ7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDBweCBibGFjaztcXG59XFxuXFxuI3BsYWNlc2hpcHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hpcC1zdW5rLWNvbG9yKTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuI2luZm9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogZW5kO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQ0FBMkM7RUFDM0MsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VlQzMjMmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1nYXAtYm9hcmQ6IDVweDtcXG4gIC0tc2hpcC1jb2xvcjogI2E2ZTNhMTtcXG4gIC0tc2hpcC1zdW5rLWNvbG9yOiAjZjM4YmE4OyBcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnVlQzMjMnLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDM1cHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgZ2FwOiB2YXIoLS1nYXAtYm9hcmQpO1xcbiAgYm9yZGVyOiA1cHggc29saWQ7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMHB4IGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tZ2FwLWJvYXJkKTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZSB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJvYXJkLXNxdWFyZS5hdHRhY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbn1cXG5cXG4uYm9hcmQuZmluaXNoZWQge1xcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcXG59XFxuXFxuLyogU0hJUFMgKi9cXG5cXG4uc2hpcHNCb2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnNoaXBzUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5zaGlwc1JvdyA+IC5zaGlwIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggYmxhY2s7XFxufVxcblxcbi5zaGlwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uc2hpcC1zaGFkb3cge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4uc2hpcC1zdW5rIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoaXAtc3Vuay1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuLnNoaXAgPiBkaXYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmhvcml6b250YWwgPiBkaXYge1xcbiAgd2lkdGg6IGNhbGMoNTBweCArIHZhcigtLWdhcC1ib2FyZCkpO1xcbn1cXG5cXG4uaG9yaXpvbnRhbCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5cXG4vKiBEcmFnIGFuZCBEcm9wICovXFxuXFxuLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kcmFnLW92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbiNwbGFjZXNoaXBzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4jcGxhY2VzaGlwcyBwIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbiNwbGFjZXNoaXBzID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggYmxhY2s7XFxufVxcblxcbiNwbGFjZXNoaXBzID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoaXAtY29sb3IpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAwcHggYmxhY2s7XFxufVxcblxcbiNwbGFjZXNoaXBzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoaXAtc3Vuay1jb2xvcik7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNpbmZvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXR0YWNrUmFuZG9tLCBzaG93QXR0YWNrIH0gZnJvbSAnLi9yYW5kb21wbGF5cyc7XG5pbXBvcnQgY3Jvd25HaWYgZnJvbSAnLi4vaW1hZ2VzL2Nyb3duLmdpZic7XG5cbmNvbnN0IGFpQXR0YWNrID0gKGVuZW15LCBwbGF5ZXIpID0+IHtcbiAgaWYgKGVuZW15LmdhbWVib2FyZC5hbGxTdW5rKCkpIHJldHVybjtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgY29uc3QgYWxsQXR0YWNrZWQgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0YWNrZWQnKTtcbiAgY29uc3QgYXR0YWNrZWROb3RTdW5rID0gW107XG5cbiAgYWxsQXR0YWNrZWQuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgY29uc3QgeCA9ICtzcXVhcmUuaWRbMF07XG4gICAgY29uc3QgeSA9ICtzcXVhcmUuaWRbMV07XG4gICAgY29uc3QgaXNTdW5rID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XS5zaGlwLmlzU3VuaygpO1xuXG4gICAgaWYgKCFpc1N1bmspIGF0dGFja2VkTm90U3Vuay5wdXNoKHNxdWFyZSk7XG4gIH0pO1xuXG4gIGlmIChhdHRhY2tlZE5vdFN1bmsubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgeCA9ICthdHRhY2tlZE5vdFN1bmtbMF0uaWRbMF07XG4gICAgY29uc3QgeSA9ICthdHRhY2tlZE5vdFN1bmtbMF0uaWRbMV07XG5cbiAgICAvLyBjaGVjayB0aGUgdG9wXG4gICAgaWYgKHggPiAwXG4gICAgICAgICYmIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeCAtIDFdW3ldXG4gICAgICAgIC8qIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeCArIDFdW3ldLnNoaXAuYXR0YWNrZWQgKi9cbiAgICApIHtcbiAgICAgIGVuZW15LmF0dGFjayh4IC0gMSwgeSk7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4IC0gMX0ke3l9YCk7XG4gICAgICBzaG93QXR0YWNrKHNxdWFyZSwgcGxheWVyLmdhbWVib2FyZC5ib2FyZFt4IC0gMV1beV0pO1xuICAgIH0gZWxzZVxuXG4gICAgLy8gY2hlY2sgdGhlIHJpZ2h0XG4gICAgaWYgKHkgPCA5ICYmIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beSArIDFdKSB7XG4gICAgICBlbmVteS5hdHRhY2soeCwgeSArIDEpO1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3kgKyAxfWApO1xuICAgICAgc2hvd0F0dGFjayhzcXVhcmUsIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beSArIDFdKTtcbiAgICB9IGVsc2VcblxuICAgIC8vIGNoZWNrIHRoZSBib3R0b21cbiAgICBpZiAoeCA8IDkgJiYgcGxheWVyLmdhbWVib2FyZC5ib2FyZFt4ICsgMV1beV0pIHtcbiAgICAgIGVuZW15LmF0dGFjayh4ICsgMSwgeSk7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4ICsgMX0ke3l9YCk7XG4gICAgICBzaG93QXR0YWNrKHNxdWFyZSwgcGxheWVyLmdhbWVib2FyZC5ib2FyZFt4ICsgMV1beV0pO1xuICAgIH0gZWxzZVxuXG4gICAgLy8gY2hlY2sgdGhlIGxlZnRcbiAgICBpZiAoeSA+IDAgJiYgcGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5IC0gMV0pIHtcbiAgICAgIGVuZW15LmF0dGFjayh4LCB5IC0gMSk7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eSAtIDF9YCk7XG4gICAgICBzaG93QXR0YWNrKHNxdWFyZSwgcGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5IC0gMV0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhdHRhY2tlZE5vdFN1bmsubGVuZ3RoID4gMSkge1xuICAgIGxldCB4ID0gK2F0dGFja2VkTm90U3Vua1swXS5pZFswXTtcbiAgICBsZXQgeSA9ICthdHRhY2tlZE5vdFN1bmtbMF0uaWRbMV07XG5cbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGF0dGFja2VkTm90U3Vuay5ldmVyeSgoc3F1YXJlKSA9PiArc3F1YXJlLmlkWzBdID09PSB4KTtcblxuICAgIC8vIGhvcml6b250YWxcbiAgICBpZiAob3JpZW50YXRpb24pIHtcbiAgICAgIHkgPSArYXR0YWNrZWROb3RTdW5rW2F0dGFja2VkTm90U3Vuay5sZW5ndGggLSAxXS5pZFsxXTtcblxuICAgICAgLy8gQ2hlY2sgcmlnaHRcbiAgICAgIGlmICh5IDwgOSAmJiBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3kgKyAxXSkge1xuICAgICAgICBlbmVteS5hdHRhY2soeCwgeSArIDEpO1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eSArIDF9YCk7XG4gICAgICAgIHNob3dBdHRhY2soc3F1YXJlLCBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3kgKyAxXSk7XG4gICAgICB9IGVsc2VcblxuICAgICAgLy8gQ2hlY2sgbGVmdFxuICAgICAgaWYgKHkgPiAwICYmIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beSAtIDFdKSB7XG4gICAgICAgIHkgPSArYXR0YWNrZWROb3RTdW5rWzBdLmlkWzFdO1xuXG4gICAgICAgIGVuZW15LmF0dGFjayh4LCB5IC0gMSk7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5IC0gMX1gKTtcbiAgICAgICAgc2hvd0F0dGFjayhzcXVhcmUsIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beSAtIDFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyB2ZXJ0aWNhbFxuICAgICAgeCA9ICthdHRhY2tlZE5vdFN1bmtbMF0uaWRbMF07XG5cbiAgICAgIC8vIENoZWNrIFRPUFxuICAgICAgaWYgKHggPiAwICYmIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeCAtIDFdW3ldKSB7XG4gICAgICAgIGVuZW15LmF0dGFjayh4IC0gMSwgeSk7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ggLSAxfSR7eX1gKTtcbiAgICAgICAgc2hvd0F0dGFjayhzcXVhcmUsIHBsYXllci5nYW1lYm9hcmQuYm9hcmRbeCAtIDFdW3ldKTtcbiAgICAgIH0gZWxzZVxuXG4gICAgICAvLyBDaGVjayBCT1RUT01cbiAgICAgIGlmICh4IDwgOSAmJiBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3ggKyAxXVt5XSkge1xuICAgICAgICB4ID0gK2F0dGFja2VkTm90U3Vua1thdHRhY2tlZE5vdFN1bmsubGVuZ3RoIC0gMV0uaWRbMF07XG5cbiAgICAgICAgZW5lbXkuYXR0YWNrKHggKyAxLCB5KTtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eCArIDF9JHt5fWApO1xuICAgICAgICBzaG93QXR0YWNrKHNxdWFyZSwgcGxheWVyLmdhbWVib2FyZC5ib2FyZFt4ICsgMV1beV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhdHRhY2tSYW5kb20oZW5lbXksIHBsYXllcik7XG4gIH1cblxuICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICBjb25zdCBpbmZvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvcycpO1xuICAgIGNvbnN0IGNyb3duSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjcm93bkltYWdlLnNyYyA9IGNyb3duR2lmO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbnNlcnRCZWZvcmUoY3Jvd25JbWFnZSwgaW5mb3MpO1xuICAgIGluZm9zLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyIFdvbic7XG4gICAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJyk7XG4gICAgYm9hcmRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgYWlBdHRhY2sgfTtcbiIsImltcG9ydCB7IHJlbmRlckJvYXJkLCBzaG93U2hhZG93T2ZTaGlwcyB9IGZyb20gJy4vaW50ZXJmYWNlRE9NJztcbmltcG9ydCBjYXRJbWFnZSBmcm9tICcuLi9pbWFnZXMvY2F0LmdpZic7XG5pbXBvcnQgeyBERUZBVUxUX1NISVBTLCBwbGFjZUFsbFNoaXBzUmFuZG9tIH0gZnJvbSAnLi9yYW5kb21wbGF5cyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBzaGlwc0JvYXJkID0gKHNpemUgPSAxMCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb2wuY2xhc3NMaXN0LmFkZCgnYm9hcmQtc3F1YXJlJyk7XG4gICAgICBjb2wuaWQgPSBgJHtpfSR7an1gO1xuXG4gICAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IGRyb3AoZXZlbnQpKTtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XG4gICAgfVxuXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuXG4gIHJldHVybiBib2FyZDtcbn07XG5cbmNvbnN0IHJlbmRlclNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBzaGlwc0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNoaXBzQm9hcmQuY2xhc3NMaXN0LmFkZCgnc2hpcHNCb2FyZCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdEcmFnIHRoZSBzaGlwcyB0byB0aGUgYm9hcmQsIGFuZCB0aGVuIGNsaWNrIHRvIHJvdGF0ZSc7XG5cbiAgY29uc3Qgc2hpcHNMNFNlY3Rpb24gPSBjcmVhdGVTaGlwcyg0LCAxKTtcbiAgc2hpcHNMNFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2hpcHNSb3cnKTtcblxuICBjb25zdCBzaGlwc0wzU2VjdGlvbiA9IGNyZWF0ZVNoaXBzKDMsIDIpO1xuICBzaGlwc0wzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzaGlwc1JvdycpO1xuXG4gIGNvbnN0IHNoaXBzTDJTZWN0aW9uID0gY3JlYXRlU2hpcHMoMiwgMyk7XG4gIHNoaXBzTDJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBzUm93Jyk7XG5cbiAgY29uc3Qgc2hpcHNMMVNlY3Rpb24gPSBjcmVhdGVTaGlwcygxLCA0KTtcbiAgc2hpcHNMMVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2hpcHNSb3cnKTtcblxuICBzaGlwc0JvYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgc2hpcHNCb2FyZC5hcHBlbmRDaGlsZChzaGlwc0w0U2VjdGlvbik7XG4gIHNoaXBzQm9hcmQuYXBwZW5kQ2hpbGQoc2hpcHNMM1NlY3Rpb24pO1xuICBzaGlwc0JvYXJkLmFwcGVuZENoaWxkKHNoaXBzTDJTZWN0aW9uKTtcbiAgc2hpcHNCb2FyZC5hcHBlbmRDaGlsZChzaGlwc0wxU2VjdGlvbik7XG5cbiAgcmV0dXJuIHNoaXBzQm9hcmQ7XG59O1xuXG5jb25zdCBjcmVhdGVTaGlwcyA9IChzaXplLCBhbW91bnQpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhbW91bnQgKyAxOyBpKyspIHtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgY29uc3QgcGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBwYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gc2hpcC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzcXVhcmVYID0gK3NxdWFyZS5pZFswXTtcbiAgICAgICAgY29uc3Qgc3F1YXJlWSA9ICtzcXVhcmUuaWRbMV07XG5cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9ICtzaGlwLmlkWzRdO1xuXG4gICAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpICYmIHNoaXBMZW5ndGggKyBzcXVhcmVYIC0gMSA8IDEwKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcFNxdWFyZXNWZXJ0aWNhbCA9IFtdO1xuXG4gICAgICAgICAgZm9yIChsZXQgeCA9IHNxdWFyZVggKyAxOyB4IDwgc3F1YXJlWCArIHNoaXBMZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgc2hpcFNxdWFyZXNWZXJ0aWNhbC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHtzcXVhcmVZfWApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Bvc3NpYmxlID0gc2hpcFNxdWFyZXNWZXJ0aWNhbC5zb21lKChzcXVhcmUpID0+IHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hhc1NoaXAnKSk7XG5cbiAgICAgICAgICBpZiAoIWlzUG9zc2libGUpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBzcXVhcmVZOyB5IDwgc3F1YXJlWSArIHNoaXBMZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzcXVhcmVYfSR7eX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoYXNTaGlwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSBzcXVhcmVYOyB4IDwgc3F1YXJlWCArIHNoaXBMZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7c3F1YXJlWX1gKS5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpICYmIHNoaXBMZW5ndGggKyBzcXVhcmVZIC0gMSA8IDEwKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcFNxdWFyZXNIb3Jpem9udGFsID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCB5ID0gc3F1YXJlWSArIDE7IHkgPCBzcXVhcmVZICsgc2hpcExlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICBzaGlwU3F1YXJlc0hvcml6b250YWwucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzcXVhcmVYfSR7eX1gKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaXNQb3NzaWJsZSA9IHNoaXBTcXVhcmVzSG9yaXpvbnRhbC5zb21lKChzcXVhcmUpID0+IHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hhc1NoaXAnKSk7XG5cbiAgICAgICAgICBpZiAoIWlzUG9zc2libGUpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSBzcXVhcmVYOyB4IDwgc3F1YXJlWCArIHNoaXBMZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7c3F1YXJlWX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoYXNTaGlwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBzcXVhcmVZOyB5IDwgc3F1YXJlWSArIHNoaXBMZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzcXVhcmVYfSR7eX1gKS5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNoaXAuYXBwZW5kQ2hpbGQocGFydCk7XG4gICAgfVxuXG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKGBzaGlwJHtzaXplfWAsICdzaGlwJywgJ2hvcml6b250YWwnKTtcbiAgICBzaGlwLmlkID0gYHNoaXAke3NpemV9JHtpfWA7XG5cbiAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG5cbiAgICBzaGlwcy5hcHBlbmRDaGlsZChzaGlwKTtcbiAgfVxuXG4gIHJldHVybiBzaGlwcztcbn07XG5cbmNvbnN0IGRyYWdTdGFydCA9IChldmVudCkgPT4ge1xuICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5pZCk7XG5cbiAgY29uc3Qgc2hpcCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3Qgc2hpcExlbmd0aCA9ICtzaGlwLmlkWzRdO1xuICBjb25zdCBzcXVhcmUgPSBzaGlwLnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHNxdWFyZVggPSArc3F1YXJlLmlkWzBdO1xuICBjb25zdCBzcXVhcmVZID0gK3NxdWFyZS5pZFsxXTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gIH0pO1xuXG4gIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdib2FyZC1zcXVhcmUnKSkge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydFNoaXAnKTtcblxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICBmb3IgKGxldCB5ID0gc3F1YXJlWTsgeSA8IHNxdWFyZVkgKyBzaGlwTGVuZ3RoOyB5KyspIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c3F1YXJlWH0ke3l9YCkuY2xhc3NMaXN0LnJlbW92ZSgnaGFzU2hpcCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgIGZvciAobGV0IHggPSBzcXVhcmVYOyB4IDwgc3F1YXJlWCArIHNoaXBMZW5ndGg7IHgrKykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7c3F1YXJlWX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoYXNTaGlwJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkcmFnRW5kID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNoaXAgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSArc2hpcC5pZFs0XTtcbiAgY29uc3Qgc3F1YXJlID0gc2hpcC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBzcXVhcmVYID0gK3NxdWFyZS5pZFswXTtcbiAgY29uc3Qgc3F1YXJlWSA9ICtzcXVhcmUuaWRbMV07XG5cbiAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuXG4gIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdib2FyZC1zcXVhcmUnKSkge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdGFydFNoaXAnKTtcblxuICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygnaG9yaXpvbnRhbCcpKSB7XG4gICAgICBmb3IgKGxldCB5ID0gc3F1YXJlWTsgeSA8IHNxdWFyZVkgKyBzaGlwTGVuZ3RoOyB5KyspIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c3F1YXJlWH0ke3l9YCkuY2xhc3NMaXN0LmFkZCgnaGFzU2hpcCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICAgIGZvciAobGV0IHggPSBzcXVhcmVYOyB4IDwgc3F1YXJlWCArIHNoaXBMZW5ndGg7IHgrKykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7c3F1YXJlWX1gKS5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkcmFnRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xufTtcblxuY29uc3QgZHJhZ092ZXIgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xufTtcblxuY29uc3QgZHJhZ0xlYXZlID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbn07XG5cbmNvbnN0IGRyb3AgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuXG4gIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm9hcmQtc3F1YXJlJykpIHJldHVybjtcblxuICBjb25zdCBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgY29uc3Qgc2hpcExlbmd0aCA9ICtpZFs0XTtcblxuICBjb25zdCBzcXVhcmUgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IHNxdWFyZVggPSArc3F1YXJlLmlkWzBdO1xuICBjb25zdCBzcXVhcmVZID0gK3NxdWFyZS5pZFsxXTtcbiAgY29uc3QgZmluYWxTaGlwWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NxdWFyZVh9JHtzcXVhcmVZICsgc2hpcExlbmd0aCAtIDF9YCk7XG4gIGNvbnN0IGZpbmFsU2hpcFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzcXVhcmVYICsgc2hpcExlbmd0aCAtIDF9JHtzcXVhcmVZfWApO1xuXG4gIGlmIChmaW5hbFNoaXBZXG4gICAgJiYgc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgIGNvbnN0IHNoaXBTcXVhcmVzSG9yaXpvbnRhbCA9IFtzcXVhcmVdO1xuXG4gICAgZm9yIChsZXQgeSA9IHNxdWFyZVk7IHkgPCBzcXVhcmVZICsgc2hpcExlbmd0aDsgeSsrKSB7XG4gICAgICBzaGlwU3F1YXJlc0hvcml6b250YWwucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzcXVhcmVYfSR7eX1gKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNQb3NzaWJsZSA9IHNoaXBTcXVhcmVzSG9yaXpvbnRhbC5zb21lKChzcXVhcmUpID0+IHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hhc1NoaXAnKSk7XG5cbiAgICBpZiAoIWlzUG9zc2libGUpIHtcbiAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmluYWxTaGlwWFxuICAgICAgICAgICAgJiYgc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykpIHtcbiAgICBjb25zdCBzaGlwU3F1YXJlc1ZlcnRpY2FsID0gW3NxdWFyZV07XG5cbiAgICBmb3IgKGxldCB4ID0gc3F1YXJlWDsgeCA8IHNxdWFyZVggKyBzaGlwTGVuZ3RoOyB4KyspIHtcbiAgICAgIHNoaXBTcXVhcmVzVmVydGljYWwucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7c3F1YXJlWX1gKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNQb3NzaWJsZSA9IHNoaXBTcXVhcmVzVmVydGljYWwuc29tZSgoc3F1YXJlKSA9PiBzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXNTaGlwJykpO1xuXG4gICAgaWYgKCFpc1Bvc3NpYmxlKSB7XG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwbGFjZVNoaXBzID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmlkID0gJ3BsYWNlc2hpcHMnO1xuXG4gIGNvbnN0IHNoaXBzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzaGlwcyA9IHJlbmRlclNoaXBzKCk7XG5cbiAgc2hpcHNTZWN0aW9uLmFwcGVuZENoaWxkKHNoaXBzKTtcblxuICBjb25zdCBib2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYm9hcmQgPSBzaGlwc0JvYXJkKCk7XG5cbiAgYm9hcmRTZWN0aW9uLmFwcGVuZENoaWxkKGJvYXJkKTtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ1NUQVJUJztcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcnRTaGlwJyk7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PSAxMCkge1xuICAgICAgc2hpcHMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzcXVhcmUuZmlyc3RDaGlsZDtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9ICtzaGlwLmlkWzRdO1xuICAgICAgICBjb25zdCB4ID0gK3NxdWFyZS5pZFswXTtcbiAgICAgICAgY29uc3QgeSA9ICtzcXVhcmUuaWRbMV07XG5cbiAgICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcbiAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCBTaGlwKHNoaXBMZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSkge1xuICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHgsIHksIFNoaXAoc2hpcExlbmd0aCksIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcGxhY2VBbGxTaGlwc1JhbmRvbShERUZBVUxUX1NISVBTLCBjb21wdXRlci5nYW1lYm9hcmQpO1xuXG4gICAgICBtYWluLnJlbW92ZSgpO1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGluZm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBwbGF5ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IGNvbXB1dGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgIHBsYXllclRpdGxlLnRleHRDb250ZW50ID0gJ1BsYXllcic7XG4gICAgICBjb21wdXRlclRpdGxlLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyJztcblxuICAgICAgY29udGVudC5pZCA9ICdjb250ZW50JztcbiAgICAgIGluZm9zLmlkID0gJ2luZm9zJztcblxuICAgICAgY29uc3QgcGxheWVySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgcGxheWVySWNvbi5zcmMgPSBjYXRJbWFnZTtcblxuICAgICAgaW5mb3MuYXBwZW5kQ2hpbGQocGxheWVyVGl0bGUpO1xuICAgICAgaW5mb3MuYXBwZW5kQ2hpbGQocGxheWVySWNvbik7XG4gICAgICBpbmZvcy5hcHBlbmRDaGlsZChjb21wdXRlclRpdGxlKTtcblxuICAgICAgYm9keS5hcHBlbmRDaGlsZChpbmZvcyk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckJvYXJkKGNvbXB1dGVyLCBwbGF5ZXIsIHRydWUpKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQocGxheWVyLCBjb21wdXRlcikpO1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIHNob3dTaGFkb3dPZlNoaXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpWzBdLCBwbGF5ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChzaGlwc1NlY3Rpb24pO1xuICBtYWluLmFwcGVuZENoaWxkKGJvYXJkU2VjdGlvbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnRuKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCB7IHBsYWNlU2hpcHMgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgX2NyZWF0ZUJvYXJkID0gKHNpemUpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBib2FyZC5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0YWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgYm9hcmQgPSBfY3JlYXRlQm9hcmQoMTApO1xuXG4gIGNvbnN0IF9zaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwLCBvcmllbnRhdGlvbiA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHggKyBzaGlwLmdldExlbmd0aCgpIC0gMSA+IDlcbiAgICAgICAgfHwgeSArIHNoaXAuZ2V0TGVuZ3RoKCkgLSAxID4gOSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9yaWVudGF0aW9uKSB7XG4gICAgICBjb25zdCBzcXVhcmVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCkgKyB4OyBpKyspIHtcbiAgICAgICAgc3F1YXJlcy5wdXNoKGJvYXJkW2ldW3ldKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNQb3NzaWJsZSA9IHNxdWFyZXMuc29tZSgoc3F1YXJlKSA9PiBzcXVhcmUuc2hpcCAhPSBudWxsKTtcbiAgICAgIGlmICghaXNQb3NzaWJsZSkge1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4gc3F1YXJlLnNoaXAgPSBzaGlwKTtcblxuICAgICAgICBfc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCBzaGlwLmdldExlbmd0aCgpICsgeTsgaSsrKSB7XG4gICAgICAgIHNxdWFyZXMucHVzaChib2FyZFt4XVtpXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzUG9zc2libGUgPSBzcXVhcmVzLnNvbWUoKHNxdWFyZSkgPT4gc3F1YXJlLnNoaXAgIT0gbnVsbCk7XG4gICAgICBpZiAoIWlzUG9zc2libGUpIHtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5zaGlwID0gc2hpcCk7XG5cbiAgICAgICAgX3NoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoIWJvYXJkW3hdW3ldLmF0dGFja2VkKSB7XG4gICAgICBib2FyZFt4XVt5XS5hdHRhY2tlZCA9IHRydWU7XG5cbiAgICAgIGlmIChib2FyZFt4XVt5XS5zaGlwKSB7XG4gICAgICAgIGJvYXJkW3hdW3ldLnNoaXAuaGl0KCk7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgYm9hcmRbeF1beV0gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4gX3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpID09IHRydWUpO1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLCBib2FyZCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGFpQXR0YWNrIH0gZnJvbSAnLi9haSc7XG5pbXBvcnQgY3Jvd25HaWYgZnJvbSAnLi4vaW1hZ2VzL2Nyb3duLmdpZic7XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKHBsYXllciwgZW5lbXksIGlzUGxheWVyID0gZmFsc2UsIHNpemUgPSAxMCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgaWYgKGlzUGxheWVyKSBjb2wuaWQgPSBgJHtpfSR7an1gO1xuXG4gICAgICBpZiAoIWlzUGxheWVyKSB7XG4gICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBpZiAoY29sLmNsYXNzTGlzdC5jb250YWlucygnYXR0YWNrZWQnKSAmJiBlbmVteS5nYW1lYm9hcmQuYm9hcmRbaV1bal0uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgaWYgKCFjb2wuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXN1bmsnKSkgY29sLmNsYXNzTGlzdC5hZGQoJ3NoaXAtc3VuaycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghcGxheWVyLmdhbWVib2FyZC5hbGxTdW5rKCkgJiYgZW5lbXkuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdKSB7XG4gICAgICAgICAgICBpZiAoIWVuZW15LmdhbWVib2FyZC5ib2FyZFtpXVtqXS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICBwbGF5ZXIuYXR0YWNrKGksIGopO1xuXG4gICAgICAgICAgICAgIGlmIChlbmVteS5nYW1lYm9hcmQuYm9hcmRbaV1bal0uc2hpcCkge1xuICAgICAgICAgICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5nYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpbmZvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvcycpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY3Jvd25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgY3Jvd25JbWFnZS5zcmMgPSBjcm93bkdpZjtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbnNlcnRCZWZvcmUoY3Jvd25JbWFnZSwgaW5mb3MpO1xuICAgICAgICAgICAgICAgICAgaW5mb3MudGV4dENvbnRlbnQgPSAnUGxheWVyIFdvbic7XG4gICAgICAgICAgICAgICAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcbiAgICAgICAgICAgICAgICAgIGJvYXJkcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNob3dTdW5rKCk7XG5cbiAgICAgICAgICAgICAgYWlBdHRhY2soZW5lbXksIHBsYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXNxdWFyZScpO1xuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKTtcbiAgICB9XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gYm9hcmQ7XG59O1xuXG5jb25zdCBzaG93U2hhZG93T2ZTaGlwcyA9IChib2FyZCwgcGxheWVyKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtc3F1YXJlJyk7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5ib2FyZFsrc3F1YXJlLmlkWzBdXVsrc3F1YXJlLmlkWzFdXS5zaGlwKSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1zaGFkb3cnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1N1bmsgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gYm9hcmRzWzFdO1xuXG4gIGNvbXB1dGVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmF0dGFja2VkJykuZm9yRWFjaCgoc3F1YXJlQXR0YWNrZWQpID0+IHtcbiAgICBzcXVhcmVBdHRhY2tlZC5jbGljaygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckJvYXJkLCBzaG93U2hhZG93T2ZTaGlwcyB9O1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihuYW1lLCB0dXJuKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgX2VuZW15ID0gbnVsbDtcblxuICBjb25zdCBzZXRFbmVteSA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBpZiAoIV9lbmVteSkge1xuICAgICAgX2VuZW15ID0gZ2FtZWJvYXJkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGlmICh0aGlzLnR1cm4pIHtcbiAgICAgIGNvbnN0IGlzUG9zc2libGUgPSBfZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICBpZiAoaXNQb3NzaWJsZSkge1xuICAgICAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgX2VuZW15LnR1cm4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzUG9zc2libGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLCBzZXRFbmVteSwgYXR0YWNrLCB0dXJuLFxuICB9O1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tcGxheXMoKSB7XG4gIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgcmV0dXJuIFt4LCB5LCBvcmllbnRhdGlvbl07XG59XG5cbmNvbnN0IERFRkFVTFRfU0hJUFMgPSBbU2hpcCg0KSwgU2hpcCgzKSwgU2hpcCgzKSwgU2hpcCgyKSwgU2hpcCgyKSwgU2hpcCgyKSwgU2hpcCgxKSwgU2hpcCgxKSwgU2hpcCgxKSwgU2hpcCgxKSwgU2hpcCgxKV07XG5cbmNvbnN0IGF0dGFja1JhbmRvbSA9IChjb21wdXRlciwgcGxheWVyKSA9PiB7XG4gIGxldCBpc1Bvc3NpYmxlID0gZmFsc2U7XG4gIGxldCB4OyBsZXRcbiAgICB5O1xuICBkbyB7XG4gICAgW3gsIHldID0gcmFuZG9tcGxheXMoKTtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSkge1xuICAgICAgaXNQb3NzaWJsZSA9IGNvbXB1dGVyLmF0dGFjayh4LCB5KTtcbiAgICB9XG4gIH0gd2hpbGUgKCFpc1Bvc3NpYmxlKTtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCk7XG4gIHNob3dBdHRhY2soc3F1YXJlLCBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldKTtcbn07XG5cbmNvbnN0IHNob3dBdHRhY2sgPSAoc3F1YXJlLCBoaXQpID0+IHtcbiAgaWYgKGhpdCkge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICB9IGVsc2Uge1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgfVxufTtcblxuY29uc3QgcGxhY2VSYW5kb20gPSAoZ2FtZWJvYXJkLCBzaGlwKSA9PiB7XG4gIGxldCBpc1Bvc3NpYmxlID0gZmFsc2U7XG4gIGNvbnN0IGxlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKCk7XG4gIGxldCBhcm91bmQgPSBbXTtcblxuICBkbyB7XG4gICAgY29uc3QgW3gsIHksIG9yaWVudGF0aW9uXSA9IHJhbmRvbXBsYXlzKCk7XG5cbiAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLnNoaXAgIT0gbnVsbCkgY29udGludWU7XG5cbiAgICAvLyB2ZXJ0aWNhbFxuXG4gICAgaWYgKG9yaWVudGF0aW9uKSB7XG4gICAgICBpZiAoeCAtIDEgPiAwKSBhcm91bmQucHVzaChnYW1lYm9hcmQuYm9hcmRbeCAtIDFdW3ldKTtcbiAgICAgIGlmICh4ICsgbGVuZ3RoIC0gMSA8IDkpIHtcbiAgICAgICAgYXJvdW5kLnB1c2goZ2FtZWJvYXJkLmJvYXJkW3ggKyBsZW5ndGhdW3ldKTtcblxuICAgICAgICBpZiAoKHkgLSAxKSA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJvdW5kLnB1c2goZ2FtZWJvYXJkLmJvYXJkW2ldW3kgLSAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHkgKyAxIDwgMTApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJvdW5kLnB1c2goZ2FtZWJvYXJkLmJvYXJkW2ldW3kgKyAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAvLyBob3Jpem9udGFsXG4gICAgLy9cbiAgICAgIGlmICh5IC0gMSA+IDApIGFyb3VuZC5wdXNoKGdhbWVib2FyZC5ib2FyZFt4XVt5IC0gMV0pO1xuICAgICAgaWYgKHkgKyBsZW5ndGggLSAxIDwgOSkge1xuICAgICAgICBhcm91bmQucHVzaChnYW1lYm9hcmQuYm9hcmRbeF1beSArIGxlbmd0aF0pO1xuXG4gICAgICAgIGlmICgoeCAtIDEpID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcm91bmQucHVzaChnYW1lYm9hcmQuYm9hcmRbeCAtIDFdW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeCArIDEgPCAxMCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcm91bmQucHVzaChnYW1lYm9hcmQuYm9hcmRbeCArIDFdW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcm91bmRQb3NzaWJsZSA9IGFyb3VuZC5ldmVyeSgoc3F1YXJlKSA9PiBzcXVhcmUuc2hpcCA9PT0gbnVsbCk7XG5cbiAgICBpZiAoYXJvdW5kUG9zc2libGUpIHtcbiAgICAgIGlzUG9zc2libGUgPSBnYW1lYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXAsIG9yaWVudGF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNQb3NzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFyb3VuZCA9IFtdO1xuICB9IHdoaWxlICghaXNQb3NzaWJsZSk7XG59O1xuXG5jb25zdCBwbGFjZUFsbFNoaXBzUmFuZG9tID0gKHNoaXBzLCBnYW1lYm9hcmQpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gcGxhY2VSYW5kb20oZ2FtZWJvYXJkLCBzaGlwKSk7XG59O1xuXG5leHBvcnQge1xuICBhdHRhY2tSYW5kb20sIHBsYWNlQWxsU2hpcHNSYW5kb20sIHNob3dBdHRhY2ssIERFRkFVTFRfU0hJUFMsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgY29uc3QgX2xlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IF90aW1lc0hpdCA9IDA7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmICghaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiArK190aW1lc0hpdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gX3RpbWVzSGl0ID09PSBfbGVuZ3RoO1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IF9sZW5ndGg7XG5cbiAgY29uc3QgZ2V0VGltZXNIaXQgPSAoKSA9PiBfdGltZXNIaXQ7XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsIGlzU3VuaywgZ2V0TGVuZ3RoLCBnZXRUaW1lc0hpdCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHBsYWNlU2hpcHMgfSBmcm9tICcuL2RyYWctYW5kLWRyb3AnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgLy8gQ3JlYXRlIG5ldyBwbGF5ZXJzXG4gIGNvbnN0IHBsYXllciA9IFBsYXllcigncGxheWVyJywgdHJ1ZSk7XG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdjb21wdXRlcicsIGZhbHNlKTtcbiAgcGxheWVyLnNldEVuZW15KGNvbXB1dGVyKTtcbiAgY29tcHV0ZXIuc2V0RW5lbXkocGxheWVyKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQocGxhY2VTaGlwcyhwbGF5ZXIsIGNvbXB1dGVyKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0YXJ0R2FtZSBmcm9tICcuL3NjcmlwdHMvc3RhcnQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9