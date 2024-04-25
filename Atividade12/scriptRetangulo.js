//ex 01
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.CalcularArea = function () {
        return this.base *this.altura
    }
}
//passando valores para parametros da função
var area = new Retangulo(prompt("Informe o valor da base: "), prompt("Informe o valor da altura: "));
alert("Cálculo da área: " + area.CalcularArea());