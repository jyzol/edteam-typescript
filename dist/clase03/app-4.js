"use strict";
// Enumerados
var CursoEnum;
(function (CursoEnum) {
    CursoEnum[CursoEnum["TypeScript"] = 0] = "TypeScript";
    CursoEnum[CursoEnum["Angular"] = 1] = "Angular";
    CursoEnum[CursoEnum["JavaScript"] = 2] = "JavaScript";
})(CursoEnum || (CursoEnum = {}));
;
var cursoEnumA = CursoEnum.TypeScript;
console.log('cursoEnumA', cursoEnumA, CursoEnum[cursoEnumA]);
var DiaLaboral;
(function (DiaLaboral) {
    DiaLaboral[DiaLaboral["Lunes"] = 0] = "Lunes";
    DiaLaboral[DiaLaboral["Martes"] = 1] = "Martes";
    DiaLaboral[DiaLaboral["Miercoles"] = 2] = "Miercoles";
    DiaLaboral[DiaLaboral["Jueves"] = 3] = "Jueves";
    DiaLaboral[DiaLaboral["Viernes"] = 4] = "Viernes";
})(DiaLaboral || (DiaLaboral = {}));
var practica = DiaLaboral.Miercoles;
console.log('practica', practica, DiaLaboral[practica]);
(function (DiaLaboral) {
    DiaLaboral[DiaLaboral["Sabado"] = 5] = "Sabado";
    DiaLaboral[DiaLaboral["Domingo"] = 6] = "Domingo";
})(DiaLaboral || (DiaLaboral = {}));
var practicaExtra = DiaLaboral.Sabado;
console.log('practicaExtra', practicaExtra, DiaLaboral[practicaExtra]);
var Mes;
(function (Mes) {
    Mes["Enero"] = "E";
    Mes["Febrero"] = "F";
    Mes["Marzo"] = "M";
})(Mes || (Mes = {}));
var mesActual = Mes.Marzo;
console.log('mesActual', mesActual);
