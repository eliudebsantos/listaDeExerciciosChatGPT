function parImpar (array) {
    array.forEach((numeros) => console.log(numeros % 2 === 0 ? `${numeros} - PAR` : `${numeros} - IMPAR`))
}

parImpar([1,2,3,4,5,6])