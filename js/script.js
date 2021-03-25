// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

function arrObj() {
    var arr15 = [];
    var arrnot15 = [];
  for (var i=0; i<arrZucch.length; i++ ) {
      var zucch= arrZucch[i];
      if (zucch.lunghezza>15) {
          arr15.push(zucch);
      } else {
          arrnot15.push(zucch);
      }
  }
  console.log(arr15, arrnot15);
}
function objCreate(boxCount) {
    arrZucch = [
        {
            'varietà': 'my',
            'peso': 15,
            'lunghezza': 10
        },
        {
            'varietà': 'my',
            'peso': 7,
            'lunghezza': 7
        },
        {
            'varietà': 'my',
            'peso': 12,
            'lunghezza': 12
        },
        {
            'varietà': 'my',
            'peso': 10,
            'lunghezza': 18
        },
        {
            'varietà': 'my',
            'peso': 12,
            'lunghezza': 21
        },
        {
            'varietà': 'my',
            'peso': 15,
            'lunghezza': 10
        },
        {
            'varietà': 'my',
            'peso': 7,
            'lunghezza': 7
        },
        {
            'varietà': 'my',
            'peso': 12,
            'lunghezza': 12
        },
        {
            'varietà': 'my',
            'peso': 10,
            'lunghezza': 18
        },
        {
            'varietà': 'my',
            'peso': 12,
            'lunghezza': 21
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
    arrObj();
 
}
// JQUERY
$(document).ready(init);