// Interfaces y clases

class Curso {
    static MINIMO: number = 10;
    static getInfo(curso: Curso): string{
        return JSON.stringify(curso);
    }
    constructor(private _id: number, private _nombre: string){
    }

    get id(){
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

}

interface Escuela{
    id: number;
    nombre: string;
    cursos: Curso[];
}

class EscuelaDigital implements Escuela{
    private paginaWeb: string;
    public cursos: Curso[]

    constructor(private _id:number,public nombre: string, paginaWeb: string){
        this.paginaWeb = paginaWeb;
        this.cursos = [];
    }

    get id(){
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    public agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }

    public empezarCurso(curso: Curso){
        console.log(`Iniciando curso ${curso.nombre} en: ${this.paginaWeb}`);
    }
}

// const miEscuela = new Escuela('EDteam');
// console.log('miEscuela', miEscuela);

let escuela: EscuelaDigital;
escuela = new EscuelaDigital(1,'EDteam','ed.team');
// const escuela = new EscuelaDigital('EDteam','ed.team');
escuela.agregarCurso(new Curso(1,'TypeScript'));
escuela.agregarCurso(new Curso(2,'JavaScript'));
const angular = new Curso(3, 'Angular');
escuela.agregarCurso(angular)

escuela.empezarCurso(angular); // Polimorfismo

// console.log('nombre:',escuela.nombre)

console.log('nombre:', escuela.nombre);
console.log('escuela', escuela);

//Static
const angularString = Curso.getInfo(angular);
console.log('angularString:',angularString);
console.log('Minimo de estudiantes:', Curso.MINIMO);
