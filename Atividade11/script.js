
//criando objeto de forma literal
var objFuncionario = {
    matricula: "1234",
    nome : "Pedro", 
    função: "Atendente"
    };
alert (`OBJETO LITERAL\nMatrícula: ${objFuncionario.matricula}\nNome: ${objFuncionario.nome}\nFunção: ${objFuncionario.função}`)


//usando construtor new Object
var objFuncionario2 = new Object(); // usando construtor
objFuncionario2.matricula = "1235";
objFuncionario2.nome = "Paulo"
objFuncionario2.função = "Gerente"; 
alert (`OBJETO USANDO NEW OBJECT( )\nMatrícula: ${objFuncionario2.matricula}\nNome: ${objFuncionario2.nome}\nFunção: ${objFuncionario2.função}`)

//ou similiar a new object usando {}
var objFuncionario3 = {};
objFuncionario3.matricula = "1236";
objFuncionario3["nome"] = "Ana";
objFuncionario3.função = "Vendedora"; 
alert (`OBJETO USANDO { }\nMatrícula: ${objFuncionario3.matricula}\nNome: ${objFuncionario3.nome}\nFunção: ${objFuncionario3.função}`)

//usando função construtora
function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao=funcao;
    this.MostraDados = function () {
        return "OBJETO USANDO FUNÇÃO CONSTRUTORA\nMatricula: " + this.matricula + "\nNome: " +
            this.nome + "\nFunção: " + this.funcao;
    }
}
//passando valores para parametros da função
var funcionario4 = new Funcionario("1237", "Francine","Recepcionista" );
alert(funcionario4.MostraDados());

// funcao construtora sem parâmetros
function Funcionario2() {
    var matricula; 
    var nome;
    this.setMatricula = function (value) {
        this.matricula = value;
    }
    this.getMatricula = function () {
        return this.matricula;
    }
    this.setNome = function (value) {
        this.nome = value;
    }
    this.getNome = function () {
        return this.nome;
    }
    this.setFuncao = function (value) {
        this.funcao = value;
    }

    this.getFuncao = function () {
        return this.funcao;
    }
}

var funcionario6 = new Funcionario2();
funcionario6.setNome("Carol");
funcionario6.setMatricula("1239");
funcionario6.setFuncao("Atendente");
alert("OBJETO FUNÇÃO SEM PARÂMETROS\nMatrícula: " + funcionario6.getMatricula() + "\nNome: " +
funcionario6.getNome() + "\nFunção: " + funcionario6.getFuncao());