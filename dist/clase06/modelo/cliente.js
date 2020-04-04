"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Cliente = /** @class */ (function () {
    function Cliente(codigo, nombre, direccion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cuenta = [];
    }
    Cliente.prototype.agregaCuenta = function (cuenta) {
        this.cuenta.push(cuenta);
    };
    __decorate([
        utils_1.enumerable(false)
    ], Cliente.prototype, "agregaCuenta", null);
    Cliente = __decorate([
        utils_1.Entidad({
            clave: 'CLIENTE'
        })
    ], Cliente);
    return Cliente;
}());
exports.Cliente = Cliente;
