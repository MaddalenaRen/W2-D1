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
//I principali datatype di Java sono: String, Number, Boolean, Undefined e Null
// String: un tipo di dato che può essere costituito da lettere, numeri (alfanumerico) ed è racchiusto sempre tra o virgolette o apici ("Marco" "123456789")
//Number: un tipo di dato che è costituito da numeri ineri o decimali e non sono racchiusi tra virgolette o apici (10, 750, 6.5)
//Boolean: un tipo di dato che esprime se un valore è True (vero) o False(falso) in base a determinate condizioni (10>5 True; 10<5 False)
//Undefined: viene assegnata a una variabile dichiarata, ma a cui non è stato assegnato un valore.
//Null:segnala l'assenza intenzionale di un valore, indica una mancanza di identificazione.



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Maddalena";

console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA  */
let x = 12;
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Rennella";
const number3 = 25;

console.log(myName);
console.log(number3);

//number3 = 15;
console.log(number3);




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

*/

/* SCRIVI QUI LA TUA RISPOSTA */

//
let y = 4;
x = 12;
let result = y - x;
console.log(result)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase())


