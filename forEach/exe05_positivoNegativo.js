function positivoNegativo (array){
    let positivo = 0
    let negativo = 0

    array.forEach(element => {
        if(element > 0){
            positivo++
        } else if (element < 0){
            negativo++
        }
    });

    return `Positivos: ${positivo} | Negativos: ${negativo}`
}

console.log(positivoNegativo([5,-2,8,-10,3]))