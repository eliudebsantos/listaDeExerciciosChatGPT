function inverterNumero (n) {
    let novoNumero = 0
    let i = n

    while (i > 0){
        novoNumero = (novoNumero * 10) + (i % 10)
        i = Math.floor(i / 10)
    }
    return novoNumero
}

console.log(inverterNumero(1234654464))