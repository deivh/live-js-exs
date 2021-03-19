// TODO NOW
// - alert con "fine giro" dopo 10 secondi (setTimeout)
// - stampare in pagina cronometro che arriva a 10 secondi (setInterval)

// VERSIONE BASE (setTimeout)
// function readyMeal() {
//   alert('Pasta pronta!');
// }
// function init() {
//   var ms = parseInt(prompt('Quanti secondi mancano?')) * 1000;
//   setTimeout(readyMeal, ms)
// }
// VERSIONE COUNTDONW (setInterval)
// var sec;
// var clock;
// function tick() {
//   document.getElementById('text').innerHTML = sec--;
//   if (sec < 0) {
//     clearInterval(clock);
//     document.getElementById('text').innerHTML = 'Pasta pronta!';
//   }
// }
// function init() {
//   sec = parseInt(prompt('Quanti secondi mancano?'));
//   clock = setInterval(tick, 1000);
// }
// init();



//fine giro 
function lap() {
    alert('Fine giro!')
}

function initLap() {
    setTimeout(lap, 10000);
}


//cronometro
var clock;
var sec;
function tick(){
    document.getElementById('text').innerHTML = sec++;
    if (sec>10) {
        clearInterval(clock);
        document.getElementById('text').innerHTML = "Tempo scaduto!";
    }
}

function initCrono() {
    clock = setInterval(tick, 1000);
}
