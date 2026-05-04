function fatorial (n){
    if (typeof n !== "number" || n< 1){
        return "Valor inválido"
    }

    let fatorial = 1

    for (i = n; i > 1; i--){
        fatorial *= i
    }

    return fatorial
}

/*function fatorial (n){
    if (typeof n !== "number" || n< 1){
        return "Valor inválido"
    }

    let fator = 1

    for (let i = n; i >= 1; i--){
        fator *= i
    }

    return fator
}*/

console.log(fatorial(5))