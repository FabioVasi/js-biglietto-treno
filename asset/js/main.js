/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km).
va applicato uno sconto del 20% per i minorenni.
va applicato uno sconto del 40% per gli over 65.

Strumenti.

- prompt
- console log
- number
- condition
- Math.random
- Math.floor
- Math.ceil
- const
- let
- if
- else
- document.getElementById

*/

// chiedere numero di chilometri da percorrere

const chilometri = Number(prompt('Quanti chilometri devi percorrere al costo di 0.21 € ?'));

// chiedere l'età dell'utente

const età = Number(prompt('Quanti anni hai?'));

console.log(chilometri, età);

// applicare il 20% di sconto per i minorenni

const minorenne = 18

// applicare il 40% di sconto per gli over 65

const over65 = 65

// calcolare il prezzo del viaggio

let prezzoDiViaggio = chilometri * 0.21;

console.log(prezzoDiViaggio);

// stampare il messaggio con il prezzo in console includendo anche due cifre decimali



// stampare il messaggio con il prezzo in pagina includendo anche due cifre decimali


