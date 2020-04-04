// Crear la instancias
// import { Cliente } from './modelo/cliente';
// import { Cuenta } from './modelo/cuenta';
// import { CajaDeAhorro } from './modelo/caja-ahorro';
// import { Direccion } from './modelo/direccion';
// import { CuentaCorriente } from './modelo/cuenta-corriente';

import {
    CajaDeAhorro,
    Cliente,
    Cuenta,
    CuentaCorriente,
    Direccion
} from "./modelo";

const direccion01 = new Direccion('Peru', 'Callao', 'Colonial');
const cliente01 = new Cliente(1,'Josue Tito', direccion01);
let cuenta01: Cuenta;
cuenta01 = new CajaDeAhorro(100, 0, 'USD', 10);

const cuenta02 = new CuentaCorriente(200, 0, 'USD');

cliente01.agregaCuenta(cuenta01);
cliente01.agregaCuenta(cuenta02);
console.log('Cliente: cliente01', cliente01);