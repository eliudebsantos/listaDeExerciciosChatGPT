const notas = {
     matematica: 8,
    fisica: 9,
    portugues: 7, 
    historia: 10
}

let maior = 0

for (let key in notas){
    if (notas[key] > maior){
        maior = notas[key]
    }
}

console.log(maior)