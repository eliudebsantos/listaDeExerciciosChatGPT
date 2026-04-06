function mostrarParOuImpar (n){
    if (typeof n !== "number" || n < 1){
        console.log("Valor inválido")
        return
    }

    let i = 1

    while (i <= n){
        console.log(`${i} - ${i % 2 === 0 ? "Par" : "Impar"}`)
        i++
    }
}

mostrarParOuImpar(-1)
mostrarParOuImpar(0)
mostrarParOuImpar(10)
mostrarParOuImpar("fksjdf")
