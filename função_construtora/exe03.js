function aluno (nome, n1, n2){
    this.nome = nome
    this.n1 = n1
    this.n2 = n2

    this.calcularMeta = function (){
        return (this.n1 + this.n2) / 2
    }
}

const aluno1 = new aluno("Eliude", 10, 9)
const aluno2 = new aluno("Jamily", 8, 5)

console.log(aluno1.calcularMeta())
console.log(aluno2.calcularMeta())