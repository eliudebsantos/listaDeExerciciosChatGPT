function contagemRegressiva (n) {
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
contagemRegressiva("hdcsiufsd")