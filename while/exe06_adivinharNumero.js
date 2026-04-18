function adivinharNumero (){
    let array = []
    let numeroSecreto = Math.floor(Math.random() * 10) + 1 
    let numeroGerado = Math.floor(Math.random() * 10) + 1
    let tentativas = 1
    

    while (numeroGerado !== numeroSecreto){
        array.push(`[ ${numeroGerado} - ${numeroSecreto} ]`)
        numeroGerado = Math.floor(Math.random() * 10) + 1
        tentativas++
    }
    array.push(`[ ${numeroGerado} - ${numeroSecreto} ]`)

    return ` ${array}  - ${tentativas} tentativas`  
}

console.log(adivinharNumero())



/*function adivinharNumero (){
    let numeroSecreto = Math.floor(Math.random() * 10) + 1 
    let numeroGerado = Math.floor(Math.random() * 10) + 1
    let tentativas = 1

    while(numeroGerado !== numeroSecreto){
        numeroGerado = Math.floor(Math.random() * 10) + 1
        tentativas++
    }

    return `Numero secreto: ${numeroSecreto} | Tentativas: ${tentativas}`
}

console.log(adivinharNumero())*/