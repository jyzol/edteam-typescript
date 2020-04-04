import { Direccion } from "./direccion";
import { Cuenta } from "./cuenta";
import { Entidad, enumerable } from "./utils";

@Entidad({
    clave:  'CLIENTE'
})
export class Cliente{
    private cuenta: Cuenta[];

    constructor(private codigo: number, private nombre: string, private direccion: Direccion){
        this.cuenta = [];
    }

    @enumerable(false)
    public agregaCuenta(cuenta: Cuenta){
        this.cuenta.push(cuenta);
    }
}