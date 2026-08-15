function separarNumeros (array){
    let pares = []
    let impares = []

    array.forEach(function (element) {
        if (element % 2 === 0){
            pares.push(element)
        } else {
            impares.push(element)
        }
    })

    return pares + " | " + impares
}

console.log(separarNumeros([1,2,3,4,5,6]))