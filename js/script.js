// Scrivi una funzione che fonda due array (aventi lo stesso
//     numero di elementi) prendendo alternativamente gli
//     elementi da uno e dall'altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function fusion() {
    var arr1 = ['a','b','c'];
    var arr2 = [1,2,3];
    var fuseArr = [];
    for (i=0; i<arr1.length; i++) {
       var a1 = arr1[i];
       var a2 = arr2[i];
        fuseArr.push(a1);
        fuseArr.push(a2);
    }
    console.log(fuseArr)
}
function init() {
    fusion();
}
// JQUERY
$(document).ready(init);