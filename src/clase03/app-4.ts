// Enumerados
enum CursoEnum {TypeScript, Angular, JavaScript};

const cursoEnumA: CursoEnum = CursoEnum.TypeScript;

console.log('cursoEnumA', cursoEnumA, CursoEnum[cursoEnumA])

enum DiaLaboral {Lunes,Martes,Miercoles,Jueves,Viernes}

let practica: DiaLaboral = DiaLaboral.Miercoles

console.log('practica', practica, DiaLaboral[practica])

enum DiaLaboral{Sabado = 5, Domingo}

let practicaExtra: DiaLaboral = DiaLaboral.Sabado

console.log('practicaExtra', practicaExtra, DiaLaboral[practicaExtra])

enum Mes{
    Enero = 'E',
    Febrero = 'F',
    Marzo = 'M'
}

const mesActual = Mes.Marzo
console.log('mesActual', mesActual)