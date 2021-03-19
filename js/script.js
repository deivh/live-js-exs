// GOAL: associare evento ai bottoni 
// + e - in modo da far variare il numero al centro di +/- 1
function decrease() {
    var valueClick =$('#target').text();
    valueClick--;
    if (valueClick<0) {
        alert("COSA STAI FACENDO FOLLE NON ESISTE NULLA SOTTO LO ZERO");
        valueClick = 0;
    }
    $("#target").text(valueClick);

} 

function increase() {
    var valueClick =$('#target').text();
    valueClick++;
    
    if (valueClick>20) {
        alert("COSA STAI FACENDO *scemino* NON ESISTE NULLA SOPRA IL VENTI");
        valueClick = 20;
    }
    $("#target").text(valueClick);
}


function init(value) {
$('#minus').click(decrease);
$('#plus').click(increase);
$('#target').text(value);
}

value = 10;
init(value);


