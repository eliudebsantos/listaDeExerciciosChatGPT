const array = [
    {nome: "Lucas", nota: 7},
    {nome: "Ana", nota: 9},
    {nome: "Pedro", nota: 6},
    {nome: "Marcia", nota: 10},
    {nome: "João", nota: 8}

]

let maior = 0
let aluno = ""

for ( let key of array){
    if (key.nota > maior){
        aluno = key.nome
        maior = key.nota
    }
}

console.log(aluno, maior)