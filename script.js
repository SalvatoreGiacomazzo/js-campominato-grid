/* GRIGLIA DINAMICA
Inserisci, al click del bottone play, una griglia 10x10 con ogni casella numerata.
 Quando l'utente clicca su qualsiasi casella, la suddetta cambia colore.

*/

/*TODO LIST
Recupera gli elementi dal DOM.
Genera le griglie e numerale da 1 a 100.
Rendile visibili in pagina.
Aggiungi l'evento del click e cambio colore.
Programma il bottone alla funzione di far apparire la griglia.
*/

/*# MILESTONE 1 DONE
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata. 
#MILESTONE 2 DONE
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3 DONE
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4 DONE
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/

// Funzioni varie
const spawnCell = () => {
    const singleCell = document.createElement('div');
    singleCell.classList.add('cell');
    return singleCell;
};

//recupero elementi dal dom
const grid = document.getElementById('grid')
const playButton = document.getElementById('playbutton')

//altre opzioni di preparazione

const rowGrid = 10;
const colGrid = 10;
const fullGrid = rowGrid * colGrid;

//Imposto la grid inizialmente come invisibile

grid.style.display = 'none';

// ! Creazione delle celle con ciclo iterativo
for (let i = 0; i < fullGrid; i++ ){
    const singleCell = spawnCell(); // Creazione della cella tramite la funzione

    singleCell.textContent = i + 1;
  
    singleCell.addEventListener('click', function() { //Gestione della classe 'clicked'
        singleCell.classList.toggle('clicked');
        console.log(i + 1); //Stampa in console del numero al click come richiesto in traccia
    });
    grid.appendChild(singleCell) // Stampa in pagina
}
// ! Evento del click e apparizione della griglia

playButton.addEventListener('click', function () {
    grid.style.display = 'flex'; // Mostra la griglia cambiando lo stile display
});




