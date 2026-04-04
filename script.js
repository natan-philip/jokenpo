const opcoesJogador = document.querySelectorAll('.card span');
const player = document.getElementById('player');
const alexa = document.getElementById('alexaIa');
const resultadoFinal = document.getElementById('resultado');
const btnResultado = document.querySelector('.resultado');
const placarJogador = document.getElementById('jogador');
const placarAlexa = document.getElementById('computador');

// funcao descobre qual foi o item clicado
function usuarioEscolha(event) {
    const jogador = event.currentTarget.textContent;
    resultadoFinal.innerHTML = ' Aguarde...';
    resultadoFinal.style.color = '#07a9f4';
    btnResultado.style.border = '1px solid #07a9f4';
    
    resultadoJogo(jogador);
}

// regras do jogo
const emoji = { '✊': 'R', '✋': 'P', '✌️': 'S' };
const regras = {
    'RR': 'Empate', 'RP': 'Alexa', 'RS': 'Você',
    'PP': 'Empate', 'PR': 'Você', 'PS': 'Alexa',
    'SS': 'Empate', 'SR': 'Alexa', 'SP': 'Você'
}

// o computador escolhe uma opção aleatória
let opcoes = ['✊', '✋', '✌️'];
// função que escolhe uma opção aleatória
function escolhaAlexa() {
    let numeroAleatorio = Math.floor(Math.random() * opcoes.length);
    return opcoes[numeroAleatorio];
}
// mostrar a pontuação do jogador e da Alexa
let pontosJogador = 0;
let pontosAlexa = 0;

// função que mostra o resultado na telo do usuário
function resultadoJogo(escolhaJogador) {
    const escolhaAlexaIa = escolhaAlexa();
    // resetar o resultado do jogo antes de começar
    player.innerHTML = opcoes[0];
    alexa.innerHTML = opcoes[0];

    // animação do resultado espera 1.5s
    setTimeout(() => {
        player.innerHTML = escolhaJogador;
        alexa.innerHTML = escolhaAlexaIa;

        const resultado = regras[emoji[escolhaJogador] + emoji[escolhaAlexaIa]];
        console.log(resultado);
        resultadoFinal.innerHTML = resultado + ' venceu';

        if (resultado === 'Você') {
            resultadoFinal.style.color = '#42E062';
            btnResultado.style.border = '1px solid #42E062';
            pontosJogador++;
            placarJogador.innerHTML = pontosJogador < 10 ? '0' + pontosJogador : pontosJogador;

        } else if (resultado === 'Alexa') {
            resultadoFinal.style.color = '#E5362B';
            btnResultado.style.border = '1px solid #E5362B';
            pontosAlexa++;
            placarAlexa.innerHTML = pontosAlexa < 10 ? '0' + pontosAlexa : pontosAlexa;

        } else if (resultado === 'Empate') {
            resultadoFinal.innerHTML = resultado;
            resultadoFinal.style.color = '#b13ef9b9';
            btnResultado.style.border = '1px solid #b13ef9b9';
        }
    }, 1500);

}

// descobre qual opção o usuário escolheu e gurda na varialvel da funcao
opcoesJogador.forEach(icone => {
    icone.addEventListener('click', usuarioEscolha)
})