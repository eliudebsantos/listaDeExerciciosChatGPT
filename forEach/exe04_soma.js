function somarArray (array) {
    let soma = 0
    array.forEach(element => {
        soma += element
    });

    return soma
}

console.log(somarArray([1,2,3,4,5]))