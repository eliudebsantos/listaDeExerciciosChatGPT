function segundoMaior (array){
    let maior = array[0]
    let segundoMaior = array[0]

    array.forEach(element => {
        if (element > maior){
            segundoMaior = maior
            maior = element
        } else if (segundoMaior < element){
            segundoMaior = element
        }
    });

    return segundoMaior
}

console.log(segundoMaior([10,5,20,8,15]))