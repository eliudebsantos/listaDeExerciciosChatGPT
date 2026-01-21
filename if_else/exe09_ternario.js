function analisarNumero (n){
    if (typeof n !== "number"){
        console.log("Valor Inválido")
        return
    } else if (n === 0){
        console.log("Zero")
        return
    } 

    const sinal = n < 0 ? "Negativo" : "Positivo"
    const paridade = n % 2 === 0 ? "Par" : "Impar"

    console.log(`${sinal} e ${paridade}`)
    
    /*else if (n < 0){
        if (n % 2 === 0){
            console.log("Negativo e par")
        } else{
            console.log("Negativo e impar")
        }
    } else {
        if (n % 2 === 0){
            console.log("Positivo e par")
        } else{
            console.log("Positivo e impar")
        }
    }*/
}

analisarNumero(10)
analisarNumero(7)
analisarNumero(-4)
analisarNumero(-9)
analisarNumero(0)
analisarNumero("5")