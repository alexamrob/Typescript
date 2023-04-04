"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.Calle = calle;
        this.Numero = numero;
        this.Piso = piso;
        this.Letra = letra;
        this.CodigoPostal = codigoPostal;
        this.Poblacion = poblacion;
        this.Provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this.Calle;
        },
        set: function (value) {
            this.Calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this.Numero;
        },
        set: function (value) {
            this.Numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this.Piso;
        },
        set: function (value) {
            this.Piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this.Letra;
        },
        set: function (value) {
            this.Letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "codigoPostal", {
        get: function () {
            return this.CodigoPostal;
        },
        set: function (value) {
            this.CodigoPostal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this.Poblacion;
        },
        set: function (value) {
            this.Poblacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this.Provincia;
        },
        set: function (value) {
            this.Provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
