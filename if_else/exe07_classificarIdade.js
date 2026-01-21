function classificarPessoa(idade){
    if (typeof idade !== "number"){
        console.log("Idade Inválida")
    } else if (idade < 0){
        console.log("Idade Inválida")
    } else if (idade < 12) {
        console.log("Criança")
    } else if (idade <= 17){
        console.log("Adolescente")
    } else if (idade <= 59){
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }
}
classificarPessoa(10)
classificarPessoa(15)
classificarPessoa(30)
classificarPessoa(65)
classificarPessoa(-2)
classificarPessoa("20")

/*Se idade não for um número, mostre "Idade inválida"

Se idade for menor que 0, mostre "Idade inválida"

Se idade for menor que 12, mostre "Criança"

Se idade for entre 12 e 17, mostre "Adolescente"

Se idade for entre 18 e 59, mostre "Adulto"

Se idade for 60 ou mais, mostre "Idoso"*/