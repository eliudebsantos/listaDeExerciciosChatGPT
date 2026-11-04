const dados = {
    nome: "Lucas",
    idade: 20,
    ativo: true,
    cidade: "Campinas",
    altura: 1.80,
    estudante: false,
    curso: "ADS"
}

let strings = 0
let number = 0
let boolean = 0

for (let key in dados){
    if (typeof dados[key] === "string"){
        strings++
    } else if (typeof dados[key] === "number"){
        number++
    } else if (typeof dados[key] === "boolean"){
        boolean++
    }
}

console.log("Strings: " + strings)
console.log("Numbers: " + number)
console.log("Boolean: " + boolean)