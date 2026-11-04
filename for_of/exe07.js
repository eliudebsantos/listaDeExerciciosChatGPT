const array = [10,45,23,67,34,89,88,12]

let maior = array[0]
let segMaior = array[0]

for(let key of array){
    if (key >= segMaior){
        if (key >= maior){
        segMaior = maior
        maior = key
    } else{
        segMaior = key
    }
    }
}

console.log(segMaior)