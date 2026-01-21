function sortearNumero (){
    const numero = Math.floor(Math.random() * (10 - 1 + 1)) + 1

    const paridade = numero % 2 === 0 ? "Par" : "Impar"
    const tamanho = numero > 5 ? "Alto" : "Baixo"

    console.log(`${numero} | ${paridade} | ${tamanho}`)
    
}

sortearNumero()