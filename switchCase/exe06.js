function avaliarNota(nota){
    if (typeof nota !== "number"){
        return "Nota inválida"
    }

    switch (true) {
        case nota <= 10 && nota >= 9:
            return "Excelente"
        case nota >= 7 && nota < 9:
            return "Bom"
        case nota >= 5 && nota < 7:
            return "Regular"
        case nota < 5 && nota >= 0:
            return "Reprovado"
        default:
            return "Nota inválida"
    }
}

console.log(avaliarNota(10))
console.log(avaliarNota(9))
console.log(avaliarNota(8))
console.log(avaliarNota(7))
console.log(avaliarNota(6))
console.log(avaliarNota(5))
console.log(avaliarNota(4))
console.log(avaliarNota(3))
console.log(avaliarNota(2))
console.log(avaliarNota(1))
console.log(avaliarNota(0))
console.log(avaliarNota("iahfdis"))
console.log(avaliarNota(10000))