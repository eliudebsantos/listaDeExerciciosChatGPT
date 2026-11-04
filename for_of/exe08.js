const array = [12,7,4,19,8,3,20,15]
let par = []
let impar = []

for (let key of array){
    if (key % 2 === 0){
        par.push(key)
    } else{
        impar.push(key)
    }
}

console.log(par)
console.log(impar)