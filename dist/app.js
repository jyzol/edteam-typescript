"use strict";
var mensaje = "Hola mundo TypeScript";
console.log(mensaje);
var mensajes = [
    {
        contenido: 'Hola'
    },
    {
        contenido: 'TypeScript'
    },
    {
        contenido: 'Hasta pronto'
    }
];
mensajes.map(function (mensajeActual) { return mensajeActual.contenido.toUpperCase(); });
console.log(mensajes);
// type: number
var estudiantes;
estudiantes = 10;
function suma(a, b) {
    return a + b;
}
var gestion = 2018;
// type: string
// Primera forma
var nombre = 'Josue';
var apellido = 'Tito';
// ES6 Template literals
var nombreCompleto = nombre + " " + apellido;
console.log('Mi nombre es: ' + nombreCompleto);
var nombreCompleto2 = "\n<title>\n    Josue\n    Tito\n</title>\n";
console.log('Mi nombre es: ' + nombreCompleto2);
// type: boolean
var inscrito = true;
mensaje = inscrito ? 'Bienvenido al curso' : 'Suscribete';
console.log(mensaje);
// type: void
function mostrarEstadoInscripcion(inscrito) {
    mensaje = inscrito ? 'Bienvenido al curso' : 'Suscribete';
    console.log(mensaje);
}
mostrarEstadoInscripcion(inscrito);
// type: undefined
var desconocido;
desconocido = undefined;
// type: null
var nulo;
nulo = null;
// type: any
var nombreCurso = "TypeScript";
nombreCurso = 10;
nombreCurso = true;
nombreCurso = null;
// Usando tipo en funciones
function saludo(nombre) {
    if (!nombre) {
        nombre = "Josue";
    }
    return "Hola " + nombre;
}
console.log(saludo('Jyzol'));
console.log(saludo());
function sumaMultiple(a, b, c) {
    if (!c) {
        c = 0;
    }
    return a + b + c;
}
console.log('suma ', sumaMultiple(1, 2, 3));
console.log('suma ', sumaMultiple(1, 2));
// Arreglos
var nombres = ['Josue', 'Aldair', 'Jyzol'];
var apellidos;
apellidos = ['Tito', 'Carpio', 'Taylor'];
// Tuplas
var pedido;
pedido = ['Pizza', 10, true];
console.log('pedido', pedido);
var arreglo = [];
arreglo.push(1);
arreglo.push(2);
var arreglo2;
arreglo2 = [1, 2, 3];
var arreglo3;
