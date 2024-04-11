
function maior() {
    const num1 = parseInt(prompt("Digite o primeiro número:"));
    const num2 = parseInt(prompt("Digite o segundo número:"));
    const num3 = parseInt(prompt("Digite o terceiro número:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, insira números válidos.");
        maior();
        return;
    }
    return alert("O maior número é: " + Math.max(num1, num2, num3));
}

function ordenarCrescente() {
    const num1 = prompt("Digite o primeiro número:");
    const num2 = prompt("Digite o segundo número:");
    const num3 = prompt("Digite o terceiro número:");
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, insira números válidos.");
        ordemCrescente();
        return;
    }
    list = [num1, num2, num3]
    ordenar = list.sort(function (a, b) { return a - b });
    return alert("Em ordem fica:" + ordenar);
}

function palindromo() {
    const texto = prompt("Digite uma palavra");
    const maiusculo = texto.toUpperCase();
    const textoFormatado = texto.replace(/\s/g, '');
    const reverso = textoFormatado.split('').reverse().join('');
    if (textoFormatado === reverso) {
        return alert("Sim, são palindromos " + textoFormatado + " == " + reverso);
    }
    else {
        return alert("Não são palindromos")
    }
}

function triangulo() {
    const a = parseFloat(prompt("Digite o primeiro valor:"));
    const b = parseFloat(prompt("Digite o segundo valor:"));
    const c = parseFloat(prompt("Digite o terceiro valor:"));
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, insira números válidos.");
        triangulo();
        return;
    }
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return alert('Equilátero'); // Triângulo com lados iguais 

        } else if (a === b || b === c || a === c) {
            return alert('Isósceles'); // Triângulo com dois lados iguais
        } else {
            return alert('Escaleno');// Triângulo com lados diferentes
        }
    }
    else {
        return alert('Não forma um triangulo')
    }
}
