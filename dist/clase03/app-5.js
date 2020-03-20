"use strict";
// Interfaces
var miniCurso;
miniCurso = {
    nombre: 'TypeScript',
    identificador: 1
};
var miniCursos;
function crearCurso(params) {
    return {
        nombre: params.nombre,
        identificador: params.identificador
    };
}
var nuevoCurso = crearCurso({
    nombre: 'Javascript',
    identificador: 2
});
console.log('nuevoCurso', nuevoCurso);
var cursoAngular = crearCurso({
    nombre: 'Angular'
});
console.log('cursoAngular', cursoAngular);
// Ejemplo CursoEDteam
var primerCursoED = {
    costo: 20,
    nombre: 'JavaScript',
    identificador: 10
};
console.log('cursoEDteam', primerCursoED);
