function girar(){
    const dado = Math.floor(Math.random() * 6)  + 1 
    //const nivel = dado > 3 ? "Alto" : "Baixo"
    let resultado = "" //tenho duvida aqui, para declarar uma string é assim?

    switch(dado){
        case 1:
            resultado = "Perdeu tudo"
            break
        case 2: case 3:
            resultado = "Ganhou pouco"
            break
        case 4: case 5:
            resultado = "Ganhou médio"
            break
        case 6:
            resultado = "Jackpot!!!"
            //Aqui não preciso do break e nem do default né?
    }

    return `Número: ${dado} | ${resultado} | ${dado > 3 ? "Alto" : "Baixo"}` //preferi fazer direto assim com o ternario
}

console.log(girar())