// attraverso vue&axios scaricare 10 numeri interi e produrre le box
// corrispondenti, colorandone il bg verde nel caso di numeri pari
// e rossi nel caso di numeri dispari
function initVue() {
    new Vue({
        el: '#app',
        data: {
            values: []
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers',
                {
                    params: {
                        min: 1,
                        max: 100,
                        items: 10
                    }
                })
                .then(data => {
                    // STRATEGIA 1
                    // this.values = data.data.response;
                    // STRATEGIA 2
                    const values = data.data.response;
                    for (let i=0;i<values.length;i++) {
                        const value = values[i];
                        const isPair = value % 2 == 0;
                        this.values.push({
                            value,
                            class: isPair ? 'bg-green' : 'bg-red'
                        });
                    }
                })
                .catch(() => console.log('error'));
        }
    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);