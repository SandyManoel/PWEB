//inicializar variaveis
const idades = [];
const sexos = [];
const opinioes = [];

window.onload = function () {
  var decisao = confirm("Clique em OK para iniciar pesquisa do filme");
  if (decisao) {
    for (let respostas = 0; respostas < 2; respostas++) {
      const idade = parseInt(prompt("Digite a idade da pessoa:"));
      const sexo = prompt("Digite o sexo (M/F):");
      const opiniao = parseInt(prompt("Digite a opinião (1=Péssimo, 2=Regular, 3=Bom, 4=Ótimo):"));
      //colocar nas arrays
      idades.push(idade);
      sexos.push(sexo);
      opinioes.push(opiniao);
    }
  }
  else {
    alert("Pesquisa cancelada!");
  }

}

function media() {
  const totalIdades = idades.reduce((acc, idade) => acc + idade, 0); //arrow function
  const media = totalIdades / idades.length;
  alert(`Média de idade: ${media.toFixed(2)} anos`);
}

function pessoaMaisVelha() {
  const idadeMaisVelha = Math.max(...idades);
  alert(`Idade da pessoa mais velha: ${idadeMaisVelha} anos`);
}

function pessoaMaisNova() {
  const idadeMaisNova = Math.min(...idades);
  alert(`Idade da pessoa mais nova: ${idadeMaisNova} anos`);
}

function quantidadePessimo() {
  const quantidadePessimo = opinioes.filter(opiniao => opiniao === 1).length;
  alert(`Quantidade de pessoas que responderam "péssimo": ${quantidadePessimo}`);
}

function porcentagemOtimoBom() {
  const otimoBomCount = opinioes.filter(opiniao => opiniao === 4 || opiniao === 3).length;
  const porcentagem = (otimoBomCount / opinioes.length) * 100; //calculo
  alert(`Porcentagem de pessoas que responderam "ótimo" e "bom": ${porcentagem.toFixed(2)}%`);
}

function numeroMulheresHomens() {
  const mulheres = sexos.filter(sexo => sexo.toUpperCase() === 'F').length;  //usando arrow function
  const homens = sexos.filter(sexo => sexo.toUpperCase() === 'M').length;
  alert(`Número de mulheres: ${mulheres}\nNúmero de homens: ${homens}`);
}