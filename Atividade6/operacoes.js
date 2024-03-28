function calcularOperacoes() {
    var num1 = parseFloat(prompt("Qual o primeiro número?"));
    var num2 = parseFloat(prompt("Qual o segundo número?"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        calcularOperacoes();
        return;
    }
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var produto = num1 * num2;
    var divisao = num1 / num2;
    var resto = num1 % num2;

    alert("Soma: " + soma +
        "\nSubtração: " + subtracao +
        "\nProduto: " + produto +
        "\nDivisão: " + divisao +
        "\nResto: " + resto);
}
window.onload = function () {
    var decisao = confirm("Clique em OK para iniciar - Operações Matemáticas");
    if (decisao) {
        calcularOperacoes();
    }
    else {
        alert("Operações Matemáticas canceladas.");
    }
};
