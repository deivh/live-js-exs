// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

function stringRev(word) {
    wordReverse = word.split('').reverse().join('');
    return wordReverse; 
}
function init() {
    var word= prompt("Inserisci una parola");
    wordReverse = stringRev(word);
    console.log(wordReverse);
}
// JQUERY
$(document).ready(init);