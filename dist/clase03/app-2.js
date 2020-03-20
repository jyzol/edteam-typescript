"use strict";
// Cursos disponibles: TypeScript, Angular, JavaScript
var cursoComprado;
cursoComprado = 'Angular';
function comprarCurso(curso) {
    cursoComprado = curso;
}
comprarCurso('JavaScript');
console.log('cursoComprado: ' + cursoComprado);
var comprarCursoDesc = function (curso) { return cursoComprado = curso; };
comprarCursoDesc('TypeScript');
console.log('cursoComprado: ' + cursoComprado);
