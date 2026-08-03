function palindromo (n) {
    if (typeof n !== 'number' || n < 1){
        return 'Número inválido'
    }

    let numeroOriginal = n
    let novoNumero = 0

    for (let i = n; i > 0; i = Math.floor(i / 10)){
        novoNumero = (novoNumero*10) + (i % 10)
    }

    return novoNumero === numeroOriginal
}

console.log(palindromo(1221))
console.log(palindromo(1222))
console.log(palindromo(159951))