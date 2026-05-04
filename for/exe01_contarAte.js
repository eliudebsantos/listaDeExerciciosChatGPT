function contarAte (n) {
    if (typeof n !== "number" || n < 1){
        return "Número inválido"
    }

    let array = []

    for(let i = 1; i <= n; i++){
        array.push(i)
    }

    return array
}



/*function contarAte (n){
    if (typeof n !== "number" || n < 1){
        return "Valor inválido"
    }

    let array = []

    for (let i = 1; i <= n; i++){
        array.push(i)
    }
    return array
}*/

console.log(contarAte(10))
console.log(contarAte(1))
console.log(contarAte(0))
console.log(contarAte(-1))
console.log(contarAte("saknfkjds"))