"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// target -> Clase Cliente
function Entidad(config) {
    console.log('{Entidad}config', config);
    return function (target) {
        target.clave = config.clave;
        console.log('target', target);
    };
}
exports.Entidad = Entidad;
// target -> agregarCuenta
function enumerable(config) {
    return function (target, propertyKey, descriptor) {
        console.log('[enumerable]target', target);
        descriptor.enumerable = config;
    };
}
exports.enumerable = enumerable;
function analizar(clase) {
    console.log('{analizar}', clase.clave);
}
exports.analizar = analizar;
