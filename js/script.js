// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



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

let levelInputEl = document.getElementById("level-select");

const resetButtonEl = document.getElementById("reset-button")

// creo variabile per numero celle che voglio creare



// al click dell'utente sul button
buttonGridEl.addEventListener("click", function() {

    levelSelect = levelInputEl.value

    if(levelSelect == 1){
        //funzione che genera griglia tramite parametri di num celle e colonne
        generateGrid(100, 10);
        
        

    }else if(levelSelect == 2){
        //funzione che genera griglia tramite parametri di num celle e colonne
        generateGrid(81, 9);
    
    }else if(levelSelect == 3){
        //funzione che genera griglia tramite parametri di num celle e colonne
        generateGrid(49, 7);
    }
})



resetButtonEl.addEventListener("click", function() {
    containerGridEl.innerHTML = "";
})















// funzione che genera un elemento, gli assegna una classe "square"
function createSquare(text , numeroColonne) {

    // creare un elemento
    // dargli una classe
    let newElement = document.createElement('div');
    newElement.classList.add("square");
    newElement.style.width = `calc(100% / ${numeroColonne})`;
    newElement.style.height = `calc(100% / ${numeroColonne})`;

    newElement.innerText = text;
  
    return newElement;
  
}





function generateGrid(numberCells, numberColumns){
    for(let i = 1; i < numberCells + 1; i++){
    
           
        // creo varibile nuovo elemento che sarà uguale alle alla funzione per creare  l'elemento
        let newSquareElement = createSquare(i, numberColumns);
    
        // al click dell'utente su una cassella
        newSquareElement.addEventListener("click", function() {
            // aggiungo classe che colora l'elemento di azzurro
            newSquareElement.classList.toggle("azzurro");
        // scrivi un messagio in cosole relativo al numero di cella cliccata
            console.log(i);
        })
    
        //appendo nuovo elemento nel contenitore griglia
        containerGridEl.append(newSquareElement);
    }
}

