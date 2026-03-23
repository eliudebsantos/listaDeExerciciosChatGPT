function estacaoAno (mes) {
    switch (mes) {
        case 12: case 1: case 2:
            return 'Verão'
        case 3: case 4: case 5:
            return "Outono"
        case 6: case 7: case 8:
            return "Inverno"
        case 9: case 10: case 11:
            return "Primavera"
        default:
            return "Mês Inválido"
    }
}

console.log(estacaoAno(12))
console.log(estacaoAno(1))
console.log(estacaoAno(2))

console.log(estacaoAno(3))
console.log(estacaoAno(4))
console.log(estacaoAno(5))

console.log(estacaoAno(6))
console.log(estacaoAno(7))
console.log(estacaoAno(8))

console.log(estacaoAno(9))
console.log(estacaoAno(10))
console.log(estacaoAno(11))

console.log(estacaoAno(123))
console.log(estacaoAno(0))
console.log(estacaoAno('ldjkbasjd'))