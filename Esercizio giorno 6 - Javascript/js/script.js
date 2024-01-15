/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let num1 = 80;
let num2 = 10;

if(num1 > num2){
  console.log(num1);
} else if (num2 > num1){
  console.log(num2);
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let num3 = 10;

if (num3 !== 5) {
  console.log(num3 + " not equal");
}  */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let num4 = prompt("Inserisci un numero");

if (num4%5 == 0){
  console.log(num4 + " è divisibile per 5");
} else{
  console.log("Errore");
} */


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let num5 = 4;
let num6 = 12;
let sum = num5 + num6;
let dif = num6 - num5;
if (num5 == 8){
  console.log("Il num5 è uguale a 8");
} else if (num6 == 8){
  console.log("Il num6 è uguale a 8");
} else if (sum == 8 ){
  console.log("La somma è uguale a 8");
} else if (dif == 8){
  console.log("La sottrazione è uguale a 8");
} else {
  console.log("Nessuno dei numneri, somma e sottrazione è uguale a 8");
} */


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let totalShoppingCart = 20;
if (totalShoppingCart > 50){
  console.log("La spedizione è Gratuita");
}else {
  totalShoppingCart = totalShoppingCart + 10;
  console.log("Paghi la spedizione il totale è: " + totalShoppingCart);
} */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let totalShoppingCart = 100;
let totalescontato;
let totale;
totalescontato = (totalShoppingCart/100) * 20;
totale = totalShoppingCart - totalescontato;
if (totale > 50){
  console.log("La spedizione è Gratuita");
}else {
  totale = totale + 10;
  console.log("Paghi la spedizione il totale è: " + totale);
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let num7 = 4;
let num8 = 90;
let num9 = 30;
let num = [];
if (num7 > num8 && num8 > num9){
  num.push(num7);
  num.push(num8);
  num.push(num9);
}else if(num7 > num9 && num9 > num8){
  num.push(num7);
  num.push(num9);
  num.push(num8);
} else if (num8 > num7 && num7 > num9){
  num.push(num8);
  num.push(num7);
  num.push(num9);
} else if(num8 > num9 && num9 > num7){
  num.push(num8);
  num.push(num9);
  num.push(num7);
} else if (num9 > num8 && num8 > num7){
  num.push(num9);
  num.push(num8);
  num.push(num7);
} else {
  num.push(num9);
  num.push(num7);
  num.push(num8);
}
console.log(num);
*/



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/*let num10 = 10;
if(typeof num10 == 'number'){
  console.log(num10 + ' è un numero!');
} else {
  console.log(num10 + ' non un numero');
};*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let num11 = 17;
if (num11 %2 == 0){
  console.log("Il numero " + num11 + " è pari");
} else{
  console.log("Il numero " + num11 + " è dispari");
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let val = 1
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
 */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} */

/* SCRIVI QUI LA TUA RISPOSTA */  
/* const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}
console.log(me); */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}
delete me.lastName;
console.log(me); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
/* let number = [];
number.push(1);
number.push(2);
number.push(3);
number.push(4);
number.push(5);
number.push(6);
number.push(7);
number.push(8);
number.push(9);
number.push(10);
console.log(number); */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ //fatto
/* let number = [];
number.push(1);
number.push(2);
number.push(3);
number.push(4);
number.push(5);
number.push(6);
number.push(7);
number.push(8);
number.push(9);
number.push(10);
console.log(number);
number.splice(9, 9, 100); */
