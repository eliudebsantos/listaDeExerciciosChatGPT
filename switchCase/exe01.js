function diaDaSemana (numero){
    switch (numero){
        case 1:
            return "Segunda";
            break
        case 2:
            return "Terça"
            break
        case 3:
            return "Quarta"
            break
        case 4:
            return "Quinta"
            break
        case 5:
            return "Sexta"
            break
        case 6:
            return "Sábado"
            break
        case 7:
            return "Domingo"
            break
        default:
            return "Dia Inválido"

    }
}

console.log(diaDaSemana(0))
console.log(diaDaSemana(1))
console.log(diaDaSemana(2))
console.log(diaDaSemana(3))
console.log(diaDaSemana(4))
console.log(diaDaSemana(5))
console.log(diaDaSemana(6))
console.log(diaDaSemana(7))
console.log(diaDaSemana("fshksdjfs"))
