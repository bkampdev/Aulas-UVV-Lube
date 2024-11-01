const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o seu salário: ', (input) => {
    var salario = parseFloat(input);

    function calcularImpostos(salario) {
        var air = 0;
        if (salario <= 2559.20) {
            air = 0;
        } else if (salario > 2559.20 && salario <= 2826.65) {
            air = 0.075;
        } else if (salario > 2826.65 && salario <= 3751.05) {
            air = 0.15;
        } else if (salario > 3751.05 && salario <= 4664.68) {
            air = 0.225;
        } else if (salario > 4664.68) {
            air = 0.275;
        }
        var imposto = salario * air;
        return imposto;
    }
3
    console.log("O imposto calculado é: " + calcularImpostos(salario));
    rl.close();
});