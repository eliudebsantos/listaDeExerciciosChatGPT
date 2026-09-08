const produto = {
    nome: "Notebook",
    preco: 3000,
    estoque: 15,
    marca: "Dell"
}

for (let key in produto){
    if (typeof produto[key] === "number"){
        console.log(key + ": " + produto[key])
    }
}