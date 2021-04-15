// TODO NOW: modificare l'esercizio in modo da generare box 
// sempre dello stesso colore ma riportanti la cifra scaricata dalla seguente API

function addClickListener() {
    const btn = $('#btn');
    btn.click(boxGenerator);
}
function boxGenerator() {
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data) {
            const num = data.response;
            const res = true;
            generateBox(res, num);
        },
        error: function() {
            console.log('error');
        }
    });
}
function generateBox(type, num) {
    const target = $('#target');
    if (type) {
        target.append('<div class="box bg-red">', + num ,'</div>');
    } else {
        target.append('<div class="box bg-green"></div>');
    }
}
function init() {
   addClickListener();
}
document.addEventListener('DOMContentLoaded', init);