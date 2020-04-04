import { Cuenta } from './cuenta';

export class CajaDeAhorro extends Cuenta{
    constructor(numero: number, saldo: number, moneda: string, private interes: number){
        super(numero, saldo, moneda);
    }

    public aplicarInteres(interes: number): void{
        console.log('Aplicando interes:' + this.interes);
    }
}