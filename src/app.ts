let mensaje = "Hola mundo TypeScript";
console.log(mensaje);
let mensajes = [
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

mensajes.map(mensajeActual => mensajeActual.contenido.toUpperCase());
console.log(mensajes);

// type: number
let estudiantes: number;
estudiantes = 10;

function suma(a: number, b: number){
    return a+b;
}

let gestion = 2018;

// type: string
// Primera forma
let nombre = 'Josue';
let apellido: string = 'Tito';

// ES6 Template literals
let nombreCompleto = `${nombre} ${apellido}`
console.log('Mi nombre es: '+ nombreCompleto)
let nombreCompleto2: string = `
<title>
    Josue
    Tito
</title>
`
console.log('Mi nombre es: '+ nombreCompleto2)

// type: boolean
let inscrito: boolean = true;
mensaje = inscrito ? 'Bienvenido al curso' : 'Suscribete'
console.log(mensaje)

// type: void
function mostrarEstadoInscripcion(inscrito: boolean): void{
    mensaje = inscrito ? 'Bienvenido al curso' : 'Suscribete'
    console.log(mensaje)
}
mostrarEstadoInscripcion(inscrito);

// type: undefined
let desconocido: undefined;
desconocido = undefined;

// type: null
let nulo: null;
nulo = null;

// type: any
let nombreCurso: any = "TypeScript";
nombreCurso = 10;
nombreCurso = true;
nombreCurso = null;

// Usando tipo en funciones
function saludo(nombre?: string):string{
    if(!nombre){
        nombre = "Josue";
    }
    return `Hola ${nombre}`;
}
console.log(saludo('Jyzol'));
console.log(saludo());

function sumaMultiple(a:number, b:number, c?:number):number{
    if(!c){
        c=0;
    }
    return a+b+c;
}
console.log('suma ',sumaMultiple(1,2,3));
console.log('suma ',sumaMultiple(1,2));

// Arreglos
let nombres: string[] = ['Josue','Aldair','Jyzol'];
let apellidos: Array<string>;
apellidos = ['Tito','Carpio','Taylor'];

// Tuplas
let pedido: [string, number, boolean];
pedido = ['Pizza',10,true];

console.log('pedido', pedido);

let arreglo: number[] = [];
arreglo.push(1);
arreglo.push(2);

let arreglo2: number[];
arreglo2 = [1,2,3];

let arreglo3: Array<number>;