//ex2
class Conta {
    constructor(){
        this._nomeCorrentista;
        this._banco;
        this._numConta;
        this._saldo;
    }
    setNome(value){
        this._nomeCorrentista = value;
    }
    getNome(){
        return this._nomeCorrentista;
    }
    setBanco(value){
        this._banco = value;
    }
    getBanco(){
        return this._banco;
    }
    setnumConta(value){
        this._numConta = value;
    }
    getnumConta(){
        return this._numConta;
    }
    setSaldo(value){
        this._saldo = value;
    }
    getSaldo(){
        return this._saldo;
    }
}
//herança
class Corrente extends Conta{
    constructor(){
        super(); //herda
        this._saldoEspecial;
    }
    setSaldoEspecial(value){
        this._saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this._saldoEspecial;
    }
}
//herança
class Poupanca extends Conta{
    constructor(){
        super(); //herda
        this._juros;
        this._dataVenc;
    }
    setJuros(value){
        this._juros = value;
    }
    getJuros(){
        return this._juros;
    }
    setDataVenc(value){
        this._dataVenc = value;
    }
    getDataVenc(){
        return this._dataVenc;
    }
}
//pede para usuario inserir dados
alert("Insira os dados referente a conta CORRENTE: ");
var nomeCorrentista1 = prompt("Informe o nome: ");
var bancoCorrentista1 = prompt("Informe o banco: ");
var numContaCorrentista1 = prompt("Informe o número da conta: ");
var saldoCorrentista1 = prompt("Informe o saldo: ");
var saldoEspecialCorrentista1 = prompt("Informe o saldo especial: ");

//seta dados e exibe
var objCorrente = new Corrente();
    objCorrente.setNome(nomeCorrentista1);
    objCorrente.setBanco(bancoCorrentista1);
    objCorrente.setnumConta(numContaCorrentista1);
    objCorrente.setSaldo(saldoCorrentista1);
    objCorrente.setSaldoEspecial(saldoEspecialCorrentista1);
    alert(`CONTA CORRENTE:\n
    Nome: ${objCorrente.getNome()}
    Banco: ${objCorrente.getBanco()} 
    Número da conta: ${objCorrente.getnumConta()}
    Saldo: ${objCorrente.getSaldo()} 
    Saldo Especial: ${objCorrente.getSaldoEspecial()}
    `);

//pede para usuario inserir dados poupancista
alert("Insira os dados referente a conta POUPANÇA: ");
var nomePoup = prompt("Informe o nome: ");
var bancoPoup = prompt("Informe o banco: ");
var numContaPoup = prompt("Informe o número da conta: ");
var saldoPoup = prompt("Informe o saldo: ");
var jurosPoup = prompt("Informe a taxa de juros: ");
var dataVencPoup = prompt("Informe a data de vencimento: ");

//seta dados e exibe
var objPoupanca = new Poupanca();
    objPoupanca.setNome(nomePoup);
    objPoupanca.setBanco(bancoPoup);
    objPoupanca.setnumConta(numContaCorrentista1);
    objPoupanca.setSaldo(saldoPoup);
    objPoupanca.setJuros(jurosPoup);
    objPoupanca.setDataVenc(dataVencPoup);
    alert(`CONTA POUPANÇA:\n
    Nome: ${objPoupanca.getNome()}
    Banco: ${objPoupanca.getBanco()} 
    Número da conta: ${objPoupanca.getnumConta()}
    Saldo: ${objPoupanca.getSaldo()} 
    Juros: ${objPoupanca.getJuros()}
    Data de vencimento: ${objPoupanca.getDataVenc()}
    `);