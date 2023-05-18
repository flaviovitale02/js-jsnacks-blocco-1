const array = []
let userNumber = prompt('Please write a number')

for(let i = 0 ; i < 6 ; i++){
    let userNumber = prompt('Please write a number')
    console.log(userNumber)
    if(userNumber % 2 != 0){
        array.push(userNumber)
    }
}
console.log(array)