function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'bgClass': 'bg-red',
            'clickCounter': 0
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
            }
        }
    });
}

function init() {
    initVue();
    // initJQuery();
}
$(init);