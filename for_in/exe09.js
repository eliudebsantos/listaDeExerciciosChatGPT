const produtos = {
    notebook: 3000,
    mouse: 80,
    teclado: 150,
    celular: 2500,
    monitor : 1200
}

const novosProdutos = {}

for (let key in produtos){
    if (produtos[key] > 1000){
        novosProdutos[key] = produtos[key]
    }
}

console.log(novosProdutos)