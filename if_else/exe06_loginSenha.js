//usuario === admin e senha === 1234

function login(usuario, senha){
    if ( usuario === "admin" && senha === 1234){
        console.log("Acesso Permitido")
    } else {
        console.log("Acesso Negado")
    }
}

login("eliude", 1564)
login("admin", 5468)
login("barbosa", 1234)
login("admin", 1234)