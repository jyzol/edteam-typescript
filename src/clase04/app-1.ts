// Definir una clase

class Curso {
    // private id: number;
    // private readonly nombre: string;

    constructor(private id: number, private readonly nombre: string){
        // this.id = id;
        // this.nombre = nombre;
    }
}

class EscuelaDigital{
    // private nombre: string;
    private cursos: Curso[];

    constructor(private nombre: string){
        // this.nombre = nombre;
        this.cursos = [];
    }

    agregarCurso(curso: Curso): void{
        this.cursos.push(curso);
    }
}

// let escuela: EscuelaDigital;
const escuela = new EscuelaDigital('EDteam');
escuela.agregarCurso(new Curso(1,'TypeScript'));
escuela.agregarCurso(new Curso(2,'JavaScript'));

// console.log('nombre:',escuela.nombre)
console.log('escuela', escuela);


