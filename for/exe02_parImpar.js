function parImpar (n){
    if (typeof n !== "number" || n < 1){
        return "Valor inválido"
    }

    let array = []

    for (i = 1; i <= n; i++){
        array.push(`${i} - ${i % 2 === 0 ? "Par" : "Impar"}`)
    }

    return array
}

/*function parImpar (n){
    if (typeof n !== "number" || n < 1){
        return "Valor inválido"
    }

    let array = []

    for (let i = 1; i <= n; i++){
        array.push(`${i} - ${i % 2 === 0 ? "Par" : "Impar"}`)
    }
    return array
}*/

console.log(parImpar(10))
console.log(parImpar(1))
console.log(parImpar(0))
console.log(parImpar(-1))
console.log(parImpar("saknfkjds"))