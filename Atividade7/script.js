function jogar(escolhaDoJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaDoComputador = opcoes[Math.floor(Math.random() * opcoes.length)]; //aleatoriza e arredonda
    alert('Você escolheu ' + escolhaDoJogador + '. Aguarde, o Computador está escolhendo...')
    alert('E o computador escolheu... ' + escolhaDoComputador)

    if (escolhaDoJogador === escolhaDoComputador) {
        alert('Empate! Ambos escolheram ' + escolhaDoJogador + '.');
    } else if (
        (escolhaDoJogador === 'pedra' && escolhaDoComputador === 'tesoura') ||
        (escolhaDoJogador === 'papel' && escolhaDoComputador === 'pedra') ||
        (escolhaDoJogador === 'tesoura' && escolhaDoComputador === 'papel')
    ) {
        alert('Você GANHOU! ' + escolhaDoJogador + ' vence ' + escolhaDoComputador + '.');
    } else {
        alert('Você PERDEU! ' + escolhaDoComputador + ' vence ' + escolhaDoJogador + '.');
    }
}