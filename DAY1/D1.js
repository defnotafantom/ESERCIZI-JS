/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

console.log("Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.")
console.log("Esistono diversi tipi di datatype che vengono usati in javascript, che essendo un linguaggio fortemente atipizzato, cerca di generalizzare e accondiscendere i datatype piu specifici. Essi possono essere: Di tipo numero, che possono contenere qualsiasi tipo di numero, intero (Senza virgola), o decimale (con virgola), purché essi non vengono rinchiusi da apici o doppi apici. Di tipo stringa, che possono contenere caratteri o una serie di caratteri, purchè essi vengano rinchiusi tra apici o doppi apici. Di tipo booleano, sono dei valori standard, 1 o 0, vero o falso, ci indicano se un'affermazione o per esempio una condizione, è vera o falsa. Se messi tra apici o doppi apici, ottengono un valore numerico: 1 se è vero, 0 se è falso. Altrimenti assumeranno il valore numerico: 1 e 0.");


console.log("Crea una variable chiamata myName e assegna ad essa il tuo nome, sotto forma di stringa");
 let myName = "Daniele";
 console.log(myName);

console.log("Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20");
 let num1 = 12;
 let num2 = 20;
 console.log(num1+=num2);

console.log("Crea una variable di nome x e assegna ad essa il numero 12.");
let x = 12;

console.log("Riassegna un nuovo valore alla variabile myName già esistente: il tuo cognome. Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.");
myName = "Bucca";
console.log("La variabile myName ha il valore di:")
console.log(myName);
console.log("Creo una costante chiamata myName col valore appena assegnato.")
const myName = "Bucca"
console.log(myName);
console.log("Adesso riassegno ad essa il valore di partenza che era Daniele.")
myName = "Daniele";
console.log("myName");
const imageUrl= "https://imgur.com/a/9LTpLdk";
console.log(imageUrl);

console.log("Esegui una sottrazione tra i numeri 4 e la variable x appena dichiarata che contiene il numero 12");
console.log(4-x);

 console.log("Crea due variabili: name1 e name2. Assegna a name1 la stringa john, e assegna a name2 la stringa John con la J maiuscola!. Verifica che name1 sia diversa da name2 suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa");
 console.log("EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase senza cambiare il valore di name2!");

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);

if ((name1.charAt(0).toUpperCase() + name1.slice(1)))
  console.log("true"); 
else {
   console.log("false");
  }
