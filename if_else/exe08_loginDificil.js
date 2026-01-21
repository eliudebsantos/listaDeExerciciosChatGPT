function login (usuario, senha){
    if (usuario === "" || senha === ""){
        console.log("Campos Obrigatórios")
    } else if (usuario === "admin" && senha === "1234" ){
        console.log("Login realizado com sucesso")
    } else if (usuario !== "admin" && senha !== "1234"){
        console.log("Usuário e senha incorretos")
    } else if (usuario !== "admin"){
            console.log("Usuário Incorreto")

    } else {
            console.log("Senha incorreta")
        }
}

login("admin", "1234")
login("admin", "0000")
login("joao", "1234")
login("joao", "0000")
login("", "")