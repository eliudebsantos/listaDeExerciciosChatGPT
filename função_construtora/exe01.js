function pessoa(nome, idade){
    this.nome = nome
    this.idade = idade

}

const pessoa1 = new pessoa("Eliude", 35)
const pessoa2 = new pessoa("Ana", 18)

console.log(pessoa1)
console.log(pessoa2)