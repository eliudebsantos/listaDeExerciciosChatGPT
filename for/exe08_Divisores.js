function divisores (n){
    if (typeof n !== 'number' || n < 1){
        return 'Número inválido'
    }

    let array = []

    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            array.push(i)
        }
    }

    return array
}

console.log(divisores(10))