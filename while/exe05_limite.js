function somarAteLimite (limite){
    let soma = 0
    let i = 1

    while (soma < limite){
        soma += i
        i++
    }

    return `Soma: ${soma} | Último número usado: ${i - 1}`
}

console.log(somarAteLimite(10))

/*function somaAteLimite (limite){
    if (typeof limite !== "number" || limite < 1){
        return `Valor inválido`
    }

    let i = 1
    let soma = 0

    while (soma < limite){
        soma += i
        i++
    }

    return `Soma: ${soma} | Parou em: ${i - 1}`
}

console.log(somaAteLimite(10))
console.log(somaAteLimite(0))
console.log(somaAteLimite(-1))
console.log(somaAteLimite(1))
console.log(somaAteLimite("fsdh"))*/