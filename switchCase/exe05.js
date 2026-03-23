function nivelAcesso (plano) {

    if (typeof plano !== "string"){
        return "Plano inválido"
    }

    switch (plano.toLowerCase()) {
        case "free": 
            return "Acesso limitado"
        case "basic":
            return "Acesso padrão"
        case "premium": case "vip":
            return "Acesso total"
        default:
            return "Plano inválido"
            
    }
}

console.log(nivelAcesso("free"))
console.log(nivelAcesso("basic"))
console.log(nivelAcesso("premium"))
console.log(nivelAcesso("VIP"))
console.log(nivelAcesso("vip"))
console.log(nivelAcesso("sdasd"))
console.log(nivelAcesso(5555))