/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Squada+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\n.container {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  color: #fff;\n  scroll-behavior: smooth;\n}\n.container {\n  position: relative;\n}\nbody {\n  background-color: #101010;\n}\n.title {\n  font-size: 2.5em;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  position: relative;\n  top: 0px;\n  animation: flicker 1.5s infinite alternate;\n}\n@keyframes flicker {\n  0%,\n  18%,\n  22%,\n  25%,\n  53%,\n  57%,\n  100% {\n    text-shadow:\n      0 0 4px rgb(255, 0, 0),\n      0 0 11px rgb(255, 0, 0),\n      0 0 19px rgb(255, 0, 0),\n      0 0 40px rgb(255, 0, 0),\n      0 0 80px rgb(255, 0, 0),\n      0 0 90px rgb(255, 0, 0),\n      0 0 100px rgb(255, 0, 0),\n      0 0 150px rgb(255, 0, 0),\n      0 0 200px rgb(255, 0, 0),\n      0 0 250px rgb(255, 0, 0),\n      0 0 300px rgb(255, 0, 0),\n      0 0 350px rgb(255, 0, 0),\n      0 0 400px rgb(255, 0, 0),\n      0 0 420px rgb(255, 0, 0),\n      0 0 450px rgb(255, 0, 0);\n  }\n\n  20%,\n  24%,\n  55% {\n    text-shadow: none;\n  }\n}\n.nav-list {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  list-style-type: none;\n  padding: 0;\n}\n.nav-list li {\n  font-size: 1.5em;\n  position: relative;\n}\n.nav-list li a {\n  text-decoration: none;\n  color: black;\n  font-family: 'Squada One', cursive;\n  cursor: pointer;\n  color: #fff;\n}\n.active::before {\n  content: \"\";\n  position: absolute;\n  top: -15px;\n  left: 50%;\n  margin-left: -15px;\n  width: 25px;\n  height: 10px;\n  border-top-left-radius: 110px;\n  border-top-right-radius: 110px;\n  border: 3px solid rgb(250, 187, 79);\n}\n.active::after {\n  content: \"\";\n  position: absolute;\n  top: 30px;\n  left: 50%;\n  margin-left: -15px;\n  width: 25px;\n  height: 10px;\n  border-bottom-left-radius: 110px;\n  border-bottom-right-radius: 110px;\n  border: 3px solid rgb(250, 187, 79);\n}\n.home-div {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 30px;\n}\n.home-text {\n  position: relative;\n  font-family: 'Squada One', cursive;\n  text-align: right;\n  max-width: 40vw;\n  font-size: 8vw;\n  color: rgb(187, 186, 186);\n  filter: drop-shadow(7px 7px 7px rgb(73, 73, 73));\n  animation: fadeInText 2s;\n  -webkit-animation: fadeInText 2s;\n  -moz-animation: fadeInText 2s;\n  -o-animation: fadeInText 2s;\n  -ms-animation: fadeInText 2s;\n}\n@keyframes fadeInText {\n  0% {\n    opacity: 0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.home-img {\n  position: relative;\n  width: clamp(200px, 700px, 50vw);\n  filter: brightness(80%);\n  filter: drop-shadow(-15px 20px 8px rgb(34, 31, 27));\n  z-index: 99;\n  margin-left: -5%;\n  animation: fadeInImg 2s;\n  -webkit-animation: fadeInImg 2s;\n  -moz-animation: fadeInImg 2s;\n  -o-animation: fadeInImg 2s;\n  -ms-animation: fadeInImg 2s;\n}\n@keyframes fadeInImg {\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.menu-div {\n  position: relative;\n  top: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  animation: fadeInMenu 1s;\n  -webkit-animation: fadeInMenu 1s;\n  -moz-animation: fadeInMenu 1s;\n  -o-animation: fadeInMenu 1s;\n  -ms-animation: fadeInMenu 1s;\n}\n@keyframes fadeInMenu {\n  0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n.menu-item {\n  width: 350px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content:end;\n  align-items: center;\n  filter: brightness(30%);\n  cursor: pointer;\n}\n.menu-item:hover {\n  filter: none;\n  transition: 0.3s ease-in-out;\n}\n.menu-img {\n  width: 300px;\n}\n.menu-text {\n  font-family: 'Squada One', cursive;\n  font-size: 2em;\n}\n.contact-div {\n  position: relative;\n  top: 40px;\n  animation: fadeInMenu 1s;\n    -webkit-animation: fadeInMenu 1s;\n    -moz-animation: fadeInMenu 1s;\n    -o-animation: fadeInMenu 1s;\n    -ms-animation: fadeInMenu 1s;\n  }\n  @keyframes fadeInMenu {\n    0% {\n      opacity: 0;\n    }\n  \n    100% {\n      opacity: 1;\n    }\n  }\n.contact-item {\n  width: 40vw;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgb(250, 187, 79);\n}\n.contact-header {\n  font-family: 'Squada One', cursive;\n  font-size: 2em;\n}\n.contact-text {\n  font-family: 'Squada One', cursive;\n  font-weight: 400;\n  font-size: 1.5em;\n}\nfooter {\n  position: fixed;\n  bottom: 8px;\n  left: 10px;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  font-family: 'Squada One', cursive;\n  color: rgb(139, 139, 139);\n  font-size: em;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');\n\nhtml,\nbody,\n.container {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  color: #fff;\n  scroll-behavior: smooth;\n}\n.container {\n  position: relative;\n}\nbody {\n  background-color: #101010;\n}\n.title {\n  font-size: 2.5em;\n  text-align: center;\n  font-family: 'Dancing Script', cursive;\n  position: relative;\n  top: 0px;\n  animation: flicker 1.5s infinite alternate;\n}\n@keyframes flicker {\n  0%,\n  18%,\n  22%,\n  25%,\n  53%,\n  57%,\n  100% {\n    text-shadow:\n      0 0 4px rgb(255, 0, 0),\n      0 0 11px rgb(255, 0, 0),\n      0 0 19px rgb(255, 0, 0),\n      0 0 40px rgb(255, 0, 0),\n      0 0 80px rgb(255, 0, 0),\n      0 0 90px rgb(255, 0, 0),\n      0 0 100px rgb(255, 0, 0),\n      0 0 150px rgb(255, 0, 0),\n      0 0 200px rgb(255, 0, 0),\n      0 0 250px rgb(255, 0, 0),\n      0 0 300px rgb(255, 0, 0),\n      0 0 350px rgb(255, 0, 0),\n      0 0 400px rgb(255, 0, 0),\n      0 0 420px rgb(255, 0, 0),\n      0 0 450px rgb(255, 0, 0);\n  }\n\n  20%,\n  24%,\n  55% {\n    text-shadow: none;\n  }\n}\n.nav-list {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  list-style-type: none;\n  padding: 0;\n}\n.nav-list li {\n  font-size: 1.5em;\n  position: relative;\n}\n.nav-list li a {\n  text-decoration: none;\n  color: black;\n  font-family: 'Squada One', cursive;\n  cursor: pointer;\n  color: #fff;\n}\n.active::before {\n  content: \"\";\n  position: absolute;\n  top: -15px;\n  left: 50%;\n  margin-left: -15px;\n  width: 25px;\n  height: 10px;\n  border-top-left-radius: 110px;\n  border-top-right-radius: 110px;\n  border: 3px solid rgb(250, 187, 79);\n}\n.active::after {\n  content: \"\";\n  position: absolute;\n  top: 30px;\n  left: 50%;\n  margin-left: -15px;\n  width: 25px;\n  height: 10px;\n  border-bottom-left-radius: 110px;\n  border-bottom-right-radius: 110px;\n  border: 3px solid rgb(250, 187, 79);\n}\n.home-div {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 30px;\n}\n.home-text {\n  position: relative;\n  font-family: 'Squada One', cursive;\n  text-align: right;\n  max-width: 40vw;\n  font-size: 8vw;\n  color: rgb(187, 186, 186);\n  filter: drop-shadow(7px 7px 7px rgb(73, 73, 73));\n  animation: fadeInText 2s;\n  -webkit-animation: fadeInText 2s;\n  -moz-animation: fadeInText 2s;\n  -o-animation: fadeInText 2s;\n  -ms-animation: fadeInText 2s;\n}\n@keyframes fadeInText {\n  0% {\n    opacity: 0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.home-img {\n  position: relative;\n  width: clamp(200px, 700px, 50vw);\n  filter: brightness(80%);\n  filter: drop-shadow(-15px 20px 8px rgb(34, 31, 27));\n  z-index: 99;\n  margin-left: -5%;\n  animation: fadeInImg 2s;\n  -webkit-animation: fadeInImg 2s;\n  -moz-animation: fadeInImg 2s;\n  -o-animation: fadeInImg 2s;\n  -ms-animation: fadeInImg 2s;\n}\n@keyframes fadeInImg {\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.menu-div {\n  position: relative;\n  top: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  animation: fadeInMenu 1s;\n  -webkit-animation: fadeInMenu 1s;\n  -moz-animation: fadeInMenu 1s;\n  -o-animation: fadeInMenu 1s;\n  -ms-animation: fadeInMenu 1s;\n}\n@keyframes fadeInMenu {\n  0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n.menu-item {\n  width: 350px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content:end;\n  align-items: center;\n  filter: brightness(30%);\n  cursor: pointer;\n}\n.menu-item:hover {\n  filter: none;\n  transition: 0.3s ease-in-out;\n}\n.menu-img {\n  width: 300px;\n}\n.menu-text {\n  font-family: 'Squada One', cursive;\n  font-size: 2em;\n}\n.contact-div {\n  position: relative;\n  top: 40px;\n  animation: fadeInMenu 1s;\n    -webkit-animation: fadeInMenu 1s;\n    -moz-animation: fadeInMenu 1s;\n    -o-animation: fadeInMenu 1s;\n    -ms-animation: fadeInMenu 1s;\n  }\n  @keyframes fadeInMenu {\n    0% {\n      opacity: 0;\n    }\n  \n    100% {\n      opacity: 1;\n    }\n  }\n.contact-item {\n  width: 40vw;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgb(250, 187, 79);\n}\n.contact-header {\n  font-family: 'Squada One', cursive;\n  font-size: 2em;\n}\n.contact-text {\n  font-family: 'Squada One', cursive;\n  font-weight: 400;\n  font-size: 1.5em;\n}\nfooter {\n  position: fixed;\n  bottom: 8px;\n  left: 10px;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  font-family: 'Squada One', cursive;\n  color: rgb(139, 139, 139);\n  font-size: em;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startContact": () => (/* binding */ startContact)
/* harmony export */ });
function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");

  // first contact
  const contactItem1 = document.createElement("div");
  contactItem1.classList.add("contact-item");

  const addressHeader = document.createElement("p");
  addressHeader.classList.add("contact-header");
  addressHeader.textContent = "Postal Address";
  const addressText = document.createElement("p");
  addressText.textContent = "Brooklyn 99";
  addressText.classList.add("contact-text");

  // second contact
  const contactItem2 = document.createElement("div");
  contactItem2.classList.add("contact-item");

  const phoneHeader = document.createElement("p");
  phoneHeader.classList.add("contact-header");
  phoneHeader.textContent = "Phone";
  const phoneText = document.createElement("p");
  phoneText.textContent = "+123-456-789";
  phoneText.classList.add("contact-text");

  // third contact
  const contactItem3 = document.createElement("div");
  contactItem3.classList.add("contact-item");

  const emailHeader = document.createElement("p");
  emailHeader.classList.add("contact-header");
  emailHeader.textContent = "Email";
  const emailText = document.createElement("p");
  emailText.textContent = "jaysburgers@gmail.com";
  emailText.classList.add("contact-text");

  contactItem1.appendChild(addressHeader);
  contactItem1.appendChild(addressText);

  contactItem2.appendChild(phoneHeader);
  contactItem2.appendChild(phoneText);

  contactItem3.appendChild(emailHeader);
  contactItem3.appendChild(emailText);

  contactDiv.appendChild(contactItem1);
  contactDiv.appendChild(contactItem2);
  contactDiv.appendChild(contactItem3);

  return contactDiv;
}

function startContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(createContact());
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startHome": () => (/* binding */ startHome)
/* harmony export */ });
/* harmony import */ var _assets_home_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/home-img.png */ "./src/assets/home-img.png");


function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-div");

  const homeText = document.createElement("div");
  homeText.classList.add("home-text");
  homeText.innerHTML = "Premium and Authentic Burgers";

  const homeImg = document.createElement("img");
  homeImg.classList.add("home-img");
  homeImg.src = _assets_home_img_png__WEBPACK_IMPORTED_MODULE_0__;

  homeDiv.appendChild(homeText);
  homeDiv.appendChild(homeImg);

  return homeDiv;
}

function startHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(createHome());
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startMenu": () => (/* binding */ startMenu)
/* harmony export */ });
/* harmony import */ var _assets_classic_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/classic-burger.png */ "./src/assets/classic-burger.png");
/* harmony import */ var _assets_xxl_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/xxl-burger.png */ "./src/assets/xxl-burger.png");
/* harmony import */ var _assets_jays_signature_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/jays-signature-burger.png */ "./src/assets/jays-signature-burger.png");
/* harmony import */ var _assets_fried_chicken_burger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fried-chicken-burger.png */ "./src/assets/fried-chicken-burger.png");





function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");

  // first burger
  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");

  const classicBurgerImg = document.createElement("img");
  classicBurgerImg.classList.add("menu-img");
  classicBurgerImg.src = _assets_classic_burger_png__WEBPACK_IMPORTED_MODULE_0__;

  const classicBurgerText = document.createElement("p");
  classicBurgerText.classList.add("menu-text");
  classicBurgerText.textContent = "Classic Burger";

  menuItem1.appendChild(classicBurgerImg);
  menuItem1.appendChild(classicBurgerText);

  // second burger
  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");

  const xxlBurgerImg = document.createElement("img");
  xxlBurgerImg.classList.add("menu-img");
  xxlBurgerImg.src = _assets_xxl_burger_png__WEBPACK_IMPORTED_MODULE_1__;

  const xxlBurgerText = document.createElement("p");
  xxlBurgerText.classList.add("menu-text");
  xxlBurgerText.textContent = "XXL Burger";

  menuItem2.appendChild(xxlBurgerImg);
  menuItem2.appendChild(xxlBurgerText);

  // third burger
  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");

  const jaysSignatureImg = document.createElement("img");
  jaysSignatureImg.classList.add("menu-img");
  jaysSignatureImg.src = _assets_jays_signature_burger_png__WEBPACK_IMPORTED_MODULE_2__;

  const jaysSignatureText = document.createElement("p");
  jaysSignatureText.classList.add("menu-text");
  jaysSignatureText.textContent = "Jay's Signature Burger";

  menuItem3.appendChild(jaysSignatureImg);
  menuItem3.appendChild(jaysSignatureText);

  // fourth burger
  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");

  const friedChickenBurgerImg = document.createElement("img");
  friedChickenBurgerImg.classList.add("menu-img");
  friedChickenBurgerImg.src = _assets_fried_chicken_burger_png__WEBPACK_IMPORTED_MODULE_3__;

  const friedChickenBurgerText = document.createElement("p");
  friedChickenBurgerText.classList.add("menu-text");
  friedChickenBurgerText.textContent = "Fried Chicken Burger";

  menuItem4.appendChild(friedChickenBurgerImg);
  menuItem4.appendChild(friedChickenBurgerText);

  menuDiv.appendChild(menuItem1);
  menuDiv.appendChild(menuItem2);
  menuDiv.appendChild(menuItem3);
  menuDiv.appendChild(menuItem4);

  return menuDiv;
}

function startMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(createMenu());
}


/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function createTitle() {
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "Jay's Burgers";

  return title;
}

function createNav() {
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  navList.classList.add("nav-list");
  nav.appendChild(navList);

  const homeNav = document.createElement("li");
  const homeLink = document.createElement("a");
  homeLink.classList.add("nav-item");
  homeLink.innerHTML = "home";
  homeLink.classList.add("active");
  navList.appendChild(homeNav);
  homeNav.appendChild(homeLink);

  const menuNav = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.classList.add("nav-item");
  menuLink.innerHTML = "menu";
  navList.appendChild(menuNav);
  menuNav.appendChild(menuLink);

  const contactNav = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.classList.add("nav-item");
  contactLink.innerHTML = "contact";
  navList.appendChild(contactNav);
  contactNav.appendChild(contactLink);

  homeLink.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      return;
    }
    removeActive();
    event.target.classList.add("active");
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.startHome)();
  });

  menuLink.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      return;
    }
    removeActive();
    event.target.classList.add("active");
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.startMenu)();
  });

  contactLink.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      return;
    }
    removeActive();
    event.target.classList.add("active");
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.startContact)();
  });

  return nav;
}

function removeActive() {
  const navItems = [...document.querySelectorAll(".nav-item")];

  navItems.forEach((link) => {
    link.classList.remove("active");
  });
}

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.setAttribute("id", "content");

  return content;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = "created by jaysan0";

  return footer;
}

