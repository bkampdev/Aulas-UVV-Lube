const colors = require('colors');

function gerarnumeros() {
    var numeros = new Set();

    while (numeros.size < 6) {
        var numero = Math.floor(Math.random() * 60);
        numeros.add(numero);
    }

    numeros.forEach(function(numero) {
        console.log(numero);
    });
}

return gerarnumeros();