//Bom dia, boa tarde, boa noite, madrugada

function periodoDoDia(hora){
    /*if(hora >= 6 && hora <= 11){
        console.log("Bom dia")
    } else if(hora >= 12 && hora <= 17){
        console.log("Boa tarde")
    } else if(hora >= 18 && hora <= 23){
        console.log("Boa noite")
    } else if (hora >= 0 && hora <= 5) {
        console.log("Madrugada")
    } else {
        console.log("Hora invalida")
    }*/

    if (hora < 0 || hora > 23){
        console.log("Hora invalida")
    } else if (hora < 6){
        console.log("Madrugada")
    } else if (hora < 12){
        console.log("Bom dia")
    } else if (hora < 18){
        console.log("Boa tarde")
    } else {
        console.log("Boa noite")
    }
}
periodoDoDia(4)
periodoDoDia(11)
periodoDoDia(16)
periodoDoDia(22)
periodoDoDia(154)