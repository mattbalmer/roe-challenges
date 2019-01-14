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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/challenges.ts":
/*!******************************!*\
  !*** ./source/challenges.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(/*! utils */ "./source/utils.ts");
const data_1 = __webpack_require__(/*! data */ "./source/data.ts");
let id = 0;
exports.newID = () => {
    return ++id;
};
exports.random = () => {
    const pack = utils_1.randEntry(data_1.packs);
    const starterWeapon = data_1.starterWeapons[pack];
    const randWeapons = utils_1.randSubset([
        ...utils_1.randSubset(data_1.pistols, 0, 1),
        ...utils_1.randSubset(data_1.shotguns, 1, 2),
        ...utils_1.randSubset(data_1.smgs, 1, 2),
        ...utils_1.randSubset(data_1.ars, 1, 2),
        ...utils_1.randSubset(data_1.snipers, 1, 2),
    ], 2, 4);
    const weapons = [starterWeapon, ...randWeapons];
    return { pack, weapons };
};
exports.stringify = (output) => `${output.pack} pack, using only: ${output.weapons.join(', ')}`;


/***/ }),

/***/ "./source/data.ts":
/*!************************!*\
  !*** ./source/data.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.packs = [
    'GLIDER',
    'SKI',
    'CLIMB',
];
exports.starterWeapons = {
    'GLIDER': 'GLOCK',
    'SKI': 'USP',
    'CLIMB': 'CITORI',
};
exports.smgs = [
    'MPX',
    'MP5',
    'VECTOR',
];
exports.shotguns = [
    'REMINGTON SHOTGUN',
    'ORIGIN',
];
exports.pistols = [
    'DEAGLE',
];
exports.ars = [
    'M4',
    'LVOAC',
    'AK',
    'GROZA',
    'FAMAS',
    'AUG',
];
exports.snipers = [
    'G28',
    'MK12',
    'M200',
    'REMINGTON SNIPER',
    'MSR',
    'MOSIN',
    'VKS',
];


/***/ }),

/***/ "./source/index.ts":
/*!*************************!*\
  !*** ./source/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const challenges_1 = __webpack_require__(/*! challenges */ "./source/challenges.ts");
const button = document.querySelector('#generate');
const output = document.querySelector('#output');
const generateLI = (result) => {
    const id = challenges_1.newID();
    return `<li>#${id}: ${challenges_1.stringify(result)}</li>`;
};
button.addEventListener('click', (e) => {
    e.preventDefault();
    const result = challenges_1.random();
    output.innerHTML = `${generateLI(result)}${output.innerHTML}`;
});


/***/ }),

/***/ "./source/utils.ts":
/*!*************************!*\
  !*** ./source/utils.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.randInt = (low, high) => Math.round(Math.random() * (high - low) + low);
exports.randEntry = (list) => {
    const i = exports.randInt(0, list.length - 1);
    return list[i];
};
exports.randSubset = function (list, min, max) {
    if (arguments.length === 2) {
        max = min;
    }
    if (arguments.length === 1) {
        min = max = exports.randInt(0, list.length - 1);
    }
    const length = exports.randInt(min, max);
    const from = list.slice(0);
    const sub = [];
    for (let i = 0; i < length; i++) {
        const rand = exports.randInt(0, from.length - 1);
        const e = from.splice(rand, 1)[0];
        sub.push(e);
    }
    return sub;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map