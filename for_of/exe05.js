const array = [3,8,12,7,15,20,9,4]

let pares = 0 

for (let key of array){
    if (key % 2 === 0){
        pares++
    }
}

console.log(`Tem ${pares} numeros pares nesse array`)