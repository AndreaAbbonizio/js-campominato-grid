// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


/*
-creare variabile button
-creare variabile contenitore griglia
-creo funzione che genera elemento e gli assegna una classe 
-creo variabile per numero celle che voglio creare
-al click dell'utente sul button
    °creo ciclo for con variabile contatore che arrivi fino al numero di celle che voglio inserire
    °creo varibile nuovo elemento che sarà uguale alle alla funzione per creare  l'elemento
    °appendo nuovo elemento nel contenitore griglia
    -°al click dell'utente su una cassella
        °aggiungo classe che colora l'elemento di azzurro
        °scrivi un messagio in console relativo al numero di cella cliccata
*/

// creare variabile button
const buttonGridEl = document.getElementById("button-grid");

// creare variabile contenitore griglia
const containerGridEl = document.getElementById("grid-container");

// creo variabile per numero celle che voglio creare
let cellNumber = 100 ;


// al click dell'utente sul button
buttonGridEl.addEventListener("click", function() {

    // creo ciclo for con variabile contatore che arrivi fino al numero di celle che voglio inserire
    for(let i = 0; i < cellNumber; i++){

        // creo varibile nuovo elemento che sarà uguale alle alla funzione per creare  l'elemento
        let newSquareElement = createSquare(i);
        //appendo nuovo elemento nel contenitore griglia
        containerGridEl.append(newSquareElement);

        // al click dell'utente su una cassella
        newSquareElement.addEventListener("click", function() {
            // aggiungo classe che colora l'elemento di azzurro
            newSquareElement.classList.toggle("azzurro");
        // scrivi un messagio in cosole relativo al numero di cella cliccata
            console.log(i);
        })
    }
})



















// funzione che genera un elemento, gli assegna una classe "square"
function createSquare(text) {

    // creare un elemento
    // dargli una classe
    let newElement = document.createElement('div');
    newElement.classList.add("square");
  
    newElement.innerText = text;
  
    return newElement;
  
  }