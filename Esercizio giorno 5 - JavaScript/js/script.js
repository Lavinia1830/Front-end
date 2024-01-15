/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa = "Sono una stringa"; //Una stringa è un testo
let numero = 25; //sono sun numero
let booleano = true; //Booleano è un valore che assumere True o False
let nullo = null; //un valore nullo o vuoto o non edentificato
let und = undefined; //il valore non gli è stato assegnato.
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Lavinia";
console.log(name);
//console.log("Questo è il mio nome: " + name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num1 = 12;
var num2 = 20;
var somma = num1 + num2;
console.log(somma);
//console.log("La somma tra " + num1 + " e " + num2 + " è: " + somma); //concateno 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;
console.log(x);
//let x; dichiarazione
//x = 12; inizializzazione
//console.log("Il valore della variabile x è: " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Baratti"; 
console.log(name);
//const cognome = "Rossi";
//console.log("Il valore della costante cognome è: + cognome");
//cognome = "Verdi"; //ERRORE se assegnalo una costante al cognome = "rossi" non si può riassegnare un'altra variabile

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x -= 4;
console.log(x);
//let diff = x - 4
//console.log("La differenza tra il valore contenuto nella variabile x e 4 è: " + diff);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = "john";
var name2 = "John";
//let name1, name2;
// console.log(name1 === name2);  //false
console.log(name1 === name2.toLowerCase()); //true
//console.log("Il valore della variabile name1: " + name1 + "e la variabile name2: " + name2 + " è uguale? " + (name1 === name2));
//console.log("Il valore della variabile name1: " + name1 + "e la variabile name2: " + name2.toLowerCase() + " è uguale? " + (name1 === name2.toLowerCase()));
