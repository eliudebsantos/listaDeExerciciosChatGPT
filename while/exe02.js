function contarAte (n) {
    let i = 1
    if (typeof n !== "number" || n < 1){
         console.log("Informação inválida")
         return
    } 

    while (i <= n){
        console.log(i)
        i++
    }
}

contarAte(0)
contarAte(-1)
contarAte("isfjdks")
contarAte(10)
