function gerarNumerosAleatorios() {
    // Cria um array de números de 1 a 60
    const listaNumeros = Array.from({ length: 60 }, (_, index) => index + 1);
    
    // Embaralha o array de números
    for (let i = listaNumeros.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [listaNumeros[i], listaNumeros[randomIndex]] = [listaNumeros[randomIndex], listaNumeros[i]];
    }
    
    // Seleciona os primeiros 6 números embaralhados
    return listaNumeros.slice(0, 6).sort((a, b) => a - b);
}

// Teste a função
console.log(gerarNumerosAleatorios());