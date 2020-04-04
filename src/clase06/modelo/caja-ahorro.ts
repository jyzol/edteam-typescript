import { Cuenta } from './cuenta';
import { random } from "lodash";

export class CajaDeAhorro extends Cuenta{
    constructor(numero: number, saldo: number, moneda: string, private interes: number){
        super(numero, saldo, moneda);
    }

    public aplicarInteres(): void{
        this.interes = random(1, 20); 
        console.log('Aplicando interes:' + this.interes);
    }
}