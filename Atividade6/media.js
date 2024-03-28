function calcularMedia() {
    var nome = prompt("Qual o nome do aluno?");
    nota1 = parseFloat(prompt("Qual a primeira nota?"));
    nota2 = parseFloat(prompt("Qual a segunda nota?"));
    nota3 = parseFloat(prompt("Qual a terceira nota?"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira notas válidas.");
        calcularMedia();
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3
    alert("A média do aluno " + nome + " é: " + media);

}
window.onload = function () {
    var decisao = confirm("Clique em OK para iniciar - Cálculo de Média");
    if (decisao) {
        calcularMedia();
    } else {
        alert("Cálculo da média cancelado.");
    }
};