function startSite() {
  const container = document.getElementById("container");
  const body = document.querySelector("body");

  container.appendChild(createTitle());
  container.appendChild(createNav());
  container.appendChild(createContent());
  body.appendChild(createFooter());

  (0,_home__WEBPACK_IMPORTED_MODULE_1__.startHome)();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startSite);


/***/ }),

/***/ "./src/assets/classic-burger.png":
/*!***************************************!*\
  !*** ./src/assets/classic-burger.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "classic-burger.png";

/***/ }),

/***/ "./src/assets/fried-chicken-burger.png":
/*!*********************************************!*\
  !*** ./src/assets/fried-chicken-burger.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fried-chicken-burger.png";

/***/ }),

/***/ "./src/assets/home-img.png":
/*!*********************************!*\
  !*** ./src/assets/home-img.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home-img.png";

/***/ }),

/***/ "./src/assets/jays-signature-burger.png":
/*!**********************************************!*\
  !*** ./src/assets/jays-signature-burger.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "jays-signature-burger.png";

/***/ }),

/***/ "./src/assets/xxl-burger.png":
/*!***********************************!*\
  !*** ./src/assets/xxl-burger.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "xxl-burger.png";

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
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ "./src/site.js");


(0,_site__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.763f27787d6da6314fe6.js.map