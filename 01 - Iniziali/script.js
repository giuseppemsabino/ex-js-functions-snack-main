/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function takeInitial(names){

    return names.map(names => names.charAt(0));
}

// Invoca la funzione qui e stampa il risultato in console
const initial = takeInitial(names)
console.log(initial)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]