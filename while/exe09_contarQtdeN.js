function contarDigitos (n){
    let i = n
    let contador = 0

    if (i === 0){
        return 1
    }

    while (i > 0){
        i = Math.floor(i / 10)
        contador++
    }
    return contador
}

console.log(contarDigitos(1234))

console.log(contarDigitos(0))