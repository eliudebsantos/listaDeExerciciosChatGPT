function somarAte (n){
    if (typeof n !== "number" || n < 1){
        return "Valor inválido"
    }

    let soma = 0

    for (i = 1; i<=n;i++){
        soma += i
    }

    return soma
}

/*function somarAte (n){
    let soma = 0

    if (typeof n !== "number" || n < 1){
        return "Valor inválido"
    }

    for (let i = 1; i <= n; i++){
        soma += i
    }

    return soma 
}*/

console.log(somarAte(10))
console.log(somarAte(1))
console.log(somarAte(0))
console.log(somarAte(-1))
console.log(somarAte("saknfkjds"))