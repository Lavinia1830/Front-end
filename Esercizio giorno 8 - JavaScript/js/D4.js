/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    let a = l1*l2;
    console.log(a);
}
area(10, 5);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2){
    let som = num1 + num2;
    console.log("La somma è: " + som);
    if(num1 === num2){
        som = som * 3;
        console.log("La Somma triplata è: " + som);
    }
    
}
crazySum(7, 7);


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num1, num2) {
    if (num1 > num2){
        let diff = num1 - num2;
        console.log("La differenza è: " + diff);
        if(num1 > 19){
        diff = diff * 3;
        console.log("La differenza moltiplicata per 3 è :" + diff);
    }
    } else if (num1 < num2){
        let diff = num1 - num2;
        console.log("La differenza è: " + Math.abs(diff));
    }
}
crazyDiff(30, 19);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if ( n > 20 && n <= 100 || n === 400){
        return console.log(true);
    }
}
boundary(101);



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string){
    console.log(string.toLowerCase());
}
epify("EPICODE");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n){
    if(n % 3 === 0){
        console.log(n + " è un multiplo di 3");
    }else if(n % 7 === 0){
        console.log(n + " è un multiplo di 7");
    } else {
        console.log("Errore");
    }
}
check3and7(27)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
    var splitString = string.split(""); 
    console.log(splitString);
    var reverseArray = splitString.reverse();
    console.log(reverseArray);
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}
reverseString("EPICODE");
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = [];
      for (const word of words) {
        if (word.length > 0) {
          const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
          capitalizedWords.push(capitalizedWord);
        }
      }
    return capitalizedWords.join(' ');
    }
    const inputString = "questa è una stringa di esempio";
    const result1 = upperFirst(inputString);
    console.log(result1);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string1) {
    return string1.slice(1, -1);
}
const result = cutString ("HELLO WORLD");
console.log(result);


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    var randomNumbers = [];
    for (let i = 0; i < n; i++) {
      var randomNumber = Math.floor(Math.random() * 11);
      randomNumbers.push(randomNumber); 
    }
    return randomNumbers;
  }
  

var n = 5;
var randomArray = giveMeRandom(n);
console.log(randomArray);