"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hijo = void 0;
var Hijo = /** @class */ (function () {
    function Hijo(hijo) {
        if (hijo) {
            this._idDerhab = hijo.idDerhab;
            this._idPersonal = hijo.idPersonal;
            this._apPaterno = hijo.apPaterno;
            this._apMaterno = hijo.apMaterno;
            this._nombre1 = hijo.nombre1;
            this._nombre2 = hijo.nombre2;
            this._nombreCompleto = hijo.nombreCompleto;
            this._fchNac = hijo.fchNac;
        }
    }
    Object.defineProperty(Hijo.prototype, "idDerhab", {
        /**
         * Getter idDerhab
         * @return {number}
         */
        get: function () {
            return this._idDerhab;
        },
        /**
         * Setter idDerhab
         * @param {number} value
         */
        set: function (value) {
            this._idDerhab = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hijo.prototype, "idPersonal", {
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
    Object.defineProperty(Hijo.prototype, "apPaterno", {
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
    Object.defineProperty(Hijo.prototype, "apMaterno", {
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
    Object.defineProperty(Hijo.prototype, "nombre1", {
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
    Object.defineProperty(Hijo.prototype, "nombre2", {
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
    Object.defineProperty(Hijo.prototype, "nombreCompleto", {
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
    Object.defineProperty(Hijo.prototype, "fchNac", {
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
    Hijo.prototype.deserialize = function () {
        return {
            idDerhab: this._idDerhab,
            idPersonal: this._idPersonal,
            apPaterno: this._apPaterno,
            apMaterno: this._apMaterno,
            nombre1: this._nombre1,
            nombre2: this._nombre2,
            nombreCompleto: this._nombreCompleto,
            fchNac: this._fchNac
        };
    };
    return Hijo;
}());
exports.Hijo = Hijo;
//# sourceMappingURL=Hijo.js.map