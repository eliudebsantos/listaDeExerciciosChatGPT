function produto (nome, preco){
    return {
        nome, 
        preco,
        mostrar: function (){
            console.log(`Produto: ${nome}: \n Preço: ${preco}`)
        } 
    }
}

const produto1 = produto("note",1000)
const produto2 = produto("mouse", 200)

produto1.mostrar()