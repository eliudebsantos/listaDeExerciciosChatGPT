function aluno (nome, nota1, nota2){
    return {
        nome,
        nota1, 
        nota2,
        calcularMedia: () => (nota1 + nota2) / 2
    }
}

const aluno1 = aluno("Eliude", 10, 10)
const aluno2 = aluno("Limão", 4, 3)

console.log(aluno1.calcularMedia())
console.log(aluno2.calcularMedia())