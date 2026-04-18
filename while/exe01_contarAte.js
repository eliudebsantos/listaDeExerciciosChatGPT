function contarAte (n){
    let i = 1 
    let array = []
    if (n < 1){
        return "Valor inválido"
    }
    while(i <= n){
        array.push(i)
        i++
    }
    return array
}

console.log(contarAte(100))

/*function contarAte (n){
    if (typeof n !== "number" || n < 0){
        console.log("Valor inválido")
        return
    }
    let i = 0
    while (i <= n){
        console.log(i)
        i++
    }
}
contarAte(0)
contarAte(-1)
contarAte("isfjdks")
contarAte(10)

/*somarAte(0)
somarAte("kjfndskjç")
somarAte(1)
somarAte(-5)
somarAte(10)*/

