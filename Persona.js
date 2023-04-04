"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.Edad = edad;
        this.DNI = dni;
        this.Cumpleanos = cumpleanos;
        this.ColorFavorito = colorFavorito;
        this.Sexo = sexo;
        this.Direcciones = [];
        this.Mails = [];
        this.Telefonos = [];
        this.Direcciones.push(direcciones);
        this.Mails.push(mails);
        this.Telefonos.push(telefonos);
        this.Notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this.Nombre;
        },
        set: function (value) {
            this.Nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this.Apellidos;
        },
        set: function (value) {
            this.Apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this.Edad;
        },
        set: function (value) {
            this.Edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this.DNI;
        },
        set: function (value) {
            this.DNI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanos", {
        get: function () {
            return this.Cumpleanos;
        },
        set: function (value) {
            this.Cumpleanos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this.ColorFavorito;
        },
        set: function (value) {
            this.ColorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this.Sexo;
        },
        set: function (value) {
            this.Sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this.Direcciones;
        },
        set: function (value) {
            this.Direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this.Mails;
        },
        set: function (value) {
            this.Mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this.Telefonos;
        },
        set: function (value) {
            this.Telefonos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this.Notas;
        },
        set: function (value) {
            this.Notas = value;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
