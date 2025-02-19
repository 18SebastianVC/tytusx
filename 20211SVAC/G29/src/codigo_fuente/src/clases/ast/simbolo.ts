import { expresion } from "../interfaces/expresion";
import { ast } from "./ast";
import { entorno } from "./entorno";
import { tipo } from "./tipo";

export class simbolo implements expresion{
    public id: string
    public valor: any
    public tipo: tipo
    public linea: number
    public columna: number
    constructor(id,valor,tipo,linea,columna){
        this.id = id
        this.valor = valor
        this.tipo = tipo
        this.linea = linea
        this.columna = columna
    }
    getTipo(ent: entorno, arbol: ast) {
        return this.tipo
    }
    getValor(ent: entorno, arbol: ast) {
        return this.valor
    }
}