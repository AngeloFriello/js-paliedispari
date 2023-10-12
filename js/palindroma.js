// - Chiedere all’utente di inserire una parola 
//     - crea un prompt per chiedere la parola
const wordUtent = prompt('inserisci una parola')
console.log(wordUtent)
// - Creare una funzione per capire se la parola inserita è palindroma
//     - creare una funzione
//     - trattare la stringa presa dal prompt come un array
//     - inserire la condizione che se la stringa invertita è uguale a la stringa scritta dall'utente la risposta e true
//     - inserire l'altra conidzione per cui e false 
function reverseString(parola) {
    // Usa il metodo split per restituire un nuovo array
    let splitString = parola.split("");
    console.log(splitString)
    // Usa il metodo reverse per invertire l'array appena creato
    let reverseArray = splitString.reverse();
    console.log(reverseArray)
    // Usa il metodo join per unire tutti gli elementi della stringa in un array
    let joinArray = reverseArray.join(""); 
    console.log(joinArray)
    // Restituisci la stringa invertita
    if(joinArray === parola){
        return true
    }else{
        return false
    }
}

reverseString(wordUtent);

if(reverseString(wordUtent)){
    console.log('la tua parola è palindroma')
}else{
    console.log('la tua parola non è palindroma')
}


