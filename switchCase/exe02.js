function conceitoNota(letra){
    if (typeof letra !== "string"){
        return "Conceito Inválido"
    }

    switch (letra.toUpperCase()){
        case "A": return "Excelente"
        case "B": return "Bom"
        case "C": return "Regular"
        case "D": return "Ruim"
        default:  return "Conceito Inválido"
    }
}

console.log(conceitoNota("A"))
console.log(conceitoNota("a"))
console.log(conceitoNota("B"))
console.log(conceitoNota("b"))
console.log(conceitoNota("C"))
console.log(conceitoNota("c"))
console.log(conceitoNota("D"))
console.log(conceitoNota("d"))
console.log(conceitoNota("kaDBASJHD"))
console.log(conceitoNota("12354"))
console.log(conceitoNota(5))

