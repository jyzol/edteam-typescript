"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelo_1 = require("./modelo");
var utils_1 = require("./modelo/utils");
var direccion01 = new modelo_1.Direccion('Peru', 'Callao', 'Colonial');
var cliente01 = new modelo_1.Cliente(1, 'Josue', direccion01);
utils_1.analizar(modelo_1.Cliente);
for (var propiedad in modelo_1.Cliente.prototype) {
    console.log('[Cliente]', propiedad);
}
var cuenta01 = new modelo_1.CajaDeAhorro(123, 0, 'USD', 0);
cliente01.agregaCuenta(cuenta01);
cuenta01.aplicarInteres();
cuenta01.aplicarInteres();
cuenta01.aplicarInteres();
