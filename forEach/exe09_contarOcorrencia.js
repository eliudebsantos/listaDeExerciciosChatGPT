function contarOcorrencias(array, valor) {
    let cont = 0

    array.forEach(function (element){
        if (element === valor){
            cont++
        }
    })

    return `"${valor}" aparece ${cont} veze(s) nesse array`
}

console.log(contarOcorrencias([2,5,2,8,2,10], 2))
console.log(contarOcorrencias(["a", 'b', 'c', 3,4, 'a', 'a'], "a"))