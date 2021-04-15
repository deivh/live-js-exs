function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'img1' : true,
            'clickCounter': 0,
            'numbers': 10,
            'rest': 0
        },
        methods: {
            colorChanger: function() {
                if (this.bgClass == 'bg-red') {
                    this.bgClass = 'bg-green';
                } else {
                    this.bgClass = 'bg-red';
                }
            },
            clickCount: function() {
                this.clickCounter +=1;
            },
            numbersPair: function() {
                numbers = [];
                for (let i=1; i<this.numbers;i++) {
                    number = i;
                    if (i%2==0) {
                        numbers.push(number)
                    }
                }
                console.log(numbers);
                return numbers;
            },
            flipValue: function(){
                this.res = this.res == 1 ? 0 : 1;
            }
        }
    });
}

function init() {
    initVue();
    // initJQuery();
}
$(init);