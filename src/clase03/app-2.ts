// Cursos disponibles: TypeScript, Angular, JavaScript

// let cursoComprado = 'TypeScript';
// cursoComprado = 'React';

// Alias
type Curso = 'TypeScript' | 'Angular' | 'JavaScript';

let cursoComprado: Curso; 
cursoComprado = 'Angular'

function comprarCurso(curso: Curso) {
    cursoComprado = curso
}

comprarCurso('JavaScript');
console.log('cursoComprado: ' + cursoComprado);

type FuncionCompra = (curso: Curso) => void;

const comprarCursoDesc: FuncionCompra = curso => cursoComprado = curso;

comprarCursoDesc('TypeScript')
console.log('cursoComprado: ' + cursoComprado);