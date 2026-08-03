function primo (n){
    if (typeof n !== 'number' || n < 1){
        return 'Número inválido'
    }

    let array = []

    for(let i = 2; i <= n; i++){
        let ehPrimo = true
        for (let y = 2; y <= Math.sqrt(i); y++){
            if (i % y === 0){
                ehPrimo = false 
                break
            }
        }
        if (ehPrimo){
            array.push(i)
        } 
    }

    return array
}

console.log(primo(317))
console.log(primo("qdjbsd"))