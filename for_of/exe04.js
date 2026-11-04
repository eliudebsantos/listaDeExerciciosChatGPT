const array = [15,42,8,31,27,50]

let maior = array[0]

for ( let key of array){
    if (key > maior){
        maior = key
    }
}

console.log(maior)