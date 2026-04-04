function somarAte (n) {
    if (typeof n !== "number" || n < 1){
        console.log("Informação inválida")
        return
    }

    let i = 1 
    let soma = 0
    while (i <= n){
        console.log(`${soma} + ${i} = ${soma + i}`)
        soma = soma + i 
        i++
    }
}

somarAte(0)
somarAte("kjfndskjç")
somarAte(1)
somarAte(-5)
somarAte(10)

