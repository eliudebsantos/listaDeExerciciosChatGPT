function primo (n){
    if (typeof n !== 'number' || n < 1){
        return 'Número inválido'
    }

    let teste = 1
    let array = []

    for(let i = 2; i <= n; i++){
        if (i === 2){
            array.push(i)
        } else if (i / 2 === 0)
    }
}

console.log(primo(0))
console.log(primo("qdjbsd"))