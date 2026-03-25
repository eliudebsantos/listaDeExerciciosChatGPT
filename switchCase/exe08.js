function calcularDesconto (tipoCliente, valorCompra) {
    if (typeof tipoCliente !== "string" || typeof valorCompra !== "number" || valorCompra <= 0) {
        return "Dados inválidos"
    }

    const tipo = tipoCliente.toLowerCase()
    let desconto  = 0

    if (valorCompra > 1000){
        desconto += 5
    }

    switch (true){
        case tipo === "comum":
            break
        case tipo === "vip":
            desconto += 10
            break
        case tipoCliente === "premium":
            desconto += 20
            break
        default:
            return "Dados inválidos"
    }

    return valorCompra - (valorCompra * desconto/100)
}

console.log(calcularDesconto("comum", 1000))
console.log(calcularDesconto("vip", 1000))
console.log(calcularDesconto("premium", 1000))
console.log(calcularDesconto("comum", 2000))
console.log(calcularDesconto("vip", 2000))
console.log(calcularDesconto("premium", 2000))

console.log(calcularDesconto("comum", -1))
console.log(calcularDesconto("vip", "jsdnjsk"))
console.log(calcularDesconto(1000, 1000))


