"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cuenta_1 = require("./cuenta");
var lodash_1 = require("lodash");
var CajaDeAhorro = /** @class */ (function (_super) {
    __extends(CajaDeAhorro, _super);
    function CajaDeAhorro(numero, saldo, moneda, interes) {
        var _this = _super.call(this, numero, saldo, moneda) || this;
        _this.interes = interes;
        return _this;
    }
    CajaDeAhorro.prototype.aplicarInteres = function () {
        this.interes = lodash_1.random(1, 20);
        console.log('Aplicando interes:' + this.interes);
    };
    return CajaDeAhorro;
}(cuenta_1.Cuenta));
exports.CajaDeAhorro = CajaDeAhorro;
