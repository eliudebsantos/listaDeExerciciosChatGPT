function fibonacci (n) {
    if (typeof n !== "number" || n < 1){
        return "Valor inválido"
    }

    let array = []

    for (let i = 0; i < n; i++){
        if (i < 2){
            array.push(i)
        } else {
            array.push(array[i - 2] + array[i -1])
        }
    }
    // 0, 1, 1, 2, 3, 
    // 0, 1, 2, 3, 4,     
    return array
}

console.log(fibonacci(5))

/*5

0, 1, 1, 2, 3, 5*/