"use strict";
// Verificando tipos de datos
var primerCurso = {
    nombre: 'Angular',
    identificador: 1
};
var cadenaCurso = "\n{\n    nombre: 'Angular',\n    identificador: 1\n}\n";
function getIdCurso(c) {
    var obj = JSON.parse(c);
    // return (obj as CursoObj).identificador;
    return obj.identificador;
}
