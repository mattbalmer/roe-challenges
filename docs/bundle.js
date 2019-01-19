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
/***/ (function(module, exports) {



/***/ }),

/***/ "./source/data/dione.ts":
/*!******************************!*\
  !*** ./source/data/dione.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __webpack_require__(/*! types */ "./source/types.ts");
const _ = {
    pack: (name, weapon) => ({ name, weapon }),
    weapon: (name, type, ammo, crate = false) => ({ name, type, ammo, crate }),
};
exports.smgs = {
    'MPX': _.weapon('MPX', types_1.WeaponType.SMG, types_1.Ammo._9),
    'MP5': _.weapon('MP5', types_1.WeaponType.SMG, types_1.Ammo._9),
    'VECTOR': _.weapon('VECTOR', types_1.WeaponType.SMG, types_1.Ammo._45),
};
exports.shotguns = {
    'REMINGTON 870': _.weapon('REMINGTON 870', types_1.WeaponType.SHOTGUN, types_1.Ammo._12),
    'ORIGIN': _.weapon('ORIGIN', types_1.WeaponType.SHOTGUN, types_1.Ammo._12),
};
exports.pistols = {
    'DEAGLE': _.weapon('DEAGLE', types_1.WeaponType.PISTOL, types_1.Ammo._50),
};
exports.ars = {
    'M4': _.weapon('M4', types_1.WeaponType.AR, types_1.Ammo._556),
    'LVOAC': _.weapon('LVOAC', types_1.WeaponType.AR, types_1.Ammo._556),
    'FAMAS': _.weapon('FAMAS', types_1.WeaponType.AR, types_1.Ammo._556),
    'AK': _.weapon('AK', types_1.WeaponType.AR, types_1.Ammo._762),
    'GROZA': _.weapon('GROZA', types_1.WeaponType.AR, types_1.Ammo._762),
    'AUG': _.weapon('AUG', types_1.WeaponType.AR, types_1.Ammo._556, true),
};
exports.snipers = {
    'G28': _.weapon('G28', types_1.WeaponType.SNIPER, types_1.Ammo._762),
    'MK12': _.weapon('MK12', types_1.WeaponType.SNIPER, types_1.Ammo._556),
    'REMINGTON 700': _.weapon('REMINGTON 700', types_1.WeaponType.SNIPER, types_1.Ammo._556),
    'MOSIN': _.weapon('MOSIN', types_1.WeaponType.SNIPER, types_1.Ammo._762),
    'M200': _.weapon('M200', types_1.WeaponType.SNIPER, types_1.Ammo._408, true),
    'VKS': _.weapon('VKS', types_1.WeaponType.SNIPER, types_1.Ammo._50, true),
};
exports.packs = {
    GLIDER: _.pack('GLIDER', _.weapon('GLOCK', types_1.WeaponType.PISTOL, types_1.Ammo._9)),
    SKI: _.pack('SKI', _.weapon('USP', types_1.WeaponType.PISTOL, types_1.Ammo._45)),
    CLIMB: _.pack('CLIMB', _.weapon('CITORI', types_1.WeaponType.SHOTGUN, types_1.Ammo._12)),
};


/***/ }),

/***/ "./source/data/europa.ts":
/*!*******************************!*\
  !*** ./source/data/europa.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = __webpack_require__(/*! types */ "./source/types.ts");
const _ = {
    pack: (name, weapon) => ({ name, weapon }),
    weapon: (name, type, ammo, crate = false) => ({ name, type, ammo, crate }),
};
exports.smgs = {
    'MPX': _.weapon('MPX', types_1.WeaponType.SMG, types_1.Ammo._9),
    'MP5': _.weapon('MP5', types_1.WeaponType.SMG, types_1.Ammo._9),
    'VECTOR': _.weapon('VECTOR', types_1.WeaponType.SMG, types_1.Ammo._45),
};
exports.shotguns = {
    'REMINGTON 870': _.weapon('REMINGTON 870', types_1.WeaponType.SHOTGUN, types_1.Ammo._12),
    'ORIGIN': _.weapon('ORIGIN', types_1.WeaponType.SHOTGUN, types_1.Ammo._12),
};
exports.pistols = {
    'DEAGLE': _.weapon('DEAGLE', types_1.WeaponType.PISTOL, types_1.Ammo._50),
};
exports.lmgs = {
    'PKM': _.weapon('PKM', types_1.WeaponType.LMG, types_1.Ammo._762),
    'MG4': _.weapon('MG4', types_1.WeaponType.LMG, types_1.Ammo._556, true),
};
exports.ars = {
    'M4': _.weapon('M4', types_1.WeaponType.AR, types_1.Ammo._556),
    'LVOAC': _.weapon('LVOAC', types_1.WeaponType.AR, types_1.Ammo._556),
    'FAMAS': _.weapon('FAMAS', types_1.WeaponType.AR, types_1.Ammo._556),
    'AK': _.weapon('AK', types_1.WeaponType.AR, types_1.Ammo._762),
    'GROZA': _.weapon('GROZA', types_1.WeaponType.AR, types_1.Ammo._762),
    'AUG': _.weapon('AUG', types_1.WeaponType.AR, types_1.Ammo._556, true),
};
exports.snipers = {
    'G28': _.weapon('G28', types_1.WeaponType.SNIPER, types_1.Ammo._762),
    'MK12': _.weapon('MK12', types_1.WeaponType.SNIPER, types_1.Ammo._556),
    'REMINGTON 700': _.weapon('REMINGTON 700', types_1.WeaponType.SNIPER, types_1.Ammo._556),
    'MOSIN': _.weapon('MOSIN', types_1.WeaponType.SNIPER, types_1.Ammo._762),
    'M200': _.weapon('M200', types_1.WeaponType.SNIPER, types_1.Ammo._408, true),
    'VKS': _.weapon('VKS', types_1.WeaponType.SNIPER, types_1.Ammo._50, true),
};
exports.packs = {
    GLIDER: _.pack('GLIDER', _.weapon('GLOCK', types_1.WeaponType.PISTOL, types_1.Ammo._9)),
    BMX: _.pack('BMX', _.weapon('USP', types_1.WeaponType.PISTOL, types_1.Ammo._45)),
    GRAPPLE: _.pack('GRAPPLE', _.weapon('CITORI', types_1.WeaponType.SHOTGUN, types_1.Ammo._12)),
};


