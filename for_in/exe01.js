const pessoa = {
    nome: "Lucas",
    idade: 32,
    cidade: "bjp"
}

for (let key in pessoa){
    console.log(key.toUpperCase() + ": " + pessoa[key])
}