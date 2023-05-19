let userNumber = prompt('Insericsci un numero di quattro cifre')



let sum = 0

for (let i = 0 ; i < userNumber.length ; i ++){
    sum += parseInt(userNumber.charAt(i))
}

console.log(sum)