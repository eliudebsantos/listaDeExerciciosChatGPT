//Crie uma função que mostre ana tela se o aluno foi aprovado (nota >= 7), recuperação (nota >= 5 && nota < 7), reprovado (nota < 5)

function avaliarNota(nota){
    if (nota >= 7){
        console.log("Aprovado")
    } else if (nota < 7 && nota >= 5){
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}

avaliarNota(10)
avaliarNota(7)
avaliarNota(5)
avaliarNota(0)