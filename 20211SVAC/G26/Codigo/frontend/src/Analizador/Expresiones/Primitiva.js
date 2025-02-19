"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoPrim = exports.Primitiva = void 0;
const Entorno_1 = require("../AST/Entorno");
const Tipo_1 = require("../AST/Tipo");
const Consulta_1 = require("../XPath/Consulta");
class Primitiva {
    constructor(valor, tipo, linea, columna, isXQuery) {
        this.linea = linea;
        this.columna = columna;
        this.tipo = tipo;
        this.valor = valor;
        this.isXQuery = isXQuery;
    }
    getTipo(ent) {
        return this.tipo;
    }
    getValorInicial(ent) {
        return this.valor;
    }
    getValor(ent) {
        if (this.tipo === TipoPrim.IDENTIFIER) {
            /* SE BUSCAN LAS ETIQUETAS CON ESTE NOMBRE */
            if (ent.existeSimbolo(this.valor)) {
                return ent.obtenerSimbolo(this.valor);
            }
            else {
                //errores.agregarError('semantico', 'No existe el simbolo ' + this.valor, this.linea, this.columna);
                //this.tipo = TipoPrim.ERROR;
                return null;
            }
        }
        else if (this.tipo === TipoPrim.ATRIBUTO) {
            if (!this.isXQuery) {
                /* SE BUSCAN LOS ATRIBUTOS CON ESTE NOMBRE */
                this.tipo = TipoPrim.FUNCION;
                //0. Se devolver un entorno temporal, que contendra todos los que coinciden con la busqueda.
                let entTemporal = new Entorno_1.Entorno("Temporal", null, null);
                //1. Obtener el padre.
                let padre = ent.padre;
                //2. Sobre el padre buscar todos los que sean ent.nombre
                padre.tsimbolos.forEach((e) => {
                    let elem = e.valor;
                    if (elem.getTipo() === Tipo_1.Tipo.ETIQUETA && elem.getNombre() === ent.nombre) {
                        //Ahora en este entorno ver si tiene un atributo como el que se busca.
                        elem.valor.tsimbolos.forEach((c2) => {
                            let aux = c2.valor;
                            if (aux.getTipo() === Tipo_1.Tipo.ATRIBUTO && (this.valor === "*" || this.valor === aux.getNombre())) {
                                //Si se encuentra el atributo o es *, ingresar al entorno temporal
                                entTemporal.agregarSimbolo(elem.getNombre(), elem);
                            }
                        });
                    }
                });
                return entTemporal;
            }
            else {
                //Obtener solo si el atributo existe en este entorno (no buscar en el padre)
                let entTemporal = new Entorno_1.Entorno("Temporal", null, null);
                for (let i = 0; i < ent.tsimbolos.length; i++) {
                    let elem = ent.tsimbolos[i].valor;
                    if (elem.getTipo() === Tipo_1.Tipo.ATRIBUTO && elem.getNombre() === this.valor) {
                        entTemporal.agregarSimbolo(elem.getNombre(), elem);
                        return entTemporal;
                    }
                }
                return null;
            }
        }
        else if (this.tipo === TipoPrim.FUNCION) {
            //Si es funcion, ver de cual funcion se trata
            switch (this.valor.toLowerCase()) {
                case "last()":
                    //Para last, calcular sobre el entorno padre, cual es el numero del ultimo
                    //que tiene nombre como ent.nombre
                    //1. Obtener padre.
                    let padre = ent.padre;
                    //2. Sobre el padre, contar cual es el ultimo que tiene ent.nobmre
                    let indice = 0; //Se empieza en 0, por si no se encuentra devuelva 0. (y asi retornaria nada en la consulta)
                    padre.tsimbolos.forEach((e) => {
                        let elem = e.valor;
                        if (elem.getTipo() === Tipo_1.Tipo.ETIQUETA && elem.getNombre() === ent.nombre) {
                            //Se encontro, sumar al indice
                            indice++;
                        }
                    });
                    //3. al terminar devolver indice
                    //4. Cambiar su tipo a tipo INTEGER
                    this.tipo = TipoPrim.INTEGER;
                    if (indice > 0) {
                        return indice;
                    }
                    else {
                        return 0;
                    }
                default:
                    //Para position(), devolver lo mismo.
                    return this.valor;
            }
        }
        else if (this.tipo == TipoPrim.CONSULTA) {
            this.tipo = TipoPrim.FUNCION;
            //Consulta devuelve TRUE si la ruta existe
            //Es una lista de nodos. entonces crear una consulta 
            let tempConsulta = new Consulta_1.Consulta(this.valor, this.linea, this.columna);
            //Obtener padre, porque se deben buscar en todos los que tengan ent.nombre
            let entTemporal = new Entorno_1.Entorno("Temporal", null, null);
            let padre = ent.padre;
            padre.tsimbolos.forEach((e) => {
                let elem = e.valor;
                if (elem.getNombre() === ent.nombre) {
                    //Sobre este entorno ejecutar la consulta para ver si existe la ruta.
                    let result = tempConsulta.ejecutar(elem.valor);
                    if (result.length > 0) {
                        //La consulta si existe
                        entTemporal.agregarSimbolo(elem.getNombre(), elem);
                    }
                    else {
                    }
                }
            });
            return entTemporal;
        }
        else
            return this.valor;
    }
}
exports.Primitiva = Primitiva;
var TipoPrim;
(function (TipoPrim) {
    TipoPrim[TipoPrim["INTEGER"] = 0] = "INTEGER";
    TipoPrim[TipoPrim["DOUBLE"] = 1] = "DOUBLE";
    TipoPrim[TipoPrim["CADENA"] = 2] = "CADENA";
    TipoPrim[TipoPrim["IDENTIFIER"] = 3] = "IDENTIFIER";
    TipoPrim[TipoPrim["ATRIBUTO"] = 4] = "ATRIBUTO";
    TipoPrim[TipoPrim["DOT"] = 5] = "DOT";
    TipoPrim[TipoPrim["FUNCION"] = 6] = "FUNCION";
    TipoPrim[TipoPrim["BOOLEAN"] = 7] = "BOOLEAN";
    TipoPrim[TipoPrim["CONSULTA"] = 8] = "CONSULTA";
    TipoPrim[TipoPrim["ERROR"] = 9] = "ERROR";
    TipoPrim[TipoPrim["FUNCIONXQUERY"] = 10] = "FUNCIONXQUERY";
    TipoPrim[TipoPrim["XQUERYIDENTIFIER"] = 11] = "XQUERYIDENTIFIER";
    TipoPrim[TipoPrim["DECIMAL"] = 12] = "DECIMAL";
    TipoPrim[TipoPrim["VOID"] = 13] = "VOID";
})(TipoPrim = exports.TipoPrim || (exports.TipoPrim = {}));
