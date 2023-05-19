let array = []

for(let i = 0 ; i < 10 ; i++){
    let userNumber = parseInt(prompt('Scrivi un numero')) 
    array.push(userNumber)
    console.log(array)
    let finalNumber = array.reduce((partialSum, a) => partialSum + a, 0);
    console.log(finalNumber)
}

let sum = 0

for(let i = 0 ; i < 10 ; i++){
    let userNumber = parseInt(prompt('inserisci un numero'))
    sum += userNumber
}
console.log(sum)