"use strict";
exports.__esModule = true;
exports.Return = void 0;
var Return = /** @class */ (function () {
    function Return(Expresion, linea, columna) {
        this.Expresion = Expresion;
        this.linea = linea;
        this.columna = columna;
    }
    Return.prototype.ejecutar = function (Entorno) {
        throw new Error("Method not implemented.");
    };
    return Return;
}());
exports.Return = Return;
