function calcularFrete (regiao, peso){
    if (typeof peso !== "number"|| peso <= 0){
        return "Peso inválido"
    }

    if (typeof regiao !== "string"){
        return "Região Inválida"
    }
    
    switch (regiao.toLowerCase()) {
        case "sul": case "sudeste":
            return 10 * peso
        case "centro-oeste":
            return 12 * peso
        case "norte": case "nordeste":
            return 15 * peso
        default:
            return "Região inválida"   
    }
}

console.log(calcularFrete("sul", 10))
console.log(calcularFrete("centro-oeste", 10))
console.log(calcularFrete("NORTE", 10))
console.log(calcularFrete("nordeste", 10))
console.log(calcularFrete("Elude", 10))
console.log(calcularFrete("sul", 0))
console.log(calcularFrete("sul", -1))
console.log(calcularFrete("sul", "eliude"))
