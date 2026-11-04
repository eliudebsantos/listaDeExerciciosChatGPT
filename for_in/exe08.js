const produto = {
    arroz: 25,
    feijão: 10,
    carne: 45,
    leite: 6,
    cafe: 30
}

let preco = 0
let prod = ""

for (let key in produto){
    if (produto[key] >= preco){
        preco = produto[key]
        prod = key
    }
}

console.log(`${prod}: ${preco}`)