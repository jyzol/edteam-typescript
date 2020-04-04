import { Cliente, Direccion, CajaDeAhorro } from "./modelo";
import { analizar } from "./modelo/utils";

const direccion01 = new Direccion('Peru', 'Callao', 'Colonial');
const cliente01 = new Cliente(1, 'Josue', direccion01);

analizar(Cliente);

for(let propiedad in Cliente.prototype){
    console.log('[Cliente]', propiedad);
}

const cuenta01 = new CajaDeAhorro(123, 0, 'USD', 0);
cliente01.agregaCuenta(cuenta01);
cuenta01.aplicarInteres();
cuenta01.aplicarInteres();
cuenta01.aplicarInteres();