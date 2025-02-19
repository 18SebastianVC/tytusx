"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPrim3D = exports.Primitiva3D = void 0;
class Primitiva3D {
    constructor(tipo, tipoPrimitiva, valor, codigo3D, fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
        this.tipo = tipo;
        this.tipoPrimitiva = tipoPrimitiva;
        this.codigo3D = codigo3D;
    }
    getCodigo3D() {
        return this.valor;
    }
    getValor() {
        return this.valor;
    }
    getTipoPrim3D() {
        return this.tipoPrimitiva;
    }
    getTipoExpresion() {
        return this.tipo;
    }
}
exports.Primitiva3D = Primitiva3D;
var TipoPrim3D;
(function (TipoPrim3D) {
    TipoPrim3D[TipoPrim3D["IDENTIFIER"] = 0] = "IDENTIFIER";
    TipoPrim3D[TipoPrim3D["DOUBLE"] = 1] = "DOUBLE";
    TipoPrim3D[TipoPrim3D["INTEGER"] = 2] = "INTEGER";
})(TipoPrim3D = exports.TipoPrim3D || (exports.TipoPrim3D = {}));
