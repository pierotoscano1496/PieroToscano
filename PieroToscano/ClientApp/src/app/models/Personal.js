"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personal = void 0;
var Personal = /** @class */ (function () {
    function Personal(personal) {
        this._idPersonal = personal.idPersonal;
        this._apPaterno = personal.apPaterno;
        this._apMaterno = personal.apMaterno;
        this._nombre1 = personal.nombre1;
        this._nombre2 = personal.nombre2;
        this._nombreCompleto = personal.nombreCompleto;
        this._fchNac = personal.fchNac;
        this._fchIngreso = personal.fchIngreso;
    }
    Object.defineProperty(Personal.prototype, "idPersonal", {
        /**
         * Getter idPersonal
         * @return {number}
         */
        get: function () {
            return this._idPersonal;
        },
        /**
         * Setter idPersonal
         * @param {number} value
         */
        set: function (value) {
            this._idPersonal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personal.prototype, "apPaterno", {
        /**
         * Getter apPaterno
         * @return {string}
         */
        get: function () {
            return this._apPaterno;
        },
        /**
         * Setter apPaterno
         * @param {string} value
         */
        set: function (value) {
            this._apPaterno = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personal.prototype, "apMaterno", {
        /**
         * Getter apMaterno
         * @return {string}
         */
        get: function () {
            return this._apMaterno;
        },
        /**
         * Setter apMaterno
         * @param {string} value
         */
        set: function (value) {
            this._apMaterno = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personal.prototype, "nombre1", {
        /**
         * Getter nombre1
         * @return {string}
         */
        get: function () {
            return this._nombre1;
        },
        /**
         * Setter nombre1
         * @param {string} value
         */
        set: function (value) {
            this._nombre1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personal.prototype, "nombre2", {
        /**
         * Getter nombre2
         * @return {string}
         */
        get: function () {
            return this._nombre2;
        },
        /**
         * Setter nombre2
         * @param {string} value
         */
        set: function (value) {
            this._nombre2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personal.prototype, "nombreCompleto", {
        /**
         * Getter nombreCompleto
         * @return {string}
         */
        get: function () {
            return this._nombreCompleto;
        },
        /**
         * Setter nombreCompleto
         * @param {string} value
         */
        set: function (value) {
            this._nombreCompleto = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personal.prototype, "fchNac", {
        /**
         * Getter fchNac
         * @return {Date}
         */
        get: function () {
            return this._fchNac;
        },
        /**
         * Setter fchNac
         * @param {Date} value
         */
        set: function (value) {
            this._fchNac = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personal.prototype, "fchIngreso", {
        /**
         * Getter fchIngreso
         * @return {Date}
         */
        get: function () {
            return this._fchIngreso;
        },
        /**
         * Setter fchIngreso
         * @param {Date} value
         */
        set: function (value) {
            this._fchIngreso = value;
        },
        enumerable: false,
        configurable: true
    });
    return Personal;
}());
exports.Personal = Personal;
//# sourceMappingURL=Personal.js.map