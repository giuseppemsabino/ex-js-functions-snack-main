/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function namesWith(text){
    for (let i = 0; 1 < names.length; i++){
        const initial = names[i];
        if(initial.includes(text)){
            console.log(initial)
        }
    }

}

// Invoca la funzione qui e stampa il risultato in console

const userLetter = prompt('inserisci una lettera')
const namesValid = namesWith(userLetter);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]