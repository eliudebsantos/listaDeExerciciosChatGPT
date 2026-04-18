function ehPrimo (n) {
    let i = 1
    let cont = 0

    if(typeof n !== "number" || n <= 1){
        return "Valor inválido"
    }

    while (i <= n){
        if ( n % i === 0){
            cont++
        }
        i++
    }

    return `${cont === 2 ? "Primo" : "Não primo"}`
}

console.log(ehPrimo(111))
console.log(ehPrimo(23))
console.log(ehPrimo(37))
console.log(ehPrimo(0))
console.log(ehPrimo(-1))
console.log(ehPrimo(1))
console.log(ehPrimo("lksnflksd"))

/*function ehPrimo (n){
    if(typeof n !== "number" || n <= 1){
        return "Valor inválido"
    }

    let i = 1
    let cont = 0

    while (i <= n){
        if (n % i === 0 ){
            cont++
        }
        i++
    }

    return `${cont === 2 ? "Não é primo" : "É primo"}`
}

console.log(ehPrimo(7))
console.log(ehPrimo(23))
console.log(ehPrimo(37))
console.log(ehPrimo(0))
console.log(ehPrimo(-1))
console.log(ehPrimo(1))
console.log(ehPrimo("lksnflksd"))*/