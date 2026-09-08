const gastos = {
    mercado: 150,
    gasolina: 200,
    internet: 100,
    lazer: 50
}

let soma = 0

for (let key in gastos){
    soma += gastos[key]
}

console.log(soma)