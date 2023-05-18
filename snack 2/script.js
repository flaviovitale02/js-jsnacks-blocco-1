const invitati = ['Stefano' , 'Luca', 'Lucia' , 'Antonietta', 'Marcello' , 'Francesco', 'Luigi', 'Alessandra', 'Giuseppe', 'Giuseppa']
let nomeInvitato = prompt('scrivi qui il tuo nome')
console.log(nomeInvitato)

let invitatoSi = false
for (let i = 0 ; i <= invitati.lenght ; i++){
    if(invitati[i]  === nomeInvitato){
    invitatoSi = true
    }
}

if(invitatoSi = true){
    console.log('Sei stato invitato')
}else{
    console.log('Non sei stato invitato')
}