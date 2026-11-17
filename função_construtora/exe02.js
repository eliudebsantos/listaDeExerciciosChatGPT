function produto (nome, preco){
    this.nome = nome
    this.preco = preco
    this.mostrar = function() {
        console.log(`Produto: ${this.nome} \n Preço: ${this.preco}`)
    }
}

const produto1 = new produto("Notebook", 1000)
const produto2 = new produto("Mouse", 200)

produto1.mostrar()
produto2.mostrar()