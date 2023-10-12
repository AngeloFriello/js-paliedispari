// - chiediamo di inserire un numero da 1 a 5 all'utente
//     - creamo un prompt per chiedere all'utente il numero
const numeroUtente = prompt('scegli un numero da 1 a 5')
console.log(numeroUtente)
// - chiediamo di scegliere tra pari e dispari all'utente
//     - creamo un prompt per chiedere all'utente pari o dispari
const PariDispariUtente = prompt('scegli pari o dispari')
console.log(PariDispariUtente)
// - generiamo un numero random per il computer con una funzione
//     - creamo una funzione per generare un numero 
function numeroComputer(num){
    return Math.floor(Math.random()* 6)
}

numeroComputer()
const numPc = numeroComputer()
console.log(numPc)
// - sommiamo i due numeri
const somma = (numPc) + (numeroUtente)
console.log(somma)
// - stabiliamo se la somma e pari o dispari
//     - stabiliamo una condizione per decida in base alla somma e alla scelta dell'utente il vincitore
// - scegliamo il vincitore