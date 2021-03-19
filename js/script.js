// GOAL: associare evento ai bottoni 
// + e - in modo da far variare il numero al centro di +/- 1
function randomColor() {
    var back = ["#ff0000","blue","gray","yellow", "green" , "greenyellow", "purple" ,"pink", "violet" ];
    var rand = back[Math.floor(Math.random() * back.length)];
    return rand;
}

function decreasew() {
    var valueClick =$('#targetw').text();
    valueClick--;
    $('#circle').css('width', (valueClick * 10) + 'px');
    $('#circle').css('background', randomColor)
    
    // $('#circle').css('height', valCircle);
    if (valueClick<0) {
        alert("COSA STAI FACENDO FOLLE NON ESISTE NULLA SOTTO LO ZERO");
        valueClick = 0;
    }
    $("#targetw").text(valueClick);

} 

function increasew() {
    var valueClick =$('#targetw').text();
    valueClick++;
    $('#circle').css('width', (valueClick * 10) + 'px');
    $('#circle').css('background', randomColor)
    // $('#circle').css('height', valCircle);
    if (valueClick>20) {
        alert("COSA STAI FACENDO *scemino* NON ESISTE NULLA SOPRA IL VENTI");
        valueClick = 20;
    }
    $("#targetw").text(valueClick);
}

function decreaseh() {
    var valueClick =$('#targeth').text();
    valueClick--;
    $('#circle').css('height', (valueClick * 10) + 'px');
    $('#circle').css('background', randomColor)
    // $('#circle').css('height', valCircle);
    if (valueClick < 0) {
        alert("COSA STAI FACENDO FOLLE NON ESISTE NULLA SOTTO LO ZERO");
        valueClick = 0;
    }
    $("#target").text(valueClick);

} 

function increaseh() {
    var valueClick =$('#targeth').text();
    valueClick++;
    $('#circle').css('height', (valueClick * 10) + 'px');
    $('#circle').css('background', randomColor)
    // $('#circle').css('height', valCircle);
    if (valueClick>20) {
        alert("COSA STAI FACENDO *scemino* NON ESISTE NULLA SOPRA IL VENTI");
        valueClick = 20;
    }
    $("#targeth").text(valueClick);
}


function init(value) {
    $('#circle').css('width', '100px');
    $('#circle').css('height', '100px');
    $('#minush').click(decreaseh);
    $('#plush').click(increaseh);
    $('#targeth').text(value);
    $('#minusw').click(decreasew);
    $('#plusw').click(increasew);
    $('#targetw').text(value);

}

value = 10;
init(value);


// GOAL: ridimensionare in larghezza ed altezza il cerchio alla pressione dei tasti + e -