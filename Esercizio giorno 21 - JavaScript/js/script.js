/* 
    ESERCIZIO NUMERO 1
    Crea una classe per la creazione di oggetti di tipo "utente". Il suo costruttore dovrà inizzializzare ogni oggetto utente con i seguenti attributi:
    -firstNme
    -lastName
    -age
    -location

    Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Ad esempio, date istanze della classe utente "x" e "y" inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a "x è più vecchio di y" a seconda del risultato del confronto.
    
    Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

*/

class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    confronto(persona){
        if(this.age > persona.age){
            return this.firstName + " è più vecchio di " + persona.firstName;
        } else if (this.age < persona.age){
            return this.firstName + " è più giovane di " + persona.firstName;
        } else{
            return this.firstName + " ha la stessa età di " + persona.firstName;
        }
    }
}

let a = new User("Alessandro", "Baratti", 57, 'Roma');
let c = new User("Cristina", "Balducci", 57, "Roma");
let l = new User("Lavinia", "Baratti", 22, "Roma");

console.log(a.confronto(c));
console.log(c.confronto(l));
console.log(l.confronto(a));

/*
    ESERCIZIO NUMERO 2
    Crea un form per la creazione di oggetti "Pet" (animali domestici).
    La classe Pet dovrà essere dotata delle seguenti proprietà:

    -petName
    -ownerNme
    -speciers //(cane, gatto, coniglio ect.)
    -breed // (labrador, soriano, nano ect.)

    Nella classe utilizzerai per creare questi oggetti anche un metodo che restituisca true se due animali condividono lo stesso padrone.

    Crea, raccoglendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.
*/

class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    ownerNameTest(pet){
        if(pet.ownerName === this.ownerName){
            return true;
        } else {
            return false;
        }
    }
}

let p1 = new Pet("Nike", "Alessandra", "cane", 'labrador');
let p2 = new Pet("Olimpia", "Alessandra", "gatto", "soriano");

console.log(p1);
console.log(p2);
console.log(p1.ownerNameTest(p2)); //hanno la stessa padrona