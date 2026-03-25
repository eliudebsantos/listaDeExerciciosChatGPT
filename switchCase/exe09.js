function executarAcao(opcao){

    if (typeof opcao !== "number"){
        return "Opção inválida"
    }
    switch (opcao){
        case 1:
            return "Abrir perfil"
        case 2:
            return "Editar configurações"
        case 3:
            return "Sair"
        case 4: case 5:
            return "Área premium"
        default:
            return "Opção inválida"
    }
}

console.log(executarAcao(1))
console.log(executarAcao(2))
console.log(executarAcao(3))
console.log(executarAcao(4))
console.log(executarAcao(5))
console.log(executarAcao(6))
console.log(executarAcao(0))
console.log(executarAcao("fewnjfe"))
console.log(executarAcao(-1))