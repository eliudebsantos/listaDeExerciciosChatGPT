function maiorNumero (array) {
    let maior = array[0]

    array.forEach(element => {
        if (element > maior){
            maior = element
        }
    });

    return maior
}

console.log(maiorNumero([10,4,25,8,17, 400]))