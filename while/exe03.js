function eliude (cesar) {

    if (typeof cesar !== "number" || cesar < 0){
         console.log("Valor invalido")
         return
    }


    if (cesar >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}


eliude(-1)
eliude(18)
eliude(10)
eliude("oçfjssdjfsd")
eliude(false)
eliude(true)