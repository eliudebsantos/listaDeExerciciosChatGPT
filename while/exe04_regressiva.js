function contagemRegressiva(n){
    let i = n 
    let array = []
    if (typeof n !== "number" || n < 1){
        return "Valor inválido"
    }

    while (i >= 1){
        array.push(`${i % 3 === 0 ? "Pula" : i}`)
        i--
    }
    return array
}

console.log(contagemRegressiva(0))

/*function contagemRegressiva (n) {
    if (typeof n !== "number" || n < 1){
        console.log("Valor inválido")
        return
    }

    while (n >= 1){
        console.log(`${n % 3 === 0 ? "Pula" : n}`)
        n--
    }


}

contagemRegressiva(6)
contagemRegressiva(1)
contagemRegressiva(0)
contagemRegressiva(-1)
contagemRegressiva("hdcsiufsd")*/