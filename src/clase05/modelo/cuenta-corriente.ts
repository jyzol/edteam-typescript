import { Cuenta } from "./cuenta";

export class CuentaCorriente extends Cuenta{
    constructor(numero: number, saldo: number, moneda: string){
        super(numero, saldo, moneda);
    }
}