/***/ }),

/***/ "./source/data/maps.ts":
/*!*****************************!*\
  !*** ./source/data/maps.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const dione = __webpack_require__(/*! ./dione */ "./source/data/dione.ts");
const europa = __webpack_require__(/*! ./europa */ "./source/data/europa.ts");
exports.MAPS = {
    DIONE: {
        name: 'Dione',
        data: dione,
    },
    EUROPA: {
        name: 'Europa',
        data: europa,
    },
};
exports.MAP_LIST = [
    exports.MAPS.DIONE,
    exports.MAPS.EUROPA,
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
const maps_1 = __webpack_require__(/*! data/maps */ "./source/data/maps.ts");
const storage_1 = __webpack_require__(/*! storage */ "./source/storage.ts");
const buttonEl = document.querySelector('#generate');
const outputEl = document.querySelector('#output');
const mapEl = document.querySelector('#map');
let mapPointer = maps_1.MAP_LIST.indexOf(storage_1.capsule.get('map'));
let map = maps_1.MAP_LIST[mapPointer];
mapEl.textContent = map.name;
const renderWeapon = (weapon) => {
    return `<span class="weapon-ammo-${weapon.ammo} weapon-type-${weapon.type.toLowerCase()}">${weapon.name}</span>`;
};
const renderEntry = (challenge) => {
    const id = `<span class="id">#${challenges_1.newID()}:</span>`;
    const map = `<span class="map map-${challenge.map.toLowerCase()}">[${challenge.map}]</span>`;
    const pack = `<span class="pack pack-type-${challenge.pack.name.toLowerCase()}"></span>`;
    const weapons = challenge.weapons.map(renderWeapon).join(', ');
    return `<li class="entry">${map} ${pack} ${weapons}</li>`;
};
buttonEl.addEventListener('click', (e) => {
    e.preventDefault();
    const challenge = challenges_1.generate(map);
    outputEl.innerHTML = `${renderEntry(challenge)}${outputEl.innerHTML}`;
});
mapEl.addEventListener('click', (e) => {
    e.preventDefault();
    mapPointer++;
    if (mapPointer >= maps_1.MAP_LIST.length) {
        mapPointer = 0;
    }
    map = maps_1.MAP_LIST[mapPointer];
    mapEl.textContent = map.name;
});


/***/ }),

/***/ "./source/lib/capsule.ts":
/*!*******************************!*\
  !*** ./source/lib/capsule.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Capsule {
    constructor(prefix, data) {
        this.prefix = prefix || '';
        this.keys = new Set();
        this.setDefaults(data);
        this.sync();
    }
    setDefaults(data = {}) {
        for (let key in data) {
            if (data.hasOwnProperty(key) && !this.has(key)) {
                this.set(key, data[key]);
            }
        }
    }
    sync() {
        for (let pre_key in localStorage) {
            if (localStorage.hasOwnProperty(pre_key)) {
                if (pre_key.indexOf(this.prefix) == 0) {
                    let key = this.unprefixKey_(pre_key);
                    this.keys.add(key);
                }
            }
        }
    }
    unprefixKey_(pre_key) {
        return pre_key.replace(new RegExp(`${this.prefix}_`), '');
    }
    prefixKey_(key) {
        return `${this.prefix}_${key}`;
    }
    has(key) {
        const pre_key = this.prefixKey_(key);
        return localStorage.hasOwnProperty(pre_key);
    }
    set(key, value) {
        const pre_key = this.prefixKey_(key);
        this.keys.add(key);
        try {
            localStorage.setItem(pre_key, JSON.stringify({ '__data__': value }));
        }
        catch (e) {
            console.warn(`Capsule didn't successfully save the '{ ${key}: ${value} }' pair, because the localStorage is full.`);
        }
    }
    get(key, default_ = undefined) {
        const pre_key = this.prefixKey_(key);
        let value;
        if (!localStorage.hasOwnProperty(pre_key)) {
            return default_;
        }
        try {
            let raw = JSON.parse(localStorage.getItem(pre_key));
            value = raw.__data__;
            return value;
        }
        catch (e) {
            console.warn(`Capsule could not load the item with key: ${key}`);
            return default_;
        }
    }
    remove(key) {
        const pre_key = this.prefixKey_(key);
        this.keys.delete(key);
        localStorage.removeItem(pre_key);
    }
    flush() {
        Array.from(this.keys).forEach((key) => {
            this.remove(key);
        });
    }
}
exports.Capsule = Capsule;


/***/ }),

/***/ "./source/storage.ts":
/*!***************************!*\
  !*** ./source/storage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const capsule_1 = __webpack_require__(/*! lib/capsule */ "./source/lib/capsule.ts");
const maps_1 = __webpack_require__(/*! data/maps */ "./source/data/maps.ts");
const capsule = new capsule_1.Capsule(`roe-challenges`, {
    map: maps_1.MAPS.DIONE.name,
});
exports.capsule = capsule;


/***/ }),

/***/ "./source/types.ts":
/*!*************************!*\
  !*** ./source/types.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map