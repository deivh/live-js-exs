// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

function arrObj() {
  
}
function objCreate(boxCount) {
    var arrZucch = [
        {
            'varietà': 'my',
            'peso': 15,
            'lunghezza': 10
        },
        {
            'varietà': 'my',
            'peso': 15,
            'lunghezza': 10
        },
        {
            'varietà': 'my',
            'peso': 15,
            'lunghezza': 10
        },
        {
            'varietà': 'my',
            'peso': 15,
            'lunghezza': 10
        },
        {
            'varietà': 'my',
            'peso': 15,
            'lunghezza': 10
        }
    ]
    
    var sum = 0;
    for (var i=0; i<arrZucch.length; i++){
        sum += arrZucch[i].peso;
    }
    console.log(sum);
    
}
function init() {
    objCreate();
 
}
// JQUERY
$(document).ready(init);