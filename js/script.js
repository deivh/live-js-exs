// Creare un array di oggetti: ogni oggetto descriverà 
// una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.

function es(){
    let arr = [
        {
            'nome': 'Bruno',
            'peso': 22
        },
        {
            'nome': 'Massimo',
            'peso': 2
        },
        {
            'nome': 'Genny',
            'peso': 15
        },
        {
            'nome': 'ErnestoBruno',
            'peso': 65
        }
        
    ];
    let arrMin = arr[0].peso;
    for (let i=0; i<arr.length;i++) {
        
        if (arrMin > arr[i].peso) {
            arrMin = arr[i].peso;
            var selector = i;
        }
    }
    console.log(arr[selector])
}

function init() {
es();
}

$(document).ready(init)