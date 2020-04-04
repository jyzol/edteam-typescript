import { Direccion } from "./direccion";
import { Cuenta } from "./cuenta";

export class Cliente{
    private cuenta: Cuenta[];

    constructor(private codigo: number, private nombre: string, private direccion: Direccion){
        this.cuenta = [];
    }

    public agregaCuenta(cuenta: Cuenta){
        this.cuenta.push(cuenta);
    }
}