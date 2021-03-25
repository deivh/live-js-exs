function getRandomValue(min, max) {
    var localMin = min;
    var localMax = max - min + 1;
    return Math.floor(Math.random() * localMax) + localMin;
}
function addRandomValues() {
    $('.box').click(function() {
        var clickedBtn = $(this);
        var clickedSpan = clickedBtn.find('span');
        var isSpanVisible = clickedSpan.is(':visible');
        if (isSpanVisible) {
            clickedBtn.remove();
        } else {
            var clickedValue = clickedSpan.text();
            if (clickedValue % 2 == 0) {
                clickedBtn.toggleClass('bg-green');
            } else {
                clickedBtn.toggleClass('bg-red');
            }
            clickedSpan.toggle();
        }
    });
}
function boxGenerator(boxCount) {
    var boxes = $('.boxes');
    for (var i=0;i<boxCount;i++) {
        var rnd = getRandomValue(1, 100);
        boxes.append('<div class="box"><span class="text hide">' 
            + rnd + '</span></div>');
    }
}
function init() {
    var boxCount = parseInt(prompt('Dimmi il numero di quadratini'));
    boxGenerator(boxCount);
    addRandomValues();
}
// JQUERY
$(document).ready(init);