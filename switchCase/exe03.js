function calculadoraSimples(operacao ){
   switch (operacao){
    case "+": return "Soma"
    case "-": return "Subtração"
    case "*": return "Multiplicação"
    case "/": return "Divisão"
    default: return "Operação Inválida"
   }

}

console.log(calculadoraSimples("+"))
console.log(calculadoraSimples("-"))
console.log(calculadoraSimples("*"))
console.log(calculadoraSimples("/"))
console.log(calculadoraSimples("jhsadjhas"))
console.log(calculadoraSimples(1234))

