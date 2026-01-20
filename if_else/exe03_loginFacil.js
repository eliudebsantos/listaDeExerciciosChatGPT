//Se a senha for igual a "1234", mostre "Acesso permitido", se não, "Acesso negado".

function login (senha){
    if(senha == 1234)
        console.log("Acesso permetido")
    else
        console.log("Acesso negado")
}

login(1234)
login("1234")
login(56465)