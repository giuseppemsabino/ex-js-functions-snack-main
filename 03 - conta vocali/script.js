/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelNumber(str){

    const vowels= ['a','e','i','o','u']

    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}


// Invoca la funzione qui e stampa il risultato in console

const vowelsInside= vowelNumber(word);
console.log(vowelsInside);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)