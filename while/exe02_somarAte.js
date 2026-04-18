function somarAte (n){
    let i = 1
    let soma = 0
    if (n < 1 || typeof n !== "number"){
        return "Valor inválido"
    }

    while (i <= n){
        soma += i
        i++
    }

    return soma
}

console.log(somarAte(5))

/*function somarAte (n) {
    if (typeof n !== "number" || n < 0){
        return "Valor inválido"
    }

    let i = 1
    let soma = 0
    while (i <= n){
        soma += i
        i++
    }
    return soma
}

console.log(somarAte(3))
console.log(somarAte(-5))
console.log(somarAte("knsdlkf"))
console.log(somarAte(5))